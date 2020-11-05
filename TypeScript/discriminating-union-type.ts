// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

enum NetworkStateType {
  Loading,
  Failed,
  Success,
  FromCached,
}

type NetworkLoadingState = {
  state: NetworkStateType.Loading;
};

type NetworkFailedState = {
  state: NetworkStateType.Failed;
  code: number;
};

type NetworkSuccessState = {
  state: NetworkStateType.Success;
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkFromCachedState = {
  state: NetworkStateType.FromCached;
  id: string;
  response: NetworkSuccessState['response'];
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NetworkFromCachedState;

function networkStatus (state: NetworkState): string {
  // Right now TypeScript does not know which of the three
  // potential types state could be.

  // Trying to access a property which isn't shared
  // across all types will raise an error
  // state.code;

  // By switching on state, TypeScript can narrow the union
  // down in code flow analysis
  switch (state.state) {
    case NetworkStateType.Loading:
      return 'Downloading...'

    case NetworkStateType.Failed:
      // The type must be NetworkFailedState here,
      // so accessing the `code` field is safe
      return `Error ${state.code} downloading`

    case NetworkStateType.Success:
      return `Downloaded ${state.response.title} - ${state.response.summary}`

    case NetworkStateType.FromCached:
      return `Downloaded ${state.response.title} - ${state.response.summary}`

    default:
      return assertNever(state)
  }
}

// Union Exhaustiveness checking
function assertNever (x: never): never {
  throw new Error('Unexpected object: ' + x)
}
