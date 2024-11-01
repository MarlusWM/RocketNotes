import { StrictMode } from 'react' //exportando pelo export NomeDaComponente
import { createRoot } from 'react-dom/client' //exportando pelo export NomeDaComponente
import Details from './pages/Details/Details'
import  { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </StrictMode>,
)
