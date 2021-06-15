import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { PreferenceTable } from '.'
import { PreviewUploader, TextField } from '../../UIkits'

const DishEditor = (props) => {
  const { values, setValues, preferences, setPreferences, setSelectedImg } = props

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handlePreferenceChange = (prop) => {
    setPreferences({ ...preferences, [prop]: !preferences[prop] })
  }

  return (
    <DIV>
      <PreviewUploader setSelectedImg={setSelectedImg} />
      <div className="textFieldDiv">
        <TextField label="Dish Name" value={values.dishName} handleChange={handleChange('name')} />
        <TextField label="Dish Price" value={values.dishPrice} handleChange={handleChange('price')} />
        <TextField label="Description" value={values.description} handleChange={handleChange('desc')} rows={8} />
      </div>

      <div className="preferenceTableDiv">
        <PreferenceTable preferences={preferences} handleChange={handlePreferenceChange} />
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  .textFieldDiv {
    margin-bottom: 60px;
  }

  .preferenceTableDiv {
    margin-bottom: 24px;
  }
`

export default DishEditor
