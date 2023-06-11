import { ReactNode } from 'react';

export type TNavMenuItem = {
  readonly _id: number;
  href: string;
  content: ReactNode;
};
