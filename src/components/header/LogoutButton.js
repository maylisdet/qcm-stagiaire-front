import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { Emoji } from 'components/Emoji';

const LogoutButton = ({ onClick }) => {
  const history = useHistory();
  const toLoginPage = () => {
    history.push('/login');
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    toLoginPage();
  };

  return (
    <Button variant="outlined" onClick={() => logout()} color="error">
      Logout
      <Emoji symbol="🚪" label="door" marginLeft="3" />
    </Button>
  );
};

export { LogoutButton };
