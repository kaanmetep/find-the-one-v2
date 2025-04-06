import { useEffect } from "react";
export function useOutsideClick(handleFunc, nullOrFalse) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".popup")) {
        handleFunc(nullOrFalse === null ? null : false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
}
