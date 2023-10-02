import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../components/theme-toggle-button'
// import UnderConstructionBanner from '../components/under-construction-banner'

const Home = () => {
  return (
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
        {/* <UnderConstructionBanner /> */}
        <Heading as="h1" fontSize={'5xl'} textTransform={'uppercase'} mb={3}>
          You have landed on Scott Ries' page
        </Heading>
        <Text fontSize={'2xl'}>
          Hello, I&lsquo;m Scott Ries. I&lsquo;m a software engineer with an eye for
          design, a head for algorithms, and a heart for the user. I&lsquo;m currently
          searching for my next chance to make the Internet a better place. Feel free
          to drop me a line.
        </Text>
        <Text fontSize={'lg'}>
          In 2017, I began my professional career as a web developer, building complex,
          user-friendly UIs for non-profits and arts organizations in an agency setting. 
          Prior to that, my software experience was two-fold: on the one hand, building 
          simple sites on shoestring budgets in a two-person operation where my partner and I
          taught each other everything from jQuery to Firebase; and on the other hand, 
          using creative technologies like Processing and Max to make experimental artworks
          in the pursuit of my MFA. 
        </Text>
        <Text fontSize={'lg'}>
          Since then, my technological home has been on the front-end, but over the years
          I've taken more and more frequent trips to the back-end and elsewhere.
          I once told a mentor math teacher that I wanted to find a way to combine art and science, 
          and I think I found it in software engineering. The art is not only in building beautiful
          interfaces, but in taking great care in considering your audience, whether as 
          a member of the public whose needs and ways of using your product may be hard to predict, 
          or as another engineer whose friend is my well-written code and documentation. 
          The science is not just in efficient database queries, but also in testing, automated processes, 
          and always learning new languages and technologies. 
        </Text>
        <Text fontSize={'lg'}>
          I keep pretty busy outside my professional life, seeing and writing about movies, 
          going to all kinds of concerts, cooking, biking, swimming, travelling. Reach out if you'd 
          like to connect or just want to chat. 
        </Text>
      </GridItem>
      <GridItem colStart={[4, 4]} colSpan={[8, 3]}>
        <Stack spacing={8} mt={'1rem'}>
          <Box>
            <Heading as="h2" fontSize={'md'} textTransform={'uppercase'}>
              Links
            </Heading>
            <List spacing={2}>
              {/* TODO */}
              {/* <ListItem>
                <Link href="https://scottmries.com/scotts-thoughts/">
                  <ListIcon as={LinkIcon} mr={2} />
                  Scott's Thoughts
                </Link>
              </ListItem> */}
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://github.com/scottmries/">
                  GitHub repositories
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="http://linkedin.com/in/scottmries/">LinkedIn</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://scottmries.com/resume.pdf">Resume</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="mailto:scottmries@gmail.com">Email</Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colStart={[4, 9]} colSpan={[8, 3]}>
        <Stack spacing={8} mt={'1rem'}>
          <Box>
            <Heading as="h5" fontSize={'sm'} textTransform={'uppercase'}>
              Currently working with
            </Heading>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://golang.org/" target="_blank" rel="noopener">Go</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://reactjs.org/" target="_blank" rel="noopener">React</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://www.python.org" target="_blank" rel="noopener">Python</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://git-scm.com/" target="_blank" rel="noopener">Git</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://supercollider.github.io/" target="_blank" rel="noopener">SuperCollider</Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default Home
