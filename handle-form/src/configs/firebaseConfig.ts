import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtCsFVRRFv3ZuxKUDlHAalw5p4sqq8omw",
  authDomain: "react-crud-f08f6.firebaseapp.com",
  projectId: "react-crud-f08f6",
  storageBucket: "react-crud-f08f6.appspot.com",
  messagingSenderId: "879395370080",
  appId: "1:879395370080:web:201acb80688aa53f5e3f05",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
