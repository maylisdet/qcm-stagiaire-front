import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} color="error">
      <DeleteIcon />
    </Button>
  );
};

export { DeleteButton };
