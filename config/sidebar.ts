import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: '#',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahreen-siddiqui/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: '#',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: '#',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: '#',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: '#',
    icon: FaDev,
  },
]
