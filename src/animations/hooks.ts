export const useScrollReveal = () => {
  return {
    viewport: { once: true, amount: 0.2 },
    initial: 'hidden',
    whileInView: 'visible'
  };
};

export const useStaggerReveal = (stagger: number = 0.1) => {
  return {
    viewport: { once: true, amount: 0.2 },
    variants: {
      visible: {
        transition: {
          staggerChildren: stagger
        }
      }
    }
  };
};
