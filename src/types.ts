import express from 'express';

declare global {
  export type TCard = string;
  export type TSelectedCards = TCard[];
  export type TData = TCard[];
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
    data: TData;
    selectedItems: TSelectedCards;
  }

  export interface IComponent {
    children?: React.ReactNode;
    className?: string;
    initialState?: IInitialState;
  }

  export interface IAction {
    type: string;
    payload?: { card?: TCard; };
  }

  export interface IState {
    data: TData;
    selectedCards?: TSelectedCards;
  }
}
