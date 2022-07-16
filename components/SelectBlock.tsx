import React, {FC, useEffect, useState} from 'react';
import clsx from "clsx";
import {BiPencil} from "react-icons/bi";
import {IoIosArrowDown} from "react-icons/io";
import {BsFillFileEarmarkTextFill} from "react-icons/bs";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3Full} from "react-icons/di";
import {SiJavascript} from "react-icons/si";
import {IconType} from "react-icons";

import ToolTip from "./ToolTip";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/types/IRedux";
import {fileTypeAction} from "../store/actions/fileTypeAction";

const files = [
    {
        image: BsFillFileEarmarkTextFill,
        name: "text",
        type: "txt",
        fill: "rgb(66, 165, 245)"
    },
    {
        image: AiFillHtml5,
        name: "HTML",
        type: "html",
        fill: "rgb(228, 77, 38)"
    },
    {
        image: DiCss3Full,
        name: "CSS",
        type: "css",
        fill: "rgb(66, 165, 245)"
    },
    {
        image: SiJavascript,
        name: "JS",
        type: "js",
        fill: "rgb(255, 202, 40)"
    },
]

type selectedFileTypes = {
    name: string,
    type: string,
    fill: string,
    image: IconType
}

const SelectBlock: FC = () => {
    const type = useSelector<RootState>(state => state.fileType.type);
    const dispatch: AppDispatch = useDispatch();
    const [openedFilePopup, setOpenedFilePopup] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<selectedFileTypes>({
        image: BsFillFileEarmarkTextFill,
        name: "text",
        type: "txt",
        fill: "rgb(66, 165, 245)"
    });

    const selectFile = (value: selectedFileTypes) => {
        setSelectedFile(value);
        setOpenedFilePopup(false);
        dispatch(fileTypeAction(value.type));
    }

    useEffect(() => {
        if (type === "txt") {
            setSelectedFile(files[0]);
        } else if (type === "html") {
            setSelectedFile(files[1]);
        }else if (type === "css") {
            setSelectedFile(files[2]);
        } else {
            setSelectedFile(files[3]);
        }
    }, [type])

    return (
        <>
            <div className="mr-5">
                <ToolTip file>
                    <div className="flex items-center justify-center relative min-w-ful w-28">
                        <span
                            className="text-black opacity-50 mr-1 hover:opacity-100">untitled.{selectedFile.type}</span>
                        <span>
                            <BiPencil color={"rgba(0, 0, 0, 0.5)"}/>
                        </span>
                    </div>
                </ToolTip>
            </div>
            <div className="w-40 h-10 relative">
                <button
                    onClick={() => setOpenedFilePopup(!openedFilePopup)}
                    className={
                        clsx("w-full h-full border border-gray-300 transition rounded text-gray-800 bg-white focus:outline-none hover:border-gray-600", {
                            "border-blue-500 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 hover:border-blue-500": openedFilePopup
                        })
                    }>
                    <div className="flex items-center justify-between px-3">
                        <div className="flex items-center justify-start">
                            <selectedFile.image color={selectedFile.fill} size={18}/>
                            <span className="px-2 text-gray-700">{selectedFile.name}</span>
                        </div>
                        <div className="flex items-center justify-end border-l border-gray-300 border-solid pl-2">
                            <IoIosArrowDown size={18} color={"hsl(0,0%,80%)"}/>
                        </div>
                    </div>
                </button>
                <div className={
                    clsx("bg-white shadow-lg shadow-slate-50 transition absolute w-full left-1/2 -bottom-3 z-10", {
                        "scale-100 -translate-x-1/2 translate-y-full": openedFilePopup,
                        "scale-0 -translate-x-1/2 translate-y-2/3": !openedFilePopup
                    })
                }>
                    <ul className="overflow-auto text-base rounded ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {files.map((file, index) => (
                            <li key={index} className="p-2 cursor-pointer transition hover:bg-blue-100"
                                onClick={() => selectFile(file)}>
                                <div className="flex align-center justify-start">
                                    <span className="mr-1.5">
                                        <file.image size={20} color={file.fill}/>
                                    </span>
                                    <span className="font-normal truncate">
                                        {file.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SelectBlock;
