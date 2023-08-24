---
title: "Installing arch linux"
slug: "installing-arch-linux"
topics: "Noobs" 
banner: "/posts/linked-list/banner.png"
date: "23-08-2023"
---

# Introduction
When it comes to installing operating systems, arch linux is one of the hardest ones (is not harder at all) to install. The problem is that there are many steps to follow and if you are not careful you can end up with a broken system. In this post I will show you how to install arch linux in a simple way `step by step`.

But first, let's talk about some requirements I will reccomend you to have before installing arch linux.

# Requirements
Is not neccesary to have a expert knowledge about the next terms, but I will reccomend you to have a basic knowledge about them.

**ISO**: Is a file that contains the operating system. 

**UEFI**: Is a firmware interface that is used to boot the operating system. If you have a new computer, you probably have UEFI.

**BIOS**: Is a firmware interface that is used to boot the operating system. If you have an old computer, you probably have BIOS.

**Filesytem**: Is a method for storing and organizing files and directories. The most common filesystems are: ext4, ntfs, fat32, etc.

**Partition**: Is a logical division of a hard disk that is treated as a separate unit by the operating system. The most common partitions are: primary, extended, logical, etc.

**Swap**: Is a space on a disk that is used when the amount of physical RAM memory is full.

**Basic linux commands**: Is a set of commands that are used to interact with the operating system. The most common commands are: ls, cd, mkdir, rm, etc.

**Nano/Vim**: Is a text editor that is used to edit files from the terminal.

There are more terms but these ones is important to understand since in this post we will not explain them in depth. Anyways, I will share some links where you can learn more about them in the bottom of the post.

# Preparing the installation
To install `Arch` first we need the arch iso. You can download it from the [official website](https://archlinux.org/download/). Once you have downloaded the iso, you need to burn it into a usb. You can use [Rufus](https://rufus.ie/) or [Balena etcher](https://www.balena.io/etcher/) to burn the iso into the usb.

Is not so important the usb size, but I will reccomend you to use a usb with at least 4GB of space. More than that is luxury usb and less than that is a little bit risky.

Once you have burned the iso into the usb, you need to plug it into the computer and boot it. To boot the usb you need to enter into the boot menu. To enter into the boot menu you need to press the key that is shown in the screen when you turn on the computer. The key is different for each computer, but the most common keys are: `F2`, `F8`, `F10`, `F12`, `ESC`, `DEL`, `SUPR`, etc.

It depends on your motherboard, but you will see a screen like this:

![boot-menu](/posts/installing-arch-linux/boot-menu.png)

Once you are in the boot menu, you need to change the boot order. To change it you need to set the usb as the first boot option and the other devices as the second boot option. Once it's changed you need to quit saving changes. It depends on the motherboard how to close the boot menu but normally is especified in one corner of the screen.

Once is closed the computer will restart from the usb meaning that we are running our `arch` iso. 

# Installing arch linux

So far so good, now we can feel like software engineers. But for now we only have a live version of arch linux. To install it we need to follow some steps.

### 1. Keyboard layout
If you try to write something and you are not using US keyboard layout, you will notice that the keys are not well mapped. To fix this we need to tell `arch` which is our keyboard layout. You could wondering which is your keyboard layout. Don't worry, if you don't know, probably you're using the one that is set on your country. If you want to check it on a more secure way try to search you keyboard model on google.

Once you know your keyboard layout, you need to set it using the next command: 

```bash
loadkeys <keyboard-layout>
```

For example, if you are using a spanish keyboard layout you need to run the next command:

```bash
loadkeys es
```

### 2. Internet connection
To install arch linux my personal recommendation is to use a wired connection. First, it's easier to configure and second, it's faster. If you still thinking in use a wireless connection go to your nearest walmart and buy a ethernet cable. Jokes aside, if you want to use a wireless connection you can follow the [official guide](https://wiki.archlinux.org/title/Network_configuration/Wireless).


