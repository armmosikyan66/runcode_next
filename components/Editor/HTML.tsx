import React, {FC, useCallback, useEffect, useState} from 'react';
import Editor from "@monaco-editor/react";
import {useDispatch, useSelector} from "react-redux";

import {setHtml} from "../../store/actions/htmlAction";
import {AppDispatch, RootState} from "../../store/types/IRedux";

const HTML: FC = () => {
    const [state, setState] = useState<string | undefined>("");
    const codes = useSelector<RootState>((state1 => state1.html.code))
    const dispatch: AppDispatch = useDispatch();
    let typingTimer = setTimeout(() => {
    }, 0);
    const doneTypingInterval = 1000;

    const handleChange = useCallback((value?: string) => {
        setState(value);

        if (!value) {
            return dispatch(setHtml("Nothing here"));
        }

        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            dispatch(setHtml(value));
        }, doneTypingInterval);
    }, []);

    useEffect(() => {
        // @ts-ignore
        setState(codes);

        return () => {
            dispatch(setHtml(state));
        }
    }, []);

    return (
        <div className="h-full w-1/2">
            <Editor
                height="100%"
                width="100%"
                language="html"
                theme="light"
                options={{
                    minimap: {enabled: false},
                }}
                value={state}
                onChange={handleChange}
                line={2}
                saveViewState={true}
            />
        </div>
    );
};

export default HTML;
