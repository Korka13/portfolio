const animateOptionsTop = {
    duration: 2000,
    delay: 1000,
    left: false,
    right: false,
    top: true,
    bottom: false,
};
const animateOptionsBottom = {
    duration: 2000,
    delay: 1000,
    left: false,
    right: false,
    top: false,
    bottom: true,
};

const homePageCssClass = {
    pageCssClass: "NavigationPage-home"
}
const aboutPageCssClass = {
    pageCssClass: "NavigationPage-about"
}
const projectsPageCssClass = {
    pageCssClass: "NavigationPage-projects"
}
const contactPageCssClass = {
    pageCssClass: "NavigationPage-home"
}
const errorPageCssClass = {
    pageCssClass: "NavigationPage-error"
}
const homeLink = {    
    linkCssClass: "NavigationLink-contact",
    to: "/",
    text: "Home"
};
const aboutLink = {
    linkCssClass: "NavigationLink-about",
    to: "/about",
    text: "About"
};
const projectsLink = {
    linkCssClass: "NavigationLink-projects",
    to: "/projects",
    text: "Projects"
};
const contactLink = {
    linkCssClass: "NavigationLink-contact",
    to: "/contact",
    text: "Contact"
};
const homeNav = [
    {
        animateOptions: animateOptionsTop,
        ...homePageCssClass,
        ...aboutLink
    },
    {
        animateOptions: animateOptionsBottom,
        ...homePageCssClass,
        ...projectsLink
    },
    {
        animateOptions: animateOptionsTop,
        ...homePageCssClass,
        ...contactLink
    }
];
const aboutNav = [
    {
        animateOptions: animateOptionsTop,
        ...aboutPageCssClass,
        ...homeLink
    },
    {
        animateOptions: animateOptionsBottom,
        ...aboutPageCssClass,
        ...projectsLink
    },
    {
        animateOptions: animateOptionsTop,
        ...aboutPageCssClass,
        ...contactLink
    }
];
const projectsNav = [
    {
        animateOptions: animateOptionsTop,
        ...projectsPageCssClass,
        ...homeLink
    },
    {
        animateOptions: animateOptionsBottom,
        ...projectsPageCssClass,
        ...aboutLink
    },
    {
        animateOptions: animateOptionsTop,
        ...projectsPageCssClass,
        ...contactLink
    }
];
const contactNav = [
    {
        animateOptions: animateOptionsTop,
        ...contactPageCssClass,
        ...homeLink
    },
    {
        animateOptions: animateOptionsBottom,
        ...contactPageCssClass,
        ...aboutLink
    },
    {
        animateOptions: animateOptionsTop,
        ...contactPageCssClass,
        ...projectsLink
    }
];
const errorNav = [
    {
        animateOptions: animateOptionsTop,
        ...errorPageCssClass,
        ...homeLink
    },
    {
        animateOptions: animateOptionsBottom,
        ...errorPageCssClass,
        ...aboutLink
    },
    {
        animateOptions: animateOptionsBottom,
        ...errorPageCssClass,
        ...projectsLink
    },
    {
        animateOptions: animateOptionsTop,
        ...errorPageCssClass,
        ...contactLink
    }
];

export {homeNav, aboutNav, projectsNav, contactNav, errorNav};