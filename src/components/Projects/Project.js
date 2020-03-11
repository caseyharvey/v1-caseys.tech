import React from 'react';

const Project = props => {
  return (
    <>
      <div className='title-container'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='project-name'
          href={props.url}
        >
          {props.name}
        </a>
        <div className='type'>{props.type}</div>
      </div>
      <div className='info-container'>
        <div className='links-container'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='link-button'
            href={props.github}
          >
            the code
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='link-button'
            href={props.url}
          >
            the app
          </a>
        </div>
        <div className='info'>
          <p>{props.about}</p>
        </div>
      </div>
    </>
  );
};

export default Project;
