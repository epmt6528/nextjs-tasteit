import { useState } from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { colorPallete } from '../../../styles/ThemeConfig'
import { PreferenceOptionButton } from '.'

export const PreferenceTable = (props) => {
  const { preferences, handleChange } = props

  const [value, setValue] = useState(0)

  const handleTab = (event, newValue) => {
    setValue(newValue)
  }

  const cuisineTypeOptions = ['Indian', 'Vietnamese', 'Japanese', 'French', 'Mexican', 'Korean', 'Chinese', 'Thai']

  const allergyOptions = ['Milk', 'Eggs', 'Fish', 'Shellfish', 'Nuts', 'Peanuts', 'Wheat', 'Soy']

  const dietTypeOptions = ['Vegetarian', 'Gluten Free', 'Halal', 'Kosher', 'Diabetic', 'Vegan', 'Organic']

  const spicinessOptions = ['Very High', 'High', 'Moderate', 'Not Spicy']

  return (
    <DIV>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTab} variant="scrollable">
          <Tab label="Cuisine Type" />
          <Tab label="Allergy" />
          <Tab label="Diet Type" />
          <Tab label="Spiciness" />
        </Tabs>
      </AppBar>

      {/* Cuisine Type */}
      <TabPanel value={value} index={0}>
        {cuisineTypeOptions.map((option) => {
          return (
            <PreferenceOptionButton
              id={option}
              option={option}
              checked={preferences[option]}
              handleChange={handleChange}
            />
          )
        })}
      </TabPanel>

      {/* Allergy */}
      <TabPanel value={value} index={1}>
        {allergyOptions.map((option) => {
          return (
            <PreferenceOptionButton
              id={option}
              option={option}
              checked={preferences[option]}
              handleChange={handleChange}
            />
          )
        })}
      </TabPanel>

      {/* Diet Types */}
      <TabPanel value={value} index={2}>
        {dietTypeOptions.map((option) => {
          return (
            <PreferenceOptionButton
              id={option}
              option={option}
              checked={preferences[option]}
              handleChange={handleChange}
            />
          )
        })}
      </TabPanel>

      {/* Spiciness */}
      <TabPanel value={value} index={3}>
        {spicinessOptions.map((option) => {
          return (
            <PreferenceOptionButton
              id={option}
              option={option}
              checked={preferences[option]}
              handleChange={handleChange}
            />
          )
        })}
      </TabPanel>
    </DIV>
  )
}

const TabPanel = (props) => {
  const { value, index, children } = props
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  )
}

const DIV = styled.div`
  .MuiAppBar-root {
    background-color: ${colorPallete.white};
    box-shadow: none;
    color: ${colorPallete.darkParple};
  }

  .MuiTab-root {
    padding: 0;
    margin: 0 20px;
    min-height: 30px;
    font-family: 'Nexa Bold';
    text-transform: none;
    color: ${colorPallete.darkParple};

    &:first-of-type {
      margin: 0 20px 0 0;
    }

    &.Mui-selected {
      color: ${colorPallete.burple};
    }
  }

  .MuiTabs {
    &-root {
      align-items: center;
      margin: 30px 0;
    }

    &-scroller {
      height: 30px;
    }

    &-indicator {
      background-color: ${colorPallete.burple};
    }
  }
`

export default PreferenceTable
