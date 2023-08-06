import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt className="parallax-effect-glare-scale"

            perspective={500}

            glareEnable={true}

            glareMaxOpacity={0.45}

            scale={1.02}>
            <div pa3>
            </div>
        </Tilt>
    </div>
    
  )
}

export default Logo