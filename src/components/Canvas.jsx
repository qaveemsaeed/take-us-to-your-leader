import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CanonBase';
import CannonPipe from './CanonPipe';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax meet"
            onMouseMove={props.trackMouse}
            viewBox={viewBox}
        >
            <Sky />
            <Ground />
            <CannonPipe rotation={props.angle} />
            <CannonBase />
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
};

export default Canvas;