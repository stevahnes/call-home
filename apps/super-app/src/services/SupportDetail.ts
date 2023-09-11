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
      logo: 'https://img.paperform.co/fetch/w_400,f_auto/https://s3.amazonaws.com/pf-upload-01/u-40359/1/2019-10-07/xm03ygs/HealthServe%20Logo%20colour.png',
      name: 'HealthServe',
      shortBlurb: 'Call us for mental health and counseling hotline',
      route: `${Path.SupportDetail}/healthserve`,
    },
    {
      logo: 'https://www.aidha.org/wp-content/uploads/2018/06/logo.jpg',
      name: 'Aidha',
      shortBlurb: 'Learn financial literacy and confidence skills',
      route: `${Path.SupportDetail}/aidha`,
    },
    {
      logo: 'https://images.squarespace-cdn.com/content/v1/5a12725612abd96b9c737354/1512006074840-DDTG0JDU6HZ72GX7KSO9/HOME+Logo.jpg?format=1500w',
      name: 'HOME',
      shortBlurb: 'Get in touch with our helpline',
      route: `${Path.SupportDetail}/home`,
    },
    {
      logo: '/images/cde-logo.png',
      name: 'Centre for Domestic Employees (CDE)',
      shortBlurb: '24-hour toll-free helpline and fun social activities',
      route: `${Path.SupportDetail}/cde`,
    },
    {
      logo: '/images/fast-logo.png',
      name: 'Foreign Domestic Worker Association for Social Support and Training (FAST)',
      shortBlurb: 'Visit our website for social support, training, and events',
      route: `${Path.SupportDetail}/fast`,
    },
    {
      logo: 'https://hagar.org.sg/wp-content/uploads/2019/05/Masterlogo300.jpg',
      name: 'Hagar Singapore',
      shortBlurb:
        'Message us for advise on recovery and reintegration programs, for victims of human trafficking',
      route: `${Path.SupportDetail}/hagar`,
    },
    {
      logo: 'https://forjusticewithoutborders.org/wp-content/themes/jwb/dist/vue/ef4c8813de08deca2bebc3cab7c2c4c4.png',
      name: 'Justice Without Borders (JWB)',
      shortBlurb:
        'Message us for help to get your compensation, even after returning home',
      route: `${Path.SupportDetail}/jwb`,
    },
    {
      logo: '/images/adeo-logo.jpeg',
      name: 'Alliance of Domestic Employees Outreach (ADEO)',
      shortBlurb:
        'Message us for mental wellness programs, case management, and meaningful events',
      route: `${Path.SupportDetail}/adeo`,
    },
    {
      logo: 'https://static.wixstatic.com/media/862048_3725dd21f0d64ef492b3e5665c257ab5~mv2.jpg/v1/crop/x_46,y_63,w_725,h_433/fill/w_219,h_131,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-20180416-WA0009%20(1).jpg',
      name: 'SG Accident Help Centre',
      shortBlurb:
        'Call us if you are injured and need help in transport or recovery',
      route: `${Path.SupportDetail}/sgaccidenthelpcentre`,
    },
    {
      logo: '/images/mwc-logo.jpeg',
      name: 'Migrant Workers’ Centre (MWC)',
      shortBlurb:
        'If you have any employment-related issues, call our 24/7 helpline @ 65362692',
      route: `${Path.SupportDetail}/mwc`,
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
    blurbIntro:
      'Pro Bono SG (UEN No. 201700430E) is a registered charity with the status of Institution of a Public Character and a company limited by guarantee. It started as a department within The Law Society of Singapore and later became Law Society Pro Bono Services. Since 2007, we’ve expanded our legal initiatives and programs, helping over 132,000 people with legal awareness, guidance, and representation. In FY 21/22, we helped over 17,000 individuals and community organisations. Our volunteer base has grown to 1,000 registered volunteers from various industries and specialities.',
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
    ctaLink:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=2SIByMB8W06hRKsXHMIqYg9U_LFeiCRHgqHNQqZ_EfxUMTJZNkhEMUlOMU00WVlUODROTFBMTU5IMyQlQCN0PWcu',
    ctaIcon: '',
  },
};

