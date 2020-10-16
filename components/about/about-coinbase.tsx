import React from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/core'
import { FaMedal, FaStar } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { BiSupport } from 'react-icons/bi'
import Tittle from '../title'

const AboutCoinbase: React.FC = () => {
  return (
    <Flex px={['8', '8', '32', '48', '48']} mt="16" mx="auto">
      <Flex
        flexDir="column"
        alignItems="center"
        borderColor="pink.500"
        borderWidth="2px"
        borderRadius="30px"
        maxW="1170px"
        mx="auto"
        py="12"
        px={['8', '8', '8', '64', '64']}
        textAlign="center"
      >
        <Image
          src="/about/about-2.png"
          pt="4"
          display={['none', 'none', 'none', 'block', 'block']}
        />

        <Tittle>About Coinbase</Tittle>

        <Text textAlign="center" lineHeight="2.2em" color="black">
          CoinBase is an online site and a p2admin platform that allows users to
          buy, sell and/ or exchange digital and fiat assets safely. Owned and
          managed by CoinBase Business Services established and Incoperated in
          Nigeria.
        </Text>

        <Flex alignItems="center" mt="6">
          <Box as={FaStar} size="32px" color="pink.400" mr="12px" />
          <Box as={FaMedal} size="32px" color="pink.400" mr="12px" />
          <Box as={IoIosPeople} size="32px" color="pink.400" mr="12px" />
          <Box as={BiSupport} size="32px" color="pink.400" mr="12px" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutCoinbase
