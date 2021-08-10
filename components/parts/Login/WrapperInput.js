export default function WrapperInput({
    title, type, name, id, placeholder
}) {
    return (
        <div className="input-container">
            <label htmlFor="fname" className="block mb-2 text-xs">
                {title}
            </label>
            <input
                className="block w-full box-border rounded-xl border border-gray-400 p-3 mb-5 text-sm focus:outline-none"
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
}