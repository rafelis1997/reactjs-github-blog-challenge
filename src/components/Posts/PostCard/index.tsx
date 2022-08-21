import ReactMarkdown from 'react-markdown'
import { CardContainer, PostCardBody } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostData {
  post: { number: number; title: string; body: string; created_at: string }
  onClick: () => void
}

export function PostCard({ post, onClick }: PostData) {
  return (
    <CardContainer onClick={onClick}>
      <header>
        <h1>{post.title}</h1>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,

            locale: ptBR,
          })}
        </span>
      </header>

      <PostCardBody>
        <ReactMarkdown skipHtml={true}>{post.body}</ReactMarkdown>
      </PostCardBody>
    </CardContainer>
  )
}
