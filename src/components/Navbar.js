import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    return ( 
        <>
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 flex ">
            <h1 className="w-full text-[#00df9a] font-bold md:text-3xl sm:text-sm">Book Your Show</h1>
            <ul className="flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>

    
        </>
     );
}
 
export default Navbar;