// TODO This is a stub for testing, eventually replace this with Strapi Calls

// TODO remove routes from this page, https://github.com/bettersg/call-home/pull/121#discussion_r1110573633
import { Path } from '../routes/paths';
import { Support } from './Support';
import type { LanguageOption } from './Language';

// Data shared by every Support detail page.

export interface ServiceCardDetail extends Support {
  // The short blurb briefly explaining the services provided.
  shortBlurb: string;
  // The app internal route
  route: string;
}

// Strings that stay constant on each Support detail page.
export interface SupportDetailStrings {
  headerTitle: string;
}

const SUPPORT_DETAIL_STRINGS: Record<LanguageOption, SupportDetailStrings> = {
  en: {
    headerTitle: 'Free Support Services',
  },
};

export function getSupportDetailStrings(
  language: LanguageOption
): SupportDetailStrings {
  return SUPPORT_DETAIL_STRINGS[language];
}

// Data used by every Support detail page that changes per page.
export interface SupportDetail extends Support {
  // Url of org website.
  website: string;
  // Blurb introduction section. Subsequent parts of the blurb are defined
  // separately.
  blurbIntro: string;
  // Text for CTA button.
  // TODO This won't handle images/icons in the button. Figure that out.
  ctaButtonText: string;
  ctaLink: string;
  ctaIcon: string;
}

// We should consider moving TWC2-specific things to their own file.
export interface SupportDetailWithSocials extends SupportDetail {
  blurbFacebookLinks: FacebookLinksSection;
}

export interface FacebookLinksSection {
  title: string;
  imageSrc: string;
  links: FacebookLink[];
}

export interface FacebookLink {
  href: string;
  text: string;
}

export function getServiceCardDetails(): ServiceCardDetail[] {
  return [
    {
      logo: '/images/twc2-logo.png',
      name: 'Transient Workers Count Too',
      shortBlurb:
        'Whatsapp call on Mondays to Fridays (9am - 9pm) or message anytime',
      route: `${Path.SupportDetail}/twc2`,
    },
    {
      logo: 'https://www.probono.sg/wp-content/uploads/2022/12/Pro-Bono-SG-Logo.png',
      name: 'Pro Bono SG',
      shortBlurb:
        'Book in-person appointment with a lawyer and get free basic legal advice',
      route: `${Path.SupportDetail}/pro-bono-sg`,
    },
    {
      logo: 'https://www.agoodspace.org/wp-content/uploads/2020/09/0.png',
      name: 'ItsRainingRaincoats',
      shortBlurb:
        'Register for interactive activities, learning, and welfare programs',
      route: `${Path.SupportDetail}/irr`,
    },
    {
      logo: 'https://img.paperform.co/fetch/w_400,f_auto/https://s3.amazonaws.com/pf-upload-01/u-40359/1/2019-10-07/xm03ygs/HealthServe%20Logo%20colour.png',
      name: 'HealthServe',
      shortBlurb:
        'Call us for mental health and counseling hotline',
      route: `${Path.SupportDetail}/healthserve`,
    },
    {
      logo: 'https://www.aidha.org/wp-content/uploads/2018/06/logo.jpg',
      name: 'Aidha',
      shortBlurb:
        'Learn financial literacy and confidence skills',
      route: `${Path.SupportDetail}/aidha`,
    },
    {
      logo: 'https://acmi.org.sg/wp-content/uploads/2022/09/logo.png',
      name: 'ACMI',
      shortBlurb:
        'Reach out to us for skills development and well-being support',
      route: `${Path.SupportDetail}/acmi`,
    },
    {
      logo: 'https://images.squarespace-cdn.com/content/v1/5a12725612abd96b9c737354/1512006074840-DDTG0JDU6HZ72GX7KSO9/HOME+Logo.jpg?format=1500w',
      name: 'HOME',
      shortBlurb:
        'Get in touch with our helpline',
      route: `${Path.SupportDetail}/home`,
    },
     {
      logo: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t1.18169-9/13076581_612143168942885_2440759659123028479_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hYQXtTI7hiUAX8X8AOi&_nc_ht=scontent.fsin3-1.fna&oh=00_AfCL2PBhYS1bKjNP95GT2tJQLnmnmxkM9Lh5srSezScQog&oe=64904C2D',
      name: 'Centre for Domestic Employees (CDE)',
      shortBlurb:
        '24-hour toll-free helpline and fun social activities',
      route: `${Path.SupportDetail}/cde`,
    },
  ];
}

