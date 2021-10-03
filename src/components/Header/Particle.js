import React from 'react'
import Particles from 'react-particles-js';
function Particle() {
    return (
        <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        }}
        >
            <Particles
      height='430px'
    params={{
	    "particles": {
	        "number": {
	            "value": 140,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 1,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            },
	            "onclick": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 5,
	                "opacity": 2
	            },
	            "repulse": {
	                "distance": 100,
	                "duration": 4
	            }
	        }
	    }
	}}/>
        </div>
    )
}

export default Particle
