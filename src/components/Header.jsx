import CodeIcon from "./icons/Codeicon";

const Header = () => {
    return (
        <header className="px-4 h-14 flex items-center lg:px-6 bg-slate-100">
            <div className="flex items-center justify-center">
                <CodeIcon size={24} className = "text-black" />
                <span className="text-md font-semibold text-zic-800 ml-3">
                    Project Portfolio
                </span>
            </div>
            <nav className="ml-auto text-center flex gap-4 sm:gap-6 ">
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    Projects
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="Contact"></a>Skills
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="#Contact">Contact Us</a>
                </div>
            </nav>
        </header> 
    ); 
}

export default Header;