import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

interface CheckBoxProps {
  name: string
  label?: string
  checked?: boolean
}

function CheckBox({ name, label, checked }: CheckBoxProps) {

  const inputRef = useRef<HTMLInputElement>(null)
  
  const {
    fieldName,
    registerField
  } = useField(name)


  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        path: 'checked',
        ref: inputRef.current
      })
    }
  }, [registerField, fieldName])
  return (
    <div className="flex items-center">
      <input ref={inputRef} className="mr-2" type="checkbox" />
      <span className="text-gray-600 text-xs font-medium">
        {label || 'Lembre de mim'}
      </span>
    </div>
  );
}

export default CheckBox;
