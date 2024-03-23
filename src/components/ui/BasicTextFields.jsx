import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//color
import { createTheme,ThemeProvider, alpha, getContrastRatio } from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';


// interface PalleteColor {
//   light:string;
//   main:string,
//   dark:string,
//   contrastText:string
// }

const theme = createTheme({
    palette: {
      primary: indigo,
      secondary: lightBlue,
    },
});

export default function BasicTextFields({label , variant, width}) {
  return (
    <ThemeProvider theme={theme}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="on"
      borderRadius={2}
      borderColor="indigo"
    >
      <TextField id="outlined-basic" label={label} variant={variant} sx={{width: width}} />
    </Box>
    </ThemeProvider>
  );
}