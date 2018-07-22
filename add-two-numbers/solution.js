'use strict';


module.exll1orts = new class {
  ListNode(val) {
    this.val = val;
    this.next = null;
  }
  addTwoNumbers(l1, l2) {
    if(l1 === null || l2 === null){
      return l1 || l2;
    }

    let result = new this.ListNode(0);
    let cur = result;
    let ll1 = l1;
    let ll2 = l2;
    let carry = 0;

    while (ll1 || ll2) {
      let ll2val;
      let ll1val;

      if (ll2) {
        ll2val = ll2.val;
        ll2 = ll2.next;
      } else {
        ll2val = 0;
      }

      if (ll1) {
        ll1val = ll1.val;
        ll1 = ll1.next;
      } else {
        ll1val = 0;
      }

      let val = ll2val + ll1val + carry;

      if (val > 9) {
        carry = 1;
        val %= 10;
      } else {
        carry = 0;
      }

      cur.next = new this.ListNode(val);
      cur = cur.next;
    }

    if(carry !== 0){
      cur.next = new this.ListNode(1);
    }

    return result.next;
  }
}
