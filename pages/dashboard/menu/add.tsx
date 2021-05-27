import { useState } from 'react'
import { DashboardWrap } from '../../../components/ForApp/dashboard'
import { Button, Wrapper } from '../../../components/UIkits'
import styled from 'styled-components'
import { DishEditor } from '../../../components/ForApp/dashboard'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const Add = () => {
  const user = useSelector((state: RootState) => state.user.user)

  const [values, setValues] = useState({
    restaurantID: user.sub,
    name: '',
    price: '',
    desc: '',
    imgURL: '',
  })

  const [preferences, setPreferences] = useState({
    Indian: false,
    Vietnamese: false,
    Japanese: false,
    French: false,
    Mexican: false,
    Korean: false,
    Chinese: false,
    Thai: false,
    Milk: false,
    Eggs: false,
    Fish: false,
    Shellfish: false,
    Nuts: false,
    Peanuts: false,
    Wheat: false,
    Soy: false,
    Vegetarian: false,
    'Gluten Free': false,
    Halal: false,
    Kosher: false,
    Diabetic: false,
    Vegan: false,
    Organic: false,
    'Very High': false,
    High: false,
    Moderate: false,
    'Not Spicy': false,
  })

  const addNewDish = (e) => {
    e.preventDefault
    // fetch('/api/menu/add', {
    //   method: 'POST',
    //   body: JSON.stringify(values),
    // })
    console.log(values)
    console.log(preferences)
  }

  return (
    <DashboardWrap comment="Let's customize your menu now. ✍️" pageTitle="Add New Dish">
      <Wrapper>
        <DIV>
          <DishEditor values={values} setValues={setValues} preferences={preferences} setPreferences={setPreferences} />
          <Button label="Add New Dish" onClick={addNewDish} />
        </DIV>
      </Wrapper>
    </DashboardWrap>
  )
}

const DIV = styled.div``

export default Add
