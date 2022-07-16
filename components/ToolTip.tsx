import React, {FC, ReactNode} from 'react';
import clsx from "clsx";

export type ToolTipProps = {
    children: JSX.Element | ReactNode | string,
    github?: boolean,
    file?: boolean,
    fork?: boolean,
    checkbox?: boolean,
    newPage?: boolean,
    close?: boolean,
}

const ToolTip: FC<ToolTipProps> = ({children, close, newPage, github, file, fork, checkbox}) => {
    return (
        <>
            <div className={clsx("tooltip", {
                "github": github,
                "file": file,
                "fork": fork,
                "checkbox": checkbox,
                "newPage": newPage,
                "close": close,
            })}>{children}</div>
        </>
    );
};

export default ToolTip;