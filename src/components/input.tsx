import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: 'email' | 'password'
  name: string
}


function Input({ label, className, type, name, ...props }: InputProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  
  const inputRef = useRef<HTMLInputElement>(null)
  
  const {
    fieldName,
    registerField,
    defaultValue,
    error,
    clearError
  } = useField(name)


  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        path: 'value',
        ref: inputRef.current
      })
    }
  }, [registerField, fieldName])


  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
    clearError()
  }, [clearError])

  const handleInputBlur = useCallback(() => setIsFocused(false), [])

  const handleHide = useCallback(() => setIsVisible(false), [])
  const handleShow = useCallback(() => setIsVisible(true), [])

  const inputContainerClassNames = `
    flex
    ring-1 
    ring-blue-400
    rounded-sm 
    py-1 px-2
    items-center
    ${!!error && 'ring-pink-600'}
    ${isFocused && 'ring-blue-500 ring-2'}
    ${className}
  `

  const containerClassNames = `
    text-gray-600 
    mb-2 mt-3 
    ${!!error && 'text-pink-600'}
  `
  const iconClassName = `text-blue-500 cursor-pointer ${!!error && 'rext-pink-600'}`


  return (
    <div className={containerClassNames}>
      {
        label && <label className="font-medium text-sm">
          {label}
        </label>
      }
      <div onFocus={handleInputFocus} className={inputContainerClassNames} >
        <input
          className="flex-1 outline-none"
          ref={inputRef}
          defaultValue={defaultValue}
          {...props}
          type={type !== 'password' ? type : isVisible ? 'text' : 'password'}
          onBlur={handleInputBlur}
        />
        {
          type === 'password' && (isVisible
            ? <FaRegEyeSlash className={iconClassName} onClick={handleHide} />
            : <FaRegEye className={iconClassName} onClick={handleShow} />)
        }
      </div>
    </div>
  )
}


export default Input;
