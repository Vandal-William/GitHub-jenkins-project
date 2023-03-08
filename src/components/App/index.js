// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
// == Composant
function App() {
  return (
    <ThemeProvider theme={theme}>

      <h1>Hello world</h1>

    </ThemeProvider>

  );
}

// == Export
export default App;
