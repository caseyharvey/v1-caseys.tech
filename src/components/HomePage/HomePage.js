import React from 'react';
import letterC from '../../assets/letterC.png';
import './home-page.sass';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='avatar-container'>
          <img className='avatar' src={letterC} alt='the letter c' />
          <div className='name'>Casey Harvey</div>
          <div className='title'>Software Developer</div>
        </div>
        <div className='about-container'>
          <div className='about-me'>
            <p>
              I love developing software and writing code. The whole process is
              deeply satisfying and never ending. There is always something new
              to learn, some improvement to be made and something just out of
              reach. I get rush from solving problems and leveling up my skills.
              This keeps me motivated and inspired to push through the
              inevitable challenges along the way.
            </p>
            <p>
              Writing code and seeing it come to life is a very rewarding
              process. The reward is so valuable because its so difficult to do
              well. I am hooked on the process and not the end result. I focus
              on having solid habits that improve with every win and every loss.
              these habits ensure that I always deliver my best. And that I'm
              willing to smash it all to pieces and build it again.
            </p>
            <p>
              Thanks to the internet and all the amazing people producing
              valuable content I have taught myself how to code. Since making
              the decision to learn a programming language my life has been
              forever changed and I could not imagine myself doing anything
              else.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
