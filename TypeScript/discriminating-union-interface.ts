//https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

interface NetworkStateInterface {
  state: NetworkStateType;
}

interface LoadingState extends NetworkStateInterface {
  state: NetworkStateType.Loading;
}

interface FailedState extends NetworkStateInterface {
  state: NetworkStateType.Failed;
  code: number;
}

interface SuccessState extends NetworkStateInterface {
  state: NetworkStateType.Success;
  response: {
    title: string;
    duration: number;
    summary: string;
  };
}

interface FromCacheState extends NetworkStateInterface {
  state: NetworkStateType.FromCached;
  id: string;
  response: SuccessState["response"];
}

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkStateWithInterface =
  | LoadingState
  | SuccessState
  | FailedState
  | FromCacheState;

function networkStatus(state: NetworkStateWithInterface): string {
  // Right now TypeScript does not know which of the three
  // potential types state could be.

  // Trying to access a property which isn't shared
  // across all types will raise an error
  //state.code;

  // By switching on state, TypeScript can narrow the union
  // down in code flow analysis
  switch (state.state) {
    case NetworkStateType.Loading:
      return "Downloading...";

    case NetworkStateType.Failed:
      // The type must be NetworkFailedState here,
      // so accessing the `code` field is safe
      return `Error ${state.code} downloading`;

    case NetworkStateType.Success:
      return `Downloaded ${state.response.title} - ${state.response.summary}`;

    case NetworkStateType.FromCached:
      return `Downloaded ${state.response.title} - ${state.response.summary}`;

    default:
      return assertNever(state);
  }
}
