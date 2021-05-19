import Link from 'next/link'
import styled from 'styled-components'
import { colorPallete } from '../../../styles/ThemeConfig'

type Props = {
  href: string
  icon
  label: string
  onClick
  selected?: boolean
}

const NavigationTab = (props: Props) => {
  const { href, icon, label, onClick, selected } = props

  const DIV = styled.div`
    width: 90%;
    max-width: 343px;
    padding: 20px 36px;
    border-radius: 16px;
    margin: 10px auto;

    background-color: ${selected ? colorPallete.burple : colorPallete.white};

    a {
      display: flex;
      align-items: center;
      color: ${selected ? colorPallete.white : colorPallete.darkParple};
    }

    svg {
      width: 30px;
      margin-right: 20px;
      fill: ${selected ? colorPallete.white : colorPallete.darkParple};
      stroke: ${selected ? colorPallete.white : colorPallete.darkParple};
    }

    span {
      font-size: 1.5rem;
      font-family: 'Nexa Bold';
      padding-top: 6px;
    }
  `

  return (
    <DIV onClick={onClick} selected={selected}>
      <Link href={href}>
        <a>
          {icon}
          <span>{label}</span>
        </a>
      </Link>
    </DIV>
  )
}

export default NavigationTab
