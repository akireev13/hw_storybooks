// src/components/Button/Button.js

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, children }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
