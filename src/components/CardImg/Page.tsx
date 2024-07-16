import React, { useState } from 'react';
import Image1 from '../image/image1.png';
import Image2 from '../image/image2.png';
import Image3 from '../image/image3.png';
import Image4 from '../image/image4.png';

interface CustomCSSProperties extends React.CSSProperties {
  '--i': number;
}

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className={`box ${activeIndex === 1 ? 'active' : ''}`} style={{ '--i': 3 } as CustomCSSProperties}>
        <div className="imgBx" onClick={() => toggleActive(1)}>
          <img src={Image1} alt="Imagem 1" />
        </div>
      </div>
      <div className={`box ${activeIndex === 2 ? 'active' : ''}`} style={{ '--i': 4 } as CustomCSSProperties}>
        <div className="imgBx" onClick={() => toggleActive(2)}>
          <img src={Image2} alt="Imagem 2" />
        </div>
      </div>
      <div className={`box ${activeIndex === 3 ? 'active' : ''}`} style={{ '--i': 5 } as CustomCSSProperties}>
        <div className="imgBx" onClick={() => toggleActive(3)}>
          <img src={Image3} alt="Imagem 3" />
        </div>
      </div>
      <div className={`box ${activeIndex === 4 ? 'active' : ''}`} style={{ '--i': 6 } as CustomCSSProperties}>
        <div className="imgBx" onClick={() => toggleActive(4)}>
          <img src={Image4} alt="Imagem 4" />
        </div>
      </div>
    </div>
  );
}

export default App;
