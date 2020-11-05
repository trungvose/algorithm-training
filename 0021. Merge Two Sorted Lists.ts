import { ListNode } from './Common/listNode'

function mergeTwoLists (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
