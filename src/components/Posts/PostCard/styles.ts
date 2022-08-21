import styled from 'styled-components'

export const CardContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.25rem;
  cursor: pointer;

  background: ${(props) => props.theme['base-post']};
  border-radius: 8px;
  color: ${(props) => props.theme['base-text']};

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: ${(props) => props.theme['base-span']};

    h1 {
      flex: 1;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
      max-width: 80%;
    }

    span {
      line-height: 2.5;
      text-transform: capitalize;
    }
  }

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostCardBody = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  max-width: 85%;
`
