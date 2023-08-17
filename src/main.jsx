import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import './index.css'
import Game from './Game'
import Interface from './Interface.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KeyboardControls map={[
         { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
         { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
         { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
         { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
         { name: 'jump', keys: [ 'Space' ] },
    ]}>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [1, 2, 6]
        }}
      >
        <Game />
      </Canvas>
      <Interface />
    </KeyboardControls>
  </React.StrictMode>,
)
