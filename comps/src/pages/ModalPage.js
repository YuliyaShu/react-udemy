import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setModal] = useState(false);
    const handleClick = () => {
        setModal(true);
    };
    const handleClose = () => {
        setModal(false);
    };
    const button = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    const modal = <Modal 
            onClose={handleClose} 
            actionBar={button}
        >
        Text
    </Modal>

    return(
        <div className="relative">
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}
export default ModalPage;
