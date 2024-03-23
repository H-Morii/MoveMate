import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme,ThemeProvider} from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main:indigo[500]
    },
    secondary: {
      main:lightBlue['A400']
    }
    ,
  },
});


export default function BasicButtons({text, variant, color}) {
  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={2} direction="row">
      <Button variant={variant} color={color}>{text}</Button>
    </Stack>
    </ThemeProvider>
  );
}