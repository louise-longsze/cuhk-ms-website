interface Props {
  label: string;
  value: string | null;
  checked: boolean;
  onChange: (value: string | null) => void;
}
const Checkbox: React.FC<Props> = ({ label, value, checked, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={checked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={() => onChange(value)}
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
