import styled from 'styled-components'
import { colorPallete } from '../../../styles/ThemeConfig'
import CheckedBox from '../../../public/img/ForApp/icons/checked.svg'
import UncheckedBox from '../../../public/img/ForApp/icons/unchecked.svg'

type Props = {
  id: string
  option: string
  checked: boolean
  handleChange
}

const PreferenceOptionButton = (props: Props) => {
  const { option, checked, handleChange } = props

  const iconFileName = option.replace(' ', '_').toLowerCase()

  return (
    <DIV onClick={() => handleChange(option)}>
      <img src={`/img/ForApp/icons/${iconFileName}.svg`} alt={option} className="preferenceIcon" />
      <p>{option}</p>

      {checked ? <CheckedBox /> : <UncheckedBox />}
    </DIV>
  )
}

const DIV = styled.div`
  padding: 18px;
  margin-bottom: 23px;
  border: 2px solid ${colorPallete.lightParple};
  border-radius: 20px;

  display: flex;
  justify-content: flex-start;

  .preferenceIcon {
    width: 25.97px;
    margin-right: 14px;
  }

  p {
    flex-grow: 1;
  }

  svg {
    width: 16.5px;
  }
`

export default PreferenceOptionButton
