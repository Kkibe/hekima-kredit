import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { increment } from "firebase/database";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, updateDoc, where, orderBy, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDw1QZnLlEWLOwk54uOTf5V6393KqAv6UY",
  authDomain: "taxa-ca7ec.firebaseapp.com",
  projectId: "taxa-ca7ec",
  storageBucket: "taxa-ca7ec.appspot.com",
  messagingSenderId: "66856931301",
  appId: "1:66856931301:web:ee653d801cf12d2c9ca90c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

export const signInUser = (email, password, setError) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return;
}

export const createUser = (email, password, setError) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
}


export const addContact = async (data, setSuccess, setError) => {
  const contactsDocRef = collection(db, "contacts");
  await addDoc(contactsDocRef, { ...data, responded: false }).then(async (userCredential) => {
    setSuccess("We will get back to you as soon as possible.")
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
};

export const addMailList = async (data, setSuccess, setError) => {
  const mailDocRef = doc(db, "mail-list", data.email);
  const mailDoc = await getDoc(mailDocRef);
  if (mailDoc.exists()) {
    return setError("The email already exists! Try a new one");
  }
  await setDoc(mailDocRef, { ...data }).then(async (response) => {
    setSuccess("You are now subscribe to our newsletter.")
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return;
};