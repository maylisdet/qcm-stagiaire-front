import * as React from 'react';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from '../Authentication/LogoutButton';
import MUIDataTable from "mui-datatables";

const QuizzesComponent = () => {
    
    const columns = ["Quizz Name", "Theme"];

    const data = [
        ["ReactJS", "React"],
        ["ReactNative", "React"],
        ["Hooks", "React"],
        ["API Calls", "React Queries"]
       ];

    const options = {
        filterType: 'checkbox',
      };

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Stack direction="column" spacing={2} mt={2}>
                    <MUIDataTable
                        title={"Available Quizzes"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                    <LogoutButton />
                </Stack>
            </Grid>
        </>
    );
};

export { QuizzesComponent };