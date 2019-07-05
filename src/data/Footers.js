const today = new Date();
const text = `\u00A9 Andrea Cau | ${today.getFullYear()}`;

const normalFooter = {
    text,
    animateOptions: {
        duration: 3000,
        delay: 2000,
        left: false,
        right: false,
        top: false,
        bottom: false,
}
};

const homeFooter = {
    text,
    animateOptions: {
        duration: 200,
        delay: 3000,
        left: false,
        right: false,
        top: false,
        bottom: true,
}
};

export {normalFooter, homeFooter};