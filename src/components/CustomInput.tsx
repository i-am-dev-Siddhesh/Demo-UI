import { ICustomInputProps } from '@/types/input';

const CustomInput = ({ label, id, name, placeholder, type, options }: ICustomInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-black"
      >
        {label}
      </label>
      <div className="mt-2.5">
        {type === "select" ?
          <select
            className="block w-full  rounded-md border-0 px-3.5  text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            style={{ background: "white",padding:"11px 15px" }}
          >
            <option value="default">Default</option>
            {options?.map((option) =>
              <option key={option?.label} value={option.value}>{option.label}</option>
            )}
          </select>
          :
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className="block w-full  rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        }
      </div>
    </div>
  );
};

export default CustomInput;
