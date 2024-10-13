import React from 'react'
import { pathFromBezierCurve } from '../utils/formulas'
const CanonBase = (props) => {
    const canonBaseStyle = {
        fill: '#a16012',
        stroke: '#75450e',
        strokeWidht: '2px',
    }
    const baseWith = 80;
    const halfBase = 40;
    const height = 60;
    const negativeHeight = height * -1;
    const cubeBezierCurve = {
        initialAxis: {
            x: -halfBase,
            y: height,
        },
        initialControlPoints: {
            x: 20,
            y: negativeHeight,
        },
        endingControlPoints: {
            x: 60,
            y: negativeHeight,
        },
        endingAxis: {
            x: baseWith,
            y: 0,
        }
    }
    return (
        <g>
            <path
                style={canonBaseStyle}
                d={pathFromBezierCurve(cubeBezierCurve)}
            />
            <line
                x1={-halfBase}
                y1={height}
                x2={halfBase}
                y2={height}
                style={canonBaseStyle}
            />
        </g>
    )
}
export default CanonBase