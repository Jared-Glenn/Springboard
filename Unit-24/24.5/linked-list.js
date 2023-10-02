/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let new_node = new Node(val);

    if (this.length === 0){
      this.head = new_node;
      this.tail = new_node;
    }
    else {
      this.tail.next = new_node;
      new_node.prev = this.tail
      this.tail = new_node
    }
    this.length++;
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let new_node = new Node(val);

    if (this.length === 0){
      this.head = new_node;
      this.tail = new_node;
    }
    else {
      this.head.prev = new_node;
      new_node.next = this.head
      this.head = new_node
    }
    this.length++;
  }


  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0){
      return null
    }
    else if (this.length === 1){
      const lastItem = this.head;
      this.head = null;
      this.length--;
      return lastItem
    }
    else {
      const poppedItem = this.tail;
      const newTail = this.tail.prev;
      this.tail = newTail;
      this.length--;
      return poppedItem;
    }
  }


  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0){
      return null
    }
    else if (this.length === 1){
      const lastItem = this.head;
      this.head = null;
      this.length--;
      return lastItem
    }
    else {
      const shiftedItem = this.head;
      const newHead = this.head.next;
      this.head = newHead;
      this.length--;
      return shiftedItem;
    }
  }


  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curr = this.head;

    for (let i = 0; i < idx; i++) {
      curr = curr.next;
      if (curr === null){
        return null;
      }
    }
    return curr;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
