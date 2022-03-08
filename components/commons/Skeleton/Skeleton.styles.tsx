import { css, keyframes } from "styled-components";

export const shine = keyframes`
  to {
    background-position: right -6rem top 0;
  }
`;
export const SHAPE = {
  CARD: {
    X_SMALL: css`
      width: 9rem;
      height: 12rem;
      border-radius: 1rem;
    `,
    SMALL: css`
      width: 10rem;
      height: 14rem;
      border-radius: 1rem;
    `,
    MEDIUM: css`
      width: 11rem;
      height: 15rem;
      border-radius: 1rem;
    `,
    LARGE: css`
      width: 12rem;
      height: 16rem;
      border-radius: 1rem;
    `,
    X_LARGE: css`
      width: 13rem;
      height: 17rem;
      border-radius: 1rem;
    `,
  },
  SQUARE: {
    X_SMALL: css`
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 10px;
    `,
    SMALL: css`
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 10px;
    `,
    MEDIUM: css`
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 10px;
    `,
    LARGE: css`
      width: 7rem;
      height: 7rem;
      border-radius: 10px;
    `,
    X_LARGE: css`
      width: 8.5rem;
      height: 8.5rem;
      border-radius: 10px;
    `,
  },
  CIRCLE: {
    X_SMALL: css`
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    `,
    SMALL: css`
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
    `,
    MEDIUM: css`
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
    `,
    LARGE: css`
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
    `,
    X_LARGE: css`
      width: 8.5rem;
      height: 8.5rem;
      border-radius: 50%;
    `,
  },
  TEXT: {
    X_SMALL: css`
      height: 0.8rem;
      border-radius: 6px;
    `,
    SMALL: css`
      height: 1rem;
      border-radius: 6px;
    `,
    MEDIUM: css`
      height: 1.5rem;
      border-radius: 8px;
    `,
    LARGE: css`
      height: 2rem;
      border-radius: 8px;
    `,
    X_LARGE: css`
      height: 3rem;
      border-radius: 8px;
    `,
  },
};
