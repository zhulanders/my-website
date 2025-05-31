import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';
import {PerspectiveCamera} from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import Button from '../components/Button.jsx';
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from '../constants/index.js';
const Hero = () => {

    const isSmall = useMediaQuery({maxWidth:424});
    const isMobile = useMediaQuery({minWidth:425 ,maxWidth:766});
    const isTablet = useMediaQuery({minWidth:767, maxWidth:1023});
    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return(
        <section id="home" className='min-h-screen w-full flex-col relative'>
                <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                    <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I'm Joshua <span className="waving-hand">👋</span></p>
                    <p className="hero_tag text-gray_gradient">Building from Frontend to FPGA</p>

                    <div className="w-full h-full absolute inset-0">
                        {/* <Leva /> */}
                        <Canvas className="w-full h-full">
                            <Suspense fallback={<CanvasLoader />}>

                            </Suspense>
                            <PerspectiveCamera  makeDefault position={[0,0,30]} />
                            <HeroCamera isMobile={isMobile} isSmall={isSmall} isTablet={isTablet}>
                            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.4, 0.8, 0]}/>
                            </HeroCamera>
                            <group>
                                <Rings position={sizes.ringPosition} scale={sizes.ringScale}/>
                                <Target position={sizes.targetPosition} scale={sizes.targetScale} />
                                <ReactLogo position={sizes.reactLogoPosition} scale={sizes.logoScale}/>
                                <Cube position={sizes.cubePosition} scale={sizes.cubeScale}/>
                                
                            </group>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[10,10,10]} intensity={0.5} />
                        </Canvas>
                        <div className='absolute bottom-7 left-0 right-0 w-full z-19 c-space'>
                            <a href='#contact' className='w-fit'>
                                <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96">

                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Hero;