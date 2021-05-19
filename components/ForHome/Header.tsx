import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Button } from '../UIkits'
import MobileNavigation from '../UIkits/MobileNavigation'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const closeNav = () => {
    setMenuIsOpen(false)
  }

  return (
    <DIV>
      <MobileNavigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}>
        <div className="mobileNavLinks">
          <a href="#howItWorks" onClick={closeNav}>
            How It Works
          </a>
          <a href="#features" onClick={closeNav}>
            Features
          </a>
          <a href="#team" onClick={closeNav}>
            Team
          </a>
          <Link href="/signin">
            <a onClick={closeNav}>
              <Button label="For Restaurant" />
            </a>
          </Link>
        </div>

        <div className="mobileNavFooter">
          <p>Made with love remotely from Vancouver, BC.</p>
          <p>© 2020 Taste It. All rights reserved.</p>
        </div>
      </MobileNavigation>
    </DIV>
  )
}

const DIV = styled.div`
  .mobileNavLinks {
    display: flex;
    flex-direction: column;

    a {
      margin: 35px 0 0;
      font-size: 1.5rem;
    }
  }

  .mobileNavFooter {
    p {
      font-size: 0.75rem;
      margin-bottom: 21px;
    }
  }
`

export default Header
