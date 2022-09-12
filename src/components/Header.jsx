import "../index.css";

const Header = () => {
    return ( 
        <header className="banner">
            {/* Banner Content */}
            <div className="h-[200px] ml-[30px] p-[140px]">
                <h1 className="text-5xl font-extrabold pb-14 max-w-[1000px]">Dr. Strange in the Multiverse of Madness</h1>
                <div>
                    <button className="banner__button bg-[#33333380] border-none text-white cursor-pointer font-bold mr-4 outline-none py-2 px-8 rounded-sm hover:bg-[#e6e6e6] hover:text-black transition-all ease-in duration-[0.2s]">Play</button>
                    <button className="banner__button bg-[#33333380] border-none text-white cursor-pointer font-bold mr-4 outline-none py-2 px-8 rounded-sm hover:bg-[#e6e6e6] hover:text-black transition-all ease-in duration-[0.2s]">My List</button>
                </div>
                <h1 className="text-base h-20 leading-6 max-w-[600px] pt-4 w-[45rem]">
                Doctor Strange, with the help of mystical allies both
                old and new, traverses the mind-bending and dangerous
                alternate realities of the Multiverse to confront a 
                mysterious new adversary.
                </h1>
            </div>
            {/* End Banner Content */}
            {/* Banner Fade Bottom Animation */}
            <div className="h-[1118.4px] banner-footer"></div>
            {/* End Banner Fade Bottom Animation */}
        </header>
     );
}
 
export default Header;