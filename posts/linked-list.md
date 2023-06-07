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
