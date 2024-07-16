import React from 'react';


function toggleMenu() {
  // Adicione a lógica da função toggleMenu aqui
}

function App() {
  const getStyle = (i: number): React.CSSProperties => ({
    ['--i' as any]: i,
  });

  return (
    <>
      <header>
        <a href="#" className="logo">Web Galeria</a>
        <div className="toggle" onClick={toggleMenu}></div>
        <ul className="navigation">
          <li><a href="#" style={getStyle(1)}>Home</a></li>
          <li><a href="#" style={getStyle(2)}>Feminina</a></li>
          <li><a href="#" style={getStyle(3)}>Masculina</a></li>
          <li><a href="#" style={getStyle(4)}>Infantil</a></li>
          <li><a href="#" style={getStyle(5)}>Contato</a></li>
        </ul>
      </header>
    </>
  );
}

export default App;
