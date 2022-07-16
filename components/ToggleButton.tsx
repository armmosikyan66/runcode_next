import React, {FC, useState} from 'react';

const ToggleButton: FC = () => {
    const [checked, setChecked] = useState<boolean>(true);

    return (
        <div className="cursor-pointer flex items-center" onClick={() => setChecked(!checked)}>
            <div className="mr-1">
                <input type="checkbox" className="checkbox" id="checkbox" defaultChecked={checked} hidden/>
                <div className="knobs">
                    <span/>
                </div>
            </div>
            <label className="cursor-pointer"  htmlFor="checkbox">Autorun</label>
        </div>
    );
};

export default ToggleButton;
