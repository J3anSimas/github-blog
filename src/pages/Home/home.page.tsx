import axios from 'axios'
import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import Loading from '../../components/Loading/loading.component'
import { HomeContainer, HomeContent, PostListContainer } from './home.styles'
import PostItemCard from './PostItemCard/post-item-card.component'
import ProfileCard from './ProfileCard/profile-card.component'

type TPost = {
  id: string
  number: number
  title: string
  body: string
  created_at: Date
}
type TPostsList = {
  total_count: number
  items: TPost[]
}
export default function Home(): JSX.Element {
  const [query, setQuery] = useState('')
  const queryClient = useQueryClient()
  const { data, isFetching } = useQuery<TPostsList>('posts', async () => {
    const response = await axios.get('https://api.github.com/search/issues', {
      params: {
        q: `${query !== '' ? query : ' '}repo:j3ansimas/github-blog is:issue`
      },
      headers: {
        Authorization: `Bearer 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`
      }
    })
    return response.data
  })

  async function handleSubmitForm(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault()
    queryClient
      .invalidateQueries()
      .then(() => console.log(query, 'Query invalidada'))
      .catch((e) => console.error(e))
  }
  return (
    <HomeContainer>
      <ProfileCard />
      <HomeContent>
        <form onSubmit={async (e) => await handleSubmitForm(e)}>
          <div>
            <h2>Publicações</h2>
            {isFetching ? (
              <Loading />
            ) : (
              <span>{data?.total_count} publicações</span>
            )}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar conteúdo"
          />
        </form>
        <PostListContainer>
          {isFetching ? (
            <Loading />
          ) : (
            data?.items.map(({ id, number, title, created_at, body }) => (
              <PostItemCard
                key={id}
                id={number}
                title={title}
                createdAt={new Date(created_at)}
                text={body}
              />
            ))
          )}
        </PostListContainer>
      </HomeContent>
    </HomeContainer>
  )
}
