import React from 'react'
import { skyAndGroundWidht } from '../utils/constants';

const Ground = () => {
    const groundStyle = {
        fill: '#59a941',
    }
    const division = {
        stroke: '#458232',
        strokeWidht: '3px',
    }
    return (
        <g id='ground'>
            <rect
                id='ground-2'
                data-name='ground'
                style={groundStyle}
                x={skyAndGroundWidht / -2}
                y={0}
                width={skyAndGroundWidht}
                height={100}
            />
            <line
                x1={skyAndGroundWidht / -2}
                y1={0}
                x2={skyAndGroundWidht / 2}
                y2={0}
                style={division}
            />
        </g>
    )
};
export default Ground;