import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'trasittion';
  },
});

const Section = ({ children, delay = 0 }) => (
  <StyledDiv initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} trasittion={{ duration: 0.8, delay: 0.5 }} mb={6}>
    {children}
  </StyledDiv>
);

export default Section;