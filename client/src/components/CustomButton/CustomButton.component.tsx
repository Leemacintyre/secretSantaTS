import React from "react";
import "./CustomButton.styles.scss";

// interface CustomButtonData {
//     children: string | number;
// }

const CustomButton: any = ({ children, ...props }: any) => {
    return (
        <button className="customButton" {...props}>
            {children}
        </button>
    );
};

export default CustomButton;
