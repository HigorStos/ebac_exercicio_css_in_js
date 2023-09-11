import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

// import './global.css'
import GlobalStyle, { Container } from './styles'
import mainTheme from './themes/main'

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
