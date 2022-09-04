/** Node: node for a singly linked list. */

console.log('vockchrewt')

debugger
console.log('het')
class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 10;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let nuNode = new Node(val)

    if(this.head = null){
      this.head = nuNode
    }else{
      nuNode.next = this.head
      this.head = nuNode
    }
    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {

  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head
    let count = 0

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    while(count != idx + 1){
      // console.log(currentNode.val)
      

      if(count == idx){
        console.log(currentNode, 'getat')
      }
      // console.log(currentNode)
      currentNode = currentNode.next
      count ++
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let prev = this._get(idx - 1);

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }



    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }



    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }

  // _get(idx) {
  //   let cur = this.head;
  //   let count = 0;

  //   while (cur !== null && count != idx) {
  //     console.log(idx, count)
  //     count += 1;
  //     cur = cur.next;

  //   }

  //   return cur;
  // }


}

// let x = new Node('N0', 
//   new Node('N1',
//     new Node('N2', 
//       new Node('N3', 
//         new Node('N4')))))

let operation = new LinkedList()

// operation.head = x



operation.push('wakamanga')
operation.getAt(5)




module.exports = LinkedList;