const HEALTHSERVE_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://img.paperform.co/fetch/w_400,f_auto/https://s3.amazonaws.com/pf-upload-01/u-40359/1/2019-10-07/xm03ygs/HealthServe%20Logo%20colour.png',
    name: 'HealthServe',
    website: 'https://www.healthserve.org.sg/',
    blurbIntro:
      'Founded in 2006 on Christian values, HealthServe is an IPC registered charity that seeks to bring healing and hope to vulnerable low-wage migrant workers in Singapore.',
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
    blurbIntro:
      'Aidha offers courses for helpers in money management, communication, computer and entrepreneurship. Aidha’s mission is to help migrant domestic workers and low-income Singaporean women achieve economic independence through financial education, wealth creation and entrepreneurship. Founded in 2006, Aidha is an award-winning charity with Institution of Public Character (IPC) status. We have 500 students currently enrolled in our programmes.',
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

const HOME_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://images.squarespace-cdn.com/content/v1/5a12725612abd96b9c737354/1512006074840-DDTG0JDU6HZ72GX7KSO9/HOME+Logo.jpg?format=1500w',
    name: 'HOME',
    website: 'https://www.home.org.sg/',
    blurbIntro:
      'Humanitarian Organization for Migration Economics [“H.O.M.E.”] is a Singapore-based charity founded in 2004 by the late Ms Bridget Tan. HOME is dedicated to empowering and supporting migrant workers who experience abuse and exploitation. We provide immediate crisis intervention as well as long-term support such as education and training programmes to achieve our goal of enhancing the wellbeing and employment prospects of migrant workers. HOME also promotes the diverse voices of migrant workers in Singapore through outreach projects, and public education. Three pillars guide us: Welfare, Empowerment and Advocacy.',
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
    logo: '/images/cde-logo.png',
    name: 'Centre for Domestic Employees (CDE)',
    website: 'https://www.cde.org.sg/wps/portal/cde/home/',
    blurbIntro:
      'The Centre for Domestic Employees (CDE) promote the fair treatment of all domestic employees in Singapore through issues resolution, humanitarian aid, social integration and support. We can support you in up-skilling and emotional resilience',
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

const FAST_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: '/images/fast-logo.png',
    name: 'Foreign Domestic Worker Association for Social Support and Training (FAST)',
    website: 'https://www.fast.org.sg/',
    blurbIntro:
      'FAST empowers foreign domestic workers through various programs, including skills training, counseling, and community engagement, fostering their well-being and integration into society. FAST also conducts a two-day Onboarding and Integration Programme to help new MDW arrivals adjust and adapt to work life in Singapore, learning life essentials',
    blurbFacebookLinks: {
      title: 'Explore our services',
      imageSrc: '/images/link-icon.png',
      links: [
        {
          href: 'https://www.fast.org.sg/staticpage/event',
          text: 'Events',
        },
        {
          href: 'https://www.fast.org.sg/training/lifelong-learning',
          text: 'Training',
        },
        {
          href: 'https://www.fast.org.sg/clubhouse',
          text: 'Clubhouse',
        },
        {
          href: 'https://www.fast.org.sg/social-support',
          text: 'Our services: 24-hour helpline, counseling, mediation, befriender, legal aid, humanitarian aid',
        },
        {
          href: 'https://www.facebook.com/FAST.org.sg',
          text: 'Facebook page',
        },
      ],
    },
    ctaButtonText: 'Visit our website for a list of our services',
    ctaLink: 'https://www.fast.org.sg/social-support',
    ctaIcon: '',
  },
};

const HAGAR_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://hagar.org.sg/wp-content/uploads/2019/05/Masterlogo300.jpg',
    name: 'Hagar',
    website: 'https://hagar.org.sg/human-trafficking-in-singapore/',
    blurbIntro:
      'Hagar Singapore provides holistic support to survivors of human trafficking, offering shelter, counseling, education, and vocational training to empower them towards a new and dignified life.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '/images/facebook-icon.svg',
      links: [
        {
          href: 'https://www.facebook.com/HagarSingapore/',
          text: 'Facebook page',
        },
      ],
    },
    ctaButtonText: 'Message us on Facebook',
    ctaLink: 'https://www.facebook.com/HagarSingapore/',
    ctaIcon: '',
  },
};

