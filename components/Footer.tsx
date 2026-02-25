import {socialLinks } from '@/data/data';

export default function Footer() {
  return (
    <footer className='bg-neutral-900 text-white h-[70vh] fixed bottom-0 w-full'>
      <div className="container py-8 flex flex-wrap flex-col justify-center min-h-full">
        {/* Footer list */}
        <div className="flex flex-wrap flex-col md:flex-row md:items-center gap-7 sm:gap-14 lg:gap-20">
          {/* links */}
          <div className="">
            {/* links wrapper */}
            <div className="flex gap-2 mb-3 sm:gap-5">
              
              {/* links */}
              <div className="grid gap-1">
                {socialLinks.map((link) => (
                  <a 
                    href={link.href}
                    key={link.label} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='uppercase hover:underline' 
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* text */}
            <p className="max-w-xs text-sm opacity-80 mb-3">
               Turning complex logic into seamless digital journeys. I focus on clarity and long-term impact, ensuring every line of code serves a meaningful purpose.
            </p>
            {/* text */}
            <p className="">
              &copy; feyodev {new Date().getFullYear()}
            </p>
          </div>

          {/* text */}
          <div className="flex-1">

            {/* text */}
            <h3 className="text-4xl font-medium uppercase md:text-6xl
            lg:text-7xl xl:text-8xl">The long one</h3>

            {/* text */}
            <p className="max-w-md mt-2 opacity-80">
              Wants to chat? Send me a message to contact us!
            </p>

            {/* text */}
            <p className="">privacy policy</p>
            {/* text wrapper */}
            <div className="mt-3 text-sm">
              <p>
                Email: {' '}
                <a className="hover:underline">
                  feyochavez@hotmail.com
                </a>
              </p>

              <p>Remote dev · Tell me your best song!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
