import React from "react";

interface CustomCSSProperties extends React.CSSProperties {
  "--i": number;
}

function App() {
  return (
    <div className="footer">
      <ul className="sci">
        <li>
          <a
            href="#"
            data-tooltip="Casal: Ana e Michael"
            style={{ "--i": 9 } as CustomCSSProperties}
          >
            Casal
          </a>
        </li>
        <li>
          <a
            href="#"
            data-tooltip="Cachorro 1: Bidu"
            style={{ "--i": 8 } as CustomCSSProperties}
          >
            Cachorro 1
          </a>
        </li>
        <li>
          <a
            href="#"
            data-tooltip="Cachorro 2: Tody"
            style={{ "--i": 7 } as CustomCSSProperties}
          >
            Cachorro 2
          </a>
        </li>
        <li>
          <a
            href="#"
            data-tooltip="Cachorro 3: Babi"
            style={{ "--i": 6 } as CustomCSSProperties}
          >
            Cachorro 3
          </a>
        </li>
      </ul>

      <p className="copyrightText">© WebCode. 2024</p>
    </div>
  );
}

export default App;
