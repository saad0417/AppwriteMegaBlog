import React, { forwardRef, useId } from 'react'

// forwardRef is hook that allows us to pass a ref through a component to one of its children. As we are creating this input as a general component and we will use it in different places so to update data in the UI we will use the ref to access the input element and update its value.
// This is an input component that we can use in our forms.
const Input = forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    const id = useId()
    return (
        <div className="w-full">
            { label && <label className='inline-block mb-1 pl-1' htmlFor={id}> {label} </label> }

            <input type={type} className={`w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`} ref={ref} {...props} id={id} />
        </div>
    )
})

export default Input