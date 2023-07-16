import React from 'react';
import { useForm } from '@formspree/react';
import validator from 'validator';
import socialMedia from '../../data/socialMedia';
import './Contact.css';

const InputField = ({ label, type, name, placeholder, value, onChange, error }) => {
  const inputClasses = `w-full input-bg border py-[9px] px-4 text-[13px] leading-30px font-public-sans placeholder-gray-400 focus:outline-none focus:border-cyan ${error ? 'border-brightred' : 'border-inherit'}`;

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-[13px] font-bold opacity-80 font-public-sans leading-30px mb-2'>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
          required
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
          required
        />
      )}
      {error && <p className='text-brightred text-[10px] leading-3 font-bold italic font-public-sans mt-1'>{error}</p>}
    </div>
  );
};


const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [messageError, setMessageError] = React.useState('');

  const [state, handleSubmit] = useForm("xeqbqzyj");
  const { submitting, succeeded } = state;

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  const validateForm = () => {
    let isValid = true;

    if (validator.isEmpty(name)) {
      setNameError('Name is required');
      isValid = false;
    }

    if (validator.isEmpty(email)) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validator.isEmail(email)) {
      setEmailError('Please provide a valid email');
      isValid = false;
    }

    if (validator.isEmpty(message)) {
      setMessageError('Message is required');
      isValid = false;
    }

    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleSubmit(e);

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='text-grayishdarkblue max-w-[1100px]'>
      <div className='border-y-[1px] border-grayishdarkblue border-opacity-20 pb-8 xl:flex xl:py-12 xl:justify-between'>
        <h2 className='font-ibarra-real-nova tracking-tighter leading-42px text-h2 font-bold my-6 xl:my-0'>Get in Touch</h2>
        <div>
          <p className='font-public-sans leading-30px text-body2 xl:max-w-[635px]'>
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
      </div>

      <form onSubmit={handleFormSubmit} className='mt-8 xl:mt-12 xl:flex xl:justify-between ' noValidate>
        <h2 className='font-ibarra-real-nova tracking-tighter leading-42px text-h2 font-bold mb-6'>Contact Me</h2>
        <div className='xl:w-[635px]'>
          <InputField
            label='Name'
            type='text'
            name='name'
            placeholder='Your name'
            value={name}
            onChange={handleNameChange}
            error={nameError}
          />

          <InputField
            label='Email'
            type='email'
            name='email'
            placeholder='email@example.com'
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />

          <InputField
            label='Message'
            type='textarea'
            name='message'
            placeholder='How can I help?'
            value={message}
            onChange={handleMessageChange}
            className='h-[72px]'
            error={messageError}
          />

          <button type='submit' className='uppercase px-8 py-4 font-public-sans tracking-[2px] text-xs leading-none text-white bg-darkblue hover:bg-cyan disabled:bg-gray-400' disabled={submitting}>
            {submitting ? 'Submitting...' : 'Send message'}
          </button>
        </div>
      </form>

      {succeeded && (
        <div className='text-sm font-public-sans text-darkblue mt-4'>
          Thank you for your message! I will get back to you as soon as possible.
        </div>
      )}
    </div>
  );
};

export default Contact;
