import { Link } from 'react-router-dom';

const Boton = () => {
  return (
    <Link to={-1}>
      <button style={{ padding: '10px', fontSize: '16px' }}>Volver</button>
    </Link>
  );
};

export default Boton;
