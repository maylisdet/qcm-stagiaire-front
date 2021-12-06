import Button from '@mui/material/Button';

const LogoutButton = ({ onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} color="error">
      Logout
    </Button>
  );
};

export { LogoutButton };
