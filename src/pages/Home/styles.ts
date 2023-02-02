import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -6.625rem;
  margin-bottom: 2rem;

  & > header {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 4.5rem;
    margin-bottom: 3rem;

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > h4 {
        font-size: 1.125rem;
        font-weight: bold;
        color: ${(props) => props.theme['gray-200']};
      }

      & > span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-400']};
      }
    }
  }
`

export const HomeContent = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
