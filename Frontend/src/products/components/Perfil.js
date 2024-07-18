import React from 'react';

const Profile = () => {
  const profileImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0usYA3fV5AQGwhIx-UqCQrO5x8nG3GAq2A&s'; // Reemplaza con la URL de la imagen en línea

  return (
    <div style={profileStyle}>
      <h2 style={{ textAlign: 'center' }}>Perfil de Usuario</h2>
      <div style={userInfoStyle}>
        <div style={imageContainer}>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Foto de perfil"
              style={imageStyle}
            />
          ) : (
            <div style={defaultImageStyle}></div>
          )}
        </div>
        <div style={textContainer}>
          <p><strong>Nombre:</strong> User</p>
          <p><strong>Email:</strong> User@salud</p>
          {/* Otros campos de perfil como fecha de registro, dirección, etc. */}
        </div>
      </div>
    </div>
  );
};

const profileStyle = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const imageContainer = {
  marginRight: '20px',
};

const imageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};

const defaultImageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: '#ccc', // Color gris claro
};

const textContainer = {
  flexGrow: '1',
};

export default Profile;
