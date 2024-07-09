class node{
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class ll {
  constructor(val) {
    let n = new node(val);
    this.head = n;
  }
  append(val) {
    let n = new node(val);
    let curr = this.head;
    if(curr.next === null) { curr.next = n;}
    else { 
      while(curr.next != null){
        curr= curr.next;
      }
      curr.next = n;
      console.log(curr.next);
    }
    return "success";
  }
  display() {
    let curr = this.head;
    while(curr) {
      process.stdout.write(`->${curr.data} `);
      curr = curr.next;
    }
  }
}

const l = new ll(10);
l.append(9);
l.append(8)
l.display();
