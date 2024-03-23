import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//color
import { createTheme,ThemeProvider} from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';


interface InputProps {
  label: string;
  variant: 'outlined' | 'filled' | 'standard';
  width: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const theme = createTheme({
    palette: {
      primary: indigo,
      secondary: lightBlue,
    },
});

const BasicTextFields:React.FC<InputProps> = ({label , variant, width}) =>  {
  return (
    <ThemeProvider theme={theme}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="on"
      borderRadius={"6px"}
      borderColor="indigo"
    >
      <TextField id="outlined-basic" label={label} variant={variant} sx={{width: width}} />
    </Box>
    </ThemeProvider>
  );
}

export default BasicTextFields