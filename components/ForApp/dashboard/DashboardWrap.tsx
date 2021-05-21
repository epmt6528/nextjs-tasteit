import { Header, PageTitle } from '.'
import styled from 'styled-components'
import { globalValues, colorPallete } from '../../../styles/ThemeConfig'

const DashboardWrap = (props) => {
  const { comment, pageTitle, children } = props

  return (
    <DIV>
      <Header />
      <PageTitle comment={comment} pageTitle={pageTitle} />

      <div className="main">{children}</div>
    </DIV>
  )
}

const DIV = styled.div`
  .main {
    padding: 63px ${globalValues.edgePaddingMobile};
    background-color: ${colorPallete.lightYellow};
  }
`

export default DashboardWrap
