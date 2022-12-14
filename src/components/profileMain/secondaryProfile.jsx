import React from 'react'
import "./profileMain.css"


const SecondaryProfile = () => {

  return (
    <>
    <div className="rectangle181">
        <div className="workexperience">
            <a href="#">View Work Experience</a>
        </div>
        <div className="rectangle213">
            <h7 className="careerObjective">Career Objective</h7>
            <p className="careerPar">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div>
            <h7 className="education">Education</h7>
            <hr className='line12'/>
            <h7 className="schoolName">School name, City, State</h7>
            <p className="grade">Grade</p>
            <ul>
                <li>GPA:</li>
                <li>Relevent Coursework:</li>
                <li>Honors:</li>
                <li>Clubs:</li>
            </ul>
        </div>
        <div>
            <h7 className="education">Major Achievements</h7>
            <hr className='line12'/>
        </div>
        <div className='ulWrapper'>
            <div className='ulWrapper2'>
                <p className="majorAchievement">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <h8 className="date">Date</h8>
            </div>
            <div className='ulWrapper2'>
                <p className="majorAchievement">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <h8 className="date">Date</h8>
            </div>
        </div>
        <div>
            <h7 className="education">Volunteer</h7>
            <hr className="line12"/>
        </div>
        <div className="ulwrapper">
            <div className='ulWrapper2'>
                <ul>
                    <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </li>
                    <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </li>
                </ul>
            </div>
        </div>
        <div>
            <h7 className="education">Additional Skills</h7>
            <hr className='line12'/>
        </div>
        <div className="ulwrapper">
            <div className='ulWrapper2'>
                <ul>
                    <li className="majorAchievement">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                    <li className="majorAchievement">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                </ul>
            </div>
        </div>
    </div>
  </>
  )
}

export default SecondaryProfile