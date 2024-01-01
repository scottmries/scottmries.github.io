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

const Home = () => {
  return (
    <>
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
    </>
        
  )
}

export default Home
