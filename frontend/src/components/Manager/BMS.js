import React from "react";

export default function BMS() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/website-parallax-background-C.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
        <h1>Bank Management System</h1>
        <p>Hello from Bank Management System. This is the MERN Application, and the purpose is to manage bank customers and managers.</p>
        <p>The application is developed by: </p>
        <p>Usman Babar | Muhammad Abdullah | Moiz Afzal </p>
      </div>


    </div>
  );
}
