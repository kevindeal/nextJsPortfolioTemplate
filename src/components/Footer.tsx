import React from 'react';

interface SocialLink {
  url: string;
  label: string;
}

interface FooterData {
  footerEmail: {
    emailHeader: string;
    emailLink: string;
  };
  socialsHeader: string;
  footerSocialLinks: {
    socialsHeader: string;
    githubLabel: string;
    githubUrl: string;
    linkedinLabel: string;
    linkedinUrl: string;
  };
  footerAboutMe: {
    footerAboutMeHeader: string;
    footerAboutMeContent: string;
  };
}

  const Footer: React.FC<{ footerData: FooterData }> = ({ footerData }) => {
    const {
      footerEmail = { emailHeader: 'Contact Us', emailLink: '' },
      footerSocialLinks = {
        socialsHeader: '',
        githubLabel: '',
        githubUrl: '',
        linkedinLabel: '',
        linkedinUrl: '',
      },
      footerAboutMe = { footerAboutMeHeader: '', footerAboutMeContent: '' },
    } = footerData || {};
  
  return (
    <footer className="relative text-black py-16 px-4 md:px-0 bg-white">
      {/* Angled stripeset */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          '--stripeSetHeight': '72px',
          '--stripeSetAlignCenterOffset': '-40px',
          '--stripeSetSubpixelOffset': '0',
          '--stripeSetAngle': '-6deg',
          position: 'absolute',
          height: 'var(--stripeSetHeight)',
          width: '100%',
          transform: 'skewY(var(--stripeSetAngle)) translateY(var(--stripeSetSubpixelOffset))',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%)',
        } as React.CSSProperties}
      />
      {/* Corner Flag */}
      <div 
      className="absolute top-0 left-0 w-16 md:w-[320px] h-10 md:h-16 bg-[#7a73ff]/50"
      style={{
        transform: 'rotate(-6deg)',
      }}
      ></div>
      {/* Footer Content grid */}
      <div className="relative max-w-screen-lg mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* contact info - displays contact email */}
        <div>
          <h1 className="text-lg font-semibold mb-4">{footerEmail.emailHeader}</h1>
          <a href={`mailto:${footerEmail.emailLink}`} className="text-blue-500 hover:underline">
            {footerEmail.emailLink}
          </a>
        </div>
        {/* Social Links - displays two socials */}
        <div>
          <h1 className="text-lg font-semibold mb-4">{footerSocialLinks.socialsHeader}</h1>
          <ul className="flex flex-wrap">
          {footerSocialLinks.githubLabel && footerSocialLinks.githubUrl && (
              <li className="mr-4 mb-2">
                <a href={footerSocialLinks.githubUrl} className="text-blue-400 hover:underline">
                  {footerSocialLinks.githubLabel}
                </a>
              </li>
            )}
            {footerSocialLinks.linkedinLabel && footerSocialLinks.linkedinUrl && (
              <li className="mr-4 mb-2">
                <a href={footerSocialLinks.linkedinUrl} className="text-blue-400 hover:underline">
                  {footerSocialLinks.linkedinLabel}
                </a>
              </li>
            )}
          </ul>
        </div>
        {/* footer about */}
        <div>
          <h1 className="text-lg font-semibold mb-4">{footerAboutMe.footerAboutMeHeader}</h1>
          <p>{footerAboutMe.footerAboutMeContent}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
