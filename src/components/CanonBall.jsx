import React, { Ellipse } from 'react'
import PropTypes from 'prop-types'

const CanonBall = (props) => {
  const styles = {
    ballStyle:{
      fill:'#777',
      stroke: '#444',
      strokeWidth: '1px',
    }
  }
  return (
    <ellipse
    style={styles.ballStyle}
    cx={props.position.x}
    cy={props.position.y}
    rx='16'
    ry='16'
    />
  )
}

CanonBall.propTypes={
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
}

export default CanonBall;


