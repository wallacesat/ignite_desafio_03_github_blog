import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['gray-600']};
  background: ${(props) => props.theme['blue-900']};
  color: ${(props) => props.theme['gray-300']};
  flex: 1;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
    box-shadow: none;
  }
`
