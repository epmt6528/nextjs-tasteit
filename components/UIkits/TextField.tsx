import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

type Props = {
  label: string
  value: string
  handleChange
  rows?: number
  abdornment?: string
}

const CustomTextField = (props: Props) => {
  const { label, value, handleChange, rows, abdornment } = props

  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={handleChange}
      multiline={rows ? true : false}
      rows={rows ? rows : 1}
      InputProps={{
        startAdornment: abdornment ? (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ) : (
          false
        ),
      }}
    />
  )
}

export default CustomTextField
