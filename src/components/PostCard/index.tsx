import { dateFormatDistanceToNow, ellipsesText } from '../../utils/formatter'

import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  createdAt: Date
  content: string
  postNumber: number
}

export function PostCard({
  content,
  createdAt,
  title,
  postNumber,
}: PostCardProps) {
  return (
    <PostCardContainer to="/post" state={{ postNumber }}>
      <header>
        <h2 title={title}>{ellipsesText(title, 30)}</h2>
        <span>{dateFormatDistanceToNow(new Date(createdAt))}</span>
      </header>
      <span>{ellipsesText(content, 205)}</span>
    </PostCardContainer>
  )
}
