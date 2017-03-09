---
layout: post
title: Bi-directional asynchronous Haxe remoting
date: 2011-07-22 21:01:34.000000000 -07:00
type: post
published: true
status: publish
categories:
- HaXe
tags: []
meta:
  _edit_last: '1'
  layout: r
author:
  login: dionjwa
  email: dionjw@gmail.com
  display_name: dionjwa
  first_name: Dion
  last_name: Amago
---
[hydrax]: https://github.com/dionjwa/hydrax
[haxe]: http://haxe.org
[haxeremoting]: http://haxe.org/doc/remoting/0_introduction
[nodeexterns]: https://github.com/dionjwa/nodejs\_externs 
[pbe]: http://pushbuttonengine.com


[HaXe remoting][haxeremoting] is an incredibly powerful and flexible tool. However, it's missing asynchronous calls on the server.

Two examples where you might need this: 

- Flash <-> javascript communication.  For example, calling asynchronous javascript functions from Flash, such as when your Flash game wants to make Facebook API calls from javascript (this is often better or faster than waiting to use the Flash Facebook API).
- When Node.js is the remoting server.  Node.js is designed around asynchronous calls.  Having Node.js block until it finishes a potentially time-consuming remoting call defeats the purpose of using Node.js

I've added some extra asynchronous remoting classes in [hydrax][hydrax] that solves this problem.  I'll go though an example to illustrate how the classes are used.  In this case, I'll assume that the server is Node.js and the client is Flash or JS.

Firstly, we'll define a '*service*' that the server is offering to the client.  It's just an interface that defines the methods the client will call:

	interface RoomService
	{
		function getRoomNumber (cb :Int->Void) :Void;
	}

Note you are getting the result of this call from the callback function.

### On the client

The client will implement RoomService via extending *haxe.remoting.BiAsyncProxy*:

	class RoomServiceProxy extends BiAsyncProxy, implements RoomService
	{
		public function new (c :haxe.remoting.AsyncConnection)
		{
			super(c.resolve("roomservice"));
		}
	}
 
 
 Note that you *don't* need to manually add in the methods from the RoomService interface: BiAsyncProxy does it for you!
Thanks to haxe macros: it examines RoomService interface, extracts all the functions, and adds them to the RoomServiceProxy class, similar to haxe.remoting.AsyncProxy.  It's not strictly a *magic* class, but it works the same way.
 
### On the server
 
 
	class RoomManager implements RoomService
	{
		function getRoomNumber ( cb :Int->Void) :Void
		{
			//We'll assume the room number is 4.
			cb(4);
		}
	}
 
Then, in the server initialization:
 
 	var context = new Context();
 	
 	var roomService = new RoomManager();
	context.addObject("roomservice", roomService);
	
	//Add the context to the html connection handler
	var serviceHandler = new NodeJSHTMLConnection(context);
	
	
**That's it!**
 
Now you have **fully typed** asynchronous calls on both the client and server, and the client and server code is completely separate (useful for untrusted client code).
 
### Asynchronous flash <-> javascript 

This works much the same way, except you need to use this class in Flash:

	... = haxe.remoting.ExternalAsyncConnection.jsConnect("async", context);
	
The Flash-js async remoting connection stores the calls in a hash, when the callback is returned from javascript, it returns the original hash id that called it.

Enjoy!