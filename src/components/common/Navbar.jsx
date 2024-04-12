import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { TbDatabaseSearch } from "react-icons/tb";

const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>},
    {text: 'Schedule', icon: <AiOutlineSchedule/>},
    {text: 'Resume', icon: <MdOutlineAccountCircle/>},
];

const NavBar = () => {
    const [selected, setSelected] = useState(tabs[0].text);
    const [typedText, setTypedText] = useState('');
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchBarHanging, setIsSearchBarHanging] = useState(false);

    const loginOptions = [
        { href: '/StudentLogIn', text: 'Student LogIn', icon: <PiStudentDuotone/> },
        { href: '/CompanyLogIn', text: 'Company LogIn', icon: <MdOutlineAdminPanelSettings/> },
        { href: '/AdminLogIn', text: 'Admin LogIn', icon: <FaBuildingUser/> }
    ];
    
    const registerOptions = [
        { href: '/StudentRegister', text: 'Student Register', icon: <PiStudentDuotone/> },
        { href: '/CompanyRegister', text: 'Company Register', icon: <MdOutlineAdminPanelSettings/> },
        { href: '/AdminRegister', text: 'Admin Register', icon: <FaBuildingUser/> }
    ];

    const handleInputText = (e) => {
        setTypedText(e.target.value);
    };

    return (
        <div className=' flex items-center justify-between w-full h-[4rem] bg-slate-900 px-4 sm:px-3 xl:px-8'>
            {/* hamburger icon in less than 1024 screen width */}
            <div className=" relative block lg:hidden">
                <div onClick={() => setIsDropdownOpen((pv) => !pv)}>
                    <AnimatedHamburgerButton
                        hamburgerActive={hamburgerActive}
                        setHamburgerActive={setHamburgerActive}
                    />
                </div>

                <div className="absolute -right-11 flex items-center justify-center">
                    <motion.div animate={isDropdownOpen ? "open" : "closed"} className="relative">
                        <motion.ul
                        className="flex flex-col gap-2 p-2 rounded-lg bg-slate-900 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-30 ring-1 ring-blue-400"
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                        style={{ originY: "top", translateX: "-50%" }}>
                            {tabs.map((tab, indx) => (
                                <Option 
                                    key={tab.text+indx}
                                    setIsDropdownOpen={setIsDropdownOpen}
                                    Icon={tab.icon}
                                    text={tab.text}
                                />
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>

            {/* main menu in more than 1024 screen width */}
            <div className=" bg-slate-900 items-center flex-wrap lg:gap-x-2 xl:gap-x-3 hidden lg:flex">
                {tabs.map((tab) => (
                    <Chip
                        text={tab.text}
                        icon={tab.icon}
                        selected={selected === tab.text}
                        setSelected={setSelected}
                        key={tab.text}
                    />
                ))}
            </div>

            {/* search field */}
            <>
                <div className='hidden sm:block rounded-full overflow-hidden '>
                    <form className="flex md:w-[18rem] xl:w-[27rem] 2xl:w-[40rem] h-[2.5rem] rounded-full overflow-hidden">
                        <input 
                            type="search"
                            placeholder="Search"
                            className=" w-full h-full pl-4 pr-2 bg-slate-700 outline-none border-none focus:outline focus:outline-[1px] focus:outline-blue-300 text-cyan-200 rounded-l-full"
                            aria-label="Search"
                            onChange={handleInputText}
                            value={typedText}
                        />

                        <button 
                        type='submit'
                        className='bg-slate-700 border-l border-slate-500 text-slate-200 px-2.5 lg:px-3 flex items-center justify-center'>
                            Search
                        </button>
                    </form>
                </div>

                <div className='block sm:hidden z-10'>
                    <div className='block sm:hidden fixed bottom-3 right-3 z-10 active:scale-110 cursor-pointer transition-all w-10 h-10 p-2 bg-slate-700 text-cyan-300 rounded-full overflow-hidden'
                    onClick={() => setIsSearchBarHanging(!isSearchBarHanging)}>
                        <GoSearch className=' text-2xl font-bold' />
                    </div>

                    {isSearchBarHanging && (
                        <motion.div className='w-[80%] h-[2.6rem] fixed bottom-3 left-3 text-white'
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}>
                            <form className="flex w-full h-full rounded-full overflow-hidden">
                                <input 
                                    type="search"
                                    placeholder="Search"
                                    className=" w-full h-full pl-4 pr-2 bg-slate-700 outline-none border-none text-cyan-200"
                                    aria-label="Search"
                                    onChange={handleInputText}
                                    value={typedText}
                                />
                                <button 
                                type='submit'
                                className='bg-slate-700 border-l border-slate-500 text-slate-200 pl-1 pr-2.5 lg:px-3 flex items-center justify-center'>
                                    <TbDatabaseSearch className=' text-[1.4rem] text-green-300' />
                                </button>
                            </form>
                        </motion.div>
                    )}
                </div>
            </>

            {/* account section */}
            <div className='flex items-center gap-x-8 sm:gap-x-5 lg:gap-x-5 xl:gap-x-10'>
                {/* Login Section */}
                <div className="flex justify-center lg:text-lg cursor-pointer">
                    <FlyoutLink FlyoutContent={userActions} array={loginOptions}>
                        LogIn
                    </FlyoutLink>
                </div>

                {/* Register Section */}
                <div className="flex justify-center lg:text-lg cursor-pointer">
                    <FlyoutLink FlyoutContent={userActions} array={registerOptions}>
                        Register
                    </FlyoutLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

const Chip = ({ text, icon, selected, setSelected }) => {
    return (
        <button
        onClick={() => setSelected(text)}
        className={`${
        selected
            ? "text-white"
            : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
        } transition-colors px-3 py-1.5 rounded-md relative flex items-center`}>
            <span className="relative z-10 flex items-center justify-center gap-x-2">
                <span className='font-robotoMono lg:text-[1.05rem]'>{text}</span>
                <span className=' text-[1.3rem]'>{icon}</span>
            </span>

            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "sp", duration: 0.2 }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
                />
            )}
        </button>
    );
};

