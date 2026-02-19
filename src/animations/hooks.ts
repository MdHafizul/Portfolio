export const useScrollReveal = () => {
  return {
    viewport: { once: true, amount: 0.05, margin: '0px 0px -10% 0px' },
    initial: 'hidden',
    whileInView: 'visible'
  };
};

export const useStaggerReveal = (stagger: number = 0.1) => {
  return {
    viewport: { once: true, amount: 0.05, margin: '0px 0px -10% 0px' },
    variants: {
      visible: {
        transition: {
          staggerChildren: stagger
        }
      }
    }
  };
};
