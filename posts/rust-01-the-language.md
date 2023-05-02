---
title: "Rust: 01 The language"
slug: "rust-01-the-language"
topics: "Rust 🦀 & Beginners" 
banner: "/posts/rust-01-the-language/rust-the-language.png"
date: "05-04-2023"
---

# Why `Rust`?
In the last few years everyone has been talking about Rust. But why? What is so special about this language? In this series I will try to answer these questions and give you a good overview of the language. In this first part I will talk about the language itself and what makes it so special.

Rust is a high-level programming lenguage. [On their page](https://www.rust-lang.org/) they describe it as "Blazingly fast, safe and well documented (compiler errors are great!)". Later in this post I will explain what they mean with these statements. But first I want to talk about the history of the language. 

# History 
Rust was created by Graydon Hoare in 2006. He was working on the Mozilla project and wanted to create a new language that would be able to replace C and C++. He wanted to create a language that would be able to handle concurrency and memory safety. In 2010 he started working on the language full-time and in 2012 he released the first version of the language. In 2015 the language was released as stable with the version 1.0. 

# Who uses `Rust`?
Everyday we listen about new software that is written in Rust. Some of the most popular projects are (On the [rust docs](https://www.rust-lang.org/production/users) they talk more about who uses Rust and why they use it.): 
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Cloudflare](https://www.cloudflare.com/)
- [Warp](https://www.warp.dev/)
- [Dropbox](https://www.dropbox.com/)
- [Figma](https://www.figma.com/)

# Blazingly fast ⚡
Blazingly fast is a statement that is often used to describe Rust. But what does it mean? Rust is a compiled language. This means that the code is compiled to machine code. This is a lot faster than an interpreted language like JavaScript. In addition, Rust is a statically typed language. This means that the compiler knows the type of every variable. This makes it possible to optimize the code even more. Also Rust has Zero overhead abstractions, this means that Rust let us use abstractions without any performance penalty.

# Safe 🔒
Rust is a safe language, but what does that exactly mean? Rust is a memory safe language. This means that the compiler checks if we are using the memory correctly and force us to use it correctly even if we are amateurs and inexperienced. Rust doesn't let us to pull inentended data from memory. This is a big problem in C and C++ because they don't have a memory safe system. 

To show better what I mean let's image and example where we have a notes app. And in this notes app we can add a note, delete a note and edit a note. Let's imagine that we removed a note but our app for some reason still have acces to that memory location. This will end up with us pulling the data from the memory address and displaying it or overwriting it with new data. This is a big problem because we are pulling unintended data from memory. This error is also knows as [use-after-free](https://en.wikipedia.org/wiki/Use-after-free). Rust prevents this by using a system called [ownership](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). 

# To Summarize
In this post I talked about the history of Rust, who uses Rust and what makes Rust so special. In the next post I will talk about the syntax of Rust. I will cover the basics of the language and show you how to write your first Rust program.

# Resources
- [Rust docs](https://www.rust-lang.org/)
- [Rust book](https://doc.rust-lang.org/book/)
