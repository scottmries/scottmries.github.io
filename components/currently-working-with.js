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

export const CurrentlyWorkingWith = () => {
    return (

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
    )
}

export default CurrentlyWorkingWith