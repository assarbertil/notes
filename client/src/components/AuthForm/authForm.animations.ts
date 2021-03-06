export const formMotion = {
  initial: {
    opacity: 0,
    y: 1024,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -1024,
  },
  transition: {
    type: "spring",
    duration: 2,
  },
}
