import React from 'react';


export default function ContactPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://placekitten.com/150/150"
          alt="Profile"
          style={{ borderRadius: '50%', marginRight: '20px' }}
        />
        <div>
          <h1>Your Name <span style={{ color: 'gold' }}>★</span></h1>
          <p style={{ color: 'blue' }}>your_handle</p>
          <p>Some notes</p>
          <button style={{
            marginRight: '10px',
            padding: '5px 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Edit</button>
          <button style={{
            padding: '5px 10px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
}