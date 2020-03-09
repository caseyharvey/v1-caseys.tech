import React from 'react';

import './home-page.sass';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='avatar-container'>
          <div className='avatar'></div>
          <div className='name'>Casey Harvey</div>
          <div className='title'>Software Developer</div>
        </div>
        <div className='about-flex-box'>
          <div className='about-me'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error
            corrupti enim debitis dolorem magni labore sapiente deserunt
            tenetur, facilis expedita earum iusto beatae quis, fuga, amet
            explicabo ipsam id nisi repellendus itaque. Totam atque quas
            officiis dicta voluptatem facilis delectus nemo molestias dolor
            aliquam, fugit perspiciatis repellendus quo pariatur sint voluptas
            ut dolore quaerat, nihil corrupti? Cum in atque quam ipsa similique
            dolor, odio exercitationem laboriosam repudiandae quasi numquam
            asperiores ullam saepe inventore assumenda sit, voluptatibus
            aspernatur non eum voluptas! In tenetur asperiores reiciendis
            consectetur voluptatum? Fuga, nihil esse libero hic praesentium
            perspiciatis architecto deleniti! Iusto ex exercitationem sunt!
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