const EMPTY_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: '',
    name: '',
    website: '',
    blurbIntro: '',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '',
      links: [
        {
          href: '',
          text: '',
        },
        {
          href: '',
          text: '',
        },
      ],
    },
    ctaButtonText: '',
    ctaLink: '',
    ctaIcon: '',
  },
};

const TWC2_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: '/images/twc2-logo.png',
    name: 'Transient Workers Count Too (TWC2)',
    website: 'https://twc2.org.sg/language-menu-for-qr-code/',
    blurbIntro: `TWC2 helps all foreigners working in Singapore, including those on Work Permits and S-Passes. They help for free. Most common issues are salary non-payment, contract issues and injuries.`,
    blurbFacebookLinks: {
      title: `Join TWC2's Facebook Community Pages!`,
      imageSrc: '/images/facebook-icon.svg',
      links: [
        {
          href: 'https://www.facebook.com/twc2bangla',
          text: 'Bengali বাংলা',
        },
        {
          href: 'https://www.facebook.com/twc2tamil',
          text: 'Tamil தமிழ்',
        },
      ],
    },
    ctaButtonText: '+65 6297 7564',
    ctaLink: 'https://wa.me/6562977564',
    ctaIcon: '/images/whatsapp-icon.svg',
  },
};



const PRO_BONO_SG_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://www.probono.sg/wp-content/uploads/2022/12/Pro-Bono-SG-Logo.png',
    name: 'Pro Bono SG',
    website: 'https://www.probono.sg/',
    blurbIntro: 'Pro Bono SG (UEN No. 201700430E) is a registered charity with the status of Institution of a Public Character and a company limited by guarantee. It started as a department within The Law Society of Singapore and later became Law Society Pro Bono Services. Since 2007, we’ve expanded our legal initiatives and programs, helping over 132,000 people with legal awareness, guidance, and representation. In FY 21/22, we helped over 17,000 individuals and community organisations. Our volunteer base has grown to 1,000 registered volunteers from various industries and specialities.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '',
      links: [
        {
          href: '',
          text: '',
        },
        {
          href: '',
          text: '',
        },
      ],
    },
    ctaButtonText: 'Schedule a Free Legal Clinic',
    ctaLink: 'https://forms.office.com/Pages/ResponsePage.aspx?id=2SIByMB8W06hRKsXHMIqYg9U_LFeiCRHgqHNQqZ_EfxUMTJZNkhEMUlOMU00WVlUODROTFBMTU5IMyQlQCN0PWcu',
    ctaIcon: '',
  },
};

const IRR_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://www.agoodspace.org/wp-content/uploads/2020/09/0.png',
    name: 'ItsRainingRaincoats',
    website: 'https://itsrainingraincoats.com/',
    blurbIntro: 'ItsRainingRaincoats is a Singapore charity that aims to build bridges of integration between migrant workers and residents of Singapore. We work to improve their welfare and believe that their seamless integration into our community will benefit not just our migrant workers but Singapore as a whole.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '',
      links: [
        {
          href: '',
          text: '',
        },
        {
          href: '',
          text: '',
        },
      ],
    },
    ctaButtonText: 'Visit IRR Facebook Page for Free Services',
    ctaLink: 'https://www.facebook.com/itsrainingraincoats/',
    ctaIcon: '',
  },
};

const HEALTHSERVE_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://img.paperform.co/fetch/w_400,f_auto/https://s3.amazonaws.com/pf-upload-01/u-40359/1/2019-10-07/xm03ygs/HealthServe%20Logo%20colour.png',
    name: 'HealthServe',
    website: 'https://www.healthserve.org.sg/',
    blurbIntro: 'Founded in 2006 on Christian values, HealthServe is an IPC registered charity that seeks to bring healing and hope to vulnerable low-wage migrant workers in Singapore.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '',
      links: [
        {
          href: '',
          text: '',
        },
        {
          href: '',
          text: '',
        },
      ],
    },
    ctaButtonText: '24-hour mental health hotline',
    ctaLink: 'tel:+65%203129%205000',
    ctaIcon: '',
  },
};

