import {
  ProfileCardContainer,
  ProfileInfo,
  ProfilePicContainer,
  Status
} from './profile-card.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default function ProfileCard(): JSX.Element {
  return (
    <ProfileCardContainer>
      <ProfilePicContainer>
        <img src="https://github.com/j3ansimas.png" alt="" />
      </ProfilePicContainer>
      <ProfileInfo>
        <span>
          <h1>Jean Simas</h1>
          <a
            href="http://github.com/j3ansimas"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </span>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <Status>
          <section>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <span>j3ansimas</span>
            </span>
          </section>
          <section>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </span>
          </section>
          <section>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </span>
          </section>
        </Status>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}