const JWB_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: 'https://forjusticewithoutborders.org/wp-content/themes/jwb/dist/vue/ef4c8813de08deca2bebc3cab7c2c4c4.png',
    name: 'Justice Without Borders (JWB)',
    website: 'https://forjusticewithoutborders.org/about/',
    blurbIntro:
      'We support victims of labour exploitation and human trafficking in getting compensation against their abusers, even after they return home.',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '/images/facebook-icon.svg',
      links: [
        {
          href: 'https://www.facebook.com/forJWB',
          text: 'Facebook page',
        },
      ],
    },
    ctaButtonText: 'We can help you claim compensation',
    ctaLink: 'https://forjusticewithoutborders.org/get-help/',
    ctaIcon: '',
  },
};

const ADEO_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: '/images/adeo-logo.jpeg',
    name: 'Alliance of Domestic Employees Outreach (ADEO)',
    website: 'https://adeo.sg/#what-we-do',
    blurbIntro:
      'ADEO is a movement of the Hope Initiative Alliance and aims to provide programs and events to care for domestic helpers in the areas of mental wellness, case management, recreation activities, empowerment, and skill development',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '/images/facebook-icon.svg',
      links: [
        {
          href: 'https://www.facebook.com/sgadeo',
          text: 'Facebook page',
        },
      ],
    },
    ctaButtonText: 'Message us',
    ctaLink: 'tel:+65%206304%203482',
    ctaIcon: '',
  },
};

const SGACCIDENTHELPCENTRE_DETAIL: Record<
  LanguageOption,
  SupportDetailWithSocials
> = {
  en: {
    logo: 'https://static.wixstatic.com/media/862048_3725dd21f0d64ef492b3e5665c257ab5~mv2.jpg/v1/crop/x_46,y_63,w_725,h_433/fill/w_219,h_131,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-20180416-WA0009%20(1).jpg',
    name: 'SG Accident Help Centre',
    website: 'https://www.sgaccident.org.sg/about',
    blurbIntro:
      'We are here for the injured and needy. We want to care for injured migrant workers in the community and teach employed workers on workplace safety and injury prevention',
    blurbFacebookLinks: {
      title: '',
      imageSrc: '/images/facebook-icon.svg',
      links: [
        {
          href: 'https://www.facebook.com/pages/SG%20Accident%20Help%20Centre/335942880619911/',
          text: 'Facebook page',
        },
      ],
    },
    ctaButtonText: 'Call us',
    ctaLink: 'tel:+65%206291%200751',
    ctaIcon: '',
  },
};

const MWC_DETAIL: Record<LanguageOption, SupportDetailWithSocials> = {
  en: {
    logo: '/images/mwc-logo.jpeg',
    name: "Migrant Workers' Centre",
    website: 'https://mwc.org.sg/wps/portal/mwc/home/Aboutus/whatwedo',
    blurbIntro:
      'We can advise you about unfair employment practices and provide shelter and food for those in need. We also provide membership to protect you against critical illness, death, and accidents as well as meaningful benefits',
    blurbFacebookLinks: {
      title: 'Explore our services',
      imageSrc: '/images/link-icon.png',
      links: [
        {
          href: 'https://mwc.org.sg/wps/portal/mwc/home/services/associatemembership/',
          text: 'MWC Associate Membership',
        },
        {
          href: 'https://mwc.org.sg/wps/portal/mwc/home/services/freelegalclinic/',
          text: 'Free Legal Clinic',
        },
      ],
    },
    ctaButtonText: 'Call us',
    ctaLink: 'tel:+65%206536%202692',
    ctaIcon: '',
  },
};

export function getPartnerDetail(
  partner: string | undefined,
  language: LanguageOption
): SupportDetailWithSocials {
  switch (partner) {
    case 'twc2':
      return TWC2_DETAIL[language];
    case 'pro-bono-sg':
      return PRO_BONO_SG_DETAIL[language];
    case 'healthserve':
      return HEALTHSERVE_DETAIL[language];
    case 'aidha':
      return AIDHA_DETAIL[language];
    case 'home':
      return HOME_DETAIL[language];
    case 'cde':
      return CDE_DETAIL[language];
    case 'fast':
      return FAST_DETAIL[language];
    case 'hagar':
      return HAGAR_DETAIL[language];
    case 'jwb':
      return JWB_DETAIL[language];
    case 'adeo':
      return ADEO_DETAIL[language];
    case 'sgaccidenthelpcentre':
      return SGACCIDENTHELPCENTRE_DETAIL[language];
    case 'mwc':
      return MWC_DETAIL[language];
    default:
      return EMPTY_DETAIL[language];
  }
}
