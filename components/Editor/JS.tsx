import React, {FC, useCallback, useEffect, useState} from 'react';
import Editor from "@monaco-editor/react";
import {useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../../store/types/IRedux";
import {setJs} from "../../store/actions/jsAction";

const JS: FC = () => {
    const [state, setState] = useState<string | undefined>("");
    const codes  = useSelector<RootState>(state1 => state1.js.code)
    const dispatch: AppDispatch = useDispatch();
    let typingTimer = setTimeout(() => {
    }, 0);
    const doneTypingInterval = 1000;

    const handleChange = useCallback((value?: string) => {
        setState(value);

        if (!value) {
            return dispatch(setJs("/*Nothing here*/"));
        }

        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            dispatch(setJs(value));
        }, doneTypingInterval);
    }, []);

    useEffect(() => {
        // @ts-ignore
        setState(codes);

        return () => {
            dispatch(setJs(state));
        }
    }, []);

    return (
        <div className="h-full w-1/2">
            <Editor
                height="100%"
                width="100%"
                language="javascript"
                theme="light"
                defaultValue="/*Write your Javascript here*/"
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

export default JS;
