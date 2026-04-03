import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {

    const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''>{label}</label>}

      <select 
      {...props}
      id={id}
      ref={ref}
      className={`py-3 px-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full cursor-pointer ${className}`}
      >
        {/*  Here we are using '?' to check if options exists, if exits then we will map on it. */}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
// this is alos a way to use forward ref in react, we can also use React.forwardRef() to forward ref to the select element.
export default React.forwardRef(Select)