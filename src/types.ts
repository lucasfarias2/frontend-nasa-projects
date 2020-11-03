import express from 'express';

declare global {
  export type TSelectedCards = number[];
  export type TWindow = typeof window & {
    __PRELOADED_STATE__: object;
  };

  export interface IResponse extends express.Response {
    renderView: (View: React.FunctionComponent, props?: any) => void;
  }

  export interface IRequest extends express.Request {
    req: Request;
  }

  export interface IInitialState {
    cards: ICard[];
    selectedCards: TSelectedCards;
    currentPage: number;
  }

  export interface IComponent {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    initialState?: IInitialState;
  }

  export interface IAction {
    type: string;
    payload?: { card?: ICard };
  }

  export interface IState {
    cards: ICard[];
    selectedCards?: TSelectedCards;
    currentPage: number;
  }

  export interface ICard {
    id: number;
    lastUpdated: string;
    title: string;
    status: string;
    startDate: string;
    endDate: string;
    description: string;
    selectCard?: (cardId: number) => void;
    unselectCard?: (cardId: number) => void;
  }
}
