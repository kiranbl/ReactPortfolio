import linkedin from "../assets/linkedin.png";
import git from "../assets/git.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const SocialMediaIcons =()=>{
return(
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/kiranbl"
        target="_blank"
        rel="noreferrer"
        >
            <img src={linkedin} alt="linkedin-link" />

        </a>

        <a className="hover:opacity-50 transition duration-500"
        href="https://github.com/kiranbl"
        target="_blank"
        rel="noreferrer"
        >
            <img src={git} alt="git-link" />

        </a>

        <a className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/kiran_bl/"
        target="_blank"
        rel="noreferrer"
        >
            <img src={instagram} alt="instagram-link" />

        </a>

        <a className="hover:opacity-50 transition duration-500"
        href=""
        target="_blank"
        rel="noreferrer"
        >
            <img src={twitter} alt="twitter-link" />

        </a>

    </div>
)
}

export default SocialMediaIcons;