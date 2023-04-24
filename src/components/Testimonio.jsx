import shawn from "../images/testimonio-shawn.png";
import "../styleSheets/Testimonio.css"

export const Testimonio = () => {
  return (
    <>
  
    <div className="contenedor-testimonio">
    <img
    className="imagen-testimonio"
    src={shawn}
    />
    <div className="contenedor-texto-testimonio">
      <p className="nombre-testimonio">Shawn Wang in Singapore</p>
      <p className="cargo-testimonio">Software Engineer at Amazon</p>
      <p className="texto-testimonio">
        {" "}
        Its scary to change careers. I only gained confidence that I could
        code by working through the hundreds of hours of free lessons on
        freeCodeCamp. Within a year I had a six-figure job as a Software
        Engineer. freeCodeCamp changed my life.
      </p>
    </div>
    </div>
    </>
  );
};
