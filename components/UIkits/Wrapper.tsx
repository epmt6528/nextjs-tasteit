import styled from 'styled-components'
import { globalValues, colorPallete } from '../../styles/ThemeConfig'

const Wrapper = (props) => {
  const { children } = props
  return <DIV>{children}</DIV>
}

const DIV = styled.div`
  border: 1px solid ${colorPallete.lightParple};
  background-color: ${colorPallete.white};
  border-radius: 20px;
  padding: 42px ${globalValues.edgePaddingMobile};
`

export default Wrapper
