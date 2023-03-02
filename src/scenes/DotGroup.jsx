import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup =({selectedPage,setSelectedPage})=>{
    
    const selectedStyles = `relative bg-dark-cream before:absolute before:w-4 before:h-4 
    before:rounded-full before:border-2 before:border-dark-cream before:left-[-50%]
    before:top-[-50%]`;
    
    return( <div className="flex flex-col gap-6 fixed top-[60%] right-7">
       <AnchorLink className={`${selectedPage === "home" ?
            selectedStyles:"bg-cream"} w-2 h-2 rounded-full`}
            href={`#home`}
            onClick={()=> setSelectedPage("home")}
            />
               <AnchorLink className={`${selectedPage === 'my skills' ?
            selectedStyles:"bg-cream"} w-2 h-2 rounded-full`}
            href={`#my skills`}
            onClick={()=> setSelectedPage("my skills")}
            />
               <AnchorLink className={`${selectedPage === 'qualification' ?
            selectedStyles:"bg-cream"} w-2 h-2 rounded-full`}
            href={`#qualification`}
            onClick={()=> setSelectedPage("qualification")}
            />
               <AnchorLink className={`${selectedPage === 'projects' ?
            selectedStyles:"bg-cream"} w-2 h-2 rounded-full`}
            href={`#projects`}
            onClick={()=> setSelectedPage("projects")}
            />
               <AnchorLink className={`${selectedPage === 'contact' ?
            selectedStyles:"bg-cream"} w-2 h-2 rounded-full`}
            href={`#contact`}
            onClick={()=> setSelectedPage("contact")}
            />

    </div>)
}


export default DotGroup;