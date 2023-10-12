import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            disabled={props.disabled}
            type={type}
            className={
                "border-gray-300 focus:border-black focus:ring-black rounded-md shadow-sm " +
                className +
                (props.disabled ? " bg-gray-200" : "")
            }
            ref={input}
        />
    );
});
