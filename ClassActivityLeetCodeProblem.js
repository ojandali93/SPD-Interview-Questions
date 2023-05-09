// Add two numbers

// Pseudocode

// create a new link list
// set a variable that tracks the head
// create a varuable that tracks the sum 
// create a variable that racks the carry
// cycle thorugh each of the linked list
  // if there is value at the current position for each link list
    // sum the values at both positions 
    // set the summed value as the value in the current node of the new link list
// return the new link list

// Code
var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;
  while(list1 !== null || list2 !== null || sum > 0){
      if (list1 !== null) {
          sum += list1.val;
          list1 = list1.next;
      }
      if (list2 !== null) {
          sum += list2.val;
          list2 = list2.next;
      }
      if (sum >= 10) {
          carry = 1;
          sum -= 10;
      }
      head.val = sum;
      if (list1 !== null || list2 !== null || carry > 0) {
          head.next = new ListNode(carry);
          head = head.next;
      }
      sum = carry;
      carry = 0;
  }
  return List;
};