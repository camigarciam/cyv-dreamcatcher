import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";

function UserForm() {
  const [username, setUsername] = useState('');
  const [favoriteMember, setFavoriteMember] = useState('');
  const [comment, setComment] = useState('');
  const [country, setCountry] = useState('');
  const [users, setUsers] = useState([]);
  const [imageURL, setImageURL] = useState(''); // Estado para la URL de la imagen

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        username,
        favoriteMember,
        comment,
        country,
        imageURL
      });
      setUsername('');
      setFavoriteMember('');
      setComment('');
      setCountry('');
      setImageURL('');
      fetchUsers(); // Actualiza la lista después de agregar un nuevo usuario
    } catch (e) {
      console.error("Error al agregar el documento: ", e);
    }
  };

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    setUsers(querySnapshot.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="infoUser">
      <div className="UserForm">
        <form onSubmit={handleSubmit}>
          <label>
            Trading acc @ (ig):
            <br/>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Who do you collect?:
            <br/>
            <input
              type="text"
              value={favoriteMember}
              onChange={(e) => setFavoriteMember(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Country:
            <br/>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Anything you want to add!
            <br/>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </label>
          <br/>
          <label>
            Add an image! (only URL):
            <br />
            <input
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)} // Actualiza el estado con la URL de la imagen
            />
          </label>
          <br />
          {imageURL && <img src={imageURL} alt="User image" style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }} />}
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
      <h2>Collector's board</h2>
      <div className="UserList">
        <div className="Collectors">
          {users.map((user, index) => (
          <div className='User'>
            <div key={index} className="UserCard">
              <h3>{user.username}</h3>
              <p><strong>Collects:</strong> {user.favoriteMember}</p>
              <p><strong>Country:</strong> {user.country}</p>
              <p>"{user.comment}"</p>
            </div>
            {user.imageURL && <img src={user.imageURL} alt="User" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserForm;
