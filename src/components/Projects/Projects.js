import React from 'react';
// import letterC from '../../assets/letterC.png';
import './projects.sass';

class Projects extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <div className='title-container'>
          <div className='project-tag'>React Redux</div>
          <div className='project-name'>Time is money</div>
        </div>
        <div className='info-container'>
          <div className='links-container'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='link-button'
              href='https://github.com/caseyharvey/time-is-money/tree/master/src'
            >
              the code
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='link-button'
              href='https://timeismoney.caseyharvey.space/'
            >
              the app
            </a>
          </div>
          <div className='info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem in maiores veritatis? Nostrum sapiente doloribus
              minus nam rem architecto sunt velit quod. Modi minus corporis unde
              nulla nostrum ducimus id. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Voluptatum voluptate pariatur, doloribus ad quam
            </p>
          </div>
        </div>
        <div className='title-container'>
          <div className='project-tag'>React</div>
          <div className='project-name'>umbleJay</div>
        </div>
        <div className='info-container'>
          <div className='links-container'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='link-button'
              href='https://github.com/caseyharvey/umbleJay/tree/master/src'
            >
              the code
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='link-button'
              href='https://umblejay.caseyharvey.space/'
            >
              the app
            </a>
          </div>
          <div className='info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem in maiores veritatis? Nostrum sapiente doloribus
              minus nam rem architecto sunt velit quod. Modi minus corporis unde
              nulla nostrum ducimus id. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Voluptatum voluptate pariatur, doloribus ad quam
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
