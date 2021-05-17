import styled from 'styled-components'
import { globalValues } from '../../styles/ThemeConfig'
import MemberCard from './MemberCard'

const Team = () => {
  return (
    <DIV id="team">
      <div className="textDiv">
        <h1>Meet the Team</h1>
        <p>
          Taste It is brought to you by a team of 10 members from diverse backgrounds with different working
          experiences. We are passionate about solving daily problems by creating a positive impact on the community
          with the help of technology.
        </p>
      </div>

      <div className="membersDiv">
        <MemberCard
          picturePath="/v1620748327/TeamPictures/Mert_rwiexx.jpg"
          fullName="Mert Oktem"
          position="Lead Developer"
          linkedinURL="https://www.linkedin.com/in/mert-oktem/"
          githubURL="https://www.github.com/mert-oktem"
        />

        <MemberCard
          picturePath="/v1620748327/TeamPictures/Chloe_txwgai.jpg"
          fullName="Chloe Bui"
          position="Lead Designer"
          linkedinURL="https://www.linkedin.com/in/chloe-buii/"
          behanceURL="https://www.behance.net/chloebui"
        />

        <MemberCard
          picturePath="/v1620748327/TeamPictures/Milad_nf9igv.jpg"
          fullName="Milad Mokhtari"
          position="Project Manager"
          linkedinURL="https://linkedin.com/in/milad-mokhtari/"
        />

        <MemberCard
          picturePath="/v1620748328/TeamPictures/Antrix_c1obrs.jpg"
          fullName="Antriksh Saini"
          position="Full Stack Developer"
          linkedinURL="https://www.linkedin.com/in/antriksh-saini/"
          githubURL="https://github.com/antrikshsaini"
        />

        <MemberCard
          picturePath="/v1620748327/TeamPictures/Taichi_sipz9j.jpg"
          fullName="Taichi Murai"
          position="Full Stack Developer"
          linkedinURL="https://www.linkedin.com/in/taichimurai/"
          githubURL="https://github.com/epmt6528"
        />

        <MemberCard
          picturePath="/v1620748328/TeamPictures/Arjun_lwh1sd.jpg"
          fullName="Arjun Dhingra"
          position="Front End Developer"
          linkedinURL="https://www.linkedin.com/in/arjun-dhingra-617749159/"
          githubURL="https://github.com/arjund96"
        />

        <MemberCard
          picturePath="/v1620748326/TeamPictures/Kai_uel5f7.jpg"
          fullName="Bokai Hsu"
          position="UI/UX Designer"
          linkedinURL="https://www.linkedin.com/in/bokai-hsu/"
          behanceURL="https://www.behance.net/bokaihsu"
        />

        <MemberCard
          picturePath="/v1620748327/TeamPictures/Harman_o2fmc5.jpg"
          fullName="Harmanpreet Kaur"
          position="UI/UX Designer"
          linkedinURL="https://www.linkedin.com/in/harman-jhita/"
        />

        <MemberCard
          picturePath="/v1620748327/TeamPictures/Manpreet_bznask.jpg"
          fullName="Manpreet Kaur"
          position="UI/UX Designer"
          linkedinURL="https://www.linkedin.com/in/manpreet-kaur7"
          behanceURL="https://www.behance.net/manpreetkaur24"
        />

        <MemberCard
          picturePath="/v1620748326/TeamPictures/Hiril_px6eld.jpg"
          fullName="Hiril Kainth"
          position="UI/UX Designer"
          linkedinURL="https://www.linkedin.com/in/hiril-kainth-3ba598171/"
        />
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  padding: 96px ${globalValues.edgePaddingMobile};

  h1 {
    margin-bottom: 15px;
  }
`

export default Team
