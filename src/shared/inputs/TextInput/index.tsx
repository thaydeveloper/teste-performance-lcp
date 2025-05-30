interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block  text-sm sm:text-lg font-medium text-[var(--color-white)] mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full h-[60px] p-3 rounded-md bg-white text-[var(--color-gray)] focus:ring-2 focus:ring-red-400"
        {...rest}
      />
    </div>
  );
};

export default TextInput;
