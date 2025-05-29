import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const Target = (props) => {
  const targetRef = useRef();
  const baselineY = useRef(0);
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  );

  useEffect(() => {
    // Initialize baselineY only once after mount
    if (props.position && typeof props.position[1] === 'number') {
      baselineY.current = props.position[1];
    } else if (targetRef.current) {
      baselineY.current = targetRef.current.position.y;
    }
  }, [props.position]);

  useFrame(({ clock }) => {
    if (targetRef.current) {
      targetRef.current.position.y =
        baselineY.current + Math.sin(clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
