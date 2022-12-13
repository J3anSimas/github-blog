import { HeaderContainer } from './header.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <nav>
        <a href="#">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </a>
        <a href="#">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h1>JavaScript data types and data structures</h1>
      <section>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          <span>j3ansimas</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          <span>5 Comentários</span>
        </span>
      </section>
    </HeaderContainer>
  )
}
