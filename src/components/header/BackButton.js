import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({ toBackPage }) => {
  return (
    <Button aria-label="back" onClick={toBackPage}>
      <ArrowBackIcon />
    </Button>
  );
};

export { BackButton };
