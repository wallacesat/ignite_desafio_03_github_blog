import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  background: ${(props) => props.theme['blue-600']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 0.5rem;

    & > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`
