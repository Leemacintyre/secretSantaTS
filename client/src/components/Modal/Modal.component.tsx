import React from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import "./Modal.styles.scss";

export interface ModalData {
    children: any;
    title: string;
    // handleSubmitHelper: (e: SubmitEvent) => void;
    toggleModalHelper: () => void;
}

const Modal: React.FC<ModalData> = ({
    children,
    title,
    // handleSubmitHelper,
    toggleModalHelper,
}) => {
    return (
        <>
            <div className="modal-wrapper">
                <div
                    className="modal-bgGradient"
                    onClick={() => toggleModalHelper()}
                ></div>
                <div className="modal-container">
                    {/*content*/}
                    <div className="modal-modalBg">
                        {/*header*/}
                        <div className="modal-titleContainer">
                            <h3 className="modal-title">{title}</h3>
                        </div>
                        {/*body*/}
                        <div className="modal-modalBody">
                            <div className="modal-modalContent">{children}</div>
                        </div>
                        {/*footer*/}
                        <div className="modal-modalFooter">
                            <CustomButton
                                type="submit"
                                // close
                                onClick={() => toggleModalHelper()}
                            >
                                CLOSE
                            </CustomButton>
                            {/* <CustomButton
                                type="submit"
                                onClick={(e: SubmitEvent) =>
                                    handleSubmitHelper(e)
                                }
                            >
                                UPDATE
                            </CustomButton> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
