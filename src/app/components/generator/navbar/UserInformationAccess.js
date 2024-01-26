import { useState } from "react";
import { UserIcon } from "../../Icons";
import styles from "./styles.module.css";
import Modal from "../modal";
import React from "react";

export function UserInformationAccess (){
const [isOpen, setIsOpen ] = useState(false);
  
  return(
    <div className="bg-color-2 w-1/6 relative color-yellow">
      <div className={`bg-color-2 h-full absolute ${styles["custom-block"]}`}></div>
      <div className="flex row color-1 p-1 h-full relative justify-end">
        <label className="self-center text-lg text-white">@userName</label>
        <button className="px-4 rounded-full" onClick={() => setIsOpen(true)}>
          <UserIcon />
        </button>
        {isOpen && (
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)}>
          <h1>Modal content</h1>
        </Modal>
        )}
      </div>
    </div>
  )
}
