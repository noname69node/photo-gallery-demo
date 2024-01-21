import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase.config";

const photosCollectionRef = collection(db, "photos");

export const getAllUserPhotos = async (userId, callback) => {
  try {
    let data;
    const q = query(photosCollectionRef, where("userId", "==", userId));
    onSnapshot(q, (snapshot) => {
      data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      callback(data);
    });
  } catch (error) {
    console.log("Get photos erro:" + error);
  }
};

// Creating Photo in firestore
export const addPhoto = async (userId, url) => {
  try {
    const newPhotoRef = await addDoc(photosCollectionRef, {
      userId,
      url,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePhoto = async (pid) => {
  const photosDocRef = doc(photosCollectionRef, pid);
  await deleteDoc(photosDocRef).catch((e) => console.log(e));
};
