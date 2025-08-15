import React from 'react'
import service1 from "../../assets/images/Service/Services/Service-1.jpg"
import service2 from "../../assets/images/Service/Services/Service-2.jpg"
import service3 from "../../assets/images/Service/Services/Service-3.jpg"
import service4 from "../../assets/images/Service/Services/Service-4.jpg"
import service5 from "../../assets/images/Service/Services/Service-5.jpg"
import service6 from "../../assets/images/Service/Services/Service-6.jpg"
import ServiceCard from '../reuse-components/ServiceCard'
const OurServies = () => {
  return (
    <>
    <section className="services">
              {/* Section Heading */}
              <div className="heading">
                <span>what we offer</span>
                <h2>our services</h2>
              </div>
        
              {/* Services */}
              <div className="box-container">
             
                <ServiceCard 
                image={service1} 
                iconClass={"fas fa-birthday-cake"}
                title="Custom Cake Design" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eossequi modi. pisicing elit. Eos sequi modi." 
                link="pages/Pages/Service-Single.html"/>
                 
                <ServiceCard
                image={service2}
                iconClass={"fas fa-mobile-alt"}
                title="Online Ordering"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eossequi modi. pisicing elit. Eos sequi modi."
                link="pages/Pages/Service-Single.html"
                />

                <ServiceCard
                image={service3}
                iconClass={"fas fa-bread-slice"}
                title="Specialty Breads"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eossequi modi. pisicing elit. Eos sequi modi."
                link="pages/Pages/Service-Single.html"
                />

                <ServiceCard
                image={service4}
                iconClass={"fas fa-cookie-bite"}
                title="Baking Workshops"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eossequi modi. pisicing elit. Eos sequi modi."
                link="pages/Pages/Service-Single.html"/>

                <ServiceCard
                image={service5}
                iconClass={"fas fa-utensils"}
                title="catering & events"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eossequi modi. pisicing elit. Eos sequi modi."
                link="pages/Pages/Service-Single.html"/>

                <ServiceCard
                image={service6}
                iconClass={"fas fa-gifts"}
                title="Gift Hampers"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eossequi modi. pisicing elit. Eos sequi modi."
                link="pages/Pages/Service-Single.html"
                />
              </div>
            </section>
        
    </>
  )
}

export default OurServies