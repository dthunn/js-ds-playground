var addTwoNumbers = function (l1, l2) {
  const sentinel = new ListNode(0)
  let curr = sentinel
  let carry = 0

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    const sum = carry + x + y

    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  return sentinel.next
}
