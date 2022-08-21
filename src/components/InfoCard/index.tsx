import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faCalendarDay,
  faComment,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Avatar,
  BackButton,
  InfoCardContainer,
  InfoCardContentContainer,
  InfoCardFooter,
  InfoCardInnerText,
  LinkButton,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Loading } from '../Loading'

interface ProfileProps {
  picture: string
  name: string
  bio: string
  nickname: string
  company?: string
  followers: number
  githubLink: string
}

interface InfoCardProps {
  post?: {
    title: string
    body: string
    issueLink: string
    comments: number
    createdAt: string
    creator: string
  }
}

export function InfoCard({ post }: InfoCardProps) {
  const [profile, setProfile] = useState<ProfileProps>()
  const isvariant = !!post

  async function fetchUser(user?: string) {
    const response = await api.get('/users/' + user)

    // eslint-disable-next-line camelcase
    const { login, avatar_url, followers, bio, company, name, html_url } =
      response.data

    const userData = {
      // eslint-disable-next-line camelcase
      picture: avatar_url,
      name,
      bio,
      nickname: login,
      company,
      followers,
      // eslint-disable-next-line camelcase
      githubLink: html_url,
    }

    setProfile(userData)
  }

  useEffect(() => {
    if (!post) fetchUser('rafelis1997')
  }, [post])

  return (
    <InfoCardContainer isvariant={isvariant}>
      {profile || isvariant ? (
        <>
          {isvariant && <BackButton to="/">&lt; Voltar</BackButton>}

          {!isvariant ? (
            <LinkButton href={profile?.githubLink} target="_blank">
              {!isvariant ? 'Github' : 'Ver no Github'}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkButton>
          ) : (
            <LinkButton href={post.issueLink} target="_blank">
              {!isvariant ? 'Github' : 'Ver no Github'}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkButton>
          )}

          <InfoCardContentContainer>
            {!isvariant && <Avatar url={profile ? profile.picture : '#'} />}

            <InfoCardInnerText isvariant={isvariant}>
              <h1>{!isvariant ? profile?.name : post.title}</h1>
              <p>{profile?.bio}</p>
              <InfoCardFooter isvariant={isvariant}>
                <p>
                  <FontAwesomeIcon icon={faGithub} />
                  {!isvariant ? profile?.nickname : post.creator}
                </p>
                {(profile?.company !== '' || !isvariant) ?? (
                  <p>
                    <FontAwesomeIcon icon={faBuilding} />
                    {profile?.company}
                  </p>
                )}

                {!isvariant ? (
                  <p>
                    <FontAwesomeIcon icon={faUserGroup} />
                    {profile?.followers}
                  </p>
                ) : (
                  <>
                    <p>
                      <FontAwesomeIcon icon={faCalendarDay} />
                      {formatDistanceToNow(new Date(post.createdAt), {
                        addSuffix: true,

                        locale: ptBR,
                      })}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faComment} />
                      {post.comments}
                    </p>
                  </>
                )}
              </InfoCardFooter>
            </InfoCardInnerText>
          </InfoCardContentContainer>
        </>
      ) : (
        <Loading />
      )}
    </InfoCardContainer>
  )
}
