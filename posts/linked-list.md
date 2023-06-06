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

- Singly linked list: Each node contains only one pointer to the next node. 
- Doubly linked list: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
- Circular singly linked list: Each node contains only one pointer to the next node. The last node points to the first node.
- Circular doubly linked list: Each node contains two pointers, a pointer to the next node and a pointer to the previous node. The last node points to the first node.

# Why we would use a linked list?

Linked lists are used to implement many things. For example, the browser history is possible thanks to linked lists.