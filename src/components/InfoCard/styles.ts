import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface InfoCardContainerProps {
  isvariant: boolean
}

export const InfoCardContainer = styled.section<InfoCardContainerProps>`
  display: flex;
  position: relative;
  justify-content: ${(props) => (props.isvariant ? 'flex-start' : 'center')}
    center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  top: -4.5rem;

  border-radius: 8px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: -4.5rem;
  }
`

export const LinkButton = styled.a`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};

  &:hover {
    text-decoration: underline;
  }
`

export const BackButton = styled(NavLink)`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  color: ${(props) => props.theme.blue};

  &:hover {
    text-decoration: underline;
  }
`

export const InfoCardContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
  }
`

interface AvatarProps {
  url: string
}

export const Avatar = styled.div<AvatarProps>`
  border-radius: 8px;
  width: 148px;
  height: 148px;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

interface InfoCardInnerTextProps {
  isvariant: boolean
}

export const InfoCardInnerText = styled.div<InfoCardInnerTextProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  flex: 1;

  p {
    display: ${(props) => (props.isvariant ? 'none' : 'block')};
  }
`

interface InfoCardFooterProps {
  isvariant: boolean
}

export const InfoCardFooter = styled.div<InfoCardFooterProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: ${(props) => (props.isvariant ? '0.5rem' : '1.5rem')};

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    p {
      width: max-content;
      flex-wrap: wrap;
    }
  }
`
