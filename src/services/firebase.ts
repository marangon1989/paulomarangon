import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from './firebaseConfig';

const db = getFirestore(app);

export const addData = async (collectionName: string, data: object) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const readData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const dataArray: any[] = [];
  querySnapshot.forEach((doc) => {
    dataArray.push(doc.data());
  });
  return dataArray;
};
