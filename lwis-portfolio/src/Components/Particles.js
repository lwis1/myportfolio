import Particles from 'react-tsparticles'
import React from 'react'

const Particle = () => {
    return (
    <div style={{}}>
        <Particles width='80%'height='200%' 
        params={{
          particles: {
            number:{
              value:36,
              density:{
                enable: true,
                value_area:1200
              }
            },
            shape:{
              type: 'circle',
              stroke: {
                width: 25
              },
              polygon:{
                nb_sides: 1
              } 
            },
            line_linked: {
              enable: true,
              distance:180,
              opacity: 0.1,
              width: 0.5,
              shadow: {
                enable: true,
                color: "#f1f1f1",
                blur: 1
              }
            },
            move:{
              enable: true,
              random: true,
              speed: 0.2,
              attract: {
                rotateX: 3000,
                rotateY: 1000
              }
            },
            size:{
              value: 3,
              random: true,
              anim : {
                speed: 4,
                size_min: 0.1
              }
            },
            opacity: {
              value: 0.1,
              anim: {
                speed: 0.3,
                opacity_min : 0.1
              }
            }
          }
        }}/>
    </div>
  )
}

export default Particle