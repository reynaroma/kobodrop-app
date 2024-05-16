import { motion } from 'framer-motion';

export interface LogoWallProps {
  src1: string;
  src2: string;
  src3: string;
  alt1: string;
  alt2: string;
  alt3: string;
}

function LogoWall({ src1, src2, src3, alt1, alt2, alt3 }:
  LogoWallProps) {
  return (
    <div>
      <article className='flex mb-8 justify-center gap-8 text-center'>
        <motion.div whileHover={{ scale: 1.05 }}>
          <img src={src1} alt={alt1} className='w-20 md:w-36' />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <img src={src2} alt={alt2} className='w-20 md:w-36' />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <img src={src3} alt={alt3} className='w-20 md:w-36' />
        </motion.div>
      </article>
    </div>
  )
}

export default LogoWall;
