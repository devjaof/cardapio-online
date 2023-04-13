import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { ItemProvider } from './contexts/ItemContext'

export default function App() {

  return (
    <BrowserRouter>
      <Theme>
        <ItemProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </ItemProvider>
      </Theme>
    </BrowserRouter>
  )
}
