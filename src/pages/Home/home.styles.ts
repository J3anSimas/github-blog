import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HomeContent = styled.main`
  margin-top: 4.5rem;
  overflow-y: hidden;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    color: ${(props) => props.theme.colors.baseSubtitle};
    margin-bottom: 3rem;
    div {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 18px;
      }
      .loading-container {
        width: 3rem;
        height: 3rem;
      }
    }
    input {
      background: ${(props) => props.theme.colors.baseInput};
      border: 1px solid ${(props) => props.theme.colors.baseBorder};
      padding: 1rem;
      border-radius: 6px;
      color: ${(props) => props.theme.colors.baseText};

      &::placeholder {
        color: ${(props) => props.theme.colors.baseLabel};
      }
    }
  }
`

export const PostListContainer = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  .loading-container {
    display: flex;
    grid-column-start: 1;
    grid-column-end: 3;
    justify-content: center;
    svg {
      height: 3rem;
      width: 3rem;
      color: ${(props) => props.theme.colors.baseTitle};
    }
  }
`
