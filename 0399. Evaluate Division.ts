export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  let result: number[] = [];
  let graph = new Graph(equations, values);
  for (const [first, second] of queries) {
    let firstNode = graph.getNode(first);
    let secondNode = graph.getNode(second);
    result.push(dfs(firstNode, secondNode, 1));
    graph.resetState();
  }

  return result;

  function dfs(
    start: GraphNode | undefined,
    end: GraphNode | undefined,
    product: number
  ): number {
    if (!start || !end) {
      return -1;
    }
    if (start.value === end.value) {
      return product;
    }

    start.visiting();
    for (let [neighbor, weight] of start.neighbors) {
      if (neighbor.isUnvisited) {
        let retVal = dfs(neighbor, end, product * weight);
        if (retVal !== -1) {
          return retVal;
        }
      }
    }
    start.visited();
    return -1;
  }
}

class Graph {
  private _graph = new Map<string, GraphNode>();
  constructor(equations: string[][], values: number[]) {
    this.buildGraph(equations, values);
  }

  getNode(value: string): GraphNode | undefined {
    return this._graph.get(value);
  }

  buildGraph(equations: string[][], values: number[]): void {
    for (let i = 0; i < equations.length; i++) {
      let [first, second] = equations[i];
      let value = values[i];
      if (!this._graph.has(first)) {
        this._graph.set(first, new GraphNode(first));
      }
      if (!this._graph.has(second)) {
        this._graph.set(second, new GraphNode(second));
      }
      this._graph.get(first)?.setNeighbor(this._graph.get(second)!, value);
      this._graph.get(second)?.setNeighbor(this._graph.get(first)!, 1 / value);
    }
  }

  resetState() {
    this._graph.forEach((value) => {
      value.unvisited();
    });
  }
}

class GraphNode {
  value: string;
  state: GraphNodeState;
  neighbors: Map<GraphNode, number>;

  constructor(value: string) {
    this.value = value;
    this.state = GraphNodeState.NotYet;
    this.neighbors = new Map<GraphNode, number>();
  }

  setNeighbor(node: GraphNode, value: number) {
    this.neighbors.set(node, value);
  }

  get isUnvisited() {
    return this.state === GraphNodeState.NotYet;
  }

  unvisited() {
    this.state = GraphNodeState.NotYet;
  }

  visiting() {
    this.state = GraphNodeState.Visiting;
  }

  visited() {
    this.state = GraphNodeState.Visited;
  }
}

enum GraphNodeState {
  NotYet,
  Visiting,
  Visited,
}
