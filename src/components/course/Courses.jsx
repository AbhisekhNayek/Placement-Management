import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiHomeOutline, TiStarFullOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { FaBuildingUser } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbBrandBlogger } from "react-icons/tb";
import { AiOutlineContacts } from "react-icons/ai";
import { RiTeamLine } from 'react-icons/ri';
import banner from '../../images/courses/coursesBanner.jpg';
import { coursesCard, onlineCourses } from '../common/DummyData';
import { FaGithub, FaInstagram, FaLinkedin, FaMeta, FaXTwitter } from 'react-icons/fa6';

const Courses = () => {
    return (
        <div className='relative h-screen scroll-smooth'>
            <div
            className={`h-full flex flex-col items-start justify-center pl-4 pr-4 sm:pl-12 md:pl-32 bg-fixed bg-cover bg-top`}
            style={{
                backgroundImage: `url('${banner}')`,
            }}>
                <div className='text-[1rem] lg:text-[1.3rem] font-montserrat font-bold text-green-100 uppercase'>
                    Welcome to stumate
                </div>

                <div className='mt-3 font-bold text-[2.3rem] md:text-[3rem] xl:text-[4.2rem] leading-[50px] xl:leading-[70px] font-jaldi text-green-100 text-wrap flex flex-wrap sm:w-[35rem] md:w-[43rem] capitalize'>
                    the courses we provide
                </div>

                <div className='mt-3 mb-4 text-[1.1rem] sm:text-xl font-mavenPro font-bold text-black'>
                    "The roots of education are bitter, but the fruit is sweet."
                </div>
            </div>

            {/* navbar */}
            <div className='absolute flex flex-col items-center w-full top-10 gap-y-4'>
                <div className='rounded-lg w-[96%] bg-[#0f172a25] backdrop-blur-md'>
                    <NavBar/>
                </div>
            </div>

            {/* popular online courses */}
            <>
                <div className='relative flex flex-col items-center justify-center mx-6 mt-16 mb-8 font-bold text-center capitalize font-onest gap-y-2 text-2xl md:text-3xl'>
                    popular online courses
                </div>
                
                <div className='flex flex-wrap items-center justify-center gap-16 px-10'>  
                    {coursesCard.map((course, index) => (
                        <div 
                        className='px-4 py-3 overflow-hidden duration-200 rounded-lg hover:rounded-md shadow-xl shadow-slate-400 hover:shadow-violet-400 group bg-slate-200 hover:bg-gradient-to-br hover:from-indigo-200 hover:via-violet-100 hover:to-blue-100 w-[28rem] h-fit transition-all'
                        key={index}>
                            {/* upper */}
                            <div className='flex items-center justify-center w-full'>
                                <div className='flex items-center justify-center gap-x-5'>
                                    <div className='flex items-center justify-center min-w-[5.5rem] max-w-[5.5rem] min-h-[5.5rem] max-h-[5.5rem] p-3 overflow-hidden rounded-full bg-slate-800 group-hover:bg-cyan-700 duration-150 group-hover:scale-105 transition-all'>
                                        <img 
                                            src={course.cover}
                                            className='w-full h-full transition-all group-hover:scale-110'
                                            alt={course.coursesName}
                                        />
                                    </div>
                                    
                                    <div className='text-[1.2rem] font-bold font-montserrat group-hover:text-indigo-800  duration-200 group-hover:translate-x-4 group-hover:-translate-y-1'>
                                        {course.coursesName}
                                    </div>
                                </div>
                            </div>
                            
                            {/* mid */}
                            <div className='px-3 space-y-5 '>
                                <div className='flex items-center justify-between mt-3 '>
                                    {/* person details */}
                                    <div className='space-y-1 transition-all font-mavenPro group-hover:-translate-x-2'>
                                        <div className=' font-bold text-[1.2rem] text-blue-900'>
                                            {course.courTeacher[0].name}
                                        </div>

                                        <div className=' font-bold text-[.9rem]'>
                                            {course.courTeacher[0].totalTime}
                                        </div>
                                    </div>

                                    {/* avatar */}
                                    <div className='w-[5.3rem] h-[3.8rem] rounded-md overflow-hidden group-hover:translate-x-2 transition-all'>
                                        <img 
                                            src={course.courTeacher[0].dcover}
                                            className='w-full h-full '
                                            alt={course.coursesName}
                                        />
                                    </div>
                                </div>

                                <div className='flex items-center justify-between gap-x-16'>
                                    {/* stars */}
                                    <div className='flex items-center text-xl transition-all gap-x-1 group-hover:-translate-x-2'>
                                        {[...Array(5)].map((_, i) => (
                                            <TiStarFullOutline key={i} className='transition-all group-hover:scale-110'/>
                                        ))}
                                    </div>

                                    {/* value */}
                                    <div className='uppercase flex items-center justify-center font-onest text-[1rem] w-full bg-slate-300 text-slate-900 font-bold tracking-wide group-hover:translate-x-2 py-1 rounded-md transition-all'>
                                        {course.priceAll} / {course.pricePer}
                                    </div>
                                </div>
                            </div>

                            {/* lower */}
                            <a href={course.joinNowLink} className='no-underline '>
                                <button className='flex items-center justify-center w-full py-2 mt-4 text-xl font-bold tracking-wide text-white uppercase transition-all rounded-md font-onest bg-slate-700 group-hover:bg-slate-900 group-hover:translate-y-1'>
                                    join now
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </>

            {/* best online courses */}
            <div className='flex flex-col items-center justify-center mt-16 gap-y-10'>
                <div className='flex flex-col items-center space-y-3 '>
                    <div className='text-[1.6rem] xl:text-[2rem] font-bold font-montserrat bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-800 bg-clip-text text-transparent'>
                        Courses
                    </div>

                    <div className='text-3xl font-bold text-center text-blue-900 xl:text-5xl font-montserrat'>
                        Browse Our Best Online Courses
                    </div>
                </div>

                <div className='grid md:grid-cols-2 Cxl:grid-cols-3 2xl:grid-cols-4 gap-14'>
                    {onlineCourses.map((course, index) => (
                        <div 
                        className='group bg-gray-100 shadow-lg shadow-slate-900 hover:bg-slate-800 duration-200 flex flex-col items-center justify-center rounded-md overflow-hidden py-4 px-[4.3rem] cursor-pointer border border-slate-800'
                        key={index}>
                            <div className='w-[5rem] h-[5rem] group-hover:scale-105'>
                                <img 
                                    src={course.cover} 
                                    className='w-full h-full duration-200 group-hover:hidden group-hover:scale-110 transition-all'
                                    alt={course.course} 
                                />

                                <img 
                                    src={course.hoverCover} 
                                    className='hidden w-full h-full duration-200 group-hover:block group-hover:scale-110 transition-all'
                                    alt={course.course} 
                                />
                            </div>

                            <div className='flex flex-col items-center justify-center mt-7 gap-y-3'>
                                <div className='text-xl font-bold duration-200 group-hover:text-cyan-300 font-robotoMono'>
                                    {course.courseName}
                                </div>

                                <div className=' rounded-md px-3 py-1.5 bg-slate-200 group-hover:bg-slate-600 shadow-xl shadow-slate-70 font-bold group-hover:text-yellow-300 font-mavenPro tracking-wide duration-200'>
                                    {course.course}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='mt-10'>
                <Footer/>
            </div>
        </div>
    )
}

export default Courses;



const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>, path: '/'},
    {text: 'Courses', icon: <AiOutlineSchedule/>, path: '/courses'},
    {text: 'About Us', icon: <MdOutlineAccountCircle/>, path: '/aboutus'},
    {text: 'Our Team', icon: <RiTeamLine/>, path: '/'},
    {text: 'Placement', icon: <IoBriefcaseOutline/>, path: '/'},
    {text: 'Blogs', icon: <TbBrandBlogger/>, path: '/'},
    {text: 'Contact Us', icon: <AiOutlineContacts/>, path: '/'},
];

const NavBar = () => {
    const [selected, setSelected] = useState(tabs[1].text);
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    return (
        <div className=' flex items-center justify-between w-full h-[4rem] bg-[#0f172ab4 backdrop-blur pl-4 sm:pl-3 xl:pl-8'>
            {/* hamburger icon in less than 1024 screen width */}
            <div className="relative block lg:hidden">
                <div onClick={() => setIsDropdownOpen((pv) => !pv)}>
                    <AnimatedHamburgerButton
                        hamburgerActive={hamburgerActive}
                        setHamburgerActive={setHamburgerActive}
                    />
                </div>

                <div className="absolute flex items-center justify-center -right-11">
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
                                    path={tab.path}
                                />
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>

            {/* main menu in more than 1024 screen width */}
            <div className="flex-wrap items-center hidden lg:gap-x-2 xl:gap-x-3 lg:flex">
                {tabs.map((tab) => (
                    <Chip
                        text={tab.text}
                        icon={tab.icon}
                        path={tab.path}
                        selected={selected === tab.text}
                        setSelected={setSelected}
                        key={tab.text}
                    />
                ))}
            </div>

            {/* account section */}
            <div className='relative flex items-center h-full px-4 rounded-r-lg bg-slate-800 gap-x-8 sm:gap-x-5 lg:gap-x-5 xl:gap-x-10 sm:px-3 xl:px-8'>
                {/* Login Section */}
                <div className="flex justify-center cursor-pointer lg:text-lg">
                    <FlyoutLink FlyoutContent={userActions} array={loginOptions}>
                        Sign In
                    </FlyoutLink>
                </div>

                {/* Register Section */}
                <div className="flex justify-center cursor-pointer lg:text-lg">
                    <FlyoutLink FlyoutContent={userActions} array={registerOptions}>
                        Sign Up
                    </FlyoutLink>
                </div>

                <div className='absolute top-0 w-5 h-full -left-4 bg-slate-800 actionBtnBend'/>
            </div>
        </div>
    );
};

const Chip = ({ text, icon, selected, setSelected, path }) => {
    const navigate = useNavigate();
    
    const handleClick = (text, path) => {
        setSelected(text)
        navigate(path)
    };
    
    return (
        <button
        onClick={() => handleClick(text, path)}
        className={`${
        selected
            ? "text-white"
            : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
        } transition-colors px-3 py-1.5 rounded-md relative flex items-center group`}>
            <span className="relative z-10 flex items-center justify-center gap-x-2">
                <span className='font-robotoMono lg:text-[1rem] text-white hidden Cxl:block'>{text}</span>
                <span className=' text-[1.3rem] text-white'>{icon}</span>
            </span>

            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
                    transition={{ type: "sp", duration: 0.2 }}
                />
            )}

            <span className='z-20 hidden ml-1 group-hover:block Cxl:group-hover:hidden'>
                {text}
            </span>
        </button>
    );
};

const AnimatedHamburgerButton = ({ hamburgerActive, setHamburgerActive }) => {
    return (   
        <button
        className="relative w-10 h-20 transition-colors"
        onClick={() => setHamburgerActive((pv) => !pv)}>
            <div className={`flex items-center justify-center flex-col gap-y-[.4rem] rounded-full w-10 h-[2.4rem] p-1 bg-slate-800 transition-all cursor-pointer`}>
                <div className={`w-7 h-[2px] transition-all ${hamburgerActive ? 'rotate-45 translate-y-[4px]' : 'rotate-0'}  bg-cyan-300`}/>
                <div className={`w-7 h-[2px] ${!hamburgerActive ? 'block' : 'hidden'} bg-cyan-300`}/>
                <div className={`w-7 h-[2px] ${hamburgerActive ? '-rotate-45 -translate-y-[4px]' : 'rotate-0'}  transition-all bg-cyan-300`}/>
            </div> 
        </button>
    );
};

const Option = ({ text, Icon, setIsDropdownOpen, path }) => {
    const navigate = useNavigate();
    
    const handleClick = (path) => {
        setIsDropdownOpen(false)
        navigate(path)
    };
    
    return (
        <motion.li
        variants={itemVariants}
        className="flex items-center w-full gap-3 p-2 text-xs font-medium transition-colors rounded-md cursor-pointer whitespace-nowrap hover:bg-indigo-600 text-cyan-100 hover:text-indigo-100"
        onClick={() => handleClick(path)}>
            <motion.span 
            className='text-xl font-robotoMono'
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
            <span className="relative text-yellow-300 font-onest">
                {children}
                <span
                    style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
                    className="absolute h-1 transition-transform duration-300 ease-out origin-left scale-x-0 bg-yellow-300 rounded-full -bottom-2 -left-2 -right-2"
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
                        <div className="absolute left-0 right-0 h-6 bg-transparent -top-6 " />
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
                    <span className='flex flex-wrap text-violet-200'>
                        {item.text}
                    </span>
                </a>
            ))}
        </div>
    );
};


