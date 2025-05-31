import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";
const About = () => {
    const  [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () =>{
        navigator.clipboard.writeText('joshua.zhu.2003@gmail.com');
        setHasCopied(true);
        setTimeout(() => {setHasCopied(false);}, 2000)
    }
    return(
        <section id="about" className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.jpg" alt="grid-1" className="w-full aspect-square object-cover rounded-3xl" />

                        <div>
                            <p className="grid-headtext">Hi, I'm Joshua</p>
                            <p className="grid-subtext">Bringing a computer engineering foundation to modern full-stack development</p>
                        </div>   
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I’m proficient in JavaScript, primarily using React to build interactive user interfaces, and Python for backend development</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" labelsData={[{lat:33.865780, lng:-118.066368, text:"I'm here!", color:'white', size:20}]}/>
                        </div>
                        <div>
                            <p className="grid-headtext">I'm open to work across most timezones.</p>
                            <p className="grid-subtext">I'm based in Cerritos, California with remote work available</p>
                            <a href="#contact">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                    <img src= "/assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                         <p className="grid-headtext">My passion for programming</p>
                         <p className="grid-subtext">From an early age, I was curious about how computers functioned beneath the surface. Studying Computer Engineering gave me a strong foundation in hardware concepts and sparked a deeper interest in software development.</p>
                    </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                    <img src= "/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">E-mail Me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy'/>
                            <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">joshua.zhu.2003@gmail.com</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;