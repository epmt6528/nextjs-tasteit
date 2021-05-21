import Link from 'next/link'
import { useState } from 'react'
import { DashboardWrap, MenuCard } from '../../../components/ForApp/dashboard'
import { Button, Dropdown, TextField, Wrapper } from '../../../components/UIkits'
import styled from 'styled-components'

const Menu = () => {
  const [searchWord, setSearchWord] = useState('')
  const [sortOption, setSortOption] = useState('Sort By Latest')

  const sortOptions = ['Sort By Latest']

  return (
    <DashboardWrap comment="Let's customize your menu now. ✍️" pageTitle="Menu">
      <Wrapper>
        <DIV>
          <TextField label="Search" value={searchWord} handleChange={setSearchWord} abdornment="search" />
          <Dropdown label="" value={sortOption} handleChange={setSortOption} options={sortOptions} abdornment="sort" />
          <Link href="/dashboard/menu/add">
            <a>
              <Button label="Add New Dish" adornment="Add" fullWidth />
            </a>
          </Link>

          <ul>
            <li>
              <MenuCard menuId="1" imgName="test" menuName="Black Truffle Omelette" status="Sold Out" />
            </li>
          </ul>
          <Button label="Load More" secondary />
        </DIV>
      </Wrapper>
    </DashboardWrap>
  )
}

const DIV = styled.div`
  .MuiFormControl-root {
    margin-top: 0;
  }

  ul {
    margin: 47px 0;
  }

  li {
    margin-bottom: 30px;
  }
`

export default Menu
