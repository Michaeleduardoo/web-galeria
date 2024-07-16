import React from 'react';

interface CustomCSSProperties extends React.CSSProperties {
  '--i': number;
}

function App() {
  return (
    <div className="footer">
      <ul className="sci">
        <li><a href="#" style={{ '--i': 9 } as CustomCSSProperties}>Facebook</a></li>
        <li><a href="#" style={{ '--i': 8 } as CustomCSSProperties}>Twitter</a></li>
        <li><a href="#" style={{ '--i': 7 } as CustomCSSProperties}>Instagram</a></li>
      </ul>
      <p className="copyrightText">© WebCode. 2024</p>
    </div>
  );
}

export default App;
