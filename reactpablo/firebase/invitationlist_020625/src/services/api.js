import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot } from "./config";

const collectionName = 'items';

// CREATE
// export const createPerson = async (obj) => {
//   const colRef = collection(db, collectionName);
//   const data = await addDoc(colRef, obj);
//   return data.id;
// }

export const createPerson = async (obj) => {
  console.log(obj)
  try {
    const response = await fetch('http://localhost:3000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: obj.name })
    });

    if (!response.ok) {
      throw new Error('Error en la petición');
    }

    const texto = await response.text();
    console.log(texto); // debería imprimir "ueeeeeeeeeeee! <nombre>"
  } catch (error) {
    console.error('Error:', error);
  }
};


// UPDATE
export const updateItem = async (id, obj) => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, obj)
}

// READ
export const getItems = async () => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef, where('age', '==', value)));
  return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
  const docRef = doc(db, collectionName, id);
  const result = await getDoc(docRef);
  return result.data();
}

// DELETE
export const deleteItem = async (id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
  return collection.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
}