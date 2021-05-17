import TextField from '@material-ui/core/TextField'

type Props = {
  label: string
  value: string
  handleChange
  multiline?: boolean
  rows?: number
}

const CustomTextField = (props: Props) => {
  const { label, value, handleChange, multiline, rows } = props

  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={handleChange}
      multiline={multiline}
      rows={rows ? rows : 1}
    />
  )
}

export default CustomTextField
