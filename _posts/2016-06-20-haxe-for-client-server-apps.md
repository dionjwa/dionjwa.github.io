---
title: Haxe for client/server applications
layout: post
---

<style type="text/css">
td {
	padding: 0px 10px;
}
table {
	font-size: 12px;
	text-align: left;
}
</style>

Server-side javascript is growing in popularity, partly due to ease of writing javascript server code and running in Node.js. This community growth is partly fueled by the sudden influx of client-side javascript developers, contributing to the very large number of third party libraries, and the ease of integration of those libraries (npm).

Companies are moving thier computation infrastructure to the cloud, focusing on providing APIs, allowing developers to integrate their services with other tools, for example Autodesk's [Forge Platform](http://forge.autodesk.com/).

One of the limitations of the ubiquity of Javascript on the server and the client is that Javascript source is typically not compiled. The lack of compilation means that code can become harder to maintain, refactor, and extend the larger the codebase becomes.

In addition, providing APIs often means providing clients, or client libraries to help interact with interrelated APIs.

The Haxe toolkit solves these problems, as well as providing numerous other advantages. I propose the Haxe toolkit fits extrememly well into an environment where services are built with Node.js, and clients in multiple languages are to interact with those services. Haxe also buffers your code from the often-changing technology landscape.

## What is [Haxe](http://http://haxe.org/#learn-more/)?

[Haxe](http://http://haxe.org/#learn-more/) is an open source language and toolkit. The language is inspired from Javascript and Actionscript (Flash). The Haxe toolkit has *multiple compilers*, meaning you write in one language, and you export directly to multiple languages:

Currently, Haxe compiles to the following targets:

|-----+------+---------------+-----+-----------+------|
|**Name** | **Kind** | **Static typing** | **Sys** | **Use Cases** | **Since**|
|Flash | byte code | Yes | No | Games, Mobile | alpha (2005) |
|Neko | byte code | No | Yes | Web, CLI | alpha (2005) |
|JavaScript | source | No | No | Web, Desktop, API | beta (2006) |
|ActionScript 3 | source | Yes | No | Games, Mobile, API | 1.12 (2007) |
|PHP | source | No | Yes | Web | 2.0 (2008) |
|C++ | source | Yes | Yes | Games, CLI, Mobile, Desktop | 2.04 (2009) |
|Java | source | Yes | Yes | CLI, Mobile, Desktop | 2.10 (2012) |
|C# | source | Yes | Yes | Mobile, Desktop | 2.10 (2012) |
|Python | source | No | Yes | CLI, Web, Desktop | 3.2 (2015) |
|Lua | source | No | Yes | Games, CLI, Web, Desktop | 3.3 (2016) |
| |  |  |  |  | [Source](http://haxe.org/documentation/introduction/compiler-targets.html) |


Why Haxe and not e.g. Coffeescript or Typescript (or plain Javascript)? A more detailed answer is provided by [Andy Li](http://blog.onthewings.net/2015/08/05/typescript-vs-haxe/), but in short: Haxe provides far more useful language features, and it is more mature, and has compile time type checking that is invaluable in large code-bases. It has the added bonus that we could build multiple clients in different languages (e.g. Python or native binaries) if needed (the server would be more difficult due to the reliance on third party libraries).

Although Haxe has many [very useful language features](http://haxe.org/manual/lf.html), the most important features here are:

	1) Powerful built-time macros, allowing compile-checked API communication
	2) Multiple compiler outputs, including Javascript

### 1) Build macros and automatic boilerplate code generation

[Haxe's macro system](http://haxe.org/manual/macro.html) is very powerful, but a complete description of what they can do is beyond this scope of this blog.

I will focus on one aspect of macros: building compiled code from other code.

We have a server that provides an API:

{% highlight javascript %}
//This code runs on the server
class MyServer
{
	//Server method for an API endpoint:
	@rpc({
		alias: 'banana',
		doc: 'Return an appropriate banana'
	})
	public function giveMeABanana(userId :String, money :Int) :Promise<String>
	{
		//In a real server, using the user id, we would call into a database,
		//subtract money, then return a special banana.
		//But for this example, we're just going to return a value.
		return Promise.promise('$userId-banana');
	}
}
{% endhighlight %}

This code is running in some Node.js server, and we would like to build a client that accesses this API.

With the [haxe-json-rpc library](https://github.com/dionjwa/haxe-json-rpc) we can automatically create client code (note that the haxe-json-rpc library is not complicated, and could easily be modified to support any transport mechanism such as protocol buffers or messagepack):


{% highlight javascript %}
//This code runs on the client
import t9.remoting.jsonrpc.Macros;
import t9.remoting.jsonrpc.JsonRpcConnectionHttpPost;

class MyClient

	//We're assuming our server is running at `myserver.com:8000`
	var _rpcUrl = 'myserver.com:8000';
	var _myUserId = 'user1';

	public function getMyBanana(money :Int) :Promise<String>
	{
		var proxy = Macros.buildRpcClient(MyServer)
			.setConnection(new JsonRpcConnectionHttpPost(rpcUrl));
		return proxy.giveMeABanana(_myUserId, money);
	}
}
{% endhighlight %}

The 'proxy' class is generated at **compile** time. The methods that it calls `proxy.giveMeABanana(...)` have all the function arguments checked, and if there is a mismatch or missing arguments, the code will not compile, and you will get a useful error.

This means as you add more API methods to your server, your client code is automatically generated and checked against the new API. There is no need to touch the client interface libraries.

Under the hood, the function calls are turned into JSON-RPC and pushed over the wire:

{% highlight javascript %}
{
	jsonrpc:"2.0",
	id: "_",
	method: "banana",
	params: {"userId":"user1", "money":10}
}
{% endhighlight %}


### 2) So many compile targets

Not only is the client code automatically generated, but it can be generated for multiple languages at the same time.

To do this, just add your compile target to the *.hxml* file, and you will see the code, or executables:

{% highlight sh %}
--next

# javascript
common.hxml
--js build/javascript_client.js

--next

# python
common.hxml
--python build/python_client.js

--next

# C++
common.hxml
--cpp build/cpp_client

{% endhighlight %}



## Conclusion

This demonstrates some of the power that the Haxe toolkit provides:

 - Flexibility: write code for multiple platforms without losing the power of a compiler.
 - Future proofing: as new platforms become available, the Haxe toolkit can target them.
 - More robust code: compiler prevent simple errors, and make maintenance (e.g. refactoring) of large code bases much easier.
 - Performance: function inline may not available on the target platform itself (e.g. Javascript in Node.js).




