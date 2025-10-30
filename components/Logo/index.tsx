// @ts-nocheck
import { memo, useState } from "react"
import Link from "next/link"
import {
  useColorMode,
  useBreakpointValue,
  chakra,
  shouldForwardProp,
  Image,
  ImageProps,
} from "@chakra-ui/react"
import {
  motion,
  AnimatePresence,
  isValidMotionProp,
  HTMLMotionProps,
} from "framer-motion"
import styles from "./styles.module.css"
import { ThemeMode, mobileBreakpointsMap } from "config/theme"
import { simpleOpacity } from "config/animations"

type Merge<P, T> = Omit<P, keyof T> & T
type MotionImageProps = Merge<ImageProps, HTMLMotionProps<"img">>

// ✅ Separate helper to simplify type inference
const chakraShouldForward = (prop: string) =>
  isValidMotionProp(prop) || shouldForwardProp(prop)

// ✅ Tell TS to skip deep union for this component only
// @ts-expect-error -- Type inference too complex for Chakra + Motion combo
const MotionImage = motion(
  chakra(Image, {
    shouldForwardProp: chakraShouldForward,
  })
)

const Logo = () => {
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  return (
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={!isMobile ? styles.logo : ""}
            boxSize={isMobile ? "30px" : "50px"}
            objectFit="cover"
            src="./logo-blue.svg"
            alt="Mahreen Siddique Logo"
            fallbackSrc="./logo-blue.svg"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded ? "animate" : "initial"}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        ) : (
          <MotionImage
            className={!isMobile ? styles.logo : ""}
            boxSize={isMobile ? "30px" : "50px"}
            objectFit="cover"
            src="./logo-blue-light.svg"
            fallbackSrc="./logo-blue-light.svg"
            alt="Mahreen Siddique Logo"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded ? "animate" : "initial"}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        )}
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)
