import React, { useState } from 'react'

function RoomForm( { onCreate, onJoin }) {

  const [roomId, setRoomId] = useState('');

  return (
    <div>
      <p>Let s play !</p>
      <button value={onCreate}>Create the room</button>
      <br />
      <input value={roomId} onChange={e => setRoomId(e.target.value)} />
      <br />
      <button value={onJoin}>Join the Room</button>
    </div>
  )
}

export default RoomForm