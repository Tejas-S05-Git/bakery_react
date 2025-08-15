import React from 'react'
import about1 from "../../assets/images/About/About-1.jpg"
import about2 from "../../assets/images/About/About-2.jpg"
import about3 from "../../assets/images/About/About-3.jpg"
import about4 from "../../assets/images/About/About-4.jpg"
import Button from '../reuse-components/Button'

const About = () => {
  return (
    <>
     <section className="about">
              {/* About Information */}
              <div className="box-container">
                {/* About Image */}
                <div className="image">
                  <div>
                    <img src={about1} alt="About-Image" /> {/* About Image 1 */}
                    <img src={about2} alt="About-Image" /> {/* About Image 2 */}
                  </div>
                  <div>
                    <img src={about3} alt="About-Image" /> {/* About Image 3 */}
                    <img src={about4} alt="About-Image" /> {/* About Image 4 */}
                  </div>
                </div>
        
                {/* About Content */}
                <div className="content">
                  <div className="heading">
                    <span>about us</span> {/* Sub Heading */}
                    <h2>welcome to sweet delight's bakery.</h2> {/* Main Heading */}
                  </div>
        
                  <h5>
                    where passion and creativity blend seamlessly to bring you the
                    finest baked goods.
                  </h5>{" "}
                  {/* Sub Heading */}
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                    nemo aperiam quisquam repellat aliquam asperiores debitis quo ex
                    laborum. Eius maiores, rem quos totam repudiandae sequi at quia sed
                    laudantium? Temporibus, asperiores. Minus debitis nemo quo. Ducimus
                    eaque rerum nobis!
                  </p>{" "}
                  {/* Description */}
                  {/* <a href="pages/Contact/Contact.html" className="btn">
                    contact us
                  </a> */}
                  <Button label={"contact us"} href={"pages/Contact/Contact.html"} className={"btn"}/>
                  {" "}
                  {/* Contact Button */}
                </div>
              </div>
            </section>
    </>
  )
}

export default About