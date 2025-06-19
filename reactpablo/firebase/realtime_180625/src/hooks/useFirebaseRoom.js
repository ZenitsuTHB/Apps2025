//Lógica para conectar, crear y escuchar salas
// src/hooks/useFirebaseRoom.js
import { ref, set, onValue, getDatabase, onDisconnect } from 'firebase/database';
import { db } from '../services/firebaseConfig';
import { useState, useEffect } from 'react';

export function useFirebaseRoom(roomId) {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    if (!roomId) return;

    const roomRef = ref(db, `rooms/${roomId}`);
    const unsubscribe = onValue(roomRef, (snapshot) => {
      setGameData(snapshot.val());
    });

    return () => unsubscribe();
  }, [roomId]);

  const createRoom = async (hostId) => {
    const roomRef = ref(db, `rooms/${hostId}`);
    await set(roomRef, {
      host: hostId,
      guest: null,
      gameState: Array(9).fill(null),
      turn: 'X',
    });
    return hostId;
  };

  const joinRoom = async (roomId, guestId) => {
    const guestRef = ref(db, `rooms/${roomId}/guest`);
    await set(guestRef, guestId);
  };

  return { gameData, createRoom, joinRoom };
}
