import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import { useState } from "react";


const Qualification = ()=>{
    const [openTab, setOpenTab] = useState(1);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

    return(
        <section id="qualification" className="py-10">
            <div className="mt-20 w-full h-full">
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
                    <p className="font-poppins font-semibold text-5xl text-dark-cream mb-5">
                    Qualif<span className="text-dark">ication</span>
                    </p>
                    <LineGradient width="w-1/3 mx-auto text-center"/>

                </motion.div>
                <motion.div 
                className="w-full h-full mx-auto text-center"
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
<div className="mb-4 border-b border- border-cream">
    <ul className="flex flex-wrap justify-center -mb-px text-xl mt-24 font-medium content-center text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li className="mr-2">
            <button   onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }} className={"inline-block p-4   rounded-t-lg " +(openTab === 1? "text-light-cream bg-dark-cream border-b-2 border-dark-cream": "text-dark bg-light-cream shadow-xl")} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" >
                Education
                </button>
        </li>
        <li className="mr-2">
            <button  onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }} className={"inline-block p-4 rounded-t-lg "+(openTab === 2? "text-light-cream bg-dark-cream  border-b-2 border-dark-cream": "text-dark bg-light-cream shadow-xl")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab">
                Experience
                </button>
        </li>     
    </ul>
</div>
<div  className="mx-auto w-full h-full" id="myTabContent">
    <div className={"p-4 rounded-lg bg-light-cream "+(openTab === 1 ? "block" : "hidden")} role="tabpanel" >
    <div className="container">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-light-cream"
          >
            {/* <!-- left --> */}
            <div className={"flex flex-row-reverse md:contents"}>
              <div
                className="bg-dark-cream col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Master of Science - Advanced Computer Science</h3>
                <a className="animate-pulse text-dark text-lg text-bold" href="https://www.sheffield.ac.uk/">The University Of Sheffield</a>
                <p className="leading-tight text-semibold text-center">
                  ( 2022 - 2023 )
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-dark pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-dark-cream shadow"
                ></div>
              </div>
            </div>
              
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-dark pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-dark-cream shadow"
                ></div>
              </div>
              <div
                className="bg-dark-cream col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Bachelor of Engineering - Computer Science and Engineering</h3>
                <a className="animate-pulse text-dark text-lg text-bold" href="https://www.jyothyit.ac.in/" >Jyothy Institute of Technology</a>
                <p className="leading-tight text-center">
                ( 2017 - 2021 )
                </p>
              </div>
            </div>
   
          </div>
        </div>
    </div>
  
    <div className={"mx-auto w-full h-full p-4 rounded-lg bg-light-cream "+(openTab === 2 ? "block" : "hidden")} >
<div className="container">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-light-cream"
          >
            {/* <!-- left --> */}
            <div className={"flex flex-row-reverse md:contents"}>
              <div
                className="bg-dark-cream col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Full Stack Engineer - <a className="animate-pulse text-dark" href="https://www.mobiotics.com/">Mobiotics IT Solutions Pvt Ltd </a></h3>
                <p className="leading-tight text-semibold text-center">
                  ( Nov 2021 - Aug 2022 )
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-dark pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-dark-cream shadow"
                ></div>
              </div>
            </div>
               {/* <!-- left --> */}
               <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-dark-cream col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Full Stack Developer Trainee - <a className="animate-pulse text-dark" href="https://www.mobiotics.com/">Mobiotics IT Solutions Pvt Ltd </a></h3>
                <p className="leading-tight text-semibold text-center">
                  ( May 2021 - Oct 2021 )
                </p>
             
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-dark pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-dark-cream shadow"
                ></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-dark pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-dark-cream shadow"
                ></div>
              </div>
              <div
                className="bg-dark-cream col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Full Stack Intern - <a className="animate-pulse text-dark" > DATAIGNYTE Technologies Pvt Ltd</a></h3>
                <p className="leading-tight text-center">
                ( Jul 2020 - Nov 2020 )
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</motion.div>
                </div>
               
        </section>
    )
}

export default Qualification;