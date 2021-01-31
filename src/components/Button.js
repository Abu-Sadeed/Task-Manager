import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, action, onClick }) => {
    

    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>
            {action}
        </button>
    )
}


Button.defaultProps = {
    color:'black',
}

Button.propTypes = {
    action: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
