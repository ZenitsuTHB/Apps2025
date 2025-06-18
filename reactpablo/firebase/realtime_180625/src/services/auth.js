import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, doc, setDoc, db } from "./config";
// Already correct
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // sendEmailVerification(userCredential.user);
    const user = userCredential.user;
    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, {});
    return user.uid;
  } catch (err) {
    return err.message;
  }
}

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.uid;
  } catch (err) {
    console.log('Ha habido un error:', err);
    return err.message;
  }
}


export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google login error:", error);
    return null;
  }
};

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);