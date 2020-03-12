import React from 'react';
import { useForm } from 'react-hook-form';
import './contact.sass';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className='page-container'>
      <div className='contact-container'>
        <div className='contact-details'>
          <div className='my-name'>Casey Harvey</div>
          <div className='my-mobile'>+69 490 949 690</div>
          <div className='my-email'>contact@caseyharvey.space</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name='Name'
            type='text'
            placeholder='Name'
            className='contact-name'
            ref={register({ required: true, maxLength: 80 })}
          />
          <input
            type='text'
            name='Email'
            placeholder='Email'
            className='contact-email'
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <textarea
            rows='8'
            name='Message'
            placeholder='Message'
            className='contact-message'
            ref={register({ required: true, maxLength: 500 })}
          />

          <input className='submit' type='submit' />
        </form>
      </div>
    </div>
  );
};
export default Contact;
