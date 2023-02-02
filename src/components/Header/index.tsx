import coverImg from '../../assets/cover.svg'
import { HeaderWrapper } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <img src={coverImg} alt="" />
    </HeaderWrapper>
  )
}
