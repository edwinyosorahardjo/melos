import React from 'react'
import PropTypes from 'prop-types'
import getProportionalSize from '@youversion/utils/lib/images/imageProportions'

function XMark({ width, height, fill, className }) {
  const {
		height: finalHeight,
		width: finalWidth
	} = getProportionalSize({
  defaultHeight: XMark.defaultProps.height,
  defaultWidth: XMark.defaultProps.width,
  newHeight: height,
  newWidth: width
})

  return (
    <div className={`xmark-container ${className}`}>
      <svg
        className="xmark"
        viewBox="67 8 8 8"
        width={finalWidth}
        height={finalHeight}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          stroke="none"
          fill={fill}
          fillRule="evenodd"
          points="74.0856176 9.4287633 71.5143809 12 74.0856176 14.5712367 73.5712367 15.0856176 71 12.5143809 68.4287633 15.0856176 67.9143824 14.5712367 70.4856191 12 67.9143824 9.4287633 68.4287633 8.91438245 71 11.4856191 73.5712367 8.91438245 74.0856176 9.4287633 74.0856176 9.4287633 74.0856176 9.4287633"
        />
      </svg>
    </div>
  )
}

XMark.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string
}

XMark.defaultProps = {
  width: 8,
  height: 8,
  fill: '#979797',
  className: null
}

export default XMark
