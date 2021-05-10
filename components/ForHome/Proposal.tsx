import Image from 'next/image'

import { DIV } from './ProposalStyled'

const Proposal = () => {
  return (
    <DIV>
      <Image
        src='/img/ForHome/cooking.png'
        alt='Salmon and Egg'
        width={343}
        height={302}
      />
      <div className='textDiv'>
        <h1>Ready to see what we are working on?</h1>
        <p>
          If you are curious to know more about our solutions, please feel free
          to take a look at our project proposal
        </p>
      </div>

      <a
        href='https://drive.google.com/file/d/1couz50H6GlM9GlTLKE4Zx032h2m0bowI/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
      >
        <button>Download Now</button>
      </a>
    </DIV>
  )
}

export default Proposal
