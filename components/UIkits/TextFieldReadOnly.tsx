import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { colorPallete } from '../../styles/ThemeConfig'

type Props = {
  label: string
  value: string
  rows?: number
}

const CustomTextField = (props: Props) => {
  const { label, value, rows } = props

  return (
    <DIV>
      <TextField label={label} value={value} multiline={rows ? true : false} rows={rows ? rows : 1} disabled />
    </DIV>
  )
}

const DIV = styled.div`
  .MuiFormControl-root {
    border: none;
  }

  .MuiFormLabel-root.Mui-disabled {
    font-family: 'Nexa XBold';
    color: ${colorPallete.darkParple};
  }

  .MuiInputLabel-shrink {
    padding: 0;
    transform: translate(0, -2px) scale(0.75);
  }

  .MuiInputBase-input {
    font-family: 'Nexa Regular';
    font-size: 0.9rem;
  }

  .MuiInput-underline.Mui-disabled:before {
    border-bottom: 1px solid ${colorPallete.lightParple};
  }
`

export default CustomTextField
