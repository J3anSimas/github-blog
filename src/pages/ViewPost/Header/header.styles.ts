import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  height: 10.5rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-weight: bold;
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.blue};
      span {
        display: flex;
        align-items: center;
      }
    }
  }
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.baseTitle};
    width: 100%;
  }

  section {
    display: flex;
    gap: 2rem;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.colors.baseSpan};
      svg {
        color: ${(props) => props.theme.colors.baseLabel};
        width: 18px;
        height: 18px;
      }
    }
  }
`
