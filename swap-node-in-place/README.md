## Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

## Example 1

```
Given 1->2->3->4, you should return the list as 2->1->4->3.
```

#### Notes

* Your algorithm should use only constant extra space.
* You may not modify the values in the list's nodes, only nodes itself may be changed.

### Code

In this code, we need to add a dummy head to have the code run smoothly. so we build a node with the value of `0` and have it point its `next` to the `head` of the `linked-list`.  we start off in a `while loop` and we make sure that we have a  `node.next` and a `node.next.next`. If we have them, we start to repoint the nodes to the next places.

We set 2 new variables of `next_1` which looks at the `node.next` and `next_2` to the `next_1.next`.

## Example

```
0 -> 1(next_1 is this) -> 2(next_2 is this) -> 3(next_2.next is this one)
```

we then have `node` 3 that then points up to `node` 1, then have `node` 2 points up to `node` 0, then we have `node` 2 point down to `node` 1.  This keeps happening till there is no `node` after the current node they are at.

### Runtime: 52 ms
The runtime was in 100% catagory.


[Link to Swap Nodes in Pairs LeetCode](https://leetcode.com/problems/swap-nodes-in-pairs/)

```javascript
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
  ```
