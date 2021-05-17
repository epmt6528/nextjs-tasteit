import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { colorPallete } from '../../styles/ThemeConfig'

type Props = {
  label: string
  onClick
}

const ButtonStyled = (props: Props) => {
  const { label, onClick } = props

  return (
    <DIV>
      <Button variant="contained" onClick={onClick}>
        {label}
      </Button>
    </DIV>
  )
}

const DIV = styled.div`
  button {
    font-family: 'Nexa XBold';
    font-size: 1rem;
    text-transform: none;
    border: none;
    border-radius: 20px;
    padding: 19px 64px;
    color: ${colorPallete.white};
    background-color: ${colorPallete.burple};
  }
`

export default ButtonStyled
