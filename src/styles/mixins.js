import { css } from 'styled-components';

const mixins = {
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexStart: css`
    display: flex;
    align-items: center;
  `,
  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--clr-primary-4);
      outline: 0;
    }
  `,
  bigButton: css`
    text-transform: uppercase;
    color: var(--color-background);
    background: var(--color-primary);
    padding: 1rem;
    letter-spacing: var(--extra-spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    font-family: var(--ff-primary);
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    &:hover,
    &:focus,
    &:active {
      background: var(--color-primary);
      color: var(--color-text);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,
  bigButtonOutline: css`
    text-transform: uppercase;
    background-color: var(--color-background);
    color: var(--color-primary);
    padding: 1rem;
    letter-spacing: var(--extra-spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    font-family: var(--ff-primary);
    border: 1px solid var(--color-primary);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    &:hover,
    &:focus,
    &:active {
      background: var(--color-primary);
      color: var(--color-text);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,
};

export default mixins;
