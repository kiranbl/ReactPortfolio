import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import doorlock from "../assets/door-lock-system-using-iot.png"
import hotel from "../assets/hotel-management-system.png"
import audiomailr from "../assets/audio-message.png"
import furhat from "../assets/furhat.png"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,content,src,githublink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-dark z-30 flex flex-col items-center text-center p-1 text-light-cream`;

  return (
    <motion.div variants={projectVariant} className="relative shadow-xl justify-between">
      <div className={overlayStyles}>
        <p className="text-2xl  py-1 font-poppins">{title}</p>
        <p className="mt-7 text-sm">
         {content} <br/> <a className="animate-pulse text-light-cream text-lg text-bold" href={githublink} target="_blank"> Click Here</a>
        </p>
      </div>
      <img src={src} alt={title} />
     
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-poppins font-semibold text-5xl">
            <span className="text-dark-cream">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center my-20">
        <motion.div
          className="sm:grid sm:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
    
          <Project title="Door Lock System using IOT"
          content="This was a final year group project and it was mainly focused on face recognition
          with a classifier algorithm using Raspberry Pi SBC, a camera module and ..."
          src={doorlock}
          githublink="https://github.com/kiranbl/Door-Lock-System-Using-IOT" />

          <Project title="Hotel Management System" 
          content="Built a Database Management System for managing the hotel like adding rooms,
          guest details and many more ..."
          src={hotel}
          githublink="https://github.com/kiranbl/HotelManagementDatabaseSystem"
          />

        <Project title="AudioMailr" 
          content="A team software project where I worked on design and development of back-end for this application
          where the main purpose of the application was to send and receive emails and have the functionality of converting
          the text-to-speech and read the email to the users"
          src={audiomailr}
          githublink="https://github.com/kiranbl/AudioMailr_Team_Software_Project"
          />

        <Project title="Receptionist Skill For Furhat Robot" 
          content="This project was about building an Furhat
          Skill using the robot and the skill or the application which I built was the Receptionist Skill which was able to
          greet the user who arrives at the reception desk for information..."
          src={furhat}
          githublink="https://github.com/kiranbl/FurhatReceptionistRobot"
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;