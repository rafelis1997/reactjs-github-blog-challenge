import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PostContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`
