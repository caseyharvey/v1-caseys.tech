import React from 'react';
import './home-page.sass';

class HomePage extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <div className='avatar-container'>
          <div className='name'>Casey Harvey</div>
          <div className='title'>software developer</div>
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
              Writing code and seeing it come to life is extremely rewarding.
              The reward comes from the fact that doing it well is not easy. It
              takes time, dedication and passion. I am hooked on the process and
              not the end result. I focus on having solid habits that improve
              with every win and every loss. these habits ensure that I always
              deliver my best.
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
