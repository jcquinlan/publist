import React from 'react';

const TruncateText = ({ length, children }) => {
    const truncateLength = length || 250; 

    if (!children) return null;

    if (children.length > truncateLength) {
        return children.slice(0, truncateLength) + '...';
    }

    return children;
}

export default TruncateText;
