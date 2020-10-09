/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let arr: number[] = [];
  lists.forEach((list) => {
    mergeListToArray(list, arr);
  });
  if (!arr.length) {
    return null;
  }
  arr.sort((a, b) => a - b);
  return generateListFromArray(arr);
}

function mergeListToArray(list: ListNode | null, arr: number[]) {
  let current = list;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
}

function generateListFromArray(arr: number[]): ListNode | null {
  let head = new ListNode();
  let current = head;
  arr.forEach((num) => {
    current.next = new ListNode(num);
    current = current.next;
  });
  return head.next;
}
