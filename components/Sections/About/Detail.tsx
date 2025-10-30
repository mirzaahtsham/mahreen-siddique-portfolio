// @ts-nocheck
import { memo } from 'react'
import AhrefsIcon from "../../../public/Skills/ahrefs-logo-blue.svg"
import { SpyFudark } from "../../../public/Skills/spyfu-dark.svg"
import { Spyfulight } from "../../../public/Skills/spyfu-light.svg"
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  
  SiGoogleanalytics,   // GA4
  SiGooglesearchconsole,            // GSC (Google Search Console)
  SiBing,              // Bing Webmaster (note spelling: “Bing”, not “Being”)
  SiSemrush,           // Semrush
  SiSpyse,             // Closest to SpyFu (SpyFu icon not available)
  SiUberspace,         // Closest to Ubersuggest (no official Ubersuggest icon)
  SiMoz,               // Moz
  SiAhrefs,            // Ahrefs
  SiCanva,             // Canva
  SiMeta,              // Meta (Facebook/Meta Business Manager)
  SiGoogleads,         // Google Ads Manager
  SiAlamy,            // Alamy (no official Ahref icon)
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('#0F6DF6', '#0ACDFA')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2014

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I`ve been coding professionally for {professionalYears} years now and
        currently working as a <b>Software Engineer</b> that focuses on{' '}
        <b>architecture</b>, <b>APIs</b>,{' '}
        <Tooltip
          label="Ha!. Or more accurately TECH DEBT"
          aria-label="Tech Debt?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>nitty-gritty business logics</b>
          </Text>
        </Tooltip>{' '}
        and even <b>front end integration</b> stuff now, how time flies!
        <br /> <br />
        Here are few technologies that are cup of my{' '}
        <Tooltip
          label="I only drink tea if I needed too!"
          aria-label="I hate Tea!"
          hasArrow
        >
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot as React.ElementType} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGoogleanalytics as React.ElementType} color={emphasis} fontSize="2em" />
            Google Analytics GA4
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGooglesearchconsole as React.ElementType} color={emphasis} fontSize="2em" />
            Google Search Console
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiSemrush as React.ElementType} color={emphasis} fontSize="2em" />
            Semrush
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiCanva as React.ElementType} color={emphasis} fontSize="2em" />
            Canva
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiMeta as React.ElementType} color={emphasis} fontSize="2em" />
            Meta Business Manager
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGoogleads as React.ElementType} color={emphasis} fontSize="2em" />
            Google Ads Manager
          </ListItem>
          {/* <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={ahrefs-logo-blue.svg as React.ElementType} color={emphasis} fontSize="2em" />
            Ahrefs
          </ListItem> */}
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAlamy as React.ElementType} color={emphasis} fontSize="2em" />
            Ahref
          </ListItem>
        </List>
        {/* <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen as React.ElementType} />
          </Text>
        </Box> */}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
