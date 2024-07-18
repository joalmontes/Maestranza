import React from 'react';

const ComingSoon = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '2rem',
      color: '#333',
      textAlign: 'center',
      backgroundColor: '#f5f5f5'
    }
  };

  return (
    <div style={styles.container}>
      <p>Página próximamente</p>
    </div>
  );
};

export default ComingSoon;
