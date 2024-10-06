import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: Event) => void // Specify that the callback expects an Event argument
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // Define the type of the event
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event); // Pass the event to the callback
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
