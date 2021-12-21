import Button from '@mui/material/Button';
import { Emoji } from 'components/Emoji';

const LoginButton = ({ onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      Login
      <Emoji symbol="🔓" label="unlocked" marginLeft="5" />
    </Button>
  );
};

export { LoginButton };
