import React from "react";
import "./InputField.styles.scss";

interface InputFieldData {
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label?: string;
    type: string;
    value: string | undefined;
    otherProps?: any;
    error?: boolean;
    // val?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldData> = ({
    handleChange,
    label,
    type,
    value,
    error,
    ...otherProps
}) => {
    return (
        <div className="inputField-container">
            {label && <label htmlFor="">{label}</label>}
            {type === "textarea" ? (
                <textarea cols={30} rows={10} {...otherProps}></textarea>
            ) : (
                <input
                    className={error ? "error" : ""}
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
