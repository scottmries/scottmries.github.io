import {
    Flex,
    Heading,
    Text,
    Square,
    Spacer,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'

  const albumTitles = [
    "aaaAaa aaaaaa aa",
    "AaBB bbb BbbbbBC",
    "c dDdd eee'e eeeee",
    "eeeeeee eee eeee",
    "eeee!",
    "efgggh hHhH",
    "HhiiiiIl",
    "lll. llllLl'l llllLM MMmNnn nooo oooo",
    "PPpPppr rRrRrrr rrrR",
    "sss ssSSSss",
    "ssStTt tttttTTtt",
    "tuuuu uvvW",
    "wyy yy Yy"
  ]
  
  const Projects = () => {
    return (
        <>
            <Heading as="h1" fontSize={'5xl'} textTransform={'uppercase'} mb={3}>
                Aceeeh ino rrssstUv
            </Heading>
            <Text fontSize={'2xl'} mb={3}>
                This was my graduate thesis for the MFA in Media Study program at SUNY Buffalo. I submitted the entire (at the time) Beatles <i>ouevre</i> to algorithmic reordering processes. This included the films, music, album covers, and album/song titles. Samples of each are below.
            </Text>
            <Heading as="h2" fontSize={'xl'}>
                Album covers
            </Heading>
            <Flex mb={3} wrap="wrap" gap="2">
                {
                    albumTitles.map((title, index) => {
                        return (
                            <div key={title}>
                                    <Heading as="h3" fontSize={'sm'}>
                                        {title}
                                    </Heading>
                                <Square size={200} >
                                    <Text>
                                        <img src={`/images/Aceeeh-ino-rrssstUv/${index + 1}.jpeg`} alt={`${title} album cover`} size={200}/>
                                    </Text>
                                </Square>
                                {index < albumTitles.length - 1 ? <Spacer /> : null}

                            </div>
                        )
                    })
                }
                    
            </Flex>
            <Heading as="h2" fontSize={'xl'}>
                Films and Songs
            </Heading>
            <Text>
                This is a sample of the 7+ hour video combining the films and songs.
            </Text>
            <Text>
                {/* <iframe title="vimeo-player" src="https://player.vimeo.com/video/39443766?h=f000f3a559" width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
                <iframe src="https://player.vimeo.com/video/55508141" width="640" height="480" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Aceeeh ino rrssstUv (excerpt)"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
            </Text>
            <Heading as="h2" fontSize={'xl'}>
                Track listing
            </Heading>
            <Text>
                The complete album and track listings are <Link href="https://docs.google.com/spreadsheets/d/1BMbxiJFI0O9KzLAXJOvM2L7Jr6mAqjMRVIW-Gd1uYKM/edit?usp=sharing">at this link</Link>.
            </Text>
        </>
    )
  }
  
  export default Projects
  