import { css } from "@emotion/react";

export const landingWrapper = css`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    user-select: none;
    cursor: default;
  }
`;

export const landingHeading = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  margin: 0;
  line-height: 1rem;
  font-size: 6vw;
`;

export const charContainer = css`
  font-size: inherit;
  --_unit-height: 1.5em;
  height: var(--_unit-height);
  display: inline-block;
  overflow: hidden;
  .upper-char {
    transform: scaleY(100%) translateY(00%);
    height: var(--_unit-height);
  }
  .lower-char {
    transform: scaleY(0%) translateY(0%);
    height: 0;
  }
  &:hover {
    .upper-char {
      transform: scaleY(0%) translateY(-100%);
      height: 0;
    }
    .lower-char {
      transform: scaleY(100%) translateY(0%);
      height: var(--_unit-height);
    }
  }
`;
const commonChar = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 0.95em;
  height: var(--_unit-height);
  transition: all 0.4s ease-in-out;
  text-transform: uppercase;
  font-family: var(--font-mono);
`;
export const upperChar = css`
  ${commonChar}
`;
export const lowerChar = css`
  ${commonChar}
`;

const commonSpanWrapper = css``;
export const upperSpanWrapper = css`
  ${commonSpanWrapper}
`;
export const lowerSpanWrapper = css`
  ${commonSpanWrapper}
`;
