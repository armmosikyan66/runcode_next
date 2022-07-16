import React, {useMemo} from 'react';
import type {NextPage} from "next";
import {useSelector} from "react-redux";
import {MdClose} from "react-icons/md";
import {useRouter} from "next/router";
import Image from "next/image";

import {RootState} from "../store/types/IRedux";
import Logo from "../assets/Logo.svg";
import ToolTip from "../components/ToolTip";

const NewWindow: NextPage = () => {
    const html = useSelector<RootState>(state => state.html.code);
    const css = useSelector<RootState>(state => state.css.code);
    const js = useSelector<RootState>(state => state.js.code);
    const router = useRouter()

    const htmlCode = useMemo(() => {
        return (
            `
                <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <style>
                    ${css}
                    </style>
                </head>
                <body>
                    ${html}
                    <script>
                    ${js}
                    </script>
                </body>
                </html>
            `
        )
    }, [html, css, js]);

    return (
        <>
            <div className="h-full w-full">

                <header className="w-full border bg-gray-100 border-gray-100 border-solid">
                    <div className="p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="h-7 mr-6">
                                    <Image width={115} height={28} src={Logo} alt="header-logo"/>
                                </div>
                            </div>
                            <div onClick={() => router.back()} className="cursor-pointer">
                                <ToolTip close>
                                    <MdClose fill="#000" size={30}/>
                                </ToolTip>
                            </div>
                        </div>
                    </div>
                </header>
                {htmlCode && <iframe className="w-full h-full codeblock" title="preview" srcDoc={htmlCode}/>}
            </div>
        </>
    );
};

export default NewWindow;
