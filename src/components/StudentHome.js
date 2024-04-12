import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { TbDatabaseSearch } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import company from '../images/company.png';
import schedule from '../images/schedule.png';
import analysis from '../images/analysis.png';
import resume from '../images/resume.png';
import coverLetter from '../images/cover-letter.png';
import counselling from '../images/counselling.png';
import chat from '../images/chat.png';
import academics from '../images/academics.png';
import profile from '../images/profile.png';
import feedback from '../images/feedback.png';
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { TypewriterEffectSmooth } from '../animations/TypeWriter'

const buttonsData = [
    {
        imgSrc: company,
        alt: 'Hiring Companies',
        text: 'Discover job openings. Explore descriptions, company profiles, and reviews. Apply to exciting roles.',
        bgColor: 'bg-[#FFB293] bg-opacity-40 border-2 border-orange-300 hover:shadow-[#FFB293]',
        textColor: 'text-[#FF4800]',
        titleColor: 'text-[#AC3100]',
        link: '/ALLJobRole'
    },
    {
        imgSrc: schedule,
        alt: 'Schedule',
        text: 'Effortlessly manage appointments and deadlines. Organize tasks and set reminders for productivity.',
        bgColor: 'bg-[#BFEFFF] bg-opacity-50  border-2 border-blue-300 hover:shadow-[#BFEFFF]',
        textColor: 'text-[#00A8E0]',
        titleColor: 'text-[#256E86]',
        link: '/StudentSchedule'
    },
    {
        imgSrc: analysis,
        alt: 'Analytics and Reporting',
        text: 'Gain insights into performance. Track metrics and visualize data for informed decisions.',
        bgColor: 'bg-[#AFFFAF] bg-opacity-30 border-2 border-green-400 hover:shadow-[#AFFFAF]',
        textColor: 'text-[#00C42C]',
        titleColor: 'text-[#00731A]',
        link: '/analytics-reporting'
    },
    {
        imgSrc: resume,
        alt: 'Resume',
        text: 'Our resume-building tool guides you to create professional documents that stand out to employers.',
        bgColor: 'bg-[#FFF09D] bg-opacity-50 border-2 border-yellow-400 hover:shadow-[#FFF09D]',
        textColor: 'text-[#E09200]',
        link: '/createResume'
    },
    {
        imgSrc: coverLetter,
        alt: 'Cover Letter',
        text: 'Write persuasive cover letters. Showcase passion, qualifications, and alignment with company values.',
        bgColor: 'bg-[#FFACD5] bg-opacity-30 border-2 border-pink-300 hover:shadow-[#FFACD5]',
        textColor: 'text-[#FA3B9B]',
        titleColor: 'text-[#A30050]',
        link: '/StudentCoverLetter'
    },
    {
        imgSrc: counselling,
        alt: 'Career Counselling',
        text: 'Receive personalized guidance. Explore career paths, seek job search advice, and plan next steps.',
        bgColor: 'bg-[#EC9DFF] bg-opacity-30 border-2 border-violet-300 hover:shadow-[#EC9DFF]', 
        textColor: 'text-[#BA55D3]',
        titleColor: 'text-[#9500BA]',
        link: '/CareerCounselling'
    },
    {
        imgSrc: chat,
        alt: 'Chat',
        text: 'Connect with peers, mentors, and experts. Exchange ideas, ask questions, and build relationships.',
        bgColor: 'bg-[#A3FFF6] bg-opacity-30 border-2 border-cyan-400 hover:shadow-[#A3FFF6]', 
        textColor: 'text-[#10C0AE]',
        titleColor: 'text-[#007569]',
        link: '/chat'
    },
    {
        imgSrc: academics,
        alt: 'Academics',
        text: 'Access study materials and support. Excel in studies with educational resources and tuto services.',
        bgColor: 'bg-[#FFAFA0] bg-opacity-30 border-2 border-pink-300 hover:shadow-[#FFAFA0]', 
        textColor: 'text-[#FF6347]',
        titleColor: 'text-[#B6341B]',
        link: '/student-academics'
    },
    {
        imgSrc: profile,
        alt: 'Profile',
        text: 'Create a comprehensive profile. Highlight skills, experiences, and accomplishments for opportunities.',
        bgColor: 'bg-[#9F90FF] bg-opacity-30 border-2 border-indigo-300 hover:shadow-[#9F90FF]',
        textColor: 'text-[#6A5ACD]',
        titleColor: 'text-[#241396]',
        link: '/StudentProfile'
    },
    {
        imgSrc: feedback,
        alt: 'Feedback',
        text: 'Share thoughts and suggestions. Help improve our platform and enhance user experience.',
        bgColor: 'bg-[#D9FFB1] bg-opacity-30 border-2 border-green-300 hover:shadow-[#D9FFB1]',
        textColor: 'text-[#55BE16]',
        titleColor: 'text-[#00731A]',
        link: '/Feedback'
    }
];

const ButtonWithCard = ({ imgSrc, alt, text, bgColor, textColor, titleColor, link }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(link);
    };

    return (
        <div 
        className={` cursor-pointer max-w-[38rem] md:h-[14.5rem] xl:h-[14rem] ${bgColor} px-4 py-3 rounded-lg overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input `}
        onClick={handleRedirect}>
            <div className='flex flex-col items-start justify-between transition duration-200 gap-y-6 group-hover/bento:translate-x-2'>
                <div className='space-y-2 '>
                    <div className=' w-16 h-16 rounded-lg p-[.3rem] overflow-hidden bg-slate-'>
                        <img 
                            src={imgSrc} 
                            alt={alt} 
                            className={` w-full h-full`}
                        />
                    </div>
                    <p className={`${titleColor} text-lg font-robotoMono font-bold`}>{alt}</p>
                </div>

                <p className={`${textColor} font-bold md:text-justify sm:text-[1rem] lg:text-[1.1rem] font-lato tracking-wide`}>{text}</p>
            </div>
        </div>
    );
};

