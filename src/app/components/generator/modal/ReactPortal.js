import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export default function ReactPortal({ children, wrapperId }) {
  let [wrapper,setWrapper] = useState();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if(!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapper(element);

    return () => {
      if (systemCreated && element.parentNode) element.parentNode.removeChild(element);
    }
  }, [wrapperId]);

  if (!wrapper) return null;    

  return createPortal(children, wrapper);
}