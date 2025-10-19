import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down' | 'bounce' | 'scale';
  delay?: number;
  duration?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  animation = 'fade',
  delay = 0,
  duration = 0.6
}) => {
  const getAnimationVariants = (): Variants => {
    switch (animation) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case 'slide-left':
        return {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -50 }
        };
      case 'slide-right':
        return {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 50 }
        };
      case 'slide-up':
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 }
        };
      case 'slide-down':
        return {
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 }
        };
      case 'bounce':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { 
            opacity: 1, 
            scale: 1
          },
          exit: { opacity: 0, scale: 0.8 }
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        ...(animation === 'bounce' && {
          type: "spring",
          stiffness: 300,
          damping: 20
        })
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
