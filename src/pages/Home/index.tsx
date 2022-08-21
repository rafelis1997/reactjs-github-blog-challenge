import { InfoCard } from '../../components/InfoCard'
import { Posts } from '../../components/Posts'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: 'easeInOut' } }}
      exit={{ opacity: 0 }}
    >
      <InfoCard />
      <Posts />
    </HomeContainer>
  )
}
