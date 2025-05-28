import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>  {/* ThemeProvider applies the custom theme to the entire application */}

      <CssBaseline /> {/* This resets the CSS to a consistent baseline across browsers */}
      <App />
    </ThemeProvider>

  </StrictMode>,
)
