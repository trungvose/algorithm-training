export function minOperations (logs: string[]): number {
  const deep = logs.reduce((sum, path) => sum + next(path, sum), 0)
  return deep < 0 ? 0 : deep

  function next (path: string, currentDeep: number): number {
    if (path.endsWith('../')) {
      return currentDeep ? -1 : 0
    } else if (path.endsWith('./')) {
      return 0
    } else if (path.endsWith('/')) {
      return 1
    }
    return 0
  }
}
