import { 
  Box, 
  Container,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react'
import CurrentlyWorkingWith from '../currently-working-with'
import Links from '../links'
import ThemeToggleButton from '../theme-toggle-button'
import Head from 'next/head'
import Footer from '../footer'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head></Head>
      <Container maxW="container.xl" pt={12}>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <ThemeToggleButton />
          <GridItem colSpan={3}>
            <Image
              borderRadius="full"
              boxSize="4xs"
              src="/images/headshot.jpg"
              alt="Scott Ries"
            />
          </GridItem>
          <GridItem colSpan={9}>
            {children}
          </GridItem>
          <GridItem colStart={[4, 4]} colSpan={[8, 3]}>
            <Links />
          </GridItem>
          <GridItem colStart={[4, 9]} colSpan={[8, 3]}>
            <CurrentlyWorkingWith />
          </GridItem>
        </Grid>
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
