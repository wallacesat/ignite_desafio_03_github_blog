import styled from 'styled-components'

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 1.8125rem;
  cursor: pointer;

  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;

  & > a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
  }

  & > svg {
    color: ${(props) => props.theme.blue};
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
