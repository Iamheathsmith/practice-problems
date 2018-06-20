'use strict';

module.exports = new class {
  rotateSLL(head, num) {
    if(!head || head.next === null) {
      return head;
    }

    let current = head;
    let temp = head;
    let end;
    let prev;
    let len = 0;

    while (temp) {
      temp = temp.next;
      len++;
    }

    for (let i = 0; i < (num % len); i++) {
      while (current) {
        if (current.next === null){
          end = current;
          break;
        }
        prev = current;
        current = current.next;
      }
      prev.next = null;
      end.next = head;
      head = end;
    }
    return head;
  }

}
