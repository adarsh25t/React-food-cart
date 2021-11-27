import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from './Modal.module.css';

const Backdrop = ({closeCart})=>{
    return <div className={classes.backdrop} onClick={closeCart}></div>
}

const ModalOverlay = ({children})=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = ({children,closeCart})=>{
    return(
        <Fragment>
            {ReactDom.createPortal(<Backdrop closeCart={closeCart}/>,portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}
export default Modal;