import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import Avishay from '../../assets/images/me.png'

function About() {
  return (
    <div className='mt-24 mx-auto xl:mt-[150px] text-grayishdarkblue md:flex xl:flex xl:justify-between max-w-[1280px]'>
      <img src={Avishay} alt='Avishay Peskin (Me)' className='max-w-[360px] w-full m-auto md:w-[280px] md:h-[600px] md:mr-[70px] md:object-cover xl:h-[600ox] xl:w-[560px] xl:max-w-full xl:m-0 xl:mr-[125px] xl:rounded-full' />
      <div id='about' className="border-t-[1px] border-grayishdarkblue border-opacity-20 mt-8 pt-8 pb-12 md:mt-0 md:pt-[50px] xl:w-[350px] 2xl:w-[650px]">
        <h2 className='font-ibarra-real-nova text-h2 font-bold leading-42px'>About Me</h2>
        <p className="font-public-sans my-6 font-normal text-body1 leading-30px">I’m a junior front-end developer looking for a new role in an exciting company. My core expertise revolves around crafting accessible HTML, implementing modern CSS practices, and writing well-structured JavaScript code. While React is my primary framework of choice, I am highly adaptable to any toolset required by the team. I’m based in Tel Aviv, Israel, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you'll most likely find me reading, playing chess or watching movies. I also like spending time outdoors, and hiking with my friends is one of my favorite activities. I invite you to explore my work and consider me as a potential asset to your team. Let's create something remarkable together!</p>
        <Link to='/projects'>
          <Button text='Go to porfolio' />
        </Link>
      </div>
    </div>
  )
}

export default About