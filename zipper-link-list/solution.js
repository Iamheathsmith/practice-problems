'use strict';

const Nd = require('./nodeBuilder');

module.exports = new class {
  zipTwoSLL(head1, head2) {

    let head = head1;
    let current = head1;
    let nextNode = head2;
    let temp;

    while (current) {
      if (current.next !== null && nextNode === null) {
        return head;
      }

      if (current.next === null && nextNode === null) {
        return head;
      }

      if (current.next === null && nextNode.next !== null) {
        current.next = new Nd(nextNode.value);
        nextNode = nextNode.next;
        current = current.next;
      }
      temp = current.next;
      current.next = new Nd(nextNode.value);
      current.next.next = temp;
      nextNode = nextNode.next;
      current = current.next.next;
    }
    return head;
  }
}
