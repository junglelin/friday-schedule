<script setup lang="ts">
import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import { ref } from "vue";

interface FileEvent {
  files: File | File[];
}

interface FileInfo {
  name: string;
  width: number;
  height: number;
  size: string;
}

const resizedFilesInfo = ref<FileInfo[]>([]);
const resizedFilesUrls = ref<string[]>([]);

const formatSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const emit = defineEmits(["upload-complete", "file-count-change"]);

const onSelectedFiles = async (event: FileEvent) => {
  const files: File[] = Array.isArray(event.files)
    ? event.files
    : [event.files];

  const resizedFiles: File[] = await resizeImages(files);

  // 输出压缩后文件信息
  resizedFilesInfo.value = [];
  resizedFilesUrls.value = [];
  const resizedPromises = resizedFiles.map((file) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        const fileInfo: FileInfo = {
          name: file.name,
          width: img.width,
          height: img.height,
          size: fileSizeInMB + " MB",
        };
        resizedFilesInfo.value.push(fileInfo);
        resizedFilesUrls.value.push(img.src);
        resolve();
      };
    });
  });

  await Promise.all(resizedPromises);

  // 回傳檔案給父組件
  emit("upload-complete", resizedFiles);
};

const resizeImages = async (files: File[]): Promise<File[]> => {
  const resizedFiles: File[] = [];
  for (const file of files) {
    const resizedFile: File = await resizeImage(file);
    resizedFiles.push(resizedFile);
  }
  return resizedFiles;
};

const resizeImage = async (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const maxWidth = 512; // 最大宽度
      const maxHeight = 512; // 最大高度
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }

      let width = img.width;
      let height = img.height;

      // 按比例缩放
      if (width > maxWidth) {
        height = Math.round(height * (maxWidth / width));
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = Math.round(width * (maxHeight / height));
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // 使用 toBlob 压缩图像
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Failed to create Blob from canvas"));
            return;
          }
          const resizedFileName = `resized-${file.name}`;
          const resizedFile = new File([blob], resizedFileName, {
            type: file.type,
          });
          console.log(
            `Resized file: ${resizedFile.name}, size: ${resizedFile.size}`
          );
          resolve(resizedFile);
        },
        file.type,
        0.8 // 压缩质量（0 到 1）
      );
    };

    img.onerror = () => reject(new Error("Failed to load image"));
  });
};
</script>

<template>
  <FileUpload
    name="demo[]"
    :multiple="true"
    accept="image/*"
    :maxFileSize="5000000"
    :fileLimit="5"
    @select="onSelectedFiles"
  >
    <template #header="{ chooseCallback, files }">
      <div>
        <Button @click="chooseCallback()">選擇圖片</Button>
        <span>已選擇 {{ files.length }} 個檔案</span>
      </div>
    </template>

    <template #content="{ files, removeFileCallback }">
      <div class="gap-3">
        <div
          v-for="(file, index) in files"
          :key="file.name + file.size"
          class="grid grid-cols-[100px_1fr_1fr_50px] gap-1 border border-dashed border-zinc-500 rounded-lg p-2 justify-center items-center"
        >
          <div>
            <div
              class="aspect-square bg-center bg-no-repeat bg-cover rounded-lg"
              :style="`background-image: url('${resizedFilesUrls[index]}')`"
            ></div>
          </div>
          <div>{{ file.name }}</div>
          <div>{{ formatSize(file.size) }}</div>
          <Button
            icon="pi pi-times"
            @click="removeFileCallback(index)"
            outlined
            rounded
            severity="danger"
          />
        </div>
      </div>
    </template>

    <template #empty>
      <span>建議最多選擇 5 個檔案</span>
    </template>
  </FileUpload>
</template>
