import Image from 'next/image';

// Next Link
import Link from 'next/link';

// Comnponents
import Socials from '../components/Socials';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'}>
            {/* name */}
            <motion.h2
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[40px] font-light"
            >
              <span className="font-medium">Gian</span> Ramos
              <span className="text-accent">.</span>
            </motion.h2>

            {/* 
            
            <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=""
              priority={true}
            />






            <motion.h2
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[42px]"
            >
              <span className="font-bold">gian</span> ramos
              <span className="text-accent">.</span>
            </motion.h2>
            
            */}
          </Link>
          {/* SOcials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
