import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuicon from "../assets/menu-icon.svg"
import closeicon from "../assets/close-icon.svg"

const Link = ({page, selectedPage , setSelectedPage}) =>{
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink className={`${selectedPage === lowerCasePage ?
             "text-cream":""} hover:text-cream transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={()=> setSelectedPage(lowerCasePage)}
            > {page}</AnchorLink>
    )


}
const Navbar = ({selectedPage, setSelectedPage}) =>{
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");


    return(isAboveSmallScreens?(
        <nav className={`shadow-md bg-light-cream dark-cream z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-poppins text-3xl font-bold">Kiran</h4>

                {/* desktop nav */}

                <div className=" flex justify-between gap-16 font-poppins text-sm font-semibold">
                   <Link page="Home" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="My Skills" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="Qualification" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="Projects" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="Contact" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                </div>
                </div>
             </nav>):(
                 <nav className={`shadow-xl dark-cream bg-light-cream rounded-lg  z-40 w-full fixed top-0 py-6`}>

          
                 <div className="flex items-center justify-between mx-auto w-5/6">
                     <h4 className="font-poppins text-3xl font-bold">Kiran</h4>
     
                <button className="rounded-full"
                onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <img src={menuicon}/>
                </button>
                
          
             
            
            </div>
            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed top-0 h-20 bg-light-cream w-full p-6 z-40">
                    <div className="flex items-center justify-between mx-auto font-poppins text-sm font-semibold">
                
                   <Link page="Home" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="My Skills" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="Qualification" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="Projects" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="Contact" 
                    selectedPage ={selectedPage} 
                    setSelectedPage={setSelectedPage} 
                    />
                   </div>
                        <button  className="absolute bottom-0 right-0 w-5 h-5" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img alt="close-icon" src={closeicon}/>
                        </button>
                   
                </div>
            ) }
            </nav>
             )
            
    )
             }

export default Navbar;