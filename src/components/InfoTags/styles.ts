import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  cursor: default;

  & > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    height: 1.625rem;

    & > svg {
      color: ${(props) => props.theme['gray-500']};
    }

    & > span {
      color: ${(props) => props.theme['gray-200']};
    }
  }
`