const AnimatedHamburgerButton = ({ hamburgerActive, setHamburgerActive }) => {
    return (   
        <button
        className="relative h-20 w-10 transition-colors"
        onClick={() => setHamburgerActive((pv) => !pv)}>
            <div className={`flex items-center justify-center flex-col gap-y-[.4rem] rounded-full w-9 h-9 transition-all cursor-pointer`}>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] transition-all ${hamburgerActive ? 'rotate-45 translate-y-[4px]' : 'rotate-0'}  bg-blue-300`}/>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] ${!hamburgerActive ? 'block' : 'hidden'} bg-blue-300 `}/>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] bg-blue-300 ${hamburgerActive ? '-rotate-45 -translate-y-[4px]' : 'rotate-0'}  transition-all`}/>
            </div> 
        </button>
    );
};

const Option = ({ text, Icon, setIsDropdownOpen }) => {
    return (
        <motion.li
        variants={itemVariants}
        className="flex items-center gap-3 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-600 text-cyan-100 hover:text-indigo-100 transition-colors cursor-pointer"
        onClick={() => setIsDropdownOpen(false)}>
            <motion.span 
            className=' text-xl font-robotoMono'
            variants={actionIconVariants}>
                {Icon}
            </motion.span>

            <span className='text-[1rem] font-robotoMono'>{text}</span>
        </motion.li>
    );
};

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};
  
const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};
  
const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};

const FlyoutLink = ({ children, FlyoutContent, array }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;
  
    return (
        <div
        className="relative w-fit h-fit"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
            <span className="relative text-violet-300 font-onest">
                {children}
                <span
                    style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </span>

            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                    className="absolute -right-[6rem] lg:-right-[8rem] top-[3.2rem] z-30"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{ translateX: "-50%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}>
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent " />
                        <div className="absolute right-1 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-violet-800" />
                        <FlyoutContent selectedArray={array} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const userActions = ({selectedArray}) => {
    return (
        <div className=" bg-gradient-to-b from-violet-800 to-indigo-900 rounded-lg py-2.5 lg:py-4 shadow-xl">
            {selectedArray.map((item, index) => (
                <a 
                className='w-[12rem] lg:w-[15rem] pl-4 xl:pl-6 no-underline flex items-center py-2 gap-x-3 hover:bg-gradient-to-l hover:from-violet-600 hover:to-indigo-600'
                href={item.href}
                key={item.text+index}>
                    <span className='text-violet-200 text-[1.2rem] xl:text-[1.3rem]'>
                        {item.icon}
                    </span>
                    <span className=' flex flex-wrap text-violet-200 '>
                        {item.text}
                    </span>
                </a>
            ))}
        </div>
    );
};
  