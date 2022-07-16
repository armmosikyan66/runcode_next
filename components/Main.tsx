import React, {FC, useMemo} from 'react';
import {useSelector} from "react-redux";

import {RootState} from "../store/types/IRedux";
import HTML from "./Editor/HTML";
import CSS from "./Editor/CSS";
import CodeBlock from "./Previuw/CodeBlock";
import JS from "./Editor/JS";
import {unique} from "../helpers/idGenerator";
import Text from "./Editor/Test";

const Main: FC = () => {
    const fileType = useSelector<RootState>(state => state.fileType.type);
    const uniqueId = useMemo(() => unique(), []);;

    return (
        <div className="w-full h-full flex content">
            {fileType === "txt" && (
                <>
                    <Text/>
                </>
            )}
            {fileType === "html" && (
                <>
                    <HTML/>
                    <CodeBlock uniqueId={uniqueId}/>
                </>
            )}
            {fileType === "css" && (
                <>
                    <CSS/>
                    <CodeBlock uniqueId={uniqueId}/>
                </>
            )}
            {fileType === "js" && (
                <>
                    <JS/>
                    <CodeBlock uniqueId={uniqueId}/>
                </>
            )}
        </div>
    );
};

export default Main;
