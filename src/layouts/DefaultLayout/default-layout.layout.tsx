import Header from '../../components/Header/header.component'
import { DefaultLayoutContainer, LayoutContent } from './default-layout.styles'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout(): JSX.Element {
  return (
    <DefaultLayoutContainer>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </DefaultLayoutContainer>
  )
}
