import React from "react";
import "./InputField.styles.scss";

interface InputFieldData {
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label?: string;
    type: string;
    value: string;
    otherProps?: any;
}

const InputField: React.FC<InputFieldData> = ({
    handleChange,
    label,
    type,
    value,
    ...otherProps
}) => {
    return (
        <div className="inputField-container">
            {label && <label htmlFor="">{label}</label>}
            {type === "textarea" ? (
                <textarea cols={30} rows={10} {...otherProps}></textarea>
            ) : (
                <input
                    onChange={handleChange}
                    type={type}
                    value={value}
                    {...otherProps}
                />
            )}
        </div>
    );
};

export default InputField;
