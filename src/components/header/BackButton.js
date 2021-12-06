import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();
  return (
    <Button
      aria-label="back"
      onClick={() => {
        history.goBack();
      }}
    >
      <ArrowBackIcon />
    </Button>
  );
};

export { BackButton };
