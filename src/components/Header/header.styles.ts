import styled from 'styled-components'
import HeaderCover from '../../assets/Header/Cover.png'
export const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  height: 18.5rem;
  border: 1px solid red;
  object-fit: cover;
  background-image: url(${HeaderCover});
  background-repeat: no-repeat;
  background-size: cover;

  /* img {
    flex: 1;
  } */

  #header-effect-left {
    width: 409px;
    height: 188px;
  }
  /* #logo {
    width: 148px;
    height: 98px;
  } */
  #header-effect-right {
    width: 371px;
    height: 236px;
  }
`
