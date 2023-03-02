import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import code from "../assets/code.png"
import database from "../assets/database.png"
import framework from "../assets/framework.png"


const MySkills = ()=>{
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return(
        <section id="my skills" className="py-10">
            <div className="mt-20">
              <motion.div 
                className="md:w-1/3 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={
                    {
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0},
                    }
                }>
                    <p className="font-poppins font-semibold text-5xl text-dark mb-5">
                        My <span className="text-dark-cream">Skills</span>
                    </p>
                    <LineGradient width="w-1/3 mx-auto text-center"/>

                </motion.div>
                <div className="md:flex md:justify-between mt-5 gap-32">
                <motion.div
                  className="mt-10 md:w-1/3 "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true,amount:0.5}}
                  transition={{delay:0.2,duration:0.5}}
                  variants={
                      {
                          hidden:{opacity:0,x:-50},
                          visible:{opacity:1,x:0},
                      }
                  }>
                <div className="w-full max-w-sm mx-auto  bg-dark border border-cream rounded-lg shadow mt-20">
                <div className="flex flex-col p-10">
                <img className="w-8 h-8 mx-auto rounded-full shadow-lg" src={code} alt="code"/>

                <h5 className="z-10 mb-1 mt-1 text-xl text-center font-medium text-cream">Programming Languages</h5>
                <ul className="max-w-md space-y-1 text-light-cream list-disc list-inside p-3">
                <li>JAVA  </li>
                <li>Java Script</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>KOTLIN</li>
                </ul>
                </div>
                </div>

                </motion.div>
                <motion.div
                  className="md:w-1/3 mt-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true,amount:0.5}}
                  transition={{delay:0.2,duration:0.5}}
                  variants={
                      {
                          hidden:{opacity:0,x:-50},
                          visible:{opacity:1,x:0},
                      }
                  }>
                    <div className="w-full max-w-sm mx-auto bg-dark border border-cream rounded-lg shadow mt-20">
                        <div className="flex flex-col p-10">
                            <img className="w-8 h-8 mx-auto rounded-full shadow-lg" src={database} alt="database"/>

                            <h5 className="z-10 mb-1 mt-1 text-xl text-center font-medium text-cream">Databases</h5>
                    <ul className="max-w-md space-y-1 text-light-cream list-disc list-inside p-3">
                        <li>MySQL</li>
                        <li>Mongo DB</li>
                        <li>Neo4j</li>
                    </ul>
                    </div>
                    </div>

                </motion.div>
                <motion.div
                  className="md:w-1/3 mt-10 "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true,amount:0.5}}
                  transition={{delay:0.2,duration:0.5}}
                  variants={
                      {
                          hidden:{opacity:0,x:-50},
                          visible:{opacity:1,x:0},
                      }
                  }>
                    <div className="w-full max-w-sm mx-auto bg-dark border border-cream rounded-lg shadow mt-20">
                        <div className="flex flex-col p-10">
                            <img className="w-8 h-8 mx-auto rounded-full shadow-lg" src={framework} alt="framework"/>

                            <h5 className="z-10 mb-1 mt-1 text-xl text-center font-medium text-cream"> Technologies / Frameworks</h5>
                    <ul className="max-w-md space-y-1 text-light-cream list-disc list-inside p-3">
                        <li>NodeJS  </li>
                        <li>ExpressJS</li>
                        <li>ReactJS</li>
                        <li>Redis</li>
                        <li>Git</li>
                        <li>AWS</li>

                    </ul>
                    </div>
                    </div>

                </motion.div>
                </div>
                </div>
               
        </section>
    )
}

export default MySkills;