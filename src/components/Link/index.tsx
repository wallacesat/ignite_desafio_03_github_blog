import { Link as RouterLink } from 'react-router-dom'

import { IconSolid, iconType } from '../IconSolid'

import { LinkContainer } from './styles'

interface LinkProps {
  href?: string
  label: string
  title?: string
  icon: iconType
  iconPosition?: 'right' | 'left'
}

export function Link({
  href = '',
  label,
  title,
  icon,
  iconPosition = 'right',
}: LinkProps) {
  const isLeftIconPosition = iconPosition === 'left'
  const isExternalLink = /(?:https{0,1}:\/\/\S*)|(#)/.test(href)

  return (
    <LinkContainer title={title}>
      {isLeftIconPosition && <IconSolid icon={icon} size="xs" />}
      {isExternalLink ? (
        <a href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      ) : (
        <RouterLink to={href}>{label}</RouterLink>
      )}
      {!isLeftIconPosition && <IconSolid icon={icon} size="xs" />}
    </LinkContainer>
  )
}
