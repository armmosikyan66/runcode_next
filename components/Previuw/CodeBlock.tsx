import React, {FC, useMemo} from 'react';
import {useSelector} from "react-redux";
import {HiOutlinePencilAlt} from "react-icons/hi";
import Link from "next/link";

import {RootState} from "../../store/types/IRedux";
import ToggleButton from "../ToggleButton";
import ToolTip from "../ToolTip";

type CodeBlockProps = {
    uniqueId: string
}

const CodeBlock: FC<CodeBlockProps> = ({uniqueId}) => {
    const html = useSelector<RootState>(state => state.html.code);
    const css = useSelector<RootState>(state => state.css.code);
    const js = useSelector<RootState>(state => state.js.code);
    const location = window.location;

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
            <div className="border border-solid border-l border-gray-100 w-1/2 h-full overflow-auto relative">
                <header className="p-4 bg-gray-100 flex items-center">
                    <div className="bg-white shadow shadow-gray-300/50 p-1 px-3 flex justify-between items-center rounded-sm w-full mr-2">
                        {`${location}${uniqueId}`}
                        <span>
                            <ToolTip newPage>
                                <Link href={"/" + uniqueId}>
                                    <HiOutlinePencilAlt size={20}/>
                                </Link>
                            </ToolTip>
                        </span>
                    </div>
                    <ToolTip checkbox>
                        <ToggleButton/>
                    </ToolTip>
                </header>
                {htmlCode && <iframe className="w-full h-full codeblock" title="preview" srcDoc={htmlCode}/>}
            </div>
        </>
    );
};

export default CodeBlock;
