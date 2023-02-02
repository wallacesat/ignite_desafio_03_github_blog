import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  padding: 2rem;
  padding-left: 2.5rem;
  gap: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme['blue-600']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  & > img {
    width: 9.25rem;
    height: auto;
    border-radius: 8px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ProfileContent = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      & > h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme['gray-100']};
      }
    }
  }
`
