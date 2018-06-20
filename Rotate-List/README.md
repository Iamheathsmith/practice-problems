## Rotate List

Given a linked list, rotate the list to the right by k places, where k is non-negative.

## Example 1

```
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
```
## Example 2
```
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
```

### code

In this code, we are getting the last node and placing it at the front of the link list and keeps doing this till we hit the number of times that is asked from it from the `num` input. we then return the same linked list back adjuested for the rotate.

```javascript
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
  ```
