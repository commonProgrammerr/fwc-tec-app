import React, { useCallback, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: 'email' | 'password'
}


function Input({label, className, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => setIsFocused(true), [])

  const handleInputBlur = useCallback(() => setIsFocused(false), [])

  const classNames = `
    flex
    ring-1 
    rounded-sm 
    py-1 px-2
    ${isFocused && 'ring-blue-500 ring-2'} 
    ${className}
  `
  return (
    <div className="mb-2 mt-3">
      {label && <label className="text-gray-700 font-medium text-sm">{label}</label>}
      <div onFocus={handleInputFocus} className={classNames} >
        <input className="flex-1 outline-none" onBlur={handleInputBlur} {...props} />
      </div>
    </div>
  );
}

export default Input;
