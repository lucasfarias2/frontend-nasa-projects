import express from 'express';

declare global {
  export type TSelectedCards = ICard[];
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
    selectedItems: TSelectedCards;
  }

  export interface IComponent {
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
  }

  export interface ICard {
    id: string;
    lastUpdated: string;
  }
}
