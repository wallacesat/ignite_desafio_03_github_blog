import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import { DefaultLayoutContent, DefaultLayoutWrapper } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutWrapper>
      <Header />

      <DefaultLayoutContent>
        <Outlet />
      </DefaultLayoutContent>
    </DefaultLayoutWrapper>
  )
}
