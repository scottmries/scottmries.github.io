import { baseTheme, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  useSystemColorMode: true
}

const colors = {
  base: {
    50: '#F9E9A1',
    100: '#FF3555',
    200: '#FC870E',
    300: '#B4A394',
    400: '#AF5626',
    500: '#9425c0',
    600: '#744884',
    700: '#4040D1',
    800: '#332366',
    900: '#2A110C',
  }
}

const components = {
  Link: {
    baseStyle: props => ({
      textUnderlineOffset: 3,
      textDecoration: 'underline',
      textDecorationColor: mode(colors.base[700], colors.base[300])(props),
      color: mode(colors.base[500], colors.base[100])(props),
      _hover: {
        textDecoration: 'none',
        color: mode(colors.base[800], colors.base[200])(props)
      }
    })
  },
  Heading: {
    baseStyle: props => ({
      color: mode(colors.base[800], colors.base[200])(props), 
      paddingBottom: 3
    })
  },
}

const styles = {
  global: props => ({
    body: {
      bg: mode(colors.base[300], colors.base[800])(props),
      color: mode(colors.base[900], colors.base[300])(props)
    },
    p: {
      marginBottom: '1rem'
    }
  })
}

// TODO
const fonts = {
  heading: `'Fjalla One', sans-serif;`,
  body: `'Joan', serif`,
  mono: `'VT323', monospaced`
}

const theme = extendTheme({ components, styles, fonts, colors, config })

export default theme
