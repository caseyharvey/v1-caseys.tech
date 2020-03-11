import React from 'react';

const Project = props => {
  return (
    <>
      <div className='title-container'>
        <div>{props.type}</div>
        <div className='project-name'>{props.name}</div>
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
