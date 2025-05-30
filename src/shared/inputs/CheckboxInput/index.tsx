interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  id: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        {...props}
        className={`h-6 w-6 text-red-600 bg-[var(--color-gray)] border-gray-300 rounded focus:ring-red-500 mr-2 ${props.className || ''}`}
      />
      <label htmlFor={id} className="text-sm text-[var(--color-white-dark)]">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
