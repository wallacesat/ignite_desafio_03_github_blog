import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  padding: 2rem;
  max-height: 260px;

  border-radius: 10px;
  background: ${(props) => props.theme['gray-700']};
  border: 2px solid transparent;
  cursor: pointer;

  text-decoration: none;
  color: ${(props) => props.theme['gray-300']};

  & > header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    & > h3 {
      flex: 1;
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 160%;
      color: ${(props) => props.theme['gray-100']};
    }

    & > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-400']};
      margin-top: 0.3125rem;
      min-width: fit-content;
    }
  }

  & > span {
    line-height: 160%;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['gray-500']};
  }
`