const AIDHA_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://www.aidha.org/wp-content/uploads/2018/06/logo.jpg',
    name: 'Aidha',
    website: 'https://www.aidha.org/',
    blurbIntro: 'Aidha offers courses for helpers in money management, communication, computer and entrepreneurship. Aidha’s mission is to help migrant domestic workers and low-income Singaporean women achieve economic independence through financial education, wealth creation and entrepreneurship. Founded in 2006, Aidha is an award-winning charity with Institution of Public Character (IPC) status. We have 500 students currently enrolled in our programmes.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '',
      links: [
        {
          href: '',
          text: '',
        },
        {
          href: '',
          text: '',
        },
      ],
    },
    ctaButtonText: 'Enrol in free short courses',
    ctaLink: 'https://www.aidha.org/courses/free-short-courses/',
    ctaIcon: '',
  },
};

const ACMI_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://acmi.org.sg/wp-content/uploads/2022/09/logo.png',
    name: 'ACMI',
    website: 'https://acmi.org.sg/',
    blurbIntro: 'ACMI was commissioned on June 15 with the mission of meeting the special pastoral needs of migrants and itinerant people in the Archdiocese in Singapore, and conducted activities like raising awareness to newspapers and having a hotline for those in need to call.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '',
      links: [
        {
          href: '',
          text: '',
        },
        {
          href: '',
          text: '',
        },
      ],
    },
    ctaButtonText: 'Explore our skills development services',
    ctaLink: 'https://acmi.org.sg/skills-development/',
    ctaIcon: '',
  },
};

const HOME_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://images.squarespace-cdn.com/content/v1/5a12725612abd96b9c737354/1512006074840-DDTG0JDU6HZ72GX7KSO9/HOME+Logo.jpg?format=1500w',
    name: 'HOME',
    website: 'https://www.home.org.sg/',
    blurbIntro: 'Humanitarian Organization for Migration Economics [“H.O.M.E.”] is a Singapore-based charity founded in 2004 by the late Ms Bridget Tan. HOME is dedicated to empowering and supporting migrant workers who experience abuse and exploitation. We provide immediate crisis intervention as well as long-term support such as education and training programmes to achieve our goal of enhancing the wellbeing and employment prospects of migrant workers. HOME also promotes the diverse voices of migrant workers in Singapore through outreach projects, and public education. Three pillars guide us: Welfare, Empowerment and Advocacy.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '',
      links: [
        {
          href: '',
          text: '',
        },
        {
          href: '',
          text: '',
        },
      ],
    },
    ctaButtonText: '+65 9787 3122',
    ctaLink: 'https://wa.me/6597873122',
    ctaIcon: '/images/whatsapp-icon.svg',
  },
};

const CDE_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://scontent.fsin3-1.fna.fbcdn.net/v/t1.18169-9/13076581_612143168942885_2440759659123028479_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hYQXtTI7hiUAX8X8AOi&_nc_ht=scontent.fsin3-1.fna&oh=00_AfCL2PBhYS1bKjNP95GT2tJQLnmnmxkM9Lh5srSezScQog&oe=64904C2D',
    name: 'Centre for Domestic Employees (CDE)',
    website: 'https://www.cde.org.sg/wps/portal/cde/home/',
    blurbIntro: 'The Centre for Domestic Employees (CDE) promote the fair treatment of all domestic employees in Singapore through issues resolution, humanitarian aid, social integration and support. We can support you in up-skilling and emotional resilience',
    blurbFacebookLinks: {
      title: 'Find us on Facebook',
      imageSrc: '/images/facebook-icon.svg',
      links: [
        {
          href: 'www.facebook.com/cde.singapore',
          text: 'CDE Facebook',
        },
      ],
    },
    ctaButtonText: 'Call our 24-hour helpline',
    ctaLink: 'tel:+65%201800%202255%20233',
    ctaIcon: '',
  },
};

export function getPartnerDetail(partner: string | undefined, language: LanguageOption): SupportDetailWithSocials {
  switch (partner) {
    case 'twc2':
      return TWC2_DETAIL[language];
    case 'pro-bono-sg':
      return PRO_BONO_SG_DETAIL[language];
    case 'irr':
      return IRR_DETAIL[language];
    case 'healthserve':
      return HEALTHSERVE_DETAIL[language];
    case 'aidha':
      return AIDHA_DETAIL[language];
    case 'acmi':
      return ACMI_DETAIL[language];
    case 'home':
      return HOME_DETAIL[language];
    case 'cde':
      return CDE_DETAIL[language];
    default:
      return EMPTY_DETAIL[language];
  }
}
