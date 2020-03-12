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
          <div className='my-name'>Contact me</div>
          <a href='mailto:contact@caseyharvey.space?' className='my-email'>
            contact@caseyharvey.space
          </a>
        </div>
        <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name='name'
              type='text'
              autoComplete='off'
              placeholder='Name'
              className='contact-name'
              ref={register({ required: true, maxLength: 80 })}
            />
            {errors.name && errors.name.type === 'required' && (
              <span className='error'>This field is required</span>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
              <span className='error'> only 80 characters allowed</span>
            )}
            <input
              type='text'
              name='email'
              autoComplete='off'
              placeholder='Email'
              className='contact-email'
              ref={register({
                required: true,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span className='error'>This field is required</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span className='error'>please enter a valid email</span>
            )}
            <textarea
              rows='8'
              name='message'
              autoCorrect='off'
              autoComplete='off'
              placeholder='Message'
              className='contact-message'
              ref={register({ required: true, maxLength: 500 })}
            />
            {errors.message && errors.message.type === 'required' && (
              <span className='error'>This field is required</span>
            )}
            {errors.message && errors.message.type === 'maxLength' && (
              <span className='error'> only 500 characters allowed</span>
            )}

            <input className='submit' type='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
