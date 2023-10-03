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
      this.tail = null;
      this.length--;
      return lastItem.val
    }
    else {
      const poppedItem = this.tail;
      const newTail = this.tail.prev;
      this.tail = newTail;
      this.length--;
      return poppedItem.val;
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
      this.tail = null;
      this.length--;
      return lastItem.val;
    }
    else {
      const shiftedItem = this.head;
      const newHead = this.head.next;
      this.head = newHead;
      this.length--;
      return shiftedItem.val;
    }
  }


  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curr = this.head;

    for (let i = 0; i < idx; i++) {
      if (curr === null){
        return "Index not found.";
      }
      curr = curr.next;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curr = this.head;

    for (let i = 0; i < idx; i++) {
      if (curr === null){
        return "Index not found.";
      }
      curr = curr.next;
    }
    curr.val = val;
    return curr.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    
    let curr = this.head;

    if (idx === (this.length)){
      this.push(val);
    }

    for (let i = 0; i < idx; i++) {
      if (curr === null){
        return null;
      }
      curr = curr.next;
    }

    if (curr === null){
      return null;
    }

    if (curr.prev !== null){
      const nextNode = curr;
      const prevNode = curr.prev;
      
      const newNode = new Node(val);
      newNode.next = nextNode;
      newNode.prev = prevNode;

      nextNode.prev = newNode;
      prevNode.next = newNode;

      this.length++;
      return newNode.val;
    }
    else {
      const nextNode = curr;

      const newNode = new Node(val);
      newNode.next = nextNode;

      nextNode.prev = newNode;

      this.length++;
      return newNode.val;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let curr = this.head;

    if (idx === 0 && this.length !== 0){
      this.shift();
    }

    for (let i = 0; i < idx; i++) {
      if (curr === null){
        return null;
      }
      curr = curr.next;
    }

    if (curr.next !== null && curr.prev !== null){
      const prevNode = curr.prev;
      const nextNode = curr.next;

      nextNode.prev = prevNode;
      prevNode.next = nextNode;
      this.length--;
    }
    else if (curr.next !== null) {
      const nextNode = curr.next;

      nextNode.prev = null;
      this.length--;
    }
    else if (curr.prev !== null) {
      const prevNode = curr.prev;

      prevNode.next = null;
      this.length--;
    }

    return curr.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let curr = this.head;
    let sum = 0;

    if (this.length === 0){
      return 0;
    }

    while (curr !== null) {
      sum += curr.val;
      curr = curr.next;
    }

    const ave = sum/(this.length)

    return ave;
  }
}

// module.exports = LinkedList;
