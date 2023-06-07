---
title: "Data Structures 01: Linked List"
slug: "linked-list"
topics: "Data Structures & Basics" 
banner: "/posts/linked-list/banner.png"
date: "06-06-2023"
---

# Data Structures series
Let's start this data structures series with one of the most basic data structure. We will be talking about Linked Lists, what they are, how they work, and how to implement them in JavaScript. 

# What is a Linked List?
A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list (it can also contain the reference to the previous node).

A linked list should look like something like this. Where each letter represents a node and the lines represent the links between the nodes. 

![Linked list](/posts/linked-list/linked-list.png)

As you can see, each node has a value and a pointer to the next node. The last node has a pointer to null, which means that it is the last node in the list. 

# Linked list types

There are four key types of linked lists:

- __Singly linked list__: Each node contains only one pointer to the next node. 

![Linked list](/posts/linked-list/singly-linked-list.png)

- __Doubly linked list__: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

![Linked list](/posts/linked-list/doubly-linked-list.png)

- __Circular singly linked list__: Each node contains only one pointer to the next node. The last node points to the first node.

![Linked list](/posts/linked-list/circular-linked-list.png)

- __Circular doubly linked list__: Each node contains two pointers, a pointer to the next node and a pointer to the previous node. The last node points to the first node. This type of linked list requires a head attribute on the Node type to keep track of the first node.

![Linked list](/posts/linked-list/circular-doubly-linked-list.png)

# Linked list operations
There are a few operations that we can perform on a linked list. The operations are:

- __Insertion__: Adds an element at the beginning of the list.
- __Deletion__: Deletes an element at the beginning of the list.
- __Traversal__: Acces each element of the list.
- __Search__: Search for an element in the list.
- __Update__: Update the value of an element in the list.
- __Sort__: Sort the list. (This is not a trivial operation because the type of the Node value can be anything, so we can't just use a sorting algorithm to sort the list.)

# Linked list implementations
Let's implement our own linked list in JavaScript. We can acces the code in this [Github repository](https://github.com/noreplydev/linked-list).

# Singly linked list
Okay so let's remind ourselves what a singly linked list looks like. As we see in the image below, each node has a value and a pointer to the next node. The last node has a pointer to null, which means that it is the last node in the list. So lets create a Node class that implements this attributes.

![Linked list](/posts/linked-list/singly-linked-list.png)

### Node class
First, we need to create a Node class. This class will represent each node in the linked list. 

```javascript
// ./Node.js

export class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
```

### LinkedList class

Okay so we have our Node class, but we need the whole chain of nodes structure so let's create a LinkedList class that will represent the whole linked list.

```javascript
// ./LinkedList.js

export class LinkedList {
  constructor() {
    this.head = null
  }
}
```

So far so good, we have our two classes, but we need to implement the operations that we talked about earlier. So let's start with the insertion operation.

### Insertion
We may want to insert a new node in different ways. We can insert a node at the beginning of the list, at the end of the list, or at a specific position in the list. Let's implement all of these insertion methods inside our LinkedList class. 

```javascript	
// Append operation []--[]--[]--[new node] 

append(node) {
  let currNode = this.head // Get the first node

  // Iterate until we find the last node
  while ( currNode.next !== null ) { 
    currNode = currNode.next  
  }

  // and set currNode next property to the new one
  currNode.next = node
}  
```

```javascript
// Prepend operation [new node]--[]--[]--[]
prepend(node) {
  // the new node next property will be the current head
  node.next = this.head
  // and the new node will be the new head
  this.head = node
}

```

```javascript
// Insert at operation []--[]--[new node]--[]--[]

insertAt(node, pos) {
  // If the position is 0, we just need to prepend the node
  if (pos === 0) {
    this.prepend(node)
    return
  }

  // Get the first node
  let currNode = this.head 

  // Iterate until we find the previous node at the position. 
  // '&& currNode' is to avoid errors if the position is out of bounds
  for(let i = 0; i < pos && currNode; i++) {
    currNode = currNode.next
  }

  // If we didn't find the node, throw an error
  if (currNode === null) {
    throw new Error('New node index out of bounds')
  }

  // first update the new node next property
  // then update the previous node next property
  node.next = currNode.next 
  currNode.next = node
}
```

Okay, so we have our insertion methods. We could test them but for the moment trust me that they work and let's implement the deletion methods.