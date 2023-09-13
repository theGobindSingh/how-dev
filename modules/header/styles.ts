import { css } from "@emotion/react";

export const headerWrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  padding: 2.5vh 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

export const logoContainer = css`
  aspect-ratio: 1;
  height: 100%;
`;

export const logoWrapper = css`
  z-index: 999;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--color-text-primary);
  padding: 2vh;
  filter: invert(0);
  transition: filter 0.3s ease-in-out 1s;
  &.active {
    transition: filter 0.3s ease-in-out 0.2s;
    filter: invert(1);
  }
`;

export const hamBtn = css`
  z-index: 999;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  aspect-ratio: 1;
  height: 30px;
  cursor: pointer;
  --_h: 2px;
  --_t: 0.15s;
  --_e: ease-in-out;
  --_c: var(--color-text-primary);
  background-color: transparent;
  border: none;
  &::before {
    content: "";
    height: var(--_h);
    width: 100%;
    background-color: var(--_c);
    margin-bottom: 0px;
    transform: rotate(0deg);
    transition: margin-bottom var(--_t) var(--_e) var(--_t),
      transform var(--_t) var(--_e) 0s,
      background-color var(--_t) var(--_e) 0.4s;
    border-radius: 5px;
  }
  &::after {
    content: "";
    height: var(--_h);
    width: 100%;
    background-color: var(--_c);
    margin-top: 0px;
    transform: rotate(0deg);
    transition: margin-top var(--_t) var(--_e) var(--_t),
      transform var(--_t) var(--_e) 0s,
      background-color var(--_t) var(--_e) 0.4s;
    border-radius: 5px;
  }
  &.active::before {
    transition: margin-bottom var(--_t) var(--_e),
      transform var(--_t) var(--_e) var(--_t),
      background-color var(--_t) var(--_e) 1s;
    margin-bottom: -4px;
    transform: rotate(45deg);
    background-color: var(--color-bg-primary);
  }
  &.active::after {
    transition: margin-top var(--_t) var(--_e),
      transform var(--_t) var(--_e) var(--_t),
      background-color var(--_t) var(--_e) 1s;
    margin-top: -3px;
    transform: rotate(-45deg);
    background-color: var(--color-bg-primary);
  }
`;

export const nav = css`
  position: absolute;
  height: 100vh;
  width: 100vw;
  --_col: darkgrey;
  background-color: var(--_col);
  top: 0;
  left: 0;
  --_ps-w: 30vw;
  transition: transform 1.5s ease-in-out;
  transform: translateX(calc(-100% - var(--_ps-w)));
  &.active {
    transform: translateX(0%);
    &::before {
      transform: skewX(10deg);
    }
  }
  &::before {
    transition: transform 0.25s ease-in-out;
    content: "";
    position: absolute;
    height: 100%;
    width: var(--_ps-w);
    top: 0;
    right: calc(-1 * var(--_ps-w) / 2);
    transform: skewX(-10deg);
    background-color: var(--_col);
    box-shadow: 60px 0 30px rgba(0, 0, 0, 0.75);
  }
`;
