import React from 'react'
import team1 from "../../assets/images/Team/Team-1.jpg"
import team2 from "../../assets/images/Team/Team-2.jpg"
import team3 from "../../assets/images/Team/Team-3.jpg"
import team4 from "../../assets/images/Team/Team-4.jpg"
const OurTeam = () => {
  return (
    <>
     <section className="team">
        
          {/* Section Heading */}
          <div className="heading">
            <span>meet our expertise</span>
            <h2>our team</h2>
          </div>
        
          {/* Team Members */}
          <div className="box-container">
        
            {/* Team Member 1 */}
            <div className="team-item">
              <img src={team1} alt="Team-Image" /> {/* Team Member Image */}
              <div className="content">
                <div className="intro">
                  <a href="pages/About/Team-Single.html"><h3>Lisa Doe</h3></a> {/* Team Member Name */}
                  <p>Co-Founder & CEO</p> {/* Team Member Designation */}
                </div>
                <div className="icon-container">
                  <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
                  <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
                  <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
                  <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
                </div>
              </div>
            </div>
        
            {/* Team Member 2 */}
            <div className="team-item">
              <img src={team2} alt="Team-Image" /> {/* Team Member Image */}
              <div className="content">
                <div className="intro">
                  <a href="pages/About/Team-Single.html"><h3>Janny Smith</h3></a> {/* Team Member Name */}
                  <p>head baker</p> {/* Team Member Designation */}
                </div>
                <div className="icon-container">
                  <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
                  <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
                  <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
                  <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
                </div>
              </div>
            </div>
        
            {/* Team Member 3 */}
            <div className="team-item">
              <img src={team3} alt="Team-Image" /> {/* Team Member Image */}
              <div className="content">
                <div className="intro">
                  <a href="pages/About/Team-Single.html"><h3>Michael Brown</h3></a> {/* Team Member Name */}
                  <p>baker</p> {/* Team Member Designation */}
                </div>
                <div className="icon-container">
                  <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
                  <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
                  <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
                  <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
                </div>
              </div>
            </div>
        
            {/* Team Member 4 */}
            <div className="team-item">
              <img src={team4} alt="Team-Image" /> {/* Team Member Image */}
              <div className="content">
                <div className="intro">
                  <a href="pages/About/Team-Single.html"><h3>Emily White</h3></a> {/* Team Member Name */}
                  <p>cake decorator</p> {/* Team Member Designation */}
                </div>
                <div className="icon-container">
                  <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
                  <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
                  <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
                  <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
                </div>
              </div>
            </div>
        
          </div>
        
        </section>
    </>
  )
}

export default OurTeam