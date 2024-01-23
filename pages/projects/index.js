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
                <ListItem pb={3}>
                    <Heading as="h2" fontSize={'2xl'} mb={3}>
                        Sleeping Car Porters
                    </Heading>
                    <Text fontSize={'xl'}>
                        I designed and installed projections for an experimental play, one of a dozen I did with the theater company <Link href="https://titlepoint.org">Title:Point</Link>.
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
                <ListItem pb={3}>
                    <Heading as="h2" fontSize={'2xl'} mb={3}>
                        butmakeit.party
                    </Heading>
                    <Text fontSize={'xl'}>
                        I built a <Link href="https://butmakeit.party">gif generator</Link> as a side project when I worked at <Link href="https://reflexions.co">Reflexions</Link>.
                    </Text>
                    <Text>
                        I made an image "party" by rotating its colors around the hue spectrum. The background title does a similar rotation in different phases on each line, using CSS animations.
                    </Text>
                    <Text>
                        Users can preview the result on white and black backgrounds, optionally "make it rotate," too, and download the result.
                    </Text>
                    <Text>    
                        The front-end is a simple Vue instance that posts to a server running PHP, which uses ImageMagick to do the transformations, animations, and gif creation.
                    </Text>
                </ListItem>
                <ListItem pb={3}>
                    <Heading as="h2" fontSize={'2xl'} mb={3}>
                        Lighting design for GATEWAY
                    </Heading>
                    <Text fontSize={'xl'}>
                        I designed, built, and installed a system of lights for an installation of Lena Hawkins' paintings at Newtown Radio, Brooklyn.
                    </Text>
                    <Text>
                        PureData patches controlled the lights over DMX connections, and calculated a one-dimensional "danceability" parameter of the music DJs played over the month-long residency. This parameter influenced the lights' movement.
                    </Text>
                    <Text>
                        I chose colors from the corners of a tetrahedron slowly rotating in HSV space.
                    </Text>
                    <Text>
                        Each light behaved independently, but they could be grouped into motion and/or color sync based on groups ordered in a Markov chain.
                    </Text>
                    <Text>
                        Code and details are on the <Link href="https://github.com/scottmries/gateway">Github repo</Link>.
                    </Text>
                    <Text>
                        <iframe src="https://player.vimeo.com/video/370438075" width="640" height="384" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="GATEWAY Reel"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                    </Text>
                    
                </ListItem>
                <ListItem pb={3}>
                    <Heading as="h2" fontSize={ '2xl' } mb={3}>
                        Aceeeh ino rrssstUv
                    </Heading>
                    <Text fontSize={'xl'}>
                        This was my graduate thesis for the MFA in Media Study program at SUNY Buffalo.
                    </Text>
                    <Text>
                        I submitted the entire (at the time) Beatles <i>ouevre</i> to algorithmic reordering processes. This included the films, music, album covers, and album/song titles.
                    </Text>
                    <Text>
                        <Link href="/projects/Aceeeh-ino-rrssstUv">Read more</Link>
                    </Text>
                </ListItem>
                <ListItem pb={3}>
                    <Heading as="h2" fontSize={ '2xl' } mb={3}>
                        Guitar Antihero: .1m/3 .1m/4 .1m/4cen . 1/m4 . 1/m3.
                    </Heading>
                    <Text fontSize={'xl'}>
                        I made a custom <i>Guitar Hero</i> level for the Wii based on the first track of Taku Sugimoto's <i>Principia Sugimatica</i>.
                    </Text>
                    <Text>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/39443766?h=f000f3a559" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </Text>
                </ListItem>
            </List>
            
        </>
    )
  }
  
  export default Projects
  