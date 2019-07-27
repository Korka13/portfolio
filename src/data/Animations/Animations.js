const animateLeft = {
  duration: 1000,
  delay: 0,
  left: true,
  right: false,
  top: false,
  bottom: false
};

const animateTopCascade = {
  duration: 1000,
  delay: 3000,
  left: false,
  right: false,
  top: true,
  bottom: false,
  cascade: true
};

const animateTop = {
  duration: 2000,
  delay: 1000,
  left: false,
  right: false,
  top: true,
  bottom: false,
};

const animateBottom = {
  duration: 2000,
  delay: 1000,
  left: false,
  right: false,
  top: false,
  bottom: true,
};

export { animateTop, animateTopCascade, animateLeft, animateBottom};