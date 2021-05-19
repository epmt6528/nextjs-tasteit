import Link from 'next/link'
import styled from 'styled-components'
import { colorPallete, globalValues } from '../../styles/ThemeConfig'

const MobileNavigation = (props): JSX.Element => {
  const { children, menuIsOpen, setMenuIsOpen, dashboard } = props

  return (
    <DIV dashboard={dashboard}>
      <Header
        toggleBtn="navigation.svg"
        setMenuIsOpen={() => {
          setMenuIsOpen(true)
        }}
      />

      <nav className={menuIsOpen ? 'open' : 'close'}>
        <Header
          toggleBtn="close.svg"
          setMenuIsOpen={() => {
            setMenuIsOpen(false)
          }}
        />

        {children}
      </nav>
    </DIV>
  )
}

const Header = (props) => {
  const { toggleBtn, setMenuIsOpen } = props

  return (
    <header>
      <Link href="/">
        <a>
          <img src="/img/ForHome/logo.svg" alt="Taste It" className="logo" />
        </a>
      </Link>

      <img src={`/img/ForHome/${toggleBtn}`} onClick={setMenuIsOpen} className="toggleBtn" />
    </header>
  )
}

const DIV = styled.div`
  header {
    width: 100%;
    padding: ${globalValues.edgePaddingMobile};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 47px;
    }

    .toggleBtn {
      width: 24px;
    }
  }

  nav {
    // Change background color depending on home or dashboard
    background-color: ${(props) => (props.dashboard ? colorPallete.white : colorPallete.lightYellow)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => (props.dashboard ? 'flex-start' : 'space-between')};

    text-align: center;

    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1;

    transition: left 0.5s, right 0.5s;

    &.close {
      left: 100vw;
      right: -100vw;
    }

    &.open {
      left: 0;
      right: 0;
    }
  }
`

export default MobileNavigation
