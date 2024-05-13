import React from 'react';
import '../assets/styles/BackgroundAnimation.css';
const BackgroundAnimation = () => {
  return (
    <>
      <section className='onHoverCardAnimation mt-5'>
        <div class='grid-container'>
          <div class='card card1'>
            <img
              src={require('../assets/images/onHoverContent/img1.jpg')}
              alt=''
            />
            <div className='card-body'> Welcome</div>
          </div>

          <div class='card card2'>
            <img
              src={require('../assets/images/onHoverContent/img2.jpg')}
              alt=''
            />
            <div className='card-body'> Welcome</div>
          </div>
          <div class='card card3'>
            <img
              src={require('../assets/images/onHoverContent/img3.jpg')}
              alt=''
            />
            <div className='card-body'> Welcome</div>
          </div>
          <div class='card card4'>
            <img
              src={require('../assets/images/onHoverContent/img4.jpg')}
              alt=''
            />
            <div className='card-body'> Welcome</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackgroundAnimation;
