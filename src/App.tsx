import { ThemeProvider } from 'styled-components'
import Router from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
