import React, { useState } from 'react'
import socialMedia from '../../data/socialMedia';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='text-grayishdarkblue'>
      <div className='border-y-[1px] border-grayishdarkblue border-opacity-20 pb-8'>
        <h2 className="font-ibarra-real-nova tracking-tighter leading-42px text-h2 font-bold my-6">Get in Touch</h2>
        <p className='font-public-sans leading-30px text-body2' >I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in Tel Aviv. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
        <ul className='flex space-x-4 mt-6'>
          {socialMedia.map((item) => (
            <li key={item.name}>
              <a href={item.url}>
                <img src={item.icon} target="_blank" alt={item.name} className='w-6 h-6' />
              </a>
            </li>
          ))}
        </ul>

      </div>

      <form onSubmit={handleSubmit} className='mt-8'>
      <h2 className="font-ibarra-real-nova tracking-tighter leading-42px text-h2 font-bold mb-6">Contact Me</h2>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-body2 font-public-sans'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-body1 font-public-sans placeholder-gray-400 focus:outline-none focus:border-blue-500'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-body2 font-public-sans'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-body1 font-public-sans placeholder-gray-400 focus:outline-none focus:border-blue-500'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-body2 font-public-sans'>Message</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-body1 font-public-sans placeholder-gray-400 focus:outline-none focus:border-blue-500'
            placeholder='Enter your message'
            rows={4}
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default Contact