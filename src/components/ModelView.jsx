import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from 'three'
import Lights from './Lights';
import Samsung from './Samsung';
import { Suspense } from "react";
import  Loader from "./Loader";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, item, size }) => {
  return (
    <View index={index} id={gsapType} className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
      {/* Ambient Light */}
      <ambientLight intensity={1} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, -1, 0]}>
        <Suspense fallback={<Loader />}>
          <Samsung
            scale={index === 1 ? [0.3, 0.3, 0.3] : [0.5, 0.5, 0.5]} // Adjust scaling as needed
            item={item}
            size={size}
          />
        </Suspense>
      </group>

    </View>
  )
}

export default ModelView