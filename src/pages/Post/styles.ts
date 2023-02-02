import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -6.625rem;
  margin-bottom: 2rem;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  line-height: 160%;

  p {
    margin: 0.75rem 0;
  }

  h2,
  h3 {
    margin-top: 2rem;
  }

  h2 {
    padding-bottom: 0.375rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-600']};
  }

  ul {
    margin-left: 3rem;

    li {
      margin: 0.75rem 0;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
