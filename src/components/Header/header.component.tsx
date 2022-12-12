import { HeaderContainer } from './header.styles'
import HeaderCover from '../../assets/HeaderCover.svg'
export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <img src={HeaderCover} alt="" />
    </HeaderContainer>
  )
}
