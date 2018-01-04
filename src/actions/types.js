// @flow

export type Action =
  | { type: "LOGGING" }
  | { type: "LOGGED_IN", data: { id: string, name: string } }
  | { type: "LOGGING_ERROR", error: string }
  | { type: "LOGGED_OUT" };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
