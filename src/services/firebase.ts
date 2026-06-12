import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_5BASE_API_KEY,
  projectId: import.meta.env.VITE_5BASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_5BASE_PROJECT_ID}.firebasestorage.app`,
};

export const setupFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(setupFirebase);
