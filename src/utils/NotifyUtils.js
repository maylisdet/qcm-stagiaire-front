import toast from 'react-hot-toast';

export const notifyError = (message) => {
  toast.error(`${message}`);
};

export const notifySucess = (message) => {
  toast.success(`${message}`);
};
