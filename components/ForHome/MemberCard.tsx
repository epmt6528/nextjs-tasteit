import Image from 'next/image'
import styled from 'styled-components'
import { colorPallete } from '../../styles/ThemeConfig'

const MemberCard = (props) => {
  const { picturePath, fullName, position, linkedinURL, behanceURL, githubURL } = props
  return (
    <DIV>
      <Image src={picturePath} alt={fullName} width={306} height={276} objectFit="cover" />
      <h3>{fullName}</h3>
      <p>{position}</p>
      <ul>
        <li>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <img src={`/img/ForHome/linkedin.svg`} alt="linkedin" width="24" height="24" />
          </a>
        </li>

        {behanceURL ? (
          <li>
            <a href={behanceURL} target="_blank" rel="noopener noreferrer">
              <img src={`/img/ForHome/behance.svg`} alt="behance" width="24" height="24" />
            </a>
          </li>
        ) : (
          ''
        )}

        {githubURL ? (
          <li>
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <img src={`/img/ForHome/github.svg`} alt="github" width="24" height="24" />
            </a>
          </li>
        ) : (
          ''
        )}
      </ul>
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 49px;
  padding: 21px 18px;
  background-color: ${colorPallete.lightYellow};

  text-align: center;

  h3 {
    color: ${colorPallete.burple};
    font-size: 1.5rem;
    line-height: 1.5;
    margin-top: 22px;
  }

  ul {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    li {
      margin: 0 10px;
    }
  }
`

export default MemberCard
