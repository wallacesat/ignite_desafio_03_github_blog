import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faComment,
  faChevronLeft,
  faCalendarDay,
  faUserGroup,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

const icons = {
  faArrowUpRightFromSquare,
  faComment,
  faChevronLeft,
  faCalendarDay,
  faUserGroup,
  faBuilding,
  faGithub,
}

export type iconType = keyof typeof icons

interface IconSolidProps {
  icon: iconType
  size?: SizeProp
  color?: string
}

export function IconSolid({ icon, size = '1x', color }: IconSolidProps) {
  return <FontAwesomeIcon icon={icons[icon]} size={size} color={color} />
}
