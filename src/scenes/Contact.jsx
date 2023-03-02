
import SocialMediaIcons from '../components/SocialMediaIcons';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import resume from "../assets/KiranResume2023.pdf";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return(
  <section id="contact" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-32">


    {/*Main Section*/}
    <div className='z-30 basis-2/5 mt-12 md:mt-32'>
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}}
    variants={
        {
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0},
        }
    }
    >
        <p className='text-5xl text-dark font-poppins font-bold z-10 text text-center md:text-start'>
            Contact    <span className="text-dark-cream">Me</span>
        </p>
        
        <p className='mt-10 mb-7 text-dark-cream text-xl text-center font-semibold md:text-start'> Mail me 👉🏾 <a className="animate-pulse text-dark" href='mailto:kiran.pro13@gmail.com'>kiran.pro13@gmail.com</a></p>

        <p className='mt-5 mb-7 text-dark-cream text-sm text-center font-medium md:text-start'
        >For more info download my CV from below 👇🏾</p>
    </motion.div>

    <motion.div
    className='flex mt-5 justify-center md:justify-start'
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


        <a
        className='bg-dark text-cream rounded-sm py-3 px-7 font-semibold
        hover:bg-light-cream hover:text-black transition duration-500'
        href={resume}
        download="Kiran_Resume.pdf"
        >
            Download CV</a>

    </motion.div>

    <motion.div
    className='flex mt-5 justify-center md:justify-start'
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

      <SocialMediaIcons/>

    </motion.div>

 
    </div>
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/fbab1748e42168e4a44d26a84b57059d"
            method="POST"
          >
            <input
              className="w-full bg-cream font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-dark-cream mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-cream font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-dark-cream mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-cream font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-dark-cream mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-dark font-semibold text-light-cream mt-5 hover:bg-light-cream hover:text-dark shadow-lg transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
  </section>)
}


export default Contact;