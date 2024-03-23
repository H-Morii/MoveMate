import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme,ThemeProvider} from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';

interface BasicButtonsProps {
  text: string;
  variant: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
  onClick: React.MouseEventHandler<HTMLButtonElement>
  name:string
}


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


const BasicButtons: React.FC<BasicButtonsProps> = ({text, variant, color}) => {
  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={2} direction="row">
      <Button variant={variant} color={color}>{text}</Button>
    </Stack>
    </ThemeProvider>
  );
}

export default BasicButtons