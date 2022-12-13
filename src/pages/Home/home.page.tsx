import { HomeContainer, HomeContent, PostListContainer } from './home.styles'
import PostItemCard from './PostItemCard/post-item-card.component'
import ProfileCard from './ProfileCard/profile-card.component'

export default function Home(): JSX.Element {
  return (
    <HomeContainer>
      <ProfileCard />
      <HomeContent>
        <form action="">
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
        <PostListContainer>
          <PostItemCard />
          <PostItemCard />
          <PostItemCard />
          <PostItemCard />
          <PostItemCard />
          <PostItemCard />
          <PostItemCard />
          <PostItemCard />
        </PostListContainer>
      </HomeContent>
    </HomeContainer>
  )
}
