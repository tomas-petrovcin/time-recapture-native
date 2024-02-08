import { Theme } from './index.ts';

export const spacing =
  (...size: number[]) =>
  ({ theme }: { theme: Theme }) =>
    theme.spacing(...size);
