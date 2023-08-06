import "./Preloader.css"; // Importa los estilos para el preloader si es necesario

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader">
        {/* Puedes usar aquí alguna animación o indicador de carga */}
        Cargando...
      </div>
    </div>
  );
};

export default Preloader;
