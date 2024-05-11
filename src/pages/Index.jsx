import { Box, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box as="header" bg="white" w="full" p={4} shadow="sm" pos="fixed" top={0} left={0} right={0} zIndex="banner">
          <Flex justify="space-between" align="center" maxW="container.md" mx="auto">
            <Text fontSize="lg" fontWeight="bold">
              BandBeat
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#tour">Tour Dates</Link>
              <Link href="#music">Music</Link>
              <Link href="#contact">Contact</Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Box id="home" pt="64px" pb="40px" w="full" bgImage="url(https://images.unsplash.com/photo-1709090083073-d130ac28cc19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwY29uY2VydHxlbnwwfHx8fDE3MTU0NDU3ODd8MA&ixlib=rb-4.0.3&q=80&w=1080)" bgPos="center" bgSize="cover">
          <VStack spacing={2} align="center" justify="center" h="60vh">
            <Heading as="h1" size="2xl" color="white" textShadow="2px 2px 2px rgba(0,0,0,0.6)">
              Latest Album: Echoes of Tomorrow
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.800" textShadow="1px 1px 2px rgba(0,0,0,0.6)">
              Experience the new sound waves
            </Text>
          </VStack>
        </Box>

        {/* About Section */}
        <Box id="about" py="40px">
          <VStack spacing={4} align="center">
            <Heading as="h2" size="xl">
              About BandBeat
            </Heading>
            <Text maxW="container.md" textAlign="center">
              BandBeat, formed in 2015, is known for its energetic performances and unique sound. The band has achieved multiple awards and has a growing global fanbase.
            </Text>
            <Image src="https://images.unsplash.com/photo-1518911710364-17ec553bde5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwbWVtYmVyc3xlbnwwfHx8fDE3MTU0NDU3ODh8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="full" />
          </VStack>
        </Box>

        {/* Tour Dates Section */}
        <Box id="tour" py="40px" bg="gray.100">
          <VStack spacing={4} align="center">
            <Heading as="h2" size="xl">
              Tour Dates
            </Heading>
            <Stack direction="column" spacing={3} maxW="container.md">
              <Text>March 12, 2024 - New York, NY - Madison Square Garden</Text>
              <Text>March 18, 2024 - Chicago, IL - United Center</Text>
              <Text>March 24, 2024 - Los Angeles, CA - The Forum</Text>
            </Stack>
          </VStack>
        </Box>

        {/* Music Section */}
        <Box id="music" py="40px">
          <VStack spacing={4} align="center">
            <Heading as="h2" size="xl">
              Our Music
            </Heading>
            <Stack direction="row" spacing={4}>
              <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcxNTM4ODg5OHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
              <Image src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcxNTM4ODg5OHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
              <Image src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcxNTM4ODg5OHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
            </Stack>
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="white" p={4}>
          <Flex justify="space-between" align="center" maxW="container.md" mx="auto">
            <Text>© 2024 BandBeat. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton aria-label="Instagram" icon={<FaInstagram />} />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton aria-label="YouTube" icon={<FaYoutube />} />
              <IconButton aria-label="Spotify" icon={<FaSpotify />} />
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
