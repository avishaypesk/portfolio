import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import Avishay from '../../assets/images/me.png'

function About() {
  return (
    <div className='mt-24 text-grayishdarkblue md:flex'>
      <img src={Avishay} alt='Avishay Peskin (Me)' className='max-w-[360px] w-full m-auto md:w-[280px] md:h-[600px] md:mr-[70px] md:object-cover' />
      <div id='about' className="border-y-[1px] border-grayishdarkblue border-opacity-20 mt-8 pt-8 pb-12 md:mt-0 md:pt-[50px]">
        <h2 className='font-ibarra-real-nova text-h2 font-bold leading-42px'>About Me</h2>
        <p className="font-public-sans my-6 font-normal text-body1 leading-30px">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Tel Aviv, Israel, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
        <Link to='/projects'>
          <Button text='Go to porfolio' />
        </Link>
      </div>
    </div>
  )
}

export default About