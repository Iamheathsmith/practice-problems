'use strict';

let ListNode = require('./nodeBuilder')

module.exports = new class {
  swapPairs(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let node = dummy;

    while(node.next !== null && node.next.next !== null) {
      let next_1 = node.next;
      let next_2 = next_1.next;
      next_1.next = next_2.next;
      next_2.next = next_1;
      node.next = next_2;
      node = next_1;
    }
    return dummy.next;
  }
}
