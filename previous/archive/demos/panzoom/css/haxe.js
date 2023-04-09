$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof com=='undefined') com = {}
if(!com.pblabs) com.pblabs = {}
if(!com.pblabs.components) com.pblabs.components = {}
if(!com.pblabs.components.tasks) com.pblabs.components.tasks = {}
com.pblabs.components.tasks.IEntityTask = function() { }
com.pblabs.components.tasks.IEntityTask.__name__ = ["com","pblabs","components","tasks","IEntityTask"];
com.pblabs.components.tasks.IEntityTask.prototype.clone = null;
com.pblabs.components.tasks.IEntityTask.prototype.update = null;
com.pblabs.components.tasks.IEntityTask.prototype.__class__ = com.pblabs.components.tasks.IEntityTask;
com.pblabs.components.tasks.InterpolatingTask = function(time,easingFn) { if( time === $_ ) return; {
	if(time == null) time = 0;
	this._totalTime = Math.max(time,0);
	this._easingFn = ((easingFn != null?easingFn:$closure(feffects.easing.Linear,"easeNone")));
	this._elapsedTime = 0;
}}
com.pblabs.components.tasks.InterpolatingTask.__name__ = ["com","pblabs","components","tasks","InterpolatingTask"];
com.pblabs.components.tasks.InterpolatingTask.interp = function(a,b,t,duration,easingFn) {
	if(duration <= 0) {
		return b;
	}
	t = ((t < 0)?0:((t > duration)?duration:t));
	return easingFn(t,a,(b - a),duration);
}
com.pblabs.components.tasks.InterpolatingTask.prototype._easingFn = null;
com.pblabs.components.tasks.InterpolatingTask.prototype._elapsedTime = null;
com.pblabs.components.tasks.InterpolatingTask.prototype._totalTime = null;
com.pblabs.components.tasks.InterpolatingTask.prototype.clone = function() {
	return new com.pblabs.components.tasks.InterpolatingTask(this._totalTime,this._easingFn);
}
com.pblabs.components.tasks.InterpolatingTask.prototype.interpolate = function(a,b) {
	return com.pblabs.components.tasks.InterpolatingTask.interp(a,b,this._elapsedTime,this._totalTime,this._easingFn);
}
com.pblabs.components.tasks.InterpolatingTask.prototype.update = function(dt,obj) {
	this._elapsedTime += dt;
	return (this._elapsedTime >= this._totalTime);
}
com.pblabs.components.tasks.InterpolatingTask.prototype.__class__ = com.pblabs.components.tasks.InterpolatingTask;
com.pblabs.components.tasks.InterpolatingTask.__interfaces__ = [com.pblabs.components.tasks.IEntityTask];
com.pblabs.components.tasks.AnimatePropertyTask = function(ref,targetValue,time,easingFn) { if( ref === $_ ) return; {
	if(time == null) time = 0;
	com.pblabs.components.tasks.InterpolatingTask.apply(this,[time,easingFn]);
	if(null == ref) {
		throw "ref must be non null, and must contain a 'value' property";
	}
	this._to = targetValue;
	this._valueRef = ref;
}}
com.pblabs.components.tasks.AnimatePropertyTask.__name__ = ["com","pblabs","components","tasks","AnimatePropertyTask"];
com.pblabs.components.tasks.AnimatePropertyTask.__super__ = com.pblabs.components.tasks.InterpolatingTask;
for(var k in com.pblabs.components.tasks.InterpolatingTask.prototype ) com.pblabs.components.tasks.AnimatePropertyTask.prototype[k] = com.pblabs.components.tasks.InterpolatingTask.prototype[k];
com.pblabs.components.tasks.AnimatePropertyTask.CreateLinear = function(ref,targetValue,time) {
	return new com.pblabs.components.tasks.AnimatePropertyTask(ref,targetValue,time,$closure(feffects.easing.Linear,"easeNone"));
}
com.pblabs.components.tasks.AnimatePropertyTask.CreateSmooth = function(ref,targetValue,time) {
	return new com.pblabs.components.tasks.AnimatePropertyTask(ref,targetValue,time,$closure(feffects.easing.Cubic,"easeInOut"));
}
com.pblabs.components.tasks.AnimatePropertyTask.CreateEaseIn = function(ref,targetValue,time) {
	return new com.pblabs.components.tasks.AnimatePropertyTask(ref,targetValue,time,$closure(feffects.easing.Cubic,"easeIn"));
}
com.pblabs.components.tasks.AnimatePropertyTask.CreateEaseOut = function(ref,targetValue,time) {
	return new com.pblabs.components.tasks.AnimatePropertyTask(ref,targetValue,time,$closure(feffects.easing.Cubic,"easeOut"));
}
com.pblabs.components.tasks.AnimatePropertyTask.prototype._from = null;
com.pblabs.components.tasks.AnimatePropertyTask.prototype._to = null;
com.pblabs.components.tasks.AnimatePropertyTask.prototype._valueRef = null;
com.pblabs.components.tasks.AnimatePropertyTask.prototype.clone = function() {
	return new com.pblabs.components.tasks.AnimatePropertyTask(this._valueRef,this._to,this._totalTime,this._easingFn);
}
com.pblabs.components.tasks.AnimatePropertyTask.prototype.update = function(dt,obj) {
	if(0 == this._elapsedTime) {
		this._from = obj.getProperty(this._valueRef);
		if(Math.isNaN(this._from)) {
			throw "_valueRef must be non null, and must be a numerical property.";
		}
	}
	com.pblabs.components.tasks.InterpolatingTask.prototype.update.apply(this,[dt,obj]);
	obj.setProperty(this._valueRef,this.interpolate(this._from,this._to));
	return (this._elapsedTime >= this._totalTime);
}
com.pblabs.components.tasks.AnimatePropertyTask.prototype.__class__ = com.pblabs.components.tasks.AnimatePropertyTask;
com.pblabs.components.tasks.AngleTask = function(angle,time,easingFn,ref) { if( angle === $_ ) return; {
	if(time == null) time = 0;
	com.pblabs.components.tasks.AnimatePropertyTask.apply(this,[(ref == null?com.pblabs.components.base.AngleComponent.P_ANGLE:ref),angle,time,easingFn]);
}}
com.pblabs.components.tasks.AngleTask.__name__ = ["com","pblabs","components","tasks","AngleTask"];
com.pblabs.components.tasks.AngleTask.__super__ = com.pblabs.components.tasks.AnimatePropertyTask;
for(var k in com.pblabs.components.tasks.AnimatePropertyTask.prototype ) com.pblabs.components.tasks.AngleTask.prototype[k] = com.pblabs.components.tasks.AnimatePropertyTask.prototype[k];
com.pblabs.components.tasks.AngleTask.CreateLinear = function(angle,time) {
	return new com.pblabs.components.tasks.AngleTask(angle,time,$closure(feffects.easing.Linear,"easeNone"));
}
com.pblabs.components.tasks.AngleTask.CreateSmooth = function(angle,time) {
	return new com.pblabs.components.tasks.AngleTask(angle,time,$closure(feffects.easing.Cubic,"easeInOut"));
}
com.pblabs.components.tasks.AngleTask.CreateEaseIn = function(angle,time) {
	return new com.pblabs.components.tasks.AngleTask(angle,time,$closure(feffects.easing.Cubic,"easeIn"));
}
com.pblabs.components.tasks.AngleTask.CreateEaseOut = function(angle,time) {
	return new com.pblabs.components.tasks.AngleTask(angle,time,$closure(feffects.easing.Cubic,"easeOut"));
}
com.pblabs.components.tasks.AngleTask.prototype.clone = function() {
	return new com.pblabs.components.tasks.AngleTask(this._to,this._totalTime,this._easingFn);
}
com.pblabs.components.tasks.AngleTask.prototype.__class__ = com.pblabs.components.tasks.AngleTask;
if(!com.pblabs.engine) com.pblabs.engine = {}
if(!com.pblabs.engine.core) com.pblabs.engine.core = {}
com.pblabs.engine.core.IPBObject = function() { }
com.pblabs.engine.core.IPBObject.__name__ = ["com","pblabs","engine","core","IPBObject"];
com.pblabs.engine.core.IPBObject.prototype.context = null;
com.pblabs.engine.core.IPBObject.prototype.destroy = null;
com.pblabs.engine.core.IPBObject.prototype.initialize = null;
com.pblabs.engine.core.IPBObject.prototype.isLiveObject = null;
com.pblabs.engine.core.IPBObject.prototype.name = null;
com.pblabs.engine.core.IPBObject.prototype.owningGroup = null;
com.pblabs.engine.core.IPBObject.prototype.__class__ = com.pblabs.engine.core.IPBObject;
com.pblabs.engine.core.PBObject = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.engine.core.PBObject.__name__ = ["com","pblabs","engine","core","PBObject"];
com.pblabs.engine.core.PBObject.prototype._context = null;
com.pblabs.engine.core.PBObject.prototype._name = null;
com.pblabs.engine.core.PBObject.prototype._owningGroup = null;
com.pblabs.engine.core.PBObject.prototype.context = null;
com.pblabs.engine.core.PBObject.prototype.destroy = function() {
	this._context.unregister(this);
	if(this._owningGroup != null) {
		this._owningGroup.removeFromGroup(this);
		this._owningGroup = null;
	}
	this._context = null;
	this._name = null;
}
com.pblabs.engine.core.PBObject.prototype.get_context = function() {
	return this._context;
}
com.pblabs.engine.core.PBObject.prototype.get_isLiveObject = function() {
	return this._context != null;
}
com.pblabs.engine.core.PBObject.prototype.get_name = function() {
	return this._name;
}
com.pblabs.engine.core.PBObject.prototype.get_owningGroup = function() {
	return this._owningGroup;
}
com.pblabs.engine.core.PBObject.prototype.initialize = function(name) {
	this._name = name;
	com.pblabs.util.Preconditions.checkNotNull(this._context,"Context null on init :" + this);
	this._context.register(this);
}
com.pblabs.engine.core.PBObject.prototype.isLiveObject = null;
com.pblabs.engine.core.PBObject.prototype.name = null;
com.pblabs.engine.core.PBObject.prototype.owningGroup = null;
com.pblabs.engine.core.PBObject.prototype.set_context = function(c) {
	com.pblabs.util.Preconditions.checkArgument(this._context == null,"Trying to set context on a PBObject that already has one!");
	this._context = c;
	return c;
}
com.pblabs.engine.core.PBObject.prototype.set_name = function(name) {
	com.pblabs.util.Preconditions.checkArgument(this._name == null,this + " already has a name");
	this._name = name;
	return name;
}
com.pblabs.engine.core.PBObject.prototype.set_owningGroup = function(value) {
	com.pblabs.util.Preconditions.checkNotNull(value,"Must always be in a group - cannot set owningGroup to null!");
	com.pblabs.util.Preconditions.checkArgument(this._owningGroup == null || value.get_rootGroup() == this._owningGroup,"Attempting to set an illegal group");
	if(value == this._owningGroup) {
		return value;
	}
	if(this._owningGroup != null) {
		this._owningGroup.removeFromGroup(this);
	}
	this._owningGroup = value;
	this._owningGroup.addToGroup(this);
	return value;
}
com.pblabs.engine.core.PBObject.prototype.__class__ = com.pblabs.engine.core.PBObject;
com.pblabs.engine.core.PBObject.__interfaces__ = [com.pblabs.engine.core.IPBObject];
com.pblabs.engine.core.IPropertyBag = function() { }
com.pblabs.engine.core.IPropertyBag.__name__ = ["com","pblabs","engine","core","IPropertyBag"];
com.pblabs.engine.core.IPropertyBag.prototype.doesPropertyExist = null;
com.pblabs.engine.core.IPropertyBag.prototype.getProperty = null;
com.pblabs.engine.core.IPropertyBag.prototype.setProperty = null;
com.pblabs.engine.core.IPropertyBag.prototype.__class__ = com.pblabs.engine.core.IPropertyBag;
com.pblabs.engine.core.IEntity = function() { }
com.pblabs.engine.core.IEntity.__name__ = ["com","pblabs","engine","core","IEntity"];
com.pblabs.engine.core.IEntity.prototype.addComponent = null;
com.pblabs.engine.core.IEntity.prototype.deferring = null;
com.pblabs.engine.core.IEntity.prototype.deserialize = null;
com.pblabs.engine.core.IEntity.prototype.iterator = null;
com.pblabs.engine.core.IEntity.prototype.lookupComponent = null;
com.pblabs.engine.core.IEntity.prototype.lookupComponentByName = null;
com.pblabs.engine.core.IEntity.prototype.lookupComponentByType = null;
com.pblabs.engine.core.IEntity.prototype.lookupComponentsByType = null;
com.pblabs.engine.core.IEntity.prototype.removeComponent = null;
com.pblabs.engine.core.IEntity.prototype.serialize = null;
com.pblabs.engine.core.IEntity.prototype.__class__ = com.pblabs.engine.core.IEntity;
com.pblabs.engine.core.IEntity.__interfaces__ = [com.pblabs.engine.core.IPBObject,com.pblabs.engine.core.IPropertyBag];
com.pblabs.engine.core.Entity = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.PBObject.apply(this,[]);
	this._deferring = false;
	this._components = com.pblabs.util.ds.Maps.newHashMap(String);
	this._deferredComponents = new Array();
}}
com.pblabs.engine.core.Entity.__name__ = ["com","pblabs","engine","core","Entity"];
com.pblabs.engine.core.Entity.__super__ = com.pblabs.engine.core.PBObject;
for(var k in com.pblabs.engine.core.PBObject.prototype ) com.pblabs.engine.core.Entity.prototype[k] = com.pblabs.engine.core.PBObject.prototype[k];
com.pblabs.engine.core.Entity.prototype._components = null;
com.pblabs.engine.core.Entity.prototype._deferredComponents = null;
com.pblabs.engine.core.Entity.prototype._deferring = null;
com.pblabs.engine.core.Entity.prototype.addComponent = function(component,componentName) {
	com.pblabs.util.Preconditions.checkNotNull(component,"Cannot add a null component");
	componentName = (componentName == null?com.pblabs.util.ReflectUtil.tinyClassName(component):componentName);
	com.pblabs.util.Preconditions.checkArgument(component.get_context() == this.get_context(),"Component and entity are not from same context!");
	if(!this.doAddComponent(component,componentName)) {
		return false;
	}
	if(this.get_deferring()) {
		var p = new com.pblabs.engine.core.PendingComponent();
		p.item = component;
		p.name = componentName;
		this._deferredComponents.push(p);
		return true;
	}
	component.register(this,componentName);
	if(Std["is"](component,com.pblabs.engine.time.ITickedObject)) {
		this._context._processManager.addTickedObject(component);
	}
	if(Std["is"](component,com.pblabs.engine.time.IAnimatedObject)) {
		this._context._processManager.addAnimatedObject(component);
	}
	this.doResetComponents();
	return true;
}
com.pblabs.engine.core.Entity.prototype.deferring = null;
com.pblabs.engine.core.Entity.prototype.deserialize = function(xml,registerComponents) {
	if(registerComponents == null) registerComponents = true;
	this.get_context().getManager(com.pblabs.engine.serialization.Serializer).setCurrentEntity(this);
	var oldDefer = this.get_deferring();
	this.set_deferring(true);
	var serializer = this.get_context().getManager(com.pblabs.engine.serialization.Serializer);
	{ var $it0 = xml.elements();
	while( $it0.hasNext() ) { var componentXML = $it0.next();
	{
		if(componentXML.getNodeName().toLowerCase() != "component") {
			com.pblabs.engine.debug.Log.error(((("Found unexpected tag '" + componentXML.getNodeName().toString()) + "', only <component/> is valid, ignoring tag. Error in entity '") + this._name) + "'.",{ fileName : "Entity.hx", lineNumber : 185, className : "com.pblabs.engine.core.Entity", methodName : "deserialize"});
			continue;
		}
		var componentName = componentXML.get("name");
		var componentClassName = componentXML.get("type");
		var component = null;
		if(componentClassName.length > 0) {
			var type = Type.resolveClass(componentClassName);
			if(null == type) {
				com.pblabs.engine.debug.Log.error(((((("Unable to find type '" + componentClassName) + "' for component '") + componentName) + "' on entity '") + this._name) + "'.",{ fileName : "Entity.hx", lineNumber : 197, className : "com.pblabs.engine.core.Entity", methodName : "deserialize"});
				continue;
			}
			component = (function($this) {
				var $r;
				var $t = $this.get_context().allocate(type);
				if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			if(null == component) {
				com.pblabs.engine.debug.Log.error(((((("Unable to instantiate component " + componentName) + " of type ") + componentClassName) + " on entity '") + this._name) + "'.",{ fileName : "Entity.hx", lineNumber : 203, className : "com.pblabs.engine.core.Entity", methodName : "deserialize"});
				continue;
			}
			if(!this.addComponent(component,componentName)) {
				continue;
			}
		}
		else {
			component = this.lookupComponentByName(componentName);
			if(null == component) {
				com.pblabs.engine.debug.Log.error(((("No type specified for the component " + componentName) + " and the component doesn't exist on a parent template for entity '") + this._name) + "'.",{ fileName : "Entity.hx", lineNumber : 214, className : "com.pblabs.engine.core.Entity", methodName : "deserialize"});
				continue;
			}
		}
		serializer.deserialize(this.get_context(),component,componentXML);
	}
	}}
	var setsAttr = xml.get("sets");
	if(!setsAttr == null || setsAttr == "") {
		var setNames = Lambda.map(setsAttr.split(","),$closure(StringTools,"trim"));
		if(setNames != null) {
			var sets = this.get_context().getManager(com.pblabs.engine.core.SetManager);
			{ var $it1 = setNames.iterator();
			while( $it1.hasNext() ) { var set = $it1.next();
			{
				if(!set == null || set == "") {
					com.pblabs.engine.core.SetManager.addToSet(this,set);
				}
			}
			}}
		}
	}
	this.set_deferring(oldDefer);
}
com.pblabs.engine.core.Entity.prototype.destroy = function() {
	{ var $it0 = this._components.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		if(c.get_isRegistered()) {
			c.unregister();
		}
		if(Std["is"](c,com.pblabs.engine.time.ITickedObject)) {
			this._context._processManager.removeTickedObject(c);
		}
		if(Std["is"](c,com.pblabs.engine.time.IAnimatedObject)) {
			this._context._processManager.removeAnimatedObject(c);
		}
	}
	}}
	{ var $it1 = this._components.iterator();
	while( $it1.hasNext() ) { var c = $it1.next();
	{
		this._components.remove(c.get_name());
	}
	}}
	com.pblabs.engine.core.PBObject.prototype.destroy.apply(this,[]);
}
com.pblabs.engine.core.Entity.prototype.doAddComponent = function(component,componentName) {
	if(componentName == "") {
		com.pblabs.engine.debug.Log.warn(["AddComponent","A component name was not specified. This might cause problems later."],{ fileName : "Entity.hx", lineNumber : 365, className : "com.pblabs.engine.core.Entity", methodName : "doAddComponent"});
	}
	if(component.get_owner() != null) {
		com.pblabs.engine.debug.Log.error(["AddComponent",((("The component " + componentName) + " already has an owner. (") + this._name) + ")"],{ fileName : "Entity.hx", lineNumber : 370, className : "com.pblabs.engine.core.Entity", methodName : "doAddComponent"});
		return false;
	}
	if(this._components.get(componentName) != null) {
		com.pblabs.engine.debug.Log.error(["AddComponent",((("A component with name " + componentName) + " already exists on this entity (") + this._name) + ")."],{ fileName : "Entity.hx", lineNumber : 376, className : "com.pblabs.engine.core.Entity", methodName : "doAddComponent"});
		return false;
	}
	component.set_owner(this);
	this._components.set(componentName,component);
	return true;
}
com.pblabs.engine.core.Entity.prototype.doRemoveComponent = function(component) {
	if(component.get_owner() != this) {
		com.pblabs.engine.debug.Log.error(["AddComponent",((("The component " + component.get_name()) + " is not owned by this entity. (") + this._name) + ")"],{ fileName : "Entity.hx", lineNumber : 389, className : "com.pblabs.engine.core.Entity", methodName : "doRemoveComponent"});
		return false;
	}
	if(this._components.get(component.get_name()) == null) {
		com.pblabs.engine.debug.Log.error(["AddComponent",((("The component " + component.get_name()) + " was not found on this entity. (") + this._name) + ")"],{ fileName : "Entity.hx", lineNumber : 395, className : "com.pblabs.engine.core.Entity", methodName : "doRemoveComponent"});
		return false;
	}
	this._components.remove(component.get_name());
	if(Std["is"](component,com.pblabs.engine.time.ITickedObject)) {
		this._context._processManager.removeTickedObject(component);
	}
	if(Std["is"](component,com.pblabs.engine.time.IAnimatedObject)) {
		this._context._processManager.removeAnimatedObject(component);
	}
	return true;
}
com.pblabs.engine.core.Entity.prototype.doResetComponents = function() {
	var oldDefer = this._deferring;
	this.set_deferring(true);
	var sm = this.get_context().getManager(com.pblabs.engine.core.SignalBondManager);
	sm.destroyBonds(this);
	var sets = this.get_context().getManager(com.pblabs.engine.core.SetManager);
	var bonds = null;
	{ var $it0 = this._components.iterator();
	while( $it0.hasNext() ) { var component = $it0.next();
	{
		if(!component.get_isRegistered()) {
			continue;
		}
		this._context.injectInto(component);
		sets.injectSets(component);
		bonds = (function($this) {
			var $r;
			var $t = $this._context.injector;
			if(Std["is"]($t,com.pblabs.engine.injection.ComponentInjector)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).injectComponentListeners(component,bonds);
		component.reset();
	}
	}}
	if(bonds != null) {
		sm.setAll(this,bonds);
	}
	this.set_deferring(false);
}
com.pblabs.engine.core.Entity.prototype.doesPropertyExist = function(property) {
	return this.getProperty(property) != null;
}
com.pblabs.engine.core.Entity.prototype.getProperty = function(property,defaultVal) {
	return this._context.getProperty(property,defaultVal,this);
}
com.pblabs.engine.core.Entity.prototype.get_deferring = function() {
	return this._deferring;
}
com.pblabs.engine.core.Entity.prototype.initialize = function(name) {
	com.pblabs.engine.core.PBObject.prototype.initialize.apply(this,[name]);
	this.set_deferring(false);
}
com.pblabs.engine.core.Entity.prototype.iterator = function() {
	return this._components.iterator();
}
com.pblabs.engine.core.Entity.prototype.lookupComponent = function(componentType) {
	return this.lookupComponentByType(componentType);
}
com.pblabs.engine.core.Entity.prototype.lookupComponentByName = function(componentName) {
	return this._components.get(componentName);
}
com.pblabs.engine.core.Entity.prototype.lookupComponentByType = function(componentType) {
	{ var $it0 = this._components.iterator();
	while( $it0.hasNext() ) { var component = $it0.next();
	{
		if(Std["is"](component,componentType)) return component;
	}
	}}
	return null;
}
com.pblabs.engine.core.Entity.prototype.lookupComponentsByType = function(componentType) {
	var list = new Array();
	{ var $it0 = this._components.iterator();
	while( $it0.hasNext() ) { var component = $it0.next();
	{
		if(Std["is"](component,componentType)) list.push(component);
	}
	}}
	return list;
}
com.pblabs.engine.core.Entity.prototype.removeComponent = function(component) {
	if(!this.doRemoveComponent(component)) return;
	if(component.get_isRegistered() == false) {
		{
			var _g1 = 0, _g = this._deferredComponents.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(((function($this) {
					var $r;
					var $t = $this._deferredComponents[i];
					if(Std["is"]($t,com.pblabs.engine.core.PendingComponent)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this))).item != component) continue;
				this._deferredComponents.splice(i,1);
				break;
			}
		}
		return;
	}
	component.unregister();
	this.doResetComponents();
}
com.pblabs.engine.core.Entity.prototype.serialize = function(xml) {
	var entityXML = Xml.createElement("entity");
	entityXML.set("name",this._name);
	var serializer = this.get_context().getManager(com.pblabs.engine.serialization.Serializer);
	{ var $it0 = this._components.iterator();
	while( $it0.hasNext() ) { var component = $it0.next();
	{
		var componentXML = Xml.createElement("component");
		componentXML.set("name",component.get_name());
		componentXML.set("type",com.pblabs.util.ReflectUtil.getClassName(component));
		serializer.serialize(component,componentXML);
		entityXML.addChild(componentXML);
	}
	}}
	xml.addChild(entityXML);
}
com.pblabs.engine.core.Entity.prototype.setProperty = function(property,value) {
	this._context.setProperty(property,value,this);
}
com.pblabs.engine.core.Entity.prototype.set_deferring = function(value) {
	if(this._deferring == true && value == false) {
		var needReset = this._deferredComponents.length > 0;
		var component;
		while(this._deferredComponents.length > 0) {
			var pc = (function($this) {
				var $r;
				var $t = $this._deferredComponents.shift();
				if(Std["is"]($t,com.pblabs.engine.core.PendingComponent)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			pc.item.register(this,pc.name);
			component = pc.item;
			if(Std["is"](component,com.pblabs.engine.time.ITickedObject)) {
				this._context._processManager.addTickedObject(component);
			}
			if(Std["is"](component,com.pblabs.engine.time.IAnimatedObject)) {
				this._context._processManager.addAnimatedObject(component);
			}
		}
		this._deferring = false;
		if(needReset) {
			this.doResetComponents();
		}
	}
	this._deferring = value;
	return value;
}
com.pblabs.engine.core.Entity.prototype.__class__ = com.pblabs.engine.core.Entity;
com.pblabs.engine.core.Entity.__interfaces__ = [com.pblabs.engine.core.IEntity];
com.pblabs.engine.core.PendingComponent = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.engine.core.PendingComponent.__name__ = ["com","pblabs","engine","core","PendingComponent"];
com.pblabs.engine.core.PendingComponent.prototype.item = null;
com.pblabs.engine.core.PendingComponent.prototype.name = null;
com.pblabs.engine.core.PendingComponent.prototype.__class__ = com.pblabs.engine.core.PendingComponent;
if(!com.pblabs.util) com.pblabs.util = {}
if(!com.pblabs.util.ds) com.pblabs.util.ds = {}
if(!com.pblabs.util.ds.multimaps) com.pblabs.util.ds.multimaps = {}
com.pblabs.util.ds.multimaps.AbstractMultiMap = function(p) { if( p === $_ ) return; {
	this._size = 0;
}}
com.pblabs.util.ds.multimaps.AbstractMultiMap.__name__ = ["com","pblabs","util","ds","multimaps","AbstractMultiMap"];
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype._size = null;
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.clear = function() {
	this._size = 0;
}
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.get = function(key) {
	return null;
}
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.get_length = function() {
	return this._size;
}
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.keys = function() {
	return null;
}
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.length = null;
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.set = function(key,value) {
	this._size++;
}
com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.__class__ = com.pblabs.util.ds.multimaps.AbstractMultiMap;
com.pblabs.util.ds.MultiMap = function() { }
com.pblabs.util.ds.MultiMap.__name__ = ["com","pblabs","util","ds","MultiMap"];
com.pblabs.util.ds.MultiMap.prototype.clear = null;
com.pblabs.util.ds.MultiMap.prototype.exists = null;
com.pblabs.util.ds.MultiMap.prototype.existsEntry = null;
com.pblabs.util.ds.MultiMap.prototype.get = null;
com.pblabs.util.ds.MultiMap.prototype.keys = null;
com.pblabs.util.ds.MultiMap.prototype.length = null;
com.pblabs.util.ds.MultiMap.prototype.remove = null;
com.pblabs.util.ds.MultiMap.prototype.removeEntry = null;
com.pblabs.util.ds.MultiMap.prototype.set = null;
com.pblabs.util.ds.MultiMap.prototype.setAll = null;
com.pblabs.util.ds.MultiMap.prototype.__class__ = com.pblabs.util.ds.MultiMap;
com.pblabs.util.ds.multimaps.SetMultiMap = function(keyClass) { if( keyClass === $_ ) return; {
	com.pblabs.util.ds.multimaps.AbstractMultiMap.apply(this,[]);
	this._map = com.pblabs.util.ds.Maps.newHashMap(keyClass);
	this._keyClass = keyClass;
}}
com.pblabs.util.ds.multimaps.SetMultiMap.__name__ = ["com","pblabs","util","ds","multimaps","SetMultiMap"];
com.pblabs.util.ds.multimaps.SetMultiMap.__super__ = com.pblabs.util.ds.multimaps.AbstractMultiMap;
for(var k in com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype ) com.pblabs.util.ds.multimaps.SetMultiMap.prototype[k] = com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype[k];
com.pblabs.util.ds.multimaps.SetMultiMap.create = function(keyClass) {
	return new com.pblabs.util.ds.multimaps.SetMultiMap(keyClass);
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype._keyClass = null;
com.pblabs.util.ds.multimaps.SetMultiMap.prototype._map = null;
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.clear = function() {
	com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.clear.apply(this,[]);
	{ var $it0 = this._map.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	{
		this._map.remove(k);
	}
	}}
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.exists = function(key) {
	return this._map.exists(key);
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.existsEntry = function(key,value) {
	var set = this._map.get(key);
	if(set == null) {
		return false;
	}
	return set.exists(value);
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.get = function(key) {
	return this._map.get(key);
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.keys = function() {
	return this._map.keys();
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.remove = function(key) {
	var set = this._map.get(key);
	this._size -= (set == null?0:set.size());
	return this._map.remove(key);
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.removeEntry = function(key,value) {
	var set = this._map.get(key);
	if(set == null) {
		return false;
	}
	var present = set.remove(value);
	if(present) {
		this._size--;
	}
	if(set.size() == 0) {
		this._map.remove(key);
	}
	return present;
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.set = function(key,value) {
	com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.set.apply(this,[key,value]);
	var set = this._map.get(key);
	if(set == null) {
		set = com.pblabs.util.ds.Sets.newSetOf(this._keyClass);
		this._map.set(key,set);
	}
	set.add(value);
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.setAll = function(key,values) {
	var set = this._map.get(key);
	if(set == null) {
		set = com.pblabs.util.ds.Sets.newSetOf(this._keyClass);
		this._map.set(key,set);
	}
	{ var $it0 = values.iterator();
	while( $it0.hasNext() ) { var v = $it0.next();
	{
		set.add(v);
	}
	}}
}
com.pblabs.util.ds.multimaps.SetMultiMap.prototype.__class__ = com.pblabs.util.ds.multimaps.SetMultiMap;
com.pblabs.util.ds.multimaps.SetMultiMap.__interfaces__ = [com.pblabs.util.ds.MultiMap];
com.pblabs.util.ds.Map = function() { }
com.pblabs.util.ds.Map.__name__ = ["com","pblabs","util","ds","Map"];
com.pblabs.util.ds.Map.prototype.clear = null;
com.pblabs.util.ds.Map.prototype.exists = null;
com.pblabs.util.ds.Map.prototype.get = null;
com.pblabs.util.ds.Map.prototype.iterator = null;
com.pblabs.util.ds.Map.prototype.keys = null;
com.pblabs.util.ds.Map.prototype.remove = null;
com.pblabs.util.ds.Map.prototype.set = null;
com.pblabs.util.ds.Map.prototype.size = null;
com.pblabs.util.ds.Map.prototype.__class__ = com.pblabs.util.ds.Map;
if(!com.pblabs.util.ds.maps) com.pblabs.util.ds.maps = {}
com.pblabs.util.ds.maps.DynamicMap = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.util.ds.maps.DynamicMap.__name__ = ["com","pblabs","util","ds","maps","DynamicMap"];
com.pblabs.util.ds.maps.DynamicMap.prototype.clear = function() {
	{ var $it0 = this.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	{
		this.remove(k);
	}
	}}
}
com.pblabs.util.ds.maps.DynamicMap.prototype.exists = function(key) {
	return Reflect.hasField(this,key);
}
com.pblabs.util.ds.maps.DynamicMap.prototype.get = function(key) {
	return Reflect.field(this,key);
}
com.pblabs.util.ds.maps.DynamicMap.prototype.iterator = function() {
	var values = new Array();
	{ var $it0 = this.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	{
		values.push(this.get(k));
	}
	}}
	return values.iterator();
}
com.pblabs.util.ds.maps.DynamicMap.prototype.keys = function() {
	return Reflect.fields(this).iterator();
}
com.pblabs.util.ds.maps.DynamicMap.prototype.remove = function(key) {
	return Reflect.deleteField(this,key);
}
com.pblabs.util.ds.maps.DynamicMap.prototype.set = function(key,value) {
	this[key] = value;
}
com.pblabs.util.ds.maps.DynamicMap.prototype.size = function() {
	return Reflect.fields(this).length;
}
com.pblabs.util.ds.maps.DynamicMap.prototype.toString = function() {
	return com.pblabs.util.ds.MapUtil.toString(this);
}
com.pblabs.util.ds.maps.DynamicMap.prototype.__class__ = com.pblabs.util.ds.maps.DynamicMap;
com.pblabs.util.ds.maps.DynamicMap.__interfaces__ = [com.pblabs.util.ds.Map];
if(!com.pblabs.engine.util) com.pblabs.engine.util = {}
com.pblabs.engine.util.IPrioritizable = function() { }
com.pblabs.engine.util.IPrioritizable.__name__ = ["com","pblabs","engine","util","IPrioritizable"];
com.pblabs.engine.util.IPrioritizable.prototype.priority = null;
com.pblabs.engine.util.IPrioritizable.prototype.__class__ = com.pblabs.engine.util.IPrioritizable;
if(!com.pblabs.engine.debug) com.pblabs.engine.debug = {}
com.pblabs.engine.debug.Log = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.engine.debug.Log.__name__ = ["com","pblabs","engine","debug","Log"];
com.pblabs.engine.debug.Log.debug = function(msg,infos) {
	haxe.Log.trace("debug: " + msg,{ fileName : "Log.hx", lineNumber : 26, className : "com.pblabs.engine.debug.Log", methodName : "debug", customParams : [infos]});
}
com.pblabs.engine.debug.Log.info = function(msg,infos) {
	haxe.Log.trace("info: " + msg,{ fileName : "Log.hx", lineNumber : 31, className : "com.pblabs.engine.debug.Log", methodName : "info", customParams : [infos]});
}
com.pblabs.engine.debug.Log.warn = function(msg,infos) {
	haxe.Log.trace("warn: " + msg,{ fileName : "Log.hx", lineNumber : 36, className : "com.pblabs.engine.debug.Log", methodName : "warn", customParams : [infos]});
}
com.pblabs.engine.debug.Log.error = function(msg,infos) {
	haxe.Log.trace("error: " + msg,{ fileName : "Log.hx", lineNumber : 41, className : "com.pblabs.engine.debug.Log", methodName : "error", customParams : [infos]});
}
com.pblabs.engine.debug.Log.print = function(msg,infos) {
	haxe.Log.trace(msg,infos);
}
com.pblabs.engine.debug.Log.getStackTrace = function() {
	return haxe.Stack.toString(haxe.Stack.callStack());
}
com.pblabs.engine.debug.Log.prototype.__class__ = com.pblabs.engine.debug.Log;
com.pblabs.util.MathUtil = function() { }
com.pblabs.util.MathUtil.__name__ = ["com","pblabs","util","MathUtil"];
com.pblabs.util.MathUtil.clamp = function(x,min,max) {
	return ((x < min)?min:((x > max)?max:x));
}
com.pblabs.util.MathUtil.fclamp = function(x,min,max) {
	return ((x < min)?min:((x > max)?max:x));
}
com.pblabs.util.MathUtil.floor = function(x) {
	if(x > .0) {
		var t = Std["int"](x + .5);
		return ((t < x)?t:t - 1);
	}
	else if(x < .0) {
		var t = Std["int"](x - .5);
		return ((t > x)?t - 1:t);
	}
	else return 0;
}
com.pblabs.util.MathUtil.toRad = function(deg) {
	return deg * (3.141592653589793 / 180);
}
com.pblabs.util.MathUtil.toDeg = function(rad) {
	return rad * (180 / 3.141592653589793);
}
com.pblabs.util.MathUtil.prototype.__class__ = com.pblabs.util.MathUtil;
com.pblabs.util.Cloneable = function() { }
com.pblabs.util.Cloneable.__name__ = ["com","pblabs","util","Cloneable"];
com.pblabs.util.Cloneable.prototype.clone = null;
com.pblabs.util.Cloneable.prototype.__class__ = com.pblabs.util.Cloneable;
com.pblabs.util.Equalable = function() { }
com.pblabs.util.Equalable.__name__ = ["com","pblabs","util","Equalable"];
com.pblabs.util.Equalable.prototype.equals = null;
com.pblabs.util.Equalable.prototype.__class__ = com.pblabs.util.Equalable;
if(!com.pblabs.geom) com.pblabs.geom = {}
com.pblabs.geom.LineSegment = function(x1,x2) { if( x1 === $_ ) return; {
	this.a = x1;
	this.b = x2;
}}
com.pblabs.geom.LineSegment.__name__ = ["com","pblabs","geom","LineSegment"];
com.pblabs.geom.LineSegment.closestPoint = function(a,b,p) {
	var closestPoint = new com.pblabs.geom.Vector2();
	com.pblabs.geom.LineSegment.distToLineSegment(a,b,p,closestPoint);
	return closestPoint;
}
com.pblabs.geom.LineSegment.distanceLineSegments = function(p1,p2,p3,p4,pa,pb) {
	var abs = $closure(Math,"abs");
	var EPS = 0.00000001;
	var mua;
	var mub;
	var p13 = new com.pblabs.geom.Vector2();
	var p43 = new com.pblabs.geom.Vector2();
	var p21 = new com.pblabs.geom.Vector2();
	var d1343;
	var d4321;
	var d1321;
	var d4343;
	var d2121;
	var numer;
	var denom;
	p13.x = p1.x - p3.x;
	p13.y = p1.y - p3.y;
	p43.x = p4.x - p3.x;
	p43.y = p4.y - p3.y;
	if(abs(p43.x) < EPS && abs(p43.y) < EPS) {
		haxe.Log.trace("here",{ fileName : "LineSegment.hx", lineNumber : 67, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
		return 0;
	}
	p21.x = p2.x - p1.x;
	p21.y = p2.y - p1.y;
	if(abs(p21.x) < EPS && abs(p21.y) < EPS) {
		haxe.Log.trace("here2",{ fileName : "LineSegment.hx", lineNumber : 74, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
		return 0;
	}
	d1343 = p13.x * p43.x + p13.y * p43.y;
	d4321 = p43.x * p21.x + p43.y * p21.y;
	d1321 = p13.x * p21.x + p13.y * p21.y;
	d4343 = p43.x * p43.x + p43.y * p43.y;
	d2121 = p21.x * p21.x + p21.y * p21.y;
	haxe.Log.trace("d1343=" + d1343,{ fileName : "LineSegment.hx", lineNumber : 84, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	haxe.Log.trace("d4321=" + d4321,{ fileName : "LineSegment.hx", lineNumber : 85, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	haxe.Log.trace("d1321=" + d1321,{ fileName : "LineSegment.hx", lineNumber : 86, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	haxe.Log.trace("d4343=" + d4343,{ fileName : "LineSegment.hx", lineNumber : 87, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	haxe.Log.trace("d2121=" + d2121,{ fileName : "LineSegment.hx", lineNumber : 88, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	denom = d2121 * d4343 - d4321 * d4321;
	if(abs(denom) < EPS) {
		haxe.Log.trace("here3",{ fileName : "LineSegment.hx", lineNumber : 92, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
		return 0;
	}
	numer = d1343 * d4321 - d1321 * d4343;
	haxe.Log.trace((("numer=" + (d1343 * d4321)) + " / ") + (d1321 * d4343),{ fileName : "LineSegment.hx", lineNumber : 96, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	mua = numer / denom;
	mub = (d1343 + d4321 * (mua)) / d4343;
	haxe.Log.trace("numer=" + numer,{ fileName : "LineSegment.hx", lineNumber : 101, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	haxe.Log.trace("denom=" + denom,{ fileName : "LineSegment.hx", lineNumber : 102, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	haxe.Log.trace("mua=" + mua,{ fileName : "LineSegment.hx", lineNumber : 103, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	haxe.Log.trace("mub=" + mub,{ fileName : "LineSegment.hx", lineNumber : 104, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments"});
	pa.x = p1.x + mua * p21.x;
	pa.y = p1.y + mua * p21.y;
	pb.x = p3.x + mub * p43.x;
	pb.y = p3.y + mub * p43.y;
	haxe.Log.trace(pa,{ fileName : "LineSegment.hx", lineNumber : 114, className : "com.pblabs.geom.LineSegment", methodName : "distanceLineSegments", customParams : [pb]});
	return Math.sqrt((pb.x - pa.x) * (pb.x - pa.x) + (pb.y - pa.y) * (pb.y - pa.y));
}
com.pblabs.geom.LineSegment.distToLineSegment = function(A,B,P,closestPoint) {
	return Math.sqrt(com.pblabs.geom.LineSegment.distToLineSegmentSq(A,B,P,closestPoint));
}
com.pblabs.geom.LineSegment.distToLineSegmentSq = function(A,B,P,closestPoint) {
	var dx = B.x - A.x;
	var dy = B.y - A.y;
	if(dx == 0 && dy == 0) {
		B.x += 1;
		B.y += 1;
		dx = dy = 1;
	}
	var u = ((P.x - A.x) * dx + (P.y - A.y) * dy) / (dx * dx + dy * dy);
	var closestX;
	var closestY;
	if(u < 0) {
		closestX = A.x;
		closestY = A.y;
	}
	else if(u > 1) {
		closestX = B.x;
		closestY = B.y;
	}
	else {
		closestX = A.x + u * dx;
		closestY = A.y + u * dy;
	}
	if(closestPoint != null) {
		closestPoint.x = closestX;
		closestPoint.y = closestY;
	}
	dx = closestX - P.x;
	dy = closestY - P.y;
	return dx * dx + dy * dy;
}
com.pblabs.geom.LineSegment.isConnected = function(A,B,E,F) {
	return (A.equals(E) && !B.equals(F)) || (!A.equals(E) && B.equals(F)) || (A.equals(F) && !B.equals(E)) || (!A.equals(F) && B.equals(E));
}
com.pblabs.geom.LineSegment.isLinesIntersecting = function(A,B,E,F) {
	return com.pblabs.geom.LineSegment.lineIntersectLine(A,B,E,F) != null;
}
com.pblabs.geom.LineSegment.lineIntersectLine = function(A,B,E,F,as_seg) {
	if(as_seg == null) as_seg = true;
	var ip;
	var a1;
	var a2;
	var b1;
	var b2;
	var c1;
	var c2;
	a1 = B.y - A.y;
	b1 = A.x - B.x;
	c1 = B.x * A.y - A.x * B.y;
	a2 = F.y - E.y;
	b2 = E.x - F.x;
	c2 = F.x * E.y - E.x * F.y;
	var denom = a1 * b2 - a2 * b1;
	if(denom == 0) {
		return null;
	}
	ip = new com.pblabs.geom.Vector2();
	ip.x = (b1 * c2 - b2 * c1) / denom;
	ip.y = (a2 * c1 - a1 * c2) / denom;
	var distance = $closure(com.pblabs.geom.VectorTools,"distance");
	if(as_seg) {
		if(distance(ip,B) > distance(A,B)) {
			return null;
		}
		if(distance(ip,A) > distance(A,B)) {
			return null;
		}
		if(distance(ip,F) > distance(E,F)) {
			return null;
		}
		if(distance(ip,E) > distance(E,F)) {
			return null;
		}
	}
	return ip;
}
com.pblabs.geom.LineSegment.prototype.a = null;
com.pblabs.geom.LineSegment.prototype.b = null;
com.pblabs.geom.LineSegment.prototype.clone = function() {
	return new com.pblabs.geom.LineSegment(this.a.clone(),this.b.clone());
}
com.pblabs.geom.LineSegment.prototype.closestPointTo = function(P) {
	var closestPoint = new com.pblabs.geom.Vector2();
	com.pblabs.geom.LineSegment.distToLineSegment(this.a,this.b,P,closestPoint);
	return closestPoint;
}
com.pblabs.geom.LineSegment.prototype.dist = function(P) {
	return com.pblabs.geom.LineSegment.distToLineSegment(this.a,this.b,P);
}
com.pblabs.geom.LineSegment.prototype.distSq = function(P) {
	return com.pblabs.geom.LineSegment.distToLineSegmentSq(this.a,this.b,P);
}
com.pblabs.geom.LineSegment.prototype.distanceToLine = function(line) {
	return Math.sqrt(this.distanceToLineSq(line));
}
com.pblabs.geom.LineSegment.prototype.distanceToLineSq = function(line) {
	return Math.min(Math.min(com.pblabs.geom.LineSegment.distToLineSegmentSq(this.a,this.b,line.a),com.pblabs.geom.LineSegment.distToLineSegmentSq(this.a,this.b,line.b)),Math.min(com.pblabs.geom.LineSegment.distToLineSegmentSq(line.a,line.b,this.a),com.pblabs.geom.LineSegment.distToLineSegmentSq(line.a,line.b,this.b)));
}
com.pblabs.geom.LineSegment.prototype.equalToPoints = function(p1,p2) {
	return (this.a.equals(p1) && this.b.equals(p2)) || (this.a.equals(p2) && this.b.equals(p1));
}
com.pblabs.geom.LineSegment.prototype.equals = function(other) {
	return other.a.equals(this.a) && other.b.equals(this.b);
}
com.pblabs.geom.LineSegment.prototype.getLength = function() {
	return com.pblabs.geom.VectorTools.distance(this.a,this.b);
}
com.pblabs.geom.LineSegment.prototype.getNormal = function() {
	var dx = this.a.x - this.b.x;
	var dy = this.a.y - this.b.y;
	var midX = this.b.x + dx / 2;
	var midY = this.b.y + dy / 2;
	var A = new com.pblabs.geom.Vector2(midX + dy / 2,midY + -dx / 2);
	var B = new com.pblabs.geom.Vector2(midX - dy / 2,midY + dx / 2);
	return new com.pblabs.geom.LineSegment(A,B);
}
com.pblabs.geom.LineSegment.prototype.getNormalVector = function() {
	var dx = this.a.x - this.b.x;
	var dy = this.a.y - this.b.y;
	var midX = this.b.x + dx / 2;
	var midY = this.b.y + dy / 2;
	var A = new com.pblabs.geom.Vector2(midX + dy / 2,midY + -dx / 2);
	A.x = midX - A.x;
	A.y = midY - A.y;
	return A;
}
com.pblabs.geom.LineSegment.prototype.intersectionPoint = function(line,as_seg) {
	if(as_seg == null) as_seg = true;
	return com.pblabs.geom.LineSegment.lineIntersectLine(this.a,this.b,line.a,line.b,as_seg);
}
com.pblabs.geom.LineSegment.prototype.intersectionPointLinePoints = function(v1,v2,as_seg) {
	if(as_seg == null) as_seg = true;
	return com.pblabs.geom.LineSegment.lineIntersectLine(this.a,this.b,v1,v2,as_seg);
}
com.pblabs.geom.LineSegment.prototype.isIntersected = function(v1,v2) {
	var intersectionPoint = com.pblabs.geom.LineSegment.lineIntersectLine(this.a,this.b,v1,v2,true);
	return intersectionPoint != null;
}
com.pblabs.geom.LineSegment.prototype.isIntersectedByLine = function(line) {
	var intersectionPoint = com.pblabs.geom.LineSegment.lineIntersectLine(this.a,this.b,line.a,line.b,true);
	return intersectionPoint != null;
}
com.pblabs.geom.LineSegment.prototype.length = null;
com.pblabs.geom.LineSegment.prototype.normalVector = null;
com.pblabs.geom.LineSegment.prototype.reversePoints = function() {
	var x = this.a;
	this.a = this.b;
	this.b = x;
}
com.pblabs.geom.LineSegment.prototype.rotate = function(angle) {
	return this.clone().rotateLocal(angle);
}
com.pblabs.geom.LineSegment.prototype.rotateLocal = function(angle) {
	var mid = com.pblabs.geom.LineSegmentTools.getMidpoint(this);
	this.a.subtractLocal(mid).rotateLocal(angle);
	this.b.subtractLocal(mid).rotateLocal(angle);
	return this;
}
com.pblabs.geom.LineSegment.prototype.toString = function() {
	return ((("Line [" + this.a) + ", ") + this.b) + "]";
}
com.pblabs.geom.LineSegment.prototype.__class__ = com.pblabs.geom.LineSegment;
com.pblabs.geom.LineSegment.__interfaces__ = [com.pblabs.util.Cloneable,com.pblabs.util.Equalable];
com.pblabs.geom.Geometry = function() { }
com.pblabs.geom.Geometry.__name__ = ["com","pblabs","geom","Geometry"];
com.pblabs.geom.Geometry.distance = function(x1,y1,x2,y2) {
	return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
com.pblabs.geom.Geometry.distanceSq = function(x1,y1,x2,y2) {
	return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}
com.pblabs.geom.Geometry.getSmallestRotationDirection = function(objectRotationRadians,radianBetween,errorRadians) {
	if(errorRadians == null) errorRadians = 0;
	objectRotationRadians = com.pblabs.geom.Geometry.simplifyRadian(objectRotationRadians);
	radianBetween = com.pblabs.geom.Geometry.simplifyRadian(radianBetween);
	radianBetween += -objectRotationRadians;
	radianBetween = com.pblabs.geom.Geometry.simplifyRadian(radianBetween);
	objectRotationRadians = 0;
	if(radianBetween < -errorRadians) {
		return -1;
	}
	else if(radianBetween > errorRadians) {
		return 1;
	}
	return 0;
}
com.pblabs.geom.Geometry.simplifyRadian = function(radian) {
	if(radian > Math.PI || radian < -Math.PI) {
		var newRadian;
		newRadian = radian - (radian / (Math.PI * 2)) * (Math.PI * 2);
		if(radian > 0) {
			if(newRadian < Math.PI) {
				return newRadian;
			}
			else {
				newRadian = -(Math.PI * 2 - newRadian);
				return newRadian;
			}
		}
		else {
			if(newRadian > -Math.PI) {
				return newRadian;
			}
			else {
				newRadian = ((Math.PI * 2) + newRadian);
				return newRadian;
			}
		}
	}
	return radian;
}
com.pblabs.geom.Geometry.rand = function(min,max) {
	return min + Math.floor(Math.random() * ((max - min) + 1));
}
com.pblabs.geom.Geometry.toRadians = function(degrees) {
	return (degrees * Math.PI) / 180;
}
com.pblabs.geom.Geometry.normalizeRadians = function(radians) {
	var twopi = Math.PI * 2;
	var norm = radians % twopi;
	return ((norm >= 0)?norm:(norm + twopi));
}
com.pblabs.geom.Geometry.toDegrees = function(radians) {
	return (radians * 180) / Math.PI;
}
com.pblabs.geom.Geometry.normalizeDegrees = function(degrees) {
	var norm = degrees % 360;
	return ((norm >= 0)?norm:(norm + 360));
}
com.pblabs.geom.Geometry.closestPoint = function(A,otherPoints) {
	var closestDistance = Math.POSITIVE_INFINITY;
	var closestPoint = null;
	{
		var _g = 0;
		while(_g < otherPoints.length) {
			var v = otherPoints[_g];
			++_g;
			var d = (A.x - v.x) * (A.x - v.x) + (A.y - v.y) * (A.y - v.y);
			if(d < closestDistance) {
				closestDistance = d;
				closestPoint = v;
			}
		}
	}
	return closestPoint;
}
com.pblabs.geom.Geometry.distToRayPlaneIntersect = function(rayOrigin,rayHeading,planePoint,planeNormal) {
	var d = -planeNormal.dot(planePoint);
	var numer = planeNormal.dot(rayOrigin) + d;
	var denom = planeNormal.dot(rayHeading);
	if((denom < 0.00001) && (denom > -0.00001)) return -1;
	return -(numer / denom);
}
com.pblabs.geom.Geometry.whereIsPoint = function(point,pointOnPlane,planeNormal) {
	var dir = pointOnPlane.subtract(point);
	var d = dir.dot(planeNormal);
	if(d < -0.00001) return 1;
	if(d > 0.00001) return -1;
	return 0;
}
com.pblabs.geom.Geometry.getRayCircleIntersect = function(rayOrigin,rayHeading,circleCenter,radius) {
	var toCircle = circleCenter.subtract(rayOrigin);
	var length = Math.sqrt(toCircle.x * toCircle.x + toCircle.y * toCircle.y);
	var v = toCircle.dot(rayHeading);
	var d = radius * radius - (length * length - v * v);
	if(d < 0) return -1;
	return (v - Math.sqrt(d));
}
com.pblabs.geom.Geometry.doesRayIntersectCircle = function(rayOrigin,rayHeading,circleCenter,radius) {
	var toCircle = circleCenter.subtract(rayOrigin);
	var length = Math.sqrt(toCircle.x * toCircle.x + toCircle.y * toCircle.y);
	var v = toCircle.dot(rayHeading);
	var d = radius * radius - (length * length - v * v);
	return (d < 0);
}
com.pblabs.geom.Geometry.getTangentPoints = function(C,R,P,tangent1,tangent2) {
	var PmC = P.subtract(C);
	var sqrLen = PmC.x * PmC.x + PmC.y * PmC.y;
	var rSqr = R * R;
	if(sqrLen <= rSqr) {
		return false;
	}
	var invSqrLen = 1 / sqrLen;
	var root = Math.sqrt(Math.abs(sqrLen - rSqr));
	tangent1.x = C.x + (R * (R * PmC.x - PmC.y * root)) * invSqrLen;
	tangent1.y = C.y + (R * (R * PmC.y - PmC.x * root)) * invSqrLen;
	tangent2.x = C.x + (R * (R * PmC.x - PmC.y * root)) * invSqrLen;
	tangent2.y = C.y + (R * (R * PmC.y - PmC.x * root)) * invSqrLen;
	return true;
}
com.pblabs.geom.Geometry.isCircleOverlapping = function(circle1,radius1,circle2,radius2) {
	var distSq = (circle2.x - circle1.x) * (circle2.x - circle1.x) + (circle2.y - circle1.y) * (circle2.y - circle1.y);
	var range = radius1 + radius2;
	if(distSq < range * range) {
		return true;
	}
	return false;
}
com.pblabs.geom.Geometry.getCircleIntersectionPoints = function(circle1,radius1,circle2,radius2,point1,point2) {
	if(!com.pblabs.geom.Geometry.isCircleOverlapping(circle1,radius1,circle2,radius2)) return false;
	var dist = Math.sqrt((circle2.x - circle1.x) * (circle2.x - circle1.x) + (circle2.y - circle1.y) * (circle2.y - circle1.y));
	var a = ((radius1 - radius2) + (dist * dist)) / (2 * dist);
	var b = ((radius2 - radius1) + (dist * dist)) / (2 * dist);
	var p2 = new com.pblabs.geom.Vector2();
	p2.x = circle1.x + (a * (circle2.x - circle1.x)) / dist;
	p2.y = circle1.y + (a * (circle2.y - circle1.y)) / dist;
	var h1 = Math.sqrt(radius1 * radius1 - a * a);
	point1.x = p2.x - (h1 * (circle2.y - circle1.y)) / dist;
	point1.y = p2.y - (h1 * (circle2.x - circle1.x)) / dist;
	var h2 = Math.sqrt(radius2 * radius2 - a * a);
	point2.x = p2.x - (h2 * (circle2.y - circle1.y)) / dist;
	point2.y = p2.y - (h2 * (circle2.x - circle1.x)) / dist;
	return true;
}
com.pblabs.geom.Geometry.getCircleIntersectionArea = function(circle1,radius1,circle2,radius2) {
	if(!com.pblabs.geom.Geometry.isCircleOverlapping(circle1,radius1,circle2,radius2)) return 0;
	var dist = Math.sqrt((circle1.x - circle2.x) * (circle1.x - circle2.x) + (circle1.y - circle2.y) * (circle1.y - circle2.y));
	var CBD = 2 * Math.acos(((radius2 * radius2 + dist * dist) - radius1 * radius1) / ((radius2 * dist) * 2));
	var CAD = 2 * Math.acos(((radius1 * radius1 + dist * dist) - radius2 * radius2) / ((radius1 * dist) * 2));
	var area = ((((.5 * CBD) * radius2) * radius2 - ((.5 * radius2) * radius2) * Math.sin(CBD)) + ((.5 * CAD) * radius1) * radius1) - ((.5 * radius1) * radius1) * Math.sin(CAD);
	return area;
}
com.pblabs.geom.Geometry.circleArea = function(radius) {
	return (Math.PI * radius) * radius;
}
com.pblabs.geom.Geometry.isPointInCircle = function(point,circle,radius) {
	var distSq = com.pblabs.geom.VectorTools.lengthSq(point.subtract(circle));
	if(distSq < (radius * radius)) return true;
	return false;
}
com.pblabs.geom.Geometry.isCircleOverlappingSegment = function(A,B,circle,radius) {
	var distSq = com.pblabs.geom.LineSegment.distToLineSegmentSq(A,B,circle);
	if(distSq < radius * radius) return true;
	return false;
}
com.pblabs.geom.Geometry.isPointInsideRotatedRect = function(A,locX,locY,width,height,angle) {
	var relativePoint = new com.pblabs.geom.Vector2(A.x - locX,A.y - locY);
	if(angle != 0) {
		relativePoint.rotateLocal(-angle);
	}
	return relativePoint.x >= -width / 2 && relativePoint.x <= width / 2 && relativePoint.y <= height / 2 && relativePoint.y >= -height / 2;
}
com.pblabs.geom.Geometry.isPointInsideRect = function(A,x,y,w,h) {
	return A.x >= x && A.x <= x + w && A.y >= y && A.y <= y + h;
}
com.pblabs.geom.Geometry.getLineCircleClosestIntersection = function(A,B,circle,radius,intersectionPoint) {
	throw "Not implemented";
	return false;
}
com.pblabs.geom.Geometry.bezier = function(v1,v2,v3,t,v) {
	var fac1 = Math.pow(1 - t,2);
	var fac2 = (2 * t) * (1 - t);
	var fac3 = Math.pow(t,2);
	var x = (fac1 * v1.x + fac2 * v2.x) + fac3 * v3.x;
	var y = (fac1 * v1.y + fac2 * v2.y) + fac3 * v3.y;
	if(v == null) {
		return new com.pblabs.geom.Vector2(x,y);
	}
	else {
		v.x = x;
		v.y = y;
	}
	return v;
}
com.pblabs.geom.Geometry.prototype.__class__ = com.pblabs.geom.Geometry;
com.pblabs.util.ds.maps.AbstractMap = function(p) { if( p === $_ ) return; {
	this._size = 0;
}}
com.pblabs.util.ds.maps.AbstractMap.__name__ = ["com","pblabs","util","ds","maps","AbstractMap"];
com.pblabs.util.ds.maps.AbstractMap.prototype._size = null;
com.pblabs.util.ds.maps.AbstractMap.prototype.clear = function() {
	this._size = 0;
}
com.pblabs.util.ds.maps.AbstractMap.prototype.exists = function(key) {
	throw "Subclasses must override";
	return false;
}
com.pblabs.util.ds.maps.AbstractMap.prototype.remove = function(key) {
	if(this.exists(key)) {
		this._size--;
		return true;
	}
	return false;
}
com.pblabs.util.ds.maps.AbstractMap.prototype.set = function(key,value) {
	if(!this.exists(key)) {
		this._size++;
	}
}
com.pblabs.util.ds.maps.AbstractMap.prototype.size = function() {
	return this._size;
}
com.pblabs.util.ds.maps.AbstractMap.prototype.__class__ = com.pblabs.util.ds.maps.AbstractMap;
com.pblabs.util.ds.maps.IntHashMap = function(p) { if( p === $_ ) return; {
	com.pblabs.util.ds.maps.AbstractMap.apply(this,[]);
	this.createDictionary();
}}
com.pblabs.util.ds.maps.IntHashMap.__name__ = ["com","pblabs","util","ds","maps","IntHashMap"];
com.pblabs.util.ds.maps.IntHashMap.__super__ = com.pblabs.util.ds.maps.AbstractMap;
for(var k in com.pblabs.util.ds.maps.AbstractMap.prototype ) com.pblabs.util.ds.maps.IntHashMap.prototype[k] = com.pblabs.util.ds.maps.AbstractMap.prototype[k];
com.pblabs.util.ds.maps.IntHashMap.prototype.clear = function() {
	com.pblabs.util.ds.maps.AbstractMap.prototype.clear.apply(this,[]);
	this.createDictionary();
}
com.pblabs.util.ds.maps.IntHashMap.prototype.createDictionary = function() {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}
com.pblabs.util.ds.maps.IntHashMap.prototype.exists = function(key) {
	return this.h[key] != null;
}
com.pblabs.util.ds.maps.IntHashMap.prototype.get = function(key) {
	return this.h[key];
}
com.pblabs.util.ds.maps.IntHashMap.prototype.h = null;
com.pblabs.util.ds.maps.IntHashMap.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}}
}
com.pblabs.util.ds.maps.IntHashMap.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
com.pblabs.util.ds.maps.IntHashMap.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	this._size--;
	return true;
}
com.pblabs.util.ds.maps.IntHashMap.prototype.set = function(key,value) {
	com.pblabs.util.ds.maps.AbstractMap.prototype.set.apply(this,[key,value]);
	this.h[key] = value;
}
com.pblabs.util.ds.maps.IntHashMap.prototype.__class__ = com.pblabs.util.ds.maps.IntHashMap;
com.pblabs.util.ds.maps.IntHashMap.__interfaces__ = [com.pblabs.util.ds.Map];
com.pblabs.components.tasks.TaskContainer = function(type,subtasks) { if( type === $_ ) return; {
	if(type >= com.pblabs.components.tasks.TaskContainer.TYPE__LIMIT) {
		throw "invalid 'type' parameter";
	}
	this._type = type;
	this._tasks = [];
	this._completedTasks = [];
	if(subtasks != null) {
		{
			var _g = 0;
			while(_g < subtasks.length) {
				var task = subtasks[_g];
				++_g;
				this.addTask(task);
			}
		}
	}
}}
com.pblabs.components.tasks.TaskContainer.__name__ = ["com","pblabs","components","tasks","TaskContainer"];
com.pblabs.components.tasks.TaskContainer.prototype._activeTaskCount = null;
com.pblabs.components.tasks.TaskContainer.prototype._completedTasks = null;
com.pblabs.components.tasks.TaskContainer.prototype._invalidated = null;
com.pblabs.components.tasks.TaskContainer.prototype._tasks = null;
com.pblabs.components.tasks.TaskContainer.prototype._type = null;
com.pblabs.components.tasks.TaskContainer.prototype.addTask = function(task) {
	if(null == task) {
		throw "task must be non-null";
	}
	this._tasks.push(task);
	this._completedTasks.push(null);
	this._activeTaskCount += 1;
}
com.pblabs.components.tasks.TaskContainer.prototype.applyFunction = function(f) {
	this._invalidated = false;
	var n = this._tasks.length;
	{
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			if(this._tasks[i] == null) {
				continue;
			}
			var task = ((function($this) {
				var $r;
				var $t = $this._tasks[i];
				if(Std["is"]($t,com.pblabs.components.tasks.IEntityTask)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)));
			if(null == task) {
				continue;
			}
			var complete = f(task);
			if(this._invalidated) {
				return false;
			}
			if(!complete && com.pblabs.components.tasks.TaskContainer.TYPE_PARALLEL != this._type) {
				break;
			}
			else if(complete) {
				this._completedTasks[i] = this._tasks[i];
				this._tasks[i] = null;
				this._activeTaskCount -= 1;
			}
		}
	}
	if(this._type == com.pblabs.components.tasks.TaskContainer.TYPE_REPEATING && 0 == this._activeTaskCount && this._completedTasks.length > 0) {
		var completedTasks = this._completedTasks;
		this._tasks = new Array();
		this._completedTasks = new Array();
		{
			var _g = 0;
			while(_g < completedTasks.length) {
				var completedTask = completedTasks[_g];
				++_g;
				this.addTask(completedTask.clone());
			}
		}
	}
	return (0 == this._activeTaskCount);
}
com.pblabs.components.tasks.TaskContainer.prototype.clone = function() {
	var clonedSubtasks = this.cloneSubtasks();
	var theClone = new com.pblabs.components.tasks.TaskContainer(this._type);
	theClone._tasks = clonedSubtasks;
	theClone._completedTasks = new Array();
	{
		var _g1 = 0, _g = clonedSubtasks.length;
		while(_g1 < _g) {
			var i = _g1++;
			theClone._completedTasks[i] = null;
		}
	}
	theClone._activeTaskCount = clonedSubtasks.length;
	return theClone;
}
com.pblabs.components.tasks.TaskContainer.prototype.cloneSubtasks = function() {
	if(!this._tasks.length == this._completedTasks.length) null;
	var out = new Array();
	var n = this._tasks.length;
	{
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			var task = ((null != this._tasks[i]?(function($this) {
				var $r;
				var $t = $this._tasks[i];
				if(Std["is"]($t,com.pblabs.components.tasks.IEntityTask)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)):(function($this) {
				var $r;
				var $t = $this._completedTasks[i];
				if(Std["is"]($t,com.pblabs.components.tasks.IEntityTask)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))));
			if(task == null) null;
			out[i] = task.clone();
		}
	}
	return out;
}
com.pblabs.components.tasks.TaskContainer.prototype.hasTasks = function() {
	return (this._activeTaskCount > 0);
}
com.pblabs.components.tasks.TaskContainer.prototype.removeAllTasks = function() {
	this._invalidated = true;
	this._tasks = new Array();
	this._completedTasks = new Array();
	this._activeTaskCount = 0;
}
com.pblabs.components.tasks.TaskContainer.prototype.update = function(dt,obj) {
	var result = this.applyFunction(function(task) {
		return task.update(dt,obj);
	});
	return result;
}
com.pblabs.components.tasks.TaskContainer.prototype.__class__ = com.pblabs.components.tasks.TaskContainer;
com.pblabs.components.tasks.TaskContainer.__interfaces__ = [com.pblabs.components.tasks.IEntityTask];
com.pblabs.components.tasks.ParallelTask = function(subtask1,subtask2,subtask3) { if( subtask1 === $_ ) return; {
	var subtasks = new Array();
	if(subtask1 != null) {
		subtasks.push(subtask1);
	}
	if(subtask2 != null) {
		subtasks.push(subtask2);
	}
	if(subtask3 != null) {
		subtasks.push(subtask3);
	}
	com.pblabs.components.tasks.TaskContainer.apply(this,[com.pblabs.components.tasks.TaskContainer.TYPE_PARALLEL,subtasks]);
}}
com.pblabs.components.tasks.ParallelTask.__name__ = ["com","pblabs","components","tasks","ParallelTask"];
com.pblabs.components.tasks.ParallelTask.__super__ = com.pblabs.components.tasks.TaskContainer;
for(var k in com.pblabs.components.tasks.TaskContainer.prototype ) com.pblabs.components.tasks.ParallelTask.prototype[k] = com.pblabs.components.tasks.TaskContainer.prototype[k];
com.pblabs.components.tasks.ParallelTask.prototype.__class__ = com.pblabs.components.tasks.ParallelTask;
if(typeof haxe=='undefined') haxe = {}
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.Infos = function() { }
haxe.rtti.Infos.__name__ = ["haxe","rtti","Infos"];
haxe.rtti.Infos.prototype.__class__ = haxe.rtti.Infos;
com.pblabs.engine.core.IEntityComponent = function() { }
com.pblabs.engine.core.IEntityComponent.__name__ = ["com","pblabs","engine","core","IEntityComponent"];
com.pblabs.engine.core.IEntityComponent.prototype.context = null;
com.pblabs.engine.core.IEntityComponent.prototype.isRegistered = null;
com.pblabs.engine.core.IEntityComponent.prototype.name = null;
com.pblabs.engine.core.IEntityComponent.prototype.owner = null;
com.pblabs.engine.core.IEntityComponent.prototype.register = null;
com.pblabs.engine.core.IEntityComponent.prototype.reset = null;
com.pblabs.engine.core.IEntityComponent.prototype.unregister = null;
com.pblabs.engine.core.IEntityComponent.prototype.__class__ = com.pblabs.engine.core.IEntityComponent;
com.pblabs.engine.core.EntityComponent = function(p) { if( p === $_ ) return; {
	this._context = null;
	this._sanityCheck = false;
	this._isRegistered = false;
	this._owner = null;
	this._name = null;
}}
com.pblabs.engine.core.EntityComponent.__name__ = ["com","pblabs","engine","core","EntityComponent"];
com.pblabs.engine.core.EntityComponent.prototype._context = null;
com.pblabs.engine.core.EntityComponent.prototype._isRegistered = null;
com.pblabs.engine.core.EntityComponent.prototype._name = null;
com.pblabs.engine.core.EntityComponent.prototype._owner = null;
com.pblabs.engine.core.EntityComponent.prototype._sanityCheck = null;
com.pblabs.engine.core.EntityComponent.prototype.context = null;
com.pblabs.engine.core.EntityComponent.prototype.get_context = function() {
	return this._context;
}
com.pblabs.engine.core.EntityComponent.prototype.get_isRegistered = function() {
	return this._isRegistered;
}
com.pblabs.engine.core.EntityComponent.prototype.get_name = function() {
	return this._name;
}
com.pblabs.engine.core.EntityComponent.prototype.get_owner = function() {
	return this._owner;
}
com.pblabs.engine.core.EntityComponent.prototype.isRegistered = null;
com.pblabs.engine.core.EntityComponent.prototype.name = null;
com.pblabs.engine.core.EntityComponent.prototype.onAdd = function() {
	this._sanityCheck = true;
}
com.pblabs.engine.core.EntityComponent.prototype.onRemove = function() {
	this._sanityCheck = true;
}
com.pblabs.engine.core.EntityComponent.prototype.onReset = function() {
	this._sanityCheck = true;
}
com.pblabs.engine.core.EntityComponent.prototype.owner = null;
com.pblabs.engine.core.EntityComponent.prototype.register = function(owner,name) {
	com.pblabs.util.Preconditions.checkArgument(!this.get_isRegistered(),"Trying to register an already-registered component!");
	this._context = owner.get_context();
	this._name = name;
	this._owner = owner;
	this._sanityCheck = false;
	this._isRegistered = true;
	this.onAdd();
	com.pblabs.util.Preconditions.checkArgument(this._sanityCheck,("Forgot to call super.onAdd(); in " + this) + "!");
}
com.pblabs.engine.core.EntityComponent.prototype.reset = function() {
	this._sanityCheck = false;
	this.onReset();
	com.pblabs.util.Preconditions.checkArgument(this._sanityCheck,("Forgot to call super.onReset(); in " + this) + "!");
}
com.pblabs.engine.core.EntityComponent.prototype.set_context = function(value) {
	com.pblabs.util.Preconditions.checkArgument(this._context == null || this._context == value,com.pblabs.util.ReflectUtil.getClassName(this) + " already registered in another context.");
	this._context = value;
	return value;
}
com.pblabs.engine.core.EntityComponent.prototype.set_name = function(name) {
	com.pblabs.util.Preconditions.checkArgument(this._name == null,com.pblabs.util.ReflectUtil.getClassName(this) + " already has a name");
	this._name = name;
	return name;
}
com.pblabs.engine.core.EntityComponent.prototype.set_owner = function(value) {
	com.pblabs.util.Preconditions.checkNotNull(value,"Cannot set an Entity owner to null.  This can only happen on unRegister");
	com.pblabs.util.Preconditions.checkArgument(this._owner == null,"Cannot change the owner");
	this._owner = value;
	return value;
}
com.pblabs.engine.core.EntityComponent.prototype.unregister = function() {
	com.pblabs.util.Preconditions.checkArgument(this.get_isRegistered(),"Trying to unregister an unregistered component!");
	this._isRegistered = false;
	this._sanityCheck = false;
	this.onRemove();
	com.pblabs.util.Preconditions.checkArgument(this._sanityCheck,("Forgot to call super.onRemove(); in " + this) + "!");
	this._owner = null;
	this._name = null;
	this._context = null;
}
com.pblabs.engine.core.EntityComponent.prototype.__class__ = com.pblabs.engine.core.EntityComponent;
com.pblabs.engine.core.EntityComponent.__interfaces__ = [haxe.rtti.Infos,com.pblabs.engine.core.IEntityComponent];
haxe.rtti.XmlParser = function(p) { if( p === $_ ) return; {
	this.root = new Array();
}}
haxe.rtti.XmlParser.__name__ = ["haxe","rtti","XmlParser"];
haxe.rtti.XmlParser.prototype.curplatform = null;
haxe.rtti.XmlParser.prototype.defplat = function() {
	var l = new List();
	if(this.curplatform != null) l.add(this.curplatform);
	return l;
}
haxe.rtti.XmlParser.prototype.merge = function(t) {
	var inf = haxe.rtti.TypeApi.typeInfos(t);
	var pack = inf.path.split(".");
	var cur = this.root;
	var curpack = new Array();
	pack.pop();
	{
		var _g = 0;
		while(_g < pack.length) {
			var p = pack[_g];
			++_g;
			var found = false;
			{
				var _g1 = 0;
				try {
					while(_g1 < cur.length) {
						var pk = cur[_g1];
						++_g1;
						var $e = (pk);
						switch( $e[1] ) {
						case 0:
						var subs = $e[4], pname = $e[2];
						{
							if(pname == p) {
								found = true;
								cur = subs;
								throw "__break__";
							}
						}break;
						default:{
							null;
						}break;
						}
					}
				} catch( e ) { if( e != "__break__" ) throw e; }
			}
			curpack.push(p);
			if(!found) {
				var pk = new Array();
				cur.push(haxe.rtti.TypeTree.TPackage(p,curpack.join("."),pk));
				cur = pk;
			}
		}
	}
	var prev = null;
	{
		var _g = 0;
		while(_g < cur.length) {
			var ct = cur[_g];
			++_g;
			var tinf;
			try {
				tinf = haxe.rtti.TypeApi.typeInfos(ct);
			}
			catch( $e0 ) {
				{
					var e = $e0;
					continue;
				}
			}
			if(tinf.path == inf.path) {
				if(tinf.module == inf.module && tinf.doc == inf.doc && tinf.isPrivate == inf.isPrivate) var $e = (ct);
				switch( $e[1] ) {
				case 1:
				var c = $e[2];
				{
					var $e = (t);
					switch( $e[1] ) {
					case 1:
					var c2 = $e[2];
					{
						if(this.mergeClasses(c,c2)) return;
					}break;
					default:{
						null;
					}break;
					}
				}break;
				case 2:
				var e = $e[2];
				{
					var $e = (t);
					switch( $e[1] ) {
					case 2:
					var e2 = $e[2];
					{
						if(this.mergeEnums(e,e2)) return;
					}break;
					default:{
						null;
					}break;
					}
				}break;
				case 3:
				var td = $e[2];
				{
					var $e = (t);
					switch( $e[1] ) {
					case 3:
					var td2 = $e[2];
					{
						if(this.mergeTypedefs(td,td2)) return;
					}break;
					default:{
						null;
					}break;
					}
				}break;
				case 0:
				{
					null;
				}break;
				}
				throw (((("Incompatibilities between " + tinf.path) + " in ") + tinf.platforms.join(",")) + " and ") + this.curplatform;
			}
		}
	}
	cur.push(t);
}
haxe.rtti.XmlParser.prototype.mergeClasses = function(c,c2) {
	if(c.isInterface != c2.isInterface) return false;
	if(this.curplatform != null) c.platforms.add(this.curplatform);
	if(c.isExtern != c2.isExtern) c.isExtern = false;
	{ var $it0 = c2.fields.iterator();
	while( $it0.hasNext() ) { var f2 = $it0.next();
	{
		var found = null;
		{ var $it1 = c.fields.iterator();
		while( $it1.hasNext() ) { var f = $it1.next();
		if(haxe.rtti.TypeApi.fieldEq(f,f2)) {
			found = f;
			break;
		}
		}}
		if(found == null) c.fields.add(f2);
		else if(this.curplatform != null) found.platforms.add(this.curplatform);
	}
	}}
	{ var $it2 = c2.statics.iterator();
	while( $it2.hasNext() ) { var f2 = $it2.next();
	{
		var found = null;
		{ var $it3 = c.statics.iterator();
		while( $it3.hasNext() ) { var f = $it3.next();
		if(haxe.rtti.TypeApi.fieldEq(f,f2)) {
			found = f;
			break;
		}
		}}
		if(found == null) c.statics.add(f2);
		else if(this.curplatform != null) found.platforms.add(this.curplatform);
	}
	}}
	return true;
}
haxe.rtti.XmlParser.prototype.mergeEnums = function(e,e2) {
	if(e.isExtern != e2.isExtern) return false;
	if(this.curplatform != null) e.platforms.add(this.curplatform);
	{ var $it0 = e2.constructors.iterator();
	while( $it0.hasNext() ) { var c2 = $it0.next();
	{
		var found = null;
		{ var $it1 = e.constructors.iterator();
		while( $it1.hasNext() ) { var c = $it1.next();
		if(haxe.rtti.TypeApi.constructorEq(c,c2)) {
			found = c;
			break;
		}
		}}
		if(found == null) return false;
		if(this.curplatform != null) found.platforms.add(this.curplatform);
	}
	}}
	return true;
}
haxe.rtti.XmlParser.prototype.mergeTypedefs = function(t,t2) {
	if(this.curplatform == null) return false;
	t.platforms.add(this.curplatform);
	t.types.set(this.curplatform,t2.type);
	return true;
}
haxe.rtti.XmlParser.prototype.mkPath = function(p) {
	return p;
}
haxe.rtti.XmlParser.prototype.mkRights = function(r) {
	return (function($this) {
		var $r;
		switch(r) {
		case "null":{
			$r = haxe.rtti.Rights.RNo;
		}break;
		case "method":{
			$r = haxe.rtti.Rights.RMethod;
		}break;
		case "dynamic":{
			$r = haxe.rtti.Rights.RDynamic;
		}break;
		case "inline":{
			$r = haxe.rtti.Rights.RInline;
		}break;
		default:{
			$r = haxe.rtti.Rights.RCall(r);
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.mkTypeParams = function(p) {
	var pl = p.split(":");
	if(pl[0] == "") return new Array();
	return pl;
}
haxe.rtti.XmlParser.prototype.process = function(x,platform) {
	this.curplatform = platform;
	this.xroot(new haxe.xml.Fast(x));
}
haxe.rtti.XmlParser.prototype.processElement = function(x) {
	var c = new haxe.xml.Fast(x);
	return (function($this) {
		var $r;
		switch(c.getName()) {
		case "class":{
			$r = haxe.rtti.TypeTree.TClassdecl($this.xclass(c));
		}break;
		case "enum":{
			$r = haxe.rtti.TypeTree.TEnumdecl($this.xenum(c));
		}break;
		case "typedef":{
			$r = haxe.rtti.TypeTree.TTypedecl($this.xtypedef(c));
		}break;
		default:{
			$r = $this.xerror(c);
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.root = null;
haxe.rtti.XmlParser.prototype.sort = function(l) {
	if(l == null) l = this.root;
	l.sort(function(e1,e2) {
		var n1 = (function($this) {
			var $r;
			var $e = e1;
			switch( $e[1] ) {
			case 0:
			var p = $e[2];
			{
				$r = " " + p;
			}break;
			default:{
				$r = haxe.rtti.TypeApi.typeInfos(e1).path;
			}break;
			}
			return $r;
		}(this));
		var n2 = (function($this) {
			var $r;
			var $e = e2;
			switch( $e[1] ) {
			case 0:
			var p = $e[2];
			{
				$r = " " + p;
			}break;
			default:{
				$r = haxe.rtti.TypeApi.typeInfos(e2).path;
			}break;
			}
			return $r;
		}(this));
		if(n1 > n2) return 1;
		return -1;
	});
	{
		var _g = 0;
		while(_g < l.length) {
			var x = l[_g];
			++_g;
			var $e = (x);
			switch( $e[1] ) {
			case 0:
			var l1 = $e[4];
			{
				this.sort(l1);
			}break;
			case 1:
			var c = $e[2];
			{
				c.fields = this.sortFields(c.fields);
				c.statics = this.sortFields(c.statics);
			}break;
			case 2:
			var e = $e[2];
			{
				null;
			}break;
			case 3:
			{
				null;
			}break;
			}
		}
	}
}
haxe.rtti.XmlParser.prototype.sortFields = function(fl) {
	var a = Lambda.array(fl);
	a.sort(function(f1,f2) {
		var v1 = haxe.rtti.TypeApi.isVar(f1.type);
		var v2 = haxe.rtti.TypeApi.isVar(f2.type);
		if(v1 && !v2) return -1;
		if(v2 && !v1) return 1;
		if(f1.name == "new") return -1;
		if(f2.name == "new") return 1;
		if(f1.name > f2.name) return 1;
		return -1;
	});
	return Lambda.list(a);
}
haxe.rtti.XmlParser.prototype.xclass = function(x) {
	var csuper = null;
	var doc = null;
	var tdynamic = null;
	var interfaces = new List();
	var fields = new List();
	var statics = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	switch(c.getName()) {
	case "haxe_doc":{
		doc = c.getInnerData();
	}break;
	case "extends":{
		csuper = this.xpath(c);
	}break;
	case "implements":{
		interfaces.add(this.xpath(c));
	}break;
	case "haxe_dynamic":{
		tdynamic = this.xtype(new haxe.xml.Fast(c.x.firstElement()));
	}break;
	default:{
		if(c.x.exists("static")) statics.add(this.xclassfield(c));
		else fields.add(this.xclassfield(c));
	}break;
	}
	}}
	return { path : this.mkPath(x.att.resolve("path")), module : (x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null), doc : doc, isPrivate : x.x.exists("private"), isExtern : x.x.exists("extern"), isInterface : x.x.exists("interface"), params : this.mkTypeParams(x.att.resolve("params")), superClass : csuper, interfaces : interfaces, fields : fields, statics : statics, tdynamic : tdynamic, platforms : this.defplat()}
}
haxe.rtti.XmlParser.prototype.xclassfield = function(x) {
	var e = x.getElements();
	var t = this.xtype(e.next());
	var doc = null;
	{ var $it0 = e;
	while( $it0.hasNext() ) { var c = $it0.next();
	switch(c.getName()) {
	case "haxe_doc":{
		doc = c.getInnerData();
	}break;
	default:{
		this.xerror(c);
	}break;
	}
	}}
	return { name : x.getName(), type : t, isPublic : x.x.exists("public"), isOverride : x.x.exists("override"), doc : doc, get : (x.has.resolve("get")?this.mkRights(x.att.resolve("get")):haxe.rtti.Rights.RNormal), set : (x.has.resolve("set")?this.mkRights(x.att.resolve("set")):haxe.rtti.Rights.RNormal), params : (x.has.resolve("params")?this.mkTypeParams(x.att.resolve("params")):null), platforms : this.defplat()}
}
haxe.rtti.XmlParser.prototype.xenum = function(x) {
	var cl = new List();
	var doc = null;
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	if(c.getName() == "haxe_doc") doc = c.getInnerData();
	else cl.add(this.xenumfield(c));
	}}
	return { path : this.mkPath(x.att.resolve("path")), module : (x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null), doc : doc, isPrivate : x.x.exists("private"), isExtern : x.x.exists("extern"), params : this.mkTypeParams(x.att.resolve("params")), constructors : cl, platforms : this.defplat()}
}
haxe.rtti.XmlParser.prototype.xenumfield = function(x) {
	var args = null;
	var xdoc = x.x.elementsNamed("haxe_doc").next();
	if(x.has.resolve("a")) {
		var names = x.att.resolve("a").split(":");
		var elts = x.getElements();
		args = new List();
		{
			var _g = 0;
			while(_g < names.length) {
				var c = names[_g];
				++_g;
				var opt = false;
				if(c.charAt(0) == "?") {
					opt = true;
					c = c.substr(1);
				}
				args.add({ name : c, opt : opt, t : this.xtype(elts.next())});
			}
		}
	}
	return { name : x.getName(), args : args, doc : (xdoc == null?null:new haxe.xml.Fast(xdoc).getInnerData()), platforms : this.defplat()}
}
haxe.rtti.XmlParser.prototype.xerror = function(c) {
	return (function($this) {
		var $r;
		throw "Invalid " + c.getName();
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.xpath = function(x) {
	var path = this.mkPath(x.att.resolve("path"));
	var params = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	params.add(this.xtype(c));
	}}
	return { path : path, params : params}
}
haxe.rtti.XmlParser.prototype.xroot = function(x) {
	{ var $it0 = x.x.elements();
	while( $it0.hasNext() ) { var c = $it0.next();
	this.merge(this.processElement(c));
	}}
}
haxe.rtti.XmlParser.prototype.xtype = function(x) {
	return (function($this) {
		var $r;
		switch(x.getName()) {
		case "unknown":{
			$r = haxe.rtti.CType.CUnknown;
		}break;
		case "e":{
			$r = haxe.rtti.CType.CEnum($this.mkPath(x.att.resolve("path")),$this.xtypeparams(x));
		}break;
		case "c":{
			$r = haxe.rtti.CType.CClass($this.mkPath(x.att.resolve("path")),$this.xtypeparams(x));
		}break;
		case "t":{
			$r = haxe.rtti.CType.CTypedef($this.mkPath(x.att.resolve("path")),$this.xtypeparams(x));
		}break;
		case "f":{
			$r = (function($this) {
				var $r;
				var args = new List();
				var aname = x.att.resolve("a").split(":");
				var eargs = aname.iterator();
				{ var $it0 = x.getElements();
				while( $it0.hasNext() ) { var e = $it0.next();
				{
					var opt = false;
					var a = eargs.next();
					if(a == null) a = "";
					if(a.charAt(0) == "?") {
						opt = true;
						a = a.substr(1);
					}
					args.add({ name : a, opt : opt, t : $this.xtype(e)});
				}
				}}
				var ret = args.last();
				args.remove(ret);
				$r = haxe.rtti.CType.CFunction(args,ret.t);
				return $r;
			}($this));
		}break;
		case "a":{
			$r = (function($this) {
				var $r;
				var fields = new List();
				{ var $it1 = x.getElements();
				while( $it1.hasNext() ) { var f = $it1.next();
				fields.add({ name : f.getName(), t : $this.xtype(new haxe.xml.Fast(f.x.firstElement()))});
				}}
				$r = haxe.rtti.CType.CAnonymous(fields);
				return $r;
			}($this));
		}break;
		case "d":{
			$r = (function($this) {
				var $r;
				var t = null;
				var tx = x.x.firstElement();
				if(tx != null) t = $this.xtype(new haxe.xml.Fast(tx));
				$r = haxe.rtti.CType.CDynamic(t);
				return $r;
			}($this));
		}break;
		default:{
			$r = $this.xerror(x);
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.xtypedef = function(x) {
	var doc = null;
	var t = null;
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	if(c.getName() == "haxe_doc") doc = c.getInnerData();
	else t = this.xtype(c);
	}}
	var types = new Hash();
	if(this.curplatform != null) types.set(this.curplatform,t);
	return { path : this.mkPath(x.att.resolve("path")), module : (x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null), doc : doc, isPrivate : x.x.exists("private"), params : this.mkTypeParams(x.att.resolve("params")), type : t, types : types, platforms : this.defplat()}
}
haxe.rtti.XmlParser.prototype.xtypeparams = function(x) {
	var p = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	p.add(this.xtype(c));
	}}
	return p;
}
haxe.rtti.XmlParser.prototype.__class__ = haxe.rtti.XmlParser;
com.pblabs.components.tasks.LocationTask = function(xRef,yRef,x,y,time,easingFn) { if( xRef === $_ ) return; {
	if(time == null) time = 0;
	com.pblabs.components.tasks.ParallelTask.apply(this,[]);
	xRef = (xRef == null?com.pblabs.components.base.LocationComponent.P_X:xRef);
	yRef = (yRef == null?com.pblabs.components.base.LocationComponent.P_Y:yRef);
	this.addTask(new com.pblabs.components.tasks.AnimatePropertyTask(xRef,x,time,easingFn));
	this.addTask(new com.pblabs.components.tasks.AnimatePropertyTask(yRef,y,time,easingFn));
}}
com.pblabs.components.tasks.LocationTask.__name__ = ["com","pblabs","components","tasks","LocationTask"];
com.pblabs.components.tasks.LocationTask.__super__ = com.pblabs.components.tasks.ParallelTask;
for(var k in com.pblabs.components.tasks.ParallelTask.prototype ) com.pblabs.components.tasks.LocationTask.prototype[k] = com.pblabs.components.tasks.ParallelTask.prototype[k];
com.pblabs.components.tasks.LocationTask.CreateLinear = function(x,y,time,xRef,yRef) {
	return new com.pblabs.components.tasks.LocationTask(xRef,yRef,x,y,time,$closure(feffects.easing.Linear,"easeNone"));
}
com.pblabs.components.tasks.LocationTask.CreateSmooth = function(x,y,time,xRef,yRef) {
	return new com.pblabs.components.tasks.LocationTask(xRef,yRef,x,y,time,$closure(feffects.easing.Cubic,"easeInOut"));
}
com.pblabs.components.tasks.LocationTask.CreateEaseIn = function(x,y,time,xRef,yRef) {
	return new com.pblabs.components.tasks.LocationTask(xRef,yRef,x,y,time,$closure(feffects.easing.Cubic,"easeIn"));
}
com.pblabs.components.tasks.LocationTask.CreateEaseOut = function(x,y,time,xRef,yRef) {
	return new com.pblabs.components.tasks.LocationTask(xRef,yRef,x,y,time,$closure(feffects.easing.Cubic,"easeOut"));
}
com.pblabs.components.tasks.LocationTask.prototype.__class__ = com.pblabs.components.tasks.LocationTask;
if(!com.pblabs.engine.serialization) com.pblabs.engine.serialization = {}
com.pblabs.engine.serialization.Serializer = function(p) { if( p === $_ ) return; {
	this._deserializers = com.pblabs.util.ds.Maps.newHashMap(String);
	this._serializers = com.pblabs.util.ds.Maps.newHashMap(String);
	this._deferredReferences = [];
	this._resources = com.pblabs.util.ds.Maps.newHashMap(String);
	this._deserializers.set("::DefaultComplex",$closure(this,"deserializeComplex"));
	this._deserializers.set("Bool",$closure(com.pblabs.engine.serialization.Serializer,"deserializeBool"));
	this._deserializers.set("Array",$closure(com.pblabs.engine.serialization.Serializer,"deserializeDictionary"));
	this._deserializers.set("Class",$closure(this,"deserializeClass"));
	this._deserializers.set("com.pblabs.util.Enumerable",$closure(this,"deserializeEnumerable"));
	this._serializers.set("::DefaultSimple",$closure(this,"serializeSimple"));
	this._serializers.set("::DefaultComplex",$closure(this,"serializeComplex"));
	this._serializers.set("Bool",$closure(com.pblabs.engine.serialization.Serializer,"serializeBool"));
	this._serializers.set("Int",$closure(com.pblabs.engine.serialization.Serializer,"serializeInt"));
	this._serializers.set("Float",$closure(com.pblabs.engine.serialization.Serializer,"serializeFloat"));
	this._serializers.set("com.pblabs.util.Enumerable",$closure(this,"serializeEnumerable"));
}}
com.pblabs.engine.serialization.Serializer.__name__ = ["com","pblabs","engine","serialization","Serializer"];
com.pblabs.engine.serialization.Serializer.isIgnored = function(cls,fieldName) {
	var meta = haxe.rtti.Meta.getFields(cls);
	if(meta != null && Reflect.hasField(meta,fieldName)) {
		var editorData = Reflect.field(Reflect.field(meta,fieldName),"editorData");
		if(editorData != null) {
			{
				var _g = 0, _g1 = (function($this) {
					var $r;
					var $t = editorData;
					if(Std["is"]($t,Array)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this));
				while(_g < _g1.length) {
					var val = _g1[_g];
					++_g;
					if(Reflect.hasField(val,"ignore") && Reflect.field(val,"ignore")) {
						return true;
					}
				}
			}
		}
	}
	var supercls = Type.getSuperClass(cls);
	if(supercls != null) {
		return com.pblabs.engine.serialization.Serializer.isIgnored(supercls,fieldName);
	}
	else {
		return false;
	}
}
com.pblabs.engine.serialization.Serializer.serializeProperty = function(object,xml) {
	xml.setNodeValue(Std.string(object));
}
com.pblabs.engine.serialization.Serializer.deserializeBool = function(context,object,xml,typeHint) {
	return (xml.toString() == "true");
}
com.pblabs.engine.serialization.Serializer.serializeBool = function(val,xml) {
	xml.setNodeValue((val?"true":"false"));
}
com.pblabs.engine.serialization.Serializer.deserializeInt = function(context,object,xml) {
	null;
}
com.pblabs.engine.serialization.Serializer.serializeInt = function(val,xml) {
	xml.setNodeValue(Std.string(val));
}
com.pblabs.engine.serialization.Serializer.deserializeFloat = function(context,object,xml,typeHint) {
	null;
}
com.pblabs.engine.serialization.Serializer.serializeFloat = function(val,xml) {
	xml.setNodeValue(Std.string(val));
}
com.pblabs.engine.serialization.Serializer.deserializeDictionary = function(context,object,xml,typeHint) {
	throw "Not implemented";
	return object;
}
com.pblabs.engine.serialization.Serializer.prototype._currentEntity = null;
com.pblabs.engine.serialization.Serializer.prototype._deferredReferences = null;
com.pblabs.engine.serialization.Serializer.prototype._deserializers = null;
com.pblabs.engine.serialization.Serializer.prototype._resources = null;
com.pblabs.engine.serialization.Serializer.prototype._serializers = null;
com.pblabs.engine.serialization.Serializer.prototype.clearCurrentEntity = function() {
	this._currentEntity = null;
}
com.pblabs.engine.serialization.Serializer.prototype.deserialize = function(context,object,xml,typeHint) {
	haxe.Log.trace("deserialize " + object,{ fileName : "Serializer.hx", lineNumber : 133, className : "com.pblabs.engine.serialization.Serializer", methodName : "deserialize"});
	com.pblabs.util.Preconditions.checkNotNull(context,"context is null");
	com.pblabs.util.Preconditions.checkNotNull(object,"object is null");
	com.pblabs.util.Preconditions.checkNotNull(xml,"xml is null");
	if(Std["is"](object,com.pblabs.engine.serialization.ISerializable)) {
		return (function($this) {
			var $r;
			var $t = object;
			if(Std["is"]($t,com.pblabs.engine.serialization.ISerializable)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).deserialize(xml,context);
	}
	else if(Std["is"](object,com.pblabs.engine.core.IEntity)) {
		this._currentEntity = (function($this) {
			var $r;
			var $t = object;
			if(Std["is"]($t,com.pblabs.engine.core.IEntity)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this._currentEntity.deserialize(xml,true);
		this.resolveReferences();
		return (function($this) {
			var $r;
			var $t = object;
			if(Std["is"]($t,com.pblabs.engine.core.IEntity)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
	}
	com.pblabs.engine.debug.Log.warn("Currently all deserializable objects must implement ISerializable:   " + com.pblabs.util.ReflectUtil.getClassName(object),{ fileName : "Serializer.hx", lineNumber : 148, className : "com.pblabs.engine.serialization.Serializer", methodName : "deserialize"});
	return object;
}
com.pblabs.engine.serialization.Serializer.prototype.deserializeClass = function(context,object,xml,typeHint) {
	return Type.resolveClass(xml.getNodeValue());
}
com.pblabs.engine.serialization.Serializer.prototype.deserializeComplex = function(context,object,xml,typeHint) {
	haxe.Log.trace("deserializeComplex",{ fileName : "Serializer.hx", lineNumber : 240, className : "com.pblabs.engine.serialization.Serializer", methodName : "deserializeComplex"});
	var isDynamic = false;
	var xmlPath = "";
	{ var $it0 = xml.elements();
	while( $it0.hasNext() ) { var fieldXML = $it0.next();
	{
		var fieldName = fieldXML.getNodeName();
		var typeName = fieldXML.get("type");
		if(typeName.length < 1) {
			var cls = com.pblabs.util.ReflectUtil.getVarFieldType(object,fieldName);
			if(cls != null) {
				typeName = Type.getClassName(cls);
			}
		}
		if(!this.getChildReference(context,object,fieldName,fieldXML) && !this.getResourceObject(context,object,fieldName,fieldXML)) {
			var child = this.getChildObject(context,object,fieldName,typeName,fieldXML);
			if(child != null) {
				com.pblabs.engine.debug.Log.error(((("The field " + fieldName) + " of type ") + typeName) + " could not be instantiated",{ fileName : "Serializer.hx", lineNumber : 302, className : "com.pblabs.engine.serialization.Serializer", methodName : "deserializeComplex"});
				continue;
			}
			try {
				com.pblabs.util.ReflectUtil.setField(object,fieldName,child);
			}
			catch( $e1 ) {
				{
					var e = $e1;
					{
						xmlPath = this.reportXMLPath(fieldXML);
						com.pblabs.engine.debug.Log.error((((((("The field " + fieldName) + " could not be set to '") + child) + "' due to :") + e.toString()) + " ") + xmlPath,{ fileName : "Serializer.hx", lineNumber : 312, className : "com.pblabs.engine.serialization.Serializer", methodName : "deserializeComplex"});
					}
				}
			}
		}
	}
	}}
	return object;
}
com.pblabs.engine.serialization.Serializer.prototype.deserializeEnumerable = function(context,object,xml,typeHint) {
	return com.pblabs.util.Enumerable.serializedValueOf(xml.get("type"),xml.get("value"));
}
com.pblabs.engine.serialization.Serializer.prototype.getChildObject = function(context,object,fieldName,typeName,fieldXml) {
	var childObject = null;
	try {
		childObject = com.pblabs.util.ReflectUtil.field(object,fieldName);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	var desiredType = Type.resolveClass(typeName);
	if(childObject == null || !(Std["is"](childObject,desiredType))) {
		childObject = context.allocate(Type.resolveClass(typeName));
	}
	if(childObject == null) {
		var xmlPath = this.reportXMLPath(fieldXml);
		com.pblabs.engine.debug.Log.error((((("Unable to create type " + typeName) + " for the field ") + fieldName) + ". ") + xmlPath,{ fileName : "Serializer.hx", lineNumber : 670, className : "com.pblabs.engine.serialization.Serializer", methodName : "getChildObject"});
		return null;
	}
	return childObject;
}
com.pblabs.engine.serialization.Serializer.prototype.getChildReference = function(context,object,fieldName,xml) {
	var nameReference = xml.get("nameReference");
	var componentReference = xml.get("componentReference");
	if(componentReference == null) {
		componentReference = xml.get("entityName");
	}
	var componentName = xml.get("componentName");
	var objectReference = xml.get("objectReference");
	if(nameReference != "" || componentReference != "" || componentName != "" || objectReference != "") {
		var reference = new com.pblabs.engine.serialization._Serializer.ReferenceNote();
		reference.context = context;
		reference.owner = object;
		reference.fieldName = fieldName;
		reference.nameReference = nameReference;
		reference.componentReference = componentReference;
		reference.componentName = componentName;
		reference.objectReference = objectReference;
		reference.currentEntity = this._currentEntity;
		if(!reference.resolve()) this._deferredReferences.push(reference);
		return true;
	}
	return false;
}
com.pblabs.engine.serialization.Serializer.prototype.getResourceObject = function(context,object,fieldName,xml,typeHint) {
	var filename = xml.get("filename");
	if(filename == null || filename == "") {
		filename = com.pblabs.util.XMLUtil.child(xml,"filename").getNodeValue();
	}
	if(filename == null || filename == "") return false;
	var type = null;
	if(typeHint != null) {
		type = Type.resolveClass(typeHint);
	}
	else {
		type = com.pblabs.util.ReflectUtil.getVarFieldType(object,fieldName);
	}
	var resource = new com.pblabs.engine.serialization._Serializer.ResourceNote();
	resource.context = context;
	resource.owner = object;
	resource.fieldName = fieldName;
	resource.load(filename,type);
	this._resources.set(filename,resource);
	return true;
}
com.pblabs.engine.serialization.Serializer.prototype.isSimple = function(xml,typeName) {
	if(typeName == "String") return true;
	if(com.pblabs.util.XMLUtil.hasComplexContent(xml)) return false;
	if(xml.toString() == "") return false;
	return true;
}
com.pblabs.engine.serialization.Serializer.prototype.isSimpleType = function(object) {
	var typeName = com.pblabs.util.ReflectUtil.getClassName(object);
	if(typeName == "String" || typeName == "Int" || typeName == "Float" || typeName == "Bool") return true;
	return false;
}
com.pblabs.engine.serialization.Serializer.prototype.removeResource = function(filename) {
	this._resources.remove(filename);
}
com.pblabs.engine.serialization.Serializer.prototype.reportMissingReferences = function() {
	var _g = 0, _g1 = this._deferredReferences;
	while(_g < _g1.length) {
		var reference = _g1[_g];
		++_g;
		reference.reportMissing();
	}
}
com.pblabs.engine.serialization.Serializer.prototype.reportXMLPath = function(item) {
	var path = "(";
	var stack = [];
	var itemWalk = item;
	while(itemWalk) {
		stack.unshift(itemWalk);
		itemWalk = itemWalk.parent();
	}
	{
		var _g1 = 0, _g = stack.length;
		while(_g1 < _g) {
			var i = _g1++;
			var x = stack[i];
			path += "<" + x.name().toString();
			if(x.hasOwnProperty("@name")) path += (" name=\"" + x.get("name")) + "\"";
			path += ">";
			if(i < stack.length - 1) path += " --> ";
		}
	}
	path += ")";
	return path;
}
com.pblabs.engine.serialization.Serializer.prototype.resolveReferences = function() {
	var i = 0;
	while(i < this._deferredReferences.length) {
		var reference = this._deferredReferences[i];
		if(!reference.resolve()) {
			i++;
		}
		else {
			this._deferredReferences.splice(i,1);
		}
	}
}
com.pblabs.engine.serialization.Serializer.prototype.serialize = function(object,xml) {
	if(Std["is"](object,com.pblabs.engine.serialization.ISerializable)) {
		(function($this) {
			var $r;
			var $t = object;
			if(Std["is"]($t,com.pblabs.engine.serialization.ISerializable)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).serialize(xml);
	}
	else if(Std["is"](object,com.pblabs.engine.core.IEntity)) {
		this._currentEntity = (function($this) {
			var $r;
			var $t = object;
			if(Std["is"]($t,com.pblabs.engine.core.IEntity)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this._currentEntity.serialize(xml);
	}
	else {
		var typeName = com.pblabs.util.ReflectUtil.getClassName(object);
		if(this._serializers.exists(typeName)) {
			typeName = (this.isSimpleType(object)?"::DefaultSimple":"::DefaultComplex");
		}
		else {
			com.pblabs.engine.debug.Log.error("No serializer for " + typeName,{ fileName : "Serializer.hx", lineNumber : 110, className : "com.pblabs.engine.serialization.Serializer", methodName : "serialize"});
		}
	}
}
com.pblabs.engine.serialization.Serializer.prototype.serializeComplex = function(object,xml) {
	if(object == null) {
		return;
	}
	if(Std["is"](object,com.pblabs.util.Enumerable)) {
		this.serializeEnumerable(object,xml);
		return;
	}
	var cls = com.pblabs.util.ReflectUtil.getClass(object);
	haxe.Log.trace(cls,{ fileName : "Serializer.hx", lineNumber : 381, className : "com.pblabs.engine.serialization.Serializer", methodName : "serializeComplex"});
	{
		var _g = 0, _g1 = Type.getInstanceFields(Type.getClass(object));
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			if(StringTools.startsWith(f,"_") || com.pblabs.engine.serialization.Serializer.isIgnored(cls,f)) {
				continue;
			}
			var typeHint = null;
			var valueKey = (function($this) {
				var $r;
				var $e = (Type["typeof"](Reflect.field(object,f)));
				switch( $e[1] ) {
				case 8:
				{
					$r = null;
				}break;
				case 4:
				{
					$r = null;
				}break;
				case 0:
				{
					$r = "unknown";
				}break;
				case 1:
				{
					$r = "Int";
				}break;
				case 5:
				{
					$r = null;
				}break;
				case 2:
				{
					$r = "Float";
				}break;
				case 7:
				var e = $e[2];
				{
					$r = null;
				}break;
				case 6:
				var c = $e[2];
				{
					$r = (function($this) {
						var $r;
						typeHint = Type.getClassName(c);
						$r = (typeHint == "String"?"::DefaultSimple":"::DefaultComplex");
						return $r;
					}($this));
				}break;
				case 3:
				{
					$r = "Bool";
				}break;
				}
				return $r;
			}(this));
			if(valueKey == "unknown") {
				var val = com.pblabs.util.ReflectUtil.field(object,f);
				typeHint = com.pblabs.util.ReflectUtil.getClassName(val);
				if(val == null) {
					valueKey = null;
				}
				else {
					valueKey = (typeHint == "String"?"::DefaultSimple":"::DefaultComplex");
				}
			}
			if(valueKey != null && com.pblabs.util.ReflectUtil.field(object,f) != null) {
				var childXml = Xml.createElement(f);
				if(typeHint != null && typeHint != "String") {
					childXml.set("type",typeHint);
				}
				(this._serializers.get(valueKey))(com.pblabs.util.ReflectUtil.field(object,f),childXml);
				xml.addChild(childXml);
			}
		}
	}
}
com.pblabs.engine.serialization.Serializer.prototype.serializeDictionary = function(object,xml) {
	throw "Not implemented";
}
com.pblabs.engine.serialization.Serializer.prototype.serializeEnumerable = function(object,xml) {
	var e = object;
	xml.set("value",e._name);
}
com.pblabs.engine.serialization.Serializer.prototype.serializeSimple = function(value,xml) {
	xml.setNodeValue(Std.string(value));
}
com.pblabs.engine.serialization.Serializer.prototype.setChildReference = function(object,reference,xml) {
	if(Std["is"](reference,com.pblabs.engine.core.IEntity)) {
		xml.set("nameReference",(function($this) {
			var $r;
			var $t = reference;
			if(Std["is"]($t,com.pblabs.engine.core.IEntity)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).get_name());
		return true;
	}
	if(Std["is"](reference,com.pblabs.engine.core.IEntityComponent)) {
		xml.set("entityName",(function($this) {
			var $r;
			var $t = reference;
			if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).get_owner().get_name());
		xml.set("componentName",(function($this) {
			var $r;
			var $t = reference;
			if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).get_name());
		return true;
	}
	return false;
}
com.pblabs.engine.serialization.Serializer.prototype.setCurrentEntity = function(e) {
	this._currentEntity = e;
}
com.pblabs.engine.serialization.Serializer.prototype.__class__ = com.pblabs.engine.serialization.Serializer;
if(!com.pblabs.engine.serialization._Serializer) com.pblabs.engine.serialization._Serializer = {}
com.pblabs.engine.serialization._Serializer.ResourceNote = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.engine.serialization._Serializer.ResourceNote.__name__ = ["com","pblabs","engine","serialization","_Serializer","ResourceNote"];
com.pblabs.engine.serialization._Serializer.ResourceNote.prototype.context = null;
com.pblabs.engine.serialization._Serializer.ResourceNote.prototype.fieldName = null;
com.pblabs.engine.serialization._Serializer.ResourceNote.prototype.load = function(filename,type) {
	throw "Not implemented";
}
com.pblabs.engine.serialization._Serializer.ResourceNote.prototype.owner = null;
com.pblabs.engine.serialization._Serializer.ResourceNote.prototype.__class__ = com.pblabs.engine.serialization._Serializer.ResourceNote;
com.pblabs.engine.serialization._Serializer.ReferenceNote = function(p) { if( p === $_ ) return; {
	this.reportedMissing = false;
}}
com.pblabs.engine.serialization._Serializer.ReferenceNote.__name__ = ["com","pblabs","engine","serialization","_Serializer","ReferenceNote"];
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.componentName = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.componentReference = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.context = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.currentEntity = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.fieldName = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.nameReference = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.objectReference = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.owner = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.reportMissing = function() {
	if(this.reportedMissing) return;
	this.reportedMissing = true;
	var firstPart = ((((this.owner.toString() + "[") + this.fieldName) + "] on entity '") + this.currentEntity.get_name()) + "' - ";
	if(this.nameReference != null) {
		com.pblabs.engine.debug.Log.warn(((firstPart + "Couldn't resolve reference to named entity '") + this.nameReference) + "'",{ fileName : "Serializer.hx", lineNumber : 870, className : "com.pblabs.engine.serialization._Serializer.ReferenceNote", methodName : "reportMissing"});
		return;
	}
	if(this.componentReference != "") {
		com.pblabs.engine.debug.Log.warn(((firstPart + " Couldn't find named entity '") + this.componentReference) + "'",{ fileName : "Serializer.hx", lineNumber : 876, className : "com.pblabs.engine.serialization._Serializer.ReferenceNote", methodName : "reportMissing"});
		return;
	}
	if(this.componentName != "") {
		com.pblabs.engine.debug.Log.warn(((firstPart + " Couldn't find component on same entity named '") + this.componentName) + "'",{ fileName : "Serializer.hx", lineNumber : 882, className : "com.pblabs.engine.serialization._Serializer.ReferenceNote", methodName : "reportMissing"});
		return;
	}
}
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.reportSuccess = function() {
	if(!this.reportedMissing) return;
	var firstPart = ((((this.owner.toString() + "[") + this.fieldName) + "] on entity '") + this.currentEntity.get_name()) + "' - ";
	if(this.nameReference != null) {
		com.pblabs.engine.debug.Log.warn(((firstPart + " After failure, was able to resolve reference to named entity '") + this.nameReference) + "'",{ fileName : "Serializer.hx", lineNumber : 897, className : "com.pblabs.engine.serialization._Serializer.ReferenceNote", methodName : "reportSuccess"});
		return;
	}
	if(!com.pblabs.util.StringUtil.isBlank(this.componentReference)) {
		com.pblabs.engine.debug.Log.warn(((firstPart + " After failure, was able to find named entity '") + this.componentReference) + "'",{ fileName : "Serializer.hx", lineNumber : 903, className : "com.pblabs.engine.serialization._Serializer.ReferenceNote", methodName : "reportSuccess"});
		return;
	}
	if(!com.pblabs.util.StringUtil.isBlank(this.componentName)) {
		com.pblabs.engine.debug.Log.warn(((firstPart + " After failure, was able to find component on same entity named '") + this.componentName) + "'",{ fileName : "Serializer.hx", lineNumber : 909, className : "com.pblabs.engine.serialization._Serializer.ReferenceNote", methodName : "reportSuccess"});
		return;
	}
}
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.reportedMissing = null;
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.resolve = function() {
	if(!com.pblabs.util.StringUtil.isBlank(this.nameReference)) {
		var namedObject = this.context.lookupEntity(this.nameReference);
		if(namedObject == null) return false;
		com.pblabs.util.ReflectUtil.setField(this.owner,this.fieldName,namedObject);
		this.reportSuccess();
		return true;
	}
	if(!com.pblabs.util.StringUtil.isBlank(this.componentReference)) {
		var componentObject = this.context.lookupEntity(this.componentReference);
		if(null == componentObject) return false;
		var component = null;
		if(!com.pblabs.util.StringUtil.isBlank(this.componentName)) {
			component = componentObject.lookupComponentByName(this.componentName);
			if(null == component) return false;
		}
		else {
			var componentType = com.pblabs.util.ReflectUtil.getVarFieldType(com.pblabs.util.ReflectUtil.getClass(this.owner),this.fieldName);
			component = componentObject.lookupComponentByType(componentType);
			if(null == component) return false;
		}
		com.pblabs.util.ReflectUtil.setField(this.owner,this.fieldName,component);
		this.reportSuccess();
		return true;
	}
	if(!com.pblabs.util.StringUtil.isBlank(this.componentName)) {
		var localComponent = this.currentEntity.lookupComponentByName(this.componentName);
		if(null == localComponent) return false;
		com.pblabs.util.ReflectUtil.setField(this.owner,this.fieldName,localComponent);
		this.reportSuccess();
		return true;
	}
	if(!com.pblabs.util.StringUtil.isBlank(this.objectReference)) {
		com.pblabs.util.ReflectUtil.setField(this.owner,this.fieldName,this.context.getManager(com.pblabs.engine.serialization.TemplateManager).instantiateEntity(this.objectReference,this.context));
		this.reportSuccess();
		return true;
	}
	return false;
}
com.pblabs.engine.serialization._Serializer.ReferenceNote.prototype.__class__ = com.pblabs.engine.serialization._Serializer.ReferenceNote;
com.pblabs.geom.Vector2 = function(x,y) { if( x === $_ ) return; {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
}}
com.pblabs.geom.Vector2.__name__ = ["com","pblabs","geom","Vector2"];
com.pblabs.geom.Vector2.toVector2s = function(s,t) {
	return new com.pblabs.geom.Vector2(t.x - s.x,t.y - s.y);
}
com.pblabs.geom.Vector2.interpolate = function(a,b,p) {
	var q = 1 - p;
	return new com.pblabs.geom.Vector2(q * a.x + p * b.x,q * a.y + p * b.y);
}
com.pblabs.geom.Vector2.smallerAngleBetween = function(v1,v2) {
	var dot = v1.dot(v2);
	var len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
	var len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
	return Math.acos(dot / (len1 * len2));
}
com.pblabs.geom.Vector2.prototype.add = function(v) {
	return this.clone().addLocal(v);
}
com.pblabs.geom.Vector2.prototype.addLocal = function(v) {
	this.x += v.x;
	this.y += v.y;
	return this;
}
com.pblabs.geom.Vector2.prototype.angle = null;
com.pblabs.geom.Vector2.prototype.clone = function() {
	return new com.pblabs.geom.Vector2(this.x,this.y);
}
com.pblabs.geom.Vector2.prototype.dot = function(v) {
	return this.x * v.x + this.y * v.y;
}
com.pblabs.geom.Vector2.prototype.equals = function(v) {
	return (v != null?this.x == v.x && this.y == v.y:false);
}
com.pblabs.geom.Vector2.prototype.getLengthSquared = function() {
	return (this.x * this.x + this.y * this.y);
}
com.pblabs.geom.Vector2.prototype.getPerp = function(ccw) {
	if(ccw == null) ccw = true;
	if(ccw) {
		return new com.pblabs.geom.Vector2(-this.y,this.x);
	}
	else {
		return new com.pblabs.geom.Vector2(this.y,-this.x);
	}
}
com.pblabs.geom.Vector2.prototype.get_angle = function() {
	var angle = Math.atan2(this.y,this.x);
	return ((angle >= 0?angle:angle + (2 * Math.PI)));
}
com.pblabs.geom.Vector2.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
com.pblabs.geom.Vector2.prototype.invert = function() {
	return this.clone().invertLocal();
}
com.pblabs.geom.Vector2.prototype.invertLocal = function() {
	this.x = -this.x;
	this.y = -this.y;
	return this;
}
com.pblabs.geom.Vector2.prototype.length = null;
com.pblabs.geom.Vector2.prototype.lengthSquared = null;
com.pblabs.geom.Vector2.prototype.normalize = function() {
	return this.clone().normalizeLocal();
}
com.pblabs.geom.Vector2.prototype.normalizeLocal = function() {
	var lengthInverse = 1 / Math.sqrt(this.x * this.x + this.y * this.y);
	this.x *= lengthInverse;
	this.y *= lengthInverse;
	return this;
}
com.pblabs.geom.Vector2.prototype.normalizeLocalAndGetLength = function() {
	var length = Math.sqrt(this.x * this.x + this.y * this.y);
	this.x /= length;
	this.y /= length;
	return length;
}
com.pblabs.geom.Vector2.prototype.rotate = function(radians) {
	return this.clone().rotateLocal(radians);
}
com.pblabs.geom.Vector2.prototype.rotateLocal = function(radians) {
	var cosTheta = Math.cos(radians);
	var sinTheta = Math.sin(radians);
	var oldX = this.x;
	this.x = (cosTheta * oldX) - (sinTheta * this.y);
	this.y = (sinTheta * oldX) + (cosTheta * this.y);
	return this;
}
com.pblabs.geom.Vector2.prototype.scale = function(value) {
	return this.clone().scaleLocal(value);
}
com.pblabs.geom.Vector2.prototype.scaleLocal = function(value) {
	this.x *= value;
	this.y *= value;
	return this;
}
com.pblabs.geom.Vector2.prototype.set = function(x,y) {
	this.x = x;
	this.y = y;
}
com.pblabs.geom.Vector2.prototype.set_length = function(newLen) {
	var scale = newLen / Math.sqrt(this.x * this.x + this.y * this.y);
	this.x *= scale;
	this.y *= scale;
	return newLen;
}
com.pblabs.geom.Vector2.prototype.similar = function(v,epsilon) {
	return ((Math.abs(this.x - v.x) <= epsilon) && (Math.abs(this.y - v.y) <= epsilon));
}
com.pblabs.geom.Vector2.prototype.subtract = function(v) {
	return this.clone().subtractLocal(v);
}
com.pblabs.geom.Vector2.prototype.subtractLocal = function(v) {
	this.x -= v.x;
	this.y -= v.y;
	return this;
}
com.pblabs.geom.Vector2.prototype.x = null;
com.pblabs.geom.Vector2.prototype.y = null;
com.pblabs.geom.Vector2.prototype.__class__ = com.pblabs.geom.Vector2;
com.pblabs.geom.Vector2.__interfaces__ = [com.pblabs.util.Equalable,com.pblabs.util.Cloneable];
haxe.Public = function() { }
haxe.Public.__name__ = ["haxe","Public"];
haxe.Public.prototype.__class__ = haxe.Public;
if(typeof feffects=='undefined') feffects = {}
if(!feffects.easing) feffects.easing = {}
feffects.easing.Cubic = function() { }
feffects.easing.Cubic.__name__ = ["feffects","easing","Cubic"];
feffects.easing.Cubic.easeIn = function(t,b,c,d) {
	return ((c * (t /= d)) * t) * t + b;
}
feffects.easing.Cubic.easeOut = function(t,b,c,d) {
	return c * (((t = t / d - 1) * t) * t + 1) + b;
}
feffects.easing.Cubic.easeInOut = function(t,b,c,d) {
	if((t /= d / 2) < 1) return (((c / 2) * t) * t) * t + b;
	return (c / 2) * (((t -= 2) * t) * t + 2) + b;
}
feffects.easing.Cubic.prototype.__class__ = feffects.easing.Cubic;
feffects.easing.Cubic.__interfaces__ = [haxe.Public];
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
com.pblabs.util.ReflectUtil = function() { }
com.pblabs.util.ReflectUtil.__name__ = ["com","pblabs","util","ReflectUtil"];
com.pblabs.util.ReflectUtil.tinyClassName = function(obj) {
	var name = com.pblabs.util.ReflectUtil.getClassName(obj);
	if(name == null) {
		return null;
	}
	var tokens = name.split(".");
	return tokens[tokens.length - 1];
}
com.pblabs.util.ReflectUtil.getClassName = function(obj) {
	return Type.getClassName(com.pblabs.util.ReflectUtil.getClass(obj));
}
com.pblabs.util.ReflectUtil.isSameClass = function(obj1,obj2) {
	return com.pblabs.util.ReflectUtil.getClass(obj1) == com.pblabs.util.ReflectUtil.getClass(obj2);
}
com.pblabs.util.ReflectUtil.getClass = function(obj) {
	var $e = (Type["typeof"](obj));
	switch( $e[1] ) {
	case 8:
	{
		throw "Unknown map key type";
	}break;
	case 4:
	{
		return obj;
	}break;
	case 0:
	{
		return null;
	}break;
	case 1:
	{
		return Int;
	}break;
	case 5:
	{
		return null;
	}break;
	case 2:
	{
		return Float;
	}break;
	case 7:
	var e = $e[2];
	{
		return null;
	}break;
	case 6:
	var c = $e[2];
	{
		return c;
	}break;
	case 3:
	{
		return null;
	}break;
	}
}
com.pblabs.util.ReflectUtil.getRttiXml = function(cls) {
	var name = Type.getClassName(cls);
	if(com.pblabs.util.ReflectUtil.cacheXml.exists(name)) return com.pblabs.util.ReflectUtil.cacheXml.get(name);
	if(cls.__rtti == null) return null;
	var x = Xml.parse(cls.__rtti).firstChild();
	com.pblabs.util.ReflectUtil.cacheXml.set(name,x);
	return x;
}
com.pblabs.util.ReflectUtil.getClassdef = function(cls) {
	var name = Type.getClassName(cls);
	if(com.pblabs.util.ReflectUtil.cacheClassdef.exists(name)) {
		return com.pblabs.util.ReflectUtil.cacheClassdef.get(name);
	}
	var x = com.pblabs.util.ReflectUtil.getRttiXml(cls);
	if(x == null) {
		return null;
	}
	var typeTree = com.pblabs.util.ReflectUtil.classDefParser.processElement(x);
	var cdef = (function($this) {
		var $r;
		var $e = (typeTree);
		switch( $e[1] ) {
		case 1:
		var c = $e[2];
		{
			$r = c;
		}break;
		default:{
			$r = null;
		}break;
		}
		return $r;
	}(this));
	com.pblabs.util.ReflectUtil.cacheClassdef.set(name,cdef);
	return cdef;
}
com.pblabs.util.ReflectUtil.getFieldType = function(cls,field) {
	var id = (Type.getClassName(cls) + ".") + field;
	if(com.pblabs.util.ReflectUtil.fieldTypes.exists(id)) {
		return com.pblabs.util.ReflectUtil.fieldTypes.get(id);
	}
	var cdef = com.pblabs.util.ReflectUtil.getClassdef(cls);
	if(cdef == null) {
		return null;
	}
	{ var $it0 = cdef.fields.iterator();
	while( $it0.hasNext() ) { var f = $it0.next();
	{
		if(f.name == field) {
			com.pblabs.util.ReflectUtil.fieldTypes.set(id,f.type);
			return f.type;
		}
	}
	}}
	var sp = Type.getSuperClass(cls);
	var type = (sp == null?null:com.pblabs.util.ReflectUtil.getFieldType(sp,field));
	com.pblabs.util.ReflectUtil.fieldTypes.set(id,type);
	return type;
}
com.pblabs.util.ReflectUtil.getVarFieldType = function(cls,field) {
	var type = com.pblabs.util.ReflectUtil.getFieldType(cls,field);
	if(type != null) {
		var $e = (type);
		switch( $e[1] ) {
		case 2:
		var params = $e[3], name = $e[2];
		{
			return Type.resolveClass(name);
		}break;
		default:{
			com.pblabs.engine.debug.Log.error(((com.pblabs.util.ReflectUtil.getClassName(cls) + ".") + field) + " is not a class var",{ fileName : "ReflectUtil.hx", lineNumber : 143, className : "com.pblabs.util.ReflectUtil", methodName : "getVarFieldType"});
			return null;
		}break;
		}
	}
	com.pblabs.engine.debug.Log.error("No rtti for " + com.pblabs.util.ReflectUtil.getClassName(cls),{ fileName : "ReflectUtil.hx", lineNumber : 147, className : "com.pblabs.util.ReflectUtil", methodName : "getVarFieldType"});
	return null;
}
com.pblabs.util.ReflectUtil.field = function(obj,field) {
	if(Lambda.has(Type.getInstanceFields(Type.getClass(obj)),"get_" + field)) {
		return Reflect.field(obj,"get_" + field).apply(obj,com.pblabs.util.ReflectUtil.EMPTY_ARRAY);
	}
	else {
		return Reflect.field(obj,field);
	}
}
com.pblabs.util.ReflectUtil.setField = function(obj,field,val) {
	if(Reflect.field(obj,"set_" + field) != null) {
		Reflect.field(obj,"set_" + field).apply(obj,[val]);
	}
	else {
		obj[field] = val;
	}
}
com.pblabs.util.ReflectUtil.prototype.__class__ = com.pblabs.util.ReflectUtil;
com.pblabs.util.ds.Hashable = function() { }
com.pblabs.util.ds.Hashable.__name__ = ["com","pblabs","util","ds","Hashable"];
com.pblabs.util.ds.Hashable.prototype.hashCode = null;
com.pblabs.util.ds.Hashable.prototype.__class__ = com.pblabs.util.ds.Hashable;
com.pblabs.util.ds.Tuple = function(v1,v2) { if( v1 === $_ ) return; {
	this.set(v1,v2);
}}
com.pblabs.util.ds.Tuple.__name__ = ["com","pblabs","util","ds","Tuple"];
com.pblabs.util.ds.Tuple.computeHashCode = function(v1,v2) {
	var value = 17;
	value = value * 31 + (v1 == null?com.pblabs.util.StringUtil.hashCode("" + v1):(Std["is"](v1,com.pblabs.util.ds.Hashable)?(function($this) {
		var $r;
		var $t = v1;
		if(Std["is"]($t,com.pblabs.util.ds.Hashable)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).hashCode():(Std["is"](v1,Int)?v1:com.pblabs.util.StringUtil.hashCode("" + v1))));
	value = value * 31 + (v2 == null?com.pblabs.util.StringUtil.hashCode("" + v2):(Std["is"](v2,com.pblabs.util.ds.Hashable)?(function($this) {
		var $r;
		var $t = v2;
		if(Std["is"]($t,com.pblabs.util.ds.Hashable)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).hashCode():(Std["is"](v2,Int)?v2:com.pblabs.util.StringUtil.hashCode("" + v2))));
	return value;
}
com.pblabs.util.ds.Tuple.prototype._hashCode = null;
com.pblabs.util.ds.Tuple.prototype.clear = function() {
	this.v1 = null;
	this.v2 = null;
	this._hashCode = 0;
}
com.pblabs.util.ds.Tuple.prototype.equals = function(other) {
	if(!Std["is"](other,com.pblabs.util.ds.Tuple)) {
		return false;
	}
	var v = other;
	return com.pblabs.util.EqualableUtil.equals(this.v1,v.v1) && com.pblabs.util.EqualableUtil.equals(this.v2,v.v2);
}
com.pblabs.util.ds.Tuple.prototype.hashCode = function() {
	return this._hashCode;
}
com.pblabs.util.ds.Tuple.prototype.set = function(v1,v2) {
	this.v1 = v1;
	this.v2 = v2;
	this._hashCode = com.pblabs.util.ds.Tuple.computeHashCode(v1,v2);
}
com.pblabs.util.ds.Tuple.prototype.toString = function() {
	return ((("[" + this.v1) + ", ") + this.v2) + "]";
}
com.pblabs.util.ds.Tuple.prototype.v1 = null;
com.pblabs.util.ds.Tuple.prototype.v2 = null;
com.pblabs.util.ds.Tuple.prototype.__class__ = com.pblabs.util.ds.Tuple;
com.pblabs.util.ds.Tuple.__interfaces__ = [com.pblabs.util.Equalable,com.pblabs.util.ds.Hashable];
com.pblabs.engine.serialization.ISerializable = function() { }
com.pblabs.engine.serialization.ISerializable.__name__ = ["com","pblabs","engine","serialization","ISerializable"];
com.pblabs.engine.serialization.ISerializable.prototype.deserialize = null;
com.pblabs.engine.serialization.ISerializable.prototype.serialize = null;
com.pblabs.engine.serialization.ISerializable.prototype.__class__ = com.pblabs.engine.serialization.ISerializable;
if(!com.pblabs.components.manager) com.pblabs.components.manager = {}
com.pblabs.components.manager.NodeComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.EntityComponent.apply(this,[]);
	this.parent = null;
}}
com.pblabs.components.manager.NodeComponent.__name__ = ["com","pblabs","components","manager","NodeComponent"];
com.pblabs.components.manager.NodeComponent.__super__ = com.pblabs.engine.core.EntityComponent;
for(var k in com.pblabs.engine.core.EntityComponent.prototype ) com.pblabs.components.manager.NodeComponent.prototype[k] = com.pblabs.engine.core.EntityComponent.prototype[k];
com.pblabs.components.manager.NodeComponent.getEntityAndAllParents = function(e,nodeTypeClass,list) {
	com.pblabs.util.Preconditions.checkNotNull(e,"Entity cannot be null");
	nodeTypeClass = (nodeTypeClass == null?com.pblabs.components.manager.NodeComponent:nodeTypeClass);
	if(list == null) {
		list = new List();
	}
	if(Lambda.has(list,e)) {
		return list;
	}
	list.add(e);
	{
		var _g = 0, _g1 = e.lookupComponentsByType(nodeTypeClass);
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			var n = c;
			if(n.parent != null) {
				com.pblabs.components.manager.NodeComponent.getEntityAndAllParents((function($this) {
					var $r;
					var $t = n.parent;
					if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this)).get_owner(),nodeTypeClass,list);
			}
		}
	}
	return list;
}
com.pblabs.components.manager.NodeComponent.getEntityAndAllChildren = function(e,nodeTypeClass,list) {
	com.pblabs.util.Preconditions.checkNotNull(e,"Entity cannot be null");
	nodeTypeClass = (nodeTypeClass == null?com.pblabs.components.manager.NodeComponent:nodeTypeClass);
	if(list == null) {
		list = new List();
	}
	if(Lambda.has(list,e)) {
		return list;
	}
	list.add(e);
	{
		var _g = 0, _g1 = e.lookupComponentsByType(nodeTypeClass);
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			var n = c;
			if(!com.pblabs.util.ArrayUtil.isEmpty(n.children)) {
				{
					var _g2 = 0, _g3 = n.children;
					while(_g2 < _g3.length) {
						var child = _g3[_g2];
						++_g2;
						com.pblabs.components.manager.NodeComponent.getEntityAndAllChildren((function($this) {
							var $r;
							var $t = child;
							if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
							else throw "Class cast error";
							$r = $t;
							return $r;
						}(this)).get_owner(),nodeTypeClass,list);
					}
				}
			}
		}
	}
	return list;
}
com.pblabs.components.manager.NodeComponent.getAll = function(e,nodeTypeClass) {
	var list = new List();
	com.pblabs.components.manager.NodeComponent.getEntityAndAllParents(e,nodeTypeClass,list);
	list.remove(e);
	com.pblabs.components.manager.NodeComponent.getEntityAndAllChildren(e,nodeTypeClass,list);
	return list;
}
com.pblabs.components.manager.NodeComponent.prototype.addChild = function(c) {
	com.pblabs.util.Preconditions.checkArgument(this.get_isRegistered(),"Component must first be registered");
	com.pblabs.util.Preconditions.checkArgument(Std["is"](c,com.pblabs.components.manager.NodeComponent),"Children must be of type NodeComponent");
	com.pblabs.util.Preconditions.checkArgument((function($this) {
		var $r;
		var $t = c;
		if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).get_isRegistered(),"Child not registered: " + c);
	if(this.children == null) {
		this.children = new Array();
	}
	var cNode = c;
	com.pblabs.util.Preconditions.checkArgument(!cNode.hasParent(),cNode + " already has a parent, not adding");
	cNode.parent = this;
	this.children.push(c);
	this.childAdded(c);
	cNode.addedToParent();
}
com.pblabs.components.manager.NodeComponent.prototype.addToParent = function(newParent) {
	com.pblabs.util.Preconditions.checkArgument(this.get_isRegistered(),"Component must first be registered");
	com.pblabs.util.Preconditions.checkArgument(newParent != null || this.parentProperty != null,"No parent or parent property provided");
	newParent = (newParent == null?this.get_owner().getProperty(this.parentProperty):newParent);
	com.pblabs.util.Preconditions.checkNotNull(newParent,"Parent cannot be null, parentProperty=" + this.parentProperty);
	com.pblabs.util.Preconditions.checkArgument(Std["is"](newParent,com.pblabs.components.manager.NodeComponent),"Parent must be of type NodeComponent, parent is type=" + com.pblabs.util.ReflectUtil.getClassName(newParent));
	com.pblabs.util.Preconditions.checkArgument((function($this) {
		var $r;
		var $t = newParent;
		if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).get_isRegistered(),"Parent not registered: " + newParent);
	if(this.hasParent()) {
		com.pblabs.engine.debug.Log.warn(((((((" but " + this.get_name()) + ".hasParent ") + this.parent) + " ") + com.pblabs.util.ReflectUtil.getClassName(this.parent)) + " ") + com.pblabs.engine.debug.Log.getStackTrace(),{ fileName : "NodeComponent.hx", lineNumber : 195, className : "com.pblabs.components.manager.NodeComponent", methodName : "addToParent"});
		return;
	}
	(function($this) {
		var $r;
		var $t = newParent;
		if(Std["is"]($t,com.pblabs.components.manager.NodeComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).addChild(this);
}
com.pblabs.components.manager.NodeComponent.prototype.addedToParent = function() {
	null;
}
com.pblabs.components.manager.NodeComponent.prototype.childAdded = function(c) {
	null;
}
com.pblabs.components.manager.NodeComponent.prototype.childRemoved = function(c) {
	null;
}
com.pblabs.components.manager.NodeComponent.prototype.children = null;
com.pblabs.components.manager.NodeComponent.prototype.deserialize = function(xml,context) {
	this.parentProperty = com.pblabs.util.XMLUtil.parsePropertyReference(xml,"parent");
}
com.pblabs.components.manager.NodeComponent.prototype.hasParent = function() {
	return this.parent != null;
}
com.pblabs.components.manager.NodeComponent.prototype.onRemove = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onRemove.apply(this,[]);
	if(this.hasParent()) {
		this.removeFromParent();
	}
	if(this.children != null) {
		{
			var _g = 0, _g1 = this.children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				(function($this) {
					var $r;
					var $t = child;
					if(Std["is"]($t,com.pblabs.components.manager.NodeComponent)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this)).removeFromParent();
			}
		}
	}
	this.children = null;
}
com.pblabs.components.manager.NodeComponent.prototype.onReset = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onReset.apply(this,[]);
	this.removeFromParent();
	if(this.parentProperty != null) {
		this.addToParent();
	}
}
com.pblabs.components.manager.NodeComponent.prototype.parent = null;
com.pblabs.components.manager.NodeComponent.prototype.parentProperty = null;
com.pblabs.components.manager.NodeComponent.prototype.removeChild = function(c) {
	com.pblabs.util.Preconditions.checkNotNull(c,"Attempting to remove null child");
	var cNode = c;
	if(!cNode.hasParent()) {
		throw "child has no parent";
		return;
	}
	var before = this.children.length;
	if(!this.children.remove(c)) {
		throw "Removing child with a different manager";
	}
	if(this.children.length == before) null;
	if(Lambda.has(this.children,null)) {
		throw "After child removal, we have null in children=" + this.children;
	}
	cNode.removingFromParent();
	cNode.parent = null;
	if(cNode.parent != null) null;
	this.childRemoved(c);
}
com.pblabs.components.manager.NodeComponent.prototype.removeFromParent = function() {
	if(!this.hasParent()) {
		return;
	}
	(function($this) {
		var $r;
		var $t = $this.parent;
		if(Std["is"]($t,com.pblabs.components.manager.NodeComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).removeChild(this);
	this.parent = null;
}
com.pblabs.components.manager.NodeComponent.prototype.removingFromParent = function() {
	null;
}
com.pblabs.components.manager.NodeComponent.prototype.serialize = function(xml) {
	com.pblabs.util.XMLUtil.createChild(xml,"parent",(this.parent != null?com.pblabs.engine.util.PBUtil.entityProp(this.parent):this.parentProperty));
}
com.pblabs.components.manager.NodeComponent.prototype.__class__ = com.pblabs.components.manager.NodeComponent;
com.pblabs.components.manager.NodeComponent.__interfaces__ = [com.pblabs.engine.serialization.ISerializable];
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.first = function() {
	return (this.h == null?null:this.h[0]);
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	return (this.h == null);
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return (this.h != null);
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.last = function() {
	return (this.q == null?null:this.q[0]);
}
List.prototype.length = null;
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.__class__ = List;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
com.pblabs.engine.core.IPBManager = function() { }
com.pblabs.engine.core.IPBManager.__name__ = ["com","pblabs","engine","core","IPBManager"];
com.pblabs.engine.core.IPBManager.prototype.shutdown = null;
com.pblabs.engine.core.IPBManager.prototype.startup = null;
com.pblabs.engine.core.IPBManager.prototype.__class__ = com.pblabs.engine.core.IPBManager;
if(!com.pblabs.engine.resource) com.pblabs.engine.resource = {}
com.pblabs.engine.resource.IResourceManager = function() { }
com.pblabs.engine.resource.IResourceManager.__name__ = ["com","pblabs","engine","resource","IResourceManager"];
com.pblabs.engine.resource.IResourceManager.prototype.addResource = null;
com.pblabs.engine.resource.IResourceManager.prototype.create = null;
com.pblabs.engine.resource.IResourceManager.prototype.getResource = null;
com.pblabs.engine.resource.IResourceManager.prototype.isResource = null;
com.pblabs.engine.resource.IResourceManager.prototype.load = null;
com.pblabs.engine.resource.IResourceManager.prototype.unload = null;
com.pblabs.engine.resource.IResourceManager.prototype.__class__ = com.pblabs.engine.resource.IResourceManager;
com.pblabs.engine.resource.IResourceManager.__interfaces__ = [com.pblabs.engine.core.IPBManager];
com.pblabs.engine.resource.ResourceManager = function(p) { if( p === $_ ) return; {
	this._loadedResources = com.pblabs.util.ds.Maps.newHashMap(String);
	this._pendingResources = com.pblabs.util.ds.Maps.newHashMap(String);
	this._loadingResources = com.pblabs.util.ds.Maps.newHashMap(String);
	this._onLoadCallbacks = new Array();
	this._onErrorCallbacks = new Array();
}}
com.pblabs.engine.resource.ResourceManager.__name__ = ["com","pblabs","engine","resource","ResourceManager"];
com.pblabs.engine.resource.ResourceManager.prototype._loadedResources = null;
com.pblabs.engine.resource.ResourceManager.prototype._loadingResources = null;
com.pblabs.engine.resource.ResourceManager.prototype._onErrorCallbacks = null;
com.pblabs.engine.resource.ResourceManager.prototype._onLoadCallbacks = null;
com.pblabs.engine.resource.ResourceManager.prototype._pendingResources = null;
com.pblabs.engine.resource.ResourceManager.prototype.addResource = function(rsrc) {
	com.pblabs.util.Preconditions.checkNotNull(rsrc,"Resource is null");
	com.pblabs.util.Preconditions.checkNotNull(rsrc.get_name(),"Resource must have a name");
	com.pblabs.util.Preconditions.checkArgument(!this.isResource(rsrc.get_name()),("Resource with name=" + rsrc.get_name()) + " alrady exists");
	if(rsrc.isLoaded()) {
		this._loadedResources.set(rsrc.get_name(),rsrc);
	}
	else {
		this._pendingResources.set(rsrc.get_name(),rsrc);
	}
}
com.pblabs.engine.resource.ResourceManager.prototype.allResourcesLoaded = function() {
	while(this._onLoadCallbacks.length > 0) {
		(this._onLoadCallbacks.pop())();
	}
	this._onErrorCallbacks = [];
}
com.pblabs.engine.resource.ResourceManager.prototype.create = function(resourceName,itemName) {
	com.pblabs.util.Preconditions.checkArgument(this.isResource(resourceName),"No IResource with id=" + resourceName);
	var rs = this.getResource(resourceName);
	return rs.create(itemName);
}
com.pblabs.engine.resource.ResourceManager.prototype.getResource = function(resourceName) {
	com.pblabs.util.Preconditions.checkArgument(resourceName != null,"You must give a resource name");
	return this._loadedResources.get(resourceName);
}
com.pblabs.engine.resource.ResourceManager.prototype.handleLoadingError = function(e) {
	while(this._onErrorCallbacks.length > 0) {
		(this._onErrorCallbacks.pop())(e);
	}
}
com.pblabs.engine.resource.ResourceManager.prototype.isResource = function(resourceName) {
	return this._pendingResources.exists(resourceName) || this._loadedResources.exists(resourceName) || this._loadingResources.exists(resourceName);
}
com.pblabs.engine.resource.ResourceManager.prototype.load = function(onLoad,onError) {
	com.pblabs.util.Preconditions.checkNotNull(onLoad);
	com.pblabs.util.Preconditions.checkNotNull(onError);
	this._onLoadCallbacks.push(onLoad);
	this._onErrorCallbacks.push(onError);
	if(this._pendingResources.size() == 0 && this._loadingResources.size() == 0) {
		com.pblabs.engine.debug.Log.info("No resources to load, calling onLoad",{ fileName : "ResourceManager.hx", lineNumber : 59, className : "com.pblabs.engine.resource.ResourceManager", methodName : "load"});
		this.allResourcesLoaded();
		return;
	}
	var self = this;
	{
		var _g = 0, _g1 = com.pblabs.util.IterUtil.toArray(this._pendingResources.keys());
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			var rsrc = [this._pendingResources.get(key)];
			this._pendingResources.remove(key);
			this._loadingResources.set(key,rsrc[0]);
			var loaded = function(rsrc) {
				return function() {
					self.resourceLoaded(rsrc[0]);
				}
			}(rsrc);
			com.pblabs.engine.debug.Log.debug("Loading resource=" + rsrc[0],{ fileName : "ResourceManager.hx", lineNumber : 72, className : "com.pblabs.engine.resource.ResourceManager", methodName : "load"});
			rsrc[0].load(loaded,$closure(this,"handleLoadingError"));
		}
	}
}
com.pblabs.engine.resource.ResourceManager.prototype.resourceLoaded = function(rsrc) {
	this._loadingResources.remove(rsrc.get_name());
	this._loadedResources.set(rsrc.get_name(),rsrc);
	if(this._loadingResources.size() == 0) {
		this.allResourcesLoaded();
	}
}
com.pblabs.engine.resource.ResourceManager.prototype.shutdown = function() {
	com.pblabs.util.Preconditions.checkArgument(this._loadedResources.size() == 0,"Resources pending load while shutting down, unhandled situation");
	{ var $it0 = this._loadedResources.iterator();
	while( $it0.hasNext() ) { var rsrc = $it0.next();
	{
		rsrc.unload();
	}
	}}
	this._pendingResources = null;
	this._loadedResources = null;
	this._onLoadCallbacks = null;
	this._onErrorCallbacks = null;
}
com.pblabs.engine.resource.ResourceManager.prototype.startup = function() {
	null;
}
com.pblabs.engine.resource.ResourceManager.prototype.unload = function(resourceName) {
	com.pblabs.util.Preconditions.checkArgument(this._pendingResources.get(resourceName) == null && this._loadingResources.get(resourceName) == null,"Unhandled: unloaded IResource that is still pending: " + resourceName);
	var rsrc = this._loadedResources.get(resourceName);
	if(rsrc != null) {
		this._loadedResources.remove(resourceName);
		rsrc.unload();
	}
}
com.pblabs.engine.resource.ResourceManager.prototype.__class__ = com.pblabs.engine.resource.ResourceManager;
com.pblabs.engine.resource.ResourceManager.__interfaces__ = [com.pblabs.engine.core.IPBManager,com.pblabs.engine.resource.IResourceManager];
com.pblabs.util.ds.maps.HashMap = function(p) { if( p === $_ ) return; {
	com.pblabs.util.ds.maps.AbstractMap.apply(this,[]);
	this.createDictionary();
}}
com.pblabs.util.ds.maps.HashMap.__name__ = ["com","pblabs","util","ds","maps","HashMap"];
com.pblabs.util.ds.maps.HashMap.__super__ = com.pblabs.util.ds.maps.AbstractMap;
for(var k in com.pblabs.util.ds.maps.AbstractMap.prototype ) com.pblabs.util.ds.maps.HashMap.prototype[k] = com.pblabs.util.ds.maps.AbstractMap.prototype[k];
com.pblabs.util.ds.maps.HashMap.prototype.clear = function() {
	com.pblabs.util.ds.maps.AbstractMap.prototype.clear.apply(this,[]);
	this.createDictionary();
}
com.pblabs.util.ds.maps.HashMap.prototype.createDictionary = function() {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}
com.pblabs.util.ds.maps.HashMap.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
com.pblabs.util.ds.maps.HashMap.prototype.get = function(key) {
	return this.h["$" + key];
}
com.pblabs.util.ds.maps.HashMap.prototype.h = null;
com.pblabs.util.ds.maps.HashMap.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
com.pblabs.util.ds.maps.HashMap.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
com.pblabs.util.ds.maps.HashMap.prototype.remove = function(key) {
	com.pblabs.util.ds.maps.AbstractMap.prototype.remove.apply(this,[key]);
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
com.pblabs.util.ds.maps.HashMap.prototype.set = function(key,value) {
	com.pblabs.util.ds.maps.AbstractMap.prototype.set.apply(this,[key,value]);
	this.h["$" + key] = value;
}
com.pblabs.util.ds.maps.HashMap.prototype.__class__ = com.pblabs.util.ds.maps.HashMap;
com.pblabs.util.ds.maps.HashMap.__interfaces__ = [com.pblabs.util.ds.Map];
if(!com.pblabs.components.input) com.pblabs.components.input = {}
com.pblabs.components.input.BaseInputManager = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.components.input.BaseInputManager.__name__ = ["com","pblabs","components","input","BaseInputManager"];
com.pblabs.components.input.BaseInputManager.prototype.sceneView = null;
com.pblabs.components.input.BaseInputManager.prototype.shutdown = function() {
	null;
}
com.pblabs.components.input.BaseInputManager.prototype.startup = function() {
	null;
}
com.pblabs.components.input.BaseInputManager.prototype.__class__ = com.pblabs.components.input.BaseInputManager;
com.pblabs.components.input.BaseInputManager.__interfaces__ = [haxe.rtti.Infos,com.pblabs.engine.core.IPBManager];
com.pblabs.components.input.TouchInputManager = function(convertToMouseEvents) { if( convertToMouseEvents === $_ ) return; {
	if(convertToMouseEvents == null) convertToMouseEvents = true;
	com.pblabs.components.input.BaseInputManager.apply(this,[]);
	this.convertTouchEventsToMouse = convertToMouseEvents;
}}
com.pblabs.components.input.TouchInputManager.__name__ = ["com","pblabs","components","input","TouchInputManager"];
com.pblabs.components.input.TouchInputManager.__super__ = com.pblabs.components.input.BaseInputManager;
for(var k in com.pblabs.components.input.BaseInputManager.prototype ) com.pblabs.components.input.TouchInputManager.prototype[k] = com.pblabs.components.input.BaseInputManager.prototype[k];
com.pblabs.components.input.TouchInputManager.prototype._firstTouchId = null;
com.pblabs.components.input.TouchInputManager.prototype.bindSignals = function() {
	this.touchStart = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.TOUCHSTART,new hsl.js.translation.touch.TouchTranslator());
	this.touchMove = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.TOUCHMOVE,new hsl.js.translation.touch.TouchTranslator());
	this.touchEnd = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.TOUCHEND,new hsl.js.translation.touch.TouchTranslator());
}
com.pblabs.components.input.TouchInputManager.prototype.convertTouchEventsToMouse = null;
com.pblabs.components.input.TouchInputManager.prototype.freeSignals = function() {
	this.touchStart.unbindAll();
	this.touchMove.unbindAll();
	this.touchEnd.unbindAll();
	this.touchStart = null;
	this.touchMove = null;
	this.touchEnd = null;
}
com.pblabs.components.input.TouchInputManager.prototype.mouse = null;
com.pblabs.components.input.TouchInputManager.prototype.shutdown = function() {
	com.pblabs.components.input.BaseInputManager.prototype.shutdown.apply(this,[]);
	this.freeSignals();
}
com.pblabs.components.input.TouchInputManager.prototype.startup = function() {
	com.pblabs.components.input.BaseInputManager.prototype.startup.apply(this,[]);
	this.bindSignals();
	if(this.convertTouchEventsToMouse && this.mouse != null) {
		var self = this;
		this.touchStart.bind(function(e) {
			e.preventDefault();
			var meanTouch = new com.pblabs.geom.Vector2();
			{ var $it0 = (function(_e) {
				return function() {
					return new hsl.js.data.TouchListIterator(_e);
				}
			}(e.changedTouches))();
			while( $it0.hasNext() ) { var touch = $it0.next();
			{
				meanTouch.x += touch.clientX;
				meanTouch.y += touch.clientY;
			}
			}}
			meanTouch.x /= e.changedTouches.length;
			meanTouch.y /= e.changedTouches.length;
			if(e.touches.length > 1 && e.changedTouches.length >= 1) {
				return;
			}
			var touch = e.touches.item(0);
			self._firstTouchId = touch.identifier;
			self.mouse.manualMouseDown(meanTouch.x,meanTouch.y,e.touches.length);
		});
		this.touchMove.bind(function(e) {
			e.preventDefault();
			{ var $it1 = (function(_e) {
				return function() {
					return new hsl.js.data.TouchListIterator(_e);
				}
			}(e.changedTouches))();
			while( $it1.hasNext() ) { var touch = $it1.next();
			{
				if(touch.identifier == self._firstTouchId) {
					self.mouse.manualMouseMove(touch.clientX,touch.clientY,e.touches.length);
					break;
				}
			}
			}}
		});
		this.touchEnd.bind(function(e) {
			e.preventDefault();
			{ var $it2 = (function(_e) {
				return function() {
					return new hsl.js.data.TouchListIterator(_e);
				}
			}(e.changedTouches))();
			while( $it2.hasNext() ) { var touch = $it2.next();
			{
				if(touch.identifier == self._firstTouchId) {
					self.mouse.manualMouseUp(touch.clientX,touch.clientY,e.touches.length);
					break;
				}
			}
			}}
		});
	}
	if(this.convertTouchEventsToMouse && this.mouse == null) {
		com.pblabs.engine.debug.Log.error("Convert touch events to mouse, but no MouseInputManager",{ fileName : "TouchInputManager.hx", lineNumber : 135, className : "com.pblabs.components.input.TouchInputManager", methodName : "startup"});
	}
}
com.pblabs.components.input.TouchInputManager.prototype.touchEnd = null;
com.pblabs.components.input.TouchInputManager.prototype.touchMove = null;
com.pblabs.components.input.TouchInputManager.prototype.touchStart = null;
com.pblabs.components.input.TouchInputManager.prototype.__class__ = com.pblabs.components.input.TouchInputManager;
if(!com.pblabs.components.scene) com.pblabs.components.scene = {}
com.pblabs.components.scene.IScene2D = function() { }
com.pblabs.components.scene.IScene2D.__name__ = ["com","pblabs","components","scene","IScene2D"];
com.pblabs.components.scene.IScene2D.prototype.__class__ = com.pblabs.components.scene.IScene2D;
com.pblabs.components.scene.IScene2D.__interfaces__ = [com.pblabs.engine.core.IEntityComponent];
com.pblabs.components.scene.BaseScene2DManager = function(p) { if( p === $_ ) return; {
	com.pblabs.components.manager.NodeComponent.apply(this,[]);
	this.zoomMax = 5;
	this.zoomMin = 0;
	this.sceneAlignment = com.pblabs.components.scene.SceneAlignment.CENTER;
	this._currentViewRect = new com.pblabs.geom.Rectangle();
	this._zoom = 1.0;
	this._rotation = 0;
	this._position = new com.pblabs.geom.Vector2();
	this._transformDirty = false;
}}
com.pblabs.components.scene.BaseScene2DManager.__name__ = ["com","pblabs","components","scene","BaseScene2DManager"];
com.pblabs.components.scene.BaseScene2DManager.__super__ = com.pblabs.components.manager.NodeComponent;
for(var k in com.pblabs.components.manager.NodeComponent.prototype ) com.pblabs.components.scene.BaseScene2DManager.prototype[k] = com.pblabs.components.manager.NodeComponent.prototype[k];
com.pblabs.components.scene.BaseScene2DManager.prototype._currentViewRect = null;
com.pblabs.components.scene.BaseScene2DManager.prototype._position = null;
com.pblabs.components.scene.BaseScene2DManager.prototype._rotation = null;
com.pblabs.components.scene.BaseScene2DManager.prototype._sceneBounds = null;
com.pblabs.components.scene.BaseScene2DManager.prototype._sceneView = null;
com.pblabs.components.scene.BaseScene2DManager.prototype._transformDirty = null;
com.pblabs.components.scene.BaseScene2DManager.prototype._zoom = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.addLayer = function(cls,layerName,registerAsManager) {
	if(registerAsManager == null) registerAsManager = true;
	var layer = this.get_context().allocate(cls);
	(function($this) {
		var $r;
		var $t = layer;
		if(Std["is"]($t,com.pblabs.components.scene.BaseScene2DLayer)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).parentProperty = com.pblabs.engine.util.PBUtil.componentProp(this);
	this.get_owner().addComponent((function($this) {
		var $r;
		var $t = layer;
		if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),layerName);
	if(registerAsManager) {
		this.get_context().registerManager(com.pblabs.components.scene.BaseScene2DLayer,layer,layerName,true);
	}
	return layer;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.childAdded = function(c) {
	com.pblabs.engine.debug.Log.debug("adding scene layer " + c,{ fileName : "BaseScene2DManager.hx", lineNumber : 132, className : "com.pblabs.components.scene.BaseScene2DManager", methodName : "childAdded"});
	com.pblabs.components.manager.NodeComponent.prototype.childAdded.apply(this,[c]);
	this._transformDirty = true;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.childRemoved = function(c) {
	com.pblabs.components.manager.NodeComponent.prototype.childRemoved.apply(this,[c]);
	com.pblabs.engine.debug.Log.debug("removing scene layer " + c,{ fileName : "BaseScene2DManager.hx", lineNumber : 140, className : "com.pblabs.components.scene.BaseScene2DManager", methodName : "childRemoved"});
	this._transformDirty = true;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.getLayer = function(layerName) {
	{
		var _g = 0, _g1 = this.children;
		while(_g < _g1.length) {
			var layer = _g1[_g];
			++_g;
			if(null != layer && layer.get_name() == layerName) {
				return layer;
			}
		}
	}
	return null;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.getLayerAt = function(idx) {
	return this.children[idx];
}
com.pblabs.components.scene.BaseScene2DManager.prototype.getLayerIndex = function(layer) {
	return com.pblabs.util.IterUtil.indexOf(this.children,layer);
}
com.pblabs.components.scene.BaseScene2DManager.prototype.getTopLayer = function() {
	if(this.children.length > 0) {
		return this.children[this.children.length - 1];
	}
	return null;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.get_layerCount = function() {
	return (this.children != null?this.children.length:0);
}
com.pblabs.components.scene.BaseScene2DManager.prototype.get_rotation = function() {
	return this._rotation;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.get_sceneBounds = function() {
	return this._sceneBounds;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.get_sceneView = function() {
	return this._sceneView;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.get_x = function() {
	return this._position.x;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.get_y = function() {
	return this._position.y;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.get_zoom = function() {
	return this._zoom;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.isLayer = function(name) {
	return this.getLayer(name) != null;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.layerCount = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.onAdd = function() {
	com.pblabs.components.manager.NodeComponent.prototype.onAdd.apply(this,[]);
	this.set_sceneView(this.get_context().getManager(com.pblabs.components.scene.SceneView));
}
com.pblabs.components.scene.BaseScene2DManager.prototype.onRemove = function() {
	com.pblabs.components.manager.NodeComponent.prototype.onRemove.apply(this,[]);
	this._sceneView == null;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.rotation = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.sceneAlignment = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.sceneBounds = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.sceneView = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.setLayerIndex = function(layer,index) {
	com.pblabs.util.Preconditions.checkNotNull(layer,"Null layer");
	com.pblabs.util.Preconditions.checkPositionIndex(index,this.children.length,"Layer index out of bounds");
	this.children.remove(layer);
	this.children.insert(index,layer);
}
com.pblabs.components.scene.BaseScene2DManager.prototype.set_rotation = function(val) {
	this._rotation = val;
	this._transformDirty = true;
	return val;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.set_sceneBounds = function(value) {
	this._sceneBounds = value;
	return value;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.set_sceneView = function(value) {
	this._sceneView = value;
	return value;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.set_x = function(newX) {
	if(this._position.x == newX) {
		return newX;
	}
	this._position.x = newX;
	this._transformDirty = true;
	return newX;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.set_y = function(newY) {
	if(this._position.y == newY) {
		return newY;
	}
	this._position.y = newY;
	this._transformDirty = true;
	return newY;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.set_zoom = function(value) {
	value = com.pblabs.util.MathUtil.fclamp(value,this.zoomMin,this.zoomMax);
	if(this._zoom == value) {
		return this._zoom;
	}
	this._zoom = value;
	this._transformDirty = true;
	return value;
}
com.pblabs.components.scene.BaseScene2DManager.prototype.update = function() {
	if(Std["is"](this,com.pblabs.engine.time.IAnimatedObject)) {
		(function($this) {
			var $r;
			var $t = $this;
			if(Std["is"]($t,com.pblabs.engine.time.IAnimatedObject)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).onFrame(0);
	}
	if(this.children != null) {
		{
			var _g = 0, _g1 = this.children;
			while(_g < _g1.length) {
				var layer = _g1[_g];
				++_g;
				if(Std["is"](layer,com.pblabs.engine.time.IAnimatedObject)) {
					(function($this) {
						var $r;
						var $t = layer;
						if(Std["is"]($t,com.pblabs.engine.time.IAnimatedObject)) $t;
						else throw "Class cast error";
						$r = $t;
						return $r;
					}(this)).onFrame(0);
				}
				if(layer.children != null) {
					{
						var _g2 = 0, _g3 = layer.children;
						while(_g2 < _g3.length) {
							var c = _g3[_g2];
							++_g2;
							if(Std["is"](c,com.pblabs.engine.time.IAnimatedObject)) {
								(function($this) {
									var $r;
									var $t = c;
									if(Std["is"]($t,com.pblabs.engine.time.IAnimatedObject)) $t;
									else throw "Class cast error";
									$r = $t;
									return $r;
								}(this)).onFrame(0);
							}
						}
					}
				}
			}
		}
	}
}
com.pblabs.components.scene.BaseScene2DManager.prototype.x = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.y = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.zoom = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.zoomMax = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.zoomMin = null;
com.pblabs.components.scene.BaseScene2DManager.prototype.__class__ = com.pblabs.components.scene.BaseScene2DManager;
com.pblabs.components.scene.BaseScene2DManager.__interfaces__ = [com.pblabs.components.scene.IScene2D,haxe.rtti.Infos];
if(!com.pblabs.engine.time) com.pblabs.engine.time = {}
com.pblabs.engine.time.IAnimatedObject = function() { }
com.pblabs.engine.time.IAnimatedObject.__name__ = ["com","pblabs","engine","time","IAnimatedObject"];
com.pblabs.engine.time.IAnimatedObject.prototype.onFrame = null;
com.pblabs.engine.time.IAnimatedObject.prototype.__class__ = com.pblabs.engine.time.IAnimatedObject;
if(!com.pblabs.components.scene.js) com.pblabs.components.scene.js = {}
com.pblabs.components.scene.js.JSSceneManager = function(p) { if( p === $_ ) return; {
	com.pblabs.components.scene.BaseScene2DManager.apply(this,[]);
}}
com.pblabs.components.scene.js.JSSceneManager.__name__ = ["com","pblabs","components","scene","js","JSSceneManager"];
com.pblabs.components.scene.js.JSSceneManager.__super__ = com.pblabs.components.scene.BaseScene2DManager;
for(var k in com.pblabs.components.scene.BaseScene2DManager.prototype ) com.pblabs.components.scene.js.JSSceneManager.prototype[k] = com.pblabs.components.scene.BaseScene2DManager.prototype[k];
com.pblabs.components.scene.js.JSSceneManager.prototype._rootContainer = null;
com.pblabs.components.scene.js.JSSceneManager.prototype.container = null;
com.pblabs.components.scene.js.JSSceneManager.prototype.get_container = function() {
	return this._rootContainer;
}
com.pblabs.components.scene.js.JSSceneManager.prototype.onAdd = function() {
	com.pblabs.components.scene.BaseScene2DManager.prototype.onAdd.apply(this,[]);
	this._rootContainer = js.Lib.document.createElement("div");
	this.get_sceneView().get_layer().appendChild(this._rootContainer);
	this._rootContainer.style.cssText = "position:absolute";
}
com.pblabs.components.scene.js.JSSceneManager.prototype.onFrame = function(dt) {
	if(this._transformDirty) {
		this.updateTransform();
	}
}
com.pblabs.components.scene.js.JSSceneManager.prototype.onRemove = function() {
	com.pblabs.components.scene.BaseScene2DManager.prototype.onRemove.apply(this,[]);
	this._rootContainer = null;
}
com.pblabs.components.scene.js.JSSceneManager.prototype.setLayerIndex = function(layer,index) {
	com.pblabs.components.scene.BaseScene2DManager.prototype.setLayerIndex.apply(this,[layer,index]);
	index = this.getLayerIndex(layer);
	if(layer.div.parentNode == this._rootContainer) {
		this._rootContainer.removeChild(layer.div);
	}
	this._rootContainer.appendChild(layer.div);
	layer.fixPosition();
}
com.pblabs.components.scene.js.JSSceneManager.prototype.updateTransform = function() {
	throw "Override ";
}
com.pblabs.components.scene.js.JSSceneManager.prototype.__class__ = com.pblabs.components.scene.js.JSSceneManager;
com.pblabs.components.scene.js.JSSceneManager.__interfaces__ = [com.pblabs.engine.time.IAnimatedObject];
if(!com.pblabs.components.scene.js.css) com.pblabs.components.scene.js.css = {}
com.pblabs.components.scene.js.css.SceneManager = function(p) { if( p === $_ ) return; {
	com.pblabs.components.scene.js.JSSceneManager.apply(this,[]);
}}
com.pblabs.components.scene.js.css.SceneManager.__name__ = ["com","pblabs","components","scene","js","css","SceneManager"];
com.pblabs.components.scene.js.css.SceneManager.__super__ = com.pblabs.components.scene.js.JSSceneManager;
for(var k in com.pblabs.components.scene.js.JSSceneManager.prototype ) com.pblabs.components.scene.js.css.SceneManager.prototype[k] = com.pblabs.components.scene.js.JSSceneManager.prototype[k];
com.pblabs.components.scene.js.css.SceneManager.prototype.updateTransform = function() {
	{
		var _g = 0, _g1 = this.children;
		while(_g < _g1.length) {
			var layer = _g1[_g];
			++_g;
			layer.updateTransform();
		}
	}
	this._transformDirty = false;
}
com.pblabs.components.scene.js.css.SceneManager.prototype.__class__ = com.pblabs.components.scene.js.css.SceneManager;
com.pblabs.util.ds.MapUtil = function() { }
com.pblabs.util.ds.MapUtil.__name__ = ["com","pblabs","util","ds","MapUtil"];
com.pblabs.util.ds.MapUtil.forEach = function(map,fn) {
	{ var $it0 = map.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	{
		if(fn(k,map.get(k))) {
			break;
		}
	}
	}}
}
com.pblabs.util.ds.MapUtil.isEmpty = function(map) {
	return map.size() == 0;
}
com.pblabs.util.ds.MapUtil.createFieldMapping = function(fieldName) {
	return function(obj) {
		return Reflect.field(obj,fieldName);
	}
}
com.pblabs.util.ds.MapUtil.createFunctionMapping = function(fieldName) {
	return function(obj) {
		return fieldName.apply(obj,[]);
	}
}
com.pblabs.util.ds.MapUtil.createIndexMap = function(items,map) {
	var _g1 = 0, _g = items.length;
	while(_g1 < _g) {
		var ii = _g1++;
		map.set(ii,items[ii]);
	}
}
com.pblabs.util.ds.MapUtil.toIndex = function(index,item) {
	return index;
}
com.pblabs.util.ds.MapUtil.toString = function(map) {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = map.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = com.pblabs.util.StringUtil.getStringKey(i);
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = com.pblabs.util.StringUtil.getStringKey(map.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
com.pblabs.util.ds.MapUtil.prototype.__class__ = com.pblabs.util.ds.MapUtil;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.h = null;
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}}
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
com.pblabs.util.ds.maps.KeyListMap = function(p) { if( p === $_ ) return; {
	com.pblabs.util.ds.maps.AbstractMap.apply(this,[]);
	this._keys = new haxe.FastList();
}}
com.pblabs.util.ds.maps.KeyListMap.__name__ = ["com","pblabs","util","ds","maps","KeyListMap"];
com.pblabs.util.ds.maps.KeyListMap.__super__ = com.pblabs.util.ds.maps.AbstractMap;
for(var k in com.pblabs.util.ds.maps.AbstractMap.prototype ) com.pblabs.util.ds.maps.KeyListMap.prototype[k] = com.pblabs.util.ds.maps.AbstractMap.prototype[k];
com.pblabs.util.ds.maps.KeyListMap.prototype._keys = null;
com.pblabs.util.ds.maps.KeyListMap.prototype.clear = function() {
	com.pblabs.util.ds.maps.AbstractMap.prototype.clear.apply(this,[]);
	this._keys = new haxe.FastList();
}
com.pblabs.util.ds.maps.KeyListMap.prototype.keys = function() {
	return this._keys.iterator();
}
com.pblabs.util.ds.maps.KeyListMap.prototype.remove = function(key) {
	if(com.pblabs.util.ds.maps.AbstractMap.prototype.remove.apply(this,[key])) {
		this._keys.remove(key);
		return true;
	}
	return false;
}
com.pblabs.util.ds.maps.KeyListMap.prototype.set = function(key,value) {
	com.pblabs.util.ds.maps.AbstractMap.prototype.set.apply(this,[key,value]);
	this._keys.add(key);
}
com.pblabs.util.ds.maps.KeyListMap.prototype.__class__ = com.pblabs.util.ds.maps.KeyListMap;
com.pblabs.util.ds.Sets = function() { }
com.pblabs.util.ds.Sets.__name__ = ["com","pblabs","util","ds","Sets"];
com.pblabs.util.ds.Sets.newSetOf = function(valueClazz) {
	return new com.pblabs.util.ds.sets.MapSet(com.pblabs.util.ds.Maps.newHashMap(valueClazz));
}
com.pblabs.util.ds.Sets.prototype.__class__ = com.pblabs.util.ds.Sets;
com.pblabs.components.input.IInteractiveComponent = function() { }
com.pblabs.components.input.IInteractiveComponent.__name__ = ["com","pblabs","components","input","IInteractiveComponent"];
com.pblabs.components.input.IInteractiveComponent.prototype.containsScreenPoint = null;
com.pblabs.components.input.IInteractiveComponent.prototype.__class__ = com.pblabs.components.input.IInteractiveComponent;
com.pblabs.components.input.IInteractiveComponent.__interfaces__ = [com.pblabs.engine.core.IEntityComponent];
com.pblabs.components.scene.BaseScene2DComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.components.manager.NodeComponent.apply(this,[]);
	this._x = 0;
	this._y = 0;
	this._angle = 0;
	this._scale = 1;
	this.set_isTransformDirty(true);
	this._width = 0;
	this._height = 0;
}}
com.pblabs.components.scene.BaseScene2DComponent.__name__ = ["com","pblabs","components","scene","BaseScene2DComponent"];
com.pblabs.components.scene.BaseScene2DComponent.__super__ = com.pblabs.components.manager.NodeComponent;
for(var k in com.pblabs.components.manager.NodeComponent.prototype ) com.pblabs.components.scene.BaseScene2DComponent.prototype[k] = com.pblabs.components.manager.NodeComponent.prototype[k];
com.pblabs.components.scene.BaseScene2DComponent.prototype._angle = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype._height = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype._isTransformDirty = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype._scale = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype._width = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype._x = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype._y = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.angle = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.containsScreenPoint = function(pos) {
	var scene = this.parent.get_scene();
	return com.pblabs.geom.RectangleTools.contains(this.get_x() - this._width / 2,this.get_y() - this._height / 2,this._width,this._height,com.pblabs.components.scene.SceneUtil.translateScreenToWorld(scene,pos),this.get_angle());
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_angle = function() {
	return this._angle;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_height = function() {
	return this._height;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_isTransformDirty = function() {
	return this._isTransformDirty;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_layer = function() {
	return this.parent;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_scale = function() {
	return this._scale;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_width = function() {
	return this._width;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_x = function() {
	return this._x;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.get_y = function() {
	return this._y;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.height = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.isTransformDirty = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.layer = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.onRemove = function() {
	com.pblabs.components.manager.NodeComponent.prototype.onRemove.apply(this,[]);
	this.get_owner().lookupComponent(com.pblabs.components.base.LocationComponent).signaller.unbind($closure(this,"setLocation"));
	this.get_owner().lookupComponent(com.pblabs.components.base.AngleComponent).signaller.unbind($closure(this,"set_angle"));
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.onReset = function() {
	com.pblabs.components.manager.NodeComponent.prototype.onReset.apply(this,[]);
	com.pblabs.util.Preconditions.checkNotNull(this.parentProperty,"parentProperty is null");
	this.get_owner().lookupComponent(com.pblabs.components.base.LocationComponent).signaller.unbind($closure(this,"setLocation"));
	this.get_owner().lookupComponent(com.pblabs.components.base.LocationComponent).signaller.bind($closure(this,"setLocation"));
	this.get_owner().lookupComponent(com.pblabs.components.base.AngleComponent).signaller.unbind($closure(this,"set_angle"));
	this.get_owner().lookupComponent(com.pblabs.components.base.AngleComponent).signaller.bind($closure(this,"set_angle"));
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.scale = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.setLocation = function(loc) {
	this.set_x(loc.x);
	this.set_y(loc.y);
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.set_angle = function(val) {
	this._angle = val;
	this.set_isTransformDirty(true);
	return val;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.set_height = function(val) {
	this._height = val;
	this.set_isTransformDirty(true);
	return val;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.set_isTransformDirty = function(val) {
	this._isTransformDirty = val;
	return val;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.set_scale = function(val) {
	this._scale = val;
	return val;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.set_width = function(val) {
	this._width = val;
	this.set_isTransformDirty(true);
	return val;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.set_x = function(val) {
	this._x = val;
	this.set_isTransformDirty(true);
	return val;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.set_y = function(val) {
	this._y = val;
	this.set_isTransformDirty(true);
	return val;
}
com.pblabs.components.scene.BaseScene2DComponent.prototype.width = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.x = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.y = null;
com.pblabs.components.scene.BaseScene2DComponent.prototype.__class__ = com.pblabs.components.scene.BaseScene2DComponent;
com.pblabs.components.scene.BaseScene2DComponent.__interfaces__ = [com.pblabs.components.input.IInteractiveComponent];
com.pblabs.components.scene.js.css.Base2DComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.components.scene.BaseScene2DComponent.apply(this,[]);
	this._height = 0;
	this._width = 0;
}}
com.pblabs.components.scene.js.css.Base2DComponent.__name__ = ["com","pblabs","components","scene","js","css","Base2DComponent"];
com.pblabs.components.scene.js.css.Base2DComponent.__super__ = com.pblabs.components.scene.BaseScene2DComponent;
for(var k in com.pblabs.components.scene.BaseScene2DComponent.prototype ) com.pblabs.components.scene.js.css.Base2DComponent.prototype[k] = com.pblabs.components.scene.BaseScene2DComponent.prototype[k];
com.pblabs.components.scene.js.css.Base2DComponent.prototype._displayObject = null;
com.pblabs.components.scene.js.css.Base2DComponent.prototype.addedToParent = function() {
	com.pblabs.components.scene.BaseScene2DComponent.prototype.addedToParent.apply(this,[]);
	this.parent.div.appendChild(this.div);
	this.onFrame(0);
}
com.pblabs.components.scene.js.css.Base2DComponent.prototype.displayObject = null;
com.pblabs.components.scene.js.css.Base2DComponent.prototype.div = null;
com.pblabs.components.scene.js.css.Base2DComponent.prototype.get_displayObject = function() {
	return this._displayObject;
}
com.pblabs.components.scene.js.css.Base2DComponent.prototype.onAdd = function() {
	this.div = js.Lib.document.createElement("div");
	this.div.setAttribute("disabled","true");
	this.div.style.cssText = "position:absolute";
	com.pblabs.components.scene.BaseScene2DComponent.prototype.onAdd.apply(this,[]);
}
com.pblabs.components.scene.js.css.Base2DComponent.prototype.onFrame = function(dt) {
	if(this.get_isTransformDirty()) {
		this.set_isTransformDirty(false);
		var xOffset = this.parent.get_xOffset();
		var yOffset = this.parent.get_yOffset();
		this.div.style.webkitTransform = ((((("translate(" + (this._x + xOffset)) + "px, ") + (this._y + yOffset)) + "px) rotate(") + this._angle) + "rad)";
	}
}
com.pblabs.components.scene.js.css.Base2DComponent.prototype.removingFromParent = function() {
	com.pblabs.components.scene.BaseScene2DComponent.prototype.removingFromParent.apply(this,[]);
	this.parent.div.removeChild(this.div);
}
com.pblabs.components.scene.js.css.Base2DComponent.prototype.set_displayObject = function(val) {
	if(this._displayObject != null) null;
	this._displayObject = val;
	this.div.appendChild(this._displayObject);
	return val;
}
com.pblabs.components.scene.js.css.Base2DComponent.prototype.__class__ = com.pblabs.components.scene.js.css.Base2DComponent;
com.pblabs.components.scene.js.css.Base2DComponent.__interfaces__ = [com.pblabs.engine.time.IAnimatedObject];
com.pblabs.components.scene.ShapeComponent = function(fillcolor,borderWidth,borderColor) { if( fillcolor === $_ ) return; {
	if(borderColor == null) borderColor = 0;
	if(borderWidth == null) borderWidth = 1;
	if(fillcolor == null) fillcolor = 16711680;
	com.pblabs.components.scene.js.css.Base2DComponent.apply(this,[]);
	this._fillColor = fillcolor;
	this._borderColor = borderColor;
	this._borderWidth = borderWidth;
}}
com.pblabs.components.scene.ShapeComponent.__name__ = ["com","pblabs","components","scene","ShapeComponent"];
com.pblabs.components.scene.ShapeComponent.__super__ = com.pblabs.components.scene.js.css.Base2DComponent;
for(var k in com.pblabs.components.scene.js.css.Base2DComponent.prototype ) com.pblabs.components.scene.ShapeComponent.prototype[k] = com.pblabs.components.scene.js.css.Base2DComponent.prototype[k];
com.pblabs.components.scene.ShapeComponent.prototype._borderColor = null;
com.pblabs.components.scene.ShapeComponent.prototype._borderWidth = null;
com.pblabs.components.scene.ShapeComponent.prototype._fillColor = null;
com.pblabs.components.scene.ShapeComponent.prototype.borderColor = null;
com.pblabs.components.scene.ShapeComponent.prototype.borderWidth = null;
com.pblabs.components.scene.ShapeComponent.prototype.fillColor = null;
com.pblabs.components.scene.ShapeComponent.prototype.get_borderColor = function() {
	return this._borderColor;
}
com.pblabs.components.scene.ShapeComponent.prototype.get_borderWidth = function() {
	return this._borderWidth;
}
com.pblabs.components.scene.ShapeComponent.prototype.get_fillColor = function() {
	return this._fillColor;
}
com.pblabs.components.scene.ShapeComponent.prototype.onFrame = function(dt) {
	if(this.get_isTransformDirty()) {
		this.set_isTransformDirty(false);
		var xOffset = this.parent.get_xOffset() - (this.get_width() / 2);
		var yOffset = this.parent.get_yOffset() - (this.get_height() / 2);
		this.div.style.webkitTransform = ((((("translate(" + (this._x + xOffset)) + "px, ") + (this._y + yOffset)) + "px) rotate(") + this._angle) + "rad)";
	}
}
com.pblabs.components.scene.ShapeComponent.prototype.onReset = function() {
	com.pblabs.components.scene.js.css.Base2DComponent.prototype.onReset.apply(this,[]);
	this.redraw();
}
com.pblabs.components.scene.ShapeComponent.prototype.redraw = function() {
	throw "Subclasses must override";
}
com.pblabs.components.scene.ShapeComponent.prototype.set_borderColor = function(val) {
	this._borderColor = val;
	this.redraw();
	return val;
}
com.pblabs.components.scene.ShapeComponent.prototype.set_borderWidth = function(val) {
	this._borderWidth = val;
	this.redraw();
	return val;
}
com.pblabs.components.scene.ShapeComponent.prototype.set_fillColor = function(val) {
	this._fillColor = val;
	this.redraw();
	return val;
}
com.pblabs.components.scene.ShapeComponent.prototype.set_height = function(val) {
	com.pblabs.components.scene.js.css.Base2DComponent.prototype.set_height.apply(this,[val]);
	this.redraw();
	return val;
}
com.pblabs.components.scene.ShapeComponent.prototype.set_width = function(val) {
	com.pblabs.components.scene.js.css.Base2DComponent.prototype.set_width.apply(this,[val]);
	this.redraw();
	return val;
}
com.pblabs.components.scene.ShapeComponent.prototype.__class__ = com.pblabs.components.scene.ShapeComponent;
com.pblabs.components.scene.RectangleShape = function(w,h,color) { if( w === $_ ) return; {
	if(color == null) color = 16711680;
	if(h == null) h = 10;
	if(w == null) w = 20;
	com.pblabs.components.scene.ShapeComponent.apply(this,[color]);
	this._rect = js.Lib.document.createElement("div");
	this.set_width(w);
	this.set_height(h);
}}
com.pblabs.components.scene.RectangleShape.__name__ = ["com","pblabs","components","scene","RectangleShape"];
com.pblabs.components.scene.RectangleShape.__super__ = com.pblabs.components.scene.ShapeComponent;
for(var k in com.pblabs.components.scene.ShapeComponent.prototype ) com.pblabs.components.scene.RectangleShape.prototype[k] = com.pblabs.components.scene.ShapeComponent.prototype[k];
com.pblabs.components.scene.RectangleShape.prototype._rect = null;
com.pblabs.components.scene.RectangleShape.prototype.onAdd = function() {
	com.pblabs.components.scene.ShapeComponent.prototype.onAdd.apply(this,[]);
	this.div.appendChild(this._rect);
	this.redraw();
}
com.pblabs.components.scene.RectangleShape.prototype.onFrame = function(dt) {
	if(this.get_isTransformDirty()) {
		this.set_isTransformDirty(false);
		var xOffset = this.parent.get_xOffset() - (this.get_width() / 2);
		var yOffset = this.parent.get_yOffset() - (this.get_height() / 2);
		this.div.style.webkitTransform = ((((("translate(" + (this._x + xOffset)) + "px, ") + (this._y + yOffset)) + "px) rotate(") + this._angle) + "rad)";
	}
}
com.pblabs.components.scene.RectangleShape.prototype.redraw = function() {
	this._rect.style.cssText = (((((((((" width:" + this.get_width()) + "px; height:") + this.get_height()) + "px; background-color:") + com.pblabs.util.StringUtil.toColorString(this.get_fillColor(),"#")) + "; border-color:") + com.pblabs.util.StringUtil.toColorString(this.get_borderColor(),"#")) + "; border-style:solid; border-width:") + this.get_borderWidth()) + "px;";
}
com.pblabs.components.scene.RectangleShape.prototype.__class__ = com.pblabs.components.scene.RectangleShape;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return (s.length >= start.length && s.substr(0,start.length) == start);
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return (slen >= elen && s.substr(slen - elen,elen) == end);
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return (c >= 9 && c <= 13) || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,(l - r) - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.prototype.__class__ = StringTools;
com.pblabs.engine.core.IPBGroup = function() { }
com.pblabs.engine.core.IPBGroup.__name__ = ["com","pblabs","engine","core","IPBGroup"];
com.pblabs.engine.core.IPBGroup.prototype.addToGroup = null;
com.pblabs.engine.core.IPBGroup.prototype.clear = null;
com.pblabs.engine.core.IPBGroup.prototype.iterator = null;
com.pblabs.engine.core.IPBGroup.prototype.removeFromGroup = null;
com.pblabs.engine.core.IPBGroup.prototype.rootGroup = null;
com.pblabs.engine.core.IPBGroup.prototype.__class__ = com.pblabs.engine.core.IPBGroup;
com.pblabs.engine.core.IPBGroup.__interfaces__ = [com.pblabs.engine.core.IPBObject];
com.pblabs.engine.core.PBGroup = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.PBObject.apply(this,[]);
	this.items = [];
}}
com.pblabs.engine.core.PBGroup.__name__ = ["com","pblabs","engine","core","PBGroup"];
com.pblabs.engine.core.PBGroup.__super__ = com.pblabs.engine.core.PBObject;
for(var k in com.pblabs.engine.core.PBObject.prototype ) com.pblabs.engine.core.PBGroup.prototype[k] = com.pblabs.engine.core.PBObject.prototype[k];
com.pblabs.engine.core.PBGroup.prototype.addToGroup = function(item) {
	com.pblabs.util.Preconditions.checkNotNull(item,"Cannot add null item to group");
	com.pblabs.util.Preconditions.checkArgument(item.get_owningGroup() == this || item.get_owningGroup() == null,"Adding IPBObject to two groups at the same time!");
	this.items.push(item);
	return true;
}
com.pblabs.engine.core.PBGroup.prototype.clear = function() {
	while(this.items.length > 0) this.items.pop().destroy();
}
com.pblabs.engine.core.PBGroup.prototype.destroy = function() {
	this.clear();
	com.pblabs.engine.core.PBObject.prototype.destroy.apply(this,[]);
}
com.pblabs.engine.core.PBGroup.prototype.getItem = function(index) {
	if(index < 0 || index >= this.items.length) return null;
	return this.items[index];
}
com.pblabs.engine.core.PBGroup.prototype.get_length = function() {
	return this.items.length;
}
com.pblabs.engine.core.PBGroup.prototype.get_rootGroup = function() {
	var cur = this;
	while(cur.get_owningGroup() != null) {
		cur = cur.get_owningGroup();
	}
	return cur;
}
com.pblabs.engine.core.PBGroup.prototype.items = null;
com.pblabs.engine.core.PBGroup.prototype.iterator = function() {
	return this.items.iterator();
}
com.pblabs.engine.core.PBGroup.prototype.length = null;
com.pblabs.engine.core.PBGroup.prototype.removeFromGroup = function(item) {
	var idx = com.pblabs.util.IterUtil.indexOf(this.items,item);
	if(idx == -1) return false;
	this.items.splice(idx,1);
	return true;
}
com.pblabs.engine.core.PBGroup.prototype.rootGroup = null;
com.pblabs.engine.core.PBGroup.prototype.__class__ = com.pblabs.engine.core.PBGroup;
com.pblabs.engine.core.PBGroup.__interfaces__ = [com.pblabs.engine.core.IPBGroup];
com.pblabs.components.scene.ImageComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.components.scene.js.css.Base2DComponent.apply(this,[]);
}}
com.pblabs.components.scene.ImageComponent.__name__ = ["com","pblabs","components","scene","ImageComponent"];
com.pblabs.components.scene.ImageComponent.__super__ = com.pblabs.components.scene.js.css.Base2DComponent;
for(var k in com.pblabs.components.scene.js.css.Base2DComponent.prototype ) com.pblabs.components.scene.ImageComponent.prototype[k] = com.pblabs.components.scene.js.css.Base2DComponent.prototype[k];
com.pblabs.components.scene.ImageComponent.prototype.containsScreenPoint = function(pos) {
	return com.pblabs.geom.RectangleTools.contains(this.get_x() - this._width / 2,this.get_y() - this._height / 2,this._width,this._height,com.pblabs.components.scene.SceneUtil.translateScreenToWorld(this.parent.get_scene(),pos));
}
com.pblabs.components.scene.ImageComponent.prototype.onAdd = function() {
	com.pblabs.components.scene.js.css.Base2DComponent.prototype.onAdd.apply(this,[]);
	var image = this.resource.create();
	com.pblabs.util.Preconditions.checkNotNull(image,"image from resource is null " + this.resource);
	this.set_displayObject(image);
	this._width = image.width;
	this._height = image.height;
	this.div.appendChild(this.get_displayObject());
}
com.pblabs.components.scene.ImageComponent.prototype.onFrame = function(dt) {
	if(this.get_isTransformDirty()) {
		this.set_isTransformDirty(false);
		var xOffset = this.parent.get_xOffset() - this.get_width() / 2;
		var yOffset = this.parent.get_yOffset() - this.get_height() / 2;
		this.div.style.webkitTransform = ((((("translate(" + (this._x + xOffset)) + "px, ") + (this._y + yOffset)) + "px) rotate(") + this._angle) + "rad)";
	}
}
com.pblabs.components.scene.ImageComponent.prototype.resource = null;
com.pblabs.components.scene.ImageComponent.prototype.set_height = function(val) {
	if(this.get_displayObject() != null) {
		this.get_displayObject().setAttribute("height",val + "px");
	}
	return com.pblabs.components.scene.js.css.Base2DComponent.prototype.set_height.apply(this,[val]);
}
com.pblabs.components.scene.ImageComponent.prototype.set_width = function(val) {
	if(this.get_displayObject() != null) {
		this.get_displayObject().setAttribute("width",val + "px");
	}
	return com.pblabs.components.scene.js.css.Base2DComponent.prototype.set_width.apply(this,[val]);
}
com.pblabs.components.scene.ImageComponent.prototype.__class__ = com.pblabs.components.scene.ImageComponent;
if(typeof hsl=='undefined') hsl = {}
if(!hsl.haxe) hsl.haxe = {}
hsl.haxe.Signaler = function() { }
hsl.haxe.Signaler.__name__ = ["hsl","haxe","Signaler"];
hsl.haxe.Signaler.prototype.addBubblingTarget = null;
hsl.haxe.Signaler.prototype.addNotificationTarget = null;
hsl.haxe.Signaler.prototype.bind = null;
hsl.haxe.Signaler.prototype.bindAdvanced = null;
hsl.haxe.Signaler.prototype.bindVoid = null;
hsl.haxe.Signaler.prototype.dispatch = null;
hsl.haxe.Signaler.prototype.getIsListenedTo = null;
hsl.haxe.Signaler.prototype.isListenedTo = null;
hsl.haxe.Signaler.prototype.removeBubblingTarget = null;
hsl.haxe.Signaler.prototype.removeNotificationTarget = null;
hsl.haxe.Signaler.prototype.subject = null;
hsl.haxe.Signaler.prototype.unbind = null;
hsl.haxe.Signaler.prototype.unbindAdvanced = null;
hsl.haxe.Signaler.prototype.unbindAll = null;
hsl.haxe.Signaler.prototype.unbindVoid = null;
hsl.haxe.Signaler.prototype.__class__ = hsl.haxe.Signaler;
hsl.haxe.DirectSignaler = function(subject,rejectNullData) { if( subject === $_ ) return; {
	if(null == subject) {
		throw new haxe.exception.ArgumentNullException("subject",1);
	}
	this.subject = subject;
	this.rejectNullData = rejectNullData;
	this.sentinel = new hsl.haxe._DirectSignaler.SentinelBond();
}}
hsl.haxe.DirectSignaler.__name__ = ["hsl","haxe","DirectSignaler"];
hsl.haxe.DirectSignaler.prototype.addBubblingTarget = function(value) {
	if(null == this.bubblingTargets) {
		this.bubblingTargets = new List();
	}
	this.bubblingTargets.add(value);
}
hsl.haxe.DirectSignaler.prototype.addNotificationTarget = function(value) {
	if(null == this.notificationTargets) {
		this.notificationTargets = new List();
	}
	this.notificationTargets.add(value);
}
hsl.haxe.DirectSignaler.prototype.bind = function(listener,context) {
	return this.sentinel.add(new hsl.haxe._DirectSignaler.RegularBond(listener,context));
}
hsl.haxe.DirectSignaler.prototype.bindAdvanced = function(listener) {
	return this.sentinel.add(new hsl.haxe._DirectSignaler.AdvancedBond(listener));
}
hsl.haxe.DirectSignaler.prototype.bindVoid = function(listener) {
	return this.sentinel.add(new hsl.haxe._DirectSignaler.NiladicBond(listener));
}
hsl.haxe.DirectSignaler.prototype.bubble = function(data,origin) {
	if(null != this.bubblingTargets) {
		{ var $it0 = this.bubblingTargets.iterator();
		while( $it0.hasNext() ) { var bubblingTarget = $it0.next();
		{
			bubblingTarget.dispatch(data,origin,{ fileName : "DirectSignaler.hx", lineNumber : 94, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
		}
		}}
	}
	if(null != this.notificationTargets) {
		{ var $it1 = this.notificationTargets.iterator();
		while( $it1.hasNext() ) { var notificationTarget = $it1.next();
		{
			notificationTarget.dispatch(null,origin,{ fileName : "DirectSignaler.hx", lineNumber : 99, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
		}
		}}
	}
}
hsl.haxe.DirectSignaler.prototype.bubblingTargets = null;
hsl.haxe.DirectSignaler.prototype.dispatch = function(data,origin,positionInformation) {
	if("dispatchNative" != positionInformation.methodName && "bubble" != positionInformation.methodName) {
		this.verifyCaller(positionInformation);
	}
	if(this.rejectNullData && null == data) {
		throw new haxe.exception.Exception("Some data that was passed is null, but this signaler has been set to reject null data.",null,1);
	}
	origin = (null == origin?this.subject:origin);
	if(3 == this.sentinel.callListener(data,this.subject,origin,3)) {
		{
			if(null != this.bubblingTargets) {
				{ var $it0 = this.bubblingTargets.iterator();
				while( $it0.hasNext() ) { var bubblingTarget = $it0.next();
				{
					bubblingTarget.dispatch(data,origin,{ fileName : "DirectSignaler.hx", lineNumber : 94, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
				}
				}}
			}
			if(null != this.notificationTargets) {
				{ var $it1 = this.notificationTargets.iterator();
				while( $it1.hasNext() ) { var notificationTarget = $it1.next();
				{
					notificationTarget.dispatch(null,origin,{ fileName : "DirectSignaler.hx", lineNumber : 99, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
				}
				}}
			}
		}
	}
}
hsl.haxe.DirectSignaler.prototype.getIsListenedTo = function() {
	return this.sentinel.getIsConnected();
}
hsl.haxe.DirectSignaler.prototype.getOrigin = function(origin) {
	return (null == origin?this.subject:origin);
}
hsl.haxe.DirectSignaler.prototype.isListenedTo = null;
hsl.haxe.DirectSignaler.prototype.notificationTargets = null;
hsl.haxe.DirectSignaler.prototype.rejectNullData = null;
hsl.haxe.DirectSignaler.prototype.removeBubblingTarget = function(value) {
	if(null != this.bubblingTargets) {
		this.bubblingTargets.remove(value);
	}
}
hsl.haxe.DirectSignaler.prototype.removeNotificationTarget = function(value) {
	if(null != this.notificationTargets) {
		this.notificationTargets.remove(value);
	}
}
hsl.haxe.DirectSignaler.prototype.sentinel = null;
hsl.haxe.DirectSignaler.prototype.subject = null;
hsl.haxe.DirectSignaler.prototype.subjectClassNames = null;
hsl.haxe.DirectSignaler.prototype.unbind = function(listener) {
	this.sentinel.remove(new hsl.haxe._DirectSignaler.RegularBond(listener));
}
hsl.haxe.DirectSignaler.prototype.unbindAdvanced = function(listener) {
	this.sentinel.remove(new hsl.haxe._DirectSignaler.AdvancedBond(listener));
}
hsl.haxe.DirectSignaler.prototype.unbindAll = function() {
	this.sentinel.removeAll();
}
hsl.haxe.DirectSignaler.prototype.unbindVoid = function(listener) {
	this.sentinel.remove(new hsl.haxe._DirectSignaler.NiladicBond(listener));
}
hsl.haxe.DirectSignaler.prototype.verifyCaller = function(positionInformation) {
	if(null == this.subjectClassNames) {
		this.subjectClassNames = haxe.TypeTools.getClassNames(this.subject);
	}
	{ var $it0 = this.subjectClassNames.iterator();
	while( $it0.hasNext() ) { var subjectClassName = $it0.next();
	{
		if(subjectClassName == positionInformation.className) {
			return;
		}
	}
	}}
	throw new haxe.exception.Exception("This method may only be called by the subject of the signaler.",null,2);
}
hsl.haxe.DirectSignaler.prototype.__class__ = hsl.haxe.DirectSignaler;
hsl.haxe.DirectSignaler.__interfaces__ = [hsl.haxe.Signaler];
if(!hsl.haxe.translating) hsl.haxe.translating = {}
hsl.haxe.translating.TranslatingSignalerBase = function(subject,translator,rejectNullData) { if( subject === $_ ) return; {
	hsl.haxe.DirectSignaler.apply(this,[subject,rejectNullData]);
	this.translator = translator;
}}
hsl.haxe.translating.TranslatingSignalerBase.__name__ = ["hsl","haxe","translating","TranslatingSignalerBase"];
hsl.haxe.translating.TranslatingSignalerBase.__super__ = hsl.haxe.DirectSignaler;
for(var k in hsl.haxe.DirectSignaler.prototype ) hsl.haxe.translating.TranslatingSignalerBase.prototype[k] = hsl.haxe.DirectSignaler.prototype[k];
hsl.haxe.translating.TranslatingSignalerBase.prototype.dispatchNative = function(nativeEvent) {
	var translation = this.translator.translate(nativeEvent);
	this.dispatch(translation.data,translation.origin,{ fileName : "TranslatingSignalerBase.hx", lineNumber : 59, className : "hsl.haxe.translating.TranslatingSignalerBase", methodName : "dispatchNative"});
}
hsl.haxe.translating.TranslatingSignalerBase.prototype.stop = function(positionInformation) {
	this.verifyCaller(positionInformation);
}
hsl.haxe.translating.TranslatingSignalerBase.prototype.translator = null;
hsl.haxe.translating.TranslatingSignalerBase.prototype.__class__ = hsl.haxe.translating.TranslatingSignalerBase;
com.pblabs.engine.resource.Source = { __ename__ : ["com","pblabs","engine","resource","Source"], __constructs__ : ["url","bytes","text","embedded"] }
com.pblabs.engine.resource.Source.bytes = function(b) { var $x = ["bytes",1,b]; $x.__enum__ = com.pblabs.engine.resource.Source; $x.toString = $estr; return $x; }
com.pblabs.engine.resource.Source.embedded = function(name) { var $x = ["embedded",3,name]; $x.__enum__ = com.pblabs.engine.resource.Source; $x.toString = $estr; return $x; }
com.pblabs.engine.resource.Source.text = function(t) { var $x = ["text",2,t]; $x.__enum__ = com.pblabs.engine.resource.Source; $x.toString = $estr; return $x; }
com.pblabs.engine.resource.Source.url = function(u) { var $x = ["url",0,u]; $x.__enum__ = com.pblabs.engine.resource.Source; $x.toString = $estr; return $x; }
com.pblabs.components.tasks.TimedTask = function(time) { if( time === $_ ) return; {
	if(time == null) time = 0;
	this._time = time;
	this._elapsedTime = 0;
}}
com.pblabs.components.tasks.TimedTask.__name__ = ["com","pblabs","components","tasks","TimedTask"];
com.pblabs.components.tasks.TimedTask.prototype._elapsedTime = null;
com.pblabs.components.tasks.TimedTask.prototype._time = null;
com.pblabs.components.tasks.TimedTask.prototype.clone = function() {
	return new com.pblabs.components.tasks.TimedTask(this._time);
}
com.pblabs.components.tasks.TimedTask.prototype.update = function(dt,obj) {
	this._elapsedTime += dt;
	return (this._elapsedTime >= this._time);
}
com.pblabs.components.tasks.TimedTask.prototype.__class__ = com.pblabs.components.tasks.TimedTask;
com.pblabs.components.tasks.TimedTask.__interfaces__ = [com.pblabs.components.tasks.IEntityTask];
com.pblabs.geom.Circle = function(radius,x,y) { if( radius === $_ ) return; {
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(radius == null) radius = 0;
	this.radius = radius;
	this.center = new com.pblabs.geom.Vector2(x,y);
}}
com.pblabs.geom.Circle.__name__ = ["com","pblabs","geom","Circle"];
com.pblabs.geom.Circle.prototype.center = null;
com.pblabs.geom.Circle.prototype.clone = function() {
	return new com.pblabs.geom.Circle(this.radius,this.center.x,this.center.y);
}
com.pblabs.geom.Circle.prototype.distance = function(other) {
	return com.pblabs.geom.Geometry.distance(this.center.x,this.center.y,other.center.x,other.center.y) - (this.radius + other.radius);
}
com.pblabs.geom.Circle.prototype.get_x = function() {
	return this.center.x;
}
com.pblabs.geom.Circle.prototype.get_y = function() {
	return this.center.y;
}
com.pblabs.geom.Circle.prototype.radius = null;
com.pblabs.geom.Circle.prototype.set_x = function(val) {
	this.center.x = val;
	return val;
}
com.pblabs.geom.Circle.prototype.set_y = function(val) {
	this.center.y = val;
	return val;
}
com.pblabs.geom.Circle.prototype.toString = function() {
	return ((((("[r=" + this.radius) + ", x=") + this.center.x) + ", y=") + this.center.y) + "]";
}
com.pblabs.geom.Circle.prototype.x = null;
com.pblabs.geom.Circle.prototype.y = null;
com.pblabs.geom.Circle.prototype.__class__ = com.pblabs.geom.Circle;
com.pblabs.geom.Circle.__interfaces__ = [com.pblabs.util.Cloneable];
com.pblabs.engine.resource.IResource = function() { }
com.pblabs.engine.resource.IResource.__name__ = ["com","pblabs","engine","resource","IResource"];
com.pblabs.engine.resource.IResource.prototype.create = null;
com.pblabs.engine.resource.IResource.prototype.isLoaded = null;
com.pblabs.engine.resource.IResource.prototype.load = null;
com.pblabs.engine.resource.IResource.prototype.name = null;
com.pblabs.engine.resource.IResource.prototype.unload = null;
com.pblabs.engine.resource.IResource.prototype.__class__ = com.pblabs.engine.resource.IResource;
com.pblabs.engine.resource.ResourceBase = function(name) { if( name === $_ ) return; {
	this._name = name;
}}
com.pblabs.engine.resource.ResourceBase.__name__ = ["com","pblabs","engine","resource","ResourceBase"];
com.pblabs.engine.resource.ResourceBase.prototype._isLoaded = null;
com.pblabs.engine.resource.ResourceBase.prototype._name = null;
com.pblabs.engine.resource.ResourceBase.prototype._onError = null;
com.pblabs.engine.resource.ResourceBase.prototype._onLoad = null;
com.pblabs.engine.resource.ResourceBase.prototype.create = function(name) {
	throw "Override";
	return null;
}
com.pblabs.engine.resource.ResourceBase.prototype.get_name = function() {
	return this._name;
}
com.pblabs.engine.resource.ResourceBase.prototype.isLoaded = function() {
	return this._isLoaded;
}
com.pblabs.engine.resource.ResourceBase.prototype.load = function(onLoad,onError) {
	this._onLoad = onLoad;
	this._onError = onError;
}
com.pblabs.engine.resource.ResourceBase.prototype.loaded = function() {
	this._isLoaded = true;
	this._onLoad();
	this._onLoad = null;
	this._onError = null;
}
com.pblabs.engine.resource.ResourceBase.prototype.name = null;
com.pblabs.engine.resource.ResourceBase.prototype.toString = function() {
	return com.pblabs.util.StringUtil.objectToString(this,["name"]);
}
com.pblabs.engine.resource.ResourceBase.prototype.unload = function() {
	this._onLoad = null;
	this._onError = null;
}
com.pblabs.engine.resource.ResourceBase.prototype.__class__ = com.pblabs.engine.resource.ResourceBase;
com.pblabs.engine.resource.ResourceBase.__interfaces__ = [com.pblabs.engine.resource.IResource];
com.pblabs.util.Comparable = function() { }
com.pblabs.util.Comparable.__name__ = ["com","pblabs","util","Comparable"];
com.pblabs.util.Comparable.prototype.compareTo = null;
com.pblabs.util.Comparable.prototype.__class__ = com.pblabs.util.Comparable;
com.pblabs.util.ds.maps.StringMap = function(p) { if( p === $_ ) return; {
	com.pblabs.util.ds.maps.KeyListMap.apply(this,[]);
	this._hash = new Hash();
}}
com.pblabs.util.ds.maps.StringMap.__name__ = ["com","pblabs","util","ds","maps","StringMap"];
com.pblabs.util.ds.maps.StringMap.__super__ = com.pblabs.util.ds.maps.KeyListMap;
for(var k in com.pblabs.util.ds.maps.KeyListMap.prototype ) com.pblabs.util.ds.maps.StringMap.prototype[k] = com.pblabs.util.ds.maps.KeyListMap.prototype[k];
com.pblabs.util.ds.maps.StringMap.prototype._hash = null;
com.pblabs.util.ds.maps.StringMap.prototype.clear = function() {
	com.pblabs.util.ds.maps.KeyListMap.prototype.clear.apply(this,[]);
	this._hash = new Hash();
}
com.pblabs.util.ds.maps.StringMap.prototype.exists = function(key) {
	return this._hash.exists(com.pblabs.util.StringUtil.getStringKey(key));
}
com.pblabs.util.ds.maps.StringMap.prototype.get = function(key) {
	return this._hash.get(com.pblabs.util.StringUtil.getStringKey(key));
}
com.pblabs.util.ds.maps.StringMap.prototype.getHash = function(key) {
	return com.pblabs.util.StringUtil.getStringKey(key);
}
com.pblabs.util.ds.maps.StringMap.prototype.iterator = function() {
	return this._hash.iterator();
}
com.pblabs.util.ds.maps.StringMap.prototype.remove = function(key) {
	var hash = com.pblabs.util.StringUtil.getStringKey(key);
	if(!this._hash.exists(hash)) {
		return false;
	}
	com.pblabs.util.ds.maps.KeyListMap.prototype.remove.apply(this,[key]);
	var oldVal = this._hash.get(hash);
	this._hash.remove(hash);
	return oldVal != null;
}
com.pblabs.util.ds.maps.StringMap.prototype.set = function(key,value) {
	var hash = com.pblabs.util.StringUtil.getStringKey(key);
	if(!this._hash.exists(hash)) {
		com.pblabs.util.ds.maps.KeyListMap.prototype.set.apply(this,[key,value]);
	}
	this._hash.set(hash,value);
}
com.pblabs.util.ds.maps.StringMap.prototype.__class__ = com.pblabs.util.ds.maps.StringMap;
com.pblabs.util.ds.maps.StringMap.__interfaces__ = [com.pblabs.util.ds.Map];
com.pblabs.util.Enumerable = function(name) { if( name === $_ ) return; {
	com.pblabs.util.Preconditions.checkNotNull(name);
	this._name = name;
	var cls = Type.getClass(this);
	if(!com.pblabs.util.Enumerable._enums.exists(cls)) {
		com.pblabs.util.Enumerable._enums.set(cls,new com.pblabs.util.ds.maps.StringMap());
	}
	var map = com.pblabs.util.Enumerable._enums.get(cls);
	com.pblabs.util.Preconditions.checkArgument(!map.exists(name),"Enum already exists! " + this);
	map.set(name,this);
	this._hashCode = com.pblabs.util.Enumerable.getOrdinal(this);
}}
com.pblabs.util.Enumerable.__name__ = ["com","pblabs","util","Enumerable"];
com.pblabs.util.Enumerable.values = function(cls) {
	return com.pblabs.util.Enumerable._enums.get(cls);
}
com.pblabs.util.Enumerable.names = function(cls) {
	var enums = com.pblabs.util.Enumerable._enums.get(cls);
	if(enums == null) {
		return null;
	}
	return enums.keys();
}
com.pblabs.util.Enumerable.valueOf = function(cls,name) {
	return com.pblabs.util.Enumerable._enums.get(cls).get(name);
}
com.pblabs.util.Enumerable.serializedValueOf = function(clsName,name) {
	return com.pblabs.util.Enumerable.valueOf(Type.resolveClass(clsName),name);
}
com.pblabs.util.Enumerable.valueOfOrdinal = function(cls,ordinal) {
	com.pblabs.util.Preconditions.checkNotNull(cls);
	com.pblabs.util.Preconditions.checkNotNull(com.pblabs.util.Enumerable._enums.get(cls));
	var arr = Lambda.array(com.pblabs.util.Enumerable._enums.get(cls));
	com.pblabs.util.Preconditions.checkPositionIndex(ordinal,arr.length);
	return arr[ordinal];
}
com.pblabs.util.Enumerable.getOrdinal = function(e) {
	var cls = Type.getClass(e);
	com.pblabs.util.Preconditions.checkNotNull(cls);
	var arr = Lambda.array(com.pblabs.util.Enumerable._enums.get(cls));
	return Lambda.indexOf(arr,e);
}
com.pblabs.util.Enumerable.getEnumName = function(e) {
	return e._name;
}
com.pblabs.util.Enumerable.prototype._hashCode = null;
com.pblabs.util.Enumerable.prototype._name = null;
com.pblabs.util.Enumerable.prototype.compareTo = function(other) {
	com.pblabs.util.Preconditions.checkArgument(Std["is"](other,Type.getClass(this)),"Not same Enumerable type");
	return com.pblabs.util.Comparators.compareInts(com.pblabs.util.Enumerable.getOrdinal(this),com.pblabs.util.Enumerable.getOrdinal((function($this) {
		var $r;
		var $t = other;
		if(Std["is"]($t,com.pblabs.util.Enumerable)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))));
}
com.pblabs.util.Enumerable.prototype.equals = function(other) {
	return other == this;
}
com.pblabs.util.Enumerable.prototype.get_name = function() {
	return this._name;
}
com.pblabs.util.Enumerable.prototype.get_ordinal = function() {
	return com.pblabs.util.Enumerable.getOrdinal(this);
}
com.pblabs.util.Enumerable.prototype.hashCode = function() {
	return this._hashCode;
}
com.pblabs.util.Enumerable.prototype.name = null;
com.pblabs.util.Enumerable.prototype.ordinal = null;
com.pblabs.util.Enumerable.prototype.toString = function() {
	return this._name;
}
com.pblabs.util.Enumerable.prototype.__class__ = com.pblabs.util.Enumerable;
com.pblabs.util.Enumerable.__interfaces__ = [com.pblabs.util.Comparable,com.pblabs.util.Equalable,com.pblabs.util.ds.Hashable];
com.pblabs.engine.core.SetManager = function(p) { if( p === $_ ) return; {
	this._sets = com.pblabs.util.ds.multimaps.SetMultiMap.create(String);
	this._objects = com.pblabs.util.ds.multimaps.SetMultiMap.create(com.pblabs.engine.core.PBObject);
}}
com.pblabs.engine.core.SetManager.__name__ = ["com","pblabs","engine","core","SetManager"];
com.pblabs.engine.core.SetManager.addToSet = function(obj,set) {
	com.pblabs.engine.core.SetManager.getSetManager(obj.get_context()).addObjectToSet(obj,set);
}
com.pblabs.engine.core.SetManager.getSets = function(obj) {
	var sets = com.pblabs.engine.core.SetManager.getSetManager(obj.get_context()).getObjectSets(obj);
	return (sets == null?com.pblabs.engine.core.SetManager.EMPTY_STRING_ARRAY:sets);
}
com.pblabs.engine.core.SetManager.removeFromAllSets = function(obj) {
	com.pblabs.engine.core.SetManager.getSetManager(obj.get_context()).removeObjectFromAll(obj);
}
com.pblabs.engine.core.SetManager.getSetManager = function(context) {
	com.pblabs.util.Preconditions.checkNotNull(context,"Null context");
	var sm = context.getManager(com.pblabs.engine.core.SetManager);
	com.pblabs.util.Preconditions.checkNotNull(sm,"Cannot find the context SetManager");
	return sm;
}
com.pblabs.engine.core.SetManager.prototype._objects = null;
com.pblabs.engine.core.SetManager.prototype._sets = null;
com.pblabs.engine.core.SetManager.prototype.addObjectToSet = function(obj,set) {
	com.pblabs.util.Preconditions.checkNotNull(obj);
	com.pblabs.util.Preconditions.checkNotNull(set);
	if(this._sets.existsEntry(set,obj)) {
		return;
	}
	this._sets.set(set,obj);
	this._objects.set(obj,set);
}
com.pblabs.engine.core.SetManager.prototype.destroySet = function(set) {
	{ var $it0 = this.removeSet(set).iterator();
	while( $it0.hasNext() ) { var obj = $it0.next();
	{
		obj.destroy();
	}
	}}
}
com.pblabs.engine.core.SetManager.prototype.getObjectSets = function(obj) {
	return this._objects.get(obj);
}
com.pblabs.engine.core.SetManager.prototype.getObjectsInSet = function(set) {
	var it = this._sets.get(set);
	return (it == null?com.pblabs.engine.core.SetManager.EMPTY_OBJECT_ARRAY:it);
}
com.pblabs.engine.core.SetManager.prototype.injectSets = function(obj,cls) {
	cls = (cls == null?com.pblabs.util.ReflectUtil.getClass(obj):cls);
	var m = haxe.rtti.Meta.getType(cls);
	if(m != null) {
		{
			var _g = 0, _g1 = Reflect.fields(m);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				if(field == "sets") {
					{
						var _g2 = 0, _g3 = (function($this) {
							var $r;
							var $t = Reflect.field(m,field);
							if(Std["is"]($t,Array)) $t;
							else throw "Class cast error";
							$r = $t;
							return $r;
						}(this));
						while(_g2 < _g3.length) {
							var s = _g3[_g2];
							++_g2;
							this.addObjectToSet(obj.get_owner(),s);
						}
					}
				}
			}
		}
	}
}
com.pblabs.engine.core.SetManager.prototype.isObjectInSet = function(obj,set) {
	return this._sets.existsEntry(set,obj);
}
com.pblabs.engine.core.SetManager.prototype.iterator = function() {
	return this._sets.keys();
}
com.pblabs.engine.core.SetManager.prototype.removeObjectFromAll = function(obj) {
	var objectSets = this._objects.get(obj);
	if(objectSets != null) {
		{ var $it0 = objectSets.iterator();
		while( $it0.hasNext() ) { var s = $it0.next();
		{
			this._sets.removeEntry(s,obj);
		}
		}}
	}
	this._objects.remove(obj);
}
com.pblabs.engine.core.SetManager.prototype.removeObjectFromSet = function(obj,set) {
	this._sets.removeEntry(set,obj);
	this._objects.removeEntry(obj,set);
}
com.pblabs.engine.core.SetManager.prototype.removeSet = function(set) {
	var objs = Lambda.array(this._sets.get(set));
	{
		var _g = 0;
		while(_g < objs.length) {
			var o = objs[_g];
			++_g;
			this._objects.removeEntry(o,set);
		}
	}
	this._sets.remove(set);
	return objs;
}
com.pblabs.engine.core.SetManager.prototype.shutdown = function() {
	this._sets.clear();
	this._objects.clear();
	this._sets = null;
	this._objects = null;
}
com.pblabs.engine.core.SetManager.prototype.startup = function() {
	null;
}
com.pblabs.engine.core.SetManager.prototype.toString = function() {
	var s = "Sets {";
	{ var $it0 = this.iterator();
	while( $it0.hasNext() ) { var set = $it0.next();
	{
		s += (("\n  " + set) + ": ") + Lambda.count(this._sets.get(set));
	}
	}}
	s += "\n}, objects: " + Lambda.count(com.pblabs.util.IterUtil.toArray(this._objects.keys()));
	return s;
}
com.pblabs.engine.core.SetManager.prototype.__class__ = com.pblabs.engine.core.SetManager;
com.pblabs.engine.core.SetManager.__interfaces__ = [com.pblabs.engine.core.IPBManager];
hsl.haxe.Bond = function(p) { if( p === $_ ) return; {
	this.halted = false;
}}
hsl.haxe.Bond.__name__ = ["hsl","haxe","Bond"];
hsl.haxe.Bond.prototype.destroy = function() {
	null;
}
hsl.haxe.Bond.prototype.halt = function() {
	this.halted = true;
}
hsl.haxe.Bond.prototype.halted = null;
hsl.haxe.Bond.prototype.resume = function() {
	this.halted = false;
}
hsl.haxe.Bond.prototype.__class__ = hsl.haxe.Bond;
if(!hsl.haxe._DirectSignaler) hsl.haxe._DirectSignaler = {}
hsl.haxe._DirectSignaler.LinkedBond = function(p) { if( p === $_ ) return; {
	hsl.haxe.Bond.apply(this,[]);
	this.destroyed = false;
}}
hsl.haxe._DirectSignaler.LinkedBond.__name__ = ["hsl","haxe","_DirectSignaler","LinkedBond"];
hsl.haxe._DirectSignaler.LinkedBond.__super__ = hsl.haxe.Bond;
for(var k in hsl.haxe.Bond.prototype ) hsl.haxe._DirectSignaler.LinkedBond.prototype[k] = hsl.haxe.Bond.prototype[k];
hsl.haxe._DirectSignaler.LinkedBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	return propagationStatus;
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.destroy = function() {
	if(false == this.destroyed) {
		this.previous.next = this.next;
		this.next.previous = this.previous;
		this.destroyed = true;
	}
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.destroyed = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.determineEquals = function(value) {
	return false;
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.next = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.previous = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.unlink = function() {
	if(false == this.destroyed) {
		this.previous.next = this.next;
		this.next.previous = this.previous;
		this.destroyed = true;
	}
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.__class__ = hsl.haxe._DirectSignaler.LinkedBond;
hsl.haxe._DirectSignaler.SentinelBond = function(p) { if( p === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.apply(this,[]);
	this.next = this.previous = this;
}}
hsl.haxe._DirectSignaler.SentinelBond.__name__ = ["hsl","haxe","_DirectSignaler","SentinelBond"];
hsl.haxe._DirectSignaler.SentinelBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.SentinelBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.SentinelBond.prototype.add = function(value) {
	value.next = this;
	value.previous = this.previous;
	return this.previous = this.previous.next = value;
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	var node = this.next;
	while(node != this && 1 != propagationStatus) {
		propagationStatus = node.callListener(data,currentTarget,origin,propagationStatus);
		node = node.next;
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.getIsConnected = function() {
	return this.next != this;
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.isConnected = null;
hsl.haxe._DirectSignaler.SentinelBond.prototype.remove = function(value) {
	var node = this.next;
	while(node != this) {
		if(node.determineEquals(value)) {
			if(false == node.destroyed) {
				node.previous.next = node.next;
				node.next.previous = node.previous;
				node.destroyed = true;
			}
			break;
		}
		node = node.next;
	}
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.removeAll = function() {
	while(this.next != null && this.next != this) {
		this.next.destroy();
	}
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.__class__ = hsl.haxe._DirectSignaler.SentinelBond;
hsl.haxe._DirectSignaler.RegularBond = function(listener,context) { if( listener === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.apply(this,[]);
	this.context = context;
	this.listener = listener;
}}
hsl.haxe._DirectSignaler.RegularBond.__name__ = ["hsl","haxe","_DirectSignaler","RegularBond"];
hsl.haxe._DirectSignaler.RegularBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.RegularBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.RegularBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	if(false == this.halted) {
		if(this.context != null) {
			this.listener.call(this.context,data);
		}
		else {
			this.listener(data);
		}
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.RegularBond.prototype.context = null;
hsl.haxe._DirectSignaler.RegularBond.prototype.destroy = function() {
	hsl.haxe._DirectSignaler.LinkedBond.prototype.destroy.apply(this,[]);
	this.context = null;
}
hsl.haxe._DirectSignaler.RegularBond.prototype.determineEquals = function(value) {
	return Std["is"](value,hsl.haxe._DirectSignaler.RegularBond) && Reflect.compareMethods((value).listener,this.listener);
}
hsl.haxe._DirectSignaler.RegularBond.prototype.listener = null;
hsl.haxe._DirectSignaler.RegularBond.prototype.__class__ = hsl.haxe._DirectSignaler.RegularBond;
hsl.haxe._DirectSignaler.NiladicBond = function(listener) { if( listener === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.apply(this,[]);
	this.listener = listener;
}}
hsl.haxe._DirectSignaler.NiladicBond.__name__ = ["hsl","haxe","_DirectSignaler","NiladicBond"];
hsl.haxe._DirectSignaler.NiladicBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.NiladicBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.NiladicBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	if(false == this.halted) {
		this.listener();
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.NiladicBond.prototype.determineEquals = function(value) {
	return Std["is"](value,hsl.haxe._DirectSignaler.NiladicBond) && Reflect.compareMethods((value).listener,this.listener);
}
hsl.haxe._DirectSignaler.NiladicBond.prototype.listener = null;
hsl.haxe._DirectSignaler.NiladicBond.prototype.__class__ = hsl.haxe._DirectSignaler.NiladicBond;
hsl.haxe._DirectSignaler.AdvancedBond = function(listener) { if( listener === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.apply(this,[]);
	this.listener = listener;
}}
hsl.haxe._DirectSignaler.AdvancedBond.__name__ = ["hsl","haxe","_DirectSignaler","AdvancedBond"];
hsl.haxe._DirectSignaler.AdvancedBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.AdvancedBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.AdvancedBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	if(this.halted == false) {
		var signal = new hsl.haxe.Signal(data,this,currentTarget,origin);
		this.listener(signal);
		if(signal.immediatePropagationStopped) {
			return 1;
		}
		else if(signal.propagationStopped) {
			return 2;
		}
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.AdvancedBond.prototype.determineEquals = function(value) {
	return Std["is"](value,hsl.haxe._DirectSignaler.AdvancedBond) && Reflect.compareMethods((value).listener,this.listener);
}
hsl.haxe._DirectSignaler.AdvancedBond.prototype.listener = null;
hsl.haxe._DirectSignaler.AdvancedBond.prototype.__class__ = hsl.haxe._DirectSignaler.AdvancedBond;
hsl.haxe.PropagationStatus = function() { }
hsl.haxe.PropagationStatus.__name__ = ["hsl","haxe","PropagationStatus"];
hsl.haxe.PropagationStatus.prototype.__class__ = hsl.haxe.PropagationStatus;
com.pblabs.components.input.PanManager = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.EntityComponent.apply(this,[]);
	this.isEasing = true;
	this._isPanning = false;
	this.isEasing = true;
	this._panVectors = [];
	this.minimumDistanceToEase = 40;
	this.frameWindowSize = 8;
	this.timeToHalt = 1.0;
	this._pauseProcessManagerOnPan = true;
	this._framesWithoutMovement = 0;
}}
com.pblabs.components.input.PanManager.__name__ = ["com","pblabs","components","input","PanManager"];
com.pblabs.components.input.PanManager.__super__ = com.pblabs.engine.core.EntityComponent;
for(var k in com.pblabs.engine.core.EntityComponent.prototype ) com.pblabs.components.input.PanManager.prototype[k] = com.pblabs.engine.core.EntityComponent.prototype[k];
com.pblabs.components.input.PanManager.prototype._framesWithoutMovement = null;
com.pblabs.components.input.PanManager.prototype._isGesturing = null;
com.pblabs.components.input.PanManager.prototype._isPanning = null;
com.pblabs.components.input.PanManager.prototype._lastMouseMove = null;
com.pblabs.components.input.PanManager.prototype._panVectors = null;
com.pblabs.components.input.PanManager.prototype._pauseProcessManagerOnPan = null;
com.pblabs.components.input.PanManager.prototype._scene = null;
com.pblabs.components.input.PanManager.prototype._timer = null;
com.pblabs.components.input.PanManager.prototype._translatable = null;
com.pblabs.components.input.PanManager.prototype.beginPanning = function() {
	com.pblabs.components.tasks.TaskUtil.removeAllTasks(this.get_owner());
	this.set_isPanning(true);
	this._panVectors = [this._lastMouseMove.clone()];
	this._framesWithoutMovement = 0;
}
com.pblabs.components.input.PanManager.prototype.endPanning = function() {
	this.set_isPanning(false);
	this._scene = null;
	this._translatable = null;
}
com.pblabs.components.input.PanManager.prototype.frameWindowSize = null;
com.pblabs.components.input.PanManager.prototype.get_isPanning = function() {
	return this._isPanning;
}
com.pblabs.components.input.PanManager.prototype.isEasing = null;
com.pblabs.components.input.PanManager.prototype.isPanning = null;
com.pblabs.components.input.PanManager.prototype.minimumDistanceToEase = null;
com.pblabs.components.input.PanManager.prototype.notMoving = function() {
	this._framesWithoutMovement++;
}
com.pblabs.components.input.PanManager.prototype.onAdd = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onAdd.apply(this,[]);
	var input = this.get_context().getManager(com.pblabs.components.input.InputManager);
	input.deviceMove.bind($closure(this,"onDeviceMove"));
	input.deviceUp.bind($closure(this,"onDeviceUp"));
}
com.pblabs.components.input.PanManager.prototype.onDeviceMove = function(e) {
	this._lastMouseMove = e.inputLocation;
	if(this._isPanning) {
		this._framesWithoutMovement = Std["int"](Math.max(this._framesWithoutMovement - 1,0));
		if(this._translatable == this._scene) {
			var diff = e.inputLocation.subtract(this._panVectors[this._panVectors.length - 1]);
			diff.scaleLocal(1 / this._scene.get_zoom());
			diff.rotateLocal(-this._scene.get_rotation());
			{
				var _g = this._translatable;
				_g.set_x(_g.get_x() + diff.x);
			}
			{
				var _g = this._translatable;
				_g.set_y(_g.get_y() + diff.y);
			}
		}
		else {
			var world = com.pblabs.components.scene.SceneUtil.translateScreenToWorld(this._scene,e.inputLocation);
			this._translatable.set_x(world.x);
			this._translatable.set_y(world.y);
		}
		this._panVectors.push(e.inputLocation.clone());
		if(Std["is"](this._scene,com.pblabs.engine.time.IAnimatedObject)) {
			(function($this) {
				var $r;
				var $t = $this._scene;
				if(Std["is"]($t,com.pblabs.engine.time.IAnimatedObject)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)).onFrame(0);
		}
	}
}
com.pblabs.components.input.PanManager.prototype.onDeviceUp = function(e) {
	if(this._isPanning) {
		this.set_isPanning(false);
		if(this.isEasing && this._framesWithoutMovement < 3) {
			var lastVectors = (this._panVectors.length > this.frameWindowSize?this._panVectors.slice(this._panVectors.length - this.frameWindowSize):this._panVectors);
			var mostRecent = lastVectors[lastVectors.length - 1];
			var diff = com.pblabs.geom.VectorTools.distance(lastVectors[lastVectors.length - 1],lastVectors[0]);
			var oldest = lastVectors[0];
			var meanVector = new com.pblabs.geom.Vector2();
			if(diff > this.minimumDistanceToEase) {
				var angles = [];
				{
					var _g1 = 1, _g = lastVectors.length;
					while(_g1 < _g) {
						var i = _g1++;
						var unit = com.pblabs.geom.VectorTools.angleToVector2(com.pblabs.geom.VectorTools.angleTo(lastVectors[i - 1],lastVectors[i]));
						angles.push(com.pblabs.util.NumberUtil.toFixed(unit.get_angle(),3));
						meanVector.x += unit.x;
						meanVector.y += unit.y;
					}
				}
				meanVector.x /= this._panVectors.length;
				meanVector.y /= this._panVectors.length;
				var toAdd = com.pblabs.geom.VectorTools.angleToVector2(meanVector.get_angle(),diff / 3);
				toAdd.scaleLocal(1 / this._scene.get_zoom());
				toAdd.rotateLocal(-this._scene.get_rotation());
				var currentScene = new com.pblabs.geom.Vector2(this._translatable.get_x(),this._translatable.get_y());
				var finalStop = currentScene.add(toAdd);
				var comp = this._translatable;
				var easeX = com.pblabs.components.tasks.AnimatePropertyTask.CreateEaseOut(com.pblabs.engine.util.PBUtil.entityProp(comp,"x"),finalStop.x,this.timeToHalt);
				var easeY = com.pblabs.components.tasks.AnimatePropertyTask.CreateEaseOut(com.pblabs.engine.util.PBUtil.entityProp(comp,"y"),finalStop.y,this.timeToHalt);
				com.pblabs.components.tasks.TaskUtil.addTask(this.get_owner(),easeX);
				com.pblabs.components.tasks.TaskUtil.addTask(this.get_owner(),easeY);
			}
		}
	}
}
com.pblabs.components.input.PanManager.prototype.onRemove = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onRemove.apply(this,[]);
	this.endPanning();
	var input = this.get_context().getManager(com.pblabs.components.input.InputManager);
	input.deviceMove.unbind($closure(this,"onDeviceMove"));
	input.deviceUp.unbind($closure(this,"onDeviceUp"));
}
com.pblabs.components.input.PanManager.prototype.panComponent = function(c,easing,pauseScene) {
	if(pauseScene == null) pauseScene = false;
	if(easing == null) easing = true;
	this.endPanning();
	this.isEasing = easing;
	this._pauseProcessManagerOnPan = pauseScene;
	com.pblabs.util.Preconditions.checkNotNull(c);
	this._translatable = c;
	this._scene = c.parent.parent;
	this.beginPanning();
}
com.pblabs.components.input.PanManager.prototype.panScene = function(scene,easing,pauseScene) {
	if(pauseScene == null) pauseScene = true;
	if(easing == null) easing = true;
	this.endPanning();
	this.isEasing = easing;
	this._pauseProcessManagerOnPan = pauseScene;
	com.pblabs.util.Preconditions.checkNotNull(scene);
	this._scene = scene;
	this._translatable = scene;
	this.beginPanning();
}
com.pblabs.components.input.PanManager.prototype.set_isPanning = function(val) {
	if(this._isPanning == val) {
		return val;
	}
	this._isPanning = val;
	if(this._isPanning) {
		this.get_context().getManager(com.pblabs.engine.time.IProcessManager).set_paused(this._pauseProcessManagerOnPan && this._translatable == this._scene);
	}
	else {
		this.get_context().getManager(com.pblabs.engine.time.IProcessManager).set_paused(false);
	}
	if(this._isPanning) {
		this._timer = new haxe.Timer(Std["int"](1000 / 30));
		this._timer.run = $closure(this,"notMoving");
	}
	else {
		if(this._timer != null) {
			this._timer.stop();
		}
		this._timer = null;
	}
	return val;
}
com.pblabs.components.input.PanManager.prototype.shutdown = function() {
	if(this.get_isRegistered()) {
		this.get_owner().destroy();
	}
}
com.pblabs.components.input.PanManager.prototype.startup = function() {
	var e = this.get_context().allocate(com.pblabs.engine.core.IEntity);
	e.initialize(com.pblabs.util.ReflectUtil.tinyClassName(this));
	e.set_deferring(true);
	e.addComponent(this);
	e.addComponent(this.get_context().allocate(com.pblabs.components.tasks.TaskComponent));
	e.set_deferring(false);
}
com.pblabs.components.input.PanManager.prototype.timeToHalt = null;
com.pblabs.components.input.PanManager.prototype.__class__ = com.pblabs.components.input.PanManager;
com.pblabs.components.input.PanManager.__interfaces__ = [com.pblabs.engine.core.IPBManager];
com.pblabs.components.input.MouseInputComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.components.manager.NodeComponent.apply(this,[]);
	this.xProperty = new com.pblabs.engine.core.PropertyReference("@LocationComponent.x");
	this.yProperty = new com.pblabs.engine.core.PropertyReference("@LocationComponent.y");
	this.angleProperty = new com.pblabs.engine.core.PropertyReference("@AngleComponent.angle");
	this.scaleProperty = new com.pblabs.engine.core.PropertyReference("@ScaleComponent.scale");
	this.isScalable = this.isRotatable = this.isTranslatable = false;
}}
com.pblabs.components.input.MouseInputComponent.__name__ = ["com","pblabs","components","input","MouseInputComponent"];
com.pblabs.components.input.MouseInputComponent.__super__ = com.pblabs.components.manager.NodeComponent;
for(var k in com.pblabs.components.manager.NodeComponent.prototype ) com.pblabs.components.input.MouseInputComponent.prototype[k] = com.pblabs.components.manager.NodeComponent.prototype[k];
com.pblabs.components.input.MouseInputComponent.compare = function(a,b) {
	var scenea = a.get_owner().lookupComponent(com.pblabs.components.scene.BaseScene2DComponent);
	var sceneb = b.get_owner().lookupComponent(com.pblabs.components.scene.BaseScene2DComponent);
	var scene = scenea.parent.parent;
	return com.pblabs.util.Comparators.compareInts(scene.getLayerIndex(sceneb.parent),scene.getLayerIndex(scenea.parent));
}
com.pblabs.components.input.MouseInputComponent.prototype._bounds = null;
com.pblabs.components.input.MouseInputComponent.prototype.angle = null;
com.pblabs.components.input.MouseInputComponent.prototype.angleProperty = null;
com.pblabs.components.input.MouseInputComponent.prototype.bounds = null;
com.pblabs.components.input.MouseInputComponent.prototype.boundsProperty = null;
com.pblabs.components.input.MouseInputComponent.prototype.compareTo = function(a) {
	return com.pblabs.components.input.MouseInputComponent.compare(this,a);
}
com.pblabs.components.input.MouseInputComponent.prototype.getPoint = function() {
	return new com.pblabs.geom.Vector2(this.get_x(),this.get_y());
}
com.pblabs.components.input.MouseInputComponent.prototype.get_angle = function() {
	return this.get_owner().getProperty(this.angleProperty);
}
com.pblabs.components.input.MouseInputComponent.prototype.get_bounds = function() {
	return this._bounds;
}
com.pblabs.components.input.MouseInputComponent.prototype.get_offset = function() {
	if(this.offsetProperty != null) {
		return this.get_owner().getProperty(this.offsetProperty);
	}
	else {
		return null;
	}
}
com.pblabs.components.input.MouseInputComponent.prototype.get_scale = function() {
	return this.get_owner().getProperty(this.scaleProperty);
}
com.pblabs.components.input.MouseInputComponent.prototype.get_x = function() {
	return this.get_owner().getProperty(this.xProperty);
}
com.pblabs.components.input.MouseInputComponent.prototype.get_y = function() {
	return this.get_owner().getProperty(this.yProperty);
}
com.pblabs.components.input.MouseInputComponent.prototype.isRotatable = null;
com.pblabs.components.input.MouseInputComponent.prototype.isScalable = null;
com.pblabs.components.input.MouseInputComponent.prototype.isTranslatable = null;
com.pblabs.components.input.MouseInputComponent.prototype.offset = null;
com.pblabs.components.input.MouseInputComponent.prototype.offsetProperty = null;
com.pblabs.components.input.MouseInputComponent.prototype.onClick = function() {
	null;
}
com.pblabs.components.input.MouseInputComponent.prototype.onDeviceDown = function() {
	null;
}
com.pblabs.components.input.MouseInputComponent.prototype.onDeviceHeldDown = function() {
	null;
}
com.pblabs.components.input.MouseInputComponent.prototype.onRemove = function() {
	com.pblabs.components.manager.NodeComponent.prototype.onRemove.apply(this,[]);
	this.get_context().getManager(com.pblabs.components.input.InputManager).unregisterComponent(this);
	this.xProperty = null;
	this.yProperty = null;
	this.angleProperty = null;
	this.scaleProperty = null;
	this.boundsProperty = null;
	this._bounds = null;
	this.isScalable = this.isRotatable = this.isTranslatable = false;
}
com.pblabs.components.input.MouseInputComponent.prototype.onReset = function() {
	com.pblabs.components.manager.NodeComponent.prototype.onReset.apply(this,[]);
	if(this.boundsProperty != null) {
		this._bounds = this.get_owner().getProperty(this.boundsProperty);
	}
	this._bounds = (this._bounds == null?this.get_owner().lookupComponentByType(com.pblabs.components.input.IInteractiveComponent):this._bounds);
	var input = this.get_context().getManager(com.pblabs.components.input.InputManager);
	input.unregisterComponent(this);
	input.registerComponent(this);
}
com.pblabs.components.input.MouseInputComponent.prototype.scale = null;
com.pblabs.components.input.MouseInputComponent.prototype.scaleProperty = null;
com.pblabs.components.input.MouseInputComponent.prototype.set_angle = function(val) {
	this.get_owner().setProperty(this.angleProperty,val);
	return val;
}
com.pblabs.components.input.MouseInputComponent.prototype.set_bounds = function(bounds) {
	this._bounds = bounds;
	return bounds;
}
com.pblabs.components.input.MouseInputComponent.prototype.set_offset = function(val) {
	this.get_owner().setProperty(this.offsetProperty,val);
	return val;
}
com.pblabs.components.input.MouseInputComponent.prototype.set_scale = function(val) {
	this.get_owner().setProperty(this.scaleProperty,val);
	return val;
}
com.pblabs.components.input.MouseInputComponent.prototype.set_x = function(val) {
	this.get_owner().setProperty(this.xProperty,val);
	return val;
}
com.pblabs.components.input.MouseInputComponent.prototype.set_y = function(val) {
	this.get_owner().setProperty(this.yProperty,val);
	return val;
}
com.pblabs.components.input.MouseInputComponent.prototype.x = null;
com.pblabs.components.input.MouseInputComponent.prototype.xProperty = null;
com.pblabs.components.input.MouseInputComponent.prototype.y = null;
com.pblabs.components.input.MouseInputComponent.prototype.yProperty = null;
com.pblabs.components.input.MouseInputComponent.prototype.__class__ = com.pblabs.components.input.MouseInputComponent;
com.pblabs.components.input.MouseInputComponent.__interfaces__ = [com.pblabs.util.Comparable];
com.pblabs.engine.time.ITickedObject = function() { }
com.pblabs.engine.time.ITickedObject.__name__ = ["com","pblabs","engine","time","ITickedObject"];
com.pblabs.engine.time.ITickedObject.prototype.onTick = null;
com.pblabs.engine.time.ITickedObject.prototype.__class__ = com.pblabs.engine.time.ITickedObject;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw ("Constructor " + constr) + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw ("Constructor " + constr) + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
com.pblabs.components.tasks.TaskComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.EntityComponent.apply(this,[]);
	this._anonymousTasks = new com.pblabs.components.tasks.ParallelTask();
	this._namedTasks = new haxe.FastList();
	this._taskNames = new haxe.FastList();
	this._updatingTasks = false;
	this._tasksFinished = true;
}}
com.pblabs.components.tasks.TaskComponent.__name__ = ["com","pblabs","components","tasks","TaskComponent"];
com.pblabs.components.tasks.TaskComponent.__super__ = com.pblabs.engine.core.EntityComponent;
for(var k in com.pblabs.engine.core.EntityComponent.prototype ) com.pblabs.components.tasks.TaskComponent.prototype[k] = com.pblabs.engine.core.EntityComponent.prototype[k];
com.pblabs.components.tasks.TaskComponent.getFrom = function(e) {
	return (function($this) {
		var $r;
		var $t = e.lookupComponentByName(com.pblabs.components.tasks.TaskComponent.NAME);
		if(Std["is"]($t,com.pblabs.components.tasks.TaskComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
}
com.pblabs.components.tasks.TaskComponent.prototype._addedToProcessManager = null;
com.pblabs.components.tasks.TaskComponent.prototype._anonymousTasks = null;
com.pblabs.components.tasks.TaskComponent.prototype._namedTasks = null;
com.pblabs.components.tasks.TaskComponent.prototype._taskNames = null;
com.pblabs.components.tasks.TaskComponent.prototype._tasksFinished = null;
com.pblabs.components.tasks.TaskComponent.prototype._updatingTasks = null;
com.pblabs.components.tasks.TaskComponent.prototype.addNamedTask = function(name,task,removeExistingTasks) {
	if(removeExistingTasks == null) removeExistingTasks = false;
	if(null == task) {
		throw "task must be non-null";
	}
	if(null == name || name.length == 0) {
		throw "name must be at least 1 character long";
	}
	var namedTaskContainer = this.getNamedTask(name);
	if(null == namedTaskContainer) {
		namedTaskContainer = new com.pblabs.components.tasks.ParallelTask();
		this._namedTasks.add(namedTaskContainer);
		this._taskNames.add(name);
	}
	else if(removeExistingTasks) {
		namedTaskContainer.removeAllTasks();
	}
	namedTaskContainer.addTask(task);
	this._tasksFinished = false;
	this.updatingCheck();
}
com.pblabs.components.tasks.TaskComponent.prototype.addTask = function(task) {
	com.pblabs.util.Preconditions.checkNotNull(task,"task must be non-null");
	this._anonymousTasks.addTask(task);
	this._tasksFinished = false;
	this.updatingCheck();
}
com.pblabs.components.tasks.TaskComponent.prototype.getNamedTask = function(name) {
	var nameIter = this._taskNames.iterator();
	var taskIter = this._namedTasks.iterator();
	while(nameIter.hasNext()) {
		if(nameIter.next() == name) {
			return taskIter.next();
		}
		taskIter.next();
	}
	return null;
}
com.pblabs.components.tasks.TaskComponent.prototype.hasTasks = function() {
	if(this._anonymousTasks.hasTasks()) {
		return true;
	}
	else {
		{ var $it0 = this._namedTasks.iterator();
		while( $it0.hasNext() ) { var namedTaskContainer = $it0.next();
		{
			if(namedTaskContainer.hasTasks()) {
				return true;
			}
		}
		}}
	}
	return false;
}
com.pblabs.components.tasks.TaskComponent.prototype.hasTasksNamed = function(name) {
	var namedTaskContainer = this.getNamedTask(name);
	return ((null == namedTaskContainer?false:namedTaskContainer.hasTasks()));
}
com.pblabs.components.tasks.TaskComponent.prototype.onAdd = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onAdd.apply(this,[]);
	this._addedToProcessManager = true;
}
com.pblabs.components.tasks.TaskComponent.prototype.onRemove = function() {
	this.removeAllTasks();
	com.pblabs.engine.core.EntityComponent.prototype.onRemove.apply(this,[]);
}
com.pblabs.components.tasks.TaskComponent.prototype.onTick = function(dt) {
	this._updatingTasks = true;
	this._tasksFinished = this._anonymousTasks.update(dt,this.get_owner());
	{ var $it0 = this._namedTasks.iterator();
	while( $it0.hasNext() ) { var namedTask = $it0.next();
	{
		this._tasksFinished = namedTask.update(dt,this.get_owner()) && this._tasksFinished;
	}
	}}
	this._updatingTasks = false;
	if(!this._tasksFinished) {
		this.updatingCheck();
	}
}
com.pblabs.components.tasks.TaskComponent.prototype.removeAllTasks = function() {
	if(this._updatingTasks) {
		{ var $it0 = this._namedTasks.iterator();
		while( $it0.hasNext() ) { var taskContainer = $it0.next();
		{
			taskContainer.removeAllTasks();
		}
		}}
	}
	this._anonymousTasks.removeAllTasks();
	{ var $it1 = this._namedTasks.iterator();
	while( $it1.hasNext() ) { var namedTask = $it1.next();
	{
		this._namedTasks.remove(namedTask);
	}
	}}
	{ var $it2 = this._taskNames.iterator();
	while( $it2.hasNext() ) { var name = $it2.next();
	{
		this._taskNames.remove(name);
	}
	}}
}
com.pblabs.components.tasks.TaskComponent.prototype.removeNamedTasks = function(name) {
	if(null == name || name.length == 0) {
		throw "name must be at least 1 character long";
	}
	var taskContainer = this.getNamedTask(name);
	this._namedTasks.remove(taskContainer);
	this._taskNames.remove(name);
	if(null != taskContainer && this._updatingTasks) {
		taskContainer.removeAllTasks();
	}
}
com.pblabs.components.tasks.TaskComponent.prototype.updatingCheck = function() {
	if(this.get_owner() == null) {
		return;
	}
	if(!this._tasksFinished && !this._addedToProcessManager) {
		this.get_context().getManager(com.pblabs.engine.time.IProcessManager).addTickedObject(this);
		this._addedToProcessManager = true;
	}
	else if(this._tasksFinished && this._addedToProcessManager) {
		this.get_context().getManager(com.pblabs.engine.time.IProcessManager).removeTickedObject(this);
		this._addedToProcessManager = false;
	}
}
com.pblabs.components.tasks.TaskComponent.prototype.__class__ = com.pblabs.components.tasks.TaskComponent;
com.pblabs.components.tasks.TaskComponent.__interfaces__ = [com.pblabs.engine.time.ITickedObject];
com.pblabs.engine.core.PBGameBase = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.engine.core.PBGameBase.__name__ = ["com","pblabs","engine","core","PBGameBase"];
com.pblabs.engine.core.PBGameBase.prototype._contexts = null;
com.pblabs.engine.core.PBGameBase.prototype._contextsDirty = null;
com.pblabs.engine.core.PBGameBase.prototype._managers = null;
com.pblabs.engine.core.PBGameBase.prototype.allocate = function(type) {
	if(type == com.pblabs.engine.core.IPBContext) {
		type = com.pblabs.engine.core.PBContext;
	}
	var i = Type.createInstance(type,[]);
	this.injector.injectInto(i);
	if(Std["is"](i,com.pblabs.engine.core.IPBContext) || Std["is"](i,com.pblabs.engine.core.PBContext)) {
		var ctx = (function($this) {
			var $r;
			var $t = i;
			if(Std["is"]($t,com.pblabs.engine.core.PBContext)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		if(Reflect.hasField(ctx,"setInjectorParent") || Lambda.has(Type.getInstanceFields(type),"setInjectorParent")) {
			Reflect.field(ctx,"setInjectorParent").apply(ctx,[this.injector]);
		}
		ctx.startup();
		if(ctx.getManager(com.pblabs.engine.time.IProcessManager) != null && Std["is"](ctx.getManager(com.pblabs.engine.time.IProcessManager),com.pblabs.engine.time.ProcessManager)) {
			(function($this) {
				var $r;
				var $t = ctx.getManager(com.pblabs.engine.time.IProcessManager);
				if(Std["is"]($t,com.pblabs.engine.time.ProcessManager)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)).set_paused(true);
		}
	}
	return i;
}
com.pblabs.engine.core.PBGameBase.prototype.createInjector = function() {
	return new com.pblabs.engine.injection.Injector();
}
com.pblabs.engine.core.PBGameBase.prototype.currentContext = null;
com.pblabs.engine.core.PBGameBase.prototype.getManager = function(cls,name) {
	return this.injector.getMapping(cls,name);
}
com.pblabs.engine.core.PBGameBase.prototype.get_currentContext = function() {
	return this._contexts[this._contexts.length - 1];
}
com.pblabs.engine.core.PBGameBase.prototype.initializeManagers = function() {
	null;
}
com.pblabs.engine.core.PBGameBase.prototype.injectInto = function(instance) {
	this.injector.injectInto(instance);
}
com.pblabs.engine.core.PBGameBase.prototype.injector = null;
com.pblabs.engine.core.PBGameBase.prototype.lookup = function(name) {
	throw "Not implemented";
	return null;
}
com.pblabs.engine.core.PBGameBase.prototype.lookupEntity = function(name) {
	throw "Not implemented";
	return null;
}
com.pblabs.engine.core.PBGameBase.prototype.newActiveContextSignaler = null;
com.pblabs.engine.core.PBGameBase.prototype.pushContext = function(ctx) {
	com.pblabs.util.Preconditions.checkNotNull(ctx,"Cannot add a null context");
	com.pblabs.util.Preconditions.checkArgument(!Lambda.has(this._contexts,ctx),"Context already added");
	com.pblabs.util.Preconditions.checkArgument(!Std["is"](ctx,com.pblabs.engine.core.PBContext) || (function($this) {
		var $r;
		var $t = ctx;
		if(Std["is"]($t,com.pblabs.engine.core.PBContext)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).injector.get_parent() == this.injector,"PBContext injector has no parent.  Use allocate() to create the PBContext, not new PBContext");
	this.stopContexts();
	this._contexts.push(ctx);
	ctx.getManager(com.pblabs.engine.time.IProcessManager).set_paused(true);
	this.startTopContext();
}
com.pblabs.engine.core.PBGameBase.prototype.registerManager = function(clazz,instance,optionalName,suppressInject) {
	if(suppressInject == null) suppressInject = false;
	if(optionalName == null) optionalName = "";
	if(instance == null) {
		instance = this.allocate(clazz);
	}
	this._managers.set(com.pblabs.engine.util.PBUtil.getManagerName(clazz,optionalName),instance);
	if(!suppressInject) {
		this.injector.injectInto(instance);
	}
	this.injector.mapValue(clazz,instance,optionalName);
	if(Std["is"](instance,com.pblabs.engine.core.IPBManager)) {
		(function($this) {
			var $r;
			var $t = instance;
			if(Std["is"]($t,com.pblabs.engine.core.IPBManager)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).startup();
	}
	return instance;
}
com.pblabs.engine.core.PBGameBase.prototype.shutdown = function() {
	{ var $it0 = this._managers.iterator();
	while( $it0.hasNext() ) { var m = $it0.next();
	{
		if(Std["is"](m,com.pblabs.engine.core.IPBManager)) {
			(function($this) {
				var $r;
				var $t = m;
				if(Std["is"]($t,com.pblabs.engine.core.IPBManager)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)).shutdown();
		}
	}
	}}
	this._managers = null;
	this.injector = null;
}
com.pblabs.engine.core.PBGameBase.prototype.startTopContext = function() {
	if(this.get_currentContext() != null) {
		(function($this) {
			var $r;
			var $t = $this.get_currentContext().getManager(com.pblabs.engine.time.IProcessManager);
			if(Std["is"]($t,com.pblabs.engine.time.ProcessManager)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).set_paused(false);
		this.newActiveContextSignaler.dispatch(this.get_currentContext(),null,{ fileName : "PBGameBase.hx", lineNumber : 277, className : "com.pblabs.engine.core.PBGameBase", methodName : "startTopContext"});
	}
	else null;
}
com.pblabs.engine.core.PBGameBase.prototype.startup = function() {
	this.newActiveContextSignaler = new hsl.haxe.DirectSignaler(this);
	this._managers = com.pblabs.util.ds.Maps.newHashMap(String);
	this.injector = this.createInjector();
	this._contexts = new Array();
	this._contextsDirty = false;
	this.initializeManagers();
}
com.pblabs.engine.core.PBGameBase.prototype.stopContexts = function() {
	var _g = 0, _g1 = this._contexts;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		$closure(c.getManager(com.pblabs.engine.time.IProcessManager),"stop");
	}
}
com.pblabs.engine.core.PBGameBase.prototype.__class__ = com.pblabs.engine.core.PBGameBase;
if(!hsl.haxe.data) hsl.haxe.data = {}
if(!hsl.haxe.data.mathematics) hsl.haxe.data.mathematics = {}
hsl.haxe.data.mathematics.Point = function(x,y) { if( x === $_ ) return; {
	this.x = x;
	this.y = y;
}}
hsl.haxe.data.mathematics.Point.__name__ = ["hsl","haxe","data","mathematics","Point"];
hsl.haxe.data.mathematics.Point.prototype.determineEquals = function(value) {
	return this.x == value.x && this.y == value.y;
}
hsl.haxe.data.mathematics.Point.prototype.getGlobalLocation = function(currentScope) {
	var globalX = this.x + currentScope.offsetLeft;
	var globalY = this.y + currentScope.offsetTop;
	while(currentScope.offsetParent != null) {
		currentScope = currentScope.offsetParent;
		globalX += currentScope.offsetLeft + ((currentScope).clientLeft - currentScope.scrollLeft);
		globalY += currentScope.offsetTop + ((currentScope).clientTop - currentScope.scrollTop);
	}
	return new hsl.haxe.data.mathematics.Point(globalX,globalY);
}
hsl.haxe.data.mathematics.Point.prototype.getLocalLocation = function(targetScope) {
	var localX = this.x - targetScope.offsetLeft;
	var localY = this.y - targetScope.offsetTop;
	while(targetScope.offsetParent != null) {
		targetScope = targetScope.offsetParent;
		localX -= targetScope.offsetLeft + ((targetScope).clientLeft - targetScope.scrollLeft);
		localY -= targetScope.offsetTop + ((targetScope).clientTop - targetScope.scrollTop);
	}
	return new hsl.haxe.data.mathematics.Point(localX,localY);
}
hsl.haxe.data.mathematics.Point.prototype.translateToScope = function(currentScope,targetScope) {
	return (targetScope == currentScope?this:this.getGlobalLocation(currentScope).getLocalLocation(targetScope));
}
hsl.haxe.data.mathematics.Point.prototype.x = null;
hsl.haxe.data.mathematics.Point.prototype.y = null;
hsl.haxe.data.mathematics.Point.prototype.__class__ = hsl.haxe.data.mathematics.Point;
if(!hsl.haxe.data.mouse) hsl.haxe.data.mouse = {}
hsl.haxe.data.mouse.MouseLocation = function(x,y,globalLocation) { if( x === $_ ) return; {
	hsl.haxe.data.mathematics.Point.apply(this,[x,y]);
	if(null == globalLocation) {
		throw new haxe.exception.ArgumentNullException("globalLocation",1);
	}
	this.globalLocation = globalLocation;
}}
hsl.haxe.data.mouse.MouseLocation.__name__ = ["hsl","haxe","data","mouse","MouseLocation"];
hsl.haxe.data.mouse.MouseLocation.__super__ = hsl.haxe.data.mathematics.Point;
for(var k in hsl.haxe.data.mathematics.Point.prototype ) hsl.haxe.data.mouse.MouseLocation.prototype[k] = hsl.haxe.data.mathematics.Point.prototype[k];
hsl.haxe.data.mouse.MouseLocation.prototype.globalLocation = null;
hsl.haxe.data.mouse.MouseLocation.prototype.__class__ = hsl.haxe.data.mouse.MouseLocation;
com.pblabs.engine.util.PBUtil = function() { }
com.pblabs.engine.util.PBUtil.__name__ = ["com","pblabs","engine","util","PBUtil"];
com.pblabs.engine.util.PBUtil.getManagerName = function(cls,name) {
	return com.pblabs.util.StringUtil.getStringKey(cls) + (name == null?"":"|" + name);
}
com.pblabs.engine.util.PBUtil.addSingletonComponent = function(context,compClass,compName,isManager) {
	if(isManager == null) isManager = false;
	com.pblabs.util.Preconditions.checkNotNull(context,"Null context");
	com.pblabs.util.Preconditions.checkNotNull(compClass,"Null compClass");
	if(compName == null) {
		compName = com.pblabs.util.ReflectUtil.tinyClassName(compClass);
	}
	var component = context.allocate(compClass);
	com.pblabs.util.Preconditions.checkArgument(Std["is"](component,com.pblabs.engine.core.IEntityComponent),("Singleton " + compClass) + " is not an IEntityComponent");
	var e = context.allocate(com.pblabs.engine.core.IEntity);
	if(e.get_context() == null) null;
	e.initialize(compName);
	e.addComponent((function($this) {
		var $r;
		var $t = component;
		if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),compName);
	e.set_deferring(false);
	if(!(function($this) {
		var $r;
		var $t = component;
		if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).get_isRegistered()) null;
	if(isManager) {
		context.registerManager(compClass,component,compName,true);
	}
	return component;
}
com.pblabs.engine.util.PBUtil.objectNameMapping = function(obj) {
	if(Std["is"](obj,com.pblabs.engine.core.IPBObject)) {
		return (function($this) {
			var $r;
			var $t = obj;
			if(Std["is"]($t,com.pblabs.engine.core.IPBObject)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).get_name();
	}
	else if(Std["is"](obj,com.pblabs.engine.core.IEntityComponent)) {
		return (function($this) {
			var $r;
			var $t = obj;
			if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).get_owner().get_name();
	}
	else {
		throw "Unrecogized object";
		return "Unrecogized object";
	}
}
com.pblabs.engine.util.PBUtil.componentNameMapping = function(c) {
	return c.get_name();
}
com.pblabs.engine.util.PBUtil.componentProp = function(c,fieldName) {
	var compName = com.pblabs.engine.util.PBUtil.componentName(c);
	return new com.pblabs.engine.core.PropertyReference(("@" + compName) + com.pblabs.engine.util.PBUtil.fieldToken(fieldName));
}
com.pblabs.engine.util.PBUtil.entityProp = function(c,fieldName) {
	return new com.pblabs.engine.core.PropertyReference(((("#" + c.get_owner().get_name()) + ".") + com.pblabs.engine.util.PBUtil.componentName(c)) + com.pblabs.engine.util.PBUtil.fieldToken(fieldName));
}
com.pblabs.engine.util.PBUtil.singletonProp = function(component,fieldName) {
	var compName = com.pblabs.engine.util.PBUtil.componentName(component);
	return new com.pblabs.engine.core.PropertyReference(((("#" + compName) + ".") + compName) + com.pblabs.engine.util.PBUtil.fieldToken(fieldName));
}
com.pblabs.engine.util.PBUtil.createPropertyCallback = function(e,p) {
	return function() {
		if(!e.get_isLiveObject()) return null;
		return e.getProperty(p);
	}
}
com.pblabs.engine.util.PBUtil.entityToString = function(e) {
	if(e == null) {
		return "null";
	}
	var s = new StringBuf();
	s.b[s.b.length] = ("[" + e.get_name()) + ":";
	{ var $it0 = e.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		s.b[s.b.length] = "\n  " + c;
	}
	}}
	return s.b.join("");
}
com.pblabs.engine.util.PBUtil.fieldToken = function(fieldName) {
	return (fieldName != null?"." + fieldName:"");
}
com.pblabs.engine.util.PBUtil.componentName = function(c) {
	if(Std["is"](c,String)) {
		return c;
	}
	else if(Std["is"](c,com.pblabs.engine.core.IEntityComponent) && (function($this) {
		var $r;
		var $t = c;
		if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)).get_isRegistered()) {
		return (function($this) {
			var $r;
			var $t = c;
			if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).get_name();
	}
	else {
		return com.pblabs.util.ReflectUtil.tinyClassName(c);
	}
}
com.pblabs.engine.util.PBUtil.prototype.__class__ = com.pblabs.engine.util.PBUtil;
com.pblabs.engine.time.IQueuedObject = function() { }
com.pblabs.engine.time.IQueuedObject.__name__ = ["com","pblabs","engine","time","IQueuedObject"];
com.pblabs.engine.time.IQueuedObject.prototype.nextThinkCallback = null;
com.pblabs.engine.time.IQueuedObject.prototype.nextThinkTime = null;
com.pblabs.engine.time.IQueuedObject.prototype.__class__ = com.pblabs.engine.time.IQueuedObject;
com.pblabs.engine.time.IQueuedObject.__interfaces__ = [com.pblabs.engine.util.IPrioritizable];
hsl.haxe.Signal = function(data,currentBond,currentTarget,origin) { if( data === $_ ) return; {
	this.data = data;
	this.currentBond = currentBond;
	this.currentTarget = currentTarget;
	this.origin = origin;
	this.immediatePropagationStopped = false;
	this.propagationStopped = false;
}}
hsl.haxe.Signal.__name__ = ["hsl","haxe","Signal"];
hsl.haxe.Signal.prototype.currentBond = null;
hsl.haxe.Signal.prototype.currentTarget = null;
hsl.haxe.Signal.prototype.data = null;
hsl.haxe.Signal.prototype.data1 = null;
hsl.haxe.Signal.prototype.getData = function() {
	return this.data;
}
hsl.haxe.Signal.prototype.immediatePropagationStopped = null;
hsl.haxe.Signal.prototype.origin = null;
hsl.haxe.Signal.prototype.propagationStopped = null;
hsl.haxe.Signal.prototype.stopImmediatePropagation = function() {
	this.immediatePropagationStopped = true;
}
hsl.haxe.Signal.prototype.stopPropagation = function() {
	this.propagationStopped = true;
}
hsl.haxe.Signal.prototype.__class__ = hsl.haxe.Signal;
com.pblabs.util.NumberUtil = function() { }
com.pblabs.util.NumberUtil.__name__ = ["com","pblabs","util","NumberUtil"];
com.pblabs.util.NumberUtil.isNumberRangesIntersection = function(min1,max1,min2,max2) {
	if(!com.pblabs.util.NumberUtil.isNumberWithinRange(min1,min2,max2) && !com.pblabs.util.NumberUtil.isNumberWithinRange(max1,min2,max2) && !com.pblabs.util.NumberUtil.isNumberWithinRange(min2,min1,max1) && !com.pblabs.util.NumberUtil.isNumberWithinRange(max2,min1,max1)) {
		return false;
	}
	return true;
}
com.pblabs.util.NumberUtil.getNumberRangesIntersection = function(min1,max1,min2,max2) {
	if(!com.pblabs.util.NumberUtil.isNumberWithinRange(min1,min2,max2) && !com.pblabs.util.NumberUtil.isNumberWithinRange(max1,min2,max2) && !com.pblabs.util.NumberUtil.isNumberWithinRange(min2,min1,max1) && !com.pblabs.util.NumberUtil.isNumberWithinRange(max2,min1,max1)) {
		return null;
	}
	if(com.pblabs.util.NumberUtil.isNumberWithinRange(min1,min2,max2) && com.pblabs.util.NumberUtil.isNumberWithinRange(max1,min2,max2)) {
		return [min1,max1];
	}
	if(com.pblabs.util.NumberUtil.isNumberWithinRange(min2,min1,max1) && com.pblabs.util.NumberUtil.isNumberWithinRange(max2,min1,max1)) {
		return [min2,max2];
	}
	var number1 = (com.pblabs.util.NumberUtil.isNumberWithinRange(min1,min2,max2)?min1:max1);
	var number2 = (com.pblabs.util.NumberUtil.isNumberWithinRange(min2,min1,max1)?min2:max2);
	return [Math.min(number1,number2),Math.max(number1,number2)];
}
com.pblabs.util.NumberUtil.isNumberWithinRange = function(n,low,high) {
	return n >= low && n <= high;
}
com.pblabs.util.NumberUtil.toFixed = function(v,digits) {
	var prec = Math.pow(10,digits);
	return Std["int"](v * prec) / prec;
}
com.pblabs.util.NumberUtil.prototype.__class__ = com.pblabs.util.NumberUtil;
com.pblabs.engine.core.PropertyReference = function(property) { if( property === $_ ) return; {
	this._property = property;
	this.getterSetterChecked = false;
}}
com.pblabs.engine.core.PropertyReference.__name__ = ["com","pblabs","engine","core","PropertyReference"];
com.pblabs.engine.core.PropertyReference.prototype._property = null;
com.pblabs.engine.core.PropertyReference.prototype.cachedLookup = null;
com.pblabs.engine.core.PropertyReference.prototype.getProperty = function() {
	return this._property;
}
com.pblabs.engine.core.PropertyReference.prototype.getterName = null;
com.pblabs.engine.core.PropertyReference.prototype.getterSetterChecked = null;
com.pblabs.engine.core.PropertyReference.prototype.property = null;
com.pblabs.engine.core.PropertyReference.prototype.setProperty = function(value) {
	if(value != this._property) {
		this._property = value;
		this.cachedLookup = null;
	}
	return value;
}
com.pblabs.engine.core.PropertyReference.prototype.setterName = null;
com.pblabs.engine.core.PropertyReference.prototype.toString = function() {
	return this._property;
}
com.pblabs.engine.core.PropertyReference.prototype.__class__ = com.pblabs.engine.core.PropertyReference;
com.pblabs.engine.resource.ImageResource = function(name,source) { if( name === $_ ) return; {
	com.pblabs.engine.resource.ResourceBase.apply(this,[name]);
	this._source = source;
}}
com.pblabs.engine.resource.ImageResource.__name__ = ["com","pblabs","engine","resource","ImageResource"];
com.pblabs.engine.resource.ImageResource.__super__ = com.pblabs.engine.resource.ResourceBase;
for(var k in com.pblabs.engine.resource.ResourceBase.prototype ) com.pblabs.engine.resource.ImageResource.prototype[k] = com.pblabs.engine.resource.ResourceBase.prototype[k];
com.pblabs.engine.resource.ImageResource.prototype._image = null;
com.pblabs.engine.resource.ImageResource.prototype._source = null;
com.pblabs.engine.resource.ImageResource.prototype.create = function(name) {
	if(name != null) {
		com.pblabs.engine.debug.Log.error("create(name): name argument is ignored",{ fileName : "ImageResource.hx", lineNumber : 68, className : "com.pblabs.engine.resource.ImageResource", methodName : "create"});
	}
	var newImage = new Image();
	newImage.src = this._image.src;
	return newImage;
}
com.pblabs.engine.resource.ImageResource.prototype.load = function(onLoad,onError) {
	com.pblabs.engine.debug.Log.debug("load " + this._source,{ fileName : "ImageResource.hx", lineNumber : 50, className : "com.pblabs.engine.resource.ImageResource", methodName : "load"});
	com.pblabs.engine.resource.ResourceBase.prototype.load.apply(this,[onLoad,onError]);
	var self = this;
	var $e = (this._source);
	switch( $e[1] ) {
	case 0:
	var u = $e[2];
	{
		this.loadFromUrl(u);
	}break;
	case 3:
	var n = $e[2];
	{
		this.loadFromEmbedded(n);
	}break;
	default:{
		com.pblabs.engine.debug.Log.error("Resource source type not handled: " + this._source,{ fileName : "ImageResource.hx", lineNumber : 57, className : "com.pblabs.engine.resource.ImageResource", methodName : "load"});
	}break;
	}
}
com.pblabs.engine.resource.ImageResource.prototype.loadFromEmbedded = function(embeddedName) {
	com.pblabs.engine.debug.Log.debug("loadFromEmbedded",{ fileName : "ImageResource.hx", lineNumber : 136, className : "com.pblabs.engine.resource.ImageResource", methodName : "loadFromEmbedded"});
	this.onLoadError("Don't use Source.embedded for JS, use Source.url instead");
}
com.pblabs.engine.resource.ImageResource.prototype.loadFromUrl = function(url) {
	com.pblabs.util.Preconditions.checkNotNull(url,"url is null");
	var self = this;
	this._image = new Image();
	this._image.onload = function(_) {
		self.loaded();
	}
	this._image.onerror = function(_) {
		haxe.Log.trace("Error",{ fileName : "ImageResource.hx", lineNumber : 124, className : "com.pblabs.engine.resource.ImageResource", methodName : "loadFromUrl"});
		self.onLoadError("Error loading " + url);
	}
	this._image.src = url;
}
com.pblabs.engine.resource.ImageResource.prototype.onLoadError = function(e) {
	this._onError(e);
}
com.pblabs.engine.resource.ImageResource.prototype.unload = function() {
	com.pblabs.engine.resource.ResourceBase.prototype.unload.apply(this,[]);
	this._source = null;
	this._image = null;
}
com.pblabs.engine.resource.ImageResource.prototype.__class__ = com.pblabs.engine.resource.ImageResource;
if(typeof mathx=='undefined') mathx = {}
mathx.Limits = function() { }
mathx.Limits.__name__ = ["mathx","Limits"];
mathx.Limits.constrainInt32 = function(a) {
	return a;
}
mathx.Limits.wrapInt32 = function(a) {
	return a;
}
mathx.Limits.wrapPosInt32 = function(a) {
	return a;
}
mathx.Limits.prototype.__class__ = mathx.Limits;
if(!hsl.js) hsl.js = {}
if(!hsl.js.translation) hsl.js.translation = {}
hsl.js.translation.JSTranslatorBase = function(preventDefault) { if( preventDefault === $_ ) return; {
	if(preventDefault == null) preventDefault = false;
	this._preventDefault = preventDefault;
}}
hsl.js.translation.JSTranslatorBase.__name__ = ["hsl","js","translation","JSTranslatorBase"];
hsl.js.translation.JSTranslatorBase.prototype._preventDefault = null;
hsl.js.translation.JSTranslatorBase.prototype.getEvent = function(nativeEvent) {
	if(null == nativeEvent) {
		nativeEvent = window.event;
	}
	return nativeEvent;
}
hsl.js.translation.JSTranslatorBase.prototype.localMouseLocationFromDOMEvent = function(event,target) {
	var ieEvent = event;
	if(this._preventDefault) {
		event.preventDefault();
	}
	var global = (null != ieEvent.pageX?new hsl.haxe.data.mathematics.Point(ieEvent.pageX,ieEvent.pageY):(null != ieEvent.clientX?(function($this) {
		var $r;
		var documentElement = (js.Lib.document).documentElement;
		if(!documentElement) documentElement = js.Lib.document.body;
		$r = new hsl.haxe.data.mathematics.Point(ieEvent.clientX + documentElement.scrollLeft,ieEvent.clientY + documentElement.scrollTop);
		return $r;
	}(this)):new hsl.haxe.data.mathematics.Point(0,0)));
	var local = global.getLocalLocation(target);
	return new hsl.haxe.data.mouse.MouseLocation(local.x,local.y,global);
}
hsl.js.translation.JSTranslatorBase.prototype.targetFromDOMEvent = function(event) {
	var ieEvent = event;
	if(this._preventDefault) {
		event.preventDefault();
	}
	var target = null;
	if(null != ieEvent.target) {
		target = ieEvent.target;
	}
	else if(null != ieEvent.srcElement) {
		target = ieEvent.srcElement;
	}
	if(3 == target.nodeType) {
		target = target.parentNode;
	}
	return target;
}
hsl.js.translation.JSTranslatorBase.prototype.__class__ = hsl.js.translation.JSTranslatorBase;
if(!hsl.haxe.translation) hsl.haxe.translation = {}
hsl.haxe.translation.Translator = function() { }
hsl.haxe.translation.Translator.__name__ = ["hsl","haxe","translation","Translator"];
hsl.haxe.translation.Translator.prototype.translate = null;
hsl.haxe.translation.Translator.prototype.__class__ = hsl.haxe.translation.Translator;
if(!hsl.js.translation.mouse) hsl.js.translation.mouse = {}
hsl.js.translation.mouse.MouseLocationTranslator = function(p) { if( p === $_ ) return; {
	hsl.js.translation.JSTranslatorBase.apply(this,[]);
}}
hsl.js.translation.mouse.MouseLocationTranslator.__name__ = ["hsl","js","translation","mouse","MouseLocationTranslator"];
hsl.js.translation.mouse.MouseLocationTranslator.__super__ = hsl.js.translation.JSTranslatorBase;
for(var k in hsl.js.translation.JSTranslatorBase.prototype ) hsl.js.translation.mouse.MouseLocationTranslator.prototype[k] = hsl.js.translation.JSTranslatorBase.prototype[k];
hsl.js.translation.mouse.MouseLocationTranslator.prototype.translate = function(nativeEvent) {
	var event = this.getEvent(nativeEvent);
	event.preventDefault();
	var target = this.targetFromDOMEvent(event);
	return new hsl.haxe.translation.Translation(this.localMouseLocationFromDOMEvent(event,target),target);
}
hsl.js.translation.mouse.MouseLocationTranslator.prototype.__class__ = hsl.js.translation.mouse.MouseLocationTranslator;
hsl.js.translation.mouse.MouseLocationTranslator.__interfaces__ = [hsl.haxe.translation.Translator];
com.pblabs.util.Predicates = function() { }
com.pblabs.util.Predicates.__name__ = ["com","pblabs","util","Predicates"];
com.pblabs.util.Predicates.isNull = function(item) {
	return (item == null);
}
com.pblabs.util.Predicates.notNull = function(item) {
	return (item != null);
}
com.pblabs.util.Predicates.createPropertyEquals = function(propName,value) {
	return function(item) {
		return item != null && com.pblabs.util.EqualableUtil.equals(com.pblabs.util.ReflectUtil.field(item,propName),value);
	}
}
com.pblabs.util.Predicates.createIn = function(array) {
	return function(item) {
		return Lambda.has(array,item);
	}
}
com.pblabs.util.Predicates.createIs = function(clazz) {
	return function(item) {
		return Std["is"](item,clazz);
	}
}
com.pblabs.util.Predicates.createNot = function(pred) {
	return function(arg) {
		return !pred(arg);
	}
}
com.pblabs.util.Predicates.createAnd = function(predicates) {
	return function(args) {
		args = (args == null?com.pblabs.util.Predicates.EMPTY_ARRAY:args);
		{
			var _g = 0;
			while(_g < predicates.length) {
				var pred = predicates[_g];
				++_g;
				if(!pred.apply(null,args)) {
					return false;
				}
			}
		}
		return true;
	}
}
com.pblabs.util.Predicates.createOr = function(predicates) {
	return function(args) {
		args = (args == null?com.pblabs.util.Predicates.EMPTY_ARRAY:args);
		{
			var _g = 0;
			while(_g < predicates.length) {
				var pred = predicates[_g];
				++_g;
				if(pred.apply(null,args)) {
					return true;
				}
			}
		}
		return false;
	}
}
com.pblabs.util.Predicates.prototype.__class__ = com.pblabs.util.Predicates;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?((i.fileName + ":") + i.lineNumber) + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += ((s + k) + " : ") + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += ("\n" + s) + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = (typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null);
	js.Lib.isOpera = (typeof window!='undefined' && window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	});
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = (this.length + len) - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
mathx.RandomGenerator = function() { }
mathx.RandomGenerator.__name__ = ["mathx","RandomGenerator"];
mathx.RandomGenerator.prototype.nextBool = null;
mathx.RandomGenerator.prototype.nextFloat = null;
mathx.RandomGenerator.prototype.nextInt = null;
mathx.RandomGenerator.prototype.setSeed = null;
mathx.RandomGenerator.prototype.__class__ = mathx.RandomGenerator;
mathx.MersenneTwister = function(seed) { if( seed === $_ ) return; {
	if(seed == null) seed = 0;
	if(seed == 0) seed = Math.floor(Date.now().getTime());
	this.mt = new Array();
	this.setSeed(seed);
}}
mathx.MersenneTwister.__name__ = ["mathx","MersenneTwister"];
mathx.MersenneTwister.prototype.extractNumber = function() {
	if(this.index == 0) this.generateNumbers();
	var y = this.mt[this.index];
	y = (y) ^ ((y) >>> 11);
	y = (y) ^ (((y) << 7) & (-1658038656));
	y = (y) ^ (((y) << 15) & (-272236544));
	y = (y) ^ ((y) >>> 18);
	this.index = (this.index + 1) % 624;
	return y;
}
mathx.MersenneTwister.prototype.generateNumbers = function() {
	var _g = 0;
	while(_g < 624) {
		var i = _g++;
		var y = ((this.mt[i]) & (-2147483648)) + ((this.mt[(i + 1) % 624]) & (2147483647));
		this.mt[i] = (this.mt[(i + 397) % 624]) ^ ((y) >>> 1);
		if((y) & (1) == 1) this.mt[i] = (this.mt[i]) ^ (-1727483681);
	}
}
mathx.MersenneTwister.prototype.index = null;
mathx.MersenneTwister.prototype.mt = null;
mathx.MersenneTwister.prototype.nextBool = function() {
	return this.nextInt() > 2147483647 / 2;
}
mathx.MersenneTwister.prototype.nextFloat = function() {
	return this.nextInt() / 2147483647;
}
mathx.MersenneTwister.prototype.nextInt = function(max) {
	if(max == null) max = 0;
	if(max < 0) throw "n must be positive";
	var n = this.extractNumber();
	n = (n) & (2147483647);
	if(max == 0) {
		return n;
	}
	else {
		return n % max;
	}
}
mathx.MersenneTwister.prototype.reseed = function(seed) {
	this.setSeed(seed);
}
mathx.MersenneTwister.prototype.setSeed = function(seed) {
	this.mt[0] = seed;
	{
		var _g = 1;
		while(_g < 624) {
			var i = _g++;
			this.mt[i] = (this.uintMul(1812433253,(this.mt[i - 1]) ^ (((this.mt[i - 1]) >>> 30)))) + (i);
		}
	}
	this.index = 0;
}
mathx.MersenneTwister.prototype.uintMul = function(a,b) {
	var A = (a) >>> 16;
	var B = (a) & (65535);
	var C = (b) >>> 16;
	var D = (b) & (65535);
	var BD = (B) * (D);
	var AD = (A) * (D);
	var CB = (C) * (B);
	var hi = (((BD) >>> 16) + (AD)) + (CB);
	var lo = (BD) & (65535);
	return (lo) + ((hi) << 16);
}
mathx.MersenneTwister.prototype.__class__ = mathx.MersenneTwister;
mathx.MersenneTwister.__interfaces__ = [mathx.RandomGenerator];
com.pblabs.util.Rand = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.util.Rand.__name__ = ["com","pblabs","util","Rand"];
com.pblabs.util.Rand.addStream = function(seed) {
	if(seed == null) seed = 0;
	com.pblabs.util.Rand._randStreams.push(new mathx.MersenneTwister(seed));
	return (com.pblabs.util.Rand._randStreams.length - 1);
}
com.pblabs.util.Rand.getStream = function(streamId) {
	if(streamId == null) streamId = -1;
	if(streamId == -1) {
		if(com.pblabs.util.Rand.errorOnUnspecifiedStreamId) {
			throw "streamId must be specified";
		}
		else {
			streamId = 0;
		}
	}
	return com.pblabs.util.Rand._randStreams[streamId];
}
com.pblabs.util.Rand.seedStream = function(streamId,seed) {
	com.pblabs.util.Rand.getStream(streamId).setSeed(seed);
}
com.pblabs.util.Rand.nextElement = function(arr,streamId) {
	if(streamId == null) streamId = -1;
	return ((arr.length > 0?arr[com.pblabs.util.Rand.nextIntInRange(0,arr.length - 1,streamId)]:null));
}
com.pblabs.util.Rand.nextInt = function(streamId) {
	if(streamId == null) streamId = -1;
	return com.pblabs.util.Rand.getStream(streamId).nextInt();
}
com.pblabs.util.Rand.nextIntInRange = function(min,max,streamId) {
	if(streamId == null) streamId = -1;
	return min + com.pblabs.util.Rand.getStream(streamId).nextInt((max - min) + 1);
}
com.pblabs.util.Rand.nextBoolean = function(streamId) {
	if(streamId == null) streamId = -1;
	return com.pblabs.util.Rand.getStream(streamId).nextBool();
}
com.pblabs.util.Rand.nextChance = function(chance,streamId) {
	if(streamId == null) streamId = -1;
	return com.pblabs.util.Rand.nextFloat(streamId) < chance;
}
com.pblabs.util.Rand.nextFloat = function(streamId) {
	if(streamId == null) streamId = -1;
	return com.pblabs.util.Rand.getStream(streamId).nextFloat();
}
com.pblabs.util.Rand.nextFloatInRange = function(low,high,streamId) {
	if(streamId == null) streamId = -1;
	return low + (com.pblabs.util.Rand.getStream(streamId).nextFloat() * (high - low));
}
com.pblabs.util.Rand.shuffleArray = function(arr,streamId) {
	if(streamId == null) streamId = -1;
	com.pblabs.util.ArrayUtil.shuffle(arr,com.pblabs.util.Rand.getStream(streamId));
}
com.pblabs.util.Rand.prototype.__class__ = com.pblabs.util.Rand;
com.pblabs.util.ds.Set = function() { }
com.pblabs.util.ds.Set.__name__ = ["com","pblabs","util","ds","Set"];
com.pblabs.util.ds.Set.prototype.add = null;
com.pblabs.util.ds.Set.prototype.clear = null;
com.pblabs.util.ds.Set.prototype.exists = null;
com.pblabs.util.ds.Set.prototype.isEmpty = null;
com.pblabs.util.ds.Set.prototype.iterator = null;
com.pblabs.util.ds.Set.prototype.remove = null;
com.pblabs.util.ds.Set.prototype.size = null;
com.pblabs.util.ds.Set.prototype.__class__ = com.pblabs.util.ds.Set;
if(!com.pblabs.util.ds.sets) com.pblabs.util.ds.sets = {}
com.pblabs.util.ds.sets.MapSet = function(source) { if( source === $_ ) return; {
	this._source = com.pblabs.util.Preconditions.checkNotNull(source);
}}
com.pblabs.util.ds.sets.MapSet.__name__ = ["com","pblabs","util","ds","sets","MapSet"];
com.pblabs.util.ds.sets.MapSet.prototype._source = null;
com.pblabs.util.ds.sets.MapSet.prototype.add = function(o) {
	this._source.set(o,o);
}
com.pblabs.util.ds.sets.MapSet.prototype.clear = function() {
	return this._source.clear();
}
com.pblabs.util.ds.sets.MapSet.prototype.exists = function(o) {
	return this._source.exists(o);
}
com.pblabs.util.ds.sets.MapSet.prototype.forEach = function(fn) {
	com.pblabs.util.ds.MapUtil.forEach(this._source,function(k,v) {
		return fn(v);
	});
}
com.pblabs.util.ds.sets.MapSet.prototype.isEmpty = function() {
	return com.pblabs.util.ds.MapUtil.isEmpty(this._source);
}
com.pblabs.util.ds.sets.MapSet.prototype.iterator = function() {
	return this._source.iterator();
}
com.pblabs.util.ds.sets.MapSet.prototype.remove = function(o) {
	return this._source.remove(o);
}
com.pblabs.util.ds.sets.MapSet.prototype.size = function() {
	return this._source.size();
}
com.pblabs.util.ds.sets.MapSet.prototype.__class__ = com.pblabs.util.ds.sets.MapSet;
com.pblabs.util.ds.sets.MapSet.__interfaces__ = [com.pblabs.util.ds.Set];
hsl.js.translation.DatalessTranslator = function(p) { if( p === $_ ) return; {
	hsl.js.translation.JSTranslatorBase.apply(this,[]);
}}
hsl.js.translation.DatalessTranslator.__name__ = ["hsl","js","translation","DatalessTranslator"];
hsl.js.translation.DatalessTranslator.__super__ = hsl.js.translation.JSTranslatorBase;
for(var k in hsl.js.translation.JSTranslatorBase.prototype ) hsl.js.translation.DatalessTranslator.prototype[k] = hsl.js.translation.JSTranslatorBase.prototype[k];
hsl.js.translation.DatalessTranslator.prototype.translate = function(nativeEvent) {
	return new hsl.haxe.translation.Translation(null,this.targetFromDOMEvent(nativeEvent));
}
hsl.js.translation.DatalessTranslator.prototype.__class__ = hsl.js.translation.DatalessTranslator;
hsl.js.translation.DatalessTranslator.__interfaces__ = [hsl.haxe.translation.Translator];
haxe.Int32 = function() { }
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return (a << 16) | b;
}
haxe.Int32.ofInt = function(x) {
	return x;
}
haxe.Int32.toInt = function(x) {
	if((((x) >> 30) & 1) != ((x) >>> 31)) throw "Overflow " + x;
	return (x) & -1;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return (a) + (b);
}
haxe.Int32.sub = function(a,b) {
	return (a) - (b);
}
haxe.Int32.mul = function(a,b) {
	return (a) * (b);
}
haxe.Int32.div = function(a,b) {
	return Std["int"]((a) / (b));
}
haxe.Int32.mod = function(a,b) {
	return (a) % (b);
}
haxe.Int32.shl = function(a,b) {
	return (a) << b;
}
haxe.Int32.shr = function(a,b) {
	return (a) >> b;
}
haxe.Int32.ushr = function(a,b) {
	return (a) >>> b;
}
haxe.Int32.and = function(a,b) {
	return (a) & (b);
}
haxe.Int32.or = function(a,b) {
	return (a) | (b);
}
haxe.Int32.xor = function(a,b) {
	return (a) ^ (b);
}
haxe.Int32.neg = function(a) {
	return -(a);
}
haxe.Int32.complement = function(a) {
	return ~(a);
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.prototype.__class__ = haxe.Int32;
com.pblabs.util.MetaUtil = function() { }
com.pblabs.util.MetaUtil.__name__ = ["com","pblabs","util","MetaUtil"];
com.pblabs.util.MetaUtil.isFieldMetaData = function(cls,fieldName,metaLabel) {
	var meta = haxe.rtti.Meta.getFields(cls);
	if(meta == null) {
		return false;
	}
	return Reflect.hasField(meta,fieldName) && Reflect.hasField(Reflect.field(meta,fieldName),metaLabel);
}
com.pblabs.util.MetaUtil.prototype.__class__ = com.pblabs.util.MetaUtil;
com.pblabs.components.input.GestureInputManager = function(p) { if( p === $_ ) return; {
	com.pblabs.components.input.BaseInputManager.apply(this,[]);
}}
com.pblabs.components.input.GestureInputManager.__name__ = ["com","pblabs","components","input","GestureInputManager"];
com.pblabs.components.input.GestureInputManager.__super__ = com.pblabs.components.input.BaseInputManager;
for(var k in com.pblabs.components.input.BaseInputManager.prototype ) com.pblabs.components.input.GestureInputManager.prototype[k] = com.pblabs.components.input.BaseInputManager.prototype[k];
com.pblabs.components.input.GestureInputManager.prototype.bindSignals = function() {
	this.gestureStart = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.GESTURESTART,new hsl.js.translation.touch.GestureTranslator());
	this.gestureChange = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.GESTURECHANGE,new hsl.js.translation.touch.GestureTranslator());
	this.gestureEnd = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.GESTUREEND,new hsl.js.translation.touch.GestureTranslator());
}
com.pblabs.components.input.GestureInputManager.prototype.freeSignals = function() {
	this.gestureStart.unbindAll();
	this.gestureChange.unbindAll();
	this.gestureEnd.unbindAll();
	this.gestureStart = null;
	this.gestureChange = null;
	this.gestureEnd = null;
}
com.pblabs.components.input.GestureInputManager.prototype.gestureChange = null;
com.pblabs.components.input.GestureInputManager.prototype.gestureEnd = null;
com.pblabs.components.input.GestureInputManager.prototype.gestureStart = null;
com.pblabs.components.input.GestureInputManager.prototype.shutdown = function() {
	com.pblabs.components.input.BaseInputManager.prototype.shutdown.apply(this,[]);
	this.freeSignals();
}
com.pblabs.components.input.GestureInputManager.prototype.startup = function() {
	com.pblabs.components.input.BaseInputManager.prototype.startup.apply(this,[]);
	this.bindSignals();
}
com.pblabs.components.input.GestureInputManager.prototype.__class__ = com.pblabs.components.input.GestureInputManager;
com.pblabs.components.scene.BaseScene2DLayer = function(p) { if( p === $_ ) return; {
	com.pblabs.components.manager.NodeComponent.apply(this,[]);
	this._parallaxFactor = 1.0;
}}
com.pblabs.components.scene.BaseScene2DLayer.__name__ = ["com","pblabs","components","scene","BaseScene2DLayer"];
com.pblabs.components.scene.BaseScene2DLayer.__super__ = com.pblabs.components.manager.NodeComponent;
for(var k in com.pblabs.components.manager.NodeComponent.prototype ) com.pblabs.components.scene.BaseScene2DLayer.prototype[k] = com.pblabs.components.manager.NodeComponent.prototype[k];
com.pblabs.components.scene.BaseScene2DLayer.prototype._needsSort = null;
com.pblabs.components.scene.BaseScene2DLayer.prototype._parallaxFactor = null;
com.pblabs.components.scene.BaseScene2DLayer.prototype.get_index = function() {
	com.pblabs.util.Preconditions.checkNotNull(this.parent,"You must property add the Layer component before changing the index");
	return this.parent.getLayerIndex(this);
}
com.pblabs.components.scene.BaseScene2DLayer.prototype.get_parallaxFactor = function() {
	return this._parallaxFactor;
}
com.pblabs.components.scene.BaseScene2DLayer.prototype.get_scene = function() {
	return this.parent;
}
com.pblabs.components.scene.BaseScene2DLayer.prototype.index = null;
com.pblabs.components.scene.BaseScene2DLayer.prototype.parallaxFactor = null;
com.pblabs.components.scene.BaseScene2DLayer.prototype.scene = null;
com.pblabs.components.scene.BaseScene2DLayer.prototype.set_index = function(val) {
	com.pblabs.util.Preconditions.checkNotNull(this.parent,"You must property add the Layer component before changing the index");
	this.parent.setLayerIndex(this,val);
	return this.parent.getLayerIndex(this);
}
com.pblabs.components.scene.BaseScene2DLayer.prototype.set_parallaxFactor = function(val) {
	this._parallaxFactor = val;
	return val;
}
com.pblabs.components.scene.BaseScene2DLayer.prototype.sortChildren = function(c1,c2) {
	return 0;
}
com.pblabs.components.scene.BaseScene2DLayer.prototype.__class__ = com.pblabs.components.scene.BaseScene2DLayer;
com.pblabs.engine.resource.XMLResource = function(name,source) { if( name === $_ ) return; {
	com.pblabs.engine.resource.ResourceBase.apply(this,[name]);
	this._source = source;
}}
com.pblabs.engine.resource.XMLResource.__name__ = ["com","pblabs","engine","resource","XMLResource"];
com.pblabs.engine.resource.XMLResource.__super__ = com.pblabs.engine.resource.ResourceBase;
for(var k in com.pblabs.engine.resource.ResourceBase.prototype ) com.pblabs.engine.resource.XMLResource.prototype[k] = com.pblabs.engine.resource.ResourceBase.prototype[k];
com.pblabs.engine.resource.XMLResource.prototype._data = null;
com.pblabs.engine.resource.XMLResource.prototype._source = null;
com.pblabs.engine.resource.XMLResource.prototype._xml = null;
com.pblabs.engine.resource.XMLResource.prototype.create = function(name) {
	if(name != null) {
		com.pblabs.engine.debug.Log.error("create(name): name argument is ignored",{ fileName : "XMLResource.hx", lineNumber : 57, className : "com.pblabs.engine.resource.XMLResource", methodName : "create"});
	}
	return this._xml.firstElement();
}
com.pblabs.engine.resource.XMLResource.prototype.createXMLFromData = function(data) {
	this._data = data;
	try {
		this._xml = Xml.parse(data);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				this._onError(e);
			}
		}
	}
	this.loaded();
	this._data = null;
}
com.pblabs.engine.resource.XMLResource.prototype.load = function(onLoad,onError) {
	com.pblabs.engine.resource.ResourceBase.prototype.load.apply(this,[onLoad,onError]);
	try {
		var $e = (this._source);
		switch( $e[1] ) {
		case 0:
		var u = $e[2];
		{
			this.loadFromUrl(u);
		}break;
		case 1:
		var b = $e[2];
		{
			this.loadFromBytes(b);
		}break;
		case 2:
		var t = $e[2];
		{
			this.loadFromText(t);
		}break;
		case 3:
		var n = $e[2];
		{
			this.loadFromEmbedded(n);
		}break;
		default:{
			com.pblabs.engine.debug.Log.error("Resouce source type not handled: " + this._source,{ fileName : "XMLResource.hx", lineNumber : 44, className : "com.pblabs.engine.resource.XMLResource", methodName : "load"});
		}break;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				onError(e);
			}
		}
	}
	this._source = null;
}
com.pblabs.engine.resource.XMLResource.prototype.loadFromBytes = function(bytes) {
	com.pblabs.util.Preconditions.checkNotNull(bytes,"bytes is null");
	throw "Not implemented";
}
com.pblabs.engine.resource.XMLResource.prototype.loadFromEmbedded = function(embeddedName) {
	com.pblabs.engine.debug.Log.debug("loadFromEmbedded",{ fileName : "XMLResource.hx", lineNumber : 118, className : "com.pblabs.engine.resource.XMLResource", methodName : "loadFromEmbedded"});
	throw "Not implemented: embedded XML in this target";
}
com.pblabs.engine.resource.XMLResource.prototype.loadFromText = function(txt) {
	com.pblabs.util.Preconditions.checkNotNull(txt,"txt is null");
	this.createXMLFromData(txt);
}
com.pblabs.engine.resource.XMLResource.prototype.loadFromUrl = function(url) {
	com.pblabs.util.Preconditions.checkNotNull(url,"url is null");
	throw "Platform cannot load xml from source=" + this._source;
}
com.pblabs.engine.resource.XMLResource.prototype.onLoadError = function(e) {
	this._onError(e);
}
com.pblabs.engine.resource.XMLResource.prototype.unload = function() {
	com.pblabs.engine.resource.ResourceBase.prototype.unload.apply(this,[]);
	this._source = null;
	this._xml = null;
	this._data = null;
}
com.pblabs.engine.resource.XMLResource.prototype.__class__ = com.pblabs.engine.resource.XMLResource;
if(!com.pblabs.components.ui) com.pblabs.components.ui = {}
com.pblabs.components.ui.UIUtil = function() { }
com.pblabs.components.ui.UIUtil.__name__ = ["com","pblabs","components","ui","UIUtil"];
com.pblabs.components.ui.UIUtil.createSimpleButton = function(layer,name,text,loc,onInputDown) {
	var so = com.pblabs.components.scene.SceneUtil.createBaseSceneEntity(layer.get_context(),name);
	var blob = layer.get_context().allocate(com.pblabs.components.scene.CircleShape);
	blob.parentProperty = com.pblabs.engine.util.PBUtil.entityProp(layer);
	so.addComponent(blob);
	var mouse = layer.get_context().allocate(com.pblabs.components.input.MouseInputComponent);
	so.addComponent(mouse);
	so.set_deferring(false);
	com.pblabs.components.input.InputUtil.setDeviceHeldDown(so,onInputDown);
	com.pblabs.components.input.InputUtil.setDeviceDown(so,onInputDown);
	com.pblabs.components.scene.SceneUtil.setLocation(so,loc.x,loc.y);
	return so;
}
com.pblabs.components.ui.UIUtil.createSVGButton = function(layer,name,svgId,loc,onInputDown) {
	var so = com.pblabs.components.scene.SceneUtil.createBaseSceneEntity(layer.get_context(),name);
	var c = layer.get_context().allocate(com.pblabs.components.scene.SVGComponent);
	c.resourceToken = new com.pblabs.util.ds.Tuple(com.pblabs.engine.resource.EmbeddedResource.NAME,svgId);
	c.parentProperty = com.pblabs.engine.util.PBUtil.entityProp(layer);
	so.addComponent(c);
	var mouse = layer.get_context().allocate(com.pblabs.components.input.MouseInputComponent);
	so.addComponent(mouse);
	so.set_deferring(false);
	com.pblabs.components.input.InputUtil.setDeviceHeldDown(so,onInputDown);
	com.pblabs.components.scene.SceneUtil.setLocation(so,loc.x,loc.y);
	return so;
}
com.pblabs.components.ui.UIUtil.createZoomWidget = function(layer,target,loc,size) {
	if(size == null) size = 200;
	com.pblabs.util.Preconditions.checkNotNull(layer);
	com.pblabs.util.Preconditions.checkNotNull(target);
	com.pblabs.util.Preconditions.checkNotNull(loc);
	var zoomIn = function() {
		var _g = target;
		_g.set_zoom(_g.get_zoom() + 0.1);
	}
	var zoomOut = function() {
		var _g = target;
		_g.set_zoom(_g.get_zoom() - 0.1);
	}
	var ein = com.pblabs.components.ui.UIUtil.createSVGButton(layer,"zoomInWidget","zoomin",loc,zoomIn);
	var svg = ein.lookupComponent(com.pblabs.components.scene.SVGComponent);
	svg.set_width(svg.set_height(size));
	var mouse = ein.lookupComponent(com.pblabs.components.input.MouseInputComponent);
	mouse.isRotatable = mouse.isScalable = mouse.isTranslatable = false;
	var eout = com.pblabs.components.ui.UIUtil.createSVGButton(layer,"zoomOutWidget","zoomout",loc.add(new com.pblabs.geom.Vector2(0,size)),zoomOut);
	svg = eout.lookupComponent(com.pblabs.components.scene.SVGComponent);
	svg.set_width(svg.set_height(size));
	mouse = eout.lookupComponent(com.pblabs.components.input.MouseInputComponent);
	mouse.isRotatable = mouse.isScalable = mouse.isTranslatable = false;
}
com.pblabs.components.ui.UIUtil.createRotateWidget = function(layer,target,loc,size) {
	if(size == null) size = 200;
	com.pblabs.util.Preconditions.checkNotNull(layer);
	com.pblabs.util.Preconditions.checkNotNull(target);
	com.pblabs.util.Preconditions.checkNotNull(loc);
	var clockWise = function() {
		var _g = target;
		_g.set_rotation(_g.get_rotation() + 0.05);
	}
	var antiClockwise = function() {
		var _g = target;
		_g.set_rotation(_g.get_rotation() - 0.05);
	}
	var anticlock = com.pblabs.components.ui.UIUtil.createSVGButton(layer,"anticlockwiseWidget","counterclockwise",loc,antiClockwise);
	var svg = anticlock.lookupComponent(com.pblabs.components.scene.SVGComponent);
	svg.set_width(svg.set_height(size));
	var mouse = anticlock.lookupComponent(com.pblabs.components.input.MouseInputComponent);
	mouse.isRotatable = mouse.isScalable = mouse.isTranslatable = false;
	var clock = com.pblabs.components.ui.UIUtil.createSVGButton(layer,"clockwiseWidget","clockwise",loc.add(new com.pblabs.geom.Vector2(0,size)),clockWise);
	svg = clock.lookupComponent(com.pblabs.components.scene.SVGComponent);
	svg.set_width(svg.set_height(size));
	mouse = clock.lookupComponent(com.pblabs.components.input.MouseInputComponent);
	mouse.isRotatable = mouse.isScalable = mouse.isTranslatable = false;
}
com.pblabs.components.ui.UIUtil.createScrollWidget = function(layer,target,loc,size) {
	if(size == null) size = 200;
	com.pblabs.util.Preconditions.checkNotNull(layer);
	com.pblabs.util.Preconditions.checkNotNull(target);
	com.pblabs.util.Preconditions.checkNotNull(loc);
	var upf = function() {
		var _g = target;
		_g.set_y(_g.get_y() - 20);
	}
	var downf = function() {
		var _g = target;
		_g.set_y(_g.get_y() + 20);
	}
	var leftf = function() {
		var _g = target;
		_g.set_x(_g.get_x() - 20);
	}
	var rightf = function() {
		var _g = target;
		_g.set_x(_g.get_x() + 20);
	}
	var fs = [upf,downf,leftf,rightf];
	var labels = ["up","down","left","right"];
	var locs = [loc,loc.add(new com.pblabs.geom.Vector2(0,size)),loc.add(new com.pblabs.geom.Vector2(-size,size / 2)),loc.add(new com.pblabs.geom.Vector2(size,size / 2))];
	{
		var _g1 = 0, _g = labels.length;
		while(_g1 < _g) {
			var i = _g1++;
			var e = com.pblabs.components.ui.UIUtil.createSVGButton(layer,labels[i] + "Widget",labels[i],locs[i],fs[i]);
			var svg = e.lookupComponent(com.pblabs.components.scene.SVGComponent);
			svg.set_width(svg.set_height(size));
			var mouse = e.lookupComponent(com.pblabs.components.input.MouseInputComponent);
			mouse.isRotatable = mouse.isScalable = mouse.isTranslatable = false;
		}
	}
}
com.pblabs.components.ui.UIUtil.prototype.__class__ = com.pblabs.components.ui.UIUtil;
com.pblabs.engine.serialization.TemplateManager = function(p) { if( p === $_ ) return; {
	this._inGroup = false;
	this._entityType = null;
	this._things = com.pblabs.util.ds.Maps.newHashMap(String);
	this.signalLoaded = new hsl.haxe.DirectSignaler(this);
	this.signalFailed = new hsl.haxe.DirectSignaler(this);
	this.signalGroupLoaded = new hsl.haxe.DirectSignaler(this);
	this.signalLoaded.bind($closure(this,"onLoaded"));
	this.signalFailed.bind($closure(this,"onFailed"));
}}
com.pblabs.engine.serialization.TemplateManager.__name__ = ["com","pblabs","engine","serialization","TemplateManager"];
com.pblabs.engine.serialization.TemplateManager.prototype._entityType = null;
com.pblabs.engine.serialization.TemplateManager.prototype._inGroup = null;
com.pblabs.engine.serialization.TemplateManager.prototype._things = null;
com.pblabs.engine.serialization.TemplateManager.prototype.addXML = function(xml,identifier,version) {
	var name = xml.get("name");
	if(name.length == 0) {
		com.pblabs.engine.debug.Log.warn("XML object description added without a 'name' attribute.",{ fileName : "TemplateManager.hx", lineNumber : 379, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "addXML"});
		return;
	}
	if(this._things.exists(name)) {
		com.pblabs.engine.debug.Log.warn(("An XML object description with name " + name) + " has already been added.",{ fileName : "TemplateManager.hx", lineNumber : 384, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "addXML"});
		return;
	}
	var thing = new com.pblabs.engine.serialization.ThingReference();
	thing.xmlData = xml;
	thing.identifier = identifier;
	thing.version = version;
	this._things.set(name,thing);
}
com.pblabs.engine.serialization.TemplateManager.prototype.doGetXML = function(name,xmlType1,xmlType2) {
	var thing = this._things.get(name);
	if(null == thing) {
		return null;
	}
	if(thing.entityCallback != null || thing.groupCallback != null) {
		return null;
	}
	if(xmlType1 != null) {
		var type = thing.xmlData.getNodeName();
		if(type != xmlType1 && type != xmlType2) {
			return null;
		}
	}
	return thing;
}
com.pblabs.engine.serialization.TemplateManager.prototype.doInstantiateGroup = function(name,tree,context) {
	var xml = this.getXML(name,"group");
	com.pblabs.util.Preconditions.checkNotNull(xml,("Could not find group '" + name) + "'");
	var actualGroup = context.allocate(com.pblabs.engine.core.IPBGroup);
	if(name != context.rootGroup.get_name()) {
		actualGroup.initialize(name);
		actualGroup.set_owningGroup(context.get_currentGroup());
	}
	else {
		actualGroup = context.rootGroup;
	}
	var oldGroup = context.get_currentGroup();
	context.set_currentGroup(actualGroup);
	{ var $it0 = xml.elements();
	while( $it0.hasNext() ) { var objectXML = $it0.next();
	{
		var childName = objectXML.get("name");
		if(objectXML.getNodeName() == "groupReference") {
			com.pblabs.util.Preconditions.checkArgument(!tree.exists(childName),("Cyclical group detected. " + childName) + " has already been instantiated.");
			tree.set(childName,true);
			try {
				if(this.doInstantiateGroup(childName,tree,context) == null) {
					return null;
				}
			}
			catch( $e1 ) {
				{
					var err = $e1;
					{
						com.pblabs.engine.debug.Log.warn((((("Failed to instantiate group '" + childName) + "' from groupReference in '") + name) + "' due to :") + err,{ fileName : "TemplateManager.hx", lineNumber : 583, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "doInstantiateGroup"});
						return null;
					}
				}
			}
		}
		else if(objectXML.getNodeName() == "objectReference") {
			this._inGroup = true;
			this.instantiateEntity(childName,context);
			this._inGroup = false;
		}
		else {
			com.pblabs.engine.debug.Log.warn(("Encountered unknown tag " + objectXML.getNodeName()) + " in group.",{ fileName : "TemplateManager.hx", lineNumber : 591, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "doInstantiateGroup"});
		}
	}
	}}
	context.set_currentGroup(oldGroup);
	this.serializer.reportMissingReferences();
	return actualGroup;
}
com.pblabs.engine.serialization.TemplateManager.prototype.doInstantiateTemplate = function(object,templateName,tree) {
	if(templateName == null || templateName.length == 0) {
		return true;
	}
	if(tree.exists(templateName)) {
		com.pblabs.engine.debug.Log.warn(("Cyclical template detected. " + templateName) + " has already been instantiated.",{ fileName : "TemplateManager.hx", lineNumber : 532, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "doInstantiateTemplate"});
		return false;
	}
	var templateXML = this.getXML(templateName,"template");
	if(null == templateXML) {
		com.pblabs.engine.debug.Log.warn(("Unable to find the template " + templateName) + ".",{ fileName : "TemplateManager.hx", lineNumber : 538, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "doInstantiateTemplate"});
		return false;
	}
	tree.set(templateName,true);
	if(!this.doInstantiateTemplate(object,templateXML.get("template"),tree)) {
		return false;
	}
	object.deserialize(templateXML,false);
	return true;
}
com.pblabs.engine.serialization.TemplateManager.prototype.getXML = function(name,xmlType1,xmlType2) {
	var thing = this.doGetXML(name,xmlType1,xmlType2);
	return (thing != null?thing.xmlData:null);
}
com.pblabs.engine.serialization.TemplateManager.prototype.hasEntityCallback = function(name) {
	return this._things.exists(name);
}
com.pblabs.engine.serialization.TemplateManager.prototype.instantiateEntity = function(name,context) {
	null;
	var entity;
	try {
		if(this._things.exists(name)) {
			if(this._things.get(name).groupCallback != null) {
				throw ("Thing '" + name) + "' is a group callback!";
			}
			if(this._things.get(name).entityCallback != null) {
				var instantiated = this._things.get(name).entityCallback();
				if(instantiated == null) {
					throw "entityCallback returned NULL!";
				}
				null;
				return instantiated;
			}
		}
		var xml = this.getXML(name,"template","entity");
		if(xml == null) {
			com.pblabs.engine.debug.Log.error(("Unable to find a template or entity with the name " + name) + ".",{ fileName : "TemplateManager.hx", lineNumber : 198, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateEntity"});
			null;
			return null;
		}
		entity = this.instantiateEntityFromXML(xml,context);
		null;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				com.pblabs.engine.debug.Log.error((((("Failed instantiating '" + name) + "' due to :") + e.toString()) + "\n") + e.getStackTrace(),{ fileName : "TemplateManager.hx", lineNumber : 207, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateEntity"});
				entity = null;
				null;
			}
		}
	}
	return entity;
}
com.pblabs.engine.serialization.TemplateManager.prototype.instantiateEntityFromXML = function(xml,context) {
	com.pblabs.util.Preconditions.checkNotNull(xml);
	com.pblabs.util.Preconditions.checkNotNull(context);
	null;
	var entity;
	var name = null;
	try {
		name = xml.get("name");
		if(xml.getNodeName() == "template") {
			name = "";
		}
		entity = context.allocate(com.pblabs.engine.core.IEntity);
		haxe.Log.trace("entity made " + entity,{ fileName : "TemplateManager.hx", lineNumber : 280, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateEntityFromXML"});
		entity.initialize(name);
		entity.set_deferring(true);
		haxe.Log.trace("initialized",{ fileName : "TemplateManager.hx", lineNumber : 285, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateEntityFromXML"});
		if(!this.doInstantiateTemplate(entity,xml.get("template"),new com.pblabs.util.ds.maps.DynamicMap())) {
			haxe.Log.trace("false on doInstantiateTemplate",{ fileName : "TemplateManager.hx", lineNumber : 288, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateEntityFromXML"});
			entity.destroy();
			null;
			return null;
		}
		var serializer = context.getManager(com.pblabs.engine.serialization.Serializer);
		haxe.Log.trace("serializer=" + serializer,{ fileName : "TemplateManager.hx", lineNumber : 299, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateEntityFromXML"});
		serializer.deserialize(context,entity,xml);
		null;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				com.pblabs.engine.debug.Log.error((((("Failed instantiating '" + name) + "' due to :") + e) + "\n") + com.pblabs.engine.debug.Log.getStackTrace(),{ fileName : "TemplateManager.hx", lineNumber : 313, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateEntityFromXML"});
				entity = null;
				null;
			}
		}
	}
	return entity;
}
com.pblabs.engine.serialization.TemplateManager.prototype.instantiateGroup = function(context,name) {
	if(this._things.exists(name)) {
		com.pblabs.util.Preconditions.checkArgument(this._things.get(name).entityCallback == null,("Thing '" + name) + "' is an entity callback!");
		if(null != this._things.get(name).groupCallback) return this._things.get(name).groupCallback();
	}
	try {
		var group = this.doInstantiateGroup(name,new com.pblabs.util.ds.maps.DynamicMap(),context);
		if(null == group) {
			return null;
		}
		if(this.signalGroupLoaded.getIsListenedTo()) {
			this.signalGroupLoaded.dispatch(name,null,{ fileName : "TemplateManager.hx", lineNumber : 349, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateGroup"});
		}
		return group;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				com.pblabs.engine.debug.Log.error((("Failed to instantiate group '" + name) + "' due to :") + e.toString(),{ fileName : "TemplateManager.hx", lineNumber : 355, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "instantiateGroup"});
				return null;
			}
		}
	}
	throw "Somehow skipped both branches of group instantiation try/catch block!";
	return null;
}
com.pblabs.engine.serialization.TemplateManager.prototype.loadFile = function(filename,forceReload) {
	if(forceReload == null) forceReload = false;
	if(!forceReload && this.resourceManager.isResource(filename)) {
		return;
	}
	var rsrc = new com.pblabs.engine.resource.XMLResource(filename,com.pblabs.engine.resource.Source.url(filename));
	var self = this;
	var onLoaded = function() {
		self.signalLoaded.dispatch(rsrc,null,{ fileName : "TemplateManager.hx", lineNumber : 134, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "loadFile"});
	}
	var onError = function(e) {
		com.pblabs.engine.debug.Log.error((("Failed to load " + filename) + ", error=") + e,{ fileName : "TemplateManager.hx", lineNumber : 140, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "loadFile"});
		self.signalFailed.dispatch(rsrc,null,{ fileName : "TemplateManager.hx", lineNumber : 141, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "loadFile"});
	}
	rsrc.load(onLoaded,onError);
}
com.pblabs.engine.serialization.TemplateManager.prototype.loadInMemoryFile = function(data,sourceName) {
	var version = Std.parseInt(data.get("version"));
	var thingCount = 0;
	{ var $it0 = data.elements();
	while( $it0.hasNext() ) { var xml = $it0.next();
	{
		thingCount++;
		this.addXML(xml,sourceName,version);
	}
	}}
	com.pblabs.engine.debug.Log.info((("Loaded " + thingCount) + " from ") + sourceName,{ fileName : "TemplateManager.hx", lineNumber : 611, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "loadInMemoryFile"});
}
com.pblabs.engine.serialization.TemplateManager.prototype.makeEntity = function(context,entityName,params) {
	var entity = this.instantiateEntity(entityName,context);
	if(entity == null) {
		return null;
	}
	if(params == null) {
		return entity;
	}
	{ var $it0 = params.keys();
	while( $it0.hasNext() ) { var key = $it0.next();
	{
		if(key.charAt(0) == "@" && key.indexOf(".") == -1) {
			entity.addComponent((function($this) {
				var $r;
				var $t = params.get(key);
				if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)),key.substr(1));
		}
		else {
			entity.setProperty(new com.pblabs.engine.core.PropertyReference(key),params.get(key));
		}
	}
	}}
	if(entity.get_deferring()) {
		entity.set_deferring(false);
	}
	return entity;
}
com.pblabs.engine.serialization.TemplateManager.prototype.onFailed = function(resource) {
	this.signalFailed.dispatch(resource,null,{ fileName : "TemplateManager.hx", lineNumber : 631, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "onFailed"});
}
com.pblabs.engine.serialization.TemplateManager.prototype.onLoaded = function(resource) {
	var xml = resource.create();
	var version = Std.parseInt(xml.get("version"));
	var thingCount = 0;
	{ var $it0 = xml.elements();
	while( $it0.hasNext() ) { var childxml = $it0.next();
	{
		thingCount++;
		this.addXML(childxml,resource.get_name(),version);
	}
	}}
	com.pblabs.engine.debug.Log.info((("Loaded " + thingCount) + " from ") + resource.get_name(),{ fileName : "TemplateManager.hx", lineNumber : 624, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "onLoaded"});
}
com.pblabs.engine.serialization.TemplateManager.prototype.registerEntityCallback = function(name,callBack) {
	com.pblabs.util.Preconditions.checkNotNull(callBack,"Must pass a callback function!");
	com.pblabs.util.Preconditions.checkArgument(!this._things.exists(name),("Already have a thing registered under '" + name) + "'!");
	var newThing = new com.pblabs.engine.serialization.ThingReference();
	newThing.entityCallback = callBack;
	this._things.set(name,newThing);
}
com.pblabs.engine.serialization.TemplateManager.prototype.registerGroupCallback = function(name,callBack) {
	com.pblabs.util.Preconditions.checkNotNull(callBack,"Must pass a callback function!");
	com.pblabs.util.Preconditions.checkArgument(!this._things.exists(name),("Already have a thing registered under '" + name) + "'!");
	var newThing = new com.pblabs.engine.serialization.ThingReference();
	newThing.groupCallback = callBack;
	this._things.set(name,newThing);
}
com.pblabs.engine.serialization.TemplateManager.prototype.removeXML = function(identifier) {
	this._things.remove(identifier);
}
com.pblabs.engine.serialization.TemplateManager.prototype.resourceManager = null;
com.pblabs.engine.serialization.TemplateManager.prototype.serializer = null;
com.pblabs.engine.serialization.TemplateManager.prototype.setEntityType = function(value) {
	this._entityType = value;
}
com.pblabs.engine.serialization.TemplateManager.prototype.signalFailed = null;
com.pblabs.engine.serialization.TemplateManager.prototype.signalGroupLoaded = null;
com.pblabs.engine.serialization.TemplateManager.prototype.signalLoaded = null;
com.pblabs.engine.serialization.TemplateManager.prototype.unloadFile = function(filename) {
	this.removeXML(filename);
	this.resourceManager.unload(filename);
}
com.pblabs.engine.serialization.TemplateManager.prototype.unregisterEntityCallback = function(name) {
	if(!this._things.exists(name)) {
		com.pblabs.engine.debug.Log.warn(("No such template '" + name) + "'!",{ fileName : "TemplateManager.hx", lineNumber : 466, className : "com.pblabs.engine.serialization.TemplateManager", methodName : "unregisterEntityCallback"});
		return;
	}
	com.pblabs.util.Preconditions.checkNotNull(this._things.get(name).entityCallback,("Thing '" + name) + "' is not an entity callback!");
	this._things.remove(name);
}
com.pblabs.engine.serialization.TemplateManager.prototype.unregisterGroupCallback = function(name) {
	com.pblabs.util.Preconditions.checkArgument(this._things.exists(name),("No such thing '" + name) + "'!");
	com.pblabs.util.Preconditions.checkArgument(this._things.get(name).groupCallback != null,("Thing '" + name) + "' is not a group callback!");
	this._things.remove(name);
}
com.pblabs.engine.serialization.TemplateManager.prototype.__class__ = com.pblabs.engine.serialization.TemplateManager;
com.pblabs.engine.serialization.ThingReference = function(p) { if( p === $_ ) return; {
	this.version = 0;
	this.xmlData = null;
	this.entityCallback = null;
	this.groupCallback = null;
	this.identifier = "";
}}
com.pblabs.engine.serialization.ThingReference.__name__ = ["com","pblabs","engine","serialization","ThingReference"];
com.pblabs.engine.serialization.ThingReference.prototype.entityCallback = null;
com.pblabs.engine.serialization.ThingReference.prototype.groupCallback = null;
com.pblabs.engine.serialization.ThingReference.prototype.identifier = null;
com.pblabs.engine.serialization.ThingReference.prototype.version = null;
com.pblabs.engine.serialization.ThingReference.prototype.xmlData = null;
com.pblabs.engine.serialization.ThingReference.prototype.__class__ = com.pblabs.engine.serialization.ThingReference;
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	return haxe.Stack.makeStack("$s");
}
haxe.Stack.exceptionStack = function() {
	return haxe.Stack.makeStack("$e");
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			b.b[b.b.length] = "\nCalled from ";
			haxe.Stack.itemToString(b,s);
		}
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
	{
		b.b[b.b.length] = "a C function";
	}break;
	case 1:
	var m = $e[2];
	{
		b.b[b.b.length] = "module ";
		b.b[b.b.length] = m;
	}break;
	case 2:
	var line = $e[4], file = $e[3], s1 = $e[2];
	{
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (";
		}
		b.b[b.b.length] = file;
		b.b[b.b.length] = " line ";
		b.b[b.b.length] = line;
		if(s1 != null) b.b[b.b.length] = ")";
	}break;
	case 3:
	var meth = $e[3], cname = $e[2];
	{
		b.b[b.b.length] = cname;
		b.b[b.b.length] = ".";
		b.b[b.b.length] = meth;
	}break;
	case 4:
	var n = $e[2];
	{
		b.b[b.b.length] = "local function #";
		b.b[b.b.length] = n;
	}break;
	}
}
haxe.Stack.makeStack = function(s) {
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = [];
			}
		}
		return $r;
	}(this));
	var m = new Array();
	{
		var _g1 = 0, _g = a.length - (s == "$s"?2:0);
		while(_g1 < _g) {
			var i = _g1++;
			var d = a[i].split("::");
			m.unshift(haxe.StackItem.Method(d[0],d[1]));
		}
	}
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
IterTools = function() { }
IterTools.__name__ = ["IterTools"];
IterTools.chain = function(it,nonIterableTransform) {
	if(nonIterableTransform == null) nonIterableTransform = function(x) {
		return IterTools.repeat(x,1);
	}
	var itr = it.iterator();
	var cur_itr = null;
	var setCurItr = function() {
		var cur_val = itr.next();
		if(IterTools.isIterable(cur_val)) {
			cur_itr = cur_val.iterator();
		}
		else {
			cur_itr = nonIterableTransform(cur_val);
		}
	}
	while(cur_itr == null && itr.hasNext()) setCurItr();
	return { next : function() {
		return cur_itr.next();
	}, hasNext : function() {
		if(cur_itr.hasNext()) return true;
		else if(itr.hasNext()) {
			while((cur_itr == null && itr.hasNext()) || (cur_itr != null && !cur_itr.hasNext())) {
				setCurItr();
			}
			return cur_itr.hasNext();
		}
		else return false;
	}}
}
IterTools.longestLength = function(it) {
	var max_length = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		if(IterTools.isIterable(i)) {
			var count = Lambda.count(i);
			if(count > max_length) max_length = count;
		}
	}
	}}
	return max_length;
}
IterTools.shortestLength = function(it) {
	var max_length = null;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		if(IterTools.isIterable(i)) {
			var count = Lambda.count(i);
			if(max_length == null) max_length = count;
			else if(count < max_length) max_length = count;
		}
	}
	}}
	return max_length;
}
IterTools.starmap = function(o,func1,func2,func3,func4,func5,func6,args) {
	var func = null;
	{
		var _g = 0, _g1 = [func1,func2,func3,func4,func5,func6];
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i != null) func = i;
		}
	}
	if(func == null) {
		throw "Function was not specified correctly in starmap.  Make sure that the number of parameters for the function is less than six.";
	}
	var itr = args.iterator();
	return { next : function() {
		var cur_args = itr.next();
		var set_args;
		if(IterTools.isIterable(cur_args)) {
			set_args = ArrayTools.fastCreateArray(cur_args);
		}
		else {
			set_args = new Array();
			set_args.push(cur_args);
		}
		return func.apply(o,set_args);
	}, hasNext : function() {
		return itr.hasNext();
	}}
}
IterTools.zip = function(it,longest,nonIterableTransform,fill) {
	if(longest == null) longest = false;
	if(fill != null) longest = true;
	if(nonIterableTransform == null) nonIterableTransform = function(x) {
		throw "NonIterable element in \"it\" for zip";
		return null;
	}
	var list_itr = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		if(IterTools.isIterable(i)) {
			var itr = i.iterator();
			list_itr.add(itr);
		}
		else {
			var itr = nonIterableTransform(i);
			if(itr != null) {
				list_itr.add(itr);
			}
		}
	}
	}}
	var zipCheck = IterTools.zipCheckHelper(longest);
	var itr_list_itr = list_itr.iterator();
	return { next : function() {
		return IterTools.zipNextHelper(itr_list_itr,fill);
	}, hasNext : function() {
		if(!itr_list_itr.hasNext()) itr_list_itr = list_itr.iterator();
		return zipCheck(list_itr);
	}}
}
IterTools.zipCheckHelper = function(longest) {
	var fold_func;
	var start;
	if(longest) {
		fold_func = function(item,accum) {
			return accum || item.hasNext();
		}
		start = false;
	}
	else {
		fold_func = function(item,accum) {
			return accum && item.hasNext();
		}
		start = true;
	}
	var f = function(x) {
		return Lambda.fold(x,fold_func,start);
	}
	return f;
}
IterTools.zipNextHelper = function(itr,fill) {
	return { next : function() {
		var cur = itr.next();
		var val = Dynamic;
		if(cur.hasNext()) val = cur.next();
		else val = fill;
		return val;
	}, hasNext : function() {
		return itr.hasNext();
	}}
}
IterTools.combinator = function(it,k,i,idx) {
	var itr = it.iterator();
	var n = IterTools.getLength(null,it);
	if(idx == null) {
		if(i == null) {
			idx = ArrayTools.randomCombinationIndex(n,k);
		}
		else {
			idx = ArrayTools.combinationIndex(n,k,i);
		}
	}
	if(idx == null) {
		throw ("initialization error for " + { fileName : "IterTools.hx", lineNumber : 281, className : "IterTools", methodName : "combinator"}.methodName);
		return null;
	}
	var idx_itr = idx.iterator();
	var cur_index = 0;
	var cur_target = idx_itr.next();
	return { next : function() {
		cur_target = idx_itr.next();
		return itr.next();
	}, hasNext : function() {
		while(itr.hasNext() && cur_index < cur_target) {
			cur_index++;
			itr.next();
		}
		return itr.hasNext();
	}}
}
IterTools.permutator = function(it,i,idx) {
	var length = IterTools.getLength(null,it);
	if(idx == null) {
		if(i == null) {
			idx = ArrayTools.indexArray(length);
			ArrayTools.shuffle(idx);
		}
		else {
			idx = ArrayTools.permutationIndex(length,i);
		}
	}
	if(idx == null) {
		throw ("initialization error for " + { fileName : "IterTools.hx", lineNumber : 325, className : "IterTools", methodName : "permutator"}.methodName);
		return null;
	}
	var idx_ptr = idx.iterator();
	var itr = it.iterator();
	var cur_idx = 0;
	return { next : function() {
		return itr.next();
	}, hasNext : function() {
		var next_idx = idx_ptr.next();
		if(next_idx == null) return false;
		else if(next_idx > cur_idx) {
			cur_idx++;
			itr = IterTools.skip(itr,next_idx - cur_idx);
		}
		else if(next_idx <= cur_idx) {
			itr = IterTools.skip(it.iterator(),next_idx);
		}
		return itr.hasNext();
	}}
}
IterTools.skip = function(itr,count) {
	if(count < 0) {
		throw ("initialization error for " + { fileName : "IterTools.hx", lineNumber : 354, className : "IterTools", methodName : "skip"}.methodName);
		return null;
	}
	{
		var _g = 0;
		while(_g < count) {
			var i = _g++;
			if(!itr.hasNext()) return itr;
			itr.next();
		}
	}
	return itr;
}
IterTools.emptyIterator = function(e) {
	return { next : function() {
		return null;
	}, hasNext : function() {
		return false;
	}}
}
IterTools.range = function(from,to) {
	if(from == null) from = 0;
	var by = 1;
	if(from > to) by *= -1;
	var set_from = from;
	return { next : function() {
		var return_val = from;
		from += by;
		return return_val;
	}, hasNext : function() {
		return (to == null || from - to != 0);
	}}
}
IterTools.fieldItr = function(it,get_field) {
	var itr = it.iterator();
	return { next : function() {
		return Reflect.field(itr.next(),get_field);
	}, hasNext : function() {
		return itr.hasNext();
	}}
}
IterTools.dropWhile = function(it,predicate) {
	var itr = it.iterator();
	var drop = true;
	var end = false;
	var cur_val = it.iterator().next();
	var alternate;
	if(predicate == null) predicate = $closure(IterTools,"isNotNull");
	return { next : function() {
		return cur_val;
	}, hasNext : function() {
		if(drop) {
			while(drop) {
				if(!itr.hasNext()) return false;
				cur_val = itr.next();
				if(predicate(cur_val)) drop = false;
			}
			return true;
		}
		else {
			var one_more = itr.hasNext();
			cur_val = itr.next();
			return one_more;
		}
	}}
}
IterTools.slice = function(it,start,end,step) {
	if(step == null) step = 1;
	if(start == null) start = 0;
	if(start < 0 || end < 0 || step < 0 || start > end) {
		throw ("initialization error for " + { fileName : "IterTools.hx", lineNumber : 469, className : "IterTools", methodName : "slice"}.methodName);
		return null;
	}
	var itr = it.iterator();
	var cur_init = 0;
	while(cur_init < start && itr.hasNext()) {
		cur_init++;
		itr.next();
	}
	return { next : function() {
		cur_init++;
		return itr.next();
	}, hasNext : function() {
		if(!itr.hasNext()) return false;
		else if(end != null && cur_init > end) return false;
		else {
			var cur_step = step;
			while(cur_step > 1 && itr.hasNext()) {
				itr.next();
				cur_step--;
			}
		}
		return itr.hasNext();
	}}
}
IterTools.cycle = function(it,times) {
	var store_arr = new Array();
	var store_complete = false;
	if(times < 0) {
		throw ("initialization error for " + { fileName : "IterTools.hx", lineNumber : 498, className : "IterTools", methodName : "cycle"}.methodName);
		return null;
	}
	var itr = it.iterator();
	var count = 0;
	return { next : function() {
		return itr.next();
	}, hasNext : function() {
		if(count >= times) return false;
		else if(itr.hasNext()) return true;
		else {
			count++;
			if(count >= times) return false;
			else itr = it.iterator();
			return itr.hasNext();
		}
	}}
}
IterTools.repeat = function(obj,times) {
	if(times < 0) {
		throw ("initialization error for " + { fileName : "IterTools.hx", lineNumber : 525, className : "IterTools", methodName : "repeat"}.methodName);
		return null;
	}
	var count = 0;
	return { next : function() {
		count++;
		return obj;
	}, hasNext : function() {
		return (times == null || count < times);
	}}
}
IterTools.takeWhile = function(it,predicate) {
	var itr = it.iterator();
	var cur_val = itr.next();
	if(predicate == null) predicate = $closure(IterTools,"isNotNull");
	return { next : function() {
		var return_val = cur_val;
		cur_val = itr.next();
		return return_val;
	}, hasNext : function() {
		if(!itr.hasNext()) return false;
		else if(!predicate(cur_val)) return false;
		else return true;
	}}
}
IterTools.filter = function(it,transformer) {
	var itr = it.iterator();
	var cur_val = itr.next();
	if(transformer == null) transformer = $closure(IterTools,"isNotNull");
	return { next : function() {
		var return_val = cur_val;
		cur_val = itr.next();
		return return_val;
	}, hasNext : function() {
		if(!itr.hasNext()) return false;
		else if(cur_val != null && !transformer(cur_val)) return false;
		else return true;
	}}
}
IterTools.count = function(start) {
	if(start == null) start = 0;
	return { next : function() {
		return start++;
	}, hasNext : function() {
		return start < -2147483648;
	}}
}
IterTools.groupBy = function(it,transformer) {
	if(transformer == null) transformer = $closure(IterTools,"identity");
	var itr = it.iterator();
	var cur_value = itr.next();
	var group = { key : null, next : function() {
		return null;
	}, hasNext : function() {
		return false;
	}}
	return { next : function() {
		var this_key = transformer(cur_value);
		var this_next = function() {
			var return_value = cur_value;
			cur_value = itr.next();
			return return_value;
		}
		var this_hasNext = function() {
			if(!itr.hasNext()) return false;
			if(this_key != transformer(cur_value)) return false;
			else return true;
		}
		group = { key : this_key, next : this_next, hasNext : this_hasNext}
		return group;
	}, hasNext : function() {
		while(group.hasNext()) group.next();
		return itr.hasNext();
	}}
}
IterTools.map = function(it,transform) {
	var itr = it.iterator();
	return { next : function() {
		return transform(itr.next());
	}, hasNext : function() {
		return itr.hasNext();
	}}
}
IterTools.mapIter = function(itr,transform) {
	return { next : function() {
		return transform(itr.next());
	}, hasNext : function() {
		return itr.hasNext();
	}}
}
IterTools.mapi = function(it,transform) {
	var itr = it.iterator();
	var cnt = 0;
	return { next : function() {
		return transform(cnt++,itr.next());
	}, hasNext : function() {
		return itr.hasNext();
	}}
}
IterTools.getLength = function(itl,it) {
	if(itl != null) return itl.length;
	else if(it != null) return Lambda.count(it);
	else return null;
}
IterTools.itb = function(itr,store) {
	if(store == null) store = false;
	if(store) return new StoredIterator(itr);
	else return { iterator : function() {
		return itr;
	}}
}
IterTools.isIterable = function(d) {
	return (d != null && (Reflect.hasField(d,"iterator") || Std["is"](d,Array)));
}
IterTools.unfold = function(seed,transformer,incrementor,predicate) {
	if(predicate == null) predicate = $closure(IterTools,"isNotNull");
	var cur_val = seed;
	return { hasNext : function() {
		return predicate(cur_val);
	}, next : function() {
		var ret_val = transformer(seed);
		cur_val = incrementor(cur_val);
		return ret_val;
	}}
}
IterTools.isNotNull = function(e) {
	return e != null;
}
IterTools.identity = function(e) {
	return e;
}
IterTools.greaterThanZero = function(e) {
	return e > 0;
}
IterTools.getHere = function(pos) {
	return pos;
}
IterTools.prototype.__class__ = IterTools;
StoredIterator = function(itr) { if( itr === $_ ) return; {
	this.stored_arr = new Array();
	this.itr = itr;
	if(!itr.hasNext()) {
		this.started = true;
		this.finished = true;
	}
	else {
		this.started = false;
		this.finished = false;
	}
}}
StoredIterator.__name__ = ["StoredIterator"];
StoredIterator.prototype.finished = null;
StoredIterator.prototype.isFinished = function() {
	return this.started && this.finished;
}
StoredIterator.prototype.isStarted = function() {
	return this.started;
}
StoredIterator.prototype.iterator = function() {
	if(this.started && !this.finished && !this.itr.hasNext()) this.finished = true;
	if(this.started && !this.finished && this.itr.hasNext()) {
		throw "Second StoredIterator.iterator() called before Iterator argument was completely stored";
		return null;
	}
	else if(this.finished) return this.stored_arr.iterator();
	else {
		this.started = true;
		return { itr : this.itr, stored_arr : this.stored_arr, hasNext : function() {
			return this.itr.hasNext();
		}, next : function() {
			var ret_val = this.itr.next();
			this.stored_arr.push(ret_val);
			return ret_val;
		}}
	}
}
StoredIterator.prototype.itr = null;
StoredIterator.prototype.started = null;
StoredIterator.prototype.stored_arr = null;
StoredIterator.prototype.toString = function() {
	if(this.started && !this.finished && this.itr.hasNext()) {
		throw "StoredIterator.toString() called before Iterator argument was completely stored";
		return null;
	}
	else { var $it0 = this.itr;
	while( $it0.hasNext() ) { var i = $it0.next();
	this.stored_arr.push(i);
	}}
	return this.stored_arr.toString();
}
StoredIterator.prototype.__class__ = StoredIterator;
com.pblabs.util.ds.multimaps.ArrayMultiMap = function(keyClass) { if( keyClass === $_ ) return; {
	com.pblabs.util.ds.multimaps.AbstractMultiMap.apply(this,[]);
	this._map = com.pblabs.util.ds.Maps.newHashMap(keyClass);
}}
com.pblabs.util.ds.multimaps.ArrayMultiMap.__name__ = ["com","pblabs","util","ds","multimaps","ArrayMultiMap"];
com.pblabs.util.ds.multimaps.ArrayMultiMap.__super__ = com.pblabs.util.ds.multimaps.AbstractMultiMap;
for(var k in com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype ) com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype[k] = com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype[k];
com.pblabs.util.ds.multimaps.ArrayMultiMap.create = function(keyClass) {
	return new com.pblabs.util.ds.multimaps.ArrayMultiMap(keyClass);
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype._map = null;
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.clear = function() {
	com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.clear.apply(this,[]);
	{ var $it0 = this._map.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	{
		this._map.remove(k);
	}
	}}
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.exists = function(key) {
	return this._map.exists(key) && this._map.get(key).length > 0;
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.existsEntry = function(key,value) {
	var arr = this._map.get(key);
	if(arr == null) {
		return false;
	}
	return com.pblabs.util.ArrayUtil.exists(arr,value);
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.get = function(key) {
	return this._map.get(key);
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.keys = function() {
	return this._map.keys();
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.remove = function(key) {
	var arr = this._map.get(key);
	this._size -= (arr == null?0:arr.length);
	return this._map.remove(key);
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.removeEntry = function(key,value) {
	var arr = this._map.get(key);
	if(arr == null) {
		return false;
	}
	var present = arr.remove(value);
	if(present) {
		this._size--;
	}
	if(arr.length == 0) {
		this._map.remove(key);
	}
	return present;
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.set = function(key,value) {
	com.pblabs.util.ds.multimaps.AbstractMultiMap.prototype.set.apply(this,[key,value]);
	var arr = this._map.get(key);
	if(arr == null) {
		arr = new Array();
		this._map.set(key,arr);
	}
	arr.push(value);
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.setAll = function(key,values) {
	var arr = this._map.get(key);
	if(arr == null) {
		if(Std["is"](values,Array)) {
			this._map.set(key,values);
			return;
		}
		else {
			arr = new Array();
			this._map.set(key,arr);
		}
	}
	{ var $it0 = values.iterator();
	while( $it0.hasNext() ) { var v = $it0.next();
	{
		arr.push(v);
	}
	}}
}
com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype.__class__ = com.pblabs.util.ds.multimaps.ArrayMultiMap;
com.pblabs.util.ds.multimaps.ArrayMultiMap.__interfaces__ = [com.pblabs.util.ds.MultiMap];
com.pblabs.util.ds.maps.HashableMap = function(p) { if( p === $_ ) return; {
	com.pblabs.util.ds.maps.KeyListMap.apply(this,[]);
	this._intMap = new IntHash();
}}
com.pblabs.util.ds.maps.HashableMap.__name__ = ["com","pblabs","util","ds","maps","HashableMap"];
com.pblabs.util.ds.maps.HashableMap.__super__ = com.pblabs.util.ds.maps.KeyListMap;
for(var k in com.pblabs.util.ds.maps.KeyListMap.prototype ) com.pblabs.util.ds.maps.HashableMap.prototype[k] = com.pblabs.util.ds.maps.KeyListMap.prototype[k];
com.pblabs.util.ds.maps.HashableMap.prototype._intMap = null;
com.pblabs.util.ds.maps.HashableMap.prototype.clear = function() {
	com.pblabs.util.ds.maps.KeyListMap.prototype.clear.apply(this,[]);
	this._intMap = new IntHash();
}
com.pblabs.util.ds.maps.HashableMap.prototype.exists = function(key) {
	return this._intMap.exists(this.getHash(key));
}
com.pblabs.util.ds.maps.HashableMap.prototype.get = function(key) {
	return this._intMap.get(this.getHash(key));
}
com.pblabs.util.ds.maps.HashableMap.prototype.getHash = function(key) {
	var hashable = (function($this) {
		var $r;
		var $t = key;
		if(Std["is"]($t,com.pblabs.util.ds.Hashable)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	return hashable.hashCode();
}
com.pblabs.util.ds.maps.HashableMap.prototype.iterator = function() {
	return this._intMap.iterator();
}
com.pblabs.util.ds.maps.HashableMap.prototype.remove = function(key) {
	var hash = this.getHash(key);
	if(!this._intMap.exists(hash)) {
		return false;
	}
	com.pblabs.util.ds.maps.KeyListMap.prototype.remove.apply(this,[key]);
	var oldVal = this._intMap.get(hash);
	this._intMap.remove(hash);
	return oldVal != null;
}
com.pblabs.util.ds.maps.HashableMap.prototype.set = function(key,value) {
	var hash = this.getHash(key);
	if(!this._intMap.exists(hash)) {
		com.pblabs.util.ds.maps.KeyListMap.prototype.set.apply(this,[key,value]);
	}
	this._intMap.set(hash,value);
}
com.pblabs.util.ds.maps.HashableMap.prototype.__class__ = com.pblabs.util.ds.maps.HashableMap;
com.pblabs.util.ds.maps.HashableMap.__interfaces__ = [com.pblabs.util.ds.Map];
ArrayTools = function() { }
ArrayTools.__name__ = ["ArrayTools"];
ArrayTools.permutationIndex = function(n,k) {
	haxe.Log.trace((n + " ") + k,{ fileName : "ArrayTools.hx", lineNumber : 52, className : "ArrayTools", methodName : "permutationIndex"});
	var fac = ArrayTools.factoradic(n,k);
	if(fac == null) return null;
	var perm = new Array();
	{
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			fac[i] += 1;
		}
	}
	{
		var _g1 = 1, _g = n + 1;
		while(_g1 < _g) {
			var j = _g1++;
			var i = n - j;
			perm[i] = fac[i];
			{
				var _g2 = (i + 1);
				while(_g2 < n) {
					var k1 = _g2++;
					if(perm[k1] >= perm[i]) ++perm[k1];
				}
			}
		}
	}
	{
		var _g = 0;
		while(_g < n) {
			var k1 = _g++;
			--perm[k1];
		}
	}
	return perm;
}
ArrayTools.permute = function(arr,i,idx) {
	if(arr == null) return;
	var length = arr.length;
	if(idx == null) {
		if(i == null) {
			ArrayTools.shuffle(arr);
			return;
		}
		else {
			idx = ArrayTools.permutationIndex(length,i);
		}
	}
	{
		var _g = 0;
		while(_g < length) {
			var j = _g++;
			if(idx[j] <= j) continue;
			var tmp = arr[j];
			arr[j] = arr[idx[j]];
			arr[idx[j]] = tmp;
		}
	}
}
ArrayTools.fastCreateArray = function(itl,it) {
	if(itl != null) {
		var r = new Array();
		var last_index = itl.length;
		var itr = itl.iterator();
		{
			var _g = 0;
			while(_g < last_index) {
				var i = _g++;
				r[i] = itr.next();
			}
		}
		return r;
	}
	else return Lambda.array(it);
}
ArrayTools.shuffle = function(arr) {
	var n = arr.length;
	while(n > 1) {
		var k = Std.random(n);
		n--;
		var temp = arr[n];
		arr[n] = arr[k];
		arr[k] = temp;
	}
}
ArrayTools.concat = function(arr1,arr2) {
	arr1 = arr1.concat(arr2);
}
ArrayTools.permutator = function(arr,i,idx) {
	if(arr == null) return null;
	if(idx == null) {
		if(i == null) {
			idx = ArrayTools.indexArray(arr.length);
			ArrayTools.shuffle(idx);
			return ArrayTools.permutator(arr,null,idx);
		}
		else {
			idx = ArrayTools.permutationIndex(arr.length,i);
		}
	}
	var current = 0;
	return { next : function() {
		return arr[idx[current++]];
	}, hasNext : function() {
		return current < arr.length;
	}}
}
ArrayTools.indexArray = function(n) {
	var idx = new Array();
	{
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			idx[i] = i;
		}
	}
	return idx;
}
ArrayTools.permutators = function(arr) {
	var idx = ArrayTools.indexArray(arr.length);
	var cur_idx = idx.copy();
	var first = true;
	return { next : function() {
		return (ArrayTools.permutator(arr,null,cur_idx));
	}, hasNext : function() {
		if(first) {
			first = false;
			return true;
		}
		else if(ArrayTools.equivalent(idx,cur_idx)) {
			return false;
		}
		else {
			ArrayTools.nextPermutationIndex(cur_idx);
			return true;
		}
	}}
}
ArrayTools.allCombinators = function(arr) {
	var max_index = arr.length;
	var choose_index = 1;
	return { next : function() {
		return (ArrayTools.combinators(arr,choose_index++));
	}, hasNext : function() {
		return choose_index <= max_index;
	}}
}
ArrayTools.combinators = function(arr,k) {
	var idx = ArrayTools.indexArray(k);
	var cur_idx = idx.copy();
	var cur_index = 0;
	var first = true;
	return { next : function() {
		return (ArrayTools.combinator(arr,k,null,cur_idx));
	}, hasNext : function() {
		if(first) return true;
		else if(ArrayTools.equivalent(idx,cur_idx)) return false;
		else {
			ArrayTools.nextCombinationIndex(cur_idx,arr.length);
			return true;
		}
	}}
}
ArrayTools.combinator = function(arr,k,i,idx) {
	if(arr == null) return null;
	var length = arr.length;
	if(idx == null) {
		if(i == null) {
			idx = ArrayTools.randomCombinationIndex(arr.length,k);
			return ArrayTools.combinator(arr,k,null,idx);
		}
		else {
			idx = ArrayTools.combinationIndex(arr.length,k,i);
		}
	}
	if(idx == null) {
		throw ("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 273, className : "ArrayTools", methodName : "combinator"}.methodName);
		return null;
	}
	var current = 0;
	return { next : function() {
		return arr[idx[current++]];
	}, hasNext : function() {
		return current < k;
	}}
}
ArrayTools.randomCombinationIndex = function(n,k) {
	if(k < 1) {
		throw "invalid k value";
		return null;
	}
	var idx_arr = new Array();
	{
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			idx_arr[i] = i;
		}
	}
	var k_arr = new Array();
	{
		var _g = 0;
		while(_g < k) {
			var i = _g++;
			var idx = Std.random(idx_arr.length);
			var tmp = idx_arr[idx];
			idx_arr[idx] = idx_arr[idx_arr.length - 1];
			idx_arr[idx_arr.length - 1] = tmp;
			k_arr.push(idx_arr.pop());
		}
	}
	k_arr.sort(function(x,y) {
		return x - y;
	});
	return k_arr;
}
ArrayTools.combinationIndex = function(n,k,i) {
	var dual = (ArrayTools.choose(n,k) - 1) - i;
	if(dual < 0) {
		throw ("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 325, className : "ArrayTools", methodName : "combinationIndex"}.methodName);
		return null;
	}
	var comb_arr = ArrayTools.combinadic(n,k,dual);
	var comb_len = comb_arr.length;
	{
		var _g = 0;
		while(_g < comb_len) {
			var i1 = _g++;
			comb_arr[i1] = (n - comb_arr[i1]) - 1;
		}
	}
	return comb_arr;
}
ArrayTools.combination = function(arr,k,i,idx) {
	if(arr == null) return null;
	var length = arr.length;
	var idx1 = new Array();
	if(idx1 == null) {
		if(i == null) {
			idx1 = ArrayTools.randomCombinationIndex(arr.length,k);
		}
		else {
			idx1 = ArrayTools.combinationIndex(arr.length,k,i);
		}
	}
	if(idx1 == null) {
		throw ("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 361, className : "ArrayTools", methodName : "combination"}.methodName);
		return null;
	}
	var r = new Array();
	var idx_length = idx1.length;
	{
		var _g = 0;
		while(_g < idx_length) {
			var j = _g++;
			r[j] = arr[idx1[j]];
		}
	}
	return r;
}
ArrayTools.combinations = function(arr,k) {
	var length = arr.length;
	var idx = ArrayTools.indexArray(k);
	var cur_idx = idx.copy();
	var done = false;
	var r = new Array();
	while(!done) {
		r.push(ArrayTools.combination(arr,k,null,cur_idx));
		ArrayTools.nextCombinationIndex(cur_idx,k);
		if(ArrayTools.equivalent(idx,cur_idx)) done = true;
	}
	return r;
}
ArrayTools.nextCombinationIndex = function(idx,n) {
	var cur_last_idx = idx.length - 1;
	var done = false;
	while(!done) {
		var ceiling = n;
		if(cur_last_idx != idx.length - 1) ceiling = idx[cur_last_idx + 1];
		if(idx[cur_last_idx] < ceiling - 1) {
			idx[cur_last_idx] += 1;
			{
				var _g1 = cur_last_idx + 1, _g = idx.length;
				while(_g1 < _g) {
					var i = _g1++;
					idx[i] = idx[i - 1] + 1;
				}
			}
			done = true;
		}
		else if(cur_last_idx != 0) cur_last_idx--;
		else {
			idx = ArrayTools.indexArray(idx.length);
			done = true;
		}
	}
}
ArrayTools.nextPermutationIndex = function(idx) {
	var cur_last_idx = idx.length - 1;
	var done = false;
	var itr = IterTools.range(idx.length - 2,-1);
	{ var $it0 = itr;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		if(idx[i] < idx[i + 1]) {
			var smallest = i + 1;
			{
				var _g1 = (i + 1), _g = idx.length;
				while(_g1 < _g) {
					var j = _g1++;
					if(idx[smallest] > idx[j] && idx[j] > idx[i]) smallest = j;
				}
			}
			var tmp = idx[i];
			idx[i] = idx[smallest];
			idx[smallest] = tmp;
			var sort_these = idx.splice(i + 1,idx.length - i);
			sort_these.sort(function(x,y) {
				return x - y;
			});
			{
				var _g = 0;
				while(_g < sort_these.length) {
					var i1 = sort_these[_g];
					++_g;
					idx.push(i1);
				}
			}
			break;
		}
		else if(i == 0) {
			idx.sort(function(x,y) {
				return x - y;
			});
		}
	}
	}}
}
ArrayTools.equivalent = function(arr1,arr2) {
	if(arr1.length != arr2.length) return false;
	{
		var _g1 = 0, _g = arr1.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(arr1[i] != arr2[i]) return false;
		}
	}
	return true;
}
ArrayTools.combinadic = function(n,k,i) {
	if(i > ArrayTools.choose(n,k)) {
		throw (("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 467, className : "ArrayTools", methodName : "combinadic"}.methodName) + ": Index \"i\" is greater than \"n\" choose \"k\"");
		return null;
	}
	else {
		var ans = new Array();
		var a = n;
		var b = k;
		var x = i;
		{
			var _g = 0;
			while(_g < k) {
				var i1 = _g++;
				ans[i1] = ArrayTools.largestN(n,b,x);
				x = x - ArrayTools.choose(ans[i1],b);
				a = ans[i1];
				b -= 1;
			}
		}
		return ans;
	}
}
ArrayTools.deepCopy = function(arr) {
	if(arr.length > 0 && Std["is"](arr[0],Array)) {
		var r = new Array();
		{
			var _g1 = 0, _g = arr.length;
			while(_g1 < _g) {
				var i = _g1++;
				r.push(ArrayTools.deepCopy(arr[i]));
			}
		}
		return r;
	}
	else {
		return arr.copy();
	}
}
ArrayTools.largestN = function(max_n,k,x) {
	if(x < 0 || max_n < 0 || k < 0) {
		throw ("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 518, className : "ArrayTools", methodName : "largestN"}.methodName);
		return null;
	}
	else {
		var n = max_n - 1;
		while(ArrayTools.choose(n,k) > x) {
			--n;
		}
		return n;
	}
}
ArrayTools.factoradic = function(n,k) {
	if(n < 0 || k < 0) {
		throw ("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 542, className : "ArrayTools", methodName : "factoradic"}.methodName);
		return null;
	}
	var factoradic = new Array();
	factoradic[n - 1] = 0;
	{
		var _g1 = 1, _g = n + 1;
		while(_g1 < _g) {
			var j = _g1++;
			haxe.Log.trace((k + " ") + j,{ fileName : "ArrayTools.hx", lineNumber : 548, className : "ArrayTools", methodName : "factoradic"});
			factoradic[n - j] = k % j;
			k = Std["int"](k / j);
		}
	}
	return factoradic;
}
ArrayTools.choose = function(n,k) {
	if(n < 0 || k < 0) {
		throw ("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 568, className : "ArrayTools", methodName : "choose"}.methodName);
		return null;
	}
	else if(n < k) return 0;
	else if(n == k) return 1;
	else {
		var result = 1;
		{
			var _g1 = k + 1, _g = n + 1;
			while(_g1 < _g) {
				var i = _g1++;
				if(i > n - k) null;
				result *= i;
			}
		}
		return Math.floor(result / ArrayTools.factorial(n - k));
	}
}
ArrayTools.factorial = function(n) {
	if(n < 0) {
		throw ("initialization error for " + { fileName : "ArrayTools.hx", lineNumber : 593, className : "ArrayTools", methodName : "factorial"}.methodName);
		return null;
	}
	else {
		var result = 1;
		{
			var _g1 = 2, _g = n + 1;
			while(_g1 < _g) {
				var i = _g1++;
				result *= i;
			}
		}
		return result;
	}
}
ArrayTools.swapAndPop = function(arr,e) {
	var tmp = null;
	{
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(arr[i] == e) {
				var tmp1 = arr[arr.length - 1];
				arr[arr.length - 1] = arr[i];
				arr[i] = tmp1;
				tmp1 = arr.pop();
				return true;
				break;
			}
		}
	}
	return false;
}
ArrayTools.getHere = function(pos) {
	return pos;
}
ArrayTools.prototype.__class__ = ArrayTools;
Demo = function(p) { if( p === $_ ) return; {
	com.pblabs.util.Log.setupPBGameLog();
	com.pblabs.util.Log.setLevel("",com.pblabs.util.Log.WARNING);
	this.game = new com.pblabs.engine.core.PBGame();
	this.game.getManager(com.pblabs.components.scene.SceneView).set_layerId("haxe:screencss");
	this.game.registerManager(com.pblabs.components.input.MouseInputManager,new com.pblabs.components.input.MouseInputManager());
	this.game.registerManager(com.pblabs.components.input.TouchInputManager,new com.pblabs.components.input.TouchInputManager());
	this.game.registerManager(com.pblabs.components.input.GestureInputManager,new com.pblabs.components.input.GestureInputManager());
	this.game.getManager(com.pblabs.engine.resource.IResourceManager).addResource(new com.pblabs.engine.resource.ImageResource("face",com.pblabs.engine.resource.Source.url("../rsrc/face.png")));
	this.game.registerManager(com.pblabs.components.input.InputManager,new com.pblabs.components.input.InputManager());
	this.game.getManager(com.pblabs.engine.resource.IResourceManager).load($closure(this,"startGame"),function(e) {
		haxe.Log.trace("Error loading: " + e,{ fileName : "Demo.hx", lineNumber : 78, className : "Demo", methodName : "new"});
	});
}}
Demo.__name__ = ["Demo"];
Demo.main = function() {
	new Demo();
}
Demo.prototype.createBlob = function(name,layer) {
	var context = layer.get_context();
	var man = com.pblabs.components.scene.SceneUtil.createBaseSceneEntity(context,name);
	var c = context.allocate(com.pblabs.components.scene.ImageComponent);
	c.resource = context.getManager(com.pblabs.engine.resource.IResourceManager).getResource("face");
	c.parentProperty = com.pblabs.engine.util.PBUtil.entityProp(layer);
	man.addComponent(c);
	man.set_deferring(false);
	return man;
}
Demo.prototype.game = null;
Demo.prototype.randMove = function(e,continuous) {
	var sceneView = e.get_context().getManager(com.pblabs.components.scene.SceneView);
	var scene = e.lookupComponent(com.pblabs.components.scene.BaseScene2DComponent).parent.parent;
	var serial = new com.pblabs.components.tasks.SerialTask();
	var parallel = new com.pblabs.components.tasks.ParallelTask();
	var time = Math.random() * 5;
	time = Math.max(time,2);
	var outpoint = new com.pblabs.geom.Vector2();
	com.pblabs.components.scene.SceneUtil.calculateOutPoint(outpoint,scene.sceneAlignment,sceneView.get_width(),sceneView.get_height());
	var randX = com.pblabs.util.Rand.nextFloatInRange(-outpoint.x,-outpoint.x + sceneView.get_width());
	var randY = com.pblabs.util.Rand.nextFloatInRange(-outpoint.y,-outpoint.y + sceneView.get_height());
	parallel.addTask(com.pblabs.components.tasks.LocationTask.CreateSmooth(randX,randY,time));
	parallel.addTask(com.pblabs.components.tasks.AngleTask.CreateLinear(Math.random() * 6,time));
	serial.addTask(parallel);
	var self = this;
	if(continuous) {
		serial.addTask(new com.pblabs.components.tasks.FunctionTask(function() {
			self.randMove(e,continuous);
		}));
	}
	com.pblabs.components.tasks.TaskUtil.addTask(e,serial);
}
Demo.prototype.startGame = function() {
	var input = this.game.getManager(com.pblabs.components.input.InputManager);
	var context = this.game.allocate(com.pblabs.engine.core.PBContext);
	this.game.pushContext(context);
	var gamescene = com.pblabs.engine.util.PBUtil.addSingletonComponent(context,com.pblabs.components.scene.SceneUtil.getPlatformSceneManagerClass());
	var layerCls = com.pblabs.components.scene.SceneUtil.getBasePlatformLayerClass();
	var lowerLayer = gamescene.addLayer(layerCls,"lowerLayer");
	lowerLayer.set_parallaxFactor(0.5);
	var layer = gamescene.addLayer(layerCls,"defaultLayer");
	var man = com.pblabs.components.scene.SceneUtil.createBaseSceneEntity(context,"man");
	var c = context.allocate(com.pblabs.components.scene.ImageComponent);
	c.resource = context.getManager(com.pblabs.engine.resource.IResourceManager).getResource("face");
	c.parentProperty = com.pblabs.engine.util.PBUtil.entityProp(layer);
	man.addComponent(c);
	var manmouse = context.allocate(com.pblabs.components.input.MouseInputComponent);
	manmouse.isRotatable = true;
	manmouse.isTranslatable = true;
	manmouse.isScalable = false;
	man.addComponent(manmouse);
	man.set_deferring(false);
	var serial = new com.pblabs.components.tasks.SerialTask();
	var outpoint = new com.pblabs.geom.Vector2();
	var sceneView = gamescene.get_sceneView();
	com.pblabs.components.scene.SceneUtil.calculateOutPoint(outpoint,gamescene.sceneAlignment,sceneView.get_width(),sceneView.get_height());
	var rect = new com.pblabs.geom.Rectangle(-outpoint.x,-outpoint.y,sceneView.get_width(),sceneView.get_height());
	serial.addTask(com.pblabs.components.tasks.LocationTask.CreateEaseOut(rect.get_left(),rect.get_top(),3));
	serial.addTask(com.pblabs.components.tasks.LocationTask.CreateEaseOut(rect.get_right(),rect.get_top(),3));
	serial.addTask(com.pblabs.components.tasks.LocationTask.CreateEaseOut(rect.get_right(),rect.get_bottom(),3));
	serial.addTask(com.pblabs.components.tasks.LocationTask.CreateEaseOut(rect.get_left(),rect.get_bottom(),3));
	com.pblabs.components.tasks.TaskUtil.addTask(man,serial);
	com.pblabs.components.scene.SceneUtil.setAngle(man,0.4);
	com.pblabs.components.tasks.TaskUtil.addTask(man,com.pblabs.components.tasks.AngleTask.CreateLinear(3,4));
	var men = 10;
	{
		var _g = 0;
		while(_g < men) {
			var i = _g++;
			this.randMove(this.createBlob("man " + i,layer),com.pblabs.util.Rand.nextBoolean());
		}
	}
	{
		var _g = 0;
		while(_g < men) {
			var i = _g++;
			this.randMove(this.createBlob("man lower" + i,lowerLayer),com.pblabs.util.Rand.nextBoolean());
		}
	}
	var panner2 = context.registerManager(com.pblabs.components.input.PanManager);
	var scenecontrol = context.allocate(com.pblabs.components.input.SceneViewControl);
	scenecontrol.backgroundSceneComponent = null;
	scenecontrol.sceneProperty = com.pblabs.engine.util.PBUtil.entityProp(gamescene);
	scenecontrol.pauseProcessManagerOnPan = false;
	var pane = context.allocate(com.pblabs.engine.core.IEntity);
	pane.initialize("panner");
	pane.addComponent(scenecontrol);
	pane.set_deferring(false);
}
Demo.prototype.__class__ = Demo;
com.pblabs.util.LogTarget = function() { }
com.pblabs.util.LogTarget.__name__ = ["com","pblabs","util","LogTarget"];
com.pblabs.util.LogTarget.prototype.log = null;
com.pblabs.util.LogTarget.prototype.__class__ = com.pblabs.util.LogTarget;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
com.pblabs.engine.core.NameManager = function(p) { if( p === $_ ) return; {
	this._objects = com.pblabs.util.ds.Maps.newHashMap(String);
}}
com.pblabs.engine.core.NameManager.__name__ = ["com","pblabs","engine","core","NameManager"];
com.pblabs.engine.core.NameManager.prototype._objects = null;
com.pblabs.engine.core.NameManager.prototype.add = function(object) {
	com.pblabs.util.Preconditions.checkNotNull(object);
	if(object.get_name() != null && object.get_name() != "") {
		com.pblabs.engine.debug.Log.debug("Adding named object: " + object.get_name(),{ fileName : "NameManager.hx", lineNumber : 49, className : "com.pblabs.engine.core.NameManager", methodName : "add"});
		if(this._objects.get(object.get_name()) != null) {
			com.pblabs.engine.debug.Log.warn("An object with the name already exists: " + object.get_name(),{ fileName : "NameManager.hx", lineNumber : 51, className : "com.pblabs.engine.core.NameManager", methodName : "add"});
		}
		this._objects.set(object.get_name(),object);
	}
}
com.pblabs.engine.core.NameManager.prototype.get = function(name) {
	return this._objects.get(name);
}
com.pblabs.engine.core.NameManager.prototype.getComponentByName = function(name,componentName) {
	var entity = this.get(name);
	if(entity == null) {
		return null;
	}
	return entity.lookupComponentByName(componentName);
}
com.pblabs.engine.core.NameManager.prototype.getComponentByType = function(name,componentType) {
	var entity = this.get(name);
	if(entity == null) {
		return null;
	}
	return entity.lookupComponentByType(componentType);
}
com.pblabs.engine.core.NameManager.prototype.getComponentsByType = function(name,componentType) {
	var entity = this.get(name);
	if(entity == null) {
		return null;
	}
	return entity.lookupComponentsByType(componentType);
}
com.pblabs.engine.core.NameManager.prototype.iterator = function() {
	return this._objects.iterator();
}
com.pblabs.engine.core.NameManager.prototype.remove = function(object) {
	this._objects.remove(object.get_name());
}
com.pblabs.engine.core.NameManager.prototype.validateName = function(name) {
	if(this.get(name) == null) {
		return name;
	}
	var index = 1;
	var testName = name + index;
	while(this.get(testName) != null) {
		testName = name + index++;
	}
	return testName;
}
com.pblabs.engine.core.NameManager.prototype.__class__ = com.pblabs.engine.core.NameManager;
com.pblabs.util.IterUtil = function() { }
com.pblabs.util.IterUtil.__name__ = ["com","pblabs","util","IterUtil"];
com.pblabs.util.IterUtil.indexOf = function(it,element) {
	if(it != null) {
		var idx = 0;
		var iter = it.iterator();
		while(iter.hasNext()) {
			if(com.pblabs.util.EqualableUtil.equals(iter.next(),element)) {
				return idx;
			}
			idx++;
		}
	}
	return -1;
}
com.pblabs.util.IterUtil.exists = function(arr,element) {
	return com.pblabs.util.IterUtil.indexOf(arr,element) != -1;
}
com.pblabs.util.IterUtil.join = function(arr,sep) {
	if(sep == null) sep = ", ";
	var iter = arr.iterator();
	var s = (iter.hasNext()?Std.string(iter.next()):"");
	while(iter.hasNext()) {
		s += sep + iter.next();
	}
	return s;
}
com.pblabs.util.IterUtil.map = function(it,f) {
	var list = new List();
	while(it.hasNext()) {
		list.add(f(it.next()));
	}
	return list;
}
com.pblabs.util.IterUtil.toArray = function(it) {
	var result = new Array();
	while(it.hasNext()) {
		result.push(it.next());
	}
	return result;
}
com.pblabs.util.IterUtil["const"] = function(val) {
	return function(ignore) {
		return val;
	}
}
com.pblabs.util.IterUtil.id = function(val) {
	return val;
}
com.pblabs.util.IterUtil.prototype.__class__ = com.pblabs.util.IterUtil;
com.pblabs.engine.core.PBGame = function(p) { if( p === $_ ) return; {
	com.pblabs.util.Log.setupPBGameLog();
	com.pblabs.engine.core.PBGameBase.apply(this,[]);
	this.startup();
}}
com.pblabs.engine.core.PBGame.__name__ = ["com","pblabs","engine","core","PBGame"];
com.pblabs.engine.core.PBGame.__super__ = com.pblabs.engine.core.PBGameBase;
for(var k in com.pblabs.engine.core.PBGameBase.prototype ) com.pblabs.engine.core.PBGame.prototype[k] = com.pblabs.engine.core.PBGameBase.prototype[k];
com.pblabs.engine.core.PBGame.prototype.initializeManagers = function() {
	com.pblabs.engine.core.PBGameBase.prototype.initializeManagers.apply(this,[]);
	this.registerManager(com.pblabs.engine.core.PBGameBase,this);
	this.registerManager(com.pblabs.engine.core.NameManager,new com.pblabs.engine.core.NameManager());
	this.registerManager(com.pblabs.engine.time.IProcessManager,new com.pblabs.engine.time.ProcessManager());
	this.registerManager(com.pblabs.engine.core.SetManager,new com.pblabs.engine.core.SetManager());
	this.registerManager(com.pblabs.engine.core.SignalBondManager,new com.pblabs.engine.core.SignalBondManager());
	this.registerManager(com.pblabs.components.scene.SceneView,new com.pblabs.components.scene.SceneView());
	this.registerManager(com.pblabs.engine.resource.IResourceManager,new com.pblabs.engine.resource.ResourceManager());
	this.registerManager(com.pblabs.engine.serialization.Serializer,new com.pblabs.engine.serialization.Serializer());
	this.registerManager(com.pblabs.engine.serialization.TemplateManager,new com.pblabs.engine.serialization.TemplateManager());
}
com.pblabs.engine.core.PBGame.prototype.__class__ = com.pblabs.engine.core.PBGame;
com.pblabs.components.input.SceneViewControl = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.EntityComponent.apply(this,[]);
	this._isPanning = this._isZooming = false;
	this.isEasing = true;
	this.pauseProcessManagerOnPan = true;
	this._isGesturing = false;
}}
com.pblabs.components.input.SceneViewControl.__name__ = ["com","pblabs","components","input","SceneViewControl"];
com.pblabs.components.input.SceneViewControl.__super__ = com.pblabs.engine.core.EntityComponent;
for(var k in com.pblabs.engine.core.EntityComponent.prototype ) com.pblabs.components.input.SceneViewControl.prototype[k] = com.pblabs.engine.core.EntityComponent.prototype[k];
com.pblabs.components.input.SceneViewControl.prototype._isGesturing = null;
com.pblabs.components.input.SceneViewControl.prototype._isPanning = null;
com.pblabs.components.input.SceneViewControl.prototype._isZooming = null;
com.pblabs.components.input.SceneViewControl.prototype._panManager = null;
com.pblabs.components.input.SceneViewControl.prototype._scene = null;
com.pblabs.components.input.SceneViewControl.prototype._startZoom = null;
com.pblabs.components.input.SceneViewControl.prototype.backgroundSceneComponent = null;
com.pblabs.components.input.SceneViewControl.prototype.get_isPanning = function() {
	return this._isPanning;
}
com.pblabs.components.input.SceneViewControl.prototype.get_isZooming = function() {
	return this._isZooming;
}
com.pblabs.components.input.SceneViewControl.prototype.isEasing = null;
com.pblabs.components.input.SceneViewControl.prototype.isPanning = null;
com.pblabs.components.input.SceneViewControl.prototype.isValidTarget = function(e) {
	return e.inputComponent == null || (this.backgroundSceneComponent != null && this.backgroundSceneComponent.get_owner() == e.inputComponent.get_owner());
}
com.pblabs.components.input.SceneViewControl.prototype.isZooming = null;
com.pblabs.components.input.SceneViewControl.prototype.onAdd = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onAdd.apply(this,[]);
	this._panManager = this.get_context().getManager(com.pblabs.components.input.PanManager);
	this._scene = this.get_owner().getProperty(this.sceneProperty);
	var input = this.get_context().getManager(com.pblabs.components.input.InputManager);
	input.deviceDown.bind($closure(this,"onDeviceDown"));
	input.deviceUp.bind($closure(this,"onDeviceUp"));
	input.scale.bind($closure(this,"onZoom"));
	var gestures = this.get_context().getManager(com.pblabs.components.input.GestureInputManager);
	if(gestures != null) {
		gestures.gestureStart.bind($closure(this,"onGestureStart"));
		gestures.gestureEnd.bind($closure(this,"onGestureEnd"));
	}
}
com.pblabs.components.input.SceneViewControl.prototype.onDeviceDown = function(e) {
	if(e.inputComponent == null || (this.backgroundSceneComponent != null && this.backgroundSceneComponent.get_owner() == e.inputComponent.get_owner())) {
		this.set_isPanning(true);
	}
}
com.pblabs.components.input.SceneViewControl.prototype.onDeviceUp = function(e) {
	if(this._isPanning) {
		this.set_isPanning(false);
	}
}
com.pblabs.components.input.SceneViewControl.prototype.onGestureEnd = function(e) {
	this._isGesturing = false;
}
com.pblabs.components.input.SceneViewControl.prototype.onGestureStart = function(e) {
	this.set_isPanning(false);
	this._isGesturing = true;
}
com.pblabs.components.input.SceneViewControl.prototype.onRemove = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onRemove.apply(this,[]);
	this.set_isPanning(false);
	var input = this.get_context().getManager(com.pblabs.components.input.InputManager);
	input.deviceDown.unbind($closure(this,"onDeviceDown"));
	input.deviceUp.unbind($closure(this,"onDeviceUp"));
	input.scale.unbind($closure(this,"onZoom"));
	this._scene = null;
}
com.pblabs.components.input.SceneViewControl.prototype.onZoom = function(e) {
	this.set_isPanning(false);
	if(e.inputComponent == null || (this.backgroundSceneComponent != null && this.backgroundSceneComponent.get_owner() == e.inputComponent.get_owner())) {
		if(!this.get_isZooming()) {
			this._startZoom = this._scene.get_zoom();
			this.set_isZooming(true);
		}
		this._scene.set_zoom(this._startZoom * e.scale);
		if(Std["is"](this._scene,com.pblabs.engine.time.IAnimatedObject)) {
			(function($this) {
				var $r;
				var $t = $this._scene;
				if(Std["is"]($t,com.pblabs.engine.time.IAnimatedObject)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)).onFrame(0);
		}
	}
}
com.pblabs.components.input.SceneViewControl.prototype.pauseProcessManagerOnPan = null;
com.pblabs.components.input.SceneViewControl.prototype.sceneProperty = null;
com.pblabs.components.input.SceneViewControl.prototype.set_isPanning = function(val) {
	if(this._isPanning == val) {
		return val;
	}
	this._isPanning = val;
	if(this._isPanning) {
		this._panManager.panScene(this._scene,this.isEasing,this.pauseProcessManagerOnPan);
	}
	else null;
	return val;
}
com.pblabs.components.input.SceneViewControl.prototype.set_isZooming = function(val) {
	if(this._isZooming == val) {
		return val;
	}
	this._isZooming = val;
	if(this.pauseProcessManagerOnPan) {
		this.get_context().getManager(com.pblabs.engine.time.IProcessManager).set_paused(this._isZooming);
	}
	return val;
}
com.pblabs.components.input.SceneViewControl.prototype.__class__ = com.pblabs.components.input.SceneViewControl;
com.pblabs.geom.PolygonTools = function() { }
com.pblabs.geom.PolygonTools.__name__ = ["com","pblabs","geom","PolygonTools"];
com.pblabs.geom.PolygonTools.deepCopy = function(arr) {
	var a = new Array();
	{
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			a.push(v.clone());
		}
	}
	return a;
}
com.pblabs.geom.PolygonTools.toPolygon = function(rect) {
	return new com.pblabs.geom.Polygon([new com.pblabs.geom.Vector2(rect.get_left(),rect.get_top()),new com.pblabs.geom.Vector2(rect.get_right(),rect.get_top()),new com.pblabs.geom.Vector2(rect.get_right(),rect.get_bottom()),new com.pblabs.geom.Vector2(rect.get_left(),rect.get_bottom())]);
}
com.pblabs.geom.PolygonTools.isPointInPolygon2 = function(poly,p) {
	var polySides = poly.length;
	var i = polySides - 1;
	var j = i;
	var oddNodes = false;
	{
		var _g = 0;
		while(_g < polySides) {
			var i1 = _g++;
			if(poly[i1].y < p.y && poly[j].y >= p.y || poly[j].y < p.y && poly[i1].y >= p.y) {
				if(poly[i1].x + ((p.y - poly[i1].y) / (poly[j].y - poly[i1].y)) * (poly[j].x - poly[i1].x) < p.x) {
					oddNodes = !oddNodes;
				}
			}
			j = i1;
		}
	}
	return oddNodes;
}
com.pblabs.geom.PolygonTools.union = function(poly1,poly2) {
	throw "Not implemented";
	return null;
}
com.pblabs.geom.PolygonTools.isPointInPolygon = function(arrayOfPolygonPoints,P) {
	return com.pblabs.geom.PolygonTools.isPointInPolygon2(arrayOfPolygonPoints,P);
	throw "This method is buggy, use isPointInPolygon2 for now (until I fix it)";
	{
		var _g = 0;
		while(_g < arrayOfPolygonPoints.length) {
			var v = arrayOfPolygonPoints[_g];
			++_g;
			if(P.x == v.x && P.y == v.y) {
				return true;
			}
		}
	}
	var minX = Math.POSITIVE_INFINITY;
	var maxX = Math.NEGATIVE_INFINITY;
	var minY = Math.POSITIVE_INFINITY;
	var maxY = Math.NEGATIVE_INFINITY;
	{
		var _g = 0;
		while(_g < arrayOfPolygonPoints.length) {
			var v = arrayOfPolygonPoints[_g];
			++_g;
			minX = Math.min(minX,v.x);
			maxX = Math.max(maxX,v.x);
			minY = Math.min(minY,v.y);
			maxY = Math.max(maxY,v.y);
		}
	}
	if(P.x < minX || P.x > maxX || P.y < minY || P.y > maxY) {
		return false;
	}
	var width = maxX - minX;
	var height = maxY - minY;
	var center = new com.pblabs.geom.Vector2(minX + width / 2,minY + height / 2);
	var angleFromPtoCenter = center.subtract(P).get_angle();
	angleFromPtoCenter += 0.000000123;
	var point2 = com.pblabs.geom.VectorTools.angleToVector2(angleFromPtoCenter,Math.max(width,height) * 2);
	var polygon = arrayOfPolygonPoints.copy();
	if(arrayOfPolygonPoints[0] != arrayOfPolygonPoints[arrayOfPolygonPoints.length - 1]) {
		polygon.push(polygon[0]);
	}
	var intersectionsCount = 0;
	{
		var _g1 = 0, _g = polygon.length - 1;
		while(_g1 < _g) {
			var k = _g1++;
			if(com.pblabs.geom.LineSegment.isLinesIntersecting(P,point2,polygon[k],polygon[k + 1])) {
				intersectionsCount++;
			}
		}
	}
	return !(intersectionsCount % 2 == 0);
}
com.pblabs.geom.PolygonTools.isOverlapping = function(object1,object2) {
	{
		var _g1 = 0, _g = object1.length;
		while(_g1 < _g) {
			var i = _g1++;
			{
				var _g3 = 0, _g2 = object2.length;
				while(_g3 < _g2) {
					var j = _g3++;
					if(com.pblabs.geom.LineSegment.lineIntersectLine(object2[j],object2[j + 1],object1[i],object1[i + 1]) != null) {
						return true;
					}
				}
			}
		}
	}
	return false;
}
com.pblabs.geom.PolygonTools.isClockwise = function(P) {
	var A = P[0];
	var B = P[1];
	var C = P[2];
	var angleAB = com.pblabs.geom.VectorTools.getAngle(A.x,A.y,B.x,B.y);
	var angleAC = com.pblabs.geom.VectorTools.getAngle(A.x,A.y,C.x,C.y);
	if(angleAB == angleAC) {
		var differentStartVector = P.copy();
		differentStartVector.unshift(differentStartVector.pop());
		return com.pblabs.geom.PolygonTools.isClockwise(differentStartVector);
	}
	else {
		var diff = com.pblabs.geom.VectorTools.differenceAngles(angleAB,angleAC);
		return diff > 0;
	}
}
com.pblabs.geom.PolygonTools.padPolygon = function(polygon,padding) {
	var padEdge = function(v1,v2,center) {
		var normalAngle = com.pblabs.geom.Geometry.normalizeRadians((com.pblabs.geom.VectorTools.getAngle(v1.x,v1.y,v2.x,v2.y) + Math.PI / 2));
		var transform = new com.pblabs.geom.Vector2(Math.cos(normalAngle),Math.sin(normalAngle));
		var middlePoint = new com.pblabs.geom.Vector2(v1.x + (v2.x - v1.x) / 2,v1.y + (v2.y - v1.y) / 2);
		if(Math.sqrt((middlePoint.x - center.x) * (middlePoint.x - center.x) + (middlePoint.y - center.y) * (middlePoint.y - center.y)) > com.pblabs.geom.VectorTools.distance(center,middlePoint.add(transform))) {
			transform = com.pblabs.geom.VectorTools.angleToVector2(com.pblabs.geom.Geometry.normalizeRadians((normalAngle + Math.PI)));
		}
		transform.scale(padding);
		v1.addLocal(transform);
		v2.addLocal(transform);
	}
	var center = com.pblabs.geom.PolygonTools.get_center(polygon);
	{
		var _g1 = 0, _g = polygon.length - 1;
		while(_g1 < _g) {
			var k = _g1++;
			padEdge(polygon[k],polygon[k + 1],center);
		}
	}
}
com.pblabs.geom.PolygonTools.closestPointOnPolygon = function(p,P) {
	var polygon = p.copy();
	if(p[0] != p[p.length - 1]) {
		polygon.push(polygon[0]);
	}
	var distance = Math.POSITIVE_INFINITY;
	var closestVector = null;
	{
		var _g1 = 0, _g = polygon.length - 1;
		while(_g1 < _g) {
			var k = _g1++;
			var point = new com.pblabs.geom.Vector2();
			var currentDistance = com.pblabs.geom.LineSegment.distToLineSegment(polygon[k],polygon[k + 1],P,point);
			if(currentDistance < distance) {
				distance = currentDistance;
				closestVector = point;
			}
		}
	}
	return closestVector;
}
com.pblabs.geom.PolygonTools.getBounds = function(p) {
	var maxX = Math.NEGATIVE_INFINITY;
	var minX = Math.POSITIVE_INFINITY;
	var maxY = Math.NEGATIVE_INFINITY;
	var minY = Math.POSITIVE_INFINITY;
	{
		var _g = 0;
		while(_g < p.length) {
			var v = p[_g];
			++_g;
			maxX = Math.max(maxX,v.x);
			minX = Math.min(minX,v.x);
			maxY = Math.max(maxY,v.y);
			minY = Math.min(minY,v.y);
		}
	}
	var width = maxX - minX;
	var height = maxY - minY;
	var rect = new com.pblabs.geom.Rectangle(minX,minY,width,height);
	return rect;
}
com.pblabs.geom.PolygonTools.isPolygonEdge = function(polygon,P1,P2) {
	{
		var _g1 = 0, _g = polygon.length - 1;
		while(_g1 < _g) {
			var k = _g1++;
			var p1 = (function($this) {
				var $r;
				var $t = polygon[k];
				if(Std["is"]($t,com.pblabs.geom.Vector2)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			var p2 = (function($this) {
				var $r;
				var $t = polygon[k + 1];
				if(Std["is"]($t,com.pblabs.geom.Vector2)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			if((P1.x == p1.x && P1.y == p1.y && P2.x == p2.x && P2.y == p2.y) || (P2.x == p1.x && P2.y == p1.y && P1.x == p2.x && P1.y == p2.y)) {
				return true;
			}
		}
	}
	return false;
}
com.pblabs.geom.PolygonTools.closestPoint = function(p,P) {
	var distance = Math.POSITIVE_INFINITY;
	var closestVector = null;
	{
		var _g = 0;
		while(_g < p.length) {
			var v = p[_g];
			++_g;
			var currentDistance = (P.x - v.x) * (P.x - v.x) + (P.y - v.y) * (P.y - v.y);
			if(currentDistance < distance) {
				distance = currentDistance;
				closestVector = v;
			}
		}
	}
	return closestVector;
}
com.pblabs.geom.PolygonTools.furthestPoint = function(p,P) {
	var distance = Math.NEGATIVE_INFINITY;
	var furthest = null;
	{
		var _g = 0;
		while(_g < p.length) {
			var v = p[_g];
			++_g;
			var currentDistance = (P.x - v.x) * (P.x - v.x) + (P.y - v.y) * (P.y - v.y);
			if(currentDistance > distance) {
				distance = currentDistance;
				furthest = v;
			}
		}
	}
	return furthest;
}
com.pblabs.geom.PolygonTools.toConvexHull = function(points) {
	var topHull = new Array();
	var bottomHull = new Array();
	var convexHull = new Array();
	if(points.length <= 3) {
		return points;
	}
	else {
		var fieldComp = com.pblabs.util.Comparators.createFields(["x","y"]);
		points.sort(fieldComp);
		topHull.push(0);
		topHull.push(1);
		{
			var _g1 = 2, _g = points.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(com.pblabs.geom.PolygonTools.towardsLeft(points[topHull[topHull.length - 2]],points[topHull[topHull.length - 1]],points[i])) {
					topHull.pop();
					while(topHull.length >= 2) {
						if(com.pblabs.geom.PolygonTools.towardsLeft(points[topHull[topHull.length - 2]],points[topHull[topHull.length - 1]],points[i])) {
							topHull.pop();
						}
						else {
							topHull.push(i);
							break;
						}
					}
					if(topHull.length == 1) topHull.push(i);
				}
				else {
					topHull.push(i);
				}
			}
		}
		bottomHull.push(0);
		bottomHull.push(1);
		{
			var _g1 = 2, _g = points.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!com.pblabs.geom.PolygonTools.towardsLeft(points[bottomHull[bottomHull.length - 2]],points[bottomHull[bottomHull.length - 1]],points[i])) {
					bottomHull.pop();
					while(bottomHull.length >= 2) {
						if(!com.pblabs.geom.PolygonTools.towardsLeft(points[bottomHull[bottomHull.length - 2]],points[bottomHull[bottomHull.length - 1]],points[i])) {
							bottomHull.pop();
						}
						else {
							bottomHull.push(i);
							break;
						}
					}
					if(bottomHull.length == 1) bottomHull.push(i);
				}
				else {
					bottomHull.push(i);
				}
			}
		}
		bottomHull.reverse();
		bottomHull.shift();
		convexHull = topHull.concat(bottomHull);
		var convexPoints = Lambda.array(Lambda.map(convexHull,function(idx) {
			return points[idx];
		}));
		convexPoints.splice(convexPoints.length - 1,1);
		return convexPoints;
	}
}
com.pblabs.geom.PolygonTools.towardsLeft = function(origin,p1,p2) {
	var tmp1 = new com.pblabs.geom.Vector2(p1.x - origin.x,p1.y - origin.y);
	var tmp2 = new com.pblabs.geom.Vector2(p2.x - origin.x,p2.y - origin.y);
	if(((tmp1.x * tmp2.y) - (tmp1.y * tmp2.x)) < 0) {
		return true;
	}
	return false;
}
com.pblabs.geom.PolygonTools.getIntersection = function(p1,p2) {
	var containedPoints = new Array();
	var v;
	var k;
	var kk;
	{
		var _g1 = 0, _g = p1.length - 1;
		while(_g1 < _g) {
			var k1 = _g1++;
			v = p1[k1];
			if(com.pblabs.geom.PolygonTools.isPointInPolygon2(p2,v) && !Lambda.has(containedPoints,v) && v != null) {
				containedPoints.push(v);
			}
		}
	}
	{
		var _g1 = 0, _g = p2.length - 1;
		while(_g1 < _g) {
			var k1 = _g1++;
			v = p2[k1];
			if(com.pblabs.geom.PolygonTools.isPointInPolygon2(p1,v) && !Lambda.has(containedPoints,v) && v != null) {
				containedPoints.push(v);
			}
		}
	}
	var intersectionPoints = new Array();
	{
		var _g1 = 0, _g = p1.length - 1;
		while(_g1 < _g) {
			var k1 = _g1++;
			{
				var _g3 = 0, _g2 = p2.length - 1;
				while(_g3 < _g2) {
					var kk1 = _g3++;
					if(com.pblabs.geom.LineSegment.isLinesIntersecting(p1[k1],p1[k1 + 1],p2[kk1],p2[kk1 + 1])) {
						var intersectingPoint = com.pblabs.geom.LineSegment.lineIntersectLine(p1[k1],p1[k1 + 1],p2[kk1],p2[kk1 + 1]);
						if(intersectingPoint != null) {
							intersectionPoints.push(intersectingPoint);
						}
					}
				}
			}
		}
	}
	containedPoints = containedPoints.concat(intersectionPoints);
	return containedPoints;
}
com.pblabs.geom.PolygonTools.getPointsWhereLineIntersectsPolygon = function(polygon,A,B) {
	var intersectingPoints = new Array();
	{
		var _g1 = 0, _g = polygon.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			var point = com.pblabs.geom.LineSegment.lineIntersectLine(A,B,polygon[i],polygon[i + 1]);
			if(point != null) {
				if(!point.equals(A) && !point.equals(B)) {
					intersectingPoints.push(point);
				}
			}
		}
	}
	return intersectingPoints;
}
com.pblabs.geom.PolygonTools.get_center = function(arrayOfPolygonPoints,center) {
	var minX = Math.POSITIVE_INFINITY;
	var maxX = Math.NEGATIVE_INFINITY;
	var minY = Math.POSITIVE_INFINITY;
	var maxY = Math.NEGATIVE_INFINITY;
	{
		var _g = 0;
		while(_g < arrayOfPolygonPoints.length) {
			var v = arrayOfPolygonPoints[_g];
			++_g;
			minX = Math.min(minX,v.x);
			maxX = Math.max(maxX,v.x);
			minY = Math.min(minY,v.y);
			maxY = Math.max(maxY,v.y);
		}
	}
	if(center == null) {
		center = new com.pblabs.geom.Vector2(minX + (maxX - minX) / 2,minY + (maxY - minY) / 2);
	}
	else {
		center.x = minX + (maxX - minX) / 2;
		center.y = minY + (maxY - minY) / 2;
	}
	return center;
}
com.pblabs.geom.PolygonTools.isCircleIntersecting = function(polygon,P,radius) {
	var closestPointOnPolygon = com.pblabs.geom.PolygonTools.closestPointOnPolygon(polygon,P);
	return Math.sqrt((P.x - closestPointOnPolygon.x) * (P.x - closestPointOnPolygon.x) + (P.y - closestPointOnPolygon.y) * (P.y - closestPointOnPolygon.y)) <= radius;
}
com.pblabs.geom.PolygonTools.sortVectorsBySweep = function(initialLocations,initialAngle,radiusFunction) {
	var v;
	var bounds = com.pblabs.geom.PolygonTools.getBounds(initialLocations);
	com.pblabs.engine.debug.Log.debug(["bounds",bounds],{ fileName : "PolygonTools.hx", lineNumber : 639, className : "com.pblabs.geom.PolygonTools", methodName : "sortVectorsBySweep"});
	var maxFormationRadius = Math.max(bounds.width,bounds.height) * Math.sqrt(2);
	com.pblabs.engine.debug.Log.debug(["maxFormationRadius",maxFormationRadius],{ fileName : "PolygonTools.hx", lineNumber : 643, className : "com.pblabs.geom.PolygonTools", methodName : "sortVectorsBySweep"});
	var center = new com.pblabs.geom.Vector2(bounds.x + bounds.width / 2,bounds.y + bounds.height / 2);
	var vvMap = com.pblabs.util.ds.Maps.newHashMap(com.pblabs.geom.Vector2);
	{
		var _g = 0;
		while(_g < initialLocations.length) {
			var v1 = initialLocations[_g];
			++_g;
			vvMap.set(v1.subtract(center),v1);
		}
	}
	var relVs = new Array();
	{ var $it0 = vvMap.keys();
	while( $it0.hasNext() ) { var v1 = $it0.next();
	{
		relVs.push(v1.rotateLocal(initialAngle));
	}
	}}
	relVs.sort(function(v1,v2) {
		return ((v1.x > v2.x?-1:1));
	});
	return Lambda.array(Lambda.map(relVs,$closure(vvMap,"get")));
}
com.pblabs.geom.PolygonTools.prototype.__class__ = com.pblabs.geom.PolygonTools;
if(!com.pblabs.engine.injection) com.pblabs.engine.injection = {}
com.pblabs.engine.injection.Injector = function(p) { if( p === $_ ) return; {
	this._injectionValues = com.pblabs.util.ds.Maps.newHashMap(Dynamic);
}}
com.pblabs.engine.injection.Injector.__name__ = ["com","pblabs","engine","injection","Injector"];
com.pblabs.engine.injection.Injector.prototype._injectionValues = null;
com.pblabs.engine.injection.Injector.prototype._parentInjector = null;
com.pblabs.engine.injection.Injector.prototype.getMapping = function(key,name) {
	com.pblabs.util.Preconditions.checkArgument(key != null || name != null,"Both args are null");
	if(this._injectionValues.get(name) != null) {
		return this._injectionValues.get(name);
	}
	if(key != null && this._injectionValues.get(Type.getClassName(key)) != null) {
		return this._injectionValues.get(Type.getClassName(key));
	}
	if(this.get_isParentInjector()) {
		return this.get_parent().getMapping(key,name);
	}
	return null;
}
com.pblabs.engine.injection.Injector.prototype.get_isParentInjector = function() {
	return this._parentInjector != null;
}
com.pblabs.engine.injection.Injector.prototype.get_parent = function() {
	return this._parentInjector;
}
com.pblabs.engine.injection.Injector.prototype.injectFields = function(obj,cls) {
	com.pblabs.util.Preconditions.checkNotNull(cls,"obj class is null");
	this.updateRuntimeCache(cls);
	{ var $it0 = com.pblabs.engine.injection.Injector.instanceFieldInjections.get(cls).iterator();
	while( $it0.hasNext() ) { var injectionTuple = $it0.next();
	{
		if(injectionTuple == com.pblabs.engine.injection.Injector.NULL_INJECTION) {
			break;
		}
		var field = injectionTuple.v1;
		if(Type["typeof"](Reflect.field(obj,field)) == ValueType.TFunction) {
			com.pblabs.engine.debug.Log.debug(((("Not injecting into " + Type.getClassName(Type.getClass(obj))) + ".") + field) + ", field is a function",{ fileName : "Injector.hx", lineNumber : 113, className : "com.pblabs.engine.injection.Injector", methodName : "injectFields"});
			continue;
		}
		if(Reflect.field(obj,field) != null) {
			com.pblabs.engine.debug.Log.warn((((((("Not injecting into " + Type.getClassName(Type.getClass(obj))) + ".") + field) + ", field is not null, ") + field) + "=") + Reflect.field(obj,field),{ fileName : "Injector.hx", lineNumber : 120, className : "com.pblabs.engine.injection.Injector", methodName : "injectFields"});
			continue;
		}
		{
			var _g = 0, _g1 = injectionTuple.v2;
			while(_g < _g1.length) {
				var injectionKey = _g1[_g];
				++_g;
				var injectedValue = this.getMapping(null,injectionKey);
				if(injectedValue == null) {
					com.pblabs.engine.debug.Log.warn((((("No value set for injection key=" + injectionTuple.v2) + "  ->  ") + com.pblabs.util.ReflectUtil.getClassName(cls)) + ".") + field,{ fileName : "Injector.hx", lineNumber : 128, className : "com.pblabs.engine.injection.Injector", methodName : "injectFields"});
					continue;
				}
				try {
					if(Lambda.has(Type.getInstanceFields(cls),"set_" + field)) {
						com.pblabs.engine.injection.Injector.SINGLE_VALUE_ARRAY[0] = injectedValue;
						Reflect.field(obj,"set_" + field).apply(obj,com.pblabs.engine.injection.Injector.SINGLE_VALUE_ARRAY);
						com.pblabs.engine.injection.Injector.SINGLE_VALUE_ARRAY[0] = null;
					}
					else {
						obj[field] = injectedValue;
					}
				}
				catch( $e1 ) {
					{
						var e = $e1;
						{
							throw (((((((("Could not inject:  " + obj) + ".") + field) + "=") + injectedValue) + ", type=") + com.pblabs.util.ReflectUtil.getClassName(injectedValue)) + "\n") + e;
						}
					}
				}
			}
		}
	}
	}}
	var superCls = Type.getSuperClass(cls);
	if(superCls != null) {
		com.pblabs.engine.debug.Log.debug("Injecting on superclass=" + com.pblabs.util.ReflectUtil.getClassName(superCls),{ fileName : "Injector.hx", lineNumber : 152, className : "com.pblabs.engine.injection.Injector", methodName : "injectFields"});
		this.injectFields(obj,superCls);
	}
}
com.pblabs.engine.injection.Injector.prototype.injectInto = function(obj) {
	com.pblabs.util.Preconditions.checkNotNull(obj,"obj argument is null");
	var cls = com.pblabs.util.ReflectUtil.getClass(obj);
	com.pblabs.util.Preconditions.checkNotNull(cls,"obj class is null");
	this.injectFields(obj,cls);
}
com.pblabs.engine.injection.Injector.prototype.isParentInjector = null;
com.pblabs.engine.injection.Injector.prototype.mapValue = function(type,value,optionalName) {
	if(Type.getClassName(type) != null) {
		this._injectionValues.set(Type.getClassName(type),value);
	}
	if(optionalName != null) {
		this._injectionValues.set(optionalName,value);
	}
}
com.pblabs.engine.injection.Injector.prototype.parent = null;
com.pblabs.engine.injection.Injector.prototype.set_parent = function(val) {
	com.pblabs.util.Preconditions.checkArgument(!this.get_isParentInjector(),"There's already a parent injector");
	this._parentInjector = val;
	return val;
}
com.pblabs.engine.injection.Injector.prototype.unmap = function(cls,name) {
	this._injectionValues.remove(com.pblabs.util.ReflectUtil.getClassName(cls));
	if(name != null) {
		this._injectionValues.remove(name);
	}
	if(cls != null) {
		this._injectionValues.remove(com.pblabs.util.ReflectUtil.getClassName(cls));
	}
}
com.pblabs.engine.injection.Injector.prototype.updateRuntimeCache = function(cls) {
	if(com.pblabs.engine.injection.Injector.instanceFieldInjections.get(cls) != null) {
		com.pblabs.engine.debug.Log.debug((com.pblabs.util.ReflectUtil.getClassName(cls) + " already registered:") + com.pblabs.engine.injection.Injector.instanceFieldInjections.get(cls),{ fileName : "Injector.hx", lineNumber : 168, className : "com.pblabs.engine.injection.Injector", methodName : "updateRuntimeCache"});
		return;
	}
	var m = haxe.rtti.Meta.getFields(cls);
	if(m != null) {
		var tup;
		{
			var _g = 0, _g1 = Reflect.fields(m);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				var injectString = null;
				if(!Reflect.hasField(Reflect.field(m,field),"inject")) {
					continue;
				}
				var injectMeta = Reflect.field(Reflect.field(m,field),"inject");
				if(injectMeta == null) {
					if(cls.__rtti != null) {
						var $e = (com.pblabs.util.ReflectUtil.getFieldType(cls,field));
						switch( $e[1] ) {
						case 2:
						var params = $e[3], name = $e[2];
						{
							tup = new com.pblabs.util.ds.Tuple(field,[name]);
							com.pblabs.engine.injection.Injector.instanceFieldInjections.set(cls,tup);
							com.pblabs.engine.debug.Log.debug((((("Binding field injection " + com.pblabs.util.ReflectUtil.getClassName(cls)) + ".") + field) + " <- ") + name,{ fileName : "Injector.hx", lineNumber : 193, className : "com.pblabs.engine.injection.Injector", methodName : "updateRuntimeCache"});
						}break;
						default:{
							com.pblabs.engine.debug.Log.error((((("@inject on " + com.pblabs.util.ReflectUtil.getClassName(cls)) + ".") + field) + ", not a class type: ") + com.pblabs.util.ReflectUtil.getFieldType(cls,field),{ fileName : "Injector.hx", lineNumber : 195, className : "com.pblabs.engine.injection.Injector", methodName : "updateRuntimeCache"});
						}break;
						}
					}
					else {
						com.pblabs.engine.debug.Log.error(((("@inject on " + com.pblabs.util.ReflectUtil.getClassName(cls)) + ".") + field) + ", but there is no inject annotation, and the class does not implement haxe.rtti.Infos, so we cannot get the class field types at runtime.",{ fileName : "Injector.hx", lineNumber : 198, className : "com.pblabs.engine.injection.Injector", methodName : "updateRuntimeCache"});
					}
				}
				else {
					var injectArr = injectMeta;
					com.pblabs.engine.debug.Log.debug((((("Binding field injection " + com.pblabs.util.ReflectUtil.getClassName(cls)) + ".") + field) + " -> ") + injectArr,{ fileName : "Injector.hx", lineNumber : 203, className : "com.pblabs.engine.injection.Injector", methodName : "updateRuntimeCache"});
					tup = new com.pblabs.util.ds.Tuple(field,injectArr);
					com.pblabs.engine.injection.Injector.instanceFieldInjections.set(cls,tup);
				}
			}
		}
	}
	else {
		com.pblabs.engine.debug.Log.debug("No injections",{ fileName : "Injector.hx", lineNumber : 209, className : "com.pblabs.engine.injection.Injector", methodName : "updateRuntimeCache"});
	}
	if(com.pblabs.engine.injection.Injector.instanceFieldInjections.get(cls) == null) {
		com.pblabs.engine.injection.Injector.instanceFieldInjections.set(cls,com.pblabs.engine.injection.Injector.NULL_INJECTION);
	}
	var superCls = Type.getSuperClass(cls);
	if(superCls != null) {
		com.pblabs.engine.debug.Log.debug("Caching injections on superclass=" + com.pblabs.util.ReflectUtil.getClassName(superCls),{ fileName : "Injector.hx", lineNumber : 220, className : "com.pblabs.engine.injection.Injector", methodName : "updateRuntimeCache"});
		this.updateRuntimeCache(superCls);
	}
}
com.pblabs.engine.injection.Injector.prototype.__class__ = com.pblabs.engine.injection.Injector;
com.pblabs.engine.injection.ComponentInjector = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.injection.Injector.apply(this,[]);
	this._propertyRefCache = com.pblabs.util.ds.Maps.newHashMap(String);
}}
com.pblabs.engine.injection.ComponentInjector.__name__ = ["com","pblabs","engine","injection","ComponentInjector"];
com.pblabs.engine.injection.ComponentInjector.__super__ = com.pblabs.engine.injection.Injector;
for(var k in com.pblabs.engine.injection.Injector.prototype ) com.pblabs.engine.injection.ComponentInjector.prototype[k] = com.pblabs.engine.injection.Injector.prototype[k];
com.pblabs.engine.injection.ComponentInjector.prototype._propertyRefCache = null;
com.pblabs.engine.injection.ComponentInjector.prototype.bindSignaller = function(obj,listenerMethodName,signalRef) {
	var signalProp = obj.get_owner().getProperty(this.getProperty(signalRef));
	var signaller = null;
	if(signalProp == null) {
		com.pblabs.engine.debug.Log.error(((("Cannot bind " + listenerMethodName) + " to signal from ref ") + signalRef) + ", signaler is null",{ fileName : "ComponentInjector.hx", lineNumber : 88, className : "com.pblabs.engine.injection.ComponentInjector", methodName : "bindSignaller"});
		return null;
	}
	else if(Std["is"](signalProp,com.pblabs.util.SignallingVar)) {
		signaller = (function($this) {
			var $r;
			var $t = signalProp;
			if(Std["is"]($t,com.pblabs.util.SignallingVar)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).signaller;
	}
	else {
		signaller = (function($this) {
			var $r;
			var $t = signalProp;
			if(Std["is"]($t,hsl.haxe.Signaler)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		com.pblabs.engine.debug.Log.debug((((("Binding " + obj.get_name()) + ".") + listenerMethodName) + " to ") + signalRef,{ fileName : "ComponentInjector.hx", lineNumber : 95, className : "com.pblabs.engine.injection.ComponentInjector", methodName : "bindSignaller"});
	}
	return signaller.bind(Reflect.field(obj,listenerMethodName),obj);
}
com.pblabs.engine.injection.ComponentInjector.prototype.getProperty = function(s) {
	if(this._propertyRefCache.get(s) == null) {
		this._propertyRefCache.set(s,new com.pblabs.engine.core.PropertyReference(s));
	}
	return this._propertyRefCache.get(s);
}
com.pblabs.engine.injection.ComponentInjector.prototype.injectComponentListeners = function(obj,bonds,cls) {
	com.pblabs.util.Preconditions.checkNotNull(obj,"Null object");
	cls = (cls == null?com.pblabs.util.ReflectUtil.getClass(obj):cls);
	this.updateRuntimeCache(cls);
	{ var $it0 = com.pblabs.engine.injection.Injector.instanceFieldInjections.get(cls).iterator();
	while( $it0.hasNext() ) { var injectionTuple = $it0.next();
	{
		if(injectionTuple == com.pblabs.engine.injection.Injector.NULL_INJECTION) {
			break;
		}
		var field = injectionTuple.v1;
		if(Reflect.field(obj,field) != null && Type["typeof"](Reflect.field(obj,field)) == ValueType.TFunction) {
			{
				var _g = 0, _g1 = injectionTuple.v2;
				while(_g < _g1.length) {
					var injectionKey = _g1[_g];
					++_g;
					var bond = this.bindSignaller(obj,field,injectionKey);
					if(bond != null) {
						if(bonds == null) {
							bonds = new Array();
						}
						bonds.push(bond);
					}
				}
			}
		}
	}
	}}
	var superCls = Type.getSuperClass(cls);
	if(superCls != null && superCls != com.pblabs.engine.core.EntityComponent) {
		com.pblabs.engine.debug.Log.debug(" injecting listeners on superclass=" + superCls,{ fileName : "ComponentInjector.hx", lineNumber : 77, className : "com.pblabs.engine.injection.ComponentInjector", methodName : "injectComponentListeners"});
		bonds = this.injectComponentListeners(obj,bonds,superCls);
	}
	return bonds;
}
com.pblabs.engine.injection.ComponentInjector.prototype.__class__ = com.pblabs.engine.injection.ComponentInjector;
com.pblabs.components.tasks.FunctionTask = function(fn,args) { if( fn === $_ ) return; {
	if(null == fn) {
		throw "fn must be non-null";
	}
	this._fn = fn;
	this._args = (args != null?args:com.pblabs.components.tasks.FunctionTask.EMPTY_ARRAY);
}}
com.pblabs.components.tasks.FunctionTask.__name__ = ["com","pblabs","components","tasks","FunctionTask"];
com.pblabs.components.tasks.FunctionTask.prototype._args = null;
com.pblabs.components.tasks.FunctionTask.prototype._fn = null;
com.pblabs.components.tasks.FunctionTask.prototype.clone = function() {
	var task = new com.pblabs.components.tasks.FunctionTask(this._fn,this._args);
	return task;
}
com.pblabs.components.tasks.FunctionTask.prototype.update = function(dt,obj) {
	var val = this._fn.apply(null,this._args);
	return val == null || val == true;
}
com.pblabs.components.tasks.FunctionTask.prototype.__class__ = com.pblabs.components.tasks.FunctionTask;
com.pblabs.components.tasks.FunctionTask.__interfaces__ = [com.pblabs.components.tasks.IEntityTask];
haxe.rtti.CType = { __ename__ : ["haxe","rtti","CType"], __constructs__ : ["CUnknown","CEnum","CClass","CTypedef","CFunction","CAnonymous","CDynamic"] }
haxe.rtti.CType.CAnonymous = function(fields) { var $x = ["CAnonymous",5,fields]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CClass = function(name,params) { var $x = ["CClass",2,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CDynamic = function(t) { var $x = ["CDynamic",6,t]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CEnum = function(name,params) { var $x = ["CEnum",1,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CFunction = function(args,ret) { var $x = ["CFunction",4,args,ret]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CTypedef = function(name,params) { var $x = ["CTypedef",3,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CUnknown = ["CUnknown",0];
haxe.rtti.CType.CUnknown.toString = $estr;
haxe.rtti.CType.CUnknown.__enum__ = haxe.rtti.CType;
haxe.rtti.Rights = { __ename__ : ["haxe","rtti","Rights"], __constructs__ : ["RNormal","RNo","RCall","RMethod","RDynamic","RInline"] }
haxe.rtti.Rights.RCall = function(m) { var $x = ["RCall",2,m]; $x.__enum__ = haxe.rtti.Rights; $x.toString = $estr; return $x; }
haxe.rtti.Rights.RDynamic = ["RDynamic",4];
haxe.rtti.Rights.RDynamic.toString = $estr;
haxe.rtti.Rights.RDynamic.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RInline = ["RInline",5];
haxe.rtti.Rights.RInline.toString = $estr;
haxe.rtti.Rights.RInline.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RMethod = ["RMethod",3];
haxe.rtti.Rights.RMethod.toString = $estr;
haxe.rtti.Rights.RMethod.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RNo = ["RNo",1];
haxe.rtti.Rights.RNo.toString = $estr;
haxe.rtti.Rights.RNo.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RNormal = ["RNormal",0];
haxe.rtti.Rights.RNormal.toString = $estr;
haxe.rtti.Rights.RNormal.__enum__ = haxe.rtti.Rights;
haxe.rtti.TypeTree = { __ename__ : ["haxe","rtti","TypeTree"], __constructs__ : ["TPackage","TClassdecl","TEnumdecl","TTypedecl"] }
haxe.rtti.TypeTree.TClassdecl = function(c) { var $x = ["TClassdecl",1,c]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TEnumdecl = function(e) { var $x = ["TEnumdecl",2,e]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TPackage = function(name,full,subs) { var $x = ["TPackage",0,name,full,subs]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TTypedecl = function(t) { var $x = ["TTypedecl",3,t]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeApi = function() { }
haxe.rtti.TypeApi.__name__ = ["haxe","rtti","TypeApi"];
haxe.rtti.TypeApi.typeInfos = function(t) {
	var inf;
	var $e = (t);
	switch( $e[1] ) {
	case 1:
	var c = $e[2];
	{
		inf = c;
	}break;
	case 2:
	var e = $e[2];
	{
		inf = e;
	}break;
	case 3:
	var t1 = $e[2];
	{
		inf = t1;
	}break;
	case 0:
	{
		throw "Unexpected Package";
	}break;
	}
	return inf;
}
haxe.rtti.TypeApi.isVar = function(t) {
	return (function($this) {
		var $r;
		var $e = (t);
		switch( $e[1] ) {
		case 4:
		{
			$r = false;
		}break;
		default:{
			$r = true;
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.TypeApi.leq = function(f,l1,l2) {
	var it = l2.iterator();
	{ var $it0 = l1.iterator();
	while( $it0.hasNext() ) { var e1 = $it0.next();
	{
		if(!it.hasNext()) return false;
		var e2 = it.next();
		if(!f(e1,e2)) return false;
	}
	}}
	if(it.hasNext()) return false;
	return true;
}
haxe.rtti.TypeApi.rightsEq = function(r1,r2) {
	if(r1 == r2) return true;
	var $e = (r1);
	switch( $e[1] ) {
	case 2:
	var m1 = $e[2];
	{
		var $e = (r2);
		switch( $e[1] ) {
		case 2:
		var m2 = $e[2];
		{
			return m1 == m2;
		}break;
		default:{
			null;
		}break;
		}
	}break;
	default:{
		null;
	}break;
	}
	return false;
}
haxe.rtti.TypeApi.typeEq = function(t1,t2) {
	var $e = (t1);
	switch( $e[1] ) {
	case 0:
	{
		return t2 == haxe.rtti.CType.CUnknown;
	}break;
	case 1:
	var params = $e[3], name = $e[2];
	{
		var $e = (t2);
		switch( $e[1] ) {
		case 1:
		var params2 = $e[3], name2 = $e[2];
		{
			return name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 2:
	var params = $e[3], name = $e[2];
	{
		var $e = (t2);
		switch( $e[1] ) {
		case 2:
		var params2 = $e[3], name2 = $e[2];
		{
			return name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 3:
	var params = $e[3], name = $e[2];
	{
		var $e = (t2);
		switch( $e[1] ) {
		case 3:
		var params2 = $e[3], name2 = $e[2];
		{
			return name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 4:
	var ret = $e[3], args = $e[2];
	{
		var $e = (t2);
		switch( $e[1] ) {
		case 4:
		var ret2 = $e[3], args2 = $e[2];
		{
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},args,args2) && haxe.rtti.TypeApi.typeEq(ret,ret2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 5:
	var fields = $e[2];
	{
		var $e = (t2);
		switch( $e[1] ) {
		case 5:
		var fields2 = $e[2];
		{
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},fields,fields2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 6:
	var t = $e[2];
	{
		var $e = (t2);
		switch( $e[1] ) {
		case 6:
		var t21 = $e[2];
		{
			if((t == null) != (t21 == null)) return false;
			return t == null || haxe.rtti.TypeApi.typeEq(t,t21);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	}
	return false;
}
haxe.rtti.TypeApi.fieldEq = function(f1,f2) {
	if(f1.name != f2.name) return false;
	if(!haxe.rtti.TypeApi.typeEq(f1.type,f2.type)) return false;
	if(f1.isPublic != f2.isPublic) return false;
	if(f1.doc != f2.doc) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.get,f2.get)) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.set,f2.set)) return false;
	if((f1.params == null) != (f2.params == null)) return false;
	if(f1.params != null && f1.params.join(":") != f2.params.join(":")) return false;
	return true;
}
haxe.rtti.TypeApi.constructorEq = function(c1,c2) {
	if(c1.name != c2.name) return false;
	if(c1.doc != c2.doc) return false;
	if((c1.args == null) != (c2.args == null)) return false;
	if(c1.args != null && !haxe.rtti.TypeApi.leq(function(a,b) {
		return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
	},c1.args,c2.args)) return false;
	return true;
}
haxe.rtti.TypeApi.prototype.__class__ = haxe.rtti.TypeApi;
com.pblabs.engine.core.IPBContext = function() { }
com.pblabs.engine.core.IPBContext.__name__ = ["com","pblabs","engine","core","IPBContext"];
com.pblabs.engine.core.IPBContext.prototype.allocate = null;
com.pblabs.engine.core.IPBContext.prototype.currentGroup = null;
com.pblabs.engine.core.IPBContext.prototype.getManager = null;
com.pblabs.engine.core.IPBContext.prototype.injectInto = null;
com.pblabs.engine.core.IPBContext.prototype.lookup = null;
com.pblabs.engine.core.IPBContext.prototype.lookupEntity = null;
com.pblabs.engine.core.IPBContext.prototype.name = null;
com.pblabs.engine.core.IPBContext.prototype.registerManager = null;
com.pblabs.engine.core.IPBContext.prototype.rootGroup = null;
com.pblabs.engine.core.IPBContext.prototype.shutdown = null;
com.pblabs.engine.core.IPBContext.prototype.started = null;
com.pblabs.engine.core.IPBContext.prototype.startup = null;
com.pblabs.engine.core.IPBContext.prototype.__class__ = com.pblabs.engine.core.IPBContext;
com.pblabs.util.ds.Maps = function() { }
com.pblabs.util.ds.Maps.__name__ = ["com","pblabs","util","ds","Maps"];
com.pblabs.util.ds.Maps.newHashMap = function(keyClazz) {
	var classname = null;
	if(keyClazz != null) {
		classname = (function($this) {
			var $r;
			var $e = (Type["typeof"](keyClazz));
			switch( $e[1] ) {
			case 8:
			{
				$r = (function($this) {
					var $r;
					throw "Unknown map key type";
					return $r;
				}($this));
			}break;
			case 4:
			{
				$r = Type.getClassName(keyClazz);
			}break;
			case 0:
			{
				$r = (function($this) {
					var $r;
					throw "TNull not allowed for map key type";
					return $r;
				}($this));
			}break;
			case 1:
			{
				$r = "TInt";
			}break;
			case 5:
			{
				$r = (function($this) {
					var $r;
					throw "TFunction not allowed for map key type";
					return $r;
				}($this));
			}break;
			case 2:
			{
				$r = "TFloat";
			}break;
			case 7:
			var e = $e[2];
			{
				$r = (function($this) {
					var $r;
					throw "TEnum not allowed for map key type";
					return $r;
				}($this));
			}break;
			case 6:
			var c = $e[2];
			{
				$r = Type.getClassName(c);
			}break;
			case 3:
			{
				$r = (function($this) {
					var $r;
					throw "TBool not allowed for map key type";
					return $r;
				}($this));
			}break;
			}
			return $r;
		}(this));
	}
	if(classname == "Class") {
		return new com.pblabs.util.ds.maps.StringMap();
	}
	else if(classname == "TInt") {
		return new com.pblabs.util.ds.maps.IntHashMap();
	}
	else if(classname == "String") {
		return new com.pblabs.util.ds.maps.HashMap();
	}
	else if(classname == "TFloat") {
		return new com.pblabs.util.ds.maps.StringMap();
	}
	else {
		if(keyClazz == com.pblabs.util.ds.Hashable) {
			return new com.pblabs.util.ds.maps.IntHashMap();
		}
		else {
			return new com.pblabs.util.ds.maps.HashMap();
		}
		var k = (keyClazz != null?Type.createEmptyInstance(keyClazz):null);
		if(Std["is"](k,com.pblabs.util.Enumerable)) {
			return new com.pblabs.util.ds.maps.StringMap();
		}
		else if(Std["is"](k,com.pblabs.util.ds.Hashable)) {
			return new com.pblabs.util.ds.maps.HashableMap();
		}
		else {
			return new com.pblabs.util.ds.maps.StringMap();
		}
	}
}
com.pblabs.util.ds.Maps.prototype.__class__ = com.pblabs.util.ds.Maps;
if(!com.pblabs.components.base) com.pblabs.components.base = {}
com.pblabs.components.base.NotifyingValueComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.EntityComponent.apply(this,[]);
	this._value = 0;
	this.signaller = new hsl.haxe.DirectSignaler(this);
}}
com.pblabs.components.base.NotifyingValueComponent.__name__ = ["com","pblabs","components","base","NotifyingValueComponent"];
com.pblabs.components.base.NotifyingValueComponent.__super__ = com.pblabs.engine.core.EntityComponent;
for(var k in com.pblabs.engine.core.EntityComponent.prototype ) com.pblabs.components.base.NotifyingValueComponent.prototype[k] = com.pblabs.engine.core.EntityComponent.prototype[k];
com.pblabs.components.base.NotifyingValueComponent.prototype._value = null;
com.pblabs.components.base.NotifyingValueComponent.prototype.deserialize = function(xml,context) {
	this._value = com.pblabs.util.XMLUtil.parseFloat(xml,"value");
}
com.pblabs.components.base.NotifyingValueComponent.prototype.get_value = function() {
	return this._value;
}
com.pblabs.components.base.NotifyingValueComponent.prototype.onRemove = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onRemove.apply(this,[]);
	this.signaller.unbindAll();
	this._value = 0;
}
com.pblabs.components.base.NotifyingValueComponent.prototype.onReset = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onReset.apply(this,[]);
	this.signaller.dispatch(this._value,null,{ fileName : "NotifyingValueComponent.hx", lineNumber : 68, className : "com.pblabs.components.base.NotifyingValueComponent", methodName : "onReset"});
}
com.pblabs.components.base.NotifyingValueComponent.prototype.serialize = function(xml) {
	com.pblabs.util.XMLUtil.createChild(xml,"value",this._value);
}
com.pblabs.components.base.NotifyingValueComponent.prototype.set_value = function(val) {
	if(this._value != val) {
		this._value = val;
		this.signaller.dispatch(this._value,null,{ fileName : "NotifyingValueComponent.hx", lineNumber : 53, className : "com.pblabs.components.base.NotifyingValueComponent", methodName : "set_value"});
	}
	return val;
}
com.pblabs.components.base.NotifyingValueComponent.prototype.signaller = null;
com.pblabs.components.base.NotifyingValueComponent.prototype.value = null;
com.pblabs.components.base.NotifyingValueComponent.prototype.__class__ = com.pblabs.components.base.NotifyingValueComponent;
com.pblabs.components.base.NotifyingValueComponent.__interfaces__ = [com.pblabs.engine.serialization.ISerializable];
com.pblabs.components.base.AngleComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.components.base.NotifyingValueComponent.apply(this,[]);
}}
com.pblabs.components.base.AngleComponent.__name__ = ["com","pblabs","components","base","AngleComponent"];
com.pblabs.components.base.AngleComponent.__super__ = com.pblabs.components.base.NotifyingValueComponent;
for(var k in com.pblabs.components.base.NotifyingValueComponent.prototype ) com.pblabs.components.base.AngleComponent.prototype[k] = com.pblabs.components.base.NotifyingValueComponent.prototype[k];
com.pblabs.components.base.AngleComponent.prototype.angle = null;
com.pblabs.components.base.AngleComponent.prototype.get_angle = function() {
	return com.pblabs.components.base.NotifyingValueComponent.prototype.get_value.apply(this,[]);
}
com.pblabs.components.base.AngleComponent.prototype.set_angle = function(val) {
	return com.pblabs.components.base.NotifyingValueComponent.prototype.set_value.apply(this,[val]);
}
com.pblabs.components.base.AngleComponent.prototype.toString = function() {
	return "Angle=" + this.get_angle();
}
com.pblabs.components.base.AngleComponent.prototype.__class__ = com.pblabs.components.base.AngleComponent;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	a.push(i);
	}}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	l.add(i);
	}}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(x));
	}}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(i++,x));
	}}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it0 = it.iterator();
		while( $it0.hasNext() ) { var x = $it0.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it1 = it.iterator();
		while( $it1.hasNext() ) { var x = $it1.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.exists = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) return true;
	}}
	return false;
}
Lambda.foreach = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(!f(x)) return false;
	}}
	return true;
}
Lambda.iter = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	f(x);
	}}
}
Lambda.filter = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) l.add(x);
	}}
	return l;
}
Lambda.fold = function(it,f,first) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	first = f(x,first);
	}}
	return first;
}
Lambda.count = function(it) {
	var n = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var _ = $it0.next();
	++n;
	}}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var v2 = $it0.next();
	{
		if(v == v2) return i;
		i++;
	}
	}}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	{ var $it0 = a.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(x);
	}}
	{ var $it1 = b.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	l.add(x);
	}}
	return l;
}
Lambda.prototype.__class__ = Lambda;
com.pblabs.geom.RectangleTools = function() { }
com.pblabs.geom.RectangleTools.__name__ = ["com","pblabs","geom","RectangleTools"];
com.pblabs.geom.RectangleTools.center = function(rect) {
	return new com.pblabs.geom.Vector2(rect.get_left() + rect.width / 2,rect.get_top() + rect.height / 2);
}
com.pblabs.geom.RectangleTools.contains = function(x,y,w,h,query,rotation) {
	if(rotation == null) rotation = 0;
	if(rotation != 0) {
		var relativeToRectCenter = query.clone();
		relativeToRectCenter.x -= x + w / 2;
		relativeToRectCenter.y -= y + h / 2;
		relativeToRectCenter.rotateLocal(-rotation);
		relativeToRectCenter.x += x + w / 2;
		relativeToRectCenter.y += y + h / 2;
		query = relativeToRectCenter;
	}
	return query.x >= x && query.x <= (x + w) && query.y >= y && query.y <= (y + h);
}
com.pblabs.geom.RectangleTools.prototype.__class__ = com.pblabs.geom.RectangleTools;
com.pblabs.components.tasks.TaskUtil = function() { }
com.pblabs.components.tasks.TaskUtil.__name__ = ["com","pblabs","components","tasks","TaskUtil"];
com.pblabs.components.tasks.TaskUtil.When = function(task,predicate) {
	return new com.pblabs.components.tasks.SerialTask(new com.pblabs.components.tasks.FunctionTask(predicate),task);
}
com.pblabs.components.tasks.TaskUtil.After = function(task,duration) {
	return ((duration > 0?new com.pblabs.components.tasks.SerialTask(new com.pblabs.components.tasks.TimedTask(duration),task):task));
}
com.pblabs.components.tasks.TaskUtil.addNamedTask = function(e,name,task,removeExistingTasks) {
	if(removeExistingTasks == null) removeExistingTasks = false;
	com.pblabs.components.tasks.TaskUtil.getTaskComponent(e).addNamedTask(name,task,removeExistingTasks);
}
com.pblabs.components.tasks.TaskUtil.addTask = function(e,task) {
	com.pblabs.components.tasks.TaskUtil.getTaskComponent(e).addTask(task);
}
com.pblabs.components.tasks.TaskUtil.removeAllTasks = function(e) {
	com.pblabs.components.tasks.TaskUtil.getTaskComponent(e).removeAllTasks();
}
com.pblabs.components.tasks.TaskUtil.removeNamedTasks = function(e,name) {
	com.pblabs.components.tasks.TaskUtil.getTaskComponent(e).removeNamedTasks(name);
}
com.pblabs.components.tasks.TaskUtil.getTaskComponent = function(e) {
	return e.lookupComponentByName(com.pblabs.components.tasks.TaskComponent.NAME);
}
com.pblabs.components.tasks.TaskUtil.prototype.hasTasks = function(e) {
	return com.pblabs.components.tasks.TaskUtil.getTaskComponent(e).hasTasks();
}
com.pblabs.components.tasks.TaskUtil.prototype.hasTasksNamed = function(e,name) {
	return com.pblabs.components.tasks.TaskUtil.getTaskComponent(e).hasTasksNamed(name);
}
com.pblabs.components.tasks.TaskUtil.prototype.__class__ = com.pblabs.components.tasks.TaskUtil;
com.pblabs.engine.debug.Profiler = function() { }
com.pblabs.engine.debug.Profiler.__name__ = ["com","pblabs","engine","debug","Profiler"];
com.pblabs.engine.debug.Profiler.ensureAtRoot = function() {
	null;
}
com.pblabs.engine.debug.Profiler.enter = function(blockName) {
	null;
}
com.pblabs.engine.debug.Profiler.exit = function(blockName) {
	null;
}
com.pblabs.engine.debug.Profiler.report = function() {
	null;
}
com.pblabs.engine.debug.Profiler.wipe = function() {
	null;
}
com.pblabs.engine.debug.Profiler.prototype.__class__ = com.pblabs.engine.debug.Profiler;
com.pblabs.util.EqualableUtil = function() { }
com.pblabs.util.EqualableUtil.__name__ = ["com","pblabs","util","EqualableUtil"];
com.pblabs.util.EqualableUtil.equals = function(obj1,obj2) {
	if(obj1 == obj2 || (obj1 == null && obj2 == null)) {
		return true;
	}
	else if(Std["is"](obj1,com.pblabs.util.Equalable)) {
		return ((function($this) {
			var $r;
			var $t = obj1;
			if(Std["is"]($t,com.pblabs.util.Equalable)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).equals(obj2);
	}
	else if((Std["is"](obj1,Array)) || (Std["is"](obj2,Array))) {
		throw "Cannot compare Arrays yet";
	}
	return false;
}
com.pblabs.util.EqualableUtil.prototype.__class__ = com.pblabs.util.EqualableUtil;
com.pblabs.util.Assert = function() { }
com.pblabs.util.Assert.__name__ = ["com","pblabs","util","Assert"];
com.pblabs.util.Assert.isTrue = function(condition,info,posInfos) {
	if(!condition) null;
}
com.pblabs.util.Assert.isFalse = function(condition,info,posInfos) {
	if(condition) null;
}
com.pblabs.util.Assert.isNotNull = function(value,info,posInfos) {
	if(value == null) null;
}
com.pblabs.util.Assert.isNull = function(value,info,posInfos) {
	if(value != null) null;
}
com.pblabs.util.Assert.isValidIndex = function(value,length,info,posInfos) {
	if(value < 0 || value >= length) null;
}
com.pblabs.util.Assert.fail = function(message,info) {
	return;
}
com.pblabs.util.Assert.prototype.__class__ = com.pblabs.util.Assert;
haxe.TypeTools = function() { }
haxe.TypeTools.__name__ = ["haxe","TypeTools"];
haxe.TypeTools.getClassNames = function(value) {
	var result = new List();
	var valueClass = (Std["is"](value,Class)?value:Type.getClass(value));
	while(null != valueClass) {
		result.add(Type.getClassName(valueClass));
		valueClass = Type.getSuperClass(valueClass);
	}
	return result;
}
haxe.TypeTools.prototype.__class__ = haxe.TypeTools;
com.pblabs.components.scene.SVGComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.components.scene.js.css.Base2DComponent.apply(this,[]);
}}
com.pblabs.components.scene.SVGComponent.__name__ = ["com","pblabs","components","scene","SVGComponent"];
com.pblabs.components.scene.SVGComponent.__super__ = com.pblabs.components.scene.js.css.Base2DComponent;
for(var k in com.pblabs.components.scene.js.css.Base2DComponent.prototype ) com.pblabs.components.scene.SVGComponent.prototype[k] = com.pblabs.components.scene.js.css.Base2DComponent.prototype[k];
com.pblabs.components.scene.SVGComponent.prototype.containsScreenPoint = function(pos) {
	return com.pblabs.geom.RectangleTools.contains(this.get_x() - this._width / 2,this.get_y() - this._height / 2,this._width,this._height,com.pblabs.components.scene.SceneUtil.translateScreenToWorld(this.parent.get_scene(),pos));
}
com.pblabs.components.scene.SVGComponent.prototype.onAdd = function() {
	com.pblabs.components.scene.js.css.Base2DComponent.prototype.onAdd.apply(this,[]);
	var svg = this.get_context().getManager(com.pblabs.engine.resource.IResourceManager).create(this.resourceToken.v1,this.resourceToken.v2);
	this.set_displayObject(svg);
	if(this._width == 0) {
		this._width = Std.parseFloat(this.get_displayObject().getAttribute("width"));
	}
	else {
		this.set_width(this.get_width());
	}
	if(this._height == 0) {
		this._height = Std.parseFloat(this.get_displayObject().getAttribute("width"));
	}
	else {
		this.set_height(this.get_height());
	}
	this.div.appendChild(this.get_displayObject());
}
com.pblabs.components.scene.SVGComponent.prototype.onFrame = function(dt) {
	if(this.get_isTransformDirty()) {
		this.set_isTransformDirty(false);
		var xOffset = this.parent.get_xOffset() - this.get_width() / 2;
		var yOffset = this.parent.get_yOffset() - this.get_height() / 2;
		this.div.style.webkitTransform = ((((("translate(" + (this._x + xOffset)) + "px, ") + (this._y + yOffset)) + "px) rotate(") + this._angle) + "rad)";
	}
}
com.pblabs.components.scene.SVGComponent.prototype.resourceToken = null;
com.pblabs.components.scene.SVGComponent.prototype.set_height = function(val) {
	if(this.get_displayObject() != null) {
		this.get_displayObject().setAttribute("height",val + "px");
	}
	return com.pblabs.components.scene.js.css.Base2DComponent.prototype.set_height.apply(this,[val]);
}
com.pblabs.components.scene.SVGComponent.prototype.set_width = function(val) {
	if(this.get_displayObject() != null) {
		this.get_displayObject().setAttribute("width",val + "px");
	}
	return com.pblabs.components.scene.js.css.Base2DComponent.prototype.set_width.apply(this,[val]);
}
com.pblabs.components.scene.SVGComponent.prototype.__class__ = com.pblabs.components.scene.SVGComponent;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.__class__ = StringBuf;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
if(!hsl.js.translating) hsl.js.translating = {}
hsl.js.translating.JSSignaler = function(subject,nativeDispatcher,nativeEventType,translator,rejectNullData) { if( subject === $_ ) return; {
	if(null == translator) {
		translator = new hsl.js.translation.DatalessTranslator();
	}
	hsl.haxe.translating.TranslatingSignalerBase.apply(this,[subject,translator,rejectNullData]);
	this.nativeDispatcher = nativeDispatcher;
	this.nativeEventType = this.resolveNativeType(nativeEventType);
	if(null != nativeDispatcher.addEventListener) {
		nativeDispatcher.addEventListener(this.nativeEventType.dom2,$closure(this,"dispatchNative"),false);
	}
	else {
		try {
			if(null == nativeDispatcher.attachEvent) {
				nativeDispatcher[this.nativeEventType.html4] = $closure(this,"dispatchNative");
			}
			else {
				nativeDispatcher.attachEvent(this.nativeEventType.html4,$closure(this,"dispatchNative"));
			}
		}
		catch( $e0 ) {
			{
				var e = $e0;
				null;
			}
		}
	}
}}
hsl.js.translating.JSSignaler.__name__ = ["hsl","js","translating","JSSignaler"];
hsl.js.translating.JSSignaler.__super__ = hsl.haxe.translating.TranslatingSignalerBase;
for(var k in hsl.haxe.translating.TranslatingSignalerBase.prototype ) hsl.js.translating.JSSignaler.prototype[k] = hsl.haxe.translating.TranslatingSignalerBase.prototype[k];
hsl.js.translating.JSSignaler.prototype.disableContextMenu = function() {
	return false;
}
hsl.js.translating.JSSignaler.prototype.nativeDispatcher = null;
hsl.js.translating.JSSignaler.prototype.nativeEventType = null;
hsl.js.translating.JSSignaler.prototype.resolveNativeType = function(type) {
	var $e = (type);
	switch( $e[1] ) {
	case 19:
	{
		var useDOMMouseScroll = false;
		if((document).implementation.hasFeature("MouseEvents","2.0")) {
			try {
				var handle = null;
				handle = (document).body.addEventListener("DOMMouseScroll",function() {
					useDOMMouseScroll = true;
					document.removeEventListener("DOMMouseScroll",handle);
				},false);
				var event = (document).createEvent("MouseScrollEvents");
				event.initMouseEvent("DOMMouseScroll",true,true,window,0,0,0,0,0,false,false,false,false,0,null);
				(document).body.dispatchEvent(event);
			}
			catch( $e0 ) {
				{
					var exception = $e0;
					null;
				}
			}
		}
		return (!useDOMMouseScroll?{ html4 : "onmousewheel", dom2 : "mousewheel"}:{ html4 : "onmousewheel", dom2 : "DOMMouseScroll"});
	}break;
	case 5:
	{
		this.disableContextMenu();
		return { html4 : "onclick", dom2 : "click"}
	}break;
	case 14:
	{
		this.disableContextMenu();
		return { html4 : "onmouseup", dom2 : "mouseup"}
	}break;
	case 15:
	{
		this.disableContextMenu();
		return { html4 : "onmousedown", dom2 : "mousedown"}
	}break;
	case 23:
	{
		this.disableContextMenu();
		return { html4 : "touchstart", dom2 : "touchstart"}
	}break;
	case 24:
	{
		this.disableContextMenu();
		return { html4 : "touchmove", dom2 : "touchmove"}
	}break;
	case 25:
	{
		this.disableContextMenu();
		return { html4 : "touchend", dom2 : "touchend"}
	}break;
	case 26:
	{
		this.disableContextMenu();
		return { html4 : "gesturestart", dom2 : "gesturestart"}
	}break;
	case 27:
	{
		this.disableContextMenu();
		return { html4 : "gesturechange", dom2 : "gesturechange"}
	}break;
	case 28:
	{
		this.disableContextMenu();
		return { html4 : "gestureend", dom2 : "gestureend"}
	}break;
	case 0:
	{
		return (Std["is"](this.nativeDispatcher,js.XMLHttpRequest)?{ html4 : "onload", dom2 : "load"}:{ html4 : "onerror", dom2 : "error"});
	}break;
	default:{
		var name = type[0].toLowerCase();
		return { html4 : "on" + name, dom2 : name}
	}break;
	}
}
hsl.js.translating.JSSignaler.prototype.stop = function(positionInformation) {
	hsl.haxe.translating.TranslatingSignalerBase.prototype.stop.apply(this,[positionInformation]);
	if(null != (this.nativeDispatcher).removeEventListener) {
		(this.nativeDispatcher).removeEventListener(this.nativeEventType,$closure(this,"dispatchNative"));
	}
	else {
		try {
			if(null == (this.nativeDispatcher).detachEvent) {
				Reflect.deleteField(this.nativeDispatcher,this.nativeEventType.html4);
			}
			else {
				(this.nativeDispatcher).detachEvent(this.nativeEventType.html4,$closure(this,"dispatchNative"));
			}
		}
		catch( $e0 ) {
			{
				var exception = $e0;
				null;
			}
		}
	}
}
hsl.js.translating.JSSignaler.prototype.__class__ = hsl.js.translating.JSSignaler;
hsl.js.translating.JSEventType = { __ename__ : ["hsl","js","translating","JSEventType"], __constructs__ : ["ERROR","PROGRESS","LOAD","UNLOAD","ABORT","CLICK","SELECT","CHANGE","SUBMIT","RESET","FOCUS","BLUR","RESIZE","SCROLL","MOUSEUP","MOUSEDOWN","MOUSEMOVE","MOUSEOVER","MOUSEOUT","MOUSEWHEEL","KEYUP","KEYDOWN","KEYPRESS","TOUCHSTART","TOUCHMOVE","TOUCHEND","GESTURESTART","GESTURECHANGE","GESTUREEND"] }
hsl.js.translating.JSEventType.ABORT = ["ABORT",4];
hsl.js.translating.JSEventType.ABORT.toString = $estr;
hsl.js.translating.JSEventType.ABORT.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.BLUR = ["BLUR",11];
hsl.js.translating.JSEventType.BLUR.toString = $estr;
hsl.js.translating.JSEventType.BLUR.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.CHANGE = ["CHANGE",7];
hsl.js.translating.JSEventType.CHANGE.toString = $estr;
hsl.js.translating.JSEventType.CHANGE.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.CLICK = ["CLICK",5];
hsl.js.translating.JSEventType.CLICK.toString = $estr;
hsl.js.translating.JSEventType.CLICK.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.ERROR = ["ERROR",0];
hsl.js.translating.JSEventType.ERROR.toString = $estr;
hsl.js.translating.JSEventType.ERROR.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.FOCUS = ["FOCUS",10];
hsl.js.translating.JSEventType.FOCUS.toString = $estr;
hsl.js.translating.JSEventType.FOCUS.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.GESTURECHANGE = ["GESTURECHANGE",27];
hsl.js.translating.JSEventType.GESTURECHANGE.toString = $estr;
hsl.js.translating.JSEventType.GESTURECHANGE.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.GESTUREEND = ["GESTUREEND",28];
hsl.js.translating.JSEventType.GESTUREEND.toString = $estr;
hsl.js.translating.JSEventType.GESTUREEND.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.GESTURESTART = ["GESTURESTART",26];
hsl.js.translating.JSEventType.GESTURESTART.toString = $estr;
hsl.js.translating.JSEventType.GESTURESTART.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.KEYDOWN = ["KEYDOWN",21];
hsl.js.translating.JSEventType.KEYDOWN.toString = $estr;
hsl.js.translating.JSEventType.KEYDOWN.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.KEYPRESS = ["KEYPRESS",22];
hsl.js.translating.JSEventType.KEYPRESS.toString = $estr;
hsl.js.translating.JSEventType.KEYPRESS.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.KEYUP = ["KEYUP",20];
hsl.js.translating.JSEventType.KEYUP.toString = $estr;
hsl.js.translating.JSEventType.KEYUP.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.LOAD = ["LOAD",2];
hsl.js.translating.JSEventType.LOAD.toString = $estr;
hsl.js.translating.JSEventType.LOAD.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.MOUSEDOWN = ["MOUSEDOWN",15];
hsl.js.translating.JSEventType.MOUSEDOWN.toString = $estr;
hsl.js.translating.JSEventType.MOUSEDOWN.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.MOUSEMOVE = ["MOUSEMOVE",16];
hsl.js.translating.JSEventType.MOUSEMOVE.toString = $estr;
hsl.js.translating.JSEventType.MOUSEMOVE.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.MOUSEOUT = ["MOUSEOUT",18];
hsl.js.translating.JSEventType.MOUSEOUT.toString = $estr;
hsl.js.translating.JSEventType.MOUSEOUT.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.MOUSEOVER = ["MOUSEOVER",17];
hsl.js.translating.JSEventType.MOUSEOVER.toString = $estr;
hsl.js.translating.JSEventType.MOUSEOVER.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.MOUSEUP = ["MOUSEUP",14];
hsl.js.translating.JSEventType.MOUSEUP.toString = $estr;
hsl.js.translating.JSEventType.MOUSEUP.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.MOUSEWHEEL = ["MOUSEWHEEL",19];
hsl.js.translating.JSEventType.MOUSEWHEEL.toString = $estr;
hsl.js.translating.JSEventType.MOUSEWHEEL.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.PROGRESS = ["PROGRESS",1];
hsl.js.translating.JSEventType.PROGRESS.toString = $estr;
hsl.js.translating.JSEventType.PROGRESS.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.RESET = ["RESET",9];
hsl.js.translating.JSEventType.RESET.toString = $estr;
hsl.js.translating.JSEventType.RESET.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.RESIZE = ["RESIZE",12];
hsl.js.translating.JSEventType.RESIZE.toString = $estr;
hsl.js.translating.JSEventType.RESIZE.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.SCROLL = ["SCROLL",13];
hsl.js.translating.JSEventType.SCROLL.toString = $estr;
hsl.js.translating.JSEventType.SCROLL.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.SELECT = ["SELECT",6];
hsl.js.translating.JSEventType.SELECT.toString = $estr;
hsl.js.translating.JSEventType.SELECT.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.SUBMIT = ["SUBMIT",8];
hsl.js.translating.JSEventType.SUBMIT.toString = $estr;
hsl.js.translating.JSEventType.SUBMIT.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.TOUCHEND = ["TOUCHEND",25];
hsl.js.translating.JSEventType.TOUCHEND.toString = $estr;
hsl.js.translating.JSEventType.TOUCHEND.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.TOUCHMOVE = ["TOUCHMOVE",24];
hsl.js.translating.JSEventType.TOUCHMOVE.toString = $estr;
hsl.js.translating.JSEventType.TOUCHMOVE.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.TOUCHSTART = ["TOUCHSTART",23];
hsl.js.translating.JSEventType.TOUCHSTART.toString = $estr;
hsl.js.translating.JSEventType.TOUCHSTART.__enum__ = hsl.js.translating.JSEventType;
hsl.js.translating.JSEventType.UNLOAD = ["UNLOAD",3];
hsl.js.translating.JSEventType.UNLOAD.toString = $estr;
hsl.js.translating.JSEventType.UNLOAD.__enum__ = hsl.js.translating.JSEventType;
com.pblabs.components.tasks.SerialTask = function(subtask1,subtask2,subtask3) { if( subtask1 === $_ ) return; {
	var subtasks = new Array();
	if(subtask1 != null) {
		subtasks.push(subtask1);
	}
	if(subtask2 != null) {
		subtasks.push(subtask2);
	}
	if(subtask3 != null) {
		subtasks.push(subtask3);
	}
	com.pblabs.components.tasks.TaskContainer.apply(this,[com.pblabs.components.tasks.TaskContainer.TYPE_SERIAL,subtasks]);
}}
com.pblabs.components.tasks.SerialTask.__name__ = ["com","pblabs","components","tasks","SerialTask"];
com.pblabs.components.tasks.SerialTask.__super__ = com.pblabs.components.tasks.TaskContainer;
for(var k in com.pblabs.components.tasks.TaskContainer.prototype ) com.pblabs.components.tasks.SerialTask.prototype[k] = com.pblabs.components.tasks.TaskContainer.prototype[k];
com.pblabs.components.tasks.SerialTask.prototype.__class__ = com.pblabs.components.tasks.SerialTask;
com.pblabs.components.input.InputData = function(p) { if( p === $_ ) return; {
	this.touchCount = 1;
	this.isMouseDown = false;
}}
com.pblabs.components.input.InputData.__name__ = ["com","pblabs","components","input","InputData"];
com.pblabs.components.input.InputData.prototype.inputComponent = null;
com.pblabs.components.input.InputData.prototype.inputLocation = null;
com.pblabs.components.input.InputData.prototype.isMouseDown = null;
com.pblabs.components.input.InputData.prototype.touchCount = null;
com.pblabs.components.input.InputData.prototype.__class__ = com.pblabs.components.input.InputData;
com.pblabs.components.input.GestureData = function(p) { if( p === $_ ) return; {
	com.pblabs.components.input.InputData.apply(this,[]);
	this.scale = 1;
	this.rotation = 0;
}}
com.pblabs.components.input.GestureData.__name__ = ["com","pblabs","components","input","GestureData"];
com.pblabs.components.input.GestureData.__super__ = com.pblabs.components.input.InputData;
for(var k in com.pblabs.components.input.InputData.prototype ) com.pblabs.components.input.GestureData.prototype[k] = com.pblabs.components.input.InputData.prototype[k];
com.pblabs.components.input.GestureData.prototype.rotation = null;
com.pblabs.components.input.GestureData.prototype.scale = null;
com.pblabs.components.input.GestureData.prototype.__class__ = com.pblabs.components.input.GestureData;
com.pblabs.engine.core.PBContext = function(name) { if( name === $_ ) return; {
	if(name == null) this.initializeName();
	else this.name = name;
	this.injector = this.createInjector();
	this._managers = com.pblabs.util.ds.Maps.newHashMap(String);
	this._processManager = this.registerManager(com.pblabs.engine.time.IProcessManager,new com.pblabs.engine.time.ProcessManager(),null,true);
	this._processManager.set_paused(true);
	this._tempPropertyInfo = new com.pblabs.engine.core.PropertyInfo();
}}
com.pblabs.engine.core.PBContext.__name__ = ["com","pblabs","engine","core","PBContext"];
com.pblabs.engine.core.PBContext.findProperty = function(db,entity,reference,willSet,providedPi,suppressErrors) {
	if(suppressErrors == null) suppressErrors = false;
	if(willSet == null) willSet = false;
	if(reference == null || reference.getProperty() == null || reference.getProperty() == "") {
		return null;
	}
	if(providedPi == null) {
		providedPi = new com.pblabs.engine.core.PropertyInfo();
	}
	if(reference.cachedLookup != null && reference.cachedLookup.length > 0) {
		if(entity == null) {
			com.pblabs.engine.debug.Log.error("Cached prop lookup, but entity is null",{ fileName : "PBContext.hx", lineNumber : 429, className : "com.pblabs.engine.core.PBContext", methodName : "findProperty"});
			return null;
		}
		var cl = reference.cachedLookup;
		var cachedWalk = entity.lookupComponentByName(cl[0]);
		if(!cachedWalk) {
			com.pblabs.engine.core.PBContext.handleMissingProperty(suppressErrors,reference,cl[0]);
			return null;
		}
		{
			var _g1 = 1, _g = cl.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				cachedWalk = Reflect.field(cachedWalk,cl[i]);
				if(cachedWalk == null) {
					com.pblabs.engine.core.PBContext.handleMissingProperty(suppressErrors,reference,cl[i]);
					return null;
				}
			}
		}
		var cachedPi = providedPi;
		cachedPi.propertyParent = cachedWalk;
		cachedPi.propertyName = (cl.length > 1?cl[cl.length - 1]:null);
		return cachedPi;
	}
	var propertyName = reference.getProperty();
	var path = propertyName.split(".");
	var isTemplateXML = false;
	var itemName = path[0];
	var curIdx = 1;
	var startChar = itemName.charAt(0);
	var curLookup = itemName.substr(1);
	var parentElem = null;
	if(startChar == "@") {
		if(entity == null) {
			com.pblabs.engine.debug.Log.error("component ref but no entity given for " + reference,{ fileName : "PBContext.hx", lineNumber : 468, className : "com.pblabs.engine.core.PBContext", methodName : "findProperty"});
			return null;
		}
		parentElem = entity.lookupComponentByName(curLookup);
		if(parentElem == null) {
			com.pblabs.engine.core.PBContext.handleMissingProperty(suppressErrors,reference,curLookup);
			return null;
		}
		path[0] = curLookup;
		reference.cachedLookup = path;
	}
	else if(startChar == "#") {
		parentElem = db._nameManager.get(curLookup);
		if(parentElem == null) {
			com.pblabs.engine.core.PBContext.handleMissingProperty(suppressErrors,reference,curLookup);
			return null;
		}
		curIdx++;
		curLookup = path[1];
		var comLookup = (function($this) {
			var $r;
			var $t = parentElem;
			if(Std["is"]($t,com.pblabs.engine.core.IEntity)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).lookupComponentByName(curLookup);
		if(comLookup == null) {
			com.pblabs.engine.core.PBContext.handleMissingProperty(suppressErrors,reference,curLookup,("Could not find component on named entity '" + ((function($this) {
				var $r;
				var $t = parentElem;
				if(Std["is"]($t,com.pblabs.engine.core.IEntity)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))).get_name()) + "'");
			return null;
		}
		parentElem = comLookup;
	}
	else if(startChar == "!") {
		throw "! XML referencing not supported yet";
	}
	else {
		com.pblabs.engine.core.PBContext.handleMissingProperty(suppressErrors,reference,startChar,"Got a property path that doesn't start with !, #, or @");
		return null;
	}
	if(curIdx < path.length) {
		curLookup = path[curIdx++];
	}
	else {
		curLookup = null;
	}
	while(curIdx < path.length && parentElem != null) {
		var oldParentElem = parentElem;
		try {
			parentElem = Reflect.field(parentElem,curLookup);
		}
		catch( $e0 ) {
			if( js.Boot.__instanceof($e0,String) ) {
				var e = $e0;
				{
					parentElem = null;
				}
			} else throw($e0);
		}
		var gotEmpty = false;
		if(parentElem == null) {
			gotEmpty = true;
		}
		if(parentElem == null) {
			gotEmpty = true;
		}
		if(gotEmpty) {
			com.pblabs.engine.core.PBContext.handleMissingProperty(suppressErrors,reference,curLookup);
			return null;
		}
		curLookup = path[curIdx++];
	}
	if(parentElem != null) {
		var pi = providedPi;
		pi.propertyParent = parentElem;
		pi.propertyName = curLookup;
		return pi;
	}
	return null;
}
com.pblabs.engine.core.PBContext.checkForHaxeProperties = function(info,p) {
	com.pblabs.util.Preconditions.checkNotNull(info,"Null PropertyInfo");
	if(info.propertyParent == null) {
		com.pblabs.engine.debug.Log.error(["info.propertyParent",info.propertyParent],{ fileName : "PBContext.hx", lineNumber : 563, className : "com.pblabs.engine.core.PBContext", methodName : "checkForHaxeProperties"});
		return;
	}
	if(Lambda.has(Type.getInstanceFields(Type.getClass(info.propertyParent)),"get_" + info.propertyName)) {
		p.getterName = "get_" + info.propertyName;
	}
	if(Lambda.has(Type.getInstanceFields(Type.getClass(info.propertyParent)),"set_" + info.propertyName)) {
		p.setterName = "set_" + info.propertyName;
	}
	p.getterSetterChecked = true;
}
com.pblabs.engine.core.PBContext.handleMissingProperty = function(suppressErrors,reference,context,msg) {
	if(suppressErrors) {
		return;
	}
	if(msg == null) {
		msg = "findProperty couldn't resolve";
	}
	com.pblabs.engine.debug.Log.warn([msg,"context",context,"ref",reference.getProperty(),com.pblabs.engine.debug.Log.getStackTrace()],{ fileName : "PBContext.hx", lineNumber : 586, className : "com.pblabs.engine.core.PBContext", methodName : "handleMissingProperty"});
}
com.pblabs.engine.core.PBContext.prototype._currentGroup = null;
com.pblabs.engine.core.PBContext.prototype._managers = null;
com.pblabs.engine.core.PBContext.prototype._nameManager = null;
com.pblabs.engine.core.PBContext.prototype._processManager = null;
com.pblabs.engine.core.PBContext.prototype._tempPropertyInfo = null;
com.pblabs.engine.core.PBContext.prototype.allocate = function(type) {
	if(this.get_currentGroup() == null) null;
	if(!this.get_currentGroup().get_context() == this) null;
	com.pblabs.util.Preconditions.checkNotNull(type,"Type class is null");
	if(type == com.pblabs.engine.core.IEntity) {
		type = Type.resolveClass("com.pblabs.engine.core.Entity");
	}
	var i = Type.createInstance(type,[]);
	if(i == null) null;
	if(!Std["is"](i,com.pblabs.engine.core.IEntityComponent)) {
		this.injector.injectInto(i);
	}
	else {
		(function($this) {
			var $r;
			var $t = i;
			if(Std["is"]($t,com.pblabs.engine.core.IEntityComponent)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).set_context(this);
	}
	return i;
}
com.pblabs.engine.core.PBContext.prototype.allocateEntity = function() {
	return this.allocate(com.pblabs.engine.core.Entity);
}
com.pblabs.engine.core.PBContext.prototype.createInjector = function() {
	return new com.pblabs.engine.injection.ComponentInjector();
}
com.pblabs.engine.core.PBContext.prototype.currentGroup = null;
com.pblabs.engine.core.PBContext.prototype.getManager = function(cls,name) {
	return this.injector.getMapping(cls,name);
}
com.pblabs.engine.core.PBContext.prototype.getObjectNamed = function(name) {
	return this._nameManager.get(name);
}
com.pblabs.engine.core.PBContext.prototype.getProperty = function(property,defaultVal,entity) {
	if(property == null) {
		return null;
	}
	var info = com.pblabs.engine.core.PBContext.findProperty(this,entity,property,false,this._tempPropertyInfo,false);
	var result = null;
	if(info != null && !property.getterSetterChecked) {
		com.pblabs.engine.core.PBContext.checkForHaxeProperties(info,property);
	}
	if(info != null) {
		result = (function($this) {
			var $r;
			com.pblabs.util.Preconditions.checkNotNull(property,"PropertyReference cannot be null");
			$r = (info.propertyName != null?(property.getterName == null?Reflect.field(info.propertyParent,info.propertyName):Reflect.field(info.propertyParent,property.getterName).apply(info.propertyParent,[])):info.propertyParent);
			return $r;
		}(this));
	}
	else {
		result = defaultVal;
	}
	this._tempPropertyInfo.clear();
	return result;
}
com.pblabs.engine.core.PBContext.prototype.get_currentGroup = function() {
	return this._currentGroup;
}
com.pblabs.engine.core.PBContext.prototype.get_processManager = function() {
	return this._processManager;
}
com.pblabs.engine.core.PBContext.prototype.initializeManagers = function() {
	null;
}
com.pblabs.engine.core.PBContext.prototype.initializeName = function() {
	com.pblabs.engine.core.PBContext.contextNameCounter++;
	this.name = "Context" + com.pblabs.engine.core.PBContext.contextNameCounter;
}
com.pblabs.engine.core.PBContext.prototype.inject = function(object) {
	null;
}
com.pblabs.engine.core.PBContext.prototype.injectInto = function(instance) {
	this.injector.injectInto(instance);
}
com.pblabs.engine.core.PBContext.prototype.injector = null;
com.pblabs.engine.core.PBContext.prototype.lookup = function(name) {
	return this._nameManager.get(name);
}
com.pblabs.engine.core.PBContext.prototype.lookupComponent = function(entityName,componentName) {
	return this._nameManager.getComponentByName(entityName,componentName);
}
com.pblabs.engine.core.PBContext.prototype.lookupEntity = function(name) {
	return (function($this) {
		var $r;
		var $t = $this._nameManager.get(name);
		if(Std["is"]($t,com.pblabs.engine.core.IEntity)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
}
com.pblabs.engine.core.PBContext.prototype.name = null;
com.pblabs.engine.core.PBContext.prototype.processManager = null;
com.pblabs.engine.core.PBContext.prototype.register = function(object) {
	com.pblabs.util.Preconditions.checkNotNull(object,"Cannot register a null object");
	com.pblabs.util.Preconditions.checkNotNull(this._nameManager,"NameManager not yet initialized");
	com.pblabs.util.Preconditions.checkNotNull(this.rootGroup,"rootGroup not yet initialized");
	this._nameManager.add(object);
	if(object.get_owningGroup() == null) {
		if(this._currentGroup != null) {
			object.set_owningGroup(this._currentGroup);
		}
		else {
			throw "Had null currentGroup; currentGroup should always be a value, and should be rootGroup by default.";
		}
	}
	else if(object.get_owningGroup().get_rootGroup() != this.rootGroup) {
		throw "Object group is not null, but the root group is not this context's root group";
	}
	com.pblabs.util.Preconditions.checkArgument(object.get_owningGroup().get_rootGroup() == this.rootGroup,"Object root group is not the context");
}
com.pblabs.engine.core.PBContext.prototype.registerManager = function(clazz,instance,optionalName,suppressInject) {
	if(suppressInject == null) suppressInject = false;
	if(optionalName == null) optionalName = "";
	if(instance == null) {
		instance = this.allocate(clazz);
	}
	this._managers.set(com.pblabs.engine.util.PBUtil.getManagerName(clazz,optionalName),instance);
	if(!suppressInject) {
		this.injector.injectInto(instance);
	}
	this.injector.mapValue(clazz,instance,optionalName);
	if(Std["is"](instance,com.pblabs.engine.core.IPBManager)) {
		(function($this) {
			var $r;
			var $t = instance;
			if(Std["is"]($t,com.pblabs.engine.core.IPBManager)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).startup();
	}
	return instance;
}
com.pblabs.engine.core.PBContext.prototype.rootGroup = null;
com.pblabs.engine.core.PBContext.prototype.setInjectorParent = function(i) {
	com.pblabs.util.Preconditions.checkNotNull(i);
	this.injector.set_parent(i);
}
com.pblabs.engine.core.PBContext.prototype.setProperty = function(property,value,entity) {
	var info = com.pblabs.engine.core.PBContext.findProperty(this,entity,property,true,this._tempPropertyInfo);
	if(info != null && !property.getterSetterChecked) {
		com.pblabs.engine.core.PBContext.checkForHaxeProperties(info,property);
	}
	if(info != null) {
		if(info.propertyName != null) {
			if(property == null || property.setterName == null) {
				info.propertyParent[info.propertyName] = value;
			}
			else {
				Reflect.field(info.propertyParent,property.setterName).apply(info.propertyParent,[value]);
			}
		}
	}
	else {
		com.pblabs.engine.debug.Log.warn(["property",property,"info",info],{ fileName : "PBContext.hx", lineNumber : 627, className : "com.pblabs.engine.core.PBContext", methodName : "setProperty"});
	}
	this._tempPropertyInfo.clear();
}
com.pblabs.engine.core.PBContext.prototype.set_currentGroup = function(val) {
	com.pblabs.util.Preconditions.checkNotNull(val,"You cannot set the currentGroup to null; it must always be a valid PBGroup.");
	com.pblabs.util.Preconditions.checkArgument(val.get_context() == this,(((("Cannot mix objects between contexts. this=" + com.pblabs.util.ReflectUtil.getClassName(this)) + ", this.group=") + this.get_currentGroup()) + ", val=") + val);
	this._currentGroup = val;
	return val;
}
com.pblabs.engine.core.PBContext.prototype.shutdown = function() {
	this._processManager.stop();
	this.rootGroup.destroy();
	this.rootGroup = null;
	this._currentGroup = null;
	{ var $it0 = this._managers.iterator();
	while( $it0.hasNext() ) { var m = $it0.next();
	{
		if(Std["is"](m,com.pblabs.engine.core.IPBManager)) {
			(function($this) {
				var $r;
				var $t = m;
				if(Std["is"]($t,com.pblabs.engine.core.IPBManager)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)).shutdown();
		}
	}
	}}
	this._managers = null;
	this.injector = null;
	this._tempPropertyInfo = null;
}
com.pblabs.engine.core.PBContext.prototype.started = null;
com.pblabs.engine.core.PBContext.prototype.startup = function() {
	com.pblabs.util.Preconditions.checkNotNull(this.injector,"WTF is the injector null?");
	this._nameManager = this.getManager(com.pblabs.engine.core.NameManager);
	com.pblabs.util.Preconditions.checkNotNull(this._nameManager,"WTF is the nameManager null?");
	this.injector.mapValue(com.pblabs.engine.core.IPBContext,this);
	com.pblabs.util.Preconditions.checkArgument(this.injector.getMapping(com.pblabs.engine.core.IPBContext) == this,"Injector borked");
	var rg = new com.pblabs.engine.core.PBGroup();
	rg.set_context(this);
	rg.set_name(this._nameManager.validateName(this.name + " RootGroup"));
	this._nameManager.add(rg);
	this.rootGroup = rg;
	com.pblabs.engine.debug.Log.debug("about to set current group, currentGroup=" + this.get_currentGroup(),{ fileName : "PBContext.hx", lineNumber : 246, className : "com.pblabs.engine.core.PBContext", methodName : "startup"});
	this.set_currentGroup(rg);
	com.pblabs.engine.debug.Log.debug("done set current group",{ fileName : "PBContext.hx", lineNumber : 248, className : "com.pblabs.engine.core.PBContext", methodName : "startup"});
	this.injector.mapValue(com.pblabs.engine.core.IPBGroup,this.rootGroup);
	this.initializeManagers();
}
com.pblabs.engine.core.PBContext.prototype.unregister = function(object) {
	this._nameManager.remove(object);
	this.getManager(com.pblabs.engine.core.SetManager).removeObjectFromAll(object);
}
com.pblabs.engine.core.PBContext.prototype.unregisterManager = function(clazz,name) {
	var mng = this._managers.remove(com.pblabs.engine.util.PBUtil.getManagerName(clazz,name));
	if(Std["is"](mng,com.pblabs.engine.core.IPBManager)) {
		(function($this) {
			var $r;
			var $t = mng;
			if(Std["is"]($t,com.pblabs.engine.core.IPBManager)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).shutdown();
	}
	this.injector.unmap(clazz,name);
}
com.pblabs.engine.core.PBContext.prototype.__class__ = com.pblabs.engine.core.PBContext;
com.pblabs.engine.core.PBContext.__interfaces__ = [com.pblabs.engine.core.IPBContext];
com.pblabs.engine.core.PropertyInfo = function(p) { if( p === $_ ) return; {
	this.propertyParent = null;
	this.propertyName = null;
	this.isRuntimeProperty = false;
}}
com.pblabs.engine.core.PropertyInfo.__name__ = ["com","pblabs","engine","core","PropertyInfo"];
com.pblabs.engine.core.PropertyInfo.prototype.clear = function() {
	this.propertyParent = null;
	this.propertyName = null;
	this.isRuntimeProperty = false;
}
com.pblabs.engine.core.PropertyInfo.prototype.getValue = function(p) {
	com.pblabs.util.Preconditions.checkNotNull(p,"PropertyReference cannot be null");
	if(this.propertyName != null) {
		if(p.getterName == null) {
			return Reflect.field(this.propertyParent,this.propertyName);
		}
		else {
			return Reflect.field(this.propertyParent,p.getterName).apply(this.propertyParent,[]);
		}
	}
	else {
		return this.propertyParent;
	}
}
com.pblabs.engine.core.PropertyInfo.prototype.isRuntimeProperty = null;
com.pblabs.engine.core.PropertyInfo.prototype.propertyName = null;
com.pblabs.engine.core.PropertyInfo.prototype.propertyParent = null;
com.pblabs.engine.core.PropertyInfo.prototype.setValue = function(value,p) {
	if(this.propertyName != null) {
		if(p == null || p.setterName == null) {
			this.propertyParent[this.propertyName] = value;
		}
		else {
			Reflect.field(this.propertyParent,p.setterName).apply(this.propertyParent,[value]);
		}
	}
}
com.pblabs.engine.core.PropertyInfo.prototype.toString = function() {
	return (((("PropertyInfo propertyParent=" + com.pblabs.util.ReflectUtil.getClass(this.propertyParent)) + ", propertyName=") + this.propertyName) + ", isRuntimeProperty=") + this.isRuntimeProperty;
}
com.pblabs.engine.core.PropertyInfo.prototype.__class__ = com.pblabs.engine.core.PropertyInfo;
com.pblabs.geom.LineSegmentTools = function() { }
com.pblabs.geom.LineSegmentTools.__name__ = ["com","pblabs","geom","LineSegmentTools"];
com.pblabs.geom.LineSegmentTools.getMidpoint = function(line) {
	return com.pblabs.geom.VectorTools.getMidpoint(line.a,line.b);
}
com.pblabs.geom.LineSegmentTools.prototype.__class__ = com.pblabs.geom.LineSegmentTools;
com.pblabs.util.SignallingVar = function(initialValue) { if( initialValue === $_ ) return; {
	this.signaller = new hsl.haxe.DirectSignaler(this);
	this._value = initialValue;
}}
com.pblabs.util.SignallingVar.__name__ = ["com","pblabs","util","SignallingVar"];
com.pblabs.util.SignallingVar.checkForSignallingVar = function(prop,c,fieldName) {
	if(Std["is"](Reflect.field(c,fieldName),com.pblabs.util.SignallingVar)) {
		return new com.pblabs.engine.core.PropertyReference(prop + ".value");
	}
	else {
		return new com.pblabs.engine.core.PropertyReference(prop);
	}
}
com.pblabs.util.SignallingVar.prototype._value = null;
com.pblabs.util.SignallingVar.prototype.clear = function() {
	this.signaller.unbindAll();
	this._value = null;
}
com.pblabs.util.SignallingVar.prototype.get_value = function() {
	return this._value;
}
com.pblabs.util.SignallingVar.prototype.set_value = function(val) {
	this._value = val;
	this.signaller.dispatch(this._value,null,{ fileName : "SignallingVar.hx", lineNumber : 57, className : "com.pblabs.util.SignallingVar", methodName : "set_value"});
	return val;
}
com.pblabs.util.SignallingVar.prototype.signaller = null;
com.pblabs.util.SignallingVar.prototype.value = null;
com.pblabs.util.SignallingVar.prototype.__class__ = com.pblabs.util.SignallingVar;
com.pblabs.components.input.MouseInputManager = function(p) { if( p === $_ ) return; {
	com.pblabs.components.input.BaseInputManager.apply(this,[]);
	this.currentTouches = 0;
	this._isRootDocumentMouse = true;
}}
com.pblabs.components.input.MouseInputManager.__name__ = ["com","pblabs","components","input","MouseInputManager"];
com.pblabs.components.input.MouseInputManager.__super__ = com.pblabs.components.input.BaseInputManager;
for(var k in com.pblabs.components.input.BaseInputManager.prototype ) com.pblabs.components.input.MouseInputManager.prototype[k] = com.pblabs.components.input.BaseInputManager.prototype[k];
com.pblabs.components.input.MouseInputManager.prototype._isRootDocumentMouse = null;
com.pblabs.components.input.MouseInputManager.prototype.bindSignals = function() {
	this.mouseDown = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.MOUSEDOWN,new hsl.js.translation.mouse.MouseLocationTranslator());
	this.mouseUp = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.MOUSEUP,new hsl.js.translation.mouse.MouseLocationTranslator());
	this.mouseMove = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.MOUSEMOVE,new hsl.js.translation.mouse.MouseLocationTranslator());
	this.mouseClick = new hsl.js.translating.JSSignaler(this,js.Lib.document,hsl.js.translating.JSEventType.CLICK,new hsl.js.translation.mouse.MouseLocationTranslator());
}
com.pblabs.components.input.MouseInputManager.prototype.currentTouches = null;
com.pblabs.components.input.MouseInputManager.prototype.freeSignals = function() {
	this.mouseDown.unbindAll();
	this.mouseUp.unbindAll();
	this.mouseMove.unbindAll();
	this.mouseClick.unbindAll();
	this.mouseDown = null;
	this.mouseUp = null;
	this.mouseMove = null;
	this.mouseClick = null;
}
com.pblabs.components.input.MouseInputManager.prototype.get_isRootDocumentMouse = function() {
	return this._isRootDocumentMouse;
}
com.pblabs.components.input.MouseInputManager.prototype.isRootDocumentMouse = null;
com.pblabs.components.input.MouseInputManager.prototype.manualMouseDown = function(mouseX,mouseY,touches) {
	if(touches == null) touches = 1;
	this.currentTouches = touches;
	this.mouseDown.dispatch(new hsl.haxe.data.mouse.MouseLocation(mouseX,mouseY,new hsl.haxe.data.mathematics.Point(mouseX,mouseY)),null,{ fileName : "MouseInputManager.hx", lineNumber : 103, className : "com.pblabs.components.input.MouseInputManager", methodName : "manualMouseDown"});
}
com.pblabs.components.input.MouseInputManager.prototype.manualMouseMove = function(mouseX,mouseY,touches) {
	if(touches == null) touches = 1;
	this.currentTouches = touches;
	this.mouseMove.dispatch(new hsl.haxe.data.mouse.MouseLocation(mouseX,mouseY,new hsl.haxe.data.mathematics.Point(mouseX,mouseY)),null,{ fileName : "MouseInputManager.hx", lineNumber : 117, className : "com.pblabs.components.input.MouseInputManager", methodName : "manualMouseMove"});
}
com.pblabs.components.input.MouseInputManager.prototype.manualMouseUp = function(mouseX,mouseY,touches) {
	if(touches == null) touches = 0;
	this.currentTouches = touches;
	this.mouseUp.dispatch(new hsl.haxe.data.mouse.MouseLocation(mouseX,mouseY,new hsl.haxe.data.mathematics.Point(mouseX,mouseY)),null,{ fileName : "MouseInputManager.hx", lineNumber : 131, className : "com.pblabs.components.input.MouseInputManager", methodName : "manualMouseUp"});
}
com.pblabs.components.input.MouseInputManager.prototype.mouseClick = null;
com.pblabs.components.input.MouseInputManager.prototype.mouseDown = null;
com.pblabs.components.input.MouseInputManager.prototype.mouseMove = null;
com.pblabs.components.input.MouseInputManager.prototype.mouseUp = null;
com.pblabs.components.input.MouseInputManager.prototype.rootMouseListener = function(e) {
	e.preventDefault();
}
com.pblabs.components.input.MouseInputManager.prototype.set_isRootDocumentMouse = function(val) {
	if(val) {
		js.Lib.document.addEventListener("onmousedown",$closure(this,"rootMouseListener"));
		js.Lib.document.addEventListener("onmouseup",$closure(this,"rootMouseListener"));
		js.Lib.document.addEventListener("onclick",$closure(this,"rootMouseListener"));
	}
	else {
		js.Lib.document.removeEventListener("onmousedown",$closure(this,"rootMouseListener"));
		js.Lib.document.removeEventListener("onmouseup",$closure(this,"rootMouseListener"));
		js.Lib.document.removeEventListener("onclick",$closure(this,"rootMouseListener"));
	}
	this._isRootDocumentMouse = val;
	return val;
}
com.pblabs.components.input.MouseInputManager.prototype.shutdown = function() {
	com.pblabs.components.input.BaseInputManager.prototype.shutdown.apply(this,[]);
	this.freeSignals();
}
com.pblabs.components.input.MouseInputManager.prototype.startup = function() {
	com.pblabs.components.input.BaseInputManager.prototype.startup.apply(this,[]);
	this.bindSignals();
}
com.pblabs.components.input.MouseInputManager.prototype.__class__ = com.pblabs.components.input.MouseInputManager;
com.pblabs.util.Comparators = function() { }
com.pblabs.util.Comparators.__name__ = ["com","pblabs","util","Comparators"];
com.pblabs.util.Comparators.createReverse = function(comparator) {
	return function(o1,o2) {
		return comparator(o2,o1);
	}
}
com.pblabs.util.Comparators.createFor = function(clazz) {
	if(Std["is"](clazz,String)) {
		return $closure(com.pblabs.util.Comparators,"compareStrings");
	}
	else if(Std["is"](clazz,Int)) {
		return $closure(com.pblabs.util.Comparators,"compareInts");
	}
	else if(Std["is"](clazz,Float)) {
		return $closure(com.pblabs.util.Comparators,"compareNumbers");
	}
	else if(Std["is"](clazz,Bool)) {
		return $closure(com.pblabs.util.Comparators,"compareBooleans");
	}
	else if(Std["is"](clazz,com.pblabs.util.Comparable)) {
		return $closure(com.pblabs.util.Comparators,"compareComparables");
	}
	return $closure(com.pblabs.util.Comparators,"compareUnknowns");
}
com.pblabs.util.Comparators.createFields = function(sortFields,defaults) {
	if(defaults == null) {
		defaults = [];
	}
	return function(a,b) {
		{
			var _g1 = 0, _g = sortFields.length;
			while(_g1 < _g) {
				var ii = _g1++;
				var sortField = sortFields[ii];
				var def = defaults[ii];
				var aVal = (a != null && Reflect.hasField(a,sortField)?com.pblabs.util.ReflectUtil.field(a,sortField):def);
				var bVal = (b != null && Reflect.hasField(b,sortField)?com.pblabs.util.ReflectUtil.field(b,sortField):def);
				var c = com.pblabs.util.Comparators.compareUnknowns(aVal,bVal);
				if(c != 0) {
					return c;
				}
			}
		}
		return 0;
	}
}
com.pblabs.util.Comparators.createNullSafe = function(comparator) {
	return function(o1,o2) {
		if(o1 == o2) {
			return 0;
		}
		else if(o1 == null) {
			return -1;
		}
		else if(o2 == null) {
			return 1;
		}
		else {
			return comparator(o1,o2);
		}
	}
}
com.pblabs.util.Comparators.compareComparables = function(c1,c2) {
	return c1.compareTo(c2);
}
com.pblabs.util.Comparators.compareStrings = function(s1,s2) {
	return ((s1 == s2)?0:(((s1 > s2)?1:-1)));
}
com.pblabs.util.Comparators.compareStringsInsensitively = function(s1,s2) {
	return com.pblabs.util.Comparators.compareStrings(s1.toLowerCase(),s2.toLowerCase());
}
com.pblabs.util.Comparators.compareUnknowns = function(o1,o2) {
	if(o1 == o2) {
		return 0;
	}
	else if(o1 == null) {
		return -1;
	}
	else if(o2 == null) {
		return 1;
	}
	else if(Std["is"](o1,com.pblabs.util.Comparable)) {
		return (function($this) {
			var $r;
			var $t = o1;
			if(Std["is"]($t,com.pblabs.util.Comparable)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).compareTo(o2);
	}
	else if(Std["is"](o1,Float) && Std["is"](o2,Float)) {
		return com.pblabs.util.Comparators.compareNumbers((function($this) {
			var $r;
			var $t = o1;
			if(Std["is"]($t,Float)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)),(function($this) {
			var $r;
			var $t = o2;
			if(Std["is"]($t,Float)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	else if((Std["is"](o1,Bool)) && (Std["is"](o2,Bool))) {
		return com.pblabs.util.Comparators.compareBooleans((function($this) {
			var $r;
			var $t = o1;
			if(Std["is"]($t,Bool)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)),(function($this) {
			var $r;
			var $t = o2;
			if(Std["is"]($t,Bool)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	else {
		return com.pblabs.util.Comparators.compareStrings(Std.string(o1),Std.string(o2));
	}
}
com.pblabs.util.Comparators.compareBooleans = function(v1,v2) {
	return (v1 == v2?0:(v1?1:-1));
}
com.pblabs.util.Comparators.compareInts = function(v1,v2) {
	if(v1 > v2) {
		return 1;
	}
	else if(v1 == v2) {
		return 0;
	}
	else {
		return -1;
	}
}
com.pblabs.util.Comparators.compareNumbers = function(v1,v2) {
	if(v1 > v2) {
		return 1;
	}
	else if(v1 < v2) {
		return -1;
	}
	else if(v1 == v2) {
		return 0;
	}
	return com.pblabs.util.Comparators.compareBooleans(Math.isNaN(v1),Math.isNaN(v2));
}
com.pblabs.util.Comparators.prototype.__class__ = com.pblabs.util.Comparators;
if(!hsl.js.translation.touch) hsl.js.translation.touch = {}
hsl.js.translation.touch.TouchTranslator = function(preventDefault) { if( preventDefault === $_ ) return; {
	if(preventDefault == null) preventDefault = true;
	hsl.js.translation.JSTranslatorBase.apply(this,[preventDefault]);
}}
hsl.js.translation.touch.TouchTranslator.__name__ = ["hsl","js","translation","touch","TouchTranslator"];
hsl.js.translation.touch.TouchTranslator.__super__ = hsl.js.translation.JSTranslatorBase;
for(var k in hsl.js.translation.JSTranslatorBase.prototype ) hsl.js.translation.touch.TouchTranslator.prototype[k] = hsl.js.translation.JSTranslatorBase.prototype[k];
hsl.js.translation.touch.TouchTranslator.prototype.translate = function(nativeEvent) {
	var event = nativeEvent;
	return new hsl.haxe.translation.Translation(event,this.targetFromDOMEvent(nativeEvent));
}
hsl.js.translation.touch.TouchTranslator.prototype.__class__ = hsl.js.translation.touch.TouchTranslator;
hsl.js.translation.touch.TouchTranslator.__interfaces__ = [hsl.haxe.translation.Translator];
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
com.pblabs.util.StringUtil = function() { }
com.pblabs.util.StringUtil.__name__ = ["com","pblabs","util","StringUtil"];
com.pblabs.util.StringUtil.add = function(s1,s2) {
	return s1() + s2();
}
com.pblabs.util.StringUtil.isBlank = function(s) {
	return s == null || s == "";
}
com.pblabs.util.StringUtil.getFileExtension = function(file) {
	var extensionIndex = file.lastIndexOf(".");
	if(extensionIndex == -1) {
		return "";
	}
	else {
		return file.substr(extensionIndex + 1,file.length);
	}
}
com.pblabs.util.StringUtil.objectToString = function(obj,fields) {
	var s = new StringBuf();
	try {
		s.b[s.b.length] = "[" + com.pblabs.util.ReflectUtil.tinyClassName(obj);
		fields = (fields == null?Reflect.fields(obj):fields);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				s.b[s.b.length] = "[undefined";
				fields = (fields == null?[]:fields);
			}
		}
	}
	{
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			s.b[s.b.length] = ((", " + f) + "=") + com.pblabs.util.ReflectUtil.field(obj,f);
		}
	}
	s.b[s.b.length] = "]";
	return s.b.join("");
}
com.pblabs.util.StringUtil.stringify = function(obj,fields) {
	var s = new StringBuf();
	{
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			s.b[s.b.length] = ((f + "=") + com.pblabs.util.ReflectUtil.field(obj,f)) + ", ";
		}
	}
	var str = s.b.join("");
	return str.substr(0,str.length - 2);
}
com.pblabs.util.StringUtil.getStringKey = function(obj) {
	if(Std["is"](obj,String)) {
		return (function($this) {
			var $r;
			var $t = obj;
			if(Std["is"]($t,String)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
	}
	else {
		return (function($this) {
			var $r;
			var $e = (Type["typeof"](obj));
			switch( $e[1] ) {
			case 4:
			{
				$r = Type.getClassName(obj);
			}break;
			default:{
				$r = Std.string(obj);
			}break;
			}
			return $r;
		}(this));
	}
}
com.pblabs.util.StringUtil.hashCode = function(str) {
	var code = 0;
	if(str != null) {
		{
			var _g1 = 0, _g = str.length;
			while(_g1 < _g) {
				var ii = _g1++;
				code = 31 * code + str.charCodeAt(ii);
			}
		}
	}
	return code;
}
com.pblabs.util.StringUtil.startsWith = function(str,substr) {
	return (str.lastIndexOf(substr,0) == 0);
}
com.pblabs.util.StringUtil.toColorString = function(c,prefix) {
	if(prefix == null) prefix = "0x";
	return prefix + com.pblabs.util.StringUtil.prepad(StringTools.hex(c),6,"0");
}
com.pblabs.util.StringUtil.pad = function(str,length,padChar) {
	if(padChar == null) padChar = " ";
	while(str.length < length) {
		str += padChar;
	}
	return str;
}
com.pblabs.util.StringUtil.prepad = function(str,length,padChar) {
	if(padChar == null) padChar = " ";
	while(str.length < length) {
		str = padChar + str;
	}
	return str;
}
com.pblabs.util.StringUtil.trim = function(str) {
	return com.pblabs.util.StringUtil.trimEnd(com.pblabs.util.StringUtil.trimBeginning(str));
}
com.pblabs.util.StringUtil.trimBeginning = function(str) {
	if(str == null) {
		return null;
	}
	var startIdx = 0;
	while(com.pblabs.util.StringUtil.isWhitespace(str.charAt(startIdx))) {
		startIdx++;
	}
	return (startIdx > 0?str.substr(startIdx):str);
}
com.pblabs.util.StringUtil.trimEnd = function(str) {
	if(str == null) {
		return null;
	}
	var endIdx = str.length;
	while(com.pblabs.util.StringUtil.isWhitespace(str.charAt(endIdx - 1))) {
		endIdx--;
	}
	return (endIdx < str.length?str.substr(0,endIdx):str);
}
com.pblabs.util.StringUtil.isWhitespace = function(character) {
	switch(character) {
	case " ":{
		return true;
	}break;
	case "\t":{
		return true;
	}break;
	case "\r":{
		return true;
	}break;
	case "\n":{
		return true;
	}break;
	default:{
		return false;
	}break;
	}
}
com.pblabs.util.StringUtil.prototype.__class__ = com.pblabs.util.StringUtil;
com.pblabs.util.Preconditions = function() { }
com.pblabs.util.Preconditions.__name__ = ["com","pblabs","util","Preconditions"];
com.pblabs.util.Preconditions.checkNotNull = function(ref,message) {
	if(ref == null) {
		throw (message != null?message:"Argument is null");
	}
	return ref;
}
com.pblabs.util.Preconditions.checkArgument = function(expression,message) {
	if(!expression) {
		throw (message != null?message:"Argument is false");
	}
}
com.pblabs.util.Preconditions.checkPositionIndex = function(index,size,message) {
	if(index < 0 || index >= size) {
		throw ((("Index out of bounds " + index) + ", [0, ") + (size - 1)) + "].";
	}
	return index;
}
com.pblabs.util.Preconditions.fail = function(message) {
	throw message;
}
com.pblabs.util.Preconditions.prototype.__class__ = com.pblabs.util.Preconditions;
com.pblabs.engine.serialization.TypeUtility = function() { }
com.pblabs.engine.serialization.TypeUtility.__name__ = ["com","pblabs","engine","serialization","TypeUtility"];
com.pblabs.engine.serialization.TypeUtility.prototype.__class__ = com.pblabs.engine.serialization.TypeUtility;
com.pblabs.components.base.LocationComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.engine.core.EntityComponent.apply(this,[]);
	this.signaller = new hsl.haxe.DirectSignaler(this);
	this._vec = new com.pblabs.geom.Vector2();
	this._vecForSignalling = new com.pblabs.geom.Vector2();
}}
com.pblabs.components.base.LocationComponent.__name__ = ["com","pblabs","components","base","LocationComponent"];
com.pblabs.components.base.LocationComponent.__super__ = com.pblabs.engine.core.EntityComponent;
for(var k in com.pblabs.engine.core.EntityComponent.prototype ) com.pblabs.components.base.LocationComponent.prototype[k] = com.pblabs.engine.core.EntityComponent.prototype[k];
com.pblabs.components.base.LocationComponent.prototype._vec = null;
com.pblabs.components.base.LocationComponent.prototype._vecForSignalling = null;
com.pblabs.components.base.LocationComponent.prototype.deserialize = function(xml,context) {
	this._vec.x = com.pblabs.util.XMLUtil.parseFloat(xml,"x");
	this._vec.y = com.pblabs.util.XMLUtil.parseFloat(xml,"y");
}
com.pblabs.components.base.LocationComponent.prototype.dispatch = function() {
	this._vecForSignalling.x = this._vec.x;
	this._vecForSignalling.y = this._vec.y;
	this.signaller.dispatch(this._vecForSignalling,null,{ fileName : "LocationComponent.hx", lineNumber : 132, className : "com.pblabs.components.base.LocationComponent", methodName : "dispatch"});
}
com.pblabs.components.base.LocationComponent.prototype.getPoint = function() {
	return this._vec.clone();
}
com.pblabs.components.base.LocationComponent.prototype.get_x = function() {
	return this._vec.x;
}
com.pblabs.components.base.LocationComponent.prototype.get_y = function() {
	return this._vec.y;
}
com.pblabs.components.base.LocationComponent.prototype.onRemove = function() {
	this.signaller.unbindAll();
	this._vec.x = 0;
	this._vec.y = 0;
	com.pblabs.engine.core.EntityComponent.prototype.onRemove.apply(this,[]);
}
com.pblabs.components.base.LocationComponent.prototype.onReset = function() {
	com.pblabs.engine.core.EntityComponent.prototype.onReset.apply(this,[]);
	{
		this._vecForSignalling.x = this._vec.x;
		this._vecForSignalling.y = this._vec.y;
		this.signaller.dispatch(this._vecForSignalling,null,{ fileName : "LocationComponent.hx", lineNumber : 132, className : "com.pblabs.components.base.LocationComponent", methodName : "dispatch"});
	}
}
com.pblabs.components.base.LocationComponent.prototype.point = null;
com.pblabs.components.base.LocationComponent.prototype.serialize = function(xml) {
	com.pblabs.util.XMLUtil.createChild(xml,"x",this._vec.x);
	com.pblabs.util.XMLUtil.createChild(xml,"y",this._vec.y);
}
com.pblabs.components.base.LocationComponent.prototype.setLocation = function(xLoc,yLoc) {
	if(this._vec.x != xLoc || this._vec.y != yLoc) {
		this._vec.x = xLoc;
		this._vec.y = yLoc;
		{
			this._vecForSignalling.x = this._vec.x;
			this._vecForSignalling.y = this._vec.y;
			this.signaller.dispatch(this._vecForSignalling,null,{ fileName : "LocationComponent.hx", lineNumber : 132, className : "com.pblabs.components.base.LocationComponent", methodName : "dispatch"});
		}
	}
}
com.pblabs.components.base.LocationComponent.prototype.setPoint = function(p) {
	this.setLocation(p.x,p.y);
	return p;
}
com.pblabs.components.base.LocationComponent.prototype.set_x = function(val) {
	if(this._vec.x != val) {
		this._vec.x = val;
		{
			this._vecForSignalling.x = this._vec.x;
			this._vecForSignalling.y = this._vec.y;
			this.signaller.dispatch(this._vecForSignalling,null,{ fileName : "LocationComponent.hx", lineNumber : 132, className : "com.pblabs.components.base.LocationComponent", methodName : "dispatch"});
		}
	}
	return val;
}
com.pblabs.components.base.LocationComponent.prototype.set_y = function(val) {
	if(this._vec.y != val) {
		this._vec.y = val;
		{
			this._vecForSignalling.x = this._vec.x;
			this._vecForSignalling.y = this._vec.y;
			this.signaller.dispatch(this._vecForSignalling,null,{ fileName : "LocationComponent.hx", lineNumber : 132, className : "com.pblabs.components.base.LocationComponent", methodName : "dispatch"});
		}
	}
	return val;
}
com.pblabs.components.base.LocationComponent.prototype.signaller = null;
com.pblabs.components.base.LocationComponent.prototype.toString = function() {
	return ((("[Location " + this.get_x()) + ", ") + this.get_y()) + "]";
}
com.pblabs.components.base.LocationComponent.prototype.x = null;
com.pblabs.components.base.LocationComponent.prototype.y = null;
com.pblabs.components.base.LocationComponent.prototype.__class__ = com.pblabs.components.base.LocationComponent;
com.pblabs.components.base.LocationComponent.__interfaces__ = [com.pblabs.engine.serialization.ISerializable];
com.pblabs.engine.time.Timer = function(time_ms,startAutomatically) { if( time_ms === $_ ) return; {
	if(startAutomatically == null) startAutomatically = true;
	this.time_ms = time_ms;
	if(startAutomatically) {
		this.start();
	}
}}
com.pblabs.engine.time.Timer.__name__ = ["com","pblabs","engine","time","Timer"];
com.pblabs.engine.time.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
	return t;
}
com.pblabs.engine.time.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
com.pblabs.engine.time.Timer.prototype.id = null;
com.pblabs.engine.time.Timer.prototype.run = function() {
	null;
}
com.pblabs.engine.time.Timer.prototype.start = function() {
	if(this.id != null) return;
	this.id = com.pblabs.engine.time.Timer.arr.length;
	com.pblabs.engine.time.Timer.arr[this.id] = this;
	this.timerId = window.setInterval(("com.pblabs.engine.time.Timer.arr[" + this.id) + "].run();",this.time_ms);
}
com.pblabs.engine.time.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	com.pblabs.engine.time.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == com.pblabs.engine.time.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && com.pblabs.engine.time.Timer.arr[p] == null) p--;
		com.pblabs.engine.time.Timer.arr = com.pblabs.engine.time.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
com.pblabs.engine.time.Timer.prototype.time_ms = null;
com.pblabs.engine.time.Timer.prototype.timerId = null;
com.pblabs.engine.time.Timer.prototype.__class__ = com.pblabs.engine.time.Timer;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval(("haxe.Timer.arr[" + this.id) + "].run();",time_ms);
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace((haxe.Timer.stamp() - t0) + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.run = function() {
	null;
}
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.__class__ = haxe.Timer;
if(!haxe.exception) haxe.exception = {}
haxe.exception.Exception = function(message,innerException,numberOfStackTraceShifts) { if( message === $_ ) return; {
	this.message = (null == message?"Unknown exception":message);
	this.innerException = innerException;
	this.generateStackTrace(numberOfStackTraceShifts);
	this.stackTrace = this.stackTraceArray;
}}
haxe.exception.Exception.__name__ = ["haxe","exception","Exception"];
haxe.exception.Exception.prototype.baseException = null;
haxe.exception.Exception.prototype.generateStackTrace = function(numberOfStackTraceShifts) {
	this.stackTraceArray = haxe.Stack.callStack().slice(numberOfStackTraceShifts + 1);
	var exceptionClass = Type.getClass(this);
	while(haxe.exception.Exception != exceptionClass) {
		this.stackTraceArray.shift();
		exceptionClass = Type.getSuperClass(exceptionClass);
	}
}
haxe.exception.Exception.prototype.getBaseException = function() {
	var result = this;
	while(null != result.innerException) {
		result = result.innerException;
	}
	return result;
}
haxe.exception.Exception.prototype.innerException = null;
haxe.exception.Exception.prototype.message = null;
haxe.exception.Exception.prototype.stackTrace = null;
haxe.exception.Exception.prototype.stackTraceArray = null;
haxe.exception.Exception.prototype.toString = function() {
	return this.message + haxe.Stack.toString(this.stackTraceArray);
}
haxe.exception.Exception.prototype.__class__ = haxe.exception.Exception;
if(!haxe.xml) haxe.xml = {}
if(!haxe.xml._Fast) haxe.xml._Fast = {}
haxe.xml._Fast.NodeAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.NodeAccess.__name__ = ["haxe","xml","_Fast","NodeAccess"];
haxe.xml._Fast.NodeAccess.prototype.__x = null;
haxe.xml._Fast.NodeAccess.prototype.resolve = function(name) {
	var x = this.__x.elementsNamed(name).next();
	if(x == null) {
		var xname = (this.__x.nodeType == Xml.Document?"Document":this.__x.getNodeName());
		throw (xname + " is missing element ") + name;
	}
	return new haxe.xml.Fast(x);
}
haxe.xml._Fast.NodeAccess.prototype.__class__ = haxe.xml._Fast.NodeAccess;
haxe.xml._Fast.AttribAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.AttribAccess.__name__ = ["haxe","xml","_Fast","AttribAccess"];
haxe.xml._Fast.AttribAccess.prototype.__x = null;
haxe.xml._Fast.AttribAccess.prototype.resolve = function(name) {
	if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
	var v = this.__x.get(name);
	if(v == null) throw (this.__x.getNodeName() + " is missing attribute ") + name;
	return v;
}
haxe.xml._Fast.AttribAccess.prototype.__class__ = haxe.xml._Fast.AttribAccess;
haxe.xml._Fast.HasAttribAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.HasAttribAccess.__name__ = ["haxe","xml","_Fast","HasAttribAccess"];
haxe.xml._Fast.HasAttribAccess.prototype.__x = null;
haxe.xml._Fast.HasAttribAccess.prototype.resolve = function(name) {
	if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
	return this.__x.exists(name);
}
haxe.xml._Fast.HasAttribAccess.prototype.__class__ = haxe.xml._Fast.HasAttribAccess;
haxe.xml._Fast.HasNodeAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.HasNodeAccess.__name__ = ["haxe","xml","_Fast","HasNodeAccess"];
haxe.xml._Fast.HasNodeAccess.prototype.__x = null;
haxe.xml._Fast.HasNodeAccess.prototype.resolve = function(name) {
	return this.__x.elementsNamed(name).hasNext();
}
haxe.xml._Fast.HasNodeAccess.prototype.__class__ = haxe.xml._Fast.HasNodeAccess;
haxe.xml._Fast.NodeListAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.NodeListAccess.__name__ = ["haxe","xml","_Fast","NodeListAccess"];
haxe.xml._Fast.NodeListAccess.prototype.__x = null;
haxe.xml._Fast.NodeListAccess.prototype.resolve = function(name) {
	var l = new List();
	{ var $it0 = this.__x.elementsNamed(name);
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(new haxe.xml.Fast(x));
	}}
	return l;
}
haxe.xml._Fast.NodeListAccess.prototype.__class__ = haxe.xml._Fast.NodeListAccess;
haxe.xml.Fast = function(x) { if( x === $_ ) return; {
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw "Invalid nodeType " + x.nodeType;
	this.x = x;
	this.node = new haxe.xml._Fast.NodeAccess(x);
	this.nodes = new haxe.xml._Fast.NodeListAccess(x);
	this.att = new haxe.xml._Fast.AttribAccess(x);
	this.has = new haxe.xml._Fast.HasAttribAccess(x);
	this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
}}
haxe.xml.Fast.__name__ = ["haxe","xml","Fast"];
haxe.xml.Fast.prototype.att = null;
haxe.xml.Fast.prototype.elements = null;
haxe.xml.Fast.prototype.getElements = function() {
	var it = this.x.elements();
	return { hasNext : $closure(it,"hasNext"), next : function() {
		var x = it.next();
		if(x == null) return null;
		return new haxe.xml.Fast(x);
	}}
}
haxe.xml.Fast.prototype.getInnerData = function() {
	var it = this.x.iterator();
	if(!it.hasNext()) throw this.getName() + " does not have data";
	var v = it.next();
	if(it.hasNext()) throw this.getName() + " does not only have data";
	if(v.nodeType != Xml.PCData && v.nodeType != Xml.CData) throw this.getName() + " does not have data";
	return v.getNodeValue();
}
haxe.xml.Fast.prototype.getInnerHTML = function() {
	var s = new StringBuf();
	{ var $it0 = this.x.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	s.b[s.b.length] = x.toString();
	}}
	return s.b.join("");
}
haxe.xml.Fast.prototype.getName = function() {
	return (this.x.nodeType == Xml.Document?"Document":this.x.getNodeName());
}
haxe.xml.Fast.prototype.has = null;
haxe.xml.Fast.prototype.hasNode = null;
haxe.xml.Fast.prototype.innerData = null;
haxe.xml.Fast.prototype.innerHTML = null;
haxe.xml.Fast.prototype.name = null;
haxe.xml.Fast.prototype.node = null;
haxe.xml.Fast.prototype.nodes = null;
haxe.xml.Fast.prototype.x = null;
haxe.xml.Fast.prototype.__class__ = haxe.xml.Fast;
haxe.FastCell = function(elt,next) { if( elt === $_ ) return; {
	this.elt = elt;
	this.next = next;
}}
haxe.FastCell.__name__ = ["haxe","FastCell"];
haxe.FastCell.prototype.elt = null;
haxe.FastCell.prototype.next = null;
haxe.FastCell.prototype.__class__ = haxe.FastCell;
haxe.FastList = function(p) { if( p === $_ ) return; {
	null;
}}
haxe.FastList.__name__ = ["haxe","FastList"];
haxe.FastList.prototype.add = function(item) {
	this.head = new haxe.FastCell(item,this.head);
}
haxe.FastList.prototype.first = function() {
	return (this.head == null?null:this.head.elt);
}
haxe.FastList.prototype.head = null;
haxe.FastList.prototype.isEmpty = function() {
	return (this.head == null);
}
haxe.FastList.prototype.iterator = function() {
	var l = this.head;
	return { hasNext : function() {
		return l != null;
	}, next : function() {
		var k = l;
		l = k.next;
		return k.elt;
	}}
}
haxe.FastList.prototype.pop = function() {
	var k = this.head;
	if(k == null) return null;
	else {
		this.head = k.next;
		return k.elt;
	}
}
haxe.FastList.prototype.remove = function(v) {
	var prev = null;
	var l = this.head;
	while(l != null) {
		if(l.elt == v) {
			if(prev == null) this.head = l.next;
			else prev.next = l.next;
			break;
		}
		prev = l;
		l = l.next;
	}
	return (l != null);
}
haxe.FastList.prototype.toString = function() {
	var a = new Array();
	var l = this.head;
	while(l != null) {
		a.push(l.elt);
		l = l.next;
	}
	return ("{" + a.join(",")) + "}";
}
haxe.FastList.prototype.__class__ = haxe.FastList;
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	return ((meta == null)?meta:meta.obj);
}
haxe.rtti.Meta.getStatics = function(t) {
	var meta = t.__meta__;
	return ((meta == null)?meta:meta.statics);
}
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	return ((meta == null)?meta:meta.fields);
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
com.pblabs.components.scene.CircleShape = function(r,color) { if( r === $_ ) return; {
	if(color == null) color = 16711680;
	if(r == null) r = 10;
	com.pblabs.components.scene.ShapeComponent.apply(this,[color]);
	this._svgContainer = js.Lib.document.createElementNS("http://www.w3.org/2000/svg","svg");
	this._svgContainer.setAttribute("width",(r * 2) + "px");
	this._svgContainer.setAttribute("height",(r * 2) + "px");
	this._svgContainer.setAttribute("version","1.1");
	this._svg = js.Lib.document.createElementNS("http://www.w3.org/2000/svg","circle");
	this._svgContainer.appendChild(this._svg);
	this.set_radius(r);
}}
com.pblabs.components.scene.CircleShape.__name__ = ["com","pblabs","components","scene","CircleShape"];
com.pblabs.components.scene.CircleShape.__super__ = com.pblabs.components.scene.ShapeComponent;
for(var k in com.pblabs.components.scene.ShapeComponent.prototype ) com.pblabs.components.scene.CircleShape.prototype[k] = com.pblabs.components.scene.ShapeComponent.prototype[k];
com.pblabs.components.scene.CircleShape.prototype._svg = null;
com.pblabs.components.scene.CircleShape.prototype._svgContainer = null;
com.pblabs.components.scene.CircleShape.prototype.containsScreenPoint = function(pos) {
	return com.pblabs.geom.CircleUtil.isWithinCircle(com.pblabs.components.scene.SceneUtil.translateScreenToWorld(this.parent.get_scene(),pos),this.get_x(),this.get_y(),this.get_width());
}
com.pblabs.components.scene.CircleShape.prototype.get_height = function() {
	return this.get_width();
}
com.pblabs.components.scene.CircleShape.prototype.get_radius = function() {
	return this.get_width();
}
com.pblabs.components.scene.CircleShape.prototype.onAdd = function() {
	com.pblabs.components.scene.ShapeComponent.prototype.onAdd.apply(this,[]);
	this.redraw();
	this.div.appendChild(this._svgContainer);
}
com.pblabs.components.scene.CircleShape.prototype.onFrame = function(dt) {
	if(this.get_isTransformDirty()) {
		this.set_isTransformDirty(false);
		var xOffset = this.parent.get_xOffset() - this.get_width();
		var yOffset = this.parent.get_yOffset() - this.get_height();
		this.div.style.webkitTransform = ((((("translate(" + (this._x + xOffset)) + "px, ") + (this._y + yOffset)) + "px) rotate(") + this._angle) + "rad)";
	}
}
com.pblabs.components.scene.CircleShape.prototype.radius = null;
com.pblabs.components.scene.CircleShape.prototype.redraw = function() {
	this._svg.setAttribute("cx",this.get_radius() + "px");
	this._svg.setAttribute("cy",this.get_radius() + "px");
	this._svg.setAttribute("r",this.get_radius() + "px");
	this._svg.setAttribute("fill",com.pblabs.util.StringUtil.toColorString(this.get_fillColor(),"#"));
	this._svg.setAttribute("stroke",com.pblabs.util.StringUtil.toColorString(this.get_borderColor(),"#"));
	this._svg.setAttribute("stroke-width","" + this.get_borderWidth());
	this._svgContainer.setAttribute("width",(this.get_radius() * 2) + "px");
	this._svgContainer.setAttribute("height",(this.get_radius() * 2) + "px");
}
com.pblabs.components.scene.CircleShape.prototype.set_height = function(val) {
	com.pblabs.components.scene.ShapeComponent.prototype.set_width.apply(this,[val]);
	return val;
}
com.pblabs.components.scene.CircleShape.prototype.set_radius = function(val) {
	this.set_width(val);
	return val;
}
com.pblabs.components.scene.CircleShape.prototype.__class__ = com.pblabs.components.scene.CircleShape;
com.pblabs.util.XMLUtil = function() { }
com.pblabs.util.XMLUtil.__name__ = ["com","pblabs","util","XMLUtil"];
com.pblabs.util.XMLUtil.hasComplexContent = function(xml) {
	if(xml.nodeType != Xml.Element) {
		return false;
	}
	if(xml.elements().hasNext()) {
		return true;
	}
	return false;
}
com.pblabs.util.XMLUtil.hasSimpleContent = function(xml) {
	switch(xml.nodeType) {
	case Xml.CData:{
		return false;
	}break;
	case Xml.Comment:{
		return false;
	}break;
	case Xml.DocType:{
		return false;
	}break;
	case Xml.Document:{
		return false;
	}break;
	case Xml.Element:{
		return false;
	}break;
	case Xml.PCData:{
		return false;
	}break;
	case Xml.Prolog:{
		return false;
	}break;
	}
	return !com.pblabs.util.XMLUtil.hasComplexContent(xml);
}
com.pblabs.util.XMLUtil.child = function(xml,childName) {
	{ var $it0 = xml.elementsNamed(childName);
	while( $it0.hasNext() ) { var x = $it0.next();
	{
		return x;
	}
	}}
	return null;
}
com.pblabs.util.XMLUtil.createElementWithValue = function(name,value) {
	var xml = Xml.createElement(name);
	xml.setNodeValue(Std.string(value));
	return xml;
}
com.pblabs.util.XMLUtil.createChild = function(xml,name,value) {
	var child = Xml.createElement(name);
	if(value != null) {
		child.setNodeValue(Std.string(value));
	}
	xml.addChild(child);
	return child;
}
com.pblabs.util.XMLUtil.parseFloat = function(xml,childName) {
	if(com.pblabs.util.XMLUtil.child(xml,childName) != null) {
		return Std.parseFloat(com.pblabs.util.XMLUtil.child(xml,childName).getNodeValue());
	}
	return 0;
}
com.pblabs.util.XMLUtil.parsePropertyReference = function(xml,childName) {
	if(com.pblabs.util.XMLUtil.child(xml,childName) != null) {
		return new com.pblabs.engine.core.PropertyReference(com.pblabs.util.XMLUtil.child(xml,childName).getNodeValue());
	}
	return null;
}
com.pblabs.util.XMLUtil.parseArray = function(xml,childName,parseElement) {
	var arr = [];
	if(com.pblabs.util.XMLUtil.child(xml,childName) != null) {
		var s = com.pblabs.util.XMLUtil.child(xml,childName).getNodeValue();
		{
			var _g = 0, _g1 = s.split(",");
			while(_g < _g1.length) {
				var sval = _g1[_g];
				++_g;
				var token = StringTools.trim(sval);
				arr.push(parseElement(token));
			}
		}
	}
	return arr;
}
com.pblabs.util.XMLUtil.prototype.__class__ = com.pblabs.util.XMLUtil;
if(!hsl.js.data) hsl.js.data = {}
hsl.js.data.TouchListIterator = function(list) { if( list === $_ ) return; {
	this._list = list;
	this._index = 0;
	this.reset();
}}
hsl.js.data.TouchListIterator.__name__ = ["hsl","js","data","TouchListIterator"];
hsl.js.data.TouchListIterator.iterator = function(list) {
	return new hsl.js.data.TouchListIterator(list);
}
hsl.js.data.TouchListIterator.prototype._index = null;
hsl.js.data.TouchListIterator.prototype._list = null;
hsl.js.data.TouchListIterator.prototype.hasNext = function() {
	return this._index < this._list.length;
}
hsl.js.data.TouchListIterator.prototype.next = function() {
	return this._list.item(this._index++);
}
hsl.js.data.TouchListIterator.prototype.reset = function() {
	this._index = 0;
}
hsl.js.data.TouchListIterator.prototype.__class__ = hsl.js.data.TouchListIterator;
com.pblabs.components.input.InputManager = function(p) { if( p === $_ ) return; {
	com.pblabs.components.input.BaseInputManager.apply(this,[]);
	this.deviceDown = new hsl.haxe.DirectSignaler(this);
	this.deviceMove = new hsl.haxe.DirectSignaler(this);
	this.deviceUp = new hsl.haxe.DirectSignaler(this);
	this.deviceClick = new hsl.haxe.DirectSignaler(this);
	this.deviceHeldDown = new hsl.haxe.DirectSignaler(this);
	this.drag = new hsl.haxe.DirectSignaler(this);
	this.doubleClick = new hsl.haxe.DirectSignaler(this);
	this.rotate = new hsl.haxe.DirectSignaler(this);
	this.scale = new hsl.haxe.DirectSignaler(this);
	this._inputCache = new com.pblabs.components.input.InputData();
	this._gestureCache = new com.pblabs.components.input.GestureData();
	this.underMouse = new Array();
	this._checked = com.pblabs.util.ds.Sets.newSetOf(String);
	this._mouseLoc = new com.pblabs.geom.Vector2();
	this._isDeviceDown = false;
	this._isGesturing = false;
	this._tempVec = new com.pblabs.geom.Vector2();
	this._fingersTouching = 0;
	this.drag.bind($closure(this,"onDrag"));
	this._components = [];
}}
com.pblabs.components.input.InputManager.__name__ = ["com","pblabs","components","input","InputManager"];
com.pblabs.components.input.InputManager.__super__ = com.pblabs.components.input.BaseInputManager;
for(var k in com.pblabs.components.input.BaseInputManager.prototype ) com.pblabs.components.input.InputManager.prototype[k] = com.pblabs.components.input.BaseInputManager.prototype[k];
com.pblabs.components.input.InputManager.prototype._checked = null;
com.pblabs.components.input.InputManager.prototype._components = null;
com.pblabs.components.input.InputManager.prototype._deviceDownComponent = null;
com.pblabs.components.input.InputManager.prototype._deviceDownComponentLoc = null;
com.pblabs.components.input.InputManager.prototype._deviceDownLoc = null;
com.pblabs.components.input.InputManager.prototype._fingersTouching = null;
com.pblabs.components.input.InputManager.prototype._gestureCache = null;
com.pblabs.components.input.InputManager.prototype._inputCache = null;
com.pblabs.components.input.InputManager.prototype._isDeviceDown = null;
com.pblabs.components.input.InputManager.prototype._isGesturing = null;
com.pblabs.components.input.InputManager.prototype._isZooming = null;
com.pblabs.components.input.InputManager.prototype._mouse = null;
com.pblabs.components.input.InputManager.prototype._mouseLoc = null;
com.pblabs.components.input.InputManager.prototype._sets = null;
com.pblabs.components.input.InputManager.prototype._startingAngle = null;
com.pblabs.components.input.InputManager.prototype._startingScale = null;
com.pblabs.components.input.InputManager.prototype._tempVec = null;
com.pblabs.components.input.InputManager.prototype._timer = null;
com.pblabs.components.input.InputManager.prototype.adjustMouseLocation = function(m) {
	return new com.pblabs.geom.Vector2(m.globalLocation.x - this.sceneView.get_mouseOffsetX(),m.globalLocation.y - this.sceneView.get_mouseOffsetY());
}
com.pblabs.components.input.InputManager.prototype.bindSignals = function() {
	this._mouse.mouseDown.bind($closure(this,"onMouseDown"));
	this._mouse.mouseMove.bind($closure(this,"onMouseMove"));
	this._mouse.mouseUp.bind($closure(this,"onMouseUp"));
	this._mouse.mouseClick.bind($closure(this,"onMouseClick"));
	if(this.gestures != null) {
		var self = this;
		this.gestures.gestureChange.bind(function(e) {
			var eventAngle = e.rotation * (3.141592653589793 / 180);
			var cache = self._gestureCache;
			cache.inputComponent = self._deviceDownComponent;
			cache.rotation = eventAngle;
			cache.scale = e.scale;
			self.rotate.dispatch(cache,null,{ fileName : "InputManager.hx", lineNumber : 213, className : "com.pblabs.components.input.InputManager", methodName : "bindSignals"});
			self.scale.dispatch(cache,null,{ fileName : "InputManager.hx", lineNumber : 214, className : "com.pblabs.components.input.InputManager", methodName : "bindSignals"});
			if(self._deviceDownComponent != null) {
				var inputComp = self._deviceDownComponent.get_owner().lookupComponent(com.pblabs.components.input.MouseInputComponent);
				if(inputComp != null) {
					if(inputComp.isRotatable) {
						inputComp.set_angle(self._startingAngle + eventAngle);
					}
					if(inputComp.isScalable) {
						inputComp.set_scale(self._startingScale + cache.scale);
					}
				}
			}
		});
		this.gestures.gestureStart.bind(function(e) {
			self._isGesturing = true;
			if(self._deviceDownComponent == null) null;
			if(self._deviceDownComponent != null) {
				var inputComp = self._deviceDownComponent.get_owner().lookupComponent(com.pblabs.components.input.MouseInputComponent);
				if(inputComp != null) {
					if(inputComp.isRotatable) {
						self._startingAngle = inputComp.get_angle();
					}
					if(inputComp.isScalable) {
						self._startingScale = inputComp.get_scale();
					}
				}
			}
		});
		this.gestures.gestureEnd.bind(function(e) {
			self._isGesturing = false;
		});
	}
}
com.pblabs.components.input.InputManager.prototype.deviceClick = null;
com.pblabs.components.input.InputManager.prototype.deviceDown = null;
com.pblabs.components.input.InputManager.prototype.deviceHeldDown = null;
com.pblabs.components.input.InputManager.prototype.deviceMove = null;
com.pblabs.components.input.InputManager.prototype.deviceUp = null;
com.pblabs.components.input.InputManager.prototype.doubleClick = null;
com.pblabs.components.input.InputManager.prototype.drag = null;
com.pblabs.components.input.InputManager.prototype.freeSignals = function() {
	null;
}
com.pblabs.components.input.InputManager.prototype.gestures = null;
com.pblabs.components.input.InputManager.prototype.getMouseLoc = function() {
	return this._mouseLoc;
}
com.pblabs.components.input.InputManager.prototype.get_isDeviceDown = function() {
	return this._isDeviceDown;
}
com.pblabs.components.input.InputManager.prototype.isDeviceDown = null;
com.pblabs.components.input.InputManager.prototype.isWithinSceneView = function(mouse) {
	return !(mouse.x < 0 || mouse.x > this.sceneView.get_width() || mouse.y < 0 || mouse.y > this.sceneView.get_height());
}
com.pblabs.components.input.InputManager.prototype.lookupComponentsUnderMouse = function(mouseLoc) {
	this._checked.clear();
	this.underMouse = new Array();
	var inputComp;
	{
		var _g = 0, _g1 = this._components;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(this._checked.exists(c.get_owner().get_name())) {
				continue;
			}
			this._tempVec.x = mouseLoc.x;
			this._tempVec.y = mouseLoc.y;
			if(c.get_bounds().containsScreenPoint(this._tempVec)) {
				this.underMouse.push(c);
			}
		}
	}
	return this.underMouse;
}
com.pblabs.components.input.InputManager.prototype.modeRemoved = function(m) {
	this.freeSignals();
}
com.pblabs.components.input.InputManager.prototype.onDrag = function(t) {
	var mouseInput = t.inputComponent;
	if(mouseInput != null && mouseInput.isTranslatable) {
		var offset = mouseInput.get_offset();
		var scene2dComp = (function($this) {
			var $r;
			var $t = t.inputComponent.get_bounds();
			if(Std["is"]($t,com.pblabs.components.scene.BaseScene2DComponent)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		if(scene2dComp == null) {
			com.pblabs.engine.debug.Log.error("WTF, how to translate scene to world without a Base2DComponent",{ fileName : "InputManager.hx", lineNumber : 425, className : "com.pblabs.components.input.InputManager", methodName : "onDrag"});
			return;
		}
		var sceneManager = (function($this) {
			var $r;
			var $t = scene2dComp.parent.parent;
			if(Std["is"]($t,com.pblabs.components.scene.BaseScene2DManager)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var worldPoint = com.pblabs.components.scene.SceneUtil.translateScreenToWorld(sceneManager,t.inputLocation);
		if(offset != null) {
			mouseInput.set_x(worldPoint.x + offset.x);
			mouseInput.set_y(worldPoint.y + offset.y);
		}
		else {
			mouseInput.set_x(worldPoint.x);
			mouseInput.set_y(worldPoint.y);
		}
	}
}
com.pblabs.components.input.InputManager.prototype.onFrame = function() {
	if(this._isDeviceDown) {
		if(this._deviceDownComponent != null) {
			var mouseInput = this._deviceDownComponent.get_owner().lookupComponentByType(com.pblabs.components.input.MouseInputComponent);
			if(mouseInput != null) {
				mouseInput.onDeviceHeldDown();
			}
			this._inputCache.inputComponent = this._deviceDownComponent;
			this._inputCache.inputLocation = this._mouseLoc.clone();
			this._inputCache.touchCount = this._fingersTouching;
			this._inputCache.isMouseDown = true;
			this.deviceHeldDown.dispatch(this._inputCache,null,{ fileName : "InputManager.hx", lineNumber : 143, className : "com.pblabs.components.input.InputManager", methodName : "onFrame"});
		}
	}
}
com.pblabs.components.input.InputManager.prototype.onMouseClick = function(m) {
	com.pblabs.engine.debug.Log.info((("Mouse clicked " + m.x) + ", ") + m.y,{ fileName : "InputManager.hx", lineNumber : 444, className : "com.pblabs.components.input.InputManager", methodName : "onMouseClick"});
	var adjustedM = this.adjustMouseLocation(m);
	this._inputCache.inputComponent = this.lookupComponentsUnderMouse(adjustedM)[0];
	this._inputCache.inputLocation = adjustedM.clone();
	this._inputCache.isMouseDown = false;
	if(this._inputCache.inputComponent != null) {
		com.pblabs.engine.debug.Log.info("click  " + this._inputCache,{ fileName : "InputManager.hx", lineNumber : 456, className : "com.pblabs.components.input.InputManager", methodName : "onMouseClick"});
		this.deviceClick.dispatch(this._inputCache,null,{ fileName : "InputManager.hx", lineNumber : 457, className : "com.pblabs.components.input.InputManager", methodName : "onMouseClick"});
	}
	var mouseInput = (this._inputCache.inputComponent != null?this._inputCache.inputComponent.get_owner().lookupComponentByType(com.pblabs.components.input.MouseInputComponent):null);
	if(mouseInput != null) {
		mouseInput.onClick();
	}
}
com.pblabs.components.input.InputManager.prototype.onMouseDown = function(m) {
	this._isGesturing = this._isZooming = false;
	this._isDeviceDown = true;
	var adjustedM = this.adjustMouseLocation(m);
	if(!this.isWithinSceneView(adjustedM)) {
		return;
	}
	var cUnderMouse = this.lookupComponentsUnderMouse(adjustedM)[0];
	this._deviceDownComponent = cUnderMouse;
	this._deviceDownLoc = adjustedM.clone();
	this._inputCache.inputComponent = cUnderMouse;
	this._inputCache.inputLocation = adjustedM.clone();
	var mouseInput = this._deviceDownComponent;
	if(mouseInput != null) {
		this._startingAngle = mouseInput.get_angle();
		mouseInput.onDeviceDown();
	}
	com.pblabs.engine.debug.Log.info("mouse down  " + this._inputCache,{ fileName : "InputManager.hx", lineNumber : 346, className : "com.pblabs.components.input.InputManager", methodName : "onMouseDown"});
	this.deviceDown.dispatch(this._inputCache,null,{ fileName : "InputManager.hx", lineNumber : 347, className : "com.pblabs.components.input.InputManager", methodName : "onMouseDown"});
}
com.pblabs.components.input.InputManager.prototype.onMouseMove = function(m) {
	if(this._isGesturing) {
		return;
	}
	var adjustedM = this.adjustMouseLocation(m);
	if(!this.isWithinSceneView(adjustedM)) {
		return;
	}
	this._mouseLoc = adjustedM.clone();
	this._inputCache.inputComponent = this._deviceDownComponent;
	this._inputCache.inputLocation = adjustedM.clone();
	this._inputCache.isMouseDown = this._isDeviceDown;
	if(this._deviceDownComponent != null) {
		this.drag.dispatch(this._inputCache,null,{ fileName : "InputManager.hx", lineNumber : 407, className : "com.pblabs.components.input.InputManager", methodName : "onMouseMove"});
	}
	this.deviceMove.dispatch(this._inputCache,null,{ fileName : "InputManager.hx", lineNumber : 410, className : "com.pblabs.components.input.InputManager", methodName : "onMouseMove"});
}
com.pblabs.components.input.InputManager.prototype.onMouseUp = function(m) {
	this._isDeviceDown = false;
	var adjustedM = this.adjustMouseLocation(m);
	var cUnderMouse = this.lookupComponentsUnderMouse(adjustedM)[0];
	this._inputCache.inputComponent = cUnderMouse;
	this._inputCache.inputLocation = adjustedM.clone();
	this._inputCache.isMouseDown = false;
	this._deviceDownComponent = null;
	this._deviceDownComponentLoc = null;
	this._deviceDownLoc = null;
	this.deviceUp.dispatch(this._inputCache,null,{ fileName : "InputManager.hx", lineNumber : 372, className : "com.pblabs.components.input.InputManager", methodName : "onMouseUp"});
}
com.pblabs.components.input.InputManager.prototype.registerComponent = function(c) {
	if(!Lambda.has(this._components,c)) {
		this._components.push(c);
	}
}
com.pblabs.components.input.InputManager.prototype.rotate = null;
com.pblabs.components.input.InputManager.prototype.scale = null;
com.pblabs.components.input.InputManager.prototype.shutdown = function() {
	com.pblabs.components.input.BaseInputManager.prototype.shutdown.apply(this,[]);
	this.freeSignals();
	this._timer.stop();
	this._timer = null;
}
com.pblabs.components.input.InputManager.prototype.startup = function() {
	com.pblabs.components.input.BaseInputManager.prototype.startup.apply(this,[]);
	this._sets = com.pblabs.util.Preconditions.checkNotNull(this._sets);
	this.bindSignals();
	this._timer = new haxe.Timer(Std["int"](1000.0 / 30));
	this._timer.run = $closure(this,"onFrame");
}
com.pblabs.components.input.InputManager.prototype.underMouse = null;
com.pblabs.components.input.InputManager.prototype.unregisterComponent = function(c) {
	this._components.remove(c);
}
com.pblabs.components.input.InputManager.prototype.__class__ = com.pblabs.components.input.InputManager;
com.pblabs.components.input.InputUtil = function() { }
com.pblabs.components.input.InputUtil.__name__ = ["com","pblabs","components","input","InputUtil"];
com.pblabs.components.input.InputUtil.setMouseClicked = function(e,f) {
	var mouseInput = e.lookupComponentByType(com.pblabs.components.input.MouseInputComponent);
	com.pblabs.util.Preconditions.checkNotNull(mouseInput,"Requires a MouseInputComponent for binding mouse listeners");
	mouseInput.onClick = f;
}
com.pblabs.components.input.InputUtil.setDeviceDown = function(e,f) {
	var mouseInput = e.lookupComponentByType(com.pblabs.components.input.MouseInputComponent);
	com.pblabs.util.Preconditions.checkNotNull(mouseInput,"Requires a MouseInputComponent for binding mouse listeners");
	mouseInput.onDeviceDown = f;
}
com.pblabs.components.input.InputUtil.setDeviceHeldDown = function(e,f) {
	var mouseInput = e.lookupComponentByType(com.pblabs.components.input.MouseInputComponent);
	com.pblabs.util.Preconditions.checkNotNull(mouseInput,"Requires a MouseInputComponent for binding mouse listeners");
	mouseInput.onDeviceHeldDown = f;
}
com.pblabs.components.input.InputUtil.prototype.__class__ = com.pblabs.components.input.InputUtil;
com.pblabs.engine.core.SignalBondManager = function(p) { if( p === $_ ) return; {
	com.pblabs.util.ds.multimaps.ArrayMultiMap.apply(this,[]);
}}
com.pblabs.engine.core.SignalBondManager.__name__ = ["com","pblabs","engine","core","SignalBondManager"];
com.pblabs.engine.core.SignalBondManager.__super__ = com.pblabs.util.ds.multimaps.ArrayMultiMap;
for(var k in com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype ) com.pblabs.engine.core.SignalBondManager.prototype[k] = com.pblabs.util.ds.multimaps.ArrayMultiMap.prototype[k];
com.pblabs.engine.core.SignalBondManager.prototype.destroyBonds = function(key) {
	if(this.exists(key)) {
		{ var $it0 = this.get(key).iterator();
		while( $it0.hasNext() ) { var b = $it0.next();
		{
			b.destroy();
		}
		}}
		this.remove(key);
	}
}
com.pblabs.engine.core.SignalBondManager.prototype.shutdown = function() {
	{ var $it0 = this.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	{
		{ var $it1 = this.get(k).iterator();
		while( $it1.hasNext() ) { var b = $it1.next();
		{
			b.destroy();
		}
		}}
	}
	}}
	this.clear();
}
com.pblabs.engine.core.SignalBondManager.prototype.startup = function() {
	null;
}
com.pblabs.engine.core.SignalBondManager.prototype.__class__ = com.pblabs.engine.core.SignalBondManager;
com.pblabs.engine.core.SignalBondManager.__interfaces__ = [com.pblabs.engine.core.IPBManager];
com.pblabs.components.scene.SceneAlignment = { __ename__ : ["com","pblabs","components","scene","SceneAlignment"], __constructs__ : ["BOTTOM_LEFT","BOTTOM_RIGHT","CENTER","TOP_LEFT","TOP_RIGHT"] }
com.pblabs.components.scene.SceneAlignment.BOTTOM_LEFT = ["BOTTOM_LEFT",0];
com.pblabs.components.scene.SceneAlignment.BOTTOM_LEFT.toString = $estr;
com.pblabs.components.scene.SceneAlignment.BOTTOM_LEFT.__enum__ = com.pblabs.components.scene.SceneAlignment;
com.pblabs.components.scene.SceneAlignment.BOTTOM_RIGHT = ["BOTTOM_RIGHT",1];
com.pblabs.components.scene.SceneAlignment.BOTTOM_RIGHT.toString = $estr;
com.pblabs.components.scene.SceneAlignment.BOTTOM_RIGHT.__enum__ = com.pblabs.components.scene.SceneAlignment;
com.pblabs.components.scene.SceneAlignment.CENTER = ["CENTER",2];
com.pblabs.components.scene.SceneAlignment.CENTER.toString = $estr;
com.pblabs.components.scene.SceneAlignment.CENTER.__enum__ = com.pblabs.components.scene.SceneAlignment;
com.pblabs.components.scene.SceneAlignment.TOP_LEFT = ["TOP_LEFT",3];
com.pblabs.components.scene.SceneAlignment.TOP_LEFT.toString = $estr;
com.pblabs.components.scene.SceneAlignment.TOP_LEFT.__enum__ = com.pblabs.components.scene.SceneAlignment;
com.pblabs.components.scene.SceneAlignment.TOP_RIGHT = ["TOP_RIGHT",4];
com.pblabs.components.scene.SceneAlignment.TOP_RIGHT.toString = $estr;
com.pblabs.components.scene.SceneAlignment.TOP_RIGHT.__enum__ = com.pblabs.components.scene.SceneAlignment;
com.pblabs.components.scene.SceneUtil = function() { }
com.pblabs.components.scene.SceneUtil.__name__ = ["com","pblabs","components","scene","SceneUtil"];
com.pblabs.components.scene.SceneUtil.getPlatformSceneManagerClass = function() {
	return com.pblabs.components.scene.js.css.SceneManager;
}
com.pblabs.components.scene.SceneUtil.getBasePlatformLayerClass = function() {
	return com.pblabs.components.scene.js.css.SceneLayer;
}
com.pblabs.components.scene.SceneUtil.createBaseSceneEntity = function(context,name) {
	var e = context.allocate(com.pblabs.engine.core.IEntity);
	e.initialize(name);
	e.set_deferring(true);
	e.addComponent(context.allocate(com.pblabs.components.base.LocationComponent));
	e.addComponent(context.allocate(com.pblabs.components.base.AlphaComponent));
	e.addComponent(context.allocate(com.pblabs.components.base.AngleComponent));
	e.addComponent(context.allocate(com.pblabs.components.tasks.TaskComponent));
	e.set_deferring(false);
	return e;
}
com.pblabs.components.scene.SceneUtil.setLocation = function(e,x,y) {
	e.lookupComponent(com.pblabs.components.base.LocationComponent).setLocation(x,y);
}
com.pblabs.components.scene.SceneUtil.setAngle = function(e,angle) {
	e.lookupComponent(com.pblabs.components.base.AngleComponent).set_angle(angle);
}
com.pblabs.components.scene.SceneUtil.calculateOutPoint = function(outPoint,alignment,sceneWidth,sceneHeight) {
	var $e = (alignment);
	switch( $e[1] ) {
	case 2:
	{
		outPoint.x = sceneWidth * 0.5;
		outPoint.y = sceneHeight * 0.5;
	}break;
	case 3:
	{
		outPoint.x = outPoint.y = 0;
	}break;
	case 4:
	{
		outPoint.x = sceneWidth;
		outPoint.y = 0;
	}break;
	case 0:
	{
		outPoint.x = 0;
		outPoint.y = sceneHeight;
	}break;
	case 1:
	{
		outPoint.x = sceneWidth;
		outPoint.y = sceneHeight;
	}break;
	}
}
com.pblabs.components.scene.SceneUtil.translateScreenToWorld = function(sceneManager,screen) {
	var viewOffset = new com.pblabs.geom.Vector2();
	com.pblabs.components.scene.SceneUtil.calculateOutPoint(viewOffset,sceneManager.sceneAlignment,sceneManager.get_sceneView().get_width(),sceneManager.get_sceneView().get_height());
	var p = screen.subtract(viewOffset).scale(1 / sceneManager.get_zoom()).rotate(-sceneManager.get_rotation()).subtract(new com.pblabs.geom.Vector2(sceneManager.get_x(),sceneManager.get_y()));
	return p;
}
com.pblabs.components.scene.SceneUtil.translateWorldToScreen = function(sceneManager,world) {
	var viewOffset = new com.pblabs.geom.Vector2();
	com.pblabs.components.scene.SceneUtil.calculateOutPoint(viewOffset,sceneManager.sceneAlignment,sceneManager.get_sceneView().get_width(),sceneManager.get_sceneView().get_height());
	var p = world.add(new com.pblabs.geom.Vector2(sceneManager.get_x(),sceneManager.get_y())).rotate(sceneManager.get_rotation()).scale(sceneManager.get_zoom()).add(viewOffset);
	return p;
}
com.pblabs.components.scene.SceneUtil.prototype.__class__ = com.pblabs.components.scene.SceneUtil;
haxe.exception.ArgumentNullException = function(argumentName,numberOfStackTraceShifts) { if( argumentName === $_ ) return; {
	haxe.exception.Exception.apply(this,[("Argument " + argumentName) + " must be non-null",null,numberOfStackTraceShifts]);
}}
haxe.exception.ArgumentNullException.__name__ = ["haxe","exception","ArgumentNullException"];
haxe.exception.ArgumentNullException.__super__ = haxe.exception.Exception;
for(var k in haxe.exception.Exception.prototype ) haxe.exception.ArgumentNullException.prototype[k] = haxe.exception.Exception.prototype[k];
haxe.exception.ArgumentNullException.prototype.__class__ = haxe.exception.ArgumentNullException;
com.pblabs.components.scene.js.JSLayer = function(p) { if( p === $_ ) return; {
	com.pblabs.components.scene.BaseScene2DLayer.apply(this,[]);
}}
com.pblabs.components.scene.js.JSLayer.__name__ = ["com","pblabs","components","scene","js","JSLayer"];
com.pblabs.components.scene.js.JSLayer.__super__ = com.pblabs.components.scene.BaseScene2DLayer;
for(var k in com.pblabs.components.scene.BaseScene2DLayer.prototype ) com.pblabs.components.scene.js.JSLayer.prototype[k] = com.pblabs.components.scene.BaseScene2DLayer.prototype[k];
com.pblabs.components.scene.js.JSLayer.prototype.addedToParent = function() {
	com.pblabs.components.scene.BaseScene2DLayer.prototype.addedToParent.apply(this,[]);
	this.parent.setLayerIndex(this,this.parent.getLayerIndex(this));
	this.fixPosition();
}
com.pblabs.components.scene.js.JSLayer.prototype.div = null;
com.pblabs.components.scene.js.JSLayer.prototype.fixPosition = function() {
	var offsetHeight = 0;
	var offsetWidth = 0;
	var sib = this.div.previousSibling;
	while(sib != null || sib == this.div) {
		offsetHeight += sib.offsetHeight;
		offsetWidth += sib.offsetWidth;
		sib = sib.previousSibling;
	}
	this.div.style.webkitTransform = ("translate(0px, -" + offsetHeight) + "px)";
}
com.pblabs.components.scene.js.JSLayer.prototype.onAdd = function() {
	com.pblabs.components.scene.BaseScene2DLayer.prototype.onAdd.apply(this,[]);
	this.div = js.Lib.document.createElement("div");
	this.div.style.cssText = "position:relative;left:0px;top:0px;";
}
com.pblabs.components.scene.js.JSLayer.prototype.onRemove = function() {
	com.pblabs.components.scene.BaseScene2DLayer.prototype.onRemove.apply(this,[]);
	this.div = null;
}
com.pblabs.components.scene.js.JSLayer.prototype.removingFromParent = function() {
	com.pblabs.components.scene.BaseScene2DLayer.prototype.removingFromParent.apply(this,[]);
	if(this.div.parentNode == this.parent.get_container()) {
		this.parent.get_container().removeChild(this.div);
	}
}
com.pblabs.components.scene.js.JSLayer.prototype.__class__ = com.pblabs.components.scene.js.JSLayer;
com.pblabs.engine.time.IProcessManager = function() { }
com.pblabs.engine.time.IProcessManager.__name__ = ["com","pblabs","engine","time","IProcessManager"];
com.pblabs.engine.time.IProcessManager.prototype.addAnimatedObject = null;
com.pblabs.engine.time.IProcessManager.prototype.addTickedObject = null;
com.pblabs.engine.time.IProcessManager.prototype.advance = null;
com.pblabs.engine.time.IProcessManager.prototype.isTicking = null;
com.pblabs.engine.time.IProcessManager.prototype.paused = null;
com.pblabs.engine.time.IProcessManager.prototype.platformTime = null;
com.pblabs.engine.time.IProcessManager.prototype.removeAnimatedObject = null;
com.pblabs.engine.time.IProcessManager.prototype.removeTickedObject = null;
com.pblabs.engine.time.IProcessManager.prototype.start = null;
com.pblabs.engine.time.IProcessManager.prototype.stop = null;
com.pblabs.engine.time.IProcessManager.prototype.timeScale = null;
com.pblabs.engine.time.IProcessManager.prototype.virtualTime = null;
com.pblabs.engine.time.IProcessManager.prototype.__class__ = com.pblabs.engine.time.IProcessManager;
com.pblabs.geom.VectorTools = function() { }
com.pblabs.geom.VectorTools.__name__ = ["com","pblabs","geom","VectorTools"];
com.pblabs.geom.VectorTools.distance = function(a,b) {
	return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}
com.pblabs.geom.VectorTools.distanceSq = function(a,b) {
	return (b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y);
}
com.pblabs.geom.VectorTools.calcAngle = function(p1,p2) {
	var angle = Math.atan((p2.y - p1.y) / (p2.x - p1.x));
	if(p2.y < p1.y && p2.x > p1.x) {
		return angle;
	}
	if((p2.y < p1.y && p2.x < p1.x) || (p2.y > p1.y && p2.x < p1.x)) {
		return angle + Math.PI;
	}
	return angle + Math.PI * 2;
}
com.pblabs.geom.VectorTools.addLocalPolarVector = function(v,rad,length) {
	var polar = new com.pblabs.geom.Vector2(Math.cos(rad) * length,Math.sin(rad) * length);
	v.addLocal(polar);
	return v;
}
com.pblabs.geom.VectorTools.angleToVector2 = function(radians,len) {
	if(len == null) len = 1;
	return new com.pblabs.geom.Vector2(Math.cos(radians) * len,Math.sin(radians) * len);
}
com.pblabs.geom.VectorTools.angleTo = function(v1,v2) {
	return com.pblabs.geom.VectorTools.getAngle(v1.x,v1.y,v2.x,v2.y);
}
com.pblabs.geom.VectorTools.getAngle = function(x1,y1,x2,y2) {
	var angle = Math.atan2(y2 - y1,x2 - x1);
	return ((angle >= 0?angle:angle + Math.PI * 2));
}
com.pblabs.geom.VectorTools.getMidpoint = function(v1,v2) {
	return new com.pblabs.geom.Vector2(v1.x + (v2.x - v1.x) / 2,v1.y + (v2.y - v1.y) / 2);
}
com.pblabs.geom.VectorTools.lengthSq = function(v1) {
	return v1.x * v1.x + v1.y * v1.y;
}
com.pblabs.geom.VectorTools.getSmallestRotationDirection = function(objectRotationRadians,radianBetween,errorRadians) {
	if(errorRadians == null) errorRadians = 0;
	objectRotationRadians = com.pblabs.geom.Geometry.normalizeRadians(objectRotationRadians);
	radianBetween = com.pblabs.geom.Geometry.normalizeRadians(radianBetween);
	radianBetween += -objectRotationRadians;
	radianBetween = com.pblabs.geom.Geometry.normalizeRadians(radianBetween);
	objectRotationRadians = 0;
	if(radianBetween < -errorRadians) {
		return -1;
	}
	else if(radianBetween > errorRadians) {
		return 1;
	}
	return 0;
}
com.pblabs.geom.VectorTools.simplifyRadian = function(radian) {
	radian = com.pblabs.geom.Geometry.normalizeRadians(radian);
	if(radian > Math.PI) {
		return radian - Math.PI * 2;
	}
	else {
		return radian;
	}
}
com.pblabs.geom.VectorTools.differenceAngles = function(angle1,angle2) {
	var diff = angle1 - angle2;
	if(diff > Math.PI) {
		diff = -Math.PI * 2 + diff;
	}
	if(diff < -Math.PI) {
		diff = Math.PI * 2 + diff;
	}
	return -diff;
}
com.pblabs.geom.VectorTools.prototype.__class__ = com.pblabs.geom.VectorTools;
hsl.haxe.translation.Translation = function(data,origin) { if( data === $_ ) return; {
	this.data = data;
	this.origin = origin;
}}
hsl.haxe.translation.Translation.__name__ = ["hsl","haxe","translation","Translation"];
hsl.haxe.translation.Translation.prototype.data = null;
hsl.haxe.translation.Translation.prototype.origin = null;
hsl.haxe.translation.Translation.prototype.__class__ = hsl.haxe.translation.Translation;
com.pblabs.util.ArrayUtil = function() { }
com.pblabs.util.ArrayUtil.__name__ = ["com","pblabs","util","ArrayUtil"];
com.pblabs.util.ArrayUtil.indexOf = function(it,element) {
	return com.pblabs.util.IterUtil.indexOf(it,element);
}
com.pblabs.util.ArrayUtil.exists = function(arr,element) {
	return com.pblabs.util.ArrayUtil.indexOf(arr,element) != -1;
}
com.pblabs.util.ArrayUtil.isEmpty = function(arr) {
	return arr == null || arr.length == 0;
}
com.pblabs.util.ArrayUtil.removeFirst = function(arr,element) {
	return com.pblabs.util.ArrayUtil.removeIfImpl(arr,element,true);
}
com.pblabs.util.ArrayUtil.removeAll = function(arr,element) {
	return com.pblabs.util.ArrayUtil.removeIfImpl(arr,element,false);
}
com.pblabs.util.ArrayUtil.shuffle = function(arr,rando) {
	var randFunc = (rando != null?$closure(rando,"nextInt"):function(n) {
		return Std["int"](Math.random() * n);
	});
	var ii = arr.length - 1;
	while(ii > 0) {
		var idx = randFunc(ii + 1);
		var tmp = arr[idx];
		arr[idx] = arr[ii];
		arr[ii] = tmp;
		ii--;
	}
}
com.pblabs.util.ArrayUtil.removeIfImpl = function(arr,element,firstOnly) {
	var removed = false;
	var ii = 0;
	while(ii < arr.length) {
		if(com.pblabs.util.EqualableUtil.equals(element,arr[ii])) {
			arr.splice(ii--,1);
			if(firstOnly) {
				return true;
			}
			removed = true;
		}
		ii++;
	}
	return removed;
}
com.pblabs.util.ArrayUtil.prototype.__class__ = com.pblabs.util.ArrayUtil;
com.pblabs.engine.time.ProcessManager = function(p) { if( p === $_ ) return; {
	this.disableSlowWarning = true;
	this.TICKS_PER_SECOND = 30;
	this.TICK_RATE = 1.0 / this.TICKS_PER_SECOND;
	this.TICK_RATE_MS = Std["int"](this.TICK_RATE * 1000);
	this.MAX_TICKS_PER_FRAME = 5;
	this.set_started(false);
	this.set_virtualTime(0.0);
	this._interpolationFactor = 0.0;
	this.set_timeScale(1.0);
	this.lastTime = -1.0;
	this.elapsed = 0;
	this.animatedObjects = new Array();
	this.tickedObjects = new Array();
	this.needPurgeEmpty = false;
	this._platformTime = 0;
	this._frameCounter = 0;
	this._duringAdvance = false;
	this.isUsingInternalTimer = true;
	this.set_paused(false);
}}
com.pblabs.engine.time.ProcessManager.__name__ = ["com","pblabs","engine","time","ProcessManager"];
com.pblabs.engine.time.ProcessManager.prototype.MAX_TICKS_PER_FRAME = null;
com.pblabs.engine.time.ProcessManager.prototype.TICKS_PER_SECOND = null;
com.pblabs.engine.time.ProcessManager.prototype.TICK_RATE = null;
com.pblabs.engine.time.ProcessManager.prototype.TICK_RATE_MS = null;
com.pblabs.engine.time.ProcessManager.prototype.TimeScale = null;
com.pblabs.engine.time.ProcessManager.prototype._deferredCallbacks = null;
com.pblabs.engine.time.ProcessManager.prototype._duringAdvance = null;
com.pblabs.engine.time.ProcessManager.prototype._frameCounter = null;
com.pblabs.engine.time.ProcessManager.prototype._interpolationFactor = null;
com.pblabs.engine.time.ProcessManager.prototype._isStarted = null;
com.pblabs.engine.time.ProcessManager.prototype._paused = null;
com.pblabs.engine.time.ProcessManager.prototype._platformTime = null;
com.pblabs.engine.time.ProcessManager.prototype._timeScale = null;
com.pblabs.engine.time.ProcessManager.prototype._timer = null;
com.pblabs.engine.time.ProcessManager.prototype._virtualTime = null;
com.pblabs.engine.time.ProcessManager.prototype.addAnimatedObject = function(object,priority) {
	if(priority == null) priority = 0.0;
	this.addObject(object,priority,this.animatedObjects);
}
com.pblabs.engine.time.ProcessManager.prototype.addObject = function(object,priority,list) {
	if(this._duringAdvance) {
		haxe.Log.trace("during advance, we'll call later, or will we?",{ fileName : "ProcessManager.hx", lineNumber : 416, className : "com.pblabs.engine.time.ProcessManager", methodName : "addObject"});
		return;
	}
	if(!this.get_started()) this.start();
	var position = -1;
	{
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!list[i]) continue;
			if(list[i].listener == object) {
				com.pblabs.engine.debug.Log.warn("This object has already been added to the process manager.",{ fileName : "ProcessManager.hx", lineNumber : 431, className : "com.pblabs.engine.time.ProcessManager", methodName : "addObject"});
				return;
			}
			if(list[i].priority < priority) {
				position = i;
				break;
			}
		}
	}
	var processObject = new com.pblabs.engine.time.ProcessObject();
	processObject.listener = object;
	processObject.priority = priority;
	processObject.profilerKey = com.pblabs.util.ReflectUtil.getClassName(object);
	if(position < 0 || position >= list.length) list.push(processObject);
	else list.insert(position,processObject);
}
com.pblabs.engine.time.ProcessManager.prototype.addTickedObject = function(object,priority) {
	if(priority == null) priority = 0.0;
	this.addObject(object,priority,this.tickedObjects);
}
com.pblabs.engine.time.ProcessManager.prototype.advance = function(deltaTime) {
	this.advanceInternal(deltaTime);
}
com.pblabs.engine.time.ProcessManager.prototype.advanceInternal = function(deltaTime,suppressSafety) {
	if(suppressSafety == null) suppressSafety = false;
	this._platformTime = haxe.Timer.stamp();
	var startTime = this._virtualTime;
	this.elapsed += Std["int"](deltaTime * 1000);
	var tickCount = 0;
	while(this.elapsed >= this.TICK_RATE_MS && (suppressSafety || tickCount < this.MAX_TICKS_PER_FRAME)) {
		this._interpolationFactor = 0.0;
		this._duringAdvance = true;
		{
			var _g1 = 0, _g = this.tickedObjects.length;
			while(_g1 < _g) {
				var j = _g1++;
				var object = (function($this) {
					var $r;
					var $t = $this.tickedObjects[j];
					if(Std["is"]($t,com.pblabs.engine.time.ProcessObject)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this));
				if(object == null) continue;
				((function($this) {
					var $r;
					var $t = object.listener;
					if(Std["is"]($t,com.pblabs.engine.time.ITickedObject)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this))).onTick(this.TICK_RATE);
			}
		}
		this._duringAdvance = false;
		this._virtualTime += this.TICK_RATE_MS;
		this.elapsed -= this.TICK_RATE_MS;
		tickCount++;
	}
	if(tickCount >= this.MAX_TICKS_PER_FRAME && !suppressSafety && !this.disableSlowWarning) {
		com.pblabs.engine.debug.Log.warn(["advance",("Exceeded maximum number of ticks for frame (" + com.pblabs.util.NumberUtil.toFixed(this.elapsed,1)) + "ms dropped) ."],{ fileName : "ProcessManager.hx", lineNumber : 599, className : "com.pblabs.engine.time.ProcessManager", methodName : "advanceInternal"});
	}
	this.elapsed = com.pblabs.util.MathUtil.clamp(this.elapsed,0,300);
	this._duringAdvance = true;
	this._interpolationFactor = this.elapsed / this.TICK_RATE_MS;
	{
		var _g1 = 0, _g = this.animatedObjects.length;
		while(_g1 < _g) {
			var i = _g1++;
			var animatedObject = (function($this) {
				var $r;
				var $t = $this.animatedObjects[i];
				if(Std["is"]($t,com.pblabs.engine.time.ProcessObject)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			if(animatedObject == null) continue;
			((function($this) {
				var $r;
				var $t = animatedObject.listener;
				if(Std["is"]($t,com.pblabs.engine.time.IAnimatedObject)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))).onFrame(deltaTime / 1000);
		}
	}
	this._duringAdvance = false;
	if(this.needPurgeEmpty) {
		this.needPurgeEmpty = false;
		var j = 0;
		while(j < this.animatedObjects.length) {
			if(this.animatedObjects[j] == null) {
				j++;
				continue;
			}
			this.animatedObjects.splice(j,1);
		}
		j = 0;
		while(j < this.tickedObjects.length) {
			if(this.tickedObjects[j] == null) {
				j++;
				continue;
			}
			this.tickedObjects.splice(j,1);
		}
	}
}
com.pblabs.engine.time.ProcessManager.prototype.animatedObjects = null;
com.pblabs.engine.time.ProcessManager.prototype.disableSlowWarning = null;
com.pblabs.engine.time.ProcessManager.prototype.elapsed = null;
com.pblabs.engine.time.ProcessManager.prototype.frameCounter = null;
com.pblabs.engine.time.ProcessManager.prototype.get_frameCounter = function() {
	return this._frameCounter;
}
com.pblabs.engine.time.ProcessManager.prototype.get_interpolationFactor = function() {
	return this._interpolationFactor;
}
com.pblabs.engine.time.ProcessManager.prototype.get_isTicking = function() {
	return this.get_started() && this._timeScale > 0;
}
com.pblabs.engine.time.ProcessManager.prototype.get_listenerCount = function() {
	return this.tickedObjects.length + this.animatedObjects.length;
}
com.pblabs.engine.time.ProcessManager.prototype.get_paused = function() {
	return this._paused;
}
com.pblabs.engine.time.ProcessManager.prototype.get_platformTime = function() {
	return this._platformTime;
}
com.pblabs.engine.time.ProcessManager.prototype.get_started = function() {
	return this._isStarted;
}
com.pblabs.engine.time.ProcessManager.prototype.get_timeScale = function() {
	return this.timeScale;
}
com.pblabs.engine.time.ProcessManager.prototype.get_virtualTime = function() {
	return this.virtualTime;
}
com.pblabs.engine.time.ProcessManager.prototype.interpolationFactor = null;
com.pblabs.engine.time.ProcessManager.prototype.isTicking = null;
com.pblabs.engine.time.ProcessManager.prototype.isUsingInternalTimer = null;
com.pblabs.engine.time.ProcessManager.prototype.lastTime = null;
com.pblabs.engine.time.ProcessManager.prototype.listenerCount = null;
com.pblabs.engine.time.ProcessManager.prototype.needPurgeEmpty = null;
com.pblabs.engine.time.ProcessManager.prototype.onFrame = function() {
	if(!this.get_started() || this.get_paused()) {
		this.lastTime = haxe.Timer.stamp();
		return;
	}
	var currentTime = haxe.Timer.stamp();
	if(this.lastTime < 0) {
		this.lastTime = currentTime;
		com.pblabs.engine.debug.Log.debug("lastTime < 0",{ fileName : "ProcessManager.hx", lineNumber : 510, className : "com.pblabs.engine.time.ProcessManager", methodName : "onFrame"});
		return;
	}
	this._timer.stop();
	this._frameCounter++;
	var deltaTime = (currentTime - this.lastTime) * this._timeScale;
	this.advanceInternal(deltaTime);
	this.lastTime = currentTime;
	this._timer.start();
}
com.pblabs.engine.time.ProcessManager.prototype.paused = null;
com.pblabs.engine.time.ProcessManager.prototype.platformTime = null;
com.pblabs.engine.time.ProcessManager.prototype.removeAnimatedObject = function(object) {
	this.removeObject(object,this.animatedObjects);
}
com.pblabs.engine.time.ProcessManager.prototype.removeObject = function(object,list) {
	if(this.get_listenerCount() == 1) this.stop();
	{
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!list[i]) continue;
			if(list[i].listener == object) {
				if(this._duringAdvance) {
					list[i] = null;
					this.needPurgeEmpty = true;
				}
				else {
					list.splice(i,1);
				}
				return;
			}
		}
	}
	com.pblabs.engine.debug.Log.warn(object + ": object has not been added to the process manager.",{ fileName : "ProcessManager.hx", lineNumber : 484, className : "com.pblabs.engine.time.ProcessManager", methodName : "removeObject"});
}
com.pblabs.engine.time.ProcessManager.prototype.removeTickedObject = function(object) {
	this.removeObject(object,this.tickedObjects);
}
com.pblabs.engine.time.ProcessManager.prototype.seek = function(amount) {
	this._virtualTime += amount;
}
com.pblabs.engine.time.ProcessManager.prototype.set_paused = function(val) {
	this._paused = val;
	return val;
}
com.pblabs.engine.time.ProcessManager.prototype.set_platformTime = function(time) {
	throw "Cannot set platform time in this version";
	return time;
}
com.pblabs.engine.time.ProcessManager.prototype.set_started = function(value) {
	this._isStarted = value;
	return value;
}
com.pblabs.engine.time.ProcessManager.prototype.set_timeScale = function(value) {
	this._timeScale = value;
	return value;
}
com.pblabs.engine.time.ProcessManager.prototype.set_virtualTime = function(time) {
	this._virtualTime = time;
	return time;
}
com.pblabs.engine.time.ProcessManager.prototype.start = function() {
	com.pblabs.engine.debug.Log.info("Starting ProcessManager",{ fileName : "ProcessManager.hx", lineNumber : 202, className : "com.pblabs.engine.time.ProcessManager", methodName : "start"});
	if(this.get_started()) {
		com.pblabs.engine.debug.Log.warn("The ProcessManager is already started.",{ fileName : "ProcessManager.hx", lineNumber : 205, className : "com.pblabs.engine.time.ProcessManager", methodName : "start"});
		return;
	}
	this.lastTime = -1.0;
	this.elapsed = 0;
	if(this._timer == null && this.isUsingInternalTimer) {
		this._timer = new com.pblabs.engine.time.Timer(Std["int"](1000 / 30));
		this._timer.run = $closure(this,"onFrame");
	}
	this.set_started(true);
}
com.pblabs.engine.time.ProcessManager.prototype.started = null;
com.pblabs.engine.time.ProcessManager.prototype.stop = function() {
	this.set_paused(true);
	if(!this.get_started()) {
		com.pblabs.engine.debug.Log.warn("The ProcessManager isn't started.",{ fileName : "ProcessManager.hx", lineNumber : 244, className : "com.pblabs.engine.time.ProcessManager", methodName : "stop"});
		return;
	}
	com.pblabs.engine.debug.Log.info("Stopping ProcessManager",{ fileName : "ProcessManager.hx", lineNumber : 248, className : "com.pblabs.engine.time.ProcessManager", methodName : "stop"});
	if(this.isUsingInternalTimer) {
		this._timer.stop();
	}
	this.set_started(false);
}
com.pblabs.engine.time.ProcessManager.prototype.testAdvance = function(amount) {
	this.advanceInternal(amount * this._timeScale,true);
}
com.pblabs.engine.time.ProcessManager.prototype.tickedObjects = null;
com.pblabs.engine.time.ProcessManager.prototype.timeScale = null;
com.pblabs.engine.time.ProcessManager.prototype.virtualTime = null;
com.pblabs.engine.time.ProcessManager.prototype.__class__ = com.pblabs.engine.time.ProcessManager;
com.pblabs.engine.time.ProcessManager.__interfaces__ = [com.pblabs.engine.time.IProcessManager];
com.pblabs.engine.time.ProcessObject = function(p) { if( p === $_ ) return; {
	this.profilerKey = null;
	this.priority = 0.0;
	this.listener = null;
}}
com.pblabs.engine.time.ProcessObject.__name__ = ["com","pblabs","engine","time","ProcessObject"];
com.pblabs.engine.time.ProcessObject.prototype.listener = null;
com.pblabs.engine.time.ProcessObject.prototype.priority = null;
com.pblabs.engine.time.ProcessObject.prototype.profilerKey = null;
com.pblabs.engine.time.ProcessObject.prototype.__class__ = com.pblabs.engine.time.ProcessObject;
com.pblabs.components.scene.SceneView = function(layerId,width,height) { if( layerId === $_ ) return; {
	if(height == null) height = 0;
	if(width == null) width = 0;
	this._width = width;
	this._height = height;
	this._layerId = layerId;
	if(this._layerId == null) {
		this._layerId = "screen";
	}
}}
com.pblabs.components.scene.SceneView.__name__ = ["com","pblabs","components","scene","SceneView"];
com.pblabs.components.scene.SceneView.prototype._height = null;
com.pblabs.components.scene.SceneView.prototype._layer = null;
com.pblabs.components.scene.SceneView.prototype._layerId = null;
com.pblabs.components.scene.SceneView.prototype._width = null;
com.pblabs.components.scene.SceneView.prototype.get_height = function() {
	return this._height;
}
com.pblabs.components.scene.SceneView.prototype.get_layer = function() {
	com.pblabs.util.Preconditions.checkArgument(this._layer != null || this._layerId != null,"Attempting to access the root layer, but no layerId was provided. _layerId=" + this._layerId);
	if(this._layer == null) {
		com.pblabs.util.Preconditions.checkNotNull(this._layerId,"no layer, and layerId is null");
		this._layer = js.Lib.document.getElementById(this._layerId);
		this._width = Std.parseFloat(StringTools.replace(this._layer.style.width,"px",""));
		this._height = Std.parseFloat(StringTools.replace(this._layer.style.height,"px",""));
	}
	return this._layer;
}
com.pblabs.components.scene.SceneView.prototype.get_layerId = function() {
	return this._layerId;
}
com.pblabs.components.scene.SceneView.prototype.get_mouseOffsetX = function() {
	return this.get_layer().offsetLeft + Std.parseFloat(this._layer.style.borderWidth) * 2;
}
com.pblabs.components.scene.SceneView.prototype.get_mouseOffsetY = function() {
	return this.get_layer().offsetTop + Std.parseFloat(this._layer.style.borderWidth) * 2;
}
com.pblabs.components.scene.SceneView.prototype.get_width = function() {
	return this._width;
}
com.pblabs.components.scene.SceneView.prototype.height = null;
com.pblabs.components.scene.SceneView.prototype.layer = null;
com.pblabs.components.scene.SceneView.prototype.layerId = null;
com.pblabs.components.scene.SceneView.prototype.mouseOffsetX = null;
com.pblabs.components.scene.SceneView.prototype.mouseOffsetY = null;
com.pblabs.components.scene.SceneView.prototype.set_height = function(value) {
	this._height = value;
	return value;
}
com.pblabs.components.scene.SceneView.prototype.set_layer = function(val) {
	this._layer = val;
	return val;
}
com.pblabs.components.scene.SceneView.prototype.set_layerId = function(val) {
	this._layerId = val;
	return val;
}
com.pblabs.components.scene.SceneView.prototype.set_width = function(value) {
	this._width = value;
	return value;
}
com.pblabs.components.scene.SceneView.prototype.shutdown = function() {
	null;
}
com.pblabs.components.scene.SceneView.prototype.startup = function() {
	null;
}
com.pblabs.components.scene.SceneView.prototype.width = null;
com.pblabs.components.scene.SceneView.prototype.__class__ = com.pblabs.components.scene.SceneView;
com.pblabs.components.scene.SceneView.__interfaces__ = [haxe.rtti.Infos,com.pblabs.engine.core.IPBManager];
com.pblabs.geom.Rectangle = function(inX,inY,inWidth,inHeight) { if( inX === $_ ) return; {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
}}
com.pblabs.geom.Rectangle.__name__ = ["com","pblabs","geom","Rectangle"];
com.pblabs.geom.Rectangle.prototype.bottom = null;
com.pblabs.geom.Rectangle.prototype.bottomRight = null;
com.pblabs.geom.Rectangle.prototype.clone = function() {
	return new com.pblabs.geom.Rectangle(this.x,this.y,this.width,this.height);
}
com.pblabs.geom.Rectangle.prototype.contains = function(inX,inY) {
	return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
}
com.pblabs.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x,point.y);
}
com.pblabs.geom.Rectangle.prototype.containsRect = function(rect) {
	return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
}
com.pblabs.geom.Rectangle.prototype.equals = function(toCompare) {
	return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
}
com.pblabs.geom.Rectangle.prototype.extendBounds = function(r) {
	var dx = this.x - r.x;
	if(dx > 0) {
		this.x -= dx;
		this.width += dx;
	}
	var dy = this.y - r.y;
	if(dy > 0) {
		this.y -= dy;
		this.height += dy;
	}
	if(r.get_right() > this.get_right()) this.set_right(r.get_right());
	if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
}
com.pblabs.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
}
com.pblabs.geom.Rectangle.prototype.get_bottomRight = function() {
	return new com.pblabs.geom.Vector2(this.x + this.width,this.y + this.height);
}
com.pblabs.geom.Rectangle.prototype.get_left = function() {
	return this.x;
}
com.pblabs.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
}
com.pblabs.geom.Rectangle.prototype.get_size = function() {
	return new com.pblabs.geom.Vector2(this.width,this.height);
}
com.pblabs.geom.Rectangle.prototype.get_top = function() {
	return this.y;
}
com.pblabs.geom.Rectangle.prototype.get_topLeft = function() {
	return new com.pblabs.geom.Vector2(this.x,this.y);
}
com.pblabs.geom.Rectangle.prototype.height = null;
com.pblabs.geom.Rectangle.prototype.inflate = function(dx,dy) {
	this.x -= dx;
	this.width += dx * 2;
	this.y -= dy;
	this.height += dy * 2;
}
com.pblabs.geom.Rectangle.prototype.inflatePoint = function(point) {
	this.inflate(point.x,point.y);
}
com.pblabs.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var x0 = (this.x < toIntersect.x?toIntersect.x:this.x);
	var x1 = (this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right());
	if(x1 <= x0) return new com.pblabs.geom.Rectangle();
	var y0 = (this.y < toIntersect.y?toIntersect.x:this.y);
	var y1 = (this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom());
	if(y1 <= y0) return new com.pblabs.geom.Rectangle();
	return new com.pblabs.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
com.pblabs.geom.Rectangle.prototype.intersects = function(toIntersect) {
	var x0 = (this.x < toIntersect.x?toIntersect.x:this.x);
	var x1 = (this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right());
	if(x1 <= x0) return false;
	var y0 = (this.y < toIntersect.y?toIntersect.x:this.y);
	var y1 = (this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom());
	return y1 > y0;
}
com.pblabs.geom.Rectangle.prototype.isEmpty = function() {
	return this.width == 0 && this.height == 0;
}
com.pblabs.geom.Rectangle.prototype.left = null;
com.pblabs.geom.Rectangle.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
com.pblabs.geom.Rectangle.prototype.offsetPoint = function(point) {
	this.x += point.x;
	this.y += point.y;
}
com.pblabs.geom.Rectangle.prototype.right = null;
com.pblabs.geom.Rectangle.prototype.setEmpty = function() {
	this.x = this.y = this.width = this.height = 0;
}
com.pblabs.geom.Rectangle.prototype.set_bottom = function(b) {
	this.height = b - this.y;
	return b;
}
com.pblabs.geom.Rectangle.prototype.set_bottomRight = function(p) {
	this.width = p.x - this.x;
	this.height = p.y - this.y;
	return p.clone();
}
com.pblabs.geom.Rectangle.prototype.set_left = function(l) {
	this.x = l;
	return l;
}
com.pblabs.geom.Rectangle.prototype.set_right = function(r) {
	this.width = r - this.x;
	return r;
}
com.pblabs.geom.Rectangle.prototype.set_size = function(p) {
	this.width = p.x;
	this.height = p.y;
	return p.clone();
}
com.pblabs.geom.Rectangle.prototype.set_top = function(t) {
	this.y = t;
	return t;
}
com.pblabs.geom.Rectangle.prototype.set_topLeft = function(p) {
	this.x = p.x;
	this.y = p.y;
	return p.clone();
}
com.pblabs.geom.Rectangle.prototype.size = null;
com.pblabs.geom.Rectangle.prototype.toString = function() {
	return ((((((("[x=" + this.x) + ", y=") + this.y) + ", w=") + this.width) + ", h=") + this.height) + "]";
}
com.pblabs.geom.Rectangle.prototype.top = null;
com.pblabs.geom.Rectangle.prototype.topLeft = null;
com.pblabs.geom.Rectangle.prototype.union = function(toUnion) {
	var x0 = (this.x > toUnion.x?toUnion.x:this.x);
	var x1 = (this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right());
	var y0 = (this.y > toUnion.y?toUnion.x:this.y);
	var y1 = (this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom());
	return new com.pblabs.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
com.pblabs.geom.Rectangle.prototype.width = null;
com.pblabs.geom.Rectangle.prototype.x = null;
com.pblabs.geom.Rectangle.prototype.y = null;
com.pblabs.geom.Rectangle.prototype.__class__ = com.pblabs.geom.Rectangle;
js.Css = function() { }
js.Css.__name__ = ["js","Css"];
js.Css.transition = null;
js.Css.get_transition = function() {
	if(js.Css._transition != null) {
		return js.Css._transition;
	}
	var types = ["transition","webkitTransition","OTransition","MozTransition"];
	if(js.Lib.window.getComputedStyle != null) {
		var style = js.Lib.window.getComputedStyle(document.documentElement,null);
		{
			var _g = 0;
			while(_g < types.length) {
				var type = types[_g];
				++_g;
				if(Reflect.hasField(style,type)) {
					js.Css._transition = type;
					break;
				}
			}
		}
	}
	return js.Css._transition;
}
js.Css._transition = null;
js.Css.prototype.__class__ = js.Css;
js.TouchListIterator = function(list) { if( list === $_ ) return; {
	this._list = list;
	this._index = 0;
	this.reset();
}}
js.TouchListIterator.__name__ = ["js","TouchListIterator"];
js.TouchListIterator.iterator = function(list) {
	return new js.TouchListIterator(list);
}
js.TouchListIterator.prototype._index = null;
js.TouchListIterator.prototype._list = null;
js.TouchListIterator.prototype.hasNext = function() {
	return this._index < this._list.length;
}
js.TouchListIterator.prototype.next = function() {
	return this._list.item(this._index++);
}
js.TouchListIterator.prototype.reset = function() {
	this._index = 0;
}
js.TouchListIterator.prototype.__class__ = js.TouchListIterator;
hsl.js.translation.touch.GestureTranslator = function(preventDefault) { if( preventDefault === $_ ) return; {
	if(preventDefault == null) preventDefault = true;
	hsl.js.translation.JSTranslatorBase.apply(this,[preventDefault]);
}}
hsl.js.translation.touch.GestureTranslator.__name__ = ["hsl","js","translation","touch","GestureTranslator"];
hsl.js.translation.touch.GestureTranslator.__super__ = hsl.js.translation.JSTranslatorBase;
for(var k in hsl.js.translation.JSTranslatorBase.prototype ) hsl.js.translation.touch.GestureTranslator.prototype[k] = hsl.js.translation.JSTranslatorBase.prototype[k];
hsl.js.translation.touch.GestureTranslator.prototype.translate = function(nativeEvent) {
	var event = nativeEvent;
	return new hsl.haxe.translation.Translation(event,this.targetFromDOMEvent(nativeEvent));
}
hsl.js.translation.touch.GestureTranslator.prototype.__class__ = hsl.js.translation.touch.GestureTranslator;
hsl.js.translation.touch.GestureTranslator.__interfaces__ = [hsl.haxe.translation.Translator];
com.pblabs.geom.CircleUtil = function() { }
com.pblabs.geom.CircleUtil.__name__ = ["com","pblabs","geom","CircleUtil"];
com.pblabs.geom.CircleUtil.toCircle = function(r) {
	var halfWidth = r.width / 2;
	var halfHeight = r.height / 2;
	return new com.pblabs.geom.Circle(Math.sqrt(halfWidth * halfWidth + halfHeight * halfHeight),r.get_left() + halfWidth,r.get_top() + halfHeight);
}
com.pblabs.geom.CircleUtil.getBounds = function(c) {
	return new com.pblabs.geom.Rectangle(c.center.x - c.radius,c.center.y - c.radius,c.radius * 2,c.radius * 2);
}
com.pblabs.geom.CircleUtil.isWithinDistance = function(c1,c2,d) {
	if(Math.abs(c1.center.x - c2.center.x) - (c1.radius + c2.radius) > d || Math.abs(c1.center.y - c2.center.y) - (c1.radius + c2.radius) > d) {
		return false;
	}
	return com.pblabs.geom.Geometry.distance(c1.center.x,c1.center.y,c2.center.x,c2.center.y) - (c1.radius + c2.radius) <= d;
}
com.pblabs.geom.CircleUtil.isPointWithinDistance = function(c1,v,d) {
	if(Math.abs(c1.center.x - v.x) - c1.radius > d || Math.abs(c1.center.y - v.y) - c1.radius > d) {
		return false;
	}
	return com.pblabs.geom.Geometry.distance(c1.center.x,c1.center.y,v.x,v.y) - c1.radius <= d;
}
com.pblabs.geom.CircleUtil.distance = function(c1,c2) {
	return com.pblabs.geom.Geometry.distance(c1.center.x,c1.center.y,c2.center.x,c2.center.y) - (c1.radius + c2.radius);
}
com.pblabs.geom.CircleUtil.distancePoint = function(c1,v) {
	return com.pblabs.geom.Geometry.distance(c1.center.x,c1.center.y,v.x,v.y) - c1.radius;
}
com.pblabs.geom.CircleUtil.distanceSqPoint = function(c1,v) {
	return com.pblabs.geom.Geometry.distanceSq(c1.center.x,c1.center.y,v.x,v.y) - c1.radius * c1.radius;
}
com.pblabs.geom.CircleUtil.distanceSq = function(c1,c2) {
	return com.pblabs.geom.Geometry.distanceSq(c1.center.x,c1.center.y,c2.center.x,c2.center.y) - (c1.radius * c1.radius + c2.radius * c2.radius);
}
com.pblabs.geom.CircleUtil.containsPoint = function(c1,v) {
	return com.pblabs.geom.Geometry.distance(c1.center.x,c1.center.y,v.x,v.y) - c1.radius <= 0;
}
com.pblabs.geom.CircleUtil.isWithinCircle = function(v,x,y,r) {
	return com.pblabs.geom.Geometry.distance(x,y,v.x,v.y) - r <= 0;
}
com.pblabs.geom.CircleUtil.prototype.__class__ = com.pblabs.geom.CircleUtil;
com.pblabs.util.Log = function(module) { if( module === $_ ) return; {
	if(module == null) {
		module = "";
	}
	this._module = module;
}}
com.pblabs.util.Log.__name__ = ["com","pblabs","util","Log"];
com.pblabs.util.Log.getLog = function(moduleSpec) {
	var module;
	if(Std["is"](moduleSpec,String)) {
		module = (function($this) {
			var $r;
			var $t = moduleSpec;
			if(Std["is"]($t,String)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
	}
	else {
		module = Type.getClassName(com.pblabs.util.ReflectUtil.getClass(moduleSpec));
	}
	var log = com.pblabs.util.Log._logs.get(module);
	log = (log == null?new com.pblabs.util.Log(module):log);
	return log;
}
com.pblabs.util.Log.testing = function(msg,infos) {
	var log = new com.pblabs.util.Log("testing");
	log.error(msg,null,infos);
}
com.pblabs.util.Log.getStackTrace = function() {
	return haxe.Stack.toString(haxe.Stack.callStack());
}
com.pblabs.util.Log.addTarget = function(target) {
	var contains = false;
	{ var $it0 = com.pblabs.util.Log._targets.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	{
		if(t == target) {
			contains = false;
		}
	}
	}}
	if(!contains) {
		com.pblabs.util.Log._targets.add(target);
	}
}
com.pblabs.util.Log.removeTarget = function(target) {
	com.pblabs.util.Log._targets.remove(target);
}
com.pblabs.util.Log.setLevel = function(module,level) {
	if(Std["is"](module,String)) {
		com.pblabs.util.Log._setLevels.set(module,level);
	}
	else {
		com.pblabs.util.Log._setLevels.set(com.pblabs.util.ReflectUtil.getClassName(module),level);
	}
	com.pblabs.util.Log._levels = new Hash();
}
com.pblabs.util.Log.setLevels = function(settingString) {
	{
		var _g = 0, _g1 = settingString.split(";");
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			var setting = module.split(":");
			com.pblabs.util.Log._setLevels.set(setting[0],com.pblabs.util.Log.stringToLevel(setting[1]));
		}
	}
	com.pblabs.util.Log._levels = new Hash();
}
com.pblabs.util.Log.getLevel = function(module) {
	var lev = com.pblabs.util.Log._levels.get(module);
	if(lev == null) {
		var ancestor = module;
		while(true) {
			lev = com.pblabs.util.Log._setLevels.get(ancestor);
			if(lev != null || ancestor == "") {
				com.pblabs.util.Log._levels.set(module,lev);
				break;
			}
			var dex = ancestor.lastIndexOf(".");
			ancestor = (dex == -1?"":ancestor.substr(0,dex));
		}
	}
	return lev;
}
com.pblabs.util.Log.stringToLevel = function(s) {
	switch(s.toLowerCase()) {
	case "debug":{
		return com.pblabs.util.Log.DEBUG;
	}break;
	case "info":{
		return com.pblabs.util.Log.INFO;
	}break;
	case "warning":{
		return com.pblabs.util.Log.WARNING;
	}break;
	case "warn":{
		return com.pblabs.util.Log.WARNING;
	}break;
	case "error":{
		return com.pblabs.util.Log.ERROR;
	}break;
	case "off":{
		return com.pblabs.util.Log.OFF;
	}break;
	default:{
		return com.pblabs.util.Log.DEBUG;
	}break;
	}
}
com.pblabs.util.Log.debugStatic = function(msg,infos) {
	var log = com.pblabs.util.Log.getLog(infos.className);
	log.debug(msg,null,infos);
}
com.pblabs.util.Log.infoStatic = function(msg,infos) {
	var log = com.pblabs.util.Log.getLog(infos.className);
	log.info(msg,null,infos);
}
com.pblabs.util.Log.warningStatic = function(msg,infos) {
	var log = com.pblabs.util.Log.getLog(infos.className);
	log.warning(msg,null,infos);
}
com.pblabs.util.Log.errorStatic = function(msg,infos) {
	var log = com.pblabs.util.Log.getLog(infos.className);
	log.error(msg,null,infos);
}
com.pblabs.util.Log.setupPBGameLog = function() {
	com.pblabs.util.Log.showDateTime = false;
	com.pblabs.engine.debug.Log.debug = $closure(com.pblabs.util.Log,"debugStatic");
	com.pblabs.engine.debug.Log.info = $closure(com.pblabs.util.Log,"infoStatic");
	com.pblabs.engine.debug.Log.warn = $closure(com.pblabs.util.Log,"warningStatic");
	com.pblabs.engine.debug.Log.error = $closure(com.pblabs.util.Log,"errorStatic");
}
com.pblabs.util.Log._targets = null;
com.pblabs.util.Log._setLevels = null;
com.pblabs.util.Log.prototype._module = null;
com.pblabs.util.Log.prototype.argToString = function(arg) {
	try {
		if(Reflect.isFunction(arg)) {
			return Std.string((arg)());
		}
		else {
			return Std.string(arg);
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				try {
					return ("<" + Std.string(e)) + ">";
				}
				catch( $e1 ) {
					{
						var unknown = $e1;
						null;
					}
				}
			}
		}
	}
	return "<Error>";
}
com.pblabs.util.Log.prototype.debug = function(msg,args,infos) {
	this.doLog(com.pblabs.util.Log.DEBUG,msg,args,infos);
}
com.pblabs.util.Log.prototype.doLog = function(level,msg,args,infos) {
	if(level < com.pblabs.util.Log.getLevel(this._module)) {
		return;
	}
	var fontColor = "#000000";
	if(com.pblabs.util.Log._currentLevel != level) {
		com.pblabs.util.Log._currentLevel = level;
		switch(level) {
		case 0:{
			fontColor = "#a6a5a5";
		}break;
		case 1:{
			fontColor = "#000000";
		}break;
		case 2:{
			fontColor = "#ff952a";
		}break;
		case 3:{
			fontColor = "#ff0000";
		}break;
		case 4:{
			fontColor = "#000000";
		}break;
		default:{
			fontColor = "#000000";
		}break;
		}
	}
	if(Std["is"](msg,Array)) {
		args = (function($this) {
			var $r;
			var $t = msg;
			if(Std["is"]($t,Array)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)).slice(1);
		msg = (function($this) {
			var $r;
			var $t = msg;
			if(Std["is"]($t,Array)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))[0];
	}
	var logMessage = this.formatMessage(level,msg,args,infos);
	var htmlLogMessage = logMessage;
	haxe.Log.trace(htmlLogMessage,infos);
	{ var $it0 = com.pblabs.util.Log._targets.iterator();
	while( $it0.hasNext() ) { var target = $it0.next();
	{
		target.log(logMessage);
	}
	}}
}
com.pblabs.util.Log.prototype.error = function(msg,args,infos) {
	this.doLog(com.pblabs.util.Log.ERROR,msg,args,infos);
}
com.pblabs.util.Log.prototype.formatMessage = function(level,msg,args,infos) {
	if(infos != null) {
		msg = (com.pblabs.util.Log.LEVEL_NAMES[level] + ": ") + Std.string(msg);
	}
	if(com.pblabs.util.Log.showDateTime) {
		msg = (this.getTimeStamp() + " ") + msg;
	}
	if(args != null && args.length > 0) {
		if(args.length % 2 == 1) {
			var lastArg = args.pop();
			if(lastArg == null) {
				args.push("error");
				args.push(lastArg);
			}
			else {
				args.push(lastArg);
				args.push("");
			}
		}
		if(args.length > 1) {
			var ii = 0;
			while(ii < args.length) {
				msg += (ii == 0?" [":", ");
				msg += (this.argToString(args[ii]) + "=") + this.argToString(args[ii + 1]);
				ii += 2;
			}
			msg += "]";
		}
	}
	return msg;
}
com.pblabs.util.Log.prototype.getTimeStamp = function() {
	var d = Date.now();
	return d.toString();
}
com.pblabs.util.Log.prototype.info = function(msg,args,infos) {
	this.doLog(com.pblabs.util.Log.INFO,msg,args,infos);
}
com.pblabs.util.Log.prototype.warning = function(msg,args,infos) {
	this.doLog(com.pblabs.util.Log.WARNING,msg,args,infos);
}
com.pblabs.util.Log.prototype.__class__ = com.pblabs.util.Log;
com.pblabs.util.FlashLogTarget = function(p) { if( p === $_ ) return; {
	null;
}}
com.pblabs.util.FlashLogTarget.__name__ = ["com","pblabs","util","FlashLogTarget"];
com.pblabs.util.FlashLogTarget.prototype.log = function(msg) {
	__global__["trace"](msg);
}
com.pblabs.util.FlashLogTarget.prototype.__class__ = com.pblabs.util.FlashLogTarget;
com.pblabs.util.FlashLogTarget.__interfaces__ = [com.pblabs.util.LogTarget];
EReg = function(r,opt) { if( r === $_ ) return; {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}}
EReg.__name__ = ["EReg"];
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return (this.r.m != null);
}
EReg.prototype.matched = function(n) {
	return (this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this)));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length}
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.r = null;
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.__class__ = EReg;
com.pblabs.engine.resource.EmbeddedResource = function(name) { if( name === $_ ) return; {
	com.pblabs.engine.resource.ResourceBase.apply(this,[(name == null?com.pblabs.engine.resource.EmbeddedResource.NAME:name)]);
}}
com.pblabs.engine.resource.EmbeddedResource.__name__ = ["com","pblabs","engine","resource","EmbeddedResource"];
com.pblabs.engine.resource.EmbeddedResource.__super__ = com.pblabs.engine.resource.ResourceBase;
for(var k in com.pblabs.engine.resource.ResourceBase.prototype ) com.pblabs.engine.resource.EmbeddedResource.prototype[k] = com.pblabs.engine.resource.ResourceBase.prototype[k];
com.pblabs.engine.resource.EmbeddedResource.prototype.create = function(elementName) {
	com.pblabs.util.Preconditions.checkNotNull(elementName,"element name cannot be null");
	var element = js.Lib.document.getElementById(elementName);
	com.pblabs.util.Preconditions.checkNotNull(element,("No element with id=\"" + elementName) + "\"");
	return element.cloneNode(true);
}
com.pblabs.engine.resource.EmbeddedResource.prototype.load = function(onLoad,onError) {
	com.pblabs.engine.resource.ResourceBase.prototype.load.apply(this,[onLoad,onError]);
	var self = this;
	var pageLoaded = function(e) {
		js.Lib.window.onload = null;
		self.loaded();
	}
	js.Lib.window.onload = pageLoaded;
}
com.pblabs.engine.resource.EmbeddedResource.prototype.__class__ = com.pblabs.engine.resource.EmbeddedResource;
com.pblabs.components.scene.js.css.SceneLayer = function(p) { if( p === $_ ) return; {
	com.pblabs.components.scene.js.JSLayer.apply(this,[]);
	this._tempPoint = new com.pblabs.geom.Vector2();
}}
com.pblabs.components.scene.js.css.SceneLayer.__name__ = ["com","pblabs","components","scene","js","css","SceneLayer"];
com.pblabs.components.scene.js.css.SceneLayer.__super__ = com.pblabs.components.scene.js.JSLayer;
for(var k in com.pblabs.components.scene.js.JSLayer.prototype ) com.pblabs.components.scene.js.css.SceneLayer.prototype[k] = com.pblabs.components.scene.js.JSLayer.prototype[k];
com.pblabs.components.scene.js.css.SceneLayer.prototype._tempPoint = null;
com.pblabs.components.scene.js.css.SceneLayer.prototype.get_xOffset = function() {
	return 0;
}
com.pblabs.components.scene.js.css.SceneLayer.prototype.get_yOffset = function() {
	return 0;
}
com.pblabs.components.scene.js.css.SceneLayer.prototype.updateTransform = function() {
	var sceneView = this.parent.get_sceneView();
	var sceneAlignment = this.parent.sceneAlignment;
	com.pblabs.util.Preconditions.checkNotNull(this._tempPoint);
	com.pblabs.util.Preconditions.checkNotNull(sceneAlignment);
	com.pblabs.util.Preconditions.checkNotNull(sceneView);
	com.pblabs.components.scene.SceneUtil.calculateOutPoint(this._tempPoint,sceneAlignment,sceneView.get_width(),sceneView.get_height());
	this.div.style.webkitTransform = ((((((((((("translate(" + (this._tempPoint.x)) + "px, ") + (this._tempPoint.y)) + "px) rotate(") + this.parent.get_rotation()) + "rad) scale(") + this.parent.get_zoom()) + ") translate(") + (this.parent.get_x() * this.get_parallaxFactor())) + "px, ") + (this.parent.get_y() * this.get_parallaxFactor())) + "px)";
}
com.pblabs.components.scene.js.css.SceneLayer.prototype.xOffset = null;
com.pblabs.components.scene.js.css.SceneLayer.prototype.yOffset = null;
com.pblabs.components.scene.js.css.SceneLayer.prototype.__class__ = com.pblabs.components.scene.js.css.SceneLayer;
com.pblabs.geom.Polygon = function(vertices) { if( vertices === $_ ) return; {
	if(vertices == null || vertices.length < 3) {
		throw "Cannot create a polygon with < 3 vertices=" + vertices;
	}
	this._vertices = vertices;
	this._edges = [];
	{
		var _g1 = 0, _g = this._vertices.length - 1;
		while(_g1 < _g) {
			var ii = _g1++;
			this._edges.push(new com.pblabs.geom.LineSegment(this._vertices[ii],this._vertices[ii + 1]));
		}
	}
	this._edges.push(new com.pblabs.geom.LineSegment(this._vertices[this._vertices.length - 1],this._vertices[0]));
}}
com.pblabs.geom.Polygon.__name__ = ["com","pblabs","geom","Polygon"];
com.pblabs.geom.Polygon.createPolygon = function(sides,radius) {
	if(sides < 3) {
		throw "A polygon needs at least 3 sides";
	}
	var vertices = [];
	{
		var _g = 0;
		while(_g < sides) {
			var ii = _g++;
			var angle = ((Math.PI * 2) / sides) * ii;
			vertices.push(new com.pblabs.geom.Vector2(Math.cos(angle) * radius,Math.sin(angle) * radius));
		}
	}
	return new com.pblabs.geom.Polygon(vertices);
}
com.pblabs.geom.Polygon.prototype._boundCircle = null;
com.pblabs.geom.Polygon.prototype._bounds = null;
com.pblabs.geom.Polygon.prototype._center = null;
com.pblabs.geom.Polygon.prototype._edges = null;
com.pblabs.geom.Polygon.prototype._vertices = null;
com.pblabs.geom.Polygon.prototype.boundingBox = null;
com.pblabs.geom.Polygon.prototype.boundingCircle = null;
com.pblabs.geom.Polygon.prototype.center = null;
com.pblabs.geom.Polygon.prototype.clearCache = function() {
	this._center = null;
	this._bounds = null;
	this._boundCircle = null;
}
com.pblabs.geom.Polygon.prototype.clone = function() {
	var vert = [];
	{
		var _g = 0, _g1 = this._vertices;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			vert.push(v.clone());
		}
	}
	return new com.pblabs.geom.Polygon(vert);
}
com.pblabs.geom.Polygon.prototype.closestEdge = function(P) {
	var smallestDistance = Math.POSITIVE_INFINITY;
	var distance;
	var closestLine = null;
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			distance = line.dist(P);
			var closestPoint = new com.pblabs.geom.Vector2();
			if(distance < smallestDistance) {
				smallestDistance = distance;
				closestLine = line;
			}
		}
	}
	return closestLine;
}
com.pblabs.geom.Polygon.prototype.closestPoint = function(v) {
	return com.pblabs.geom.PolygonTools.closestPoint(this._vertices,v);
}
com.pblabs.geom.Polygon.prototype.closestPointOnPerimeter = function(v) {
	var p = null;
	var closestDistanceSq = Math.POSITIVE_INFINITY;
	var i = 1;
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			var distanceSq = line.distSq(v);
			if(distanceSq < closestDistanceSq) {
				closestDistanceSq = distanceSq;
				p = line.closestPointTo(v);
			}
		}
	}
	return p;
}
com.pblabs.geom.Polygon.prototype.contains = function(p) {
	{
		var _g = 0, _g1 = p._vertices;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			if(com.pblabs.geom.PolygonTools.isPointInPolygon2(this._vertices,v)) {
				return false;
			}
		}
	}
	return true;
}
com.pblabs.geom.Polygon.prototype.distToPolygonEdge = function(P) {
	var closestDistance = Math.POSITIVE_INFINITY;
	var distance;
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			distance = line.distSq(P);
			if(distance < closestDistance) {
				closestDistance = distance;
			}
		}
	}
	return Math.sqrt(closestDistance);
}
com.pblabs.geom.Polygon.prototype.distance = function(P) {
	if(this.contains(P)) {
		return 0;
	}
	var closestDistance = Math.POSITIVE_INFINITY;
	var distance;
	{
		var _g = 0, _g1 = P.getEdges();
		while(_g < _g1.length) {
			var line1 = _g1[_g];
			++_g;
			{
				var _g2 = 0, _g3 = this.getEdges();
				while(_g2 < _g3.length) {
					var line2 = _g3[_g2];
					++_g2;
					distance = line1.distanceToLineSq(line2);
					if(distance < closestDistance) {
						closestDistance = distance;
					}
				}
			}
		}
	}
	return Math.sqrt(closestDistance);
}
com.pblabs.geom.Polygon.prototype.distanceToLine = function(line1) {
	var closestDistance = Math.POSITIVE_INFINITY;
	var distance;
	{
		var _g = 0, _g1 = this.getEdges();
		while(_g < _g1.length) {
			var line2 = _g1[_g];
			++_g;
			distance = line1.distanceToLineSq(line2);
			if(distance < closestDistance) {
				closestDistance = distance;
			}
		}
	}
	return Math.sqrt(closestDistance);
}
com.pblabs.geom.Polygon.prototype.edges = null;
com.pblabs.geom.Polygon.prototype.getBoundingBox = function() {
	if(this._bounds == null) {
		this._bounds = com.pblabs.geom.PolygonTools.getBounds(this._vertices);
	}
	return this._bounds;
}
com.pblabs.geom.Polygon.prototype.getBoundingCircle = function() {
	if(this._boundCircle == null) {
		var f = com.pblabs.geom.PolygonTools.furthestPoint(this._vertices,(function($this) {
			var $r;
			if($this._center == null) {
				$this._center = com.pblabs.geom.PolygonTools.get_center($this._vertices);
			}
			$r = $this._center;
			return $r;
		}(this)));
		this._boundCircle = new com.pblabs.geom.Circle(com.pblabs.geom.VectorTools.distance((function($this) {
			var $r;
			if($this._center == null) {
				$this._center = com.pblabs.geom.PolygonTools.get_center($this._vertices);
			}
			$r = $this._center;
			return $r;
		}(this)),f),(function($this) {
			var $r;
			if($this._center == null) {
				$this._center = com.pblabs.geom.PolygonTools.get_center($this._vertices);
			}
			$r = $this._center;
			return $r;
		}(this)).x,(function($this) {
			var $r;
			if($this._center == null) {
				$this._center = com.pblabs.geom.PolygonTools.get_center($this._vertices);
			}
			$r = $this._center;
			return $r;
		}(this)).y);
	}
	return this._boundCircle;
}
com.pblabs.geom.Polygon.prototype.getClosestPoint = function(P) {
	var distanceSq = Math.POSITIVE_INFINITY;
	var closestVector = null;
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var edge = _g1[_g];
			++_g;
			var v = edge.closestPointTo(P);
			var d = (v.x - P.x) * (v.x - P.x) + (v.y - P.y) * (v.y - P.y);
			if(d < distanceSq) {
				distanceSq = d;
				closestVector = v;
			}
		}
	}
	return closestVector;
}
com.pblabs.geom.Polygon.prototype.getEdges = function() {
	return this._edges;
}
com.pblabs.geom.Polygon.prototype.getFirstIntersectingEdge = function(line) {
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var ln = _g1[_g];
			++_g;
			if(ln.isIntersectedByLine(line)) {
				return ln;
			}
		}
	}
	return null;
}
com.pblabs.geom.Polygon.prototype.getIntersectionPoints = function(v1,v2) {
	var points = [];
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var edge = _g1[_g];
			++_g;
			var v = edge.intersectionPointLinePoints(v1,v2);
			points.push(v);
		}
	}
	return points;
}
com.pblabs.geom.Polygon.prototype.getIntersectionPolygon = function(p) {
	var vs = com.pblabs.geom.PolygonTools.getIntersection(this._vertices,p.getVertices());
	if(vs != null && vs.length > 2) {
		return new com.pblabs.geom.Polygon(vs);
	}
	return null;
}
com.pblabs.geom.Polygon.prototype.getVertices = function() {
	return this._vertices;
}
com.pblabs.geom.Polygon.prototype.get_center = function() {
	if(this._center == null) {
		this._center = com.pblabs.geom.PolygonTools.get_center(this._vertices);
	}
	return this._center;
}
com.pblabs.geom.Polygon.prototype.isCircleIntersecting = function(P,radius) {
	var closestPointOnPolygon = this.getClosestPoint(P);
	return Math.sqrt((P.x - closestPointOnPolygon.x) * (P.x - closestPointOnPolygon.x) + (P.y - closestPointOnPolygon.y) * (P.y - closestPointOnPolygon.y)) <= radius;
}
com.pblabs.geom.Polygon.prototype.isEdge = function(A,B) {
	{
		var _g1 = 0, _g = this._vertices.length;
		while(_g1 < _g) {
			var ii = _g1++;
			if(A.equals(this._vertices[ii])) {
				var idx = (ii > 0?ii - 1:this._vertices.length - 1);
				if(B.equals(this._vertices[idx])) {
					return true;
				}
				idx = (ii == this._vertices.length - 1?0:ii + 1);
				if(B.equals(this._vertices[idx])) {
					return true;
				}
			}
		}
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isEdgesIntersecting = function(p) {
	{
		var _g = 0, _g1 = p.getEdges();
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			if(this.isLineIntersecting(line.a,line.b)) {
				return true;
			}
		}
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isHorizontalIntersection = function(p) {
	var pBounds = (function($this) {
		var $r;
		if(p._bounds == null) {
			p._bounds = com.pblabs.geom.PolygonTools.getBounds(p._vertices);
		}
		$r = p._bounds;
		return $r;
	}(this));
	var bounds = (function($this) {
		var $r;
		if($this._bounds == null) {
			$this._bounds = com.pblabs.geom.PolygonTools.getBounds($this._vertices);
		}
		$r = $this._bounds;
		return $r;
	}(this));
	var minX1 = bounds.get_left();
	var maxX1 = bounds.get_right();
	var minX2 = pBounds.get_left();
	var maxX2 = pBounds.get_right();
	if(com.pblabs.util.NumberUtil.isNumberWithinRange(minX2,minX1,maxX1) || com.pblabs.util.NumberUtil.isNumberWithinRange(maxX2,minX1,maxX1) || com.pblabs.util.NumberUtil.isNumberWithinRange(minX1,minX2,maxX2) || com.pblabs.util.NumberUtil.isNumberWithinRange(maxX1,minX2,maxX2)) {
		return true;
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isHorizontallyContained = function(p) {
	var pBounds = (function($this) {
		var $r;
		if(p._bounds == null) {
			p._bounds = com.pblabs.geom.PolygonTools.getBounds(p._vertices);
		}
		$r = p._bounds;
		return $r;
	}(this));
	var bounds = (function($this) {
		var $r;
		if($this._bounds == null) {
			$this._bounds = com.pblabs.geom.PolygonTools.getBounds($this._vertices);
		}
		$r = $this._bounds;
		return $r;
	}(this));
	var minX1 = bounds.get_left();
	var maxX1 = bounds.get_right();
	var minX2 = pBounds.get_left();
	var maxX2 = pBounds.get_right();
	if((com.pblabs.util.NumberUtil.isNumberWithinRange(minX2,minX1,maxX1) && com.pblabs.util.NumberUtil.isNumberWithinRange(maxX2,minX1,maxX1)) || (com.pblabs.util.NumberUtil.isNumberWithinRange(minX1,minX2,maxX2) && com.pblabs.util.NumberUtil.isNumberWithinRange(maxX1,minX2,maxX2))) {
		return true;
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isIntersection = function(polygon) {
	if(this.isEdgesIntersecting(polygon)) {
		return true;
	}
	if(this.isHorizontalIntersection(polygon) && this.isVerticalIntersection(polygon)) {
		return true;
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isLineEnclosed = function(line) {
	return this.isPointInside(line.a) && this.isPointInside(line.b);
}
com.pblabs.geom.Polygon.prototype.isLineIntersecting = function(v1,v2) {
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			if(com.pblabs.geom.LineSegment.isConnected(v1,v2,line.a,line.b)) {
				continue;
			}
			if(line.isIntersected(v1,v2)) {
				return true;
			}
		}
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isLineOnPolygonEdge = function(P1,P2) {
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var edge = _g1[_g];
			++_g;
			if(edge.dist(P1) == 0 && edge.dist(P2) == 0) {
				return true;
			}
		}
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isLineOverlapping = function(line) {
	return this.isLineIntersecting(line.a,line.b) || this.isLineEnclosed(line);
}
com.pblabs.geom.Polygon.prototype.isPointInside = function(P) {
	return com.pblabs.geom.PolygonTools.isPointInPolygon(this._vertices,P);
}
com.pblabs.geom.Polygon.prototype.isPointOnEdge = function(P) {
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			if(line.dist(P) == 0) {
				return true;
			}
		}
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isPointsAnEdge = function(p1,p2) {
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var edge = _g1[_g];
			++_g;
			if(edge.equalToPoints(p1,p2)) {
				return true;
			}
		}
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isPolygonVertex = function(P) {
	{
		var _g = 0, _g1 = this._vertices;
		while(_g < _g1.length) {
			var polygonPoint = _g1[_g];
			++_g;
			if(polygonPoint.x == P.x && polygonPoint.y == P.y) {
				return true;
			}
		}
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isVerticalContained = function(p) {
	var pBounds = (function($this) {
		var $r;
		if(p._bounds == null) {
			p._bounds = com.pblabs.geom.PolygonTools.getBounds(p._vertices);
		}
		$r = p._bounds;
		return $r;
	}(this));
	var bounds = (function($this) {
		var $r;
		if($this._bounds == null) {
			$this._bounds = com.pblabs.geom.PolygonTools.getBounds($this._vertices);
		}
		$r = $this._bounds;
		return $r;
	}(this));
	var minY1 = bounds.get_top();
	var maxY1 = bounds.get_bottom();
	var minY2 = pBounds.get_top();
	var maxY2 = pBounds.get_bottom();
	if((com.pblabs.util.NumberUtil.isNumberWithinRange(minY2,minY1,maxY1) && com.pblabs.util.NumberUtil.isNumberWithinRange(maxY2,minY1,maxY1)) || (com.pblabs.util.NumberUtil.isNumberWithinRange(minY1,minY2,maxY2) && com.pblabs.util.NumberUtil.isNumberWithinRange(maxY1,minY2,maxY2))) {
		return true;
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.isVerticalIntersection = function(p) {
	var pBounds = (function($this) {
		var $r;
		if(p._bounds == null) {
			p._bounds = com.pblabs.geom.PolygonTools.getBounds(p._vertices);
		}
		$r = p._bounds;
		return $r;
	}(this));
	var bounds = (function($this) {
		var $r;
		if($this._bounds == null) {
			$this._bounds = com.pblabs.geom.PolygonTools.getBounds($this._vertices);
		}
		$r = $this._bounds;
		return $r;
	}(this));
	var minY1 = bounds.get_top();
	var maxY1 = bounds.get_bottom();
	var minY2 = pBounds.get_top();
	var maxY2 = pBounds.get_bottom();
	if(com.pblabs.util.NumberUtil.isNumberWithinRange(minY2,minY1,maxY1) || com.pblabs.util.NumberUtil.isNumberWithinRange(maxY2,minY1,maxY1) || com.pblabs.util.NumberUtil.isNumberWithinRange(minY1,minY2,maxY2) || com.pblabs.util.NumberUtil.isNumberWithinRange(maxY1,minY2,maxY2)) {
		return true;
	}
	return false;
}
com.pblabs.geom.Polygon.prototype.pad = function(padding) {
	return this.clone().padLocal(padding);
}
com.pblabs.geom.Polygon.prototype.padLocal = function(padding) {
	var lines = new Array();
	{
		var _g = 0, _g1 = this._edges;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			lines.push(line.clone());
		}
	}
	{
		var _g = 0;
		while(_g < lines.length) {
			var line = lines[_g];
			++_g;
			var normal = line.getNormalVector();
			var transform = com.pblabs.geom.VectorTools.angleToVector2(normal.get_angle(),padding);
			line.a.addLocal(transform);
			line.b.addLocal(transform);
		}
	}
	lines.push(lines[0]);
	var newVertices = [];
	{
		var _g1 = 0, _g = lines.length - 1;
		while(_g1 < _g) {
			var ii = _g1++;
			var line1 = lines[ii];
			var line2 = lines[ii + 1];
			var intersectPoint = com.pblabs.geom.LineSegment.lineIntersectLine(line1.a,line1.b,line2.a,line2.b,false);
			if(intersectPoint == null) {
				if(line1.b.equals(line2.a)) {
					newVertices.push(line2.a.clone());
				}
				else {
					throw ((("Lines " + line1) + ", ") + line2) + " don't intersect, not do they touch";
				}
			}
			else {
				newVertices.push(com.pblabs.geom.LineSegment.lineIntersectLine(line1.a,line1.b,line2.a,line2.b,false));
			}
		}
	}
	{
		var _g1 = 0, _g = newVertices.length;
		while(_g1 < _g) {
			var ii = _g1++;
			var newV = newVertices[ii];
			var oldV = this._vertices[ii];
			oldV.x = newV.x;
			oldV.y = newV.y;
		}
	}
	this.clearCache();
	return this;
}
com.pblabs.geom.Polygon.prototype.rotate = function(angle,rotationPoint) {
	return this.clone().rotateLocal(angle,rotationPoint);
}
com.pblabs.geom.Polygon.prototype.rotateLocal = function(angle,rotationPoint) {
	rotationPoint = (rotationPoint != null?rotationPoint:(function($this) {
		var $r;
		if($this._center == null) {
			$this._center = com.pblabs.geom.PolygonTools.get_center($this._vertices);
		}
		$r = $this._center;
		return $r;
	}(this)));
	{
		var _g = 0, _g1 = this._vertices;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			v.subtractLocal(rotationPoint).rotateLocal(angle).addLocal(rotationPoint);
		}
	}
	return this;
}
com.pblabs.geom.Polygon.prototype.scale = function(scaleX,scaleY) {
	return this.clone().scaleLocal(scaleX,scaleY);
}
com.pblabs.geom.Polygon.prototype.scaleLocal = function(scaleX,scaleY) {
	{
		var _g = 0, _g1 = this._vertices;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			v.x *= scaleX;
			v.y *= scaleY;
		}
	}
	this.clearCache();
	return this;
}
com.pblabs.geom.Polygon.prototype.toString = function() {
	return ("Polygon[" + this._vertices.join(",\t")) + "]";
}
com.pblabs.geom.Polygon.prototype.translate = function(dx,dy) {
	return this.clone().translateLocal(dx,dy);
}
com.pblabs.geom.Polygon.prototype.translateLocal = function(dx,dy) {
	{
		var _g = 0, _g1 = this._vertices;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			v.x += dx;
			v.y += dy;
		}
	}
	this.clearCache();
	return this;
}
com.pblabs.geom.Polygon.prototype.union = function(p) {
	if(!this.isIntersection(p)) {
		com.pblabs.engine.debug.Log.debug(["union, no intersection","poly1",this,"poly2",p],{ fileName : "Polygon.hx", lineNumber : 612, className : "com.pblabs.geom.Polygon", methodName : "union"});
		return new com.pblabs.geom.Polygon([]);
	}
	var points = com.pblabs.geom.PolygonTools.union(this._vertices,p.getVertices());
	if(points != null && points.length > 2) {
		return new com.pblabs.geom.Polygon(points);
	}
	return null;
}
com.pblabs.geom.Polygon.prototype.vertices = null;
com.pblabs.geom.Polygon.prototype.__class__ = com.pblabs.geom.Polygon;
com.pblabs.geom.Polygon.__interfaces__ = [com.pblabs.util.Cloneable];
com.pblabs.components.base.AlphaComponent = function(p) { if( p === $_ ) return; {
	com.pblabs.components.base.NotifyingValueComponent.apply(this,[]);
	this._value = 1;
}}
com.pblabs.components.base.AlphaComponent.__name__ = ["com","pblabs","components","base","AlphaComponent"];
com.pblabs.components.base.AlphaComponent.__super__ = com.pblabs.components.base.NotifyingValueComponent;
for(var k in com.pblabs.components.base.NotifyingValueComponent.prototype ) com.pblabs.components.base.AlphaComponent.prototype[k] = com.pblabs.components.base.NotifyingValueComponent.prototype[k];
com.pblabs.components.base.AlphaComponent.prototype.alpha = null;
com.pblabs.components.base.AlphaComponent.prototype.get_alpha = function() {
	return com.pblabs.components.base.NotifyingValueComponent.prototype.get_value.apply(this,[]);
}
com.pblabs.components.base.AlphaComponent.prototype.set_alpha = function(val) {
	return com.pblabs.components.base.NotifyingValueComponent.prototype.set_value.apply(this,[val]);
}
com.pblabs.components.base.AlphaComponent.prototype.toString = function() {
	return "Alpha=" + this.get_alpha();
}
com.pblabs.components.base.AlphaComponent.prototype.__class__ = com.pblabs.components.base.AlphaComponent;
Xml = function(p) { if( p === $_ ) return; {
	null;
}}
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	var rules = [Xml.enode,Xml.epcdata,Xml.eend,Xml.ecdata,Xml.edoctype,Xml.ecomment,Xml.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:{
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(Xml.eattribute.match(str)) {
							x.set(Xml.eattribute.matched(1),Xml.eattribute.matched(3));
							str = Xml.eattribute.matchedRight();
						}
						if(!Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = Xml.eclose.matchedRight();
					}break;
					case 1:{
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					case 2:{
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						else null;
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						else null;
						current = stack.pop();
						str = r.matchedRight();
					}break;
					case 3:{
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
					}break;
					case 4:{
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = Xml.edoctype_elt.matchedRight();
								switch(Xml.edoctype_elt.matched(0)) {
								case "[":{
									count++;
								}break;
								case "]":{
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
								}break;
								default:{
									if(count == 0) throw "__break__";
								}break;
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
					}break;
					case 5:{
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,(p.pos + p.len) - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
					}break;
					case 6:{
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw (("Xml parse error : Unexpected " + str.substr(0,10)) + "...");
			else throw ("Xml parse error : Unexpected " + str);
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	return current;
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype._attributes = null;
Xml.prototype._children = null;
Xml.prototype._nodeName = null;
Xml.prototype._nodeValue = null;
Xml.prototype._parent = null;
Xml.prototype.addChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
}
Xml.prototype.attributes = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.keys();
}
Xml.prototype.elements = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			if(this.x[k].nodeType == Xml.Element) break;
			k += 1;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k += 1;
			if(n.nodeType == Xml.Element) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}}
}
Xml.prototype.elementsNamed = function(name) {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			if(n.nodeType == Xml.Element && n._nodeName == name) break;
			k++;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k++;
			if(n.nodeType == Xml.Element && n._nodeName == name) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}}
}
Xml.prototype.exists = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.exists(att);
}
Xml.prototype.firstChild = function() {
	if(this._children == null) throw "bad nodetype";
	return this._children[0];
}
Xml.prototype.firstElement = function() {
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) return n;
		cur++;
	}
	return null;
}
Xml.prototype.get = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.get(att);
}
Xml.prototype.getNodeName = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName;
}
Xml.prototype.getNodeValue = function() {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue;
}
Xml.prototype.getParent = function() {
	return this._parent;
}
Xml.prototype.insertChild = function(x,pos) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
}
Xml.prototype.iterator = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		return this.cur < this.x.length;
	}, next : function() {
		return this.x[this.cur++];
	}}
}
Xml.prototype.nodeName = null;
Xml.prototype.nodeType = null;
Xml.prototype.nodeValue = null;
Xml.prototype.parent = null;
Xml.prototype.remove = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
}
Xml.prototype.removeChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	return b;
}
Xml.prototype.set = function(att,value) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
}
Xml.prototype.setNodeName = function(n) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName = n;
}
Xml.prototype.setNodeValue = function(v) {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue = v;
}
Xml.prototype.toString = function() {
	if(this.nodeType == Xml.PCData) return this._nodeValue;
	if(this.nodeType == Xml.CData) return ("<![CDATA[" + this._nodeValue) + "]]>";
	if(this.nodeType == Xml.Comment) return ("<!--" + this._nodeValue) + "-->";
	if(this.nodeType == Xml.DocType) return ("<!DOCTYPE " + this._nodeValue) + ">";
	if(this.nodeType == Xml.Prolog) return ("<?" + this._nodeValue) + "?>";
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<";
		s.b[s.b.length] = this._nodeName;
		{ var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) { var k = $it0.next();
		{
			s.b[s.b.length] = " ";
			s.b[s.b.length] = k;
			s.b[s.b.length] = "=\"";
			s.b[s.b.length] = this._attributes.get(k);
			s.b[s.b.length] = "\"";
		}
		}}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>";
			return s.b.join("");
		}
		s.b[s.b.length] = ">";
	}
	{ var $it1 = this.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	s.b[s.b.length] = x.toString();
	}}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</";
		s.b[s.b.length] = this._nodeName;
		s.b[s.b.length] = ">";
	}
	return s.b.join("");
}
Xml.prototype.__class__ = Xml;
feffects.easing.Linear = function() { }
feffects.easing.Linear.__name__ = ["feffects","easing","Linear"];
feffects.easing.Linear.easeNone = function(t,b,c,d) {
	return (c * t) / d + b;
}
feffects.easing.Linear.easeIn = function(t,b,c,d) {
	return (c * t) / d + b;
}
feffects.easing.Linear.easeOut = function(t,b,c,d) {
	return (c * t) / d + b;
}
feffects.easing.Linear.easeInOut = function(t,b,c,d) {
	return (c * t) / d + b;
}
feffects.easing.Linear.prototype.__class__ = feffects.easing.Linear;
feffects.easing.Linear.__interfaces__ = [haxe.Public];
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	}
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	}
	d.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return (((((((((date.getFullYear() + "-") + ((m < 10?"0" + m:"" + m))) + "-") + ((d1 < 10?"0" + d1:"" + d1))) + " ") + ((h < 10?"0" + h:"" + h))) + ":") + ((mi < 10?"0" + mi:"" + mi))) + ":") + ((s < 10?"0" + s:"" + s));
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	js["XMLHttpRequest"] = (window.XMLHttpRequest?XMLHttpRequest:(window.ActiveXObject?function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					try {
						return new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch( $e1 ) {
						{
							var e1 = $e1;
							{
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this))));
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	com.pblabs.util.Log._setLevels = new Hash();
	com.pblabs.util.Log._targets = new List();
	com.pblabs.util.Log._setLevels.set("",4);
}
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
com.pblabs.engine.core.PBObject.__meta__ = { fields : { context : { inject : ["com.pblabs.engine.core.IPBContext"]}}}
com.pblabs.util.MathUtil.INT32_MIN = -2147483648;
com.pblabs.util.MathUtil.INT32_MAX = 2147483647;
com.pblabs.util.MathUtil.UINT32_MAX = -1;
com.pblabs.util.MathUtil.PI = 3.141592653589793;
com.pblabs.util.MathUtil.PI2 = 6.283185307179586;
com.pblabs.util.MathUtil.RAD_DEG = 180 / 3.141592653589793;
com.pblabs.util.MathUtil.DEG_RAD = 3.141592653589793 / 180;
com.pblabs.util.MathUtil.SQROOT2 = 1.4142135623730951;
com.pblabs.geom.Geometry.PI_HALF = Math.PI / 2;
com.pblabs.geom.Geometry.PI_2 = Math.PI * 2;
com.pblabs.geom.Geometry.SQRT2 = Math.sqrt(2);
com.pblabs.geom.Geometry.DEG_TO_RAD = (Math.PI / 180);
com.pblabs.geom.Geometry.RAD_TO_DEG = (180 / Math.PI);
com.pblabs.components.tasks.TaskContainer.TYPE__LIMIT = 3;
com.pblabs.components.tasks.TaskContainer.TYPE_PARALLEL = 0;
com.pblabs.components.tasks.TaskContainer.TYPE_REPEATING = 2;
com.pblabs.components.tasks.TaskContainer.TYPE_SERIAL = 1;
com.pblabs.engine.core.EntityComponent.__meta__ = { fields : { context : { inject : null, editorData : [{ ignore : "true"}]}, owner : { editorData : [{ ignore : "true"}]}, isRegistered : { editorData : [{ ignore : "true"}]}, name : { editorData : [{ ignore : "true"}]}, _isRegistered : { editorData : [{ ignore : "true"}]}, _owner : { editorData : [{ ignore : "true"}]}, _name : { editorData : [{ ignore : "true"}]}, _context : { editorData : [{ ignore : "true"}]}, _sanityCheck : { editorData : [{ ignore : "true"}]}}}
com.pblabs.engine.core.EntityComponent.__rtti = "<class path=\"com.pblabs.engine.core.EntityComponent\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/engine/core/EntityComponent.hx\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<implements path=\"com.pblabs.engine.core.IEntityComponent\"/>\n\t<context public=\"1\" get=\"get_context\" set=\"set_context\"><c path=\"com.pblabs.engine.core.IPBContext\"/></context>\n\t<owner public=\"1\" get=\"get_owner\" set=\"set_owner\"><c path=\"com.pblabs.engine.core.IEntity\"/></owner>\n\t<isRegistered public=\"1\" get=\"get_isRegistered\" set=\"null\"><e path=\"Bool\"/></isRegistered>\n\t<name public=\"1\" get=\"get_name\" set=\"set_name\"><c path=\"String\"/></name>\n\t<get_context set=\"method\" line=\"55\"><f a=\"\"><c path=\"com.pblabs.engine.core.IPBContext\"/></f></get_context>\n\t<set_context set=\"method\" line=\"61\"><f a=\"value\">\n\t<c path=\"com.pblabs.engine.core.IPBContext\"/>\n\t<c path=\"com.pblabs.engine.core.IPBContext\"/>\n</f></set_context>\n\t<get_owner set=\"method\" line=\"68\"><f a=\"\"><c path=\"com.pblabs.engine.core.IEntity\"/></f></get_owner>\n\t<set_owner set=\"method\" line=\"73\"><f a=\"value\">\n\t<c path=\"com.pblabs.engine.core.IEntity\"/>\n\t<c path=\"com.pblabs.engine.core.IEntity\"/>\n</f></set_owner>\n\t<get_name set=\"method\" line=\"81\"><f a=\"\"><c path=\"String\"/></f></get_name>\n\t<set_name set=\"method\" line=\"86\"><f a=\"name\">\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n</f></set_name>\n\t<get_isRegistered set=\"method\" line=\"93\"><f a=\"\"><e path=\"Bool\"/></f></get_isRegistered>\n\t<register public=\"1\" set=\"method\" line=\"98\"><f a=\"owner:?name\">\n\t<c path=\"com.pblabs.engine.core.IEntity\"/>\n\t<c path=\"String\"/>\n\t<e path=\"Void\"/>\n</f></register>\n\t<unregister public=\"1\" set=\"method\" line=\"110\"><f a=\"\"><e path=\"Void\"/></f></unregister>\n\t<reset public=\"1\" set=\"method\" line=\"122\"><f a=\"\"><e path=\"Void\"/></f></reset>\n\t<onAdd set=\"method\" line=\"136\">\n\t\t<f a=\"\"><e path=\"Void\"/></f>\n\t\t<haxe_doc>\n   * This is called when the component is added to an entity. Any initialization,\n   * event registration, or object lookups should happen here. Component lookups\n   * on the owner entity should NOT happen here. Use onReset instead.\n   * \n   * @see #onReset()\n   </haxe_doc>\n\t</onAdd>\n\t<onRemove set=\"method\" line=\"146\">\n\t\t<f a=\"\"><e path=\"Void\"/></f>\n\t\t<haxe_doc>\n   * This is called when the component is removed from an entity. It should reverse\n   * anything that happened in onAdd or onReset (like removing event listeners or\n   * nulling object references).\n   </haxe_doc>\n\t</onRemove>\n\t<onReset set=\"method\" line=\"158\">\n\t\t<f a=\"\"><e path=\"Void\"/></f>\n\t\t<haxe_doc><![CDATA[\n   * This is called anytime a component is added or removed from the owner entity.\n   * Lookups of other components on the owner entity should happen here.\n   * \n   * <p>This can potentially be called multiple times, so make sure previous lookups\n   * are properly cleaned up each time.</p>\n   ]]></haxe_doc>\n\t</onReset>\n\t<_isRegistered><e path=\"Bool\"/></_isRegistered>\n\t<_owner><c path=\"com.pblabs.engine.core.IEntity\"/></_owner>\n\t<_name><c path=\"String\"/></_name>\n\t<_context><c path=\"com.pblabs.engine.core.IPBContext\"/></_context>\n\t<_sanityCheck><e path=\"Bool\"/></_sanityCheck>\n\t<new public=\"1\" set=\"method\" line=\"46\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n* An implementation of the IEntityComponent interface, providing all the basic\n* functionality required of all components. Custom components should always\n* derive from this class rather than implementing IEntityComponent directly.\n* \n* @see IEntity\n</haxe_doc>\n</class>";
com.pblabs.engine.serialization.Serializer.EMPTY_ARRAY = [];
com.pblabs.geom.Vector2.INFINITE = new com.pblabs.geom.Vector2(Math.POSITIVE_INFINITY,Math.POSITIVE_INFINITY);
com.pblabs.util.ReflectUtil.cacheXml = new Hash();
com.pblabs.util.ReflectUtil.cacheClassdef = new Hash();
com.pblabs.util.ReflectUtil.classDefParser = new haxe.rtti.XmlParser();
com.pblabs.util.ReflectUtil.fieldTypes = new Hash();
com.pblabs.util.ReflectUtil.EMPTY_ARRAY = new Array();
com.pblabs.components.manager.NodeComponent.__rtti = "<class path=\"com.pblabs.components.manager.NodeComponent\" params=\"P:C\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/manager/NodeComponent.hx\">\n\t<extends path=\"com.pblabs.engine.core.EntityComponent\"/>\n\t<implements path=\"com.pblabs.engine.serialization.ISerializable\"/>\n\t<getEntityAndAllParents public=\"1\" set=\"method\" line=\"51\" static=\"1\"><f a=\"e:nodeTypeClass:?list\">\n\t<c path=\"com.pblabs.engine.core.IEntity\"/>\n\t<c path=\"Class\"><d/></c>\n\t<c path=\"List\"><c path=\"com.pblabs.engine.core.IEntity\"/></c>\n\t<t path=\"Iterable\"><c path=\"com.pblabs.engine.core.IEntity\"/></t>\n</f></getEntityAndAllParents>\n\t<getEntityAndAllChildren public=\"1\" set=\"method\" line=\"72\" static=\"1\"><f a=\"e:nodeTypeClass:?list\">\n\t<c path=\"com.pblabs.engine.core.IEntity\"/>\n\t<c path=\"Class\"><d/></c>\n\t<c path=\"List\"><c path=\"com.pblabs.engine.core.IEntity\"/></c>\n\t<t path=\"Iterable\"><c path=\"com.pblabs.engine.core.IEntity\"/></t>\n</f></getEntityAndAllChildren>\n\t<getAll public=\"1\" set=\"method\" line=\"95\" static=\"1\"><f a=\"e:nodeTypeClass\">\n\t<c path=\"com.pblabs.engine.core.IEntity\"/>\n\t<c path=\"Class\"><d/></c>\n\t<t path=\"Iterable\"><c path=\"com.pblabs.engine.core.IEntity\"/></t>\n</f></getAll>\n\t<parentProperty public=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"com.pblabs.components.manager.NodeComponent.P\"/></c></parentProperty>\n\t<children public=\"1\" set=\"null\"><c path=\"Array\"><c path=\"com.pblabs.components.manager.NodeComponent.C\"/></c></children>\n\t<parent public=\"1\" set=\"null\"><c path=\"com.pblabs.components.manager.NodeComponent.P\"/></parent>\n\t<serialize public=\"1\" set=\"method\" line=\"110\"><f a=\"xml\">\n\t<t path=\"com.pblabs.engine.serialization.XML\"/>\n\t<e path=\"Void\"/>\n</f></serialize>\n\t<deserialize public=\"1\" set=\"method\" line=\"115\"><f a=\"xml:context\">\n\t<t path=\"com.pblabs.engine.serialization.XML\"/>\n\t<c path=\"com.pblabs.engine.core.IPBContext\"/>\n\t<d/>\n</f></deserialize>\n\t<addChild public=\"1\" set=\"method\" line=\"120\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.manager.NodeComponent.C\"/>\n\t<e path=\"Void\"/>\n</f></addChild>\n\t<removeChild public=\"1\" set=\"method\" line=\"140\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.manager.NodeComponent.C\"/>\n\t<e path=\"Void\"/>\n</f></removeChild>\n\t<childAdded set=\"method\" line=\"163\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.manager.NodeComponent.C\"/>\n\t<e path=\"Void\"/>\n</f></childAdded>\n\t<childRemoved set=\"method\" line=\"168\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.manager.NodeComponent.C\"/>\n\t<e path=\"Void\"/>\n</f></childRemoved>\n\t<addedToParent set=\"method\" line=\"173\"><f a=\"\"><e path=\"Void\"/></f></addedToParent>\n\t<removingFromParent set=\"method\" line=\"178\"><f a=\"\"><e path=\"Void\"/></f></removingFromParent>\n\t<addToParent public=\"1\" set=\"method\" line=\"183\"><f a=\"?newParent\">\n\t<c path=\"com.pblabs.components.manager.NodeComponent.P\"/>\n\t<e path=\"Void\"/>\n</f></addToParent>\n\t<removeFromParent public=\"1\" set=\"method\" line=\"201\"><f a=\"\"><e path=\"Void\"/></f></removeFromParent>\n\t<hasParent public=\"1\" set=\"method\" line=\"210\"><f a=\"\"><e path=\"Bool\"/></f></hasParent>\n\t<onReset set=\"method\" line=\"215\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onReset>\n\t<onRemove set=\"method\" line=\"224\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<new public=\"1\" set=\"method\" line=\"104\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n\tUseful for managing components and setting up tree structures.\n\tIf you need a manager type component and a bunch of \n\tchildren type components that need to register with the manager, \n\tjust extend both from NodeComponent, and set the parentProperty\n\ton the children.  They will automatically register themselves with \n\tthe parent, and detach on destruction (or earlier if needed).\n\t\n\tNB: destroying a parent without first detaching the children\n\twill destory the child entities as well.\n\t\n\tThe parent then overrides childAdded to perform specific handling.\n\t\n\tAlthough this component is typed, P and C must be EntityComponents.\n</haxe_doc>\n</class>";
com.pblabs.components.input.BaseInputManager.__meta__ = { fields : { sceneView : { inject : null}}}
com.pblabs.components.input.BaseInputManager.__rtti = "<class path=\"com.pblabs.components.input.BaseInputManager\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/input/BaseInputManager.hx\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<implements path=\"com.pblabs.engine.core.IPBManager\"/>\n\t<sceneView><c path=\"com.pblabs.components.scene.SceneView\"/></sceneView>\n\t<startup public=\"1\" set=\"method\" line=\"39\"><f a=\"\"><e path=\"Void\"/></f></startup>\n\t<shutdown public=\"1\" set=\"method\" line=\"76\"><f a=\"\"><e path=\"Void\"/></f></shutdown>\n\t<new public=\"1\" set=\"method\" line=\"35\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * Base class for grabbing input events such as mouse and touch\n  * events from a layer such as a flash Sprite or a HTML DIV element,\n  * and funnelling them into signals.\n  </haxe_doc>\n</class>";
com.pblabs.components.input.TouchInputManager.__meta__ = { fields : { mouse : { inject : null}}}
com.pblabs.components.input.TouchInputManager.__rtti = "<class path=\"com.pblabs.components.input.TouchInputManager\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/input/TouchInputManager.hx\">\n\t<extends path=\"com.pblabs.components.input.BaseInputManager\"/>\n\t<mouse><c path=\"com.pblabs.components.input.MouseInputManager\"/></mouse>\n\t<touchStart public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><t path=\"hsl.js.data.TouchEvent\"/></c></touchStart>\n\t<touchMove public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><t path=\"hsl.js.data.TouchEvent\"/></c></touchMove>\n\t<touchEnd public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><t path=\"hsl.js.data.TouchEvent\"/></c></touchEnd>\n\t<convertTouchEventsToMouse public=\"1\">\n\t\t<e path=\"Bool\"/>\n\t\t<haxe_doc> Currently not implemented </haxe_doc>\n\t</convertTouchEventsToMouse>\n\t<startup public=\"1\" set=\"method\" line=\"48\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></startup>\n\t<shutdown public=\"1\" set=\"method\" line=\"140\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></shutdown>\n\t<bindSignals set=\"method\" line=\"146\"><f a=\"\"><e path=\"Void\"/></f></bindSignals>\n\t<freeSignals set=\"method\" line=\"157\"><f a=\"\"><e path=\"Void\"/></f></freeSignals>\n\t<_firstTouchId><c path=\"Int\"/></_firstTouchId>\n\t<new public=\"1\" set=\"method\" line=\"42\"><f a=\"?convertToMouseEvents\">\n\t<e path=\"Bool\"/>\n\t<e path=\"Void\"/>\n</f></new>\n\t<haxe_doc>\n * Javascript only ATM.  What other platforms support gestures?\n * \n * Funnels gesture events into signals.\n * Can funnel into MouseInputManager if no specific gesture logic.\n * \n </haxe_doc>\n</class>";
com.pblabs.components.scene.BaseScene2DManager.__meta__ = { obj : { sets : ["Scene2DManager"]}, fields : { sceneView : { inject : null}}}
com.pblabs.components.scene.BaseScene2DManager.__rtti = "<class path=\"com.pblabs.components.scene.BaseScene2DManager\" params=\"Layer\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/scene/BaseScene2DManager.hx\">\n\t<extends path=\"com.pblabs.components.manager.NodeComponent\">\n\t\t<d/>\n\t\t<c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/>\n\t</extends>\n\t<implements path=\"com.pblabs.components.scene.IScene2D\"/>\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<DEFAULT_LAYER_NAME public=\"1\" line=\"275\" static=\"1\"><c path=\"String\"/></DEFAULT_LAYER_NAME>\n\t<EMPTY_ARRAY line=\"276\" static=\"1\"><c path=\"Array\"><d/></c></EMPTY_ARRAY>\n\t<sceneView public=\"1\" get=\"get_sceneView\" set=\"set_sceneView\"><c path=\"com.pblabs.components.scene.SceneView\"/></sceneView>\n\t<zoom public=\"1\" get=\"get_zoom\" set=\"set_zoom\"><c path=\"Float\"/></zoom>\n\t<sceneBounds public=\"1\" get=\"get_sceneBounds\" set=\"set_sceneBounds\"><c path=\"com.pblabs.geom.Rectangle\"/></sceneBounds>\n\t<layerCount public=\"1\" get=\"get_layerCount\" set=\"null\"><c path=\"Int\"/></layerCount>\n\t<x public=\"1\" get=\"get_x\" set=\"set_x\"><c path=\"Float\"/></x>\n\t<y public=\"1\" get=\"get_y\" set=\"set_y\"><c path=\"Float\"/></y>\n\t<rotation public=\"1\" get=\"get_rotation\" set=\"set_rotation\"><c path=\"Float\"/></rotation>\n\t<zoomMax public=\"1\">\n\t\t<c path=\"Float\"/>\n\t\t<haxe_doc>\n\t * Maximum allowed zoom level.\n\t *\n\t * @see zoom\n\t </haxe_doc>\n\t</zoomMax>\n\t<zoomMin public=\"1\">\n\t\t<c path=\"Float\"/>\n\t\t<haxe_doc>\n\t * Minimum allowed zoom level.\n\t *\n\t * @see zoom\n\t </haxe_doc>\n\t</zoomMin>\n\t<sceneAlignment public=\"1\">\n\t\t<e path=\"com.pblabs.components.scene.SceneAlignment\"/>\n\t\t<haxe_doc>\n\t * How the scene is aligned relative to its position property.\n\t *\n\t * @see SceneAlignment\n\t * @see position\n\t </haxe_doc>\n\t</sceneAlignment>\n\t<addLayer public=\"1\" params=\"T\" set=\"method\" line=\"70\"><f a=\"cls:layerName:?registerAsManager\">\n\t<c path=\"Class\"><c path=\"addLayer.T\"/></c>\n\t<c path=\"String\"/>\n\t<e path=\"Bool\"/>\n\t<c path=\"addLayer.T\"/>\n</f></addLayer>\n\t<update public=\"1\" set=\"method\" line=\"86\">\n\t\t<f a=\"\"><e path=\"Void\"/></f>\n\t\t<haxe_doc> Calls onFrame on this and all children to make sure they're in the right place on the first frame </haxe_doc>\n\t</update>\n\t<isLayer set=\"method\" line=\"107\"><f a=\"name\">\n\t<c path=\"String\"/>\n\t<e path=\"Bool\"/>\n</f></isLayer>\n\t<getLayerAt public=\"1\" set=\"method\" line=\"112\"><f a=\"idx\">\n\t<c path=\"Int\"/>\n\t<c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/>\n</f></getLayerAt>\n\t<getLayerIndex public=\"1\" set=\"method\" line=\"117\"><f a=\"layer\">\n\t<c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/>\n\t<c path=\"Int\"/>\n</f></getLayerIndex>\n\t<setLayerIndex public=\"1\" set=\"method\" line=\"122\"><f a=\"layer:index\">\n\t<c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/>\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></setLayerIndex>\n\t<childAdded set=\"method\" line=\"130\" override=\"1\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/>\n\t<e path=\"Void\"/>\n</f></childAdded>\n\t<childRemoved set=\"method\" line=\"137\" override=\"1\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/>\n\t<e path=\"Void\"/>\n</f></childRemoved>\n\t<getTopLayer public=\"1\" set=\"method\" line=\"144\"><f a=\"\"><c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/></f></getTopLayer>\n\t<getLayer public=\"1\" set=\"method\" line=\"152\"><f a=\"layerName\">\n\t<c path=\"String\"/>\n\t<c path=\"com.pblabs.components.scene.BaseScene2DManager.Layer\"/>\n</f></getLayer>\n\t<onAdd set=\"method\" line=\"162\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<onRemove set=\"method\" line=\"171\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<get_layerCount get=\"inline\" set=\"null\" line=\"177\"><f a=\"\"><c path=\"Int\"/></f></get_layerCount>\n\t<get_x set=\"method\" line=\"182\"><f a=\"\"><c path=\"Float\"/></f></get_x>\n\t<set_x set=\"method\" line=\"187\"><f a=\"newX\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_x>\n\t<get_y set=\"method\" line=\"197\"><f a=\"\"><c path=\"Float\"/></f></get_y>\n\t<set_y set=\"method\" line=\"202\"><f a=\"newY\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_y>\n\t<get_sceneBounds set=\"method\" line=\"212\"><f a=\"\"><c path=\"com.pblabs.geom.Rectangle\"/></f></get_sceneBounds>\n\t<set_sceneBounds set=\"method\" line=\"217\"><f a=\"value\">\n\t<c path=\"com.pblabs.geom.Rectangle\"/>\n\t<c path=\"com.pblabs.geom.Rectangle\"/>\n</f></set_sceneBounds>\n\t<get_sceneView set=\"method\" line=\"223\"><f a=\"\"><c path=\"com.pblabs.components.scene.SceneView\"/></f></get_sceneView>\n\t<set_sceneView set=\"method\" line=\"228\"><f a=\"value\">\n\t<c path=\"com.pblabs.components.scene.SceneView\"/>\n\t<c path=\"com.pblabs.components.scene.SceneView\"/>\n</f></set_sceneView>\n\t<get_zoom set=\"method\" line=\"234\"><f a=\"\"><c path=\"Float\"/></f></get_zoom>\n\t<set_zoom set=\"method\" line=\"239\"><f a=\"value\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_zoom>\n\t<get_rotation set=\"method\" line=\"252\"><f a=\"\"><c path=\"Float\"/></f></get_rotation>\n\t<set_rotation set=\"method\" line=\"257\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_rotation>\n\t<_position><c path=\"com.pblabs.geom.Vector2\"/></_position>\n\t<_zoom><c path=\"Float\"/></_zoom>\n\t<_rotation><c path=\"Float\"/></_rotation>\n\t<_transformDirty><e path=\"Bool\"/></_transformDirty>\n\t<_sceneBounds>\n\t\t<c path=\"com.pblabs.geom.Rectangle\"/>\n\t\t<haxe_doc> The view of the scene is always enclosed in the bounds </haxe_doc>\n\t</_sceneBounds>\n\t<_sceneView><c path=\"com.pblabs.components.scene.SceneView\"/></_sceneView>\n\t<_currentViewRect><c path=\"com.pblabs.geom.Rectangle\"/></_currentViewRect>\n\t<new public=\"1\" set=\"method\" line=\"57\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * Layers are arranged: smaller index is behind.\n  </haxe_doc>\n</class>";
com.pblabs.components.scene.BaseScene2DManager.DEFAULT_LAYER_NAME = "defaultLayer";
com.pblabs.components.scene.BaseScene2DManager.EMPTY_ARRAY = [];
com.pblabs.components.scene.js.JSSceneManager.__rtti = "<class path=\"com.pblabs.components.scene.js.JSSceneManager\" params=\"Layer\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/scene/js/JSSceneManager.hx\">\n\t<extends path=\"com.pblabs.components.scene.BaseScene2DManager\"><c path=\"com.pblabs.components.scene.js.JSSceneManager.Layer\"/></extends>\n\t<implements path=\"com.pblabs.engine.time.IAnimatedObject\"/>\n\t<container public=\"1\" get=\"get_container\" set=\"null\"><t path=\"js.HtmlDom\"/></container>\n\t<setLayerIndex public=\"1\" set=\"method\" line=\"24\" override=\"1\"><f a=\"layer:index\">\n\t<c path=\"com.pblabs.components.scene.js.JSSceneManager.Layer\"/>\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></setLayerIndex>\n\t<onFrame public=\"1\" set=\"method\" line=\"36\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onFrame>\n\t<updateTransform public=\"1\" set=\"method\" line=\"43\"><f a=\"\"><e path=\"Void\"/></f></updateTransform>\n\t<onAdd set=\"method\" line=\"48\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<onRemove set=\"method\" line=\"76\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<get_container set=\"method\" line=\"82\"><f a=\"\"><t path=\"js.HtmlDom\"/></f></get_container>\n\t<_rootContainer><t path=\"js.HtmlDom\"/></_rootContainer>\n\t<new public=\"1\" set=\"method\" line=\"19\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
com.pblabs.components.scene.js.css.SceneManager.__rtti = "<class path=\"com.pblabs.components.scene.js.css.SceneManager\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/js/css/SceneManager.hx\">\n\t<extends path=\"com.pblabs.components.scene.js.JSSceneManager\"><c path=\"com.pblabs.components.scene.js.css.SceneLayer\"/></extends>\n\t<updateTransform public=\"1\" set=\"method\" line=\"33\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></updateTransform>\n\t<new public=\"1\" set=\"method\" line=\"28\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * Currently this is a placeholder class.\n  </haxe_doc>\n</class>";
com.pblabs.util.ds.MapUtil.EMPTY_ARRAY = [];
com.pblabs.components.scene.BaseScene2DComponent.__meta__ = { fields : { setLocation : { inject : ["@LocationComponent.signaller"]}, set_angle : { inject : ["@AngleComponent.signaller"]}}}
com.pblabs.components.scene.BaseScene2DComponent.__rtti = "<class path=\"com.pblabs.components.scene.BaseScene2DComponent\" params=\"Layer\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/scene/BaseScene2DComponent.hx\">\n\t<extends path=\"com.pblabs.components.manager.NodeComponent\">\n\t\t<c path=\"com.pblabs.components.scene.BaseScene2DComponent.Layer\"/>\n\t\t<d/>\n\t</extends>\n\t<implements path=\"com.pblabs.components.input.IInteractiveComponent\"/>\n\t<layer public=\"1\" get=\"get_layer\" set=\"null\"><c path=\"com.pblabs.components.scene.BaseScene2DComponent.Layer\"/></layer>\n\t<x public=\"1\" get=\"get_x\" set=\"set_x\"><c path=\"Float\"/></x>\n\t<y public=\"1\" get=\"get_y\" set=\"set_y\"><c path=\"Float\"/></y>\n\t<width public=\"1\" get=\"get_width\" set=\"set_width\"><c path=\"Float\"/></width>\n\t<height public=\"1\" get=\"get_height\" set=\"set_height\"><c path=\"Float\"/></height>\n\t<angle public=\"1\" get=\"get_angle\" set=\"set_angle\"><c path=\"Float\"/></angle>\n\t<scale public=\"1\" get=\"get_scale\" set=\"set_scale\"><c path=\"Float\"/></scale>\n\t<isTransformDirty public=\"1\" get=\"get_isTransformDirty\" set=\"set_isTransformDirty\"><e path=\"Bool\"/></isTransformDirty>\n\t<containsScreenPoint public=\"1\" set=\"method\" line=\"37\"><f a=\"pos\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<e path=\"Bool\"/>\n</f></containsScreenPoint>\n\t<setLocation public=\"1\" set=\"method\" line=\"56\"><f a=\"loc\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<e path=\"Void\"/>\n</f></setLocation>\n\t<onReset set=\"method\" line=\"62\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onReset>\n\t<onRemove set=\"method\" line=\"79\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<get_layer set=\"method\" line=\"87\"><f a=\"\"><c path=\"com.pblabs.components.scene.BaseScene2DComponent.Layer\"/></f></get_layer>\n\t<get_x set=\"method\" line=\"92\"><f a=\"\"><c path=\"Float\"/></f></get_x>\n\t<set_x set=\"method\" line=\"97\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_x>\n\t<get_y set=\"method\" line=\"104\"><f a=\"\"><c path=\"Float\"/></f></get_y>\n\t<set_y set=\"method\" line=\"109\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_y>\n\t<get_angle set=\"method\" line=\"116\"><f a=\"\"><c path=\"Float\"/></f></get_angle>\n\t<set_angle set=\"method\" line=\"122\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_angle>\n\t<get_scale set=\"method\" line=\"129\"><f a=\"\"><c path=\"Float\"/></f></get_scale>\n\t<set_scale set=\"method\" line=\"134\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_scale>\n\t<get_isTransformDirty set=\"method\" line=\"140\"><f a=\"\"><e path=\"Bool\"/></f></get_isTransformDirty>\n\t<set_isTransformDirty set=\"method\" line=\"145\"><f a=\"val\">\n\t<e path=\"Bool\"/>\n\t<e path=\"Bool\"/>\n</f></set_isTransformDirty>\n\t<get_width set=\"method\" line=\"151\"><f a=\"\"><c path=\"Float\"/></f></get_width>\n\t<set_width set=\"method\" line=\"156\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_width>\n\t<get_height set=\"method\" line=\"163\"><f a=\"\"><c path=\"Float\"/></f></get_height>\n\t<set_height set=\"method\" line=\"168\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_height>\n\t<_x><c path=\"Float\"/></_x>\n\t<_y><c path=\"Float\"/></_y>\n\t<_width><c path=\"Float\"/></_width>\n\t<_height><c path=\"Float\"/></_height>\n\t<_angle><c path=\"Float\"/></_angle>\n\t<_scale><c path=\"Float\"/></_scale>\n\t<_isTransformDirty><e path=\"Bool\"/></_isTransformDirty>\n\t<new public=\"1\" set=\"method\" line=\"25\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
com.pblabs.components.scene.js.css.Base2DComponent.__rtti = "<class path=\"com.pblabs.components.scene.js.css.Base2DComponent\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/js/css/Base2DComponent.hx\">\n\t<extends path=\"com.pblabs.components.scene.BaseScene2DComponent\"><c path=\"com.pblabs.components.scene.js.css.SceneLayer\"/></extends>\n\t<implements path=\"com.pblabs.engine.time.IAnimatedObject\"/>\n\t<div public=\"1\" set=\"null\"><t path=\"js.HtmlDom\"/></div>\n\t<displayObject public=\"1\" get=\"get_displayObject\" set=\"set_displayObject\"><t path=\"js.HtmlDom\"/></displayObject>\n\t<onFrame public=\"1\" set=\"method\" line=\"23\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onFrame>\n\t<addedToParent set=\"method\" line=\"37\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></addedToParent>\n\t<removingFromParent set=\"method\" line=\"64\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></removingFromParent>\n\t<onAdd set=\"method\" line=\"91\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<get_displayObject set=\"method\" line=\"105\"><f a=\"\"><t path=\"js.HtmlDom\"/></f></get_displayObject>\n\t<set_displayObject set=\"method\" line=\"110\"><f a=\"val\">\n\t<t path=\"js.HtmlDom\"/>\n\t<t path=\"js.HtmlDom\"/>\n</f></set_displayObject>\n\t<_displayObject><t path=\"js.HtmlDom\"/></_displayObject>\n\t<new public=\"1\" set=\"method\" line=\"16\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
com.pblabs.components.scene.ShapeComponent.__rtti = "<class path=\"com.pblabs.components.scene.ShapeComponent\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/ShapeComponent.hx\">\n\t<extends path=\"com.pblabs.components.scene.js.css.Base2DComponent\"/>\n\t<fillColor public=\"1\" get=\"get_fillColor\" set=\"set_fillColor\"><c path=\"Int\"/></fillColor>\n\t<borderColor public=\"1\" get=\"get_borderColor\" set=\"set_borderColor\"><c path=\"Int\"/></borderColor>\n\t<borderWidth public=\"1\" get=\"get_borderWidth\" set=\"set_borderWidth\"><c path=\"Float\"/></borderWidth>\n\t<onFrame public=\"1\" set=\"method\" line=\"33\" override=\"1\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onFrame>\n\t<onReset set=\"method\" line=\"48\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onReset>\n\t<set_width set=\"method\" line=\"54\" override=\"1\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_width>\n\t<set_height set=\"method\" line=\"61\" override=\"1\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_height>\n\t<redraw set=\"method\" line=\"68\"><f a=\"\"><e path=\"Void\"/></f></redraw>\n\t<get_fillColor set=\"method\" line=\"73\"><f a=\"\"><c path=\"Int\"/></f></get_fillColor>\n\t<set_fillColor set=\"method\" line=\"78\"><f a=\"val\">\n\t<c path=\"Int\"/>\n\t<c path=\"Int\"/>\n</f></set_fillColor>\n\t<get_borderColor set=\"method\" line=\"85\"><f a=\"\"><c path=\"Int\"/></f></get_borderColor>\n\t<set_borderColor set=\"method\" line=\"90\"><f a=\"val\">\n\t<c path=\"Int\"/>\n\t<c path=\"Int\"/>\n</f></set_borderColor>\n\t<get_borderWidth set=\"method\" line=\"97\"><f a=\"\"><c path=\"Float\"/></f></get_borderWidth>\n\t<set_borderWidth set=\"method\" line=\"102\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_borderWidth>\n\t<_fillColor><c path=\"Int\"/></_fillColor>\n\t<_borderColor><c path=\"Int\"/></_borderColor>\n\t<_borderWidth><c path=\"Float\"/></_borderWidth>\n\t<new public=\"1\" set=\"method\" line=\"18\"><f a=\"?fillcolor:?borderWidth:?borderColor\">\n\t<c path=\"Int\"/>\n\t<c path=\"Float\"/>\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
com.pblabs.components.scene.RectangleShape.__rtti = "<class path=\"com.pblabs.components.scene.RectangleShape\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/RectangleShape.hx\">\n\t<extends path=\"com.pblabs.components.scene.ShapeComponent\"/>\n\t<onFrame public=\"1\" set=\"method\" line=\"43\" override=\"1\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onFrame>\n\t<onAdd set=\"method\" line=\"58\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<redraw set=\"method\" line=\"71\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></redraw>\n\t<_rect><t path=\"js.HtmlDom\"/></_rect>\n\t<new public=\"1\" set=\"method\" line=\"11\"><f a=\"?w:?h:?color\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
com.pblabs.components.scene.ImageComponent.__rtti = "<class path=\"com.pblabs.components.scene.ImageComponent\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/ImageComponent.hx\">\n\t<extends path=\"com.pblabs.components.scene.js.css.Base2DComponent\"/>\n\t<resource public=\"1\">\n\t\t<c path=\"com.pblabs.engine.resource.ImageResource\"/>\n\t\t<haxe_doc> The IResource name and item id.  Id can be null </haxe_doc>\n\t</resource>\n\t<containsScreenPoint public=\"1\" set=\"method\" line=\"45\" override=\"1\"><f a=\"pos\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<e path=\"Bool\"/>\n</f></containsScreenPoint>\n\t<onAdd set=\"method\" line=\"68\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<onFrame public=\"1\" set=\"method\" line=\"113\" override=\"1\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onFrame>\n\t<set_width set=\"method\" line=\"123\" override=\"1\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_width>\n\t<set_height set=\"method\" line=\"131\" override=\"1\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_height>\n\t<new public=\"1\" set=\"method\" line=\"40\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * Cross platform Image using Scene2D component.\n  </haxe_doc>\n</class>";
com.pblabs.util.Enumerable._enums = new com.pblabs.util.ds.maps.StringMap();
com.pblabs.engine.core.SetManager.EMPTY_STRING_ARRAY = [];
com.pblabs.engine.core.SetManager.EMPTY_OBJECT_ARRAY = [];
hsl.haxe.PropagationStatus.IMMEDIATELY_STOPPED = 1;
hsl.haxe.PropagationStatus.STOPPED = 2;
hsl.haxe.PropagationStatus.UNDISTURBED = 3;
com.pblabs.components.input.PanManager.__rtti = "<class path=\"com.pblabs.components.input.PanManager\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/input/PanManager.hx\">\n\t<extends path=\"com.pblabs.engine.core.EntityComponent\"/>\n\t<implements path=\"com.pblabs.engine.core.IPBManager\"/>\n\t<minimumDistanceToEase public=\"1\">\n\t\t<c path=\"Float\"/>\n\t\t<haxe_doc><![CDATA[ Easing will only occur if the last <frameWindowSize> frames had a device dragging distance at least this. ]]></haxe_doc>\n\t</minimumDistanceToEase>\n\t<frameWindowSize public=\"1\">\n\t\t<c path=\"Int\"/>\n\t\t<haxe_doc> The number of most recent frames to analyse angles and  minimumDistanceToEase</haxe_doc>\n\t</frameWindowSize>\n\t<timeToHalt public=\"1\">\n\t\t<c path=\"Float\"/>\n\t\t<haxe_doc> The time (in seconds) for scene easing </haxe_doc>\n\t</timeToHalt>\n\t<startup public=\"1\" set=\"method\" line=\"66\"><f a=\"\"><e path=\"Void\"/></f></startup>\n\t<shutdown public=\"1\" set=\"method\" line=\"76\"><f a=\"\"><e path=\"Void\"/></f></shutdown>\n\t<panScene public=\"1\" set=\"method\" line=\"83\"><f a=\"scene:?easing:?pauseScene\">\n\t<c path=\"com.pblabs.components.scene.BaseScene2DManager\"><d/></c>\n\t<e path=\"Bool\"/>\n\t<e path=\"Bool\"/>\n\t<e path=\"Void\"/>\n</f></panScene>\n\t<panComponent public=\"1\" set=\"method\" line=\"94\"><f a=\"c:?easing:?pauseScene\">\n\t<c path=\"com.pblabs.components.scene.BaseScene2DComponent\"><d/></c>\n\t<e path=\"Bool\"/>\n\t<e path=\"Bool\"/>\n\t<e path=\"Void\"/>\n</f></panComponent>\n\t<endPanning public=\"1\" set=\"method\" line=\"105\"><f a=\"\"><e path=\"Void\"/></f></endPanning>\n\t<onAdd set=\"method\" line=\"112\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<onRemove set=\"method\" line=\"120\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<beginPanning set=\"method\" line=\"129\"><f a=\"\"><e path=\"Void\"/></f></beginPanning>\n\t<onDeviceMove set=\"method\" line=\"137\"><f a=\"e\">\n\t<c path=\"com.pblabs.components.input.InputData\"/>\n\t<e path=\"Void\"/>\n</f></onDeviceMove>\n\t<onDeviceUp set=\"method\" line=\"160\"><f a=\"e\">\n\t<c path=\"com.pblabs.components.input.InputData\"/>\n\t<e path=\"Void\"/>\n</f></onDeviceUp>\n\t<get_isPanning get=\"inline\" set=\"null\" line=\"205\"><f a=\"\"><e path=\"Bool\"/></f></get_isPanning>\n\t<set_isPanning set=\"method\" line=\"210\"><f a=\"val\">\n\t<e path=\"Bool\"/>\n\t<e path=\"Bool\"/>\n</f></set_isPanning>\n\t<notMoving set=\"method\" line=\"236\"><f a=\"\"><e path=\"Void\"/></f></notMoving>\n\t<isPanning get=\"get_isPanning\" set=\"set_isPanning\"><e path=\"Bool\"/></isPanning>\n\t<_scene><c path=\"com.pblabs.components.scene.BaseScene2DManager\"><d/></c></_scene>\n\t<_translatable><t path=\"com.pblabs.components.input.Translatable\"/></_translatable>\n\t<_panVectors><c path=\"Array\"><c path=\"com.pblabs.geom.Vector2\"/></c></_panVectors>\n\t<_lastMouseMove><c path=\"com.pblabs.geom.Vector2\"/></_lastMouseMove>\n\t<_isPanning><e path=\"Bool\"/></_isPanning>\n\t<_isGesturing><e path=\"Bool\"/></_isGesturing>\n\t<_timer><c path=\"haxe.Timer\"/></_timer>\n\t<isEasing><e path=\"Bool\"/></isEasing>\n\t<_framesWithoutMovement>\n\t\t<c path=\"Int\"/>\n\t\t<haxe_doc> If there are too many frames without movement, no easing will occur. </haxe_doc>\n\t</_framesWithoutMovement>\n\t<_pauseProcessManagerOnPan>\n\t\t<e path=\"Bool\"/>\n\t\t<haxe_doc> If panning slows rendering too much, you can pause the game while panning. </haxe_doc>\n\t</_pauseProcessManagerOnPan>\n\t<new public=\"1\" set=\"method\" line=\"52\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * Handles panning of a Scene and components.\n  </haxe_doc>\n</class>";
com.pblabs.components.input.MouseInputComponent.__rtti = "<class path=\"com.pblabs.components.input.MouseInputComponent\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/input/MouseInputComponent.hx\">\n\t<extends path=\"com.pblabs.components.manager.NodeComponent\">\n\t\t<c path=\"com.pblabs.components.input.MouseInputComponent\"/>\n\t\t<c path=\"com.pblabs.components.input.MouseInputComponent\"/>\n\t</extends>\n\t<implements path=\"com.pblabs.util.Comparable\"><c path=\"com.pblabs.components.input.MouseInputComponent\"/></implements>\n\t<compare public=\"1\" set=\"method\" line=\"54\" static=\"1\"><f a=\"a:b\">\n\t<c path=\"com.pblabs.components.input.MouseInputComponent\"/>\n\t<c path=\"com.pblabs.components.input.MouseInputComponent\"/>\n\t<c path=\"Int\"/>\n</f></compare>\n\t<boundsProperty public=\"1\">\n\t\t<c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"com.pblabs.components.input.IInteractiveComponent\"/></c>\n\t\t<haxe_doc>\n\t  * If there is an IInteractiveComponent in the Entity, you don't have to explicity set the properties.\n\t  </haxe_doc>\n\t</boundsProperty>\n\t<xProperty public=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></xProperty>\n\t<yProperty public=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></yProperty>\n\t<angleProperty public=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></angleProperty>\n\t<scaleProperty public=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></scaleProperty>\n\t<offsetProperty public=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"com.pblabs.geom.Vector2\"/></c></offsetProperty>\n\t<y public=\"1\" get=\"get_y\" set=\"set_y\"><c path=\"Float\"/></y>\n\t<x public=\"1\" get=\"get_x\" set=\"set_x\"><c path=\"Float\"/></x>\n\t<angle public=\"1\" get=\"get_angle\" set=\"set_angle\"><c path=\"Float\"/></angle>\n\t<scale public=\"1\" get=\"get_scale\" set=\"set_scale\"><c path=\"Float\"/></scale>\n\t<bounds public=\"1\" get=\"get_bounds\" set=\"set_bounds\"><c path=\"com.pblabs.components.input.IInteractiveComponent\"/></bounds>\n\t<offset public=\"1\" get=\"get_offset\" set=\"set_offset\"><c path=\"com.pblabs.geom.Vector2\"/></offset>\n\t<isScalable public=\"1\"><e path=\"Bool\"/></isScalable>\n\t<isRotatable public=\"1\"><e path=\"Bool\"/></isRotatable>\n\t<isTranslatable public=\"1\">\n\t\t<e path=\"Bool\"/>\n\t\t<haxe_doc> Moveable in the x/y? </haxe_doc>\n\t</isTranslatable>\n\t<compareTo public=\"1\" set=\"method\" line=\"82\"><f a=\"a\">\n\t<c path=\"com.pblabs.components.input.MouseInputComponent\"/>\n\t<c path=\"Int\"/>\n</f></compareTo>\n\t<getPoint public=\"1\" set=\"method\" line=\"87\"><f a=\"\"><c path=\"com.pblabs.geom.Vector2\"/></f></getPoint>\n\t<onClick public=\"1\" set=\"dynamic\" line=\"99\"><f a=\"\"><e path=\"Void\"/></f></onClick>\n\t<onDeviceDown public=\"1\" set=\"dynamic\" line=\"104\"><f a=\"\"><e path=\"Void\"/></f></onDeviceDown>\n\t<onDeviceHeldDown public=\"1\" set=\"dynamic\" line=\"109\"><f a=\"\"><e path=\"Void\"/></f></onDeviceHeldDown>\n\t<onReset set=\"method\" line=\"114\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onReset>\n\t<onRemove set=\"method\" line=\"137\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<get_bounds set=\"method\" line=\"150\"><f a=\"\"><c path=\"com.pblabs.components.input.IInteractiveComponent\"/></f></get_bounds>\n\t<set_bounds set=\"method\" line=\"155\"><f a=\"bounds\">\n\t<c path=\"com.pblabs.components.input.IInteractiveComponent\"/>\n\t<c path=\"com.pblabs.components.input.IInteractiveComponent\"/>\n</f></set_bounds>\n\t<get_x set=\"method\" line=\"161\"><f a=\"\"><c path=\"Float\"/></f></get_x>\n\t<set_x set=\"method\" line=\"166\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_x>\n\t<get_y set=\"method\" line=\"172\"><f a=\"\"><c path=\"Float\"/></f></get_y>\n\t<set_y set=\"method\" line=\"177\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_y>\n\t<get_angle set=\"method\" line=\"183\"><f a=\"\"><c path=\"Float\"/></f></get_angle>\n\t<set_angle set=\"method\" line=\"188\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_angle>\n\t<get_scale set=\"method\" line=\"194\"><f a=\"\"><c path=\"Float\"/></f></get_scale>\n\t<set_scale set=\"method\" line=\"199\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_scale>\n\t<get_offset set=\"method\" line=\"205\"><f a=\"\"><c path=\"com.pblabs.geom.Vector2\"/></f></get_offset>\n\t<set_offset set=\"method\" line=\"214\"><f a=\"val\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n</f></set_offset>\n\t<_bounds><c path=\"com.pblabs.components.input.IInteractiveComponent\"/></_bounds>\n\t<new public=\"1\" set=\"method\" line=\"70\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n * The base component for interacting with a mouse or other input device.  At the minimum simply provides the \n * IInteractiveComponent, but can also do additional behaviour such as rotating or movement easily, \n * and has it's own dynamic input callback methods.\n </haxe_doc>\n</class>";
com.pblabs.components.tasks.TaskComponent.__rtti = "<class path=\"com.pblabs.components.tasks.TaskComponent\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/tasks/TaskComponent.hx\">\n\t<extends path=\"com.pblabs.engine.core.EntityComponent\"/>\n\t<implements path=\"com.pblabs.engine.time.ITickedObject\"/>\n\t<NAME public=\"1\" line=\"31\" static=\"1\"><c path=\"String\"/></NAME>\n\t<getFrom public=\"1\" set=\"method\" line=\"33\" static=\"1\"><f a=\"e\">\n\t<c path=\"com.pblabs.engine.core.IEntity\"/>\n\t<c path=\"com.pblabs.components.tasks.TaskComponent\"/>\n</f></getFrom>\n\t<addNamedTask public=\"1\" set=\"method\" line=\"49\">\n\t\t<f a=\"name:task:?removeExistingTasks\">\n\t\t\t<c path=\"String\"/>\n\t\t\t<c path=\"com.pblabs.components.tasks.IEntityTask\"/>\n\t\t\t<e path=\"Bool\"/>\n\t\t\t<e path=\"Void\"/>\n\t\t</f>\n\t\t<haxe_doc> Adds a named task to this IEntity. </haxe_doc>\n\t</addNamedTask>\n\t<getNamedTask set=\"method\" line=\"76\"><f a=\"name\">\n\t<c path=\"String\"/>\n\t<c path=\"com.pblabs.components.tasks.ParallelTask\"/>\n</f></getNamedTask>\n\t<onTick public=\"1\" set=\"method\" line=\"89\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onTick>\n\t<updatingCheck set=\"method\" line=\"106\">\n\t\t<f a=\"\"><e path=\"Void\"/></f>\n\t\t<haxe_doc>\n\t * When we don't have any tasks, remove ourselves from\n\t * the updater.\n\t </haxe_doc>\n\t</updatingCheck>\n\t<addTask public=\"1\" set=\"method\" line=\"121\">\n\t\t<f a=\"task\">\n\t\t\t<c path=\"com.pblabs.components.tasks.IEntityTask\"/>\n\t\t\t<e path=\"Void\"/>\n\t\t</f>\n\t\t<haxe_doc> Adds an unnamed task to this IEntity. </haxe_doc>\n\t</addTask>\n\t<hasTasks public=\"1\" set=\"method\" line=\"130\">\n\t\t<f a=\"\"><e path=\"Bool\"/></f>\n\t\t<haxe_doc> Returns true if the IEntity has any tasks. </haxe_doc>\n\t</hasTasks>\n\t<hasTasksNamed public=\"1\" set=\"method\" line=\"145\">\n\t\t<f a=\"name\">\n\t\t\t<c path=\"String\"/>\n\t\t\t<e path=\"Bool\"/>\n\t\t</f>\n\t\t<haxe_doc> Returns true if the IEntity has any tasks with the given name. </haxe_doc>\n\t</hasTasksNamed>\n\t<removeAllTasks public=\"1\" set=\"method\" line=\"152\">\n\t\t<f a=\"\"><e path=\"Void\"/></f>\n\t\t<haxe_doc> Removes all tasks from the IEntity. </haxe_doc>\n\t</removeAllTasks>\n\t<removeNamedTasks public=\"1\" set=\"method\" line=\"173\">\n\t\t<f a=\"name\">\n\t\t\t<c path=\"String\"/>\n\t\t\t<e path=\"Void\"/>\n\t\t</f>\n\t\t<haxe_doc> Removes all tasks with the given name from the IEntity. </haxe_doc>\n\t</removeNamedTasks>\n\t<onRemove set=\"method\" line=\"191\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<onAdd set=\"method\" line=\"197\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<_anonymousTasks><c path=\"com.pblabs.components.tasks.ParallelTask\"/></_anonymousTasks>\n\t<_namedTasks><c path=\"haxe.FastList\"><c path=\"com.pblabs.components.tasks.ParallelTask\"/></c></_namedTasks>\n\t<_taskNames><c path=\"haxe.FastList\"><c path=\"String\"/></c></_taskNames>\n\t<_updatingTasks><e path=\"Bool\"/></_updatingTasks>\n\t<_tasksFinished><e path=\"Bool\"/></_tasksFinished>\n\t<_addedToProcessManager><e path=\"Bool\"/></_addedToProcessManager>\n\t<new public=\"1\" set=\"method\" line=\"38\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>*****************************************************************************\n * Hydrax: haXe port of the PushButton Engine\n * Copyright (C) 2010 Dion Amago\n * For more information see http://github.com/dionjwa/Hydrax\n *\n * This file is licensed under the terms of the MIT license, which is included\n * in the License.html file at the root directory of this SDK.\n ****************************************************************************</haxe_doc>\n</class>";
com.pblabs.components.tasks.TaskComponent.NAME = com.pblabs.util.ReflectUtil.tinyClassName(com.pblabs.components.tasks.TaskComponent);
com.pblabs.engine.core.PBGameBase.EMPTY_ARRAY = [];
mathx.Limits.int32Min = -2147483648;
mathx.Limits.int32Max = 2147483647;
mathx.Limits.intBits = 32;
mathx.Limits.intMax = 2147483647;
mathx.Limits.intMin = -2147483648;
com.pblabs.util.Predicates.EMPTY_ARRAY = [];
mathx.MersenneTwister._N = 624;
mathx.MersenneTwister._M = 397;
mathx.MersenneTwister.MATRIX_A = -1727483681;
mathx.MersenneTwister.SHIFT_U = 11;
mathx.MersenneTwister.SHIFT_S = 7;
mathx.MersenneTwister.MASK_B = -1658038656;
mathx.MersenneTwister.SHIFT_T = 15;
mathx.MersenneTwister.MASK_C = -272236544;
mathx.MersenneTwister.SHIFT_L = 18;
mathx.MersenneTwister.UPPER_MASK = -2147483648;
mathx.MersenneTwister.LOWER_MASK = 2147483647;
com.pblabs.util.Rand.STREAM_GAME = 0;
com.pblabs.util.Rand.STREAM_COSMETIC = 1;
com.pblabs.util.Rand.STREAM_UNSPECIFIED = -1;
com.pblabs.util.Rand.errorOnUnspecifiedStreamId = false;
com.pblabs.util.Rand._randStreams = [new mathx.MersenneTwister(),new mathx.MersenneTwister()];
com.pblabs.components.input.GestureInputManager.__rtti = "<class path=\"com.pblabs.components.input.GestureInputManager\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/input/GestureInputManager.hx\">\n\t<extends path=\"com.pblabs.components.input.BaseInputManager\"/>\n\t<gestureStart public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><t path=\"hsl.js.data.GestureEvent\"/></c></gestureStart>\n\t<gestureChange public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><t path=\"hsl.js.data.GestureEvent\"/></c></gestureChange>\n\t<gestureEnd public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><t path=\"hsl.js.data.GestureEvent\"/></c></gestureEnd>\n\t<startup public=\"1\" set=\"method\" line=\"37\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></startup>\n\t<shutdown public=\"1\" set=\"method\" line=\"43\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></shutdown>\n\t<bindSignals set=\"method\" line=\"92\"><f a=\"\"><e path=\"Void\"/></f></bindSignals>\n\t<freeSignals set=\"method\" line=\"107\"><f a=\"\"><e path=\"Void\"/></f></freeSignals>\n\t<new public=\"1\" set=\"method\" line=\"32\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n * Javascript only ATM.  What other platforms support gestures?\n * Funnels gesture events into Signals.\n * \n </haxe_doc>\n</class>";
com.pblabs.components.scene.BaseScene2DLayer.__rtti = "<class path=\"com.pblabs.components.scene.BaseScene2DLayer\" params=\"Scene:Component\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/scene/BaseScene2DLayer.hx\">\n\t<extends path=\"com.pblabs.components.manager.NodeComponent\">\n\t\t<c path=\"com.pblabs.components.scene.BaseScene2DLayer.Scene\"/>\n\t\t<c path=\"com.pblabs.components.scene.BaseScene2DLayer.Component\"/>\n\t</extends>\n\t<scene public=\"1\" get=\"get_scene\" set=\"null\"><c path=\"com.pblabs.components.scene.BaseScene2DLayer.Scene\"/></scene>\n\t<index public=\"1\" get=\"get_index\" set=\"set_index\"><c path=\"Int\"/></index>\n\t<parallaxFactor public=\"1\" get=\"get_parallaxFactor\" set=\"set_parallaxFactor\"><c path=\"Float\"/></parallaxFactor>\n\t<sortChildren public=\"1\" set=\"dynamic\" line=\"24\"><f a=\"c1:c2\">\n\t<c path=\"com.pblabs.components.scene.BaseScene2DLayer.Component\"/>\n\t<c path=\"com.pblabs.components.scene.BaseScene2DLayer.Component\"/>\n\t<c path=\"Int\"/>\n</f></sortChildren>\n\t<get_scene set=\"method\" line=\"29\"><f a=\"\"><c path=\"com.pblabs.components.scene.BaseScene2DLayer.Scene\"/></f></get_scene>\n\t<get_index set=\"method\" line=\"34\"><f a=\"\"><c path=\"Int\"/></f></get_index>\n\t<set_index set=\"method\" line=\"40\"><f a=\"val\">\n\t<c path=\"Int\"/>\n\t<c path=\"Int\"/>\n</f></set_index>\n\t<get_parallaxFactor set=\"method\" line=\"56\"><f a=\"\"><c path=\"Float\"/></f></get_parallaxFactor>\n\t<set_parallaxFactor set=\"method\" line=\"61\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_parallaxFactor>\n\t<_needsSort><e path=\"Bool\"/></_needsSort>\n\t<_parallaxFactor><c path=\"Float\"/></_parallaxFactor>\n\t<new public=\"1\" set=\"method\" line=\"17\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * A 2D layer holding 2DSceneComponents.\n  * TODO: migrate the parallax and independent location code.\n  </haxe_doc>\n</class>";
com.pblabs.engine.serialization.TemplateManager.__meta__ = { fields : { serializer : { inject : ["com.pblabs.engine.serialization.Serializer"]}, resourceManager : { inject : ["com.pblabs.engine.resource.IResourceManager"]}}}
com.pblabs.engine.serialization.TemplateManager.VERBOSE_LOGGING = false;
js.Lib.onerror = null;
com.pblabs.components.input.SceneViewControl.__rtti = "<class path=\"com.pblabs.components.input.SceneViewControl\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/input/SceneViewControl.hx\">\n\t<extends path=\"com.pblabs.engine.core.EntityComponent\"/>\n\t<isEasing public=\"1\">\n\t\t<e path=\"Bool\"/>\n\t\t<haxe_doc> When panning stops, does the scene ease out? </haxe_doc>\n\t</isEasing>\n\t<backgroundSceneComponent public=\"1\">\n\t\t<c path=\"com.pblabs.components.scene.BaseScene2DComponent\"><d/></c>\n\t\t<haxe_doc> The background component that accepts pan controls.  Can be null. </haxe_doc>\n\t</backgroundSceneComponent>\n\t<sceneProperty public=\"1\">\n\t\t<c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"com.pblabs.components.scene.BaseScene2DManager\"><d/></c></c>\n\t\t<haxe_doc> The scene that is panned by this component </haxe_doc>\n\t</sceneProperty>\n\t<pauseProcessManagerOnPan public=\"1\">\n\t\t<e path=\"Bool\"/>\n\t\t<haxe_doc> If panning slows rendering too much, you can pause the game while panning. </haxe_doc>\n\t</pauseProcessManagerOnPan>\n\t<onAdd set=\"method\" line=\"44\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<onRemove set=\"method\" line=\"77\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<isValidTarget get=\"inline\" set=\"null\" line=\"88\"><f a=\"e\">\n\t<c path=\"com.pblabs.components.input.InputData\"/>\n\t<e path=\"Bool\"/>\n</f></isValidTarget>\n\t<onGestureStart set=\"method\" line=\"93\"><f a=\"e\">\n\t<d/>\n\t<e path=\"Void\"/>\n</f></onGestureStart>\n\t<onGestureEnd set=\"method\" line=\"99\"><f a=\"e\">\n\t<d/>\n\t<e path=\"Void\"/>\n</f></onGestureEnd>\n\t<onZoom set=\"method\" line=\"104\"><f a=\"e\">\n\t<c path=\"com.pblabs.components.input.GestureData\"/>\n\t<e path=\"Void\"/>\n</f></onZoom>\n\t<onDeviceDown set=\"method\" line=\"122\"><f a=\"e\">\n\t<c path=\"com.pblabs.components.input.InputData\"/>\n\t<e path=\"Void\"/>\n</f></onDeviceDown>\n\t<onDeviceUp set=\"method\" line=\"134\"><f a=\"e\">\n\t<c path=\"com.pblabs.components.input.InputData\"/>\n\t<e path=\"Void\"/>\n</f></onDeviceUp>\n\t<get_isPanning get=\"inline\" set=\"null\" line=\"179\"><f a=\"\"><e path=\"Bool\"/></f></get_isPanning>\n\t<set_isPanning set=\"method\" line=\"184\"><f a=\"val\">\n\t<e path=\"Bool\"/>\n\t<e path=\"Bool\"/>\n</f></set_isPanning>\n\t<get_isZooming set=\"method\" line=\"203\"><f a=\"\"><e path=\"Bool\"/></f></get_isZooming>\n\t<set_isZooming set=\"method\" line=\"208\"><f a=\"val\">\n\t<e path=\"Bool\"/>\n\t<e path=\"Bool\"/>\n</f></set_isZooming>\n\t<isPanning get=\"get_isPanning\" set=\"set_isPanning\"><e path=\"Bool\"/></isPanning>\n\t<isZooming public=\"1\" get=\"get_isZooming\" set=\"set_isZooming\"><e path=\"Bool\"/></isZooming>\n\t<_scene><c path=\"com.pblabs.components.scene.BaseScene2DManager\"><d/></c></_scene>\n\t<_isPanning><e path=\"Bool\"/></_isPanning>\n\t<_isZooming><e path=\"Bool\"/></_isZooming>\n\t<_startZoom><c path=\"Float\"/></_startZoom>\n\t<_isGesturing><e path=\"Bool\"/></_isGesturing>\n\t<_panManager><c path=\"com.pblabs.components.input.PanManager\"/></_panManager>\n\t<new public=\"1\" set=\"method\" line=\"35\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * Handles panning/zooming of a Scene2D. (rotation noy yet implemented)\n  * If you leave backgroundSceneComponent to null, then any mouse down events that don't land \n  * on a component will be interpreted as beginning a scene pan, otherwise only mouse down events \n  * that land on the background component.\n  </haxe_doc>\n</class>";
com.pblabs.engine.injection.Injector.INJECT = "inject";
com.pblabs.engine.injection.Injector.instanceFieldInjections = com.pblabs.util.ds.multimaps.ArrayMultiMap.create(Class);
com.pblabs.engine.injection.Injector.NULL_INJECTION = new com.pblabs.util.ds.Tuple(null,null);
com.pblabs.engine.injection.Injector.SINGLE_VALUE_ARRAY = [null];
com.pblabs.components.tasks.FunctionTask.EMPTY_ARRAY = [];
com.pblabs.components.base.NotifyingValueComponent.__rtti = "<class path=\"com.pblabs.components.base.NotifyingValueComponent\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/base/NotifyingValueComponent.hx\">\n\t<extends path=\"com.pblabs.engine.core.EntityComponent\"/>\n\t<implements path=\"com.pblabs.engine.serialization.ISerializable\"/>\n\t<value public=\"1\" get=\"get_value\" set=\"set_value\"><c path=\"Float\"/></value>\n\t<signaller public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"Float\"/></c></signaller>\n\t<serialize public=\"1\" set=\"method\" line=\"34\"><f a=\"xml\">\n\t<t path=\"com.pblabs.engine.serialization.XML\"/>\n\t<e path=\"Void\"/>\n</f></serialize>\n\t<deserialize public=\"1\" set=\"method\" line=\"39\"><f a=\"xml:context\">\n\t<t path=\"com.pblabs.engine.serialization.XML\"/>\n\t<c path=\"com.pblabs.engine.core.IPBContext\"/>\n\t<d/>\n</f></deserialize>\n\t<get_value set=\"method\" line=\"44\"><f a=\"\"><c path=\"Float\"/></f></get_value>\n\t<set_value set=\"method\" line=\"49\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_value>\n\t<onRemove set=\"method\" line=\"58\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<onReset set=\"method\" line=\"65\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onReset>\n\t<_value><c path=\"Float\"/></_value>\n\t<new public=\"1\" set=\"method\" line=\"27\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>*****************************************************************************\n * Hydrax: haXe port of the PushButton Engine\n * Copyright (C) 2010 Dion Amago\n * For more information see http://github.com/dionjwa/Hydrax\n *\n * This file is licensed under the terms of the MIT license, which is included\n * in the License.html file at the root directory of this SDK.\n ****************************************************************************</haxe_doc>\n</class>";
com.pblabs.components.base.AngleComponent.__rtti = "<class path=\"com.pblabs.components.base.AngleComponent\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/base/AngleComponent.hx\">\n\t<extends path=\"com.pblabs.components.base.NotifyingValueComponent\"/>\n\t<P_ANGLE public=\"1\" line=\"16\" static=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></P_ANGLE>\n\t<angle public=\"1\" get=\"get_angle\" set=\"set_angle\"><c path=\"Float\"/></angle>\n\t<toString public=\"1\" set=\"method\" line=\"25\"><f a=\"\"><c path=\"String\"/></f></toString>\n\t<get_angle set=\"method\" line=\"30\"><f a=\"\"><c path=\"Float\"/></f></get_angle>\n\t<set_angle set=\"method\" line=\"35\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_angle>\n\t<new public=\"1\" set=\"method\" line=\"20\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>*****************************************************************************\n * Hydrax: haXe port of the PushButton Engine\n * Copyright (C) 2010 Dion Amago\n * For more information see http://github.com/dionjwa/Hydrax\n *\n * This file is licensed under the terms of the MIT license, which is included\n * in the License.html file at the root directory of this SDK.\n ****************************************************************************</haxe_doc>\n</class>";
com.pblabs.components.base.AngleComponent.P_ANGLE = new com.pblabs.engine.core.PropertyReference("@AngleComponent.angle");
com.pblabs.engine.debug.Profiler.enabled = false;
com.pblabs.engine.debug.Profiler.indentAmount = 3;
com.pblabs.engine.debug.Profiler.nameFieldWidth = 70;
com.pblabs.components.scene.SVGComponent.__rtti = "<class path=\"com.pblabs.components.scene.SVGComponent\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/SVGComponent.hx\">\n\t<extends path=\"com.pblabs.components.scene.js.css.Base2DComponent\"/>\n\t<resourceToken public=\"1\">\n\t\t<c path=\"com.pblabs.util.ds.Tuple\">\n\t\t\t<c path=\"String\"/>\n\t\t\t<c path=\"String\"/>\n\t\t</c>\n\t\t<haxe_doc> The IResource name and item id </haxe_doc>\n\t</resourceToken>\n\t<containsScreenPoint public=\"1\" set=\"method\" line=\"33\" override=\"1\"><f a=\"pos\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<e path=\"Bool\"/>\n</f></containsScreenPoint>\n\t<onAdd set=\"method\" line=\"56\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<onFrame public=\"1\" set=\"method\" line=\"107\" override=\"1\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onFrame>\n\t<set_width set=\"method\" line=\"117\" override=\"1\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_width>\n\t<set_height set=\"method\" line=\"125\" override=\"1\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_height>\n\t<new public=\"1\" set=\"method\" line=\"28\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n  * Cross platform SVG based Scene2D component.\n  </haxe_doc>\n</class>";
com.pblabs.engine.core.PBContext.contextNameCounter = 0;
com.pblabs.engine.core.PBContext.EMPTY_ARRAY = [];
com.pblabs.engine.core.PropertyInfo.EMPTY_ARRAY = [];
com.pblabs.components.input.MouseInputManager.__rtti = "<class path=\"com.pblabs.components.input.MouseInputManager\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/input/MouseInputManager.hx\">\n\t<extends path=\"com.pblabs.components.input.BaseInputManager\"/>\n\t<mouseDown public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"hsl.haxe.data.mouse.MouseLocation\"/></c></mouseDown>\n\t<mouseUp public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"hsl.haxe.data.mouse.MouseLocation\"/></c></mouseUp>\n\t<mouseMove public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"hsl.haxe.data.mouse.MouseLocation\"/></c></mouseMove>\n\t<mouseClick public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"hsl.haxe.data.mouse.MouseLocation\"/></c></mouseClick>\n\t<currentTouches public=\"1\">\n\t\t<c path=\"Int\"/>\n\t\t<haxe_doc> Used if there is a TouchInputManager </haxe_doc>\n\t</currentTouches>\n\t<isRootDocumentMouse public=\"1\" get=\"get_isRootDocumentMouse\" set=\"set_isRootDocumentMouse\"><e path=\"Bool\"/></isRootDocumentMouse>\n\t<_isRootDocumentMouse><e path=\"Bool\"/></_isRootDocumentMouse>\n\t<rootMouseListener set=\"method\" line=\"45\"><f a=\"e\">\n\t<t path=\"js.Event\"/>\n\t<e path=\"Void\"/>\n</f></rootMouseListener>\n\t<get_isRootDocumentMouse set=\"method\" line=\"50\"><f a=\"\"><e path=\"Bool\"/></f></get_isRootDocumentMouse>\n\t<set_isRootDocumentMouse set=\"method\" line=\"55\"><f a=\"val\">\n\t<e path=\"Bool\"/>\n\t<e path=\"Bool\"/>\n</f></set_isRootDocumentMouse>\n\t<startup public=\"1\" set=\"method\" line=\"81\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></startup>\n\t<shutdown public=\"1\" set=\"method\" line=\"87\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></shutdown>\n\t<manualMouseDown public=\"1\" set=\"method\" line=\"94\">\n\t\t<f a=\"mouseX:mouseY:?touches\">\n\t\t\t<c path=\"Float\"/>\n\t\t\t<c path=\"Float\"/>\n\t\t\t<c path=\"Int\"/>\n\t\t\t<e path=\"Void\"/>\n\t\t</f>\n\t\t<haxe_doc> Used by the TouchInputManager when funneling mouse events </haxe_doc>\n\t</manualMouseDown>\n\t<manualMouseMove public=\"1\" set=\"method\" line=\"108\">\n\t\t<f a=\"mouseX:mouseY:?touches\">\n\t\t\t<c path=\"Float\"/>\n\t\t\t<c path=\"Float\"/>\n\t\t\t<c path=\"Int\"/>\n\t\t\t<e path=\"Void\"/>\n\t\t</f>\n\t\t<haxe_doc> Used by the TouchInputManager when funneling mouse events </haxe_doc>\n\t</manualMouseMove>\n\t<manualMouseUp public=\"1\" set=\"method\" line=\"122\">\n\t\t<f a=\"mouseX:mouseY:?touches\">\n\t\t\t<c path=\"Float\"/>\n\t\t\t<c path=\"Float\"/>\n\t\t\t<c path=\"Int\"/>\n\t\t\t<e path=\"Void\"/>\n\t\t</f>\n\t\t<haxe_doc> Used by the TouchInputManager when funneling mouse events </haxe_doc>\n\t</manualMouseUp>\n\t<bindSignals set=\"method\" line=\"135\"><f a=\"\"><e path=\"Void\"/></f></bindSignals>\n\t<freeSignals set=\"method\" line=\"154\"><f a=\"\"><e path=\"Void\"/></f></freeSignals>\n\t<new public=\"1\" set=\"method\" line=\"71\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n * Funnels mouse events into signals.\n * Events are bound to the SceneView object.\n </haxe_doc>\n</class>";
com.pblabs.components.base.LocationComponent.__meta__ = { fields : { _vec : { editorData : [{ ignore : "true"}]}, _vecForSignalling : { editorData : [{ ignore : "true"}]}}}
com.pblabs.components.base.LocationComponent.__rtti = "<class path=\"com.pblabs.components.base.LocationComponent\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/base/LocationComponent.hx\">\n\t<extends path=\"com.pblabs.engine.core.EntityComponent\"/>\n\t<implements path=\"com.pblabs.engine.serialization.ISerializable\"/>\n\t<P_X public=\"1\" line=\"32\" static=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></P_X>\n\t<P_Y public=\"1\" line=\"33\" static=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></P_Y>\n\t<P_POINT public=\"1\" line=\"34\" static=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"com.pblabs.geom.Vector2\"/></c></P_POINT>\n\t<point public=\"1\" get=\"getPoint\" set=\"setPoint\"><c path=\"com.pblabs.geom.Vector2\"/></point>\n\t<x public=\"1\" get=\"get_x\" set=\"set_x\"><c path=\"Float\"/></x>\n\t<y public=\"1\" get=\"get_y\" set=\"set_y\"><c path=\"Float\"/></y>\n\t<signaller public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.geom.Vector2\"/></c></signaller>\n\t<getPoint set=\"method\" line=\"44\"><f a=\"\"><c path=\"com.pblabs.geom.Vector2\"/></f></getPoint>\n\t<setPoint set=\"method\" line=\"49\"><f a=\"p\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n</f></setPoint>\n\t<get_x set=\"method\" line=\"55\"><f a=\"\"><c path=\"Float\"/></f></get_x>\n\t<set_x set=\"method\" line=\"60\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_x>\n\t<get_y set=\"method\" line=\"72\"><f a=\"\"><c path=\"Float\"/></f></get_y>\n\t<set_y set=\"method\" line=\"77\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_y>\n\t<setLocation public=\"1\" set=\"method\" line=\"87\"><f a=\"xLoc:yLoc\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></setLocation>\n\t<toString public=\"1\" set=\"method\" line=\"97\"><f a=\"\"><c path=\"String\"/></f></toString>\n\t<serialize public=\"1\" set=\"method\" line=\"102\"><f a=\"xml\">\n\t<t path=\"com.pblabs.engine.serialization.XML\"/>\n\t<e path=\"Void\"/>\n</f></serialize>\n\t<deserialize public=\"1\" set=\"method\" line=\"108\"><f a=\"xml:context\">\n\t<t path=\"com.pblabs.engine.serialization.XML\"/>\n\t<c path=\"com.pblabs.engine.core.IPBContext\"/>\n\t<d/>\n</f></deserialize>\n\t<onRemove set=\"method\" line=\"114\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<onReset set=\"method\" line=\"122\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onReset>\n\t<dispatch get=\"inline\" set=\"null\" line=\"128\"><f a=\"\"><e path=\"Void\"/></f></dispatch>\n\t<_vec><c path=\"com.pblabs.geom.Vector2\"/></_vec>\n\t<_vecForSignalling><c path=\"com.pblabs.geom.Vector2\"/></_vecForSignalling>\n\t<new public=\"1\" set=\"method\" line=\"36\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>*****************************************************************************\n * Hydrax: haXe port of the PushButton Engine\n * Copyright (C) 2010 Dion Amago\n * For more information see http://github.com/dionjwa/Hydrax\n *\n * This file is licensed under the terms of the MIT license, which is included\n * in the License.html file at the root directory of this SDK.\n ****************************************************************************</haxe_doc>\n</class>";
com.pblabs.components.base.LocationComponent.P_X = new com.pblabs.engine.core.PropertyReference("@LocationComponent.x");
com.pblabs.components.base.LocationComponent.P_Y = new com.pblabs.engine.core.PropertyReference("@LocationComponent.y");
com.pblabs.components.base.LocationComponent.P_POINT = new com.pblabs.engine.core.PropertyReference("@LocationComponent.point");
com.pblabs.engine.time.Timer.arr = new Array();
haxe.Timer.arr = new Array();
com.pblabs.components.scene.CircleShape.__rtti = "<class path=\"com.pblabs.components.scene.CircleShape\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/CircleShape.hx\">\n\t<extends path=\"com.pblabs.components.scene.ShapeComponent\"/>\n\t<radius public=\"1\" get=\"get_radius\" set=\"set_radius\"><c path=\"Float\"/></radius>\n\t<containsScreenPoint public=\"1\" set=\"method\" line=\"30\" override=\"1\"><f a=\"pos\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<e path=\"Bool\"/>\n</f></containsScreenPoint>\n\t<onFrame public=\"1\" set=\"method\" line=\"50\" override=\"1\"><f a=\"dt\">\n\t<c path=\"Float\"/>\n\t<e path=\"Void\"/>\n</f></onFrame>\n\t<onAdd set=\"method\" line=\"82\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<redraw set=\"method\" line=\"94\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></redraw>\n\t<get_height set=\"method\" line=\"135\" override=\"1\"><f a=\"\"><c path=\"Float\"/></f></get_height>\n\t<set_height set=\"method\" line=\"140\" override=\"1\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_height>\n\t<get_radius set=\"method\" line=\"146\"><f a=\"\"><c path=\"Float\"/></f></get_radius>\n\t<set_radius set=\"method\" line=\"151\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_radius>\n\t<_svgContainer><t path=\"js.HtmlDom\"/></_svgContainer>\n\t<_svg><t path=\"js.HtmlDom\"/></_svg>\n\t<new public=\"1\" set=\"method\" line=\"12\"><f a=\"?r:?color\">\n\t<c path=\"Float\"/>\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></new>\n</class>";
com.pblabs.components.input.InputManager.__meta__ = { fields : { _mouse : { inject : null}, _sets : { inject : null}, gestures : { inject : null}}}
com.pblabs.components.input.InputManager.__rtti = "<class path=\"com.pblabs.components.input.InputManager\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/input/InputManager.hx\">\n\t<extends path=\"com.pblabs.components.input.BaseInputManager\"/>\n\t<INPUT_SET line=\"628\" static=\"1\"><c path=\"String\"/></INPUT_SET>\n\t<deviceDown public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.InputData\"/></c></deviceDown>\n\t<deviceUp public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.InputData\"/></c></deviceUp>\n\t<deviceMove public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.InputData\"/></c></deviceMove>\n\t<deviceClick public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.InputData\"/></c></deviceClick>\n\t<deviceHeldDown public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.InputData\"/></c></deviceHeldDown>\n\t<drag public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.InputData\"/></c></drag>\n\t<doubleClick public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.InputData\"/></c></doubleClick>\n\t<rotate public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.GestureData\"/></c></rotate>\n\t<scale public=\"1\" set=\"null\"><c path=\"hsl.haxe.Signaler\"><c path=\"com.pblabs.components.input.GestureData\"/></c></scale>\n\t<isDeviceDown public=\"1\" get=\"get_isDeviceDown\" set=\"null\"><e path=\"Bool\"/></isDeviceDown>\n\t<underMouse public=\"1\"><c path=\"Array\"><c path=\"com.pblabs.components.input.MouseInputComponent\"/></c></underMouse>\n\t<_isDeviceDown>\n\t\t<e path=\"Bool\"/>\n\t\t<haxe_doc> Is the mouse button down, or the device touched </haxe_doc>\n\t</_isDeviceDown>\n\t<_startingAngle><c path=\"Float\"/></_startingAngle>\n\t<_startingScale><c path=\"Float\"/></_startingScale>\n\t<_isZooming><e path=\"Bool\"/></_isZooming>\n\t<_mouse><c path=\"com.pblabs.components.input.MouseInputManager\"/></_mouse>\n\t<_sets><c path=\"com.pblabs.engine.core.SetManager\"/></_sets>\n\t<gestures><c path=\"com.pblabs.components.input.GestureInputManager\"/></gestures>\n\t<onFrame public=\"1\" set=\"method\" line=\"124\"><f a=\"\"><e path=\"Void\"/></f></onFrame>\n\t<registerComponent public=\"1\" set=\"method\" line=\"148\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.input.MouseInputComponent\"/>\n\t<e path=\"Void\"/>\n</f></registerComponent>\n\t<unregisterComponent public=\"1\" set=\"method\" line=\"155\"><f a=\"c\">\n\t<c path=\"com.pblabs.components.input.MouseInputComponent\"/>\n\t<e path=\"Void\"/>\n</f></unregisterComponent>\n\t<startup public=\"1\" set=\"method\" line=\"160\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></startup>\n\t<shutdown public=\"1\" set=\"method\" line=\"171\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></shutdown>\n\t<bindSignals set=\"method\" line=\"179\"><f a=\"\"><e path=\"Void\"/></f></bindSignals>\n\t<modeRemoved set=\"method\" line=\"259\"><f a=\"m\">\n\t<c path=\"com.pblabs.engine.core.IPBContext\"/>\n\t<e path=\"Void\"/>\n</f></modeRemoved>\n\t<freeSignals set=\"method\" line=\"264\"><f a=\"\"><e path=\"Void\"/></f></freeSignals>\n\t<adjustMouseLocation set=\"method\" line=\"291\"><f a=\"m\">\n\t<c path=\"hsl.haxe.data.mouse.MouseLocation\"/>\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n</f></adjustMouseLocation>\n\t<onMouseDown set=\"method\" line=\"308\"><f a=\"m\">\n\t<c path=\"hsl.haxe.data.mouse.MouseLocation\"/>\n\t<e path=\"Void\"/>\n</f></onMouseDown>\n\t<onMouseUp set=\"method\" line=\"350\"><f a=\"m\">\n\t<c path=\"hsl.haxe.data.mouse.MouseLocation\"/>\n\t<e path=\"Void\"/>\n</f></onMouseUp>\n\t<onMouseMove set=\"method\" line=\"375\"><f a=\"m\">\n\t<c path=\"hsl.haxe.data.mouse.MouseLocation\"/>\n\t<e path=\"Void\"/>\n</f></onMouseMove>\n\t<isWithinSceneView set=\"method\" line=\"413\"><f a=\"mouse\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<e path=\"Bool\"/>\n</f></isWithinSceneView>\n\t<onDrag set=\"method\" line=\"418\"><f a=\"t\">\n\t<c path=\"com.pblabs.components.input.InputData\"/>\n\t<e path=\"Void\"/>\n</f></onDrag>\n\t<onMouseClick set=\"method\" line=\"442\"><f a=\"m\">\n\t<c path=\"hsl.haxe.data.mouse.MouseLocation\"/>\n\t<e path=\"Void\"/>\n</f></onMouseClick>\n\t<lookupComponentsUnderMouse set=\"method\" line=\"516\"><f a=\"mouseLoc\">\n\t<c path=\"com.pblabs.geom.Vector2\"/>\n\t<c path=\"Array\"><c path=\"com.pblabs.components.input.MouseInputComponent\"/></c>\n</f></lookupComponentsUnderMouse>\n\t<getMouseLoc get=\"inline\" set=\"null\" line=\"595\"><f a=\"\"><c path=\"com.pblabs.geom.Vector2\"/></f></getMouseLoc>\n\t<get_isDeviceDown set=\"method\" line=\"609\"><f a=\"\"><e path=\"Bool\"/></f></get_isDeviceDown>\n\t<_components><c path=\"Array\"><c path=\"com.pblabs.components.input.MouseInputComponent\"/></c></_components>\n\t<_deviceDownComponent><c path=\"com.pblabs.components.input.MouseInputComponent\"/></_deviceDownComponent>\n\t<_deviceDownComponentLoc><c path=\"com.pblabs.geom.Vector2\"/></_deviceDownComponentLoc>\n\t<_deviceDownLoc><c path=\"com.pblabs.geom.Vector2\"/></_deviceDownLoc>\n\t<_checked><c path=\"com.pblabs.util.ds.Set\"><c path=\"String\"/></c></_checked>\n\t<_inputCache><c path=\"com.pblabs.components.input.InputData\"/></_inputCache>\n\t<_gestureCache><c path=\"com.pblabs.components.input.GestureData\"/></_gestureCache>\n\t<_fingersTouching><c path=\"Int\"/></_fingersTouching>\n\t<_mouseLoc><c path=\"com.pblabs.geom.Vector2\"/></_mouseLoc>\n\t<_isGesturing><e path=\"Bool\"/></_isGesturing>\n\t<_tempVec><c path=\"com.pblabs.geom.Vector2\"/></_tempVec>\n\t<_timer><c path=\"haxe.Timer\"/></_timer>\n\t<new public=\"1\" set=\"method\" line=\"93\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>\n * Integrates different lower level input listeners into higher level signals such as drag,\n * and provides the components that react to input.\n </haxe_doc>\n</class>";
com.pblabs.components.input.InputManager.INPUT_SET = com.pblabs.util.ReflectUtil.tinyClassName(com.pblabs.components.input.IInteractiveComponent);
com.pblabs.components.scene.js.JSLayer.__rtti = "<class path=\"com.pblabs.components.scene.js.JSLayer\" params=\"Scene:Component\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/scene/js/JSLayer.hx\">\n\t<extends path=\"com.pblabs.components.scene.BaseScene2DLayer\">\n\t\t<c path=\"com.pblabs.components.scene.js.JSLayer.Scene\"/>\n\t\t<c path=\"com.pblabs.components.scene.js.JSLayer.Component\"/>\n\t</extends>\n\t<div public=\"1\" set=\"null\"><t path=\"js.HtmlDom\"/></div>\n\t<fixPosition public=\"1\" set=\"method\" line=\"49\"><f a=\"\"><e path=\"Void\"/></f></fixPosition>\n\t<addedToParent set=\"method\" line=\"67\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></addedToParent>\n\t<removingFromParent set=\"method\" line=\"75\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></removingFromParent>\n\t<onRemove set=\"method\" line=\"83\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onRemove>\n\t<onAdd set=\"method\" line=\"89\" override=\"1\"><f a=\"\"><e path=\"Void\"/></f></onAdd>\n\t<new public=\"1\" set=\"method\" line=\"14\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
com.pblabs.geom.VectorTools.RAD_TO_DEG = (180 / Math.PI);
com.pblabs.geom.VectorTools.DEG_TO_RAD = (Math.PI / 180);
com.pblabs.geom.VectorTools.ZERO = new com.pblabs.geom.Vector2();
com.pblabs.geom.VectorTools.PI2 = Math.PI * 2;
com.pblabs.components.scene.SceneView.__rtti = "<class path=\"com.pblabs.components.scene.SceneView\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/scene/SceneView.hx\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<implements path=\"com.pblabs.engine.core.IPBManager\"/>\n\t<height public=\"1\" get=\"get_height\" set=\"set_height\"><c path=\"Float\"/></height>\n\t<width public=\"1\" get=\"get_width\" set=\"set_width\"><c path=\"Float\"/></width>\n\t<layer public=\"1\" get=\"get_layer\" set=\"set_layer\"><t path=\"js.HtmlDom\"/></layer>\n\t<_layer><t path=\"js.HtmlDom\"/></_layer>\n\t<layerId public=\"1\" get=\"get_layerId\" set=\"set_layerId\"><c path=\"String\"/></layerId>\n\t<_layerId><c path=\"String\"/></_layerId>\n\t<mouseOffsetX public=\"1\" get=\"get_mouseOffsetX\" set=\"null\"><c path=\"Float\"/></mouseOffsetX>\n\t<mouseOffsetY public=\"1\" get=\"get_mouseOffsetY\" set=\"null\"><c path=\"Float\"/></mouseOffsetY>\n\t<_height><c path=\"Float\"/></_height>\n\t<_width><c path=\"Float\"/></_width>\n\t<startup public=\"1\" set=\"method\" line=\"90\"><f a=\"\"><e path=\"Void\"/></f></startup>\n\t<shutdown public=\"1\" set=\"method\" line=\"115\"><f a=\"\"><e path=\"Void\"/></f></shutdown>\n\t<get_height set=\"method\" line=\"125\"><f a=\"\"><c path=\"Float\"/></f></get_height>\n\t<set_height set=\"method\" line=\"129\"><f a=\"value\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_height>\n\t<get_width set=\"method\" line=\"135\"><f a=\"\"><c path=\"Float\"/></f></get_width>\n\t<set_width set=\"method\" line=\"140\"><f a=\"value\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_width>\n\t<get_layer set=\"method\" line=\"194\"><f a=\"\"><t path=\"js.HtmlDom\"/></f></get_layer>\n\t<set_layer set=\"method\" line=\"214\"><f a=\"val\">\n\t<t path=\"js.HtmlDom\"/>\n\t<t path=\"js.HtmlDom\"/>\n</f></set_layer>\n\t<get_layerId set=\"method\" line=\"220\"><f a=\"\"><c path=\"String\"/></f></get_layerId>\n\t<set_layerId set=\"method\" line=\"225\"><f a=\"val\">\n\t<c path=\"String\"/>\n\t<c path=\"String\"/>\n</f></set_layerId>\n\t<get_mouseOffsetX set=\"method\" line=\"231\"><f a=\"\"><c path=\"Float\"/></f></get_mouseOffsetX>\n\t<get_mouseOffsetY set=\"method\" line=\"236\"><f a=\"\"><c path=\"Float\"/></f></get_mouseOffsetY>\n\t<new public=\"1\" set=\"method\" line=\"63\"><f a=\"?layerId:?width:?height\">\n\t<c path=\"String\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></new>\n\t<haxe_doc>\n * This class represents a root rendering and input surface.\n * Most games will only ever have one SceneView, but it's \n * possible to have more than one.\n * \n * In Flash, you can currently only have one root \n * rendering and input view (the stage).  Everything else descends\n * from that.\n *\n * In javascript, you theoretically\n * could have multiple HTML elements be different rendering\n * and input surfaces.\n </haxe_doc>\n</class>";
com.pblabs.util.Log.DEBUG = 0;
com.pblabs.util.Log.INFO = 1;
com.pblabs.util.Log.WARNING = 2;
com.pblabs.util.Log.ERROR = 3;
com.pblabs.util.Log.OFF = 4;
com.pblabs.util.Log.showDateTime = true;
com.pblabs.util.Log._levels = new Hash();
com.pblabs.util.Log._currentLevel = -1;
com.pblabs.util.Log._logs = new Hash();
com.pblabs.util.Log.LEVEL_NAMES = ["debug","INFO","WARN","ERROR",false];
com.pblabs.engine.resource.EmbeddedResource.NAME = "embedded";
com.pblabs.components.scene.js.css.SceneLayer.__rtti = "<class path=\"com.pblabs.components.scene.js.css.SceneLayer\" params=\"\" file=\"/usr/lib/haxe/lib/libdamago/0,1/com/pblabs/components/scene/js/css/SceneLayer.hx\">\n\t<extends path=\"com.pblabs.components.scene.js.JSLayer\">\n\t\t<c path=\"com.pblabs.components.scene.js.css.SceneManager\"/>\n\t\t<c path=\"com.pblabs.components.scene.js.css.Base2DComponent\"/>\n\t</extends>\n\t<xOffset public=\"1\" get=\"get_xOffset\" set=\"null\"><c path=\"Float\"/></xOffset>\n\t<yOffset public=\"1\" get=\"get_yOffset\" set=\"null\"><c path=\"Float\"/></yOffset>\n\t<updateTransform public=\"1\" set=\"method\" line=\"23\"><f a=\"\"><e path=\"Void\"/></f></updateTransform>\n\t<get_xOffset set=\"method\" line=\"36\"><f a=\"\"><c path=\"Float\"/></f></get_xOffset>\n\t<get_yOffset set=\"method\" line=\"42\"><f a=\"\"><c path=\"Float\"/></f></get_yOffset>\n\t<_tempPoint><c path=\"com.pblabs.geom.Vector2\"/></_tempPoint>\n\t<new public=\"1\" set=\"method\" line=\"17\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
com.pblabs.components.base.AlphaComponent.__rtti = "<class path=\"com.pblabs.components.base.AlphaComponent\" params=\"\" file=\"/usr/lib/haxe/lib/hydrax/0,1/com/pblabs/components/base/AlphaComponent.hx\">\n\t<extends path=\"com.pblabs.components.base.NotifyingValueComponent\"/>\n\t<P_ALPHA public=\"1\" line=\"17\" static=\"1\"><c path=\"com.pblabs.engine.core.PropertyReference\"><c path=\"Float\"/></c></P_ALPHA>\n\t<alpha public=\"1\" get=\"get_alpha\" set=\"set_alpha\"><c path=\"Float\"/></alpha>\n\t<toString public=\"1\" set=\"method\" line=\"27\"><f a=\"\"><c path=\"String\"/></f></toString>\n\t<get_alpha set=\"method\" line=\"32\"><f a=\"\"><c path=\"Float\"/></f></get_alpha>\n\t<set_alpha set=\"method\" line=\"37\"><f a=\"val\">\n\t<c path=\"Float\"/>\n\t<c path=\"Float\"/>\n</f></set_alpha>\n\t<new public=\"1\" set=\"method\" line=\"21\"><f a=\"\"><e path=\"Void\"/></f></new>\n\t<haxe_doc>*****************************************************************************\n * Hydrax: haXe port of the PushButton Engine\n * Copyright (C) 2010 Dion Amago\n * For more information see http://github.com/dionjwa/Hydrax\n *\n * This file is licensed under the terms of the MIT license, which is included\n * in the License.html file at the root directory of this SDK.\n ****************************************************************************</haxe_doc>\n</class>";
com.pblabs.components.base.AlphaComponent.P_ALPHA = new com.pblabs.engine.core.PropertyReference("@AlphaComponent.alpha");
Xml.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
Xml.ecdata = new EReg("^<!\\[CDATA\\[","i");
Xml.edoctype = new EReg("^<!DOCTYPE ","i");
Xml.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
Xml.epcdata = new EReg("^[^<]+","");
Xml.ecomment = new EReg("^<!--","");
Xml.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
Xml.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
Xml.eclose = new EReg("^[ \\r\\n\\t]*(>|(/>))","");
Xml.ecdata_end = new EReg("\\]\\]>","");
Xml.edoctype_elt = new EReg("[\\[|\\]>]","");
Xml.ecomment_end = new EReg("-->","");
$Main.init = Demo.main();
