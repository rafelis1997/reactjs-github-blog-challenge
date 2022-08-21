import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { InfoCard } from '../../components/InfoCard'
import { Loading } from '../../components/Loading'
import { api } from '../../lib/axios'
import { PostContainer } from './styles'

interface postDataProps {
  title: string
  body: string
  issueLink: string
  comments: number
  createdAt: string
  creator: string
}

export function Post() {
  const [postData, setPostData] = useState<postDataProps>()

  const params = useParams()
  const postNumber = params.issueNumber

  useEffect(() => {
    fetchPostData()
  }, [])

  async function fetchPostData() {
    const response = await api.get(
      '/repos/rafelis1997/reactjs-github-blog-challenge/issues/' + postNumber,
    )

    const data = {
      title: response.data.title,
      body: response.data.body,
      issueLink: response.data.html_url,
      comments: response.data.comments,
      createdAt: response.data.created_at,
      creator: response.data.user.login,
    }

    setPostData(data)
  }

  return (
    <PostContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: 'easeOut' } }}
      exit={{ opacity: 0 }}
    >
      {postData ? (
        <>
          <InfoCard post={postData} />

          <ReactMarkdown>{postData.body}</ReactMarkdown>
        </>
      ) : (
        <Loading />
      )}
    </PostContainer>
  )
}
