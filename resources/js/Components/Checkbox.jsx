export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-gray-300 text-grey-600 shadow-sm focus:grey-500 " +
                className
            }
        />
    );
}
