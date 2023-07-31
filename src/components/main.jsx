import React from 'react';
import '../App.css';
import Profile from '../assets/profile.png'

const Main = () => {
  return (
    <main>
      <section id='profile'>
        <div className="left presentation">
          <h1>Hi, I'm</h1>
          <ul class="dynamic-txts">
            <li><span>Font-End Developer</span></li>
            <li><span>Back-End Developer</span></li>
            <li><span>FullStack Developer</span></li>
            <li><span>Youssouf</span></li>
          </ul>
        </div>
        <div className="profile_img">
          <div className="calc_img">
            <svg xmlns="http://www.w3.org/2000/svg" width="530" height="495" viewBox="0 0 530 495" fill="none">
              <path d="M443.049 384.285C398.179 478.511 310.4 494.5 234 494.5C167.227 494.5 116.243 491.614 78.442 469.257C40.6909 446.93 15.9851 405.109 1.9952 326.929C-2.73186 283.218 12.4824 240.97 40.507 202.16C68.5369 163.343 109.364 127.992 155.792 98.1079C248.659 38.332 363.816 0.5 443.5 0.5C463.384 0.5 479.185 4.5401 491.514 11.8231C503.839 19.1041 512.726 29.645 518.755 42.7031C530.826 68.8437 531.439 105.061 525.189 145.281C512.693 225.7 472.817 321.77 443.049 384.285Z" fill="#6AD1FD" stroke="black" />
            </svg>
            <img src={Profile} alt="" className='img_overlay' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
