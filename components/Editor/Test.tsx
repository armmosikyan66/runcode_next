import React, {FC} from 'react';
import Editor from "@monaco-editor/react";

const Text: FC = () => {
    return (
        <div className="h-full w-full">
            <Editor
                height="100%"
                width="100%"
                language="text"
                theme="light"
                defaultValue="Write your text here"
                options={{
                    minimap: {enabled: false},
                }}
                line={2}
                saveViewState={true}
            />
        </div>
    );
};

export default Text;
