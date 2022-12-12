import Header from '../../components/Header/header.component'
import { DefaultLayoutContainer } from './default-layout.styles'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout(): JSX.Element {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
