import { IconSolid, iconType } from '../IconSolid'
import { InfoContainer } from './styles'

export type InfoTag = {
  title?: string
  icon: iconType
  label: string | number
}

interface InfoTagsProps {
  infoTags: InfoTag[]
}

export function InfoTags({ infoTags }: InfoTagsProps) {
  return (
    <InfoContainer>
      {infoTags.map((infoTag) => (
        <div title={infoTag.title} key={`${infoTag.label}-${infoTag.icon}`}>
          <IconSolid icon={infoTag.icon} />
          <span>{infoTag.label}</span>
        </div>
      ))}
    </InfoContainer>
  )
}
