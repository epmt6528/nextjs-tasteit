import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

type Props = {
  menuId: string
  imgName: string
  menuName: string
  status: string
}

const MenuCard = (props: Props) => {
  const { menuId, imgName, menuName, status } = props

  return (
    <Link href={`/dashboard/menu/${menuId}`}>
      <a>
        <DIV>
          <Image src="/v1620748193/HomeGraphics/lobster_rhon1u.png" alt={menuName} width={291} height={283} />
          <h3>{menuName}</h3>
          <p>{status}</p>
        </DIV>
      </a>
    </Link>
  )
}

const DIV = styled.div`
  h3 {
    margin: 18px 0;
  }

  p {
    font-size: 0.75rem;
  }
`

export default MenuCard
