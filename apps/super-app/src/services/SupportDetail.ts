// TODO This is a stub for testing, eventually replace this with Strapi Calls

// Strings that stay constant on each Support detail page.
export interface SupportDetailStrings {
  headerTitle: string;
}

export function getSupportDetailStrings(): SupportDetailStrings {
  return {
    headerTitle: 'Free Support Services',
  };
}

// Data used by every Support detail page that changes per page.
export interface SupportDetailAbout {
  // Url of logo image.
  logo: string;
  // The header of the about section.
  name: string;
  // Url of org website.
  website: string;
  // Blurb introduction section. Subsequent parts of the blurb are defined
  // separately.
  blurbIntro: string;
  // Blurb for CTA section.
  ctaBlurb: string;
  // Text for CTA button.
  // TODO This won't handle images/icons in the button. Figure that out.
  ctaButtonText: string;
}

// We should consider moving TWC2-specific things to their own file.
export interface Twc2SupportDetail extends SupportDetailAbout {
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

export function getTwc2Detail(): Twc2SupportDetail {
  return {
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
          text: 'Bengali',
        },
        {
          href: 'https://www.facebook.com/twc2tamil',
          text: 'Tamil',
        },
      ],
    },
    ctaBlurb: 'Call on Mondays to Fridays (9am - 9pm), message any time',
    ctaButtonText: '+65 6297 7564',
  };
}