import * as React from 'react'
import { ThemeContext } from 'styled-components'
import BarLoader from 'react-spinners/BarLoader'

import { SpinnerContainer } from './styles'

export function Spinner() {
  const theme = React.useContext(ThemeContext)

  return (
    <SpinnerContainer>
      <BarLoader height={4} width={250} color={theme['gray-400']} />
    </SpinnerContainer>
  )
}
