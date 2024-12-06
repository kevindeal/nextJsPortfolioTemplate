import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-black py-16 px-4 md:px-0 bg-white">
      {/* Angled StripeSet */}
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
      ></div>

      {/* Corner Flags */}
      <div
        className="absolute top-0 left-0 w-16 md:w-[320px] h-10 md:h-16 bg-[#7a73ff]/50"
        style={{
          transform: 'rotate(-6deg)',
        }}
      ></div>
      <div className="relative max-w-screen-lg mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-lg font-semibold mb-4">Let's Chat</h1>
          <a href="mailto:kevin@julyfivedesign.com" className="text-blue-400 hover:underline">
            kevin@julyfivedesign.com
          </a>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Check me out here</h1>
          <ul className="flex flex-wrap">
            <li className="mr-4 mb-2">
              <a href="https://www.linkedin.com/in/kevin-deal2/" className="text-blue-400 hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="https://github.com/kevindeal" className="text-blue-400 hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">More About Kevin</h1>
          <p>Outside of work, I enjoy spending time with my family, which is pictured above. I also have a passion for creative activities like art, tinkering with electronics, gardening, and music. In my free time, I love playing basketball as a way to stay active and unwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
