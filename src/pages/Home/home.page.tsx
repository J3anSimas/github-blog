import axios from 'axios'
import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
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
            <span>{data?.total_count} publicações</span>
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
            <span>Loading</span>
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
