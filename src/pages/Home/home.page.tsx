import { HomeContainer } from './home.styles'
import ProfileCard from './ProfileCard/profile-card.component'

export default function Home(): JSX.Element {
  return (
    <HomeContainer>
      <ProfileCard />
    </HomeContainer>
  )
}
