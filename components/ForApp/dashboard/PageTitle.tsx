import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import styled from 'styled-components'
import { globalValues } from '../../../styles/ThemeConfig'

const PageTitle = (props) => {
  const user = useSelector((state: RootState) => state.user.user)
  const { comment, pageTitle } = props

  return (
    <DIV>
      <p>
        Hi {user.restaurantName}, {comment}{' '}
      </p>
      <h1>{pageTitle}</h1>
    </DIV>
  )
}

const DIV = styled.div`
  padding: 20px ${globalValues.edgePaddingMobile};
`

export default PageTitle
