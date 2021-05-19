import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { colorPallete } from '../../styles/ThemeConfig'

type Props = {
  label: string
  onClick?
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
    box-shadow: none;

    & :hover {
      background-color: ${colorPallete.burple};
      box-shadow: 0 0 25px 0 rgba(111, 50, 249, 0.5);
    }
  }
`

export default ButtonStyled
