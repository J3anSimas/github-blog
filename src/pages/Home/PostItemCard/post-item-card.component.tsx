import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { NavLink } from 'react-router-dom'
import { FormatDistanceFromDate } from '../../../utils/formatDistanceFromDate'
import { PostItemCardContainer } from './post-item-card.styles'

type TPostItemCardProps = {
  id: number
  title: string
  text: string
  createdAt: Date
}
export default function PostItemCard({
  id,
  title,
  text,
  createdAt
}: TPostItemCardProps): JSX.Element {
  return (
    <NavLink to={`post/${id}`}>
      <PostItemCardContainer>
        <div>
          <h2>{title}</h2>
          <span>{FormatDistanceFromDate(createdAt)}</span>
        </div>
        <span>
          <ReactMarkdown>{text}</ReactMarkdown>
        </span>
      </PostItemCardContainer>
    </NavLink>
  )
}
