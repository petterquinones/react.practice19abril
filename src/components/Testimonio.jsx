
import "../styleSheets/Testimonio.css";

export const Testimonio = ({nombre, pais, cargo, empresa, testimonio, imagen}) => {


  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={imagen} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{nombre} </strong> - {pais}</p>
        <p className="cargo-testimonio"> {cargo} at <strong>{empresa}</strong></p>
        <p className="texto-testimonio"> "{testimonio}" </p>
      </div>
    </div>
  );
};
