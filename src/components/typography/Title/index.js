import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import getThemeForComponent from '../../themes/utils/getThemeForComponent'

function Title(props) {
  const { children, muted, textAlign } = props

  const ThemedElement = glamorous.h3({}, ({ theme }) => {
    return getThemeForComponent('Title', theme, props, (t) => {
      return {
        fontFamily: t.fontFamily.primary,
        fontWeight: t.fontWeight.semibold,
        fontSize: t.fontSize.default,
        textAlign,
        lineHeight: t.lineHeight.medium,
        color: muted ? t.color.muted : t.color.text,
        padding: t.padding.none,
        margin: t.margin.none,
        textTransform: 'uppercase',
        letterSpacing: t.letterSpacing.xsmall
      }
    })
  })

  return (
    <ThemedElement>
      {children}
    </ThemedElement>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  muted: PropTypes.bool,
  textAlign: PropTypes.string,
}

Title.defaultProps = {
  children: null,
  muted: false,
  textAlign: 'center'
}

export default Title
