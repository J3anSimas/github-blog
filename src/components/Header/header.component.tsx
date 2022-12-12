import { HeaderContainer } from './header.styles'
import HeaderEffectLeft from '../../assets/Header/header effect left.svg'
import HeaderEffectRight from '../../assets/Header/header effect right.svg'
import Logo from '../../assets/Logo.svg'
export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <img src={HeaderEffectLeft} alt="" id="header-effect-left" />
      <img src={Logo} alt="" id="logo" />
      <img src={HeaderEffectRight} alt="" id="header-effect-right" />
    </HeaderContainer>
  )
}
