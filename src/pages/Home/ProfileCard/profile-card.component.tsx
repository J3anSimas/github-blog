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
import { useQuery } from 'react-query'
import axios from 'axios'

export type TProfileData = {
  login: string
  name: string
  bio: string
  avatar_url: string
  company: string
  followers: number
}
export default function ProfileCard(): JSX.Element {
  const { data } = useQuery<TProfileData>('profile', async () => {
    const response = await axios.get('https://api.github.com/users/j3ansimas')
    return response.data
  })
  return (
    <ProfileCardContainer>
      <ProfilePicContainer>
        <img src={data?.avatar_url} />
      </ProfilePicContainer>
      <ProfileInfo>
        <span>
          <h1>{data?.name}</h1>
          <a
            href="http://github.com/j3ansimas"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </span>
        <p>{data?.bio}</p>
        <Status>
          <section>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <span>{data?.login}</span>
            </span>
          </section>
          <section>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{data?.company ?? 'Procurando emprego'}</span>
            </span>
          </section>
          <section>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{data?.followers} seguidores</span>
            </span>
          </section>
        </Status>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}
