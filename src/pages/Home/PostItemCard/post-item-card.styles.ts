import styled from 'styled-components'

export const PostItemCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background: ${(props) => props.theme.colors.basePost};
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      width: 14.75rem;
      color: ${(props) => props.theme.colors.baseTitle};
    }
    span {
      font-size: 0.875rem;
      padding-top: 5px;

      color: ${(props) => props.theme.colors.baseSpan};
    }
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    overflow: hidden;

    color: ${(props) => props.theme.colors.baseText};
  }
`
