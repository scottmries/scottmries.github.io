import { Link, Box, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box align="center" mt={'2rem'} opacity={0.4} fontSize="sm">
      <Text>{new Date().getFullYear()} Scott Ries</Text>
      <Text>Built using Bun, NextJS, Chakra-UI, and Framer Motion</Text>
      <Text>Deployed on <Link href="https://pages.github.com/">GitHub Pages <ExternalLinkIcon fontSize={'1rem'} mr="3px" /></Link></Text>
    </Box>
  )
}

export default Footer
