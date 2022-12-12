import {
  ProfileCardContainer,
  ProfileInfo,
  ProfilePicContainer
} from './profile-card.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'
export default function ProfileCard(): JSX.Element {
  return (
    <ProfileCardContainer>
      <ProfilePicContainer>
        {/* <img src="https://github.com/j3ansimas.png" alt="" /> */}
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
          </a>{' '}
        </span>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <section>
          <span>j3ansimas</span>
        </section>
        <section>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
        </section>
        <section>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </section>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}
