// materialUI
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

type Props = {
  label: string
  value: string
  handleChange
  options: string[]
}

const Dropdown = (props: Props) => {
  const { label, value, handleChange, options } = props

  return (
    <FormControl variant="outlined">
      <InputLabel id={label}>{label}</InputLabel>
      <Select labelId={label} id={label} value={value} onChange={handleChange} label={label}>
        {options.map((option) => {
          return <MenuItem value={option}>{option}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

export default Dropdown
