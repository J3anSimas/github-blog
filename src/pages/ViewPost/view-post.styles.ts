import styled from 'styled-components'

export const ViewPostContainer = styled.div``

export const BodyPostContainer = styled.main`
  padding: 2.4rem 2rem;
  color: ${(props) => props.theme.colors.baseText};
  a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.blue};
  }
  li {
    list-style-type: none;
    padding-left: 0.8rem;
  }
  h1,
  h2,
  h3 {
    margin-bottom: 0.8rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.basePost};
  }
`
