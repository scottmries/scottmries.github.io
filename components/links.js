import { 
    Box,
    ExternalLinkIcon,
    Heading, 
    Link,
    LinkIcon,
    List,
    ListIcon,
    ListItem,
    Stack 
} from "@chakra-ui/react"

const Links = () => {
    return (

        <Stack spacing={8} mt={'1rem'}>
            <Box>
            <Heading as="h2" fontSize={'md'} textTransform={'uppercase'}>
                Links
            </Heading>
            <List spacing={2}>
                {/* TODO */}
                <ListItem>
                <Link href="/projects">
                    <ListIcon as={LinkIcon} mr={2} />
                    Projects
                </Link>
                </ListItem>
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
                <ListIcon as={LinkIcon} mr={2} />
                <Link href="/resume.pdf">Resumé</Link>
                </ListItem>
                <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="mailto:scottmries@gmail.com">Email</Link>
                </ListItem>
            </List>
            </Box>
        </Stack>
    )
}

export default Links