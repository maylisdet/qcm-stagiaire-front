import Button from '@mui/material/Button';

const LogoutButton = ({ onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      Logout
    </Button>
  );
};

export { LogoutButton };
