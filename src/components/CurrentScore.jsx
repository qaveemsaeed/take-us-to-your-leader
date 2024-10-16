import React from 'react'
import PropTypes from 'prop-types'

const CurrentScore = props => {
    const styles={
        scoreStyle:{
            fontFamily: '"Joit One", cursive',
            fontSize: 80,
            fill: '#d6d33e',
        }
    }
  return (
    <g filter='url(#shadow)'>
        <text x='300' y="80" style={styles.scoreStyle}>
            {props.score}
        </text>
    </g>
  )
}

CurrentScore.propTypes = {
    score: PropTypes.number.isRequired,
}

export default CurrentScore