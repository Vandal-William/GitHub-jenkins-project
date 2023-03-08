// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
// == Composant
function App() {
  return (
    <ThemeProvider theme={theme}>

      <h1>Hello world comment vas tu  autre test?</h1>

    </ThemeProvider>

  );
}

// == Export
export default App;
