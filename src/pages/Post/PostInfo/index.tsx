import { InfoTags } from '../../../components/InfoTags'
import { Link } from '../../../components/Link'

import { dateFormatDistanceToNow } from '../../../utils/formatter'

import { PostInfoContainer } from './styles'

interface PostInfoProps {
  postGitUrl: string
  title: string
  login: string
  createdAt: Date
  commentsCount: number
}

export function PostInfo({
  postGitUrl,
  title,
  login,
  createdAt,
  commentsCount,
}: PostInfoProps) {
  const comments = `${commentsCount} comentário${
    commentsCount === 1 ? '' : 's'
  }`

  return (
    <PostInfoContainer>
      <div>
        <header>
          <Link
            href="/"
            label="voltar"
            title="Link de voltar para a página inicial"
            icon="faChevronLeft"
            iconPosition="left"
          />

          <Link
            href={postGitUrl}
            label="ver no github"
            title="Link do pos no github"
            icon="faArrowUpRightFromSquare"
          />
        </header>

        <h1>{title}</h1>
      </div>

      <footer>
        <InfoTags
          infoTags={[
            {
              title: 'Usuário',
              icon: 'faGithub',
              label: login,
            },
            {
              title: 'Data do post',
              icon: 'faCalendarDay',
              label: dateFormatDistanceToNow(createdAt),
            },
            {
              title: 'Quantidade de comentários',
              icon: 'faComment',
              label: comments,
            },
          ]}
        />
      </footer>
    </PostInfoContainer>
  )
}
