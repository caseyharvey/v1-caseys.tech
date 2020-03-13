import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './contact.sass';

const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [emailCopied, setEmailCopied] = useState(false);
  const textAreaRef = useRef(null);

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (success, message) => {
    setServerState({
      submitting: false,
      status: { success, message }
    });
    if (success) {
      reset();
    }
  };

  const onSubmit = data => {
    setServerState({ submitting: true });
    axios({
      method: 'POST',
      url: 'https://formspree.io/xgezeega',
      data
    })
      .then(() => {
        handleServerResponse(true, 'Message received');
      })
      .catch(error => {
        console.log(error.response);
        handleServerResponse(
          false,
          'Sorry, something went wrong. Please click on the email link at the top of the page to contact me'
        );
      });
  };

  const copyEmailToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
    setEmailCopied(true);
  };

  return (
    <div className='page-container'>
      <div className='contact-container'>
        <div className='contact-details'>
          <div className='my-name'>Contact me</div>
          <a href='mailto:im@caseyharvey.space?' className='my-email'>
            im@caseyharvey.space
          </a>
          <span onClick={copyEmailToClipboard} className='copy'>
            copy
          </span>
          <span className={emailCopied ? 'success' : 'hide success'}>
            success!
          </span>
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
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/
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

            <input
              className='submit'
              disabled={serverState.submitting}
              type='submit'
            />
            {serverState.status && (
              <span
                className={!serverState.status.success ? 'error' : 'msg-sent'}
              >
                {serverState.status.message}
              </span>
            )}
          </form>
        </div>
        <textarea
          readOnly
          ref={textAreaRef}
          value='im@caseyharvey.space'
          className='hide'
        ></textarea>
      </div>
    </div>
  );
};
export default Contact;
