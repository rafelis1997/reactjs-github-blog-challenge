import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { SearchBar } from './SearchBar'
import { PostCard } from './PostCard'
import { PostsContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../Loading'

interface PostCardProps {
  number: number
  title: string
  body: string
  created_at: string
}

export function Posts() {
  const [posts, setPosts] = useState<PostCardProps[]>([])
  const navigate = useNavigate()

  async function fetchPosts(query?: string) {
    if (query) {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `repo:rafelis1997/reactjs-github-blog-challenge label:published ${query}`,
        },
      })

      setPosts(response.data.items)
    } else {
      const response = await api.get(
        `/search/issues?q=repo:rafelis1997/reactjs-github-blog-challenge label:published`,
      )

      setPosts(response.data.items)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  function handlePostClick(number: number) {
    navigate(`/posts/${number}`)
  }

  return (
    <>
      <SearchBar numberOfPosts={posts.length} fetchPosts={fetchPosts} />

      {posts ? (
        <PostsContainer>
          {posts.map((post) => (
            <PostCard
              key={post.number}
              post={post}
              onClick={() => handlePostClick(post.number)}
            />
          ))}
        </PostsContainer>
      ) : (
        <Loading />
      )}
    </>
  )
}
