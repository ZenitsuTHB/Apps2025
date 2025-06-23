import React, { useState } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { useFirebaseRoom } from '../hooks/useFirebaseRoom';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [playerId] = useState(() => crypto.randomUUID());
  const navigate = useNavigate();

  const { createRoom, joinRoom } = useFirebaseRoom(roomId);

  const handleCreate = async () => {
    const newRoomId = await createRoom(playerId);
    navigate(`/lobby/${newRoomId}?player=host`);
  };

  const handleJoin = async () => {
    if (!roomId) return;
    await joinRoom(roomId, playerId);
    navigate(`/lobby/${roomId}?player=guest`);
  };

  return (
    <div className="home-container">
      <h4 className='tagline'>Welcome dear Traveller</h4>
      <p className="tagline">Enter the grid. Control the universe.</p>
      <div className="home-actions">
        <button onClick={handleJoin}>Join Room</button>       
        <input
          type="text"
          placeholder="Enter room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
         <button onClick={handleCreate}>Create Room</button>
      </div>
    </div>
  );
};

export default Home;
