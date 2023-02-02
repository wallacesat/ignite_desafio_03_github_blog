import * as React from 'react'

import { fetchIssues, fetchUser, Issues, User } from '../../api'

import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'
import { Spinner } from '../../components/Spinner'

import { HomeContainer, HomeContent } from './styles'

export function Home() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = React.useState<User>({} as User)
  const [posts, setPosts] = React.useState<Issues>({
    totalCount: 0,
    issues: [],
  })

  const [canSearch, setCanSearch] = React.useState(false)

  React.useEffect(() => {
    const asyncExec = async () => {
      const userData = await fetchUser()
      setUser(userData)

      const issuesData = await fetchIssues()
      setPosts(issuesData)

      setIsLoading(false)
    }

    asyncExec()
  }, [])

  async function handleSearch(text: string) {
    const filteredIssues = await fetchIssues(text)
    setPosts(filteredIssues)
  }

  function handleChangeSearchQuery(text: string) {
    if (text) {
      handleSearch(text)
      setCanSearch(true)
    } else {
      if (canSearch) {
        handleSearch(text)
        setCanSearch(false)
      }
    }
  }

  const issuesCountText =
    posts?.totalCount === 1
      ? `${posts.totalCount} publicação`
      : `${posts.totalCount} publicações`

  return isLoading ? (
    <Spinner />
  ) : (
    <HomeContainer>
      <Profile user={user} />

      <header>
        <div>
          <h4>Publicações</h4>
          <span>{issuesCountText}</span>
        </div>
        <SearchInput onSearch={handleChangeSearchQuery} />
      </header>

      <HomeContent>
        {posts.issues.map((post) => (
          <PostCard key={post.createdAt.toISOString()} {...post} />
        ))}
      </HomeContent>
    </HomeContainer>
  )
}
