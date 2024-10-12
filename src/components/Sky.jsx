import React from 'react'
import { skyAndGroundWidht } from '../utils/constants';
const Sky = () => {
    const skystyle = {
        fill: '#52cdde',
    };
    const gameHeight = 1200;
    return (
        <rect
            style={skystyle}
            x={skyAndGroundWidht / -2}
            y={100 - gameHeight}
            width={skyAndGroundWidht}
            height={gameHeight}
        />

    )
}
export default Sky;