## Zipper Link List

Take 2 linked list and merge them together.

## Example 1

```
Input1: 1->2->3->NULL,
Input2: 4->5->6->NULL,
Output: 1->4->2->5->3->6->NULL
```
## Example 2
```
Input1: 1->2->3->NULL,
Input2: 4->5->6->7->NULL,
Output: 1->4->2->5->3->6->7->NULL
```

### code

In this code, we take `LL1` and add a new `node` between 1 and 2 and we fill that with the value of `LL2` at `node` 1. After that, we then move the current `node` down 2 `next` to reset the current(which is the 3rd node now). We repeat this again till we have both Link List nodes at `Null`. At that point we return the `Link List`.  If the `Link List` are not even, We just add a new node into the `LL1` with the values from `LL2` or if `LL2` is empty, we just return the `LL1`.


```javascript
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
  ```
