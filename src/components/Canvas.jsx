import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CanonBase from './CanonBase';
import CanonPipe from './CanonPipe';
import CanonBall from './CanonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';

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
            <CanonPipe rotation={props.angle} />
            <CanonBase />
            <CanonBall position={{x:0, y:-200,}} />
            <CurrentScore score={80}/>
            <FlyingObject position={{x:700,y:-800,}}/>
            <FlyingObject position={{x:-700,y:-800,}}/>
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
};

export default Canvas;