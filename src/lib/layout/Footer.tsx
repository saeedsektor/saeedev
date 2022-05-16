import { Flex, Link, Text } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text mr="5">
        {new Date().getFullYear()} -{" "}
        <Link href="https://saeedev.com" isExternal rel="noopener noreferrer">
          saeedev.com - All rights reserved
        </Link>
      </Text>
      <ThemeToggle />
    </Flex>
  );
};

export default Footer;
