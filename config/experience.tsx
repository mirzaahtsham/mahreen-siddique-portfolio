// @ts-nocheck
import { Link } from '@chakra-ui/react'

export type Company = 'Medmax Technologies LLC' | 'Medmax RCM' | 'SMAG Technologies' | 'SEED GOC' | 'Scottish Kilt Shop' | 'JR Private Credit Fund' | 'JR dellas Wealth' 

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: Record<Company, CompanyDetail> = {
  Deloitte: {
    name: 'Medmax Technologies LLC',
    longName: 'Deloitte Consulting Phils. Delivery Center',
    subDetail: 'Consulting Phils. Delivery Center',
    url: 'https://medmaxtechnologiesllc.com/',
    position: 'SEO Marketing Consultant',
    duration: 'Sep 2020 - Present',
    logo: {
      light: '/worked_at_logos/deloitte/Deloitte_logo_black.png',
      dark: '/worked_at_logos/deloitte/Deloitte_logo.png',
    },
    roles: [
      <>
        Contributed to the design and development of a comprehensive .NET payment integration project for a client
        that covered credit card payments and subscription management. Introduced Stripe as a new payment provider
        within the system architecture. Participated in triaging, fixing, and adding new functionalities to multiple
        Azure-powered APIs of the same client.
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Medmax Technologies LLC"
          href="https://medmaxtechnologiesllc.com/"
          target="_blank"
          rel="noreferrer"
        >
          Medmax Technologies LLC
        </Link>
        .
      </>,
      <>
        Underwent training for .NET Sitecore 10, Sitecore SXA, and different topologies it provides, and passed{' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sitecore 10 .NET Developer Certification
        </Link>
        .
      </>,
    ] as JSX.Element[],
  },

  SCG: {
    name: 'Medmax RCM',
    longName: 'Scentregroup Limited AU',
    subDetail: 'via Prosource BPO',
    url: 'https://www.scentregroup.com/',
    position: 'Software Engineer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/scg/SCG_400x400.jpg',
      dark: '/worked_at_logos/scg/SCG.png',
    },
    roles: [
      <>
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="Westfield Marketing Hub"
          href="https://partner.scentregroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield Marketing Hub
        </Link>{' '}
        using NextJS and TypeScript. Restructuring the old Express app into a newer architectural design approach.
      </>,
      <>Created multiple Contentful and Bynder extensions to improve BX process efficiency.</>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://www.westfield.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield
        </Link>{' '}
        main site and GraphQL APIs written in NodeJS.
      </>,
      <>Migrated existing marketing email tools and batch jobs from Responsys into a new platform called Braze.</>,
      <>
        Hired in early 2020, first major task was helping select a new marketing vendor that could scale and enable
        personalization — selecting{' '}
        <Link
          aria-label="Braze"
          href="https://www.braze.com/"
          target="_blank"
          rel="noreferrer"
        >
          Braze
        </Link>{' '}
        as a result.
      </>,
    ] as JSX.Element[],
  },

  Blotocol: {
    name: 'Blotocol',
    longName: 'Blotocol Philippines',
    subDetail: 'formerly IVP Global Inc.',
    url: 'https://blotocol.com/',
    position: 'Senior Software Engineer',
    duration: 'Nov 2016 - Feb 2020',
    logo: {
      light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
      dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
    },
    roles: [
      <>
        Developed a Twitter Raffle Campaign / Contest Bot called Camps with analytics similar to Facebook Ads.
      </>,
      <>
        In 2019, got promoted to Senior Software Engineer and worked with Crypto Exchange, Smart Contracts, and
        other APIs using technologies such as NodeJS, .NET Core, and React.
      </>,
      <>
        Created highly scalable Japanese e-commerce sites. Most notable clients were TV Tokyo and Layla EC using .NET.
      </>,
      <>
        Hired in 2016, underwent Japanese language training first. Shortly after, worked with an in-house .NET MVC
        Framework called ERS.
      </>,
    ] as JSX.Element[],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
