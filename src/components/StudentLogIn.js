import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BgColorAnimation from '../animations/BgColorAnimation';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { CiLogin } from "react-icons/ci";

const StudentLogIn = () => {
    const [usn, setUsn] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState({
        usn: false,
        password: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleUsnChange = (event) => {
        setUsn(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUsnFocus = () => {
        setIsFocused({ ...isFocused, usn: true });
    };

    const handlePasswordFocus = () => {
        setIsFocused({ ...isFocused, password: true });
    };

    const handleUsnBlur = () => {
        setIsFocused({ ...isFocused, usn: false });
    };

    const handlePasswordBlur = () => {
        setIsFocused({ ...isFocused, password: false });
    };

    const handleRedirection = () => {
        navigate(`/StudentRegister`)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1337/api/studentLogin', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify({ usn, password })
            });
            const responseData = await response.json();
            if (responseData.status === 'ok') {
                localStorage.setItem('token', responseData.token);
                navigate('/StudentHome', { replace: true });
            } else {
                alert(responseData.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <BgColorAnimation
            child={
                <div className=" h-screen flex justify-center items-center">
                    <form className="bg-[#ffffff2b] shadow-md rounded px-4 md:px-8 py-5 w-[22rem] xsm:w-[26rem] sm:w-[35rem] md:w-[40rem]" onSubmit={handleSubmit}>
                        <h1 className="text-[2rem] md:text-4xl text-center font-mooli tracking-wider text-violet-300 font-bold mb-6">
                            Student LogIn
                        </h1>

                        {/* USN */}
                        <div className="relative w-full h-full mt-10">
                            <input
                                type="text"
                                className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${usn ? 'border-indigo-400' : ''} focus:border-indigo-400 pr-3`}
                                id="usn"
                                value={usn}
                                onChange={handleUsnChange}
                                placeholder="USN"
                                autoFocus={true}
                            />
                        </div>

                        {/* Password */}
                        <div className="relative w-full h-full mt-10">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${password ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />

                            <div className="absolute right-2 top-3 text-xl cursor-pointer">
                                {showPassword
                                    ? <MdOutlineVisibility className="text-blue-300" onClick={() => setShowPassword(!showPassword)} />
                                    : <MdOutlineVisibilityOff className="text-blue-300" onClick={() => setShowPassword(!showPassword)} />
                                }
                            </div>
                        </div>

                        {/* LogIn */}
                        <div className="flex items-center justify-between mt-6">
                            <button className="rounded-lg relative w-32 xsm:w-36 h-10 cursor-pointer flex items-center bg-slate-900 group hover:bg-slate-900 active:bg-slate-900 overflow-hidden" type="submit">
                                <span className="text-gray-200 group-hover:text-slate-900 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                    Log In
                                </span>

                                <span className="absolute right-2 group-hover:-right-2 h-full w-8 rounded-lg bg-slate-900 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-[110%] transition-all duration-300">
                                    <CiLogin className="text-2xl group-hover:text-3xl group-hover:font-bold text-gray-200 group-hover:text-green-300" />
                                </span>
                            </button>

                            <a className="font-mooli font-bold text-[.85rem] text-blue-400 hover:text-indigo-400" href="#!">
                                Forgot password?
                            </a>
                        </div>

                        {/* Registration */}
                        <div className="flex items-center justify-between mt-6">
                            <span className="font-mooli font-bold text-md text-blue-400">
                                New student?😐
                            </span>

                            <button 
                            className="ml-2 text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 px-3 py-[.2rem] rounded-full"
                            onClick={handleRedirection}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            }
        />
    )
};

export default StudentLogIn;
