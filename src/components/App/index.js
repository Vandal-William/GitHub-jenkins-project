// == Import
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../selectors/Theme'
// == Composant
function App() {
  return (
    <ThemeProvider theme={theme}>

      <h1>test ansible #5</h1>

    </ThemeProvider>

  );
}

// == Export
export default App;
