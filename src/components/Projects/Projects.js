import React from 'react';
// import letterC from '../../assets/letterC.png';
import './projects.sass';

class Projects extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <div className='head-container'>
          <div className='title-container'>
            <div className='project-name'>Time is money</div>
            <div className='project-tag'>Dollar value timer</div>
          </div>
          <div className='links-container'>
            <a
              className='link-button'
              href='https://github.com/caseyharvey/time-is-money/tree/master/src'
            >
              github
            </a>
            {/* <img className='link-img' src={letterC} alt='the letter c' />
            <img className='link-img' src={letterC} alt='the letter c' />
            <img className='link-img' src={letterC} alt='the letter c' /> */}
          </div>
        </div>
        <div className='info-container'>
          <div className='info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem in maiores veritatis? Nostrum sapiente doloribus
              minus nam rem architecto sunt velit quod. Modi minus corporis unde
              nulla nostrum ducimus id.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
