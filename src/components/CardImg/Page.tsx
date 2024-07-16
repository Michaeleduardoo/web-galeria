import Image1 from "../image/image1.png";
import Image2 from "../image/image2.png";
import Image3 from "../image/image3.png";
import Image4 from "../image/image4.png";
import '../../index.css'; // Importe seu arquivo de estilos CSS aqui

interface CustomCSSProperties extends React.CSSProperties {
  '--i': number;
}

const App: React.FC = () => {

  const toggleImageBox = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget;
    target.classList.toggle('active');
  };

  return (
    <div className="container">
      <div className="box" style={{ '--i': 3 } as CustomCSSProperties}>
        <div className="imgBx" onClick={toggleImageBox}>
          <img src={Image1} alt="Imagem 1" />
        </div>
      </div>
      <div className="box" style={{ '--i': 4 } as CustomCSSProperties}>
        <div className="imgBx" onClick={toggleImageBox}>
          <img src={Image2} alt="Imagem 2" />
        </div>
      </div>
      <div className="box" style={{ '--i': 5 } as CustomCSSProperties}>
        <div className="imgBx" onClick={toggleImageBox}>
          <img src={Image3} alt="Imagem 3" />
        </div>
      </div>
      <div className="box" style={{ '--i': 6 } as CustomCSSProperties}>
        <div className="imgBx" onClick={toggleImageBox}>
          <img src={Image4} alt="Imagem 4" />
        </div>
      </div>
    </div>
  );
};

export default App;