const StudentHome = () => {
    return (
        <div>
            <NavBar/>

            {/* type writer */}
            {/* <div className=' flex flex-wrap font-bold font-k2d absolute top-[4rem] left-1/2 -translate-x-1/2 bg-gradient-to-br from-red-300 via-indigo-300 to-violet-400 tracking-wide z-30 bg-clip-text text-transparent'>
                <TypewriterEffectSmooth
                    words={[
                        { text: "Welcome to Stumate" },
                        // { text: "to" },
                        // { text: "StuMate" },
                    ]}
                />
            </div> */}

            <div className=' max-h-[50rem] object-contain overflow-hidden'>
                <img 
                    src="https://wallpaperaccess.com/full/6810534.jpg" 
                    className='w-full h-full '
                    alt="welcome image" 
                />
            </div>

            <div className="w-full px-3 pb-5 mt-5">
                <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3 place-items-center">
                    {buttonsData.map((button, index) => (
                        <ButtonWithCard 
                            key={index} 
                            imgSrc={button.imgSrc} 
                            alt={button.alt} 
                            text={button.text} 
                            bgColor={button.bgColor}
                            textColor={button.textColor}
                            titleColor= {button.titleColor}
                            className={(index === 3 || index === 6) ? 'lg:col-span-2' : ''}
                            link={button.link}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default StudentHome;




const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>, path: '/StudentHome'},
    {text: 'Schedule', icon: <AiOutlineSchedule/>, path: '/StudentSchedule'},
    {text: 'Resume', icon: <MdOutlineAccountCircle/>, path: '/createResume'},
];

const NavBar = () => {
    const [selected, setSelected] = useState(tabs[0].text);
    const [typedText, setTypedText] = useState('');
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchBarHanging, setIsSearchBarHanging] = useState(false);
    const navigate = useNavigate();

    const loginOptions = [
        { href: '/', text: 'LogOut', icon: <CiLogout/> },
    ];

    const handleInputText = (e) => {
        setTypedText(e.target.value);
    };

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className=' flex items-center justify-between w-full h-[4rem] bg-slate-900 px-4 sm:px-3 xl:px-8'>
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
            <div className="flex-wrap items-center hidden bg-slate-900 lg:gap-x-2 xl:gap-x-3 lg:flex">
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

            {/* search field */}
            <>
                <div className='fixed z-10 block w-10 h-10 p-2 overflow-hidden transition-all rounded-full cursor-pointer bottom-3 right-3 active:scale-110 bg-slate-700 text-cyan-300'
                onClick={() => setIsSearchBarHanging(!isSearchBarHanging)}>
                    <GoSearch className='text-2xl font-bold ' />
                </div>

                {isSearchBarHanging && (
                    <motion.div className='w-[80%] h-[2.6rem] fixed bottom-3 left-3 text-white'
                    initial={{x: -300, opacity: 0}}
                    animate={{x: 0, opacity: 1}}>
                        <form className="flex w-full h-full overflow-hidden rounded-full">
                            <input 
                                type="search"
                                placeholder="Search"
                                className="w-full h-full pl-4 pr-2 border-none outline-none bg-slate-700 text-cyan-200"
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
            </>

            {/* account section */}
            <div className='flex items-center gap-x-8 sm:gap-x-5 lg:gap-x-5 xl:gap-x-10'>
                <div className="flex justify-center cursor-pointer lg:text-lg">
                    <FlyoutLink FlyoutContent={userActions} array={loginOptions}>
                        <div className='flex items-center gap-x-2'>
                            <FaRegUser/>
                            User
                        </div>
                    </FlyoutLink>
                </div>
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
        } transition-colors px-3 py-1.5 rounded-md relative flex items-center`}>
            <span className="relative z-10 flex items-center justify-center gap-x-2">
                <span className='font-robotoMono lg:text-[1.05rem]'>{text}</span>
                <span className=' text-[1.3rem]'>{icon}</span>
            </span>

            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "sp", duration: 0.2 }}
                    className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            )}
        </button>
    );
};

const AnimatedHamburgerButton = ({ hamburgerActive, setHamburgerActive }) => {
    return (   
        <button
        className="relative w-10 h-20 transition-colors"
        onClick={() => setHamburgerActive((pv) => !pv)}>
            <div className={`flex items-center justify-center flex-col gap-y-[.4rem] rounded-full w-9 h-9 transition-all cursor-pointer`}>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] transition-all ${hamburgerActive ? 'rotate-45 translate-y-[4px]' : 'rotate-0'}  bg-blue-300`}/>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] ${!hamburgerActive ? 'block' : 'hidden'} bg-blue-300 `}/>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] bg-blue-300 ${hamburgerActive ? '-rotate-45 -translate-y-[4px]' : 'rotate-0'}  transition-all`}/>
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
            <span className="relative text-violet-300 font-onest">
                {children}
                <span
                    style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
                    className="absolute h-1 transition-transform duration-300 ease-out origin-left scale-x-0 bg-indigo-300 rounded-full -bottom-2 -left-2 -right-2"
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
                        <div className="absolute w-4 h-4 rotate-45 -translate-x-1/2 -translate-y-1/2 right-1 bg-violet-800" />
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
