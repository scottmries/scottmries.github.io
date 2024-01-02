import {
    Heading,
    Text,
    Link,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
  import ThemeToggleButton from '../../components/theme-toggle-button'
  
  const Projects = () => {
    return (
        <>
            <Heading as="h1" fontSize={'5xl'} textTransform={'uppercase'} mb={3}>
                Projects
            </Heading>
            <List>
                <ListItem>
                    <Heading as="h2" fontSize={'2xl'} mb={3}>
                        Sleeping Car Porters
                    </Heading>
                    <Text fontSize={'xl'}>
                        I designed and installed projections for an experimental play, one of around a dozen I did with the theater company Title:Point.
                    </Text>
                    <Text>
                        <Link href="https://github.com/scottmries/sleeping-car-porters">I built the software</Link> to run them, using Vue and Nuxt.js, and ran them live every night of the run.
                    </Text>
                    <Text>
                        My favorite feature of this design was <Link href="https://github.com/scottmries/sleeping-car-porters/blob/master/components/numerals/4.vue"> randomly animating vector points of Roman numerals</Link>.
                    </Text>
                    <Text>    
                    This production was <Link href="https://www.nytimes.com/2019/12/08/theater/sleeping-car-porters-review.html">favorably reviewed in the New York Times</Link> (paywall).
                    </Text>
                </ListItem>
            </List>
            
        </>
    )
  }
  
  export default Projects
  