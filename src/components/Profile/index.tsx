import { Link } from '../Link'
import { InfoTag, InfoTags } from '../InfoTags'

import { ProfileContainer, ProfileContent } from './styles'

type User = {
  avatarUrl: string
  bio: string
  company: string
  followers: number
  name: string
  login: string
  gitUrl: string
}

interface ProfileProps {
  user: User
}

export function Profile({ user }: ProfileProps) {
  let infoTags: InfoTag[] = [
    {
      title: 'Usuário',
      icon: 'faGithub',
      label: user.login,
    },
    {
      title: 'Empresa',
      icon: 'faBuilding',
      label: user.company as string,
    },
    {
      title: 'Seguidores',
      icon: 'faUserGroup',
      label: `${user.followers} seguidores`,
    },
  ]

  if (!user.company) {
    infoTags = infoTags.filter((infoTag) => infoTag.title !== 'Empresa')
  }

  return (
    <ProfileContainer>
      <img src={user.avatarUrl} alt="" />

      <ProfileContent>
        <div>
          <header>
            <h2>{user.name}</h2>
            <Link
              href={user.gitUrl}
              label="github"
              title="Link do perfil no github"
              icon="faArrowUpRightFromSquare"
            />
          </header>

          <p>{user.bio}</p>
        </div>

        <footer>
          <InfoTags infoTags={infoTags} />
        </footer>
      </ProfileContent>
    </ProfileContainer>
  )
}
