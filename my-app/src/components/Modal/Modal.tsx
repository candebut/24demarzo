import React, { ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  handleClose: () => void;
  isOpen: boolean;
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" },
};
const Modal = ({ handleClose, isOpen, children }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="overlay"
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <motion.div className="modal-container" variants={containerVariant}>
            <motion.div className="close-button" onClick={() => handleClose()}>
              <IoCloseSharp size={16} color="#000000" />
            </motion.div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
