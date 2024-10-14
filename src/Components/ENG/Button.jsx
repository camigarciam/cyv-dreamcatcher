import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to={-1}>
      <button style={{ padding: '10px', fontSize: '16px' }}>Go Back</button>
    </Link>
  );
};

export default Button;
