import { useState } from 'react'
import Link from 'next/link'
import { DIV } from './HeaderStyled'

const MobileMenu = (props) => {
  const { menuIsOpen, setMenuIsOpen } = props

  return (
    <div className={`mobileNav ${menuIsOpen ? 'open' : 'close'}`}>
      <div className="mobileNavHeader">
        <img src="/img/ForHome/logoMobile.svg" alt="Taste It" width="38" height="38" />

        <img src="/img/ForHome/close.svg" alt="Close" width="14" height="14" onClick={() => setMenuIsOpen(false)} />
      </div>

      <nav className="mobileNavLinks">
        <ul>
          <li>
            <a href="#howItWorks" onClick={() => setMenuIsOpen(false)}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setMenuIsOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => setMenuIsOpen(false)}>
              Team
            </a>
          </li>
          <li>
            <Link href="/signin">
              <a onClick={() => setMenuIsOpen(false)}>
                <button>For Restaurant</button>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mobileNavFooter">
        <p>Made with love remotely from Vancouver, BC.</p>
        <p>© 2020 Taste It. All rights reserved.</p>
      </div>
    </div>
  )
}

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <DIV>
      <div className="mobileHeader">
        <img src="/img/ForHome/logoMobile.svg" alt="Taste It" width="38" height="38" />

        <img
          src="/img/ForHome/navigation.svg"
          alt="Main Menu"
          width="24"
          height="24"
          onClick={() => setMenuIsOpen(true)}
        />

        <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </div>
    </DIV>
  )
}

export default Header
