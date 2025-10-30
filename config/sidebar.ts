import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  // FaStackOverflow,
  FaFacebook,
  FaMedium,
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
    label: 'Facebook',
    href: 'https://www.facebook.com/mahreen.siddiqui.923',
    icon: FaFacebook,
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
  // {
  //   label: 'StackOverflow',
  //   href: '#',
  //   icon: FaStackOverflow,
  // },
  {
    label: 'Medium',
    href: '#',
    icon: FaMedium,
  },
  // {
  //   label: 'Github',
  //   href: '#',
  //   icon: FaGithub,
  // },
  // {
  //   label: 'Dev.to',
  //   href: '#',
  //   icon: FaDev,
  // },
]
