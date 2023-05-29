function Button({ 
    children, 
    rounded, 
    outline, 
    primary, 
    secondary, 
    success, 
    warning,  
    danger,
    ...rest 
}) {
    const baseClassName = rest.className + ' px-3 py-1.5 border mb-5 ';
    let classes = baseClassName;
    if (primary) {
        classes += 'border-blue-500 bg-blue-500 text-white ';
    } else if (secondary) {
        classes += 'border-gray-900 bg-gray-900 text-white ';
    } else if (success) {
        classes += 'border-green-500 bg-green-500 text-white ';
    } else if (warning) {
        classes += 'border-yellow-400 bg-yellow-400 text-white ';
    } else if (danger) {
        classes += 'border-red-500 bg-red-500 text-white ';
    }

    if (rounded) {
        classes += 'rounded-full ';
    } 
     if (outline) {
        classes += 'bg-white ';
    }

    if (outline && primary) {
        classes += 'text-blue-500 ';
    }
    if (outline && secondary) {
        classes += 'text-gray-900 ';
    }
    if (outline && success) {
        classes += 'text-green-500 ';
    }
    if (outline && warning) {
        classes += 'text-yellow-400 ';
    }
    if (outline && danger) {
        classes += 'text-red-500 ';
    }

    return <button {...rest} className={classes}>
                {children}
            </button>
}

Button.propTypes = {
    checkVariationValue: ({
        primary, 
        secondary, 
        success, 
        warning,  
        danger}) => {
            const count = Number(!!primary)
                + Number(!!secondary)
                + Number(!!success)
                + Number(!!warning)
                + Number(!!danger);
            if (count > 1) {
                return new Error('Only one of primary, secondary, success, warning, danger can be true');
            }
    }
}

export default Button;
