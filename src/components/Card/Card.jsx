import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, content, bgcolor }) => {
    return (
        <div className="card" style={{backgroundColor: bgcolor}}>
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bgcolor: PropTypes.string,
};

export default Card;
