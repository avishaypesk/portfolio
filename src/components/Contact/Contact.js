import React, { useState } from 'react';
import socialMedia from '../../data/socialMedia';
import './Contact.css'
import Button from '../Button/Button';

const InputField = ({ label, type, value, onChange, placeholder, className }) => {
  const inputClasses = 'w-full input-bg border py-[9px] px-4 text-[13px] text-darkgrayishblue leading-30px font-public-sans placeholder-gray-400 focus:outline-none focus:border-cyan ' + className;

  return (
    <div className='mb-4'>
      <label htmlFor={label} className='block text-[13px] font-bold opacity-80 font-public-sans leading-30px mb-2'>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
          required
        />
      ) : (
        <input
          type={type}
          id={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
          required
        />
      )}
    </div>
  );
};

const Contact = () => {
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
        <p className='font-public-sans leading-30px text-body2'>
          I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in Tel Aviv. But I’m also happy to hear about opportunities that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please feel free to check out my online profiles below and get in touch using the form.
        </p>
        <ul className='flex space-x-4 mt-6'>
          {socialMedia.map((item) => (
            <li key={item.name}>
              <a href={item.url}>
                <img src={item.icon} alt={item.name} className='w-6 h-6' />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className='mt-8'>
        <h2 className="font-ibarra-real-nova tracking-tighter leading-42px text-h2 font-bold mb-6">Contact Me</h2>

        <InputField
          label='Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Your name'
        />

        <InputField
          label='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email@example.com'
        />

        <InputField
          label='Message'
          type='textarea'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='How can I help?'
          className='h-[72px]'
        />

        <button type='submit' className='uppercase px-8 py-4 font-public-sans tracking-[2px] text-xs leading-none text-white bg-darkblue hover:bg-cyan'>
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;