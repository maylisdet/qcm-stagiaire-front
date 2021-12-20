import Button from '@mui/material/Button';
import { Emoji } from 'Emoji';

const LogoutButton = ({ onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} color="error">
      Logout
      <Emoji symbol="🚪" label="door" />
    </Button>
  );
};

export { LogoutButton };
