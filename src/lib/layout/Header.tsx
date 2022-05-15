/* eslint-disable @next/next/link-passhref */
import { Grid, GridItem, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";

// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Grid
      boxShadow="sm"
      borderRadius="md"
      pl="5"
      pr="5"
      pt="2"
      templateColumns="repeat(7, 1fr)"
      gap={7}
    >
      <GridItem colSpan={2} w="100%" h="10">
        <Heading as="h1" size="md">
          <Link href="/">saeedev</Link>
        </Heading>
      </GridItem>
      <GridItem w="100%">
        <Link href="/about">About</Link>
      </GridItem>
      <GridItem w="100%">
        <Link href="/about">Services</Link>
      </GridItem>
      <GridItem w="100%">
        <Link href="/about">Contact</Link>
      </GridItem>
      <GridItem w="100%">
        <Link href="/about">Portfolio</Link>
      </GridItem>

      <GridItem colSpan={1} w="100%">
        <Grid templateColumns="repeat(2, 1fr)" w="100%">
          {/* todo: replace with icon */}
          <GridItem w="100%">
            <Link href="http://youtube.com/c/skdev11">
              <Icon w={6} h={6} as={FaYoutube} />
            </Link>
          </GridItem>
          <GridItem w="100%">
            <Link href="http://instagram.com/sk.developer">
              <Icon w={6} h={6} as={FaInstagram} />
            </Link>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Header;
