import React from 'react'
import { Text, Image } from '@chakra-ui/core'
import HeroContainer from '../components/hero/hero-container'
import HeroBreadcrumb from '../components/hero/hero-breadcrumb'
import HeroTexts from '../components/hero/hero-texts'
import HeroTitle from '../components/hero/hero-title'

const Blog: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <HeroTexts>
          <HeroBreadcrumb />
          <HeroTitle>Stay updated, Never miss a post.</HeroTitle>
          <Text py="6" maxW="550px">
            Get to know the latest stuff about our services via our blog post.
          </Text>
        </HeroTexts>

        <Image
          src="/blog-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          pb="40"
          mr="8"
        />
      </HeroContainer>
    </>
  )
}

export default Blog
