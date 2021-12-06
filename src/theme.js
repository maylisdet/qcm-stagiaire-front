import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const colorTheme = createTheme({
  palette: {
    error: {
      main: red.A200,
    },
  },
});

const tableTheme = createTheme({
  overrides: {
    MUIDataTableHeadCell: {
      toolButton: {
        fontWeight: 'bold',
        fontSize: 'medium',
      },
    },
    MuiSvgIcon: {
      root: {
        height: '0.9em',
        width: '0.9em',
      },
    },
    MuiTableCell: {
      root: {
        paddingTop: '5px',
        paddingBottom: '5px',
        borderColor: '#d3d3d3',
        border: 'none',
        borderBottom: [[1, 'solid', 'rgba(224,224,224)']],
      },
    },
    MuiButton: {
      root: {
        minWidth: '50px',
        minHeight: '40px',
      },
      text: {
        padding: 0,
      },
    },
  },
});

export { colorTheme, tableTheme };
