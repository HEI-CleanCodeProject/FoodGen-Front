import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import React from "react";

export default function ({ children, isOpen, handleClose }) {
  //close modal on escape key press
  useEffect(() => {
    const closeOnEscape = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, [handleClose]);
  
  //disable scrolling webiste scoll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  },[isOpen])

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal-wrapper">
      <>
        <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-color-2 opacity-50"/>
        <div className="fixed rounded flex flex-col box-border min-w-fit overflow-hidden p-5 bg-app-greyinset-y-32 inset-x-12 z-50 opacity-100">
          <button className="btn-app-2" onClick={handleClose}>
            Close
          </button>
          <div className="box-border h-5/6">{children}</div>
        </div>
      </>
    </ReactPortal>
    );
}