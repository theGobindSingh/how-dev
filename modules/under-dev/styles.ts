import { css } from "@emotion/react";
export const home = css`
  --bor-rad: 15px;
  --font-header: "Press Start 2P", "cursive";
  --font-color: rgb(211, 228, 252);
  --border: rgb(82, 118, 173);
  --bg-color: var(--color-bg-primary);
  height: 100vh;
  width: 100%;
  background-color: var(--bg-color);
  padding: 1rem;
  main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: 6fr 1fr 3fr;
    gap: 2rem;
    grid-auto-flow: none;
    h2 {
      grid-column: 1;
      grid-row: 1;
      border: 5px solid var(--border);
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--font-color);
      font-size: 2.25rem;
      border-radius: var(--bor-rad);
      text-align: center;
      span {
        font-family: var(--font-header);
        animation: blink 3s infinite;
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.25;
            color: var(--border);
          }
          100% {
            opacity: 1;
          }
        }
      }
    }
    h1 {
      grid-column: 1;
      grid-row: 2 / span 3;
      background-color: rgb(211, 228, 252);
      border-radius: var(--bor-rad);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 2rem;
      @keyframes span-anim {
        0% {
          transform: translate(0);
        }
        50% {
          margin-left: 100%;
          transform: translate(-100%, 0);
        }
        100% {
          transform: translate(0);
        }
      }
      span {
        color: var(--color-bg-primary);
        width: fit-content;
        font-family: var(--font-header);
        margin: 5px 0;
        font-size: 5rem;
        user-select: none;
        &:nth-child(1) {
          animation: span-anim 3s ease-in-out 0s infinite normal forwards;
        }
        &:nth-child(2) {
          animation: span-anim 3s ease-in-out 0.25s infinite normal forwards;
        }
        &:nth-child(3) {
          animation: span-anim 3s ease-in-out 0.5s infinite normal forwards;
        }
      }
    }
    .about {
      grid-row: 5 / span 2;
      grid-column: 1;
      border: 5px solid var(--border);
      border-radius: var(--bor-rad);
      color: var(--font-color);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: justify;
      font-size: 1.25rem;
      font-family: var(--font-mono);
    }
    .work {
      grid-row: 7 / span 2;
      grid-column: 1 / span 2;
      border: 5px solid var(--border);
      border-radius: var(--bor-rad);
      color: var(--font-color);
      font-family: var(--font-header);
      font-size: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .cons-lottie {
      grid-column: 2 / span 2;
      grid-row: 1 / span 6;
      border: 5px solid var(--border);
      border-radius: var(--bor-rad);
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-family: var(--font-mono);
      font-size: 2rem;
      svg {
        margin-right: 2rem;
      }
    }
    .whatsapp {
      grid-column: 3;
      grid-row: 7;
      // border: 5px solid var(--border);
      border-radius: var(--bor-rad);
      color: var(--font-color);
      background-color: #25d366;
    }
    .insta {
      grid-column: 3;
      grid-row: 8;
      // border: 5px solid var(--border);
      border-radius: var(--bor-rad);
      color: var(--font-color);
      background: linear-gradient(45deg, #fa7e1e, #d62976, #962fbf, #4f5bd5);
    }
  }
  @media only screen and (max-width: 900px) {
    height: 160vh;
    main {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(13, 1fr);
      h2 {
        font-size: 3vw;
        grid-column: 1 / span 2;
      }
      h1 {
        grid-column: 1 / span 2;
        span {
          font-size: 10vw;
        }
      }
      .cons-lottie {
        grid-column: 1 / span 2;
        grid-row: 5 / span 4;
      }
      .about {
        grid-column: 1 / span 2;
        grid-row: 9 / span 2;
        font-size: 3.4vw;
      }
      .work {
        grid-column: 1 / span 2;
        grid-row: 11 / span 2;
        font-size: 8vw;
      }
      a {
        font-size: 5vw;
        svg {
          margin-right: 0.5em;
        }
      }
      .whatsapp {
        grid-column: 1;
        grid-row: 13;
      }
      .insta {
        grid-column: 2;
        grid-row: 13;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 0.4rem;
    height: 120vh;
    main {
      gap: 0.6rem;
    }
  }
`;
