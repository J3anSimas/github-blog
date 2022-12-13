import Header from './Header/header.component'
import { BodyPostContainer, ViewPostContainer } from './view-post.styles'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'

type TPostFull = {
  html_url: string
  title: string
  body: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}
export default function ViewPost(): JSX.Element {
  const { id } = useParams()
  const { data, isFetching } = useQuery<TPostFull>('post-full', async () => {
    const response = await axios.get(
      `https://api.github.com/repos/j3ansimas/github-blog/issues/${id ?? ''}`
    )
    return response.data
  })
  return (
    <ViewPostContainer>
      {data != null ? (
        <>
          <Header
            comments={data?.comments}
            createdAt={new Date(data.created_at)}
            htmlLink={data.html_url}
            title={data.title}
            user={data.user.login}
          />
          <BodyPostContainer>
            {isFetching ? (
              <span>Loading</span>
            ) : (
              <ReactMarkdown>{data?.body ?? 'Loading'}</ReactMarkdown>
            )}
          </BodyPostContainer>
        </>
      ) : (
        <span>Loading</span>
      )}
    </ViewPostContainer>
  )
}
