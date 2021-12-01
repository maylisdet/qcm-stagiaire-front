import IconButton from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

const BackButton = (onClick) => {
  const history = useHistory();
  return (
    <IconButton
      aria-label="back"
      onClick={() => {
        history.goBack();
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export { BackButton };
