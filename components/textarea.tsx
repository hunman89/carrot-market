import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  required: boolean;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  required,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          className="mb-1 block text-sm font-medium text-gray-500"
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
      <textarea
        {...register}
        id={name}
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={4}
        required={required}
        {...rest}
      />
    </div>
  );
}
