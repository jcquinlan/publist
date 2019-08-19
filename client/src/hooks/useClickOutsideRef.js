import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useClickOutsideRef(ref, callback) {
  /**
   * Fire the supplied callback if a click outside the ref is detected
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
        callback();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseup", handleClickOutside);
    };
  });
}

export default useClickOutsideRef;