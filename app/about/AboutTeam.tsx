import React from 'react'
import AboutCard from './AboutCard'

const AboutTeam = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
        <h1 className="heading mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-center">
            MEET THE MINDS BEHIND <span className="text-red-500">FURRYCOVE</span>
        </h1>
        <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]
        items-center">
            <AboutCard 
                  image="/images/Founder/founder 1.png"
                  name="Fiona Collins"
                  position="Founder & Veterinarian Specialist" 
                  description={'Dedicates her expertise to ensuring the health and happiness of every furry friend. With a passion for animal welfare, she combines her veterinary skills and entrepreneurial spirit to create a sanctuary of love and care for pets.'}            
            />

            <AboutCard 
                  image="/images/Founder/founder 2.png"
                  name="Franklin Clarke"
                  position="Chief Marketing Officer" 
                  description={"Thrives on crafting compelling narratives that resonate with pet lovers worldwide. With a creative vision and strategic mindset, he spearheads marketing initiatives to share Furry Cove's mission of providing exceptional care and companionship to furry friends everywhere."}            
            />

            <AboutCard 
                  image="/images/Founder/founder 3.png"
                  name="Fernando Coleman"
                  position="Chief Financial Officer" 
                  description={"Brings a meticulous approach to financial management, ensuring the company's fiscal health aligns with its compassionate mission. With expertise in budgeting and strategic planning, he navigates financial to sustain and grow Furry Cove's commitment to pet well-being."}            
            />
        </div>

    </div>
  )
}

export default AboutTeam