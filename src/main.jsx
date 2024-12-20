import { StrictMode } from 'react' //exportando pelo export NomeDaComponente
import { createRoot } from 'react-dom/client' //exportando pelo export NomeDaComponente
import  { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import { AuthProvider } from "./hooks/auth.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
