const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="mb-4 w-max">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
