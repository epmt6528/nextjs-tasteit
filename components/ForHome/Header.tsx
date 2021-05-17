import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colorPallete, globalValues } from '../../styles/ThemeConfig'
import { Button } from '../UIkits'

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
                <Button label="For Restaurant" />
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

const DIV = styled.div`
  .mobileHeader {
    padding: ${globalValues.edgePaddingMobile};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobileNav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: ${globalValues.edgePaddingMobile};
    background-color: ${colorPallete.lightYellow};
    text-align: center;

    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1;

    transition: left 0.5s, right 0.5s;

    &Header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &Links {
      padding-top: 50px;
      flex-grow: 1;

      li {
        margin: 35px 0;
      }

      a {
        font-size: 1.5rem;
      }
    }

    &Footer {
      p {
        font-size: 0.75rem;
        margin-bottom: 21px;
      }
    }
  }

  .close {
    left: 100vw;
    right: -100vw;
  }

  .open {
    left: 0;
    right: 0;
  }
`

export default Header
