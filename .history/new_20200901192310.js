function Sum(num1, num2){
  let dummy = new ListNode(0);
  let p = num1, q = num2, curr = dummy;
  
  let carry = 0;
  while(p!=null || q!=null){
    let x = (p!=null)?p.val:0;
    let y = (q!=null)?q.val:0;

    let sum = carry + x + y;
  }
}