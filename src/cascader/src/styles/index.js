import sizeStyle from './themed-size.cssr.js'
import baseStyle from './themed-base.cssr.js'

export default [
  {
    key: 'syntheticSize',
    watch: [
      'syntheticSize',
      'syntheticTheme'
    ],
    CNode: sizeStyle
  },
  {
    key: 'syntheticTheme',
    watch: [
      'syntheticTheme'
    ],
    CNode: baseStyle
  }
]