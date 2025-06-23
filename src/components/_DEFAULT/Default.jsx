import React from 'react';
import {CustomCheckboxStyle} from "./Style";

const Default = ({checked, onChange, onClick, id, children}) => (
    <CustomCheckboxStyle>
        <div className="checkbox-container">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                onClick={onClick}
            />
            <label htmlFor={id}>
                {children}
            </label>
        </div>
    </CustomCheckboxStyle>
);

export default Default;