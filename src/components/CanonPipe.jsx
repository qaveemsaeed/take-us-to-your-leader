import React from 'react'
import PropTypes from 'prop-types'
import { pathFromBezierCurve } from '../utils/formulas'
const CanonPipe = (props) => {
    const canonPipeStyle = {
        fill: '#999',
        stroke: '#666',
        strokeWidht: '2px',
    }
    const tranform = `rotate(${props.rotation},0,0)`

    const muzzleWidht = 40;
    const halfMuzzle = 20;
    const height = 100;
    const yBasis = 70;

    const cubicBezierCurve = {
        initialAxis: {
            x: -halfMuzzle,
            y: -yBasis,
        },
        initialControlPoints: {
            x: -40,
            y: height * 1.7,
        },
        endingControlPoints: {
            x: 80,
            y: height * 1.7,
        },
        endingAxis: {
            x: muzzleWidht,
            y: 0,
        },
    };

    return (
        <g transform={tranform}>
            <path style={canonPipeStyle}
                d={pathFromBezierCurve(cubicBezierCurve)} />
            <line
                x1={-halfMuzzle}
                y1={-yBasis}
                x2={halfMuzzle}
                y2={-yBasis}
                style={canonPipeStyle} />
        </g>
    )
}

CanonPipe.protoTypes = {
    rotation: PropTypes.number.isRequired,
}

export default CanonPipe;