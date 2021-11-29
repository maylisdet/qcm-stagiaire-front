import IconButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = (onClick) => {
  return (
    <IconButton aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
}

export { DeleteButton }; 