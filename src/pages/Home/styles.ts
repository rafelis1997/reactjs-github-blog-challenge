import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 4rem;
`
