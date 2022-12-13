import React from 'react'
import "./profileMain.css"


const ProfileMain = ({ name, phone, email, address, }) => {

  return (
    <>
    <div className="rectangle210">
      <div className="ellipse20">
        <img className='profileImg' src="http://pm1.narvii.com/7258/5520799cf0539b408bd8abee0a14d3a492ee5107r1-753-753v2_uhq.jpg" alt="profileName" />
      </div>
      <div className='profileDataContent'>
        <h2 className="name">{name}</h2>
        <p className='profileData'>Phone: {phone}</p>
        <p className='profileData'>E-mail:{email}</p>
        <p className='profileData'>Address: {address}</p>
      </div>
      <div className="ellipse27">
        <svg xmlns="http://www.w3.org/2000/svg" class="vectorPencil" width="36px" height="36px" viewBox="0 0 30 30" fill="none">
          <path d="M11 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.5 11.5L17.5 3.5C18.3284 2.67157 19.6716 2.67157 20.5 3.5C21.3284 4.32843 21.3284 5.67157 20.5 6.5L12.5 14.5L8 16L9.5 11.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div className="rectangle208">
      <div className='flexWrap'>
        <h2 className='about'>About</h2>
        <p className='careerPar2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit.</p>
      </div>
      <div className='flexWrap'>
        <h2 className='hobbies'>Hobbies/interests</h2>
        <p className='careerPar2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit.</p>
      </div>
    </div>
    <div className="rectangle209">
      <form action="">
        <div className="divRectangleFormSubject">
					<label htmlFor="title" className="subjectFormLabel">Subject:</label>
					<input type="text" className="rectangle211" id="title" name="title" />
				</div>
        <div className="divRectangleForm">
          <textarea className="rectangle212" id="caption" name="caption"></textarea>
        </div>
      </form>
    </div>
    <button type="submit" className="frame3" value="Upload"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16">
  <path fill="#000000" fill-rule="evenodd" d="M4.17456,11 L14,11 L14,3 L2,3 L2,12.2568 L4.17456,11 Z M4.71094,13 L14,13 C15.1046,13 16,12.1046 16,11 L16,3 C16,1.89543 15.1046,1 14,1 L2,1 C0.895431,1 0,1.89543 0,3 L0,13.9897 C0,14.7597 0.833719,15.2408 1.50039,14.8555 L4.71094,13 Z"/>
</svg>Send Message</button>
  </>
  )
}

export default ProfileMain


