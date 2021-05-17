import styled from 'styled-components'
import { globalValues, colorPallete } from '../../styles/ThemeConfig'

const Footer = () => {
  return (
    <DIV>
      <img src="/img/ForHome/logo.svg" alt="taste it" width="131" height="110" />

      <div className="bodyDiv">
        <div className="aboutUs">
          <h3>About Us</h3>
          <p>
            Taste It is an online food delivery platform that provides you with new food experiences through mystery
            dishes that are tailored to suit your preferences.
          </p>
        </div>

        <div className="designAssets">
          <h3>Design Assets</h3>
          <ul>
            <li>
              <a
                href="https://drive.google.com/file/d/1yceSuEx_1c0OaPuNDdOCbkWVwmgJzl96/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marketing Materials
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1xyw8zCXyBQw8WLB6mlqE-3s5VQuf4VbM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Promotional Videos
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1couz50H6GlM9GlTLKE4Zx032h2m0bowI/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Proposal
              </a>
            </li>
          </ul>
        </div>

        <div className="developmentAssets">
          <h3>Development Assets</h3>
          <ul>
            <li>
              <a
                href="https://drive.google.com/file/d/1yYfzrGLuL1vLHddLz_kNvPOrJnSYjPlY/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tech Stacks
              </a>
            </li>
            <li>
              <a href="https://github.com/antrikshsaini/taste-it-merchants" target="_blank" rel="noopener noreferrer">
                GitHub (Restaurant)
              </a>
            </li>
            <li>
              <a href="https://github.com/mert-oktem/taste-it-customer" target="_blank" rel="noopener noreferrer">
                GitHub (Customer)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footerDiv">
        <p>Made with love remotely from Vancouver, BC.</p>
        <p>© 2020 Taste It. All rights reserved.</p>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  margin: 76px ${globalValues.edgePaddingMobile};

  p,
  a {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .bodyDiv {
    margin: 61px 0;
    display: grid;
    gap: 30px 5px;
    grid-template: 1fr / 1fr 1fr;

    h3 {
      color: ${colorPallete.burple};
      margin-bottom: 20px;
    }
  }

  .aboutUs {
    grid-column: 1 / -1;
  }

  hr {
    border: 1px solid ${colorPallete.lightParple};
  }

  .footerDiv {
    margin-top: 43px;
    text-align: center;

    p {
      margin-bottom: 21px;
    }
  }
`

export default Footer
