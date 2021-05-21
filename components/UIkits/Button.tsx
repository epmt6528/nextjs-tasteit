import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { colorPallete } from '../../styles/ThemeConfig'
import AddIcon from '@material-ui/icons/Add'

type Props = {
  label: string
  onClick?
  secondary?: boolean
  adornment?: string
  fullWidth?: boolean
}

const ButtonStyled = (props: Props) => {
  const { label, onClick, secondary, adornment, fullWidth } = props

  const DIV = styled.div`
    button {
      font-family: 'Nexa XBold';
      font-size: 1rem;
      text-transform: none;
      border-radius: 20px;
      // padding: 19px 64px;
      height: 56px;
      box-shadow: none;

      width: ${() => (fullWidth ? '100%' : '226px')};
      border: ${() => (secondary ? `2px solid ${colorPallete.burple}` : 'none')};
      color: ${() => (secondary ? colorPallete.burple : colorPallete.white)};
      background-color: ${() => (secondary ? colorPallete.white : colorPallete.burple)};

      & :hover {
        background-color: ${colorPallete.burple};
        box-shadow: 0 0 25px 0 rgba(111, 50, 249, 0.5);
      }
    }
  `

  const icon = <AddIcon />

  return (
    <DIV>
      <Button variant="contained" onClick={onClick} startIcon={adornment ? icon : false}>
        {label}
      </Button>
    </DIV>
  )
}

export default ButtonStyled
