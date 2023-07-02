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

### 1. Insertion
We may want to insert a new node in different ways. We can insert a node at the beginning of the list, at the end of the list, or at a specific position in the list. Let's implement all of these insertion methods inside our LinkedList class. 

### 1.1 Append

![Linked list](/posts/linked-list/append.png)

The append operation adds a new node at the end of the list. So we need to get the last node and set its next property to the new node. First we need to get the head node and iterate until we find the last node. Then we set the last node next property to the new node.

```javascript	
append(node) {
  let currNode = this.head 

  while ( currNode.next !== null ) { 
    currNode = currNode.next  
  }

  currNode.next = node
}  
```

### 1.2 Preppend

![Linked list](/posts/linked-list/preppend.png)

The prepend operation adds a new node at the beginning of the list. So we need to set the new node next property to the current head and set the new node as the new head.

```javascript
prepend(node) {
  node.next = this.head
  this.head = node
}
```

### 1.3 Insert at

![Linked list](/posts/linked-list/insertAt.png)

The insert at operation adds a new node at a specific position in the list. So we need to get the node at the position, let's name it `prev`. The new node next property will be the `prev` next property. Finally we need to set the `prev` next property to the new node.

We need to check if the position is 0, because if it is 0 we need to prepend the node. We also need to check if the position is out of bounds, because if it is we need to throw an error. Finally, we need to check if currNode is null, because if it is null we need to throw an error. This is to avoid for example indexing a node that doesn't exist.

```javascript
insertAt(node, pos) {
  if (pos === 0) {
    this.prepend(node)
    return
  }

  let currNode = this.head 

  if (this.head === null) {
    throw new Error('The list is empty')
  }
  
  for(let i = 0; i < pos && currNode; i++) {
    currNode = currNode.next
  }

  if (currNode === null) {
    throw new Error('New node index out of bounds')
  }

  node.next = currNode.next 
  currNode.next = nodeode
}
```

Okay, so we have our insertion methods. We could test them but for the moment trust me that they work and let's implement the deletion methods.

### 2. Deletion

![Linked list](/posts/linked-list/delete.png)

We can delete the first node, the last node, or a node at a specific position. Let's implement this deletion method on our LinkedList class.

We need to check if the position is 0, because if it is 0 we need to delete the first node. We also need to check if the position is out of bounds, because if it is we need to throw an error. Finally, we need to check if currNode is null, because if it is null we need to throw an error. This is to avoid for example indexing a node that doesn't exist.

```javascript
delete() {
  if (this.head === null) {
    throw new Error('The list is empty')
  }

  if (pos = 0) {
    this.head = this.head.next
    return 
  } 

  let currNode = this.head

  for(let i = 0; i < pos && currNode; i++) {
    currNode = currNode.next
  }

  if (currNode === null) {
    throw new Error('Node index out of bounds')
  }

  currNode.next = currNode.next.next
}
```

### 3. Traversal
Traversal is the procces of accesing each node in the list. We can traverse the list in different ways. We can traverse the list from the beginning to the end, or from the end to the beginning. Let's implement both of these traversal methods on our LinkedList class.

### 3.1 Forwards traverse (Beginning to end)

To traverse the list from the beginning to the end we need to get the head node and iterate until we find the last node. Then we print the value of each node. 

```javascript
traverse() {
  if (this.head === null) {
    throw new Error('The list is empty')
  }

  let currNode = this.head

  while(currNone.next !== null) {
    // Do anything you want here and set 
    // the next node

    console.log(currNode.value)
    currNode = currNode.next
  }
}
```

### 3.2 Backwars traverse (End to beginning)
To traverse our linked list backwards first we need to traverse our list forwards and store each node in an array. Then we need to iterate the array backwards and print the value of each node.

```javascript
traverseBackwards() {
  let currNode = this.head
  const nodes = []

  while(currNode.next !== null) {
    nodes.push(currNode)
    currNode = currNode.next
  }

  nodes = nodes.reverse()

  nodes.forEach(node => {
    // Do anything you want here
    // We're just printing the value
    console.log(node.value)
  })
}
```

As you can see we made a check to see if the head is null. This is because the head is our only entry point to the list. If the head is null the list is empty and we can't traverse it.

### 4. Search
The search of a node on a linked list depends much on the data structure that we're using to store data on the nodes. For example, if we're only storing numbers that can be accesed using the property value of the node we will be able to compare using node.value.

![Linked list example explanation](/posts/linked-list/search-explanation.png)

 But if we're storing deep objects or data based on many properties we will need to compare each property of the node with the data that we're looking for. I will not recommend using many properties to store data on a node. Instead I will create another class or data structure that will be stored on the value property on the node. 

> We will not implement since it depends on the data structure that we're using to store data on the nodes. And in our case will be a normal traversal comparing the value of each node with the data that we're looking for.