const Footer = () => {
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const iconArray = [
        {icon: <FaMeta/>, className: 'text-2xl text-blue-500', href: '#'},
        {icon: <FaGithub/>, className: 'text-2xl text-gray-400', href: '#'},
        {icon: <FaInstagram/>, className: 'text-2xl text-pink-500', href: '#'},
        {icon: <FaXTwitter/>, className: 'text-2xl text-slate-400', href: '#'},
        {icon: <FaLinkedin/>, className: 'text-2xl text-blue-600', href: '#'},
    ];

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFocus = (event) => {
        event.target.select();
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const lists = [
        {
            title: 'Services',
            items: [
                { name: '1on1 Coaching', href: '#' },
                { name: 'Company Review', href: '#' },
                { name: 'Accounts Review', href: '#' },
                { name: 'HR Consulting', href: '#' },
                { name: 'SEO Optimisation', href: '#' }
            ]
        },
        {
            title: 'Company',
            items: [
                { name: 'About', href: '#' },
                { name: 'Meet the Team', href: '#' },
                { name: 'Accounts Review', href: '#' }
            ]
        },
        {
            title: 'Helpful Links',
            items: [
                { name: 'Contact', href: '#' },
                { name: 'FAQs', href: '#' },
                { name: 'Live Chat', href: '#' }
            ]
        },
        {
            title: 'Legal',
            items: [
                { name: 'Accessibility', href: '#' },
                { name: 'Returns Policy', href: '#' },
                { name: 'Refund Policy', href: '#' },
                { name: 'Hiring Statistics', href: '#' }
            ]
        },
        {
            title: 'Downloads',
            items: [
                { name: 'Marketing Calendar', href: '#' },
                { name: 'SEO Infographics', href: '#' }
            ]
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted!');
        console.log(email);
    };

    const handleRedirect = () => {
        navigate(`/`);
        window.scrollTo(0, 0);
    };
    
    return (
        <footer className=" bg-slate-900">
            <div className="px-4 pt-10 pb-6 mx-auto sm:px-6 lg:px-8">
                {/* upper part */}
                <div className="">
                    {/* icon and form */}
                    <div className="flex items-center justify-between text-teal-400">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 24" 
                        className="hidden h-8 cursor-pointer md:block" 
                        fill="none" 
                        onClick={handleRedirect}>
                            <path
                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                fill="currentColor"
                            />
                        </svg>

                        <form className="flex w-full md:w-[75%] lg:w-[65%] xl:w-[45rem] rounded-lg"
                        onSubmit={handleSubmit}>
                            <div className="relative w-full h-full">
                                <input
                                    type="email"
                                    className={`border-b-2 border-slate-300 pt-2.5 pb-2 pl-2 pr-[6rem] focus:border-b-2 ${(email || isFocused) ? 'border-indigo-500' : ''} transition-colors focus:outline-none peer bg-slate-800 w-full h-full font-robotoMono placeholder:text-cyan-300`}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder='Email address'
                                />

                                <button
                                className={`bg-slate-800 text-slate-200 font-robotoMono flex items-center justify-center flex-wrap w-[5.5rem] absolute right-0 bottom-2`}
                                type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* content */}
                    <div className="grid w-full mt-14 xsm:grid-cols-2 md:grid-cols-3 Lmd:grid-cols-5 gap-x-16 gap-y-14 place-content-center">
                        {lists.map((list, index) => (
                            <div 
                            className={`max-w-[10rem]`}
                            key={index}>
                                <p className="text-[1.2rem] border-b-2 border-slate-400 text-yellow-200 ">
                                    {list.title}
                                </p>

                                <div className="flex flex-col items-start justify-between mt-2 space-y-3 lg:text-md">
                                    {list.items.map((item, itemIndex) => (
                                        <span key={itemIndex}>
                                            <a href={item.href}
                                            className='text-blue-400 no-underline hover:text-green-400 hover:underline font-k2d'>
                                                {item.name}
                                            </a>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* social media icons */}
                    <div className='flex items-center justify-center w-full mt-10 sm:justify-end gap-x-5'>
                        {iconArray.map((item, indx) => (
                            <a 
                            key={indx} 
                            className={` rounded-full overflow-hidden ${item.className}`}
                            href={item.href}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* lower part */}
                <div className="pt-8 mt-8 border-t border-gray-100">
                    <div className="flex flex-col items-center justify-center md:flex-row sm:justify-between gap-y-6">
                        <span className="text-[.9rem] sm:text-sm text-gray-300">&copy; 2024. Stumate. All rights reserved.</span>
                        
                        <div className=" flex items-center gap-4 text-xs text-[.9rem] sm:text-sm">
                            <a className='no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Terms & Conditions</a>
                            <a className='no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Privacy Policy</a>
                            <a className='no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};