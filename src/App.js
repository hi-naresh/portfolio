import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './components/Me'
import { Environment, ScrollControls, Scroll } from '@react-three/drei'
import HeroSection from './pages/home/HeroSection'

function App() {
  const width = window.innerWidth;
  
  return (
    <div className="canvas-container" style={{ height: '100vh', }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <ScrollControls pages={1.65} damping={0.1}>
          <Environment background files="./assets/lights.hdr" blur={0.3} />
          <Model  />
          {/* <OrbitControls/> */}
          <Scroll ></Scroll>
          <Scroll html style={{ height: '100%' }}>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                width: width,
              }}>
              <HeroSection className="come" />
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
