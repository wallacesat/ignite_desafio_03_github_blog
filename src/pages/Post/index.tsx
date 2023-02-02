import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import { fetchIssue } from '../../api'

import { Spinner } from '../../components/Spinner'
import { PostInfo } from './PostInfo'

import { PostContainer, PostContent } from './styles'

interface PostProps {
  postGitUrl: string
  title: string
  login: string
  createdAt: Date
  commentsCount: number
  text: string
}

export function Post() {
  const {
    state: { postNumber },
  } = useLocation()

  const [post, setPost] = React.useState({} as PostProps)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const asyncExec = async () => {
      const post = await fetchIssue(postNumber as number)

      setPost(post)
      setIsLoading(false)
    }

    asyncExec()
  }, [postNumber])

  const { text, ...postInfo } = post

  return isLoading ? (
    <Spinner />
  ) : (
    <PostContainer>
      <PostInfo {...postInfo} />
      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.text}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
