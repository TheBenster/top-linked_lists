class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    // create a new node
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // update the tail to point to the new node
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  size() {
    return this.length;
  }
  head() {
    return this.head;
  }
  tail() {
    return this.tail;
  }
  index(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let current = this.head;
    // iterate through the list until the index is reached
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  pop() {
    // if the list is empty, return undefined
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    // traverse the list until reaching the last element
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // update the tail to the new last element and remove the reference to the old last element
    this.tail = newTail;
    this.tail.next = null;

    // decrease the length of the list based on the number of elements removed
    this.length--;

    // if the list becomes empty after removing the last element, update the head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += current.value + " ";
      current = current.next;
    }
    return string;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
console.log(ll.toString()); // 1 2 3 4 5
ll.prepend(7);
console.log(ll.toString()); // 7 1 2 3 4 5
console.log(ll.size()); //6
ll.pop(4);
console.log(ll.index(4)); //Node { value: 4, next: null }
