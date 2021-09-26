import { css } from "styled-components"

const variables = css`
  :root {
    --color-text: hsl(222deg, 22%, 5%);
    --color-background: hsl(0deg, 0%, 100%);
    --color-background-shadow: hsl(0deg, 0%, 50%);
    --color-blurred-background: hsla(0deg, 0%, 100%, 0.85);
    --color-primary: hsl(245deg, 100%, 60%);
    --color-primary-light: hsl(245deg, 100%, 90%);
    --color-secondary: hsl(333deg, 100%, 45%);
    --color-tertiary: hsl(255deg, 85%, 30%);
    --color-decorative: hsl(200deg, 75%, 65%);
    --color-gray-100: hsl(225deg, 25%, 95%);
    --color-gray-200: hsl(225deg, 16%, 90%);
    --color-gray-300: hsl(225deg, 8%, 80%);
    --color-gray-400: hsl(225deg, 8%, 70%);
    --color-gray-500: hsl(225deg, 7%, 60%);
    --color-gray-600: hsl(225deg, 15%, 50%);
    --color-gray-700: hsl(225deg, 12%, 40%);
    --color-gray-900: hsl(225deg, 25%, 20%);
    --color-gray-1000: hsl(225deg, 15%, 15%);

    /* primary colors */
    --clr-primary-1: #1c1d26;
    --clr-primary-2: #91b9b8;
    --clr-primary-3: #aaabb8;
    --clr-primary-4: #ff6360;
    --clr-primary-5: #29648a;
    /* primary colors with transparency */
    --clr-primary-1-trans: rgba(28, 29, 38, 0.85);
    /* lighter shades of primary color */
    --clr-primary-2-lightest: #def2f1;
    --clr-primary-2-lighter: #bcdbda;
    --clr-primary-4-lighter: #ff807e;
    --clr-primary-4-lightest: #fae5df;
    --clr-primary-7: hsl(184, 65%, 59%);
    --clr-primary-8: hsl(184, 80%, 74%);
    --clr-primary-9: hsl(185, 94%, 87%);
    --clr-primary-10: hsl(186, 100%, 94%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-green-dark: hsl(125, 67%, 35%);
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-white: #fff;

    --ff-primary: "Mulish", -apple-system, sans-serif;
    --ff-secondary: "DM Serif Text", "Roboto", sans-serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --font-weight-medium: 400;
    --fz-heading: 32px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --spacing: 0.2rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 700px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`
// --transition: all 0.3s linear;

export default variables
