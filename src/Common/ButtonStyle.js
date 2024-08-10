import React from 'react'
import PropTypes from "prop-types"
import className from 'classnames'

const finalClassNames = className('px-2', {
    'bg-sky-700': true,
    'text-indigo': false
})

const ButtonStyle = ({
    children,
    primary,
    secondary,
    success,
    danger,
    warning,
    roundedButton,
    outlinedButton,
    outOfStock,
    ...rest
}) => {
    const classes = className(rest.className,'flex items-center rounded-md px-3 py-1.5 border', {
        'border-black-900 bg-black text-indigo-50': primary,
        'border-orange-900 bg-orange-700 text-indigo-50': secondary,
        'borde-green-900 bg-green-700 text-indigo-50': success,
        'border-yellow-900 bg-yellow-700 text-indigo-50': warning,
        'border-red-900 bg-red-700 text-indigo-50': danger,
        'border-gray-600 bg-neutral-400 text-gray-600':outOfStock,
        'rounded-full': roundedButton,
        'bg-transparent border-black': outlinedButton,
        "text-blue-500": outlinedButton && primary,
        "text-orange-500": outlinedButton && secondary,
        "text-green-500": outlinedButton && success,
        "text-yellow-500": outlinedButton && warning,
        "text-red-500": outlinedButton && danger,
    })
  return (
    <div>
       <button {...rest} className={classes}>{children}</button>
    </div>
  )
}

ButtonStyle.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        danger,
        warning,
    }) => {

        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!danger)
            + Number(!!warning)

        if (count > 1) {
            return new Error("Only pass on variation")
        }

    }
}

export default ButtonStyle
