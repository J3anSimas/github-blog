import { HeaderContainer } from './header.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { FormatDistanceFromDate } from '../../../utils/formatDistanceFromDate'

type HeaderProps = {
  title: string
  createdAt: Date
  user: string
  comments: number
  htmlLink: string
}

export default function Header({
  title,
  createdAt,
  user,
  comments,
  htmlLink
}: HeaderProps): JSX.Element {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </NavLink>
        <a href={htmlLink} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h1>{title}</h1>
      <section>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          <span>{user}</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{FormatDistanceFromDate(createdAt)}</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} Comentários</span>
        </span>
      </section>
    </HeaderContainer>
  )
}
