import { keyframes } from '../';

const animations = {
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }`,

  flyIn: keyframes`
    0% {
      transform: translateY(-60px);
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }`,

  flyInSubtle: keyframes`
    0% {
      transform: translateY(-3px);
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }`,
};

export { animations };
