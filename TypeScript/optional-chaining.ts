let foo: any
const x = foo?.bar.baz()
const y = foo === null || foo === undefined ? undefined : foo.bar.baz()

// Before
if (foo && foo.bar && foo.bar.baz) {
  // ...
}

// After-ish
if (foo?.bar?.baz) {
  // ...
}

/**
 * Get the first element of the array if we have an array.
 * Otherwise return undefined.
 */
function tryGetFirstElement<T> (arr?: T[]) {
  return arr?.[0]
  // equivalent to
  //   return (arr === null || arr === undefined) ?
  //       undefined :
  //       arr[0];
}
/**
 *
 * @param foo
 */
function barPercentage (foo?: { bar: number }) {
  if (foo) {
    return foo.bar / 100
  }
  // return foo?.bar / 100;
  //     ~~~~~~~~
  // Error: Object is possibly undefined.
}

const obj = {
  /** @deprecated */
  someOperation: () => {}
}

obj.someOperation()
