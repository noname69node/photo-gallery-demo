import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase.config";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

// Creating User in firestore
const createUser = async (uid, fullname, email) => {
  try {
    const newUserRef = await addDoc(usersCollectionRef, {
      fullname,
      email,
      userId: uid,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  if (auth?.currentUser?.uid) {
    const q = query(
      usersCollectionRef,
      where("userId", "==", auth.currentUser.uid),
      limit(1)
    );

    const snapshot = await getDocs(q).catch((error) => console.log(error));
    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return data[0];
  }
};

export const register = async (data, errorCallback) => {
  console.log(
    `run register with: ${data.fullname} ${data.email} ${data.password}`
  );
  const { email, password, fullname } = data;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await createUser(user.uid, fullname, email);
    })
    .catch((error) => {
      errorCallback({ firebase: error.message });
    });
};

export const login = async (data, errorCallback) => {
  console.log(`run login with: ${data.email} ${data.password}`);
  const { email, password } = data;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Logged successfuly");
    })
    .catch((error) => {
      errorCallback({ firebase: error.message });
    });
};

export const resetPassword = async ({ email }, errorCallback) => {
  await sendPasswordResetEmail(auth, email).catch((error) =>
    errorCallback(error.message)
  );
};

export const logout = async () => {
  return signOut(auth);
};
