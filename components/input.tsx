interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  ...rest
}: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-500"
        htmlFor={name}
      >
        {label}
      </label>
      {kind == "text" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            {...rest}
            id={name}
            type="text"
            className="appearance-none py-2 w-full px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      ) : null}
      {kind == "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            {...rest}
            id={name}
            type="number"
            className="appearance-none w-full px-3 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
      ) : null}
      {kind == "price" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className=" absolute left-0 pl-3 pointer-events-none flex items-start justify-center">
            <span className=" text-gray-500 text-sm">$</span>
          </div>
          <input
            {...rest}
            id={name}
            type="text"
            className="appearance-none pl-7 w-full px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className=" absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className=" text-gray-500">USD</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
