import { useState } from 'react';
import { Stack, TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

const UserProfile = () => {
  const [name, setName] = useState('Pierre');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Stack spacing={3} mt={2}>
      <TextField id="outlined-basic" label="Firstname" variant="outlined" value={name} onChange={handleChange} />
      <TextField id="outlined-basic" label="Lastname" variant="outlined" value="Dupond" />
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value="p.dupon@email.fr" />
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" value="+33600000000" />
      <TextField id="outlined-basic" label="Company" variant="outlined" value="Les bronzés font du ski" />
      <TextField
        id="outlined-basic"
        label="Date of creation"
        variant="outlined"
        disabled={true}
        value="01/01/01 at 01:01"
      />
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label=" Active" />
      </FormGroup>
      <Button variant="outlined">Save modifications</Button>
    </Stack>
  );
};

export { UserProfile };
