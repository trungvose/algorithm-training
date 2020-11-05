// https://leetcode.com/problems/merge-k-sorted-lists/

import { ListNode } from './Common/listNode'

function mergeKLists (lists: Array<ListNode | null>): ListNode | null {
  const arr: number[] = []
  lists.forEach((list) => {
    mergeListToArray(list, arr)
  })
  if (!arr.length) {
    return null
  }
  arr.sort((a, b) => a - b)
  return generateListFromArray(arr)
}

function mergeListToArray (list: ListNode | null, arr: number[]) {
  let current = list
  while (current) {
    arr.push(current.val)
    current = current.next
  }
}

function generateListFromArray (arr: number[]): ListNode | null {
  const head = new ListNode()
  let current = head
  arr.forEach((num) => {
    current.next = new ListNode(num)
    current = current.next
  })
  return head.next
}
