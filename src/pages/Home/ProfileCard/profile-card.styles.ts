import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background: ${(props) => props.theme.colors.baseProfile};
  display: flex;
  gap: 2rem;
  padding: 2rem;
  padding-left: 2.5rem;
  border-radius: 10px;
`
export const ProfilePicContainer = styled.div`
  width: 148px;
  height: 148px;
  background: white;
  border-radius: 8px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
`
export const ProfileInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & span:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${(props) => props.theme.colors.baseTitle};
    }
    a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: ${(props) => props.theme.colors.blue};
      text-decoration: none;
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 1.6;
    }
  }
  p {
    font-size: 1rem;
    width: 38.25rem;
    color: ${(props) => props.theme.colors.baseText};
  }
`
export const Status = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  section {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > span {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        width: 18px;
        height: 18px;
        color: ${(props) => props.theme.colors.baseLabel};
      }

      span {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.baseSubtitle};
      }
    }
  }
`
