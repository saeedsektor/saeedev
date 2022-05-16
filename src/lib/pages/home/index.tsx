import {
  Box,
  Grid,
  GridItem,
  Text,
  Center,
  Image,
  Divider,
  Stack,
  Button
} from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem w="100%">
          {/* replace with my own photo */}
          <Center>
            <Image
              boxSize="400"
              objectFit="cover"
              src="/skdev-logo.png"
              alt="saeedev logo"
              alignSelf="center"
            />
          </Center>
        </GridItem>
        <GridItem colSpan={1} w="100%" h="10">
          <Text
            bgGradient="linear(to-l, #f33e3e, #ff5151c1)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            Saeed Karimi
          </Text>
          <Text className="bio-text" mt="5" w="70%">
            Fullstack software engineer, passionate about building high quality
            software.
          </Text>
          <Text className="bio-text" w="70%">
            I am a self-taught developer with a passion for learning new things.
          </Text>
          <Text className="bio-text" w="70%">
            Follow me on social media platforms📬 and get in touch with me.
          </Text>
          <Button colorScheme='red' mt="5">Get in touch</Button>
        </GridItem>
      </Grid>
      <Divider mb="5" />
      <Box>
        <Text
          bgGradient="linear(to-l, #f33e3e, #ff5151c1)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="bold"
        >
          What I do?
        </Text>
      </Box>
      <Grid mt="5" templateColumns="repeat(4, 1fr)" gap="10">
        <GridItem>
          <Box className="services-card">
            <Center>
              <Stack>
                <Image
                  boxSize="50"
                  objectFit="cover"
                  src="/software.png"
                  alt="Software Development"
                  alignSelf="center"
                />
                <Text fontWeight="bold">Software Development</Text>
                <Text fontSize="sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </Stack>
            </Center>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="services-card">
            <Center>
              <Stack>
                <Image
                  boxSize="50"
                  objectFit="cover"
                  src="/smartphone.png"
                  alt="App Development"
                  alignSelf="center"
                />
                <Text fontWeight="bold">App Development</Text>
                <Text fontSize="sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </Stack>
            </Center>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="services-card">
            <Center>
              <Stack>
                <Image
                  boxSize="50"
                  objectFit="cover"
                  src="/con.png"
                  alt="Consultation"
                  alignSelf="center"
                />
                <Text fontWeight="bold">Consultation</Text>
                <Text fontSize="sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </Stack>
            </Center>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="services-card">
            <Center>
              <Stack>
                <Image
                  boxSize="50"
                  objectFit="cover"
                  src="/uiux.png"
                  alt="UI/UX Design"
                  alignSelf="center"
                />
                <Text fontWeight="bold">UI/UX Design</Text>
                <Text fontSize="sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </Stack>
            </Center>
          </Box>
        </GridItem>
      </Grid>
      <Box>
        <Divider mb="5" />

        <Grid gap="10" mt="10" templateColumns="repeat(2, 55% 40%)">
          <GridItem>
            <Box>
              <Text
                bgGradient="linear(to-l, #f33e3e, #ff5151c1)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="bold"
                mb="5"
              >
                My Work
              </Text>
            </Box>
            {/* https://via.placeholder.com/150 */}
            <Grid gap="5" templateColumns="repeat(2, 1fr)">
              <GridItem>
                <Box className="work-card">
                  <Image
                    boxSize="100%"
                    src="https://via.placeholder.com/350x250"
                    alt="UI/UX Design"
                    alignSelf="center"
                  />
                </Box>
              </GridItem>
              <GridItem>
                <Box className="work-card">
                  <Image
                    boxSize="100%"
                    src="https://via.placeholder.com/350x250"
                    alt="UI/UX Design"
                    alignSelf="center"
                  />
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Box>
              <Text
                bgGradient="linear(to-l, #f33e3e, #ff5151c1)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="bold"
                mb="5"
              >
                Skills
              </Text>
            </Box>
            <Box>
              <Stack className="skills">
                <Box className="skill-grid">
                  <Text>Systems Design</Text>
                  <Box className="stars-grid">
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                  </Box>
                </Box>
                <Box className="skill-grid">
                  <Text>Database Design</Text>
                  <Box className="stars-grid">
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                  </Box>
                </Box>
                <Box className="skill-grid">
                  <Text>UI/UX</Text>
                  <Box className="stars-grid">
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                  </Box>
                </Box>
                <Box className="skill-grid">
                  <Text>Javascript</Text>
                  <Box className="stars-grid">
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                  </Box>
                </Box>
                <Box className="skill-grid">
                  <Text>React</Text>
                  <Box className="stars-grid">
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                  </Box>
                </Box>
                <Box className="skill-grid">
                  <Text>NodeJs</Text>
                  <Box className="stars-grid">
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                  </Box>
                </Box>
                <Box className="skill-grid">
                  <Text>PHP & MVC</Text>
                  <Box className="stars-grid">
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                    <FaStar color="#ffe600" />
                  </Box>
                </Box>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
