function Sum(num1, num2){
  let dummy = new ListNode(0);
  let p = num1, q = num2, curr = dummy;
  
  var carry = 0;
  while(p!=null || q!=null){
    let x = (p!=null)?p.val:0;
    let y = (q!=null)?q.val:0;

    let sum = carry + x + y;

    carry = sum/10;

    curr.next = new ListNode(sum%10);
    curr = curr.next;
    if (p!=null) {
      p=p.next;
    }
    if (q!=null) {
      q = q.next;
    }
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummy.next
}