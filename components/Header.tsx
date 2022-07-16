import React from 'react';
import Image from 'next/image';
import {NextComponentType} from "next";
import {GoMarkGithub} from "react-icons/go";
import {IoMdSettings} from "react-icons/io";
import {BiGitRepoForked} from 'react-icons/bi';
import {useSelector} from "react-redux";

import Logo from "../assets/Logo.svg";
import SelectBlock from "./SelectBlock";
import ToolTip from "./ToolTip";
import {RootState} from "../store/types/IRedux";

const Header: NextComponentType = () => {
    const content = "html: " + useSelector<RootState>((state => state.html.code)) + "\n"
        + "css: " + useSelector<RootState>(state => state.css.code) + "\n"
        + "js: " + useSelector<RootState>(state => state.js.code);

    return (
        <header>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="h-7 mr-6">
                            <Image width={115} height={28} src={Logo} alt="header-logo"/>
                        </div>
                        <SelectBlock/>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="mr-4">
                            <button
                                className="shadow shadow-gray-300/50 flex items-center justify-center px-8 rounded-full h-11 border border-gray-100 transition hover:scale-105 active:scale-100">
                                <span className="mr-1"><IoMdSettings color="#000" size={18}/></span>
                                <span>Settings</span>
                            </button>
                        </div>
                        <div onClick={() => navigator.clipboard.writeText(content)} className="mr-4">
                            <ToolTip fork>
                                <button
                                    className="shadow shadow-gray-300/50 flex items-center justify-center px-8 rounded-full h-11 border border-gray-100 transition hover:scale-105 active:scale-100">
                                    <span className="mr-1"><BiGitRepoForked color="#000" size={18}/></span>
                                    <span>Fork</span>
                                </button>
                            </ToolTip>
                        </div>
                        <div className="">
                            <ToolTip github>
                                <a href="https://github.com/armmosikyan66" rel="noreferrer" target="_blank">
                                    <button
                                        className="shadow shadow-blue-400/50 text-white flex items-center justify-center px-8 rounded-full h-11 bg-blue-500 transition hover:scale-105 active:scale-100">
                                        <span className="mr-1">Follow me</span>
                                        <span><GoMarkGithub color="#fff" size={18}/></span>
                                    </button>
                                </a>
                            </ToolTip>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
