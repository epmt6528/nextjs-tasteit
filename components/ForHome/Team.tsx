import Image from 'next/image'

import { DIV, CARDDIV } from './TeamStyled'

const MemberCard = (props) => {
  const {
    pictureName,
    fullName,
    position,
    linkedinURL,
    behanceURL,
    githubURL,
  } = props
  return (
    <CARDDIV>
      <Image
        src={`/img/ForHome/members/${pictureName}.jpg`}
        alt={fullName}
        width={306}
        height={276}
        objectFit='cover'
      />
      <h3>{fullName}</h3>
      <p>{position}</p>
      <ul>
        <li>
          <a href={linkedinURL} target='_blank' rel='noopener noreferrer'>
            <Image
              src={`/img/ForHome/linkedin.svg`}
              alt='linkedin'
              width={24}
              height={24}
            />
          </a>
        </li>

        {behanceURL ? (
          <li>
            <a href={behanceURL} target='_blank' rel='noopener noreferrer'>
              <Image
                src={`/img/ForHome/behance.svg`}
                alt='behance'
                width={24}
                height={24}
              />
            </a>
          </li>
        ) : (
          ''
        )}

        {githubURL ? (
          <li>
            <a href={githubURL} target='_blank' rel='noopener noreferrer'>
              <Image
                src={`/img/ForHome/github.svg`}
                alt='github'
                width={24}
                height={24}
              />
            </a>
          </li>
        ) : (
          ''
        )}
      </ul>
    </CARDDIV>
  )
}

const Team = () => {
  return (
    <DIV id='team'>
      <div className='textDiv'>
        <h1>Meet the Team</h1>
        <p>
          Taste It is brought to you by a team of 10 members from diverse
          backgrounds with different working experiences. We are passionate
          about solving daily problems by creating a positive impact on the
          community with the help of technology.
        </p>
      </div>

      <div className='membersDiv'>
        <MemberCard
          pictureName='Mert'
          fullName='Mert Oktem'
          position='Lead Developer'
          linkedinURL='https://www.linkedin.com/in/mert-oktem/'
          githubURL='https://www.github.com/mert-oktem'
        />

        <MemberCard
          pictureName='Chloe'
          fullName='Chloe Bui'
          position='Lead Designer'
          linkedinURL='https://www.linkedin.com/in/chloe-buii/'
          behanceURL='https://www.behance.net/chloebui'
        />

        <MemberCard
          pictureName='Milad'
          fullName='Milad Mokhtari'
          position='Project Manager'
          linkedinURL='https://linkedin.com/in/milad-mokhtari/'
        />

        <MemberCard
          pictureName='Antrix'
          fullName='Antriksh Saini'
          position='Full Stack Developer'
          linkedinURL='https://www.linkedin.com/in/antriksh-saini/'
          githubURL='https://github.com/antrikshsaini'
        />

        <MemberCard
          pictureName='Taichi'
          fullName='Taichi Murai'
          position='Full Stack Developer'
          linkedinURL='https://www.linkedin.com/in/taichimurai/'
          githubURL='https://github.com/epmt6528'
        />

        <MemberCard
          pictureName='Arjun'
          fullName='Arjun Dhingra'
          position='Front End Developer'
          linkedinURL='https://www.linkedin.com/in/arjun-dhingra-617749159/'
          githubURL='https://github.com/arjund96'
        />

        <MemberCard
          pictureName='Kai'
          fullName='Bokai Hsu'
          position='UI/UX Designer'
          linkedinURL='https://www.linkedin.com/in/bokai-hsu/'
          behanceURL='https://www.behance.net/bokaihsu'
        />

        <MemberCard
          pictureName='Harman'
          fullName='Harmanpreet Kaur'
          position='UI/UX Designer'
          linkedinURL='https://www.linkedin.com/in/harman-jhita/'
        />

        <MemberCard
          pictureName='Manpreet'
          fullName='Manpreet Kaur'
          position='UI/UX Designer'
          linkedinURL='https://www.linkedin.com/in/manpreet-kaur7'
          behanceURL='https://www.behance.net/manpreetkaur24'
        />

        <MemberCard
          pictureName='Hiril'
          fullName='Hiril Kainth'
          position='UI/UX Designer'
          linkedinURL='https://www.linkedin.com/in/hiril-kainth-3ba598171/'
        />
      </div>
    </DIV>
  )
}

export default Team
