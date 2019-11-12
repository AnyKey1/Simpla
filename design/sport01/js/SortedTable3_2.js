function addEvent(obj,type,fn) {
	if (obj.addEventListener) obj.addEventListener(type,fn,false);
	else if (obj.attachEvent)	{
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() {obj["e"+type+fn](window.event);}
		obj.attachEvent("on"+type, obj[type+fn]);
	}
}

function removeEvent(obj,type,fn) {
	if (obj.removeEventListener) obj.removeEventListener(type,fn,false);
	else if (obj.detachEvent) {
		obj.detachEvent("on"+type, obj[type+fn]);
		obj[type+fn] = null;
		obj["e"+type+fn] = null;
	}
}



SortedTable = function(id) {
	this.table = null;
	if (!document.getElementById || !document.getElementsByTagName) return false;
	if (id) this.init(document.getElementById(id));
	else this.init(this.findTable());
	this.prep();
	if (!id && this.findTable()) new SortedTable();
}

// static
SortedTable.tables = new Array();
SortedTable.move = function(d,elm) {
	var st = SortedTable.getSortedTable(elm);
	if (st) st.move(d,elm);
}
SortedTable.moveSelected = function(d,elm) {
	var st = SortedTable.getSortedTable(elm);
	if (st) st.move(d);
}
SortedTable.findParent = function(elm,tag) {
	while (elm && elm.tagName && elm.tagName.toLowerCase()!=tag) elm = elm.parentNode;
	return elm;
}
SortedTable.getEventElement = function(e) {
	if (!e) e = window.event;
	return (e.target)? e.target : e.srcElement;
}
SortedTable.getSortedTable = function(elm) {
	elm = SortedTable.findParent(elm,'table');
	for (var i=0;i<SortedTable.tables.length;i++) {
		var t = SortedTable.tables[i].table;
		if (t==elm) return SortedTable.tables[i];
	}
	return null;
}
SortedTable.gecko = (navigator.product=="Gecko");
SortedTable.removeBeforeSort = SortedTable.gecko;

// dynamic
SortedTable.prototype = {
// before init finished
	init:function(elm) {
		if (!elm) return false;
		// main DOM properties
		this.table = elm;
		this.head = elm.getElementsByTagName('thead')[0];
		this.body = elm.getElementsByTagName('tbody')[0];
		this.foot = elm.getElementsByTagName('tfoot')[0];
		if (this.hasClass(this.table,'regroup')) this.regroup();
		this.elements = this.body.getElementsByTagName('tr');
		// other properties
		this.allowMultiple = true; // set this to false to disallow multiple selection
		this.allowDeselect = true; // set this to false to disallow deselection
		// prepare the table
		this.parseCols();
		this.selectedElements = new Array();
	},
	findTable:function() {
		var elms = document.getElementsByTagName('table');
		for (var i=0;i<elms.length;i++) {
			if (this.hasClass(elms[i],'sorted') && !SortedTable.getSortedTable(elms[i])) return elms[i];
		}
		return null;
	},
	parseCols:function() {
		if (!this.table) return;
		this.cols = new Array();
		var ths = this.head.getElementsByTagName('th');
		for (var i=0;i<ths.length;i++) {
			this.cols[ths[i].id] = new Array();
		}
		for (var i=0;i<this.elements.length;i++) {
			var tds = this.elements[i].getElementsByTagName('td');
			for (var j=0;j<tds.length;j++) {
				var headers = tds[j].headers.split(' ');
				for (var k=0;k<headers.length;k++) {
					if (this.cols[headers[k]]) this.cols[headers[k]].push(tds[j]);
				}
			}
		}
	},
	prep:function() {
		if (!this.table || SortedTable.getSortedTable(this.table)) return;
		this.register();
		this.prepBody();
		this.prepHeader();
	},
	register:function() {
		SortedTable.tables.push(this);
	},
	regroup:function() {
		var tbs = this.table.getElementsByTagName('tbody');
		for (var i=tbs.length-1;i>0;i--) {
			var trs = tbs[i].getElementsByTagName('tr');
			for (var j=trs.length-1;j>=0;j--) {
				this.body.appendChild(trs[j]);
			}
			this.table.removeChild(tbs[i]);
		}
	},
// helpers
	trim:function(str) {
		while (str.substr(0,1)==' ') str = str.substr(1);
		while (str.substr(str.length-1,1)==' ') str = str.substr(0,str.length-1);
		return str;
	},
	hasClass:function(elm,findclass) {
		if (!elm) return null;
		return (' '+elm.className+' ').indexOf(' '+findclass+' ')+1;
	},
	changeClass:function(elm,oldclass,newclass) {
		if (!elm) return null;
		var c = elm.className.split(' ');
		for (var i=0;i<c.length;i++) {
			c[i] = this.trim(c[i]);
			if (c[i]==oldclass || c[i]==newclass || c[i]=='') c.splice(i,1);
		}
		c.push(newclass);
		elm.className = this.trim(c.join(' '));
	},
	elementIndex:function(elm) {
		for (var i=0;i<this.elements.length;i++) {
			if (this.elements[i]==elm) return i;
		}
		return -1;
	},
	findParent:SortedTable.findParent,
// events
	callBodyHover:function(e) {
		var elm = SortedTable.getEventElement(e);
		var st = SortedTable.getSortedTable(elm);
		if (!st) return false;
		if (typeof(st.onbodyhover)=='function') st.onbodyhover(elm,e);
		var elm = st.findParent(elm,'tr');
		if (e.type=='mouseover') st.changeClass(elm,'','hover');
		else if (e.type=='mouseout') st.changeClass(elm,'hover','');
		return false;
	},
	callBodyClick:function(e) {
		var elm = SortedTable.getEventElement(e);
		var st = SortedTable.getSortedTable(elm);
		if (!st) return false;
		if (typeof(st.onbodyclick)=='function') st.onbodyclick(elm,e);
		var elm = st.findParent(elm,'tr');
		if (e.shiftKey && st.allowMultiple) st.selectRange(elm);
		else {
			if (st.selected(elm)) {
				if  (st.allowDeselect) st.deselect(elm);
			} else {
				if (!e.ctrlKey || !st.allowMultiple) st.cleanselect();
				st.select(elm);
			}
		}
		return false;
	},
	callBodyDblClick:function(e) {
		var elm = SortedTable.getEventElement(e);
		var st = SortedTable.getSortedTable(elm);
		if (!st) return false;
		if (typeof(st.onbodydblclick)=='function') st.onbodydblclick(elm,e);
		return false;
	},
	callHeadHover:function(e) {
		var elm = SortedTable.getEventElement(e);
		var st = SortedTable.getSortedTable(elm);
		if (!st) return false;
		if (typeof(st.onheadhover)=='function') st.onheadhover(elm,e);
		return false;
	},
	callHeadClick:function(e) {
		var elm = SortedTable.getEventElement(e);
		var st = SortedTable.getSortedTable(elm);
		if (!st) return false;
		if (typeof(st.onheadclick)=='function') st.onheadclick(elm,e);
		var elm = st.findParent(elm,'th');
		st.resort(elm);
		return false;
	},
	callHeadDblClick:function(e) {
		var elm = SortedTable.getEventElement(e);
		var st = SortedTable.getSortedTable(elm);
		if (!st) return false;
		if (typeof(st.onheaddblclick)=='function') st.onheaddblclick(elm,e);
		return false;
	},
// inited
	prepHeader:function() {
		var ths = this.head.getElementsByTagName('th');
		for (var i=0;i<ths.length;i++) {
			if (this.hasClass(ths[i],'nosort')) continue;
			ths[i].style.cursor = 'pointer';
			addEvent(ths[i],'click',this.callHeadClick);
			addEvent(ths[i],'dblclick',this.callHeadDblClick);
			addEvent(ths[i],'mouseover',this.callHeadHover);
			addEvent(ths[i],'mouseout',this.callHeadHover);
			if (this.hasClass(ths[i],'sortedplus') || this.hasClass(ths[i],'sortedminus')) this.sort(ths[i]);
		}
	},
	prepBody:function() {
		var elm = this.body.lastChild;
		var pelm;
		while (elm) {
			pelm = elm.previousSibling;
			if (elm.nodeType!=1) this.body.removeChild(elm);
			elm = pelm;
		}
		var trs = this.body.getElementsByTagName('tr');
		for (var i=0;i<trs.length;i++) {
			trs[i].style.cursor = '';
			addEvent(trs[i],'click',this.callBodyClick);
			addEvent(trs[i],'dblclick',this.callBodyDblClick);
			addEvent(trs[i],'mouseover',this.callBodyHover);
			addEvent(trs[i],'mouseout',this.callBodyHover);
		}
	},
// selecting
	selected:function(elm) {
		return this.hasClass(elm,'selrow');
	},
	select:function(elm) {
		this.changeClass(elm,'','selrow');
		this.selectedElements.push(elm);
		if (typeof(this.onselect)=='function') this.onselect(elm);
	},
	deselect:function(elm) {
		this.changeClass(elm,'selrow','');
		for (var i=0;i<this.selectedElements.length;i++) {
			if (this.selectedElements[i]==elm) this.selectedElements.splice(i,1);
		}
		if (typeof(this.ondeselect)=='function') this.ondeselect(elm);
	},
	selectRange:function(elm1) {
		if (this.selectedElements.length==0) {
			this.select(elm1);
			return false;
		}
		var elm0 = this.selectedElements[this.selectedElements.length-1];
		var d = (this.elementIndex(elm0) < this.elementIndex(elm1));
		var elm = elm0;
		if (this.selected(elm1)) {if (this.selected(elm0)) this.deselect(elm0);}
		else {if (!this.selected(elm0)) this.select(elm0);}
		do {
			elm = (d)? elm.nextSibling : elm.previousSibling;
			if (this.selected(elm)) this.deselect(elm);
			else this.select(elm);
		} while (elm!=elm1);
		return true;
	},
	cleanselect:function() {
		for (var i=0;i<this.elements.length;i++) {
			if (this.selected(this.elements[i])) this.deselect(this.elements[i]);
		}
		this.selectedElements = new Array();
	},
// sorting
	compareSmart:function(v1,v2) {
		v1 = (v1)? v1.split(' ') : [];
		v2 = (v2)? v2.split(' ') : [];
		l = Math.max(v1.length,v2.length);
		var r = 0;
		for (var i=0;i<l;i++) {
			if (v1[i]==v2[i]) continue;
			if (!v1[i]) v1[i] = "";
			if (!v2[i]) v2[i] = "";
			if (!isNaN(parseFloat(v1[i]))) v1[i] = parseFloat(v1[i]);
			if (!isNaN(parseFloat(v2[i]))) v2[i] = parseFloat(v2[i]);
			if (isNaN(v1[i])&&!isNaN(v2[i])) return 1;
			else if (!isNaN(v1[i])&&isNaN(v2[i])) return -1;
			else if (v1[i]>v2[i]) return 1;
			else if (v1[i]<v2[i]) return -1;
		}
		return 0;
	},
	compare:function(v1,v2,st) {
		var st = (!st)? SortedTable.getSortedTable(v1) : st;
		if (v1==null || v2==null) return 0;
		var axis = v1.axis.toLowerCase();
		var v1s = (v1.title)? v1.title : (v1.innerHTML)? v1.innerHTML : '';
		var v2s = (v2.title)? v2.title : (v2.innerHTML)? v2.innerHTML : '';
		if (axis=='string') {
			return st.compareSmart(v1s.toLowerCase(),v2s.toLowerCase());
		} else if (axis=='sstring') {
			return st.compareSmart(v1s,v2s);
		} else if (axis=='number') {
			v1 = parseFloat(v1s);
			if (isNaN(v1)) v1 = Infinity;
			v2 = parseFloat(v2s);
			if (isNaN(v2)) v2 = Infinity;
		} else {
			v1 = (v1s!='')? v1s : v1;
			v2 = (v2s!='')? v2s : v2;
		}
		if (v1==null || v2==null) return 0;
		else if (v1>v2) return 1
		else if (v1<v2) return -1;
		return 0;
	},
	findSort:function() {
		var ths = this.head.getElementsByTagName('th');
		for (var i=0;i<ths.length;i++) {
			if (this.hasClass(ths[i],'sortedminus') || this.hasClass(ths[i],'sortedplus')) return ths[i];
		}
		return null;
	},
	sort:function(elm,reverseonly) {
		var st = this;
		var comparator = function(v1,v2) {
			return st.compare(v1,v2,st);
		}
		if (!elm) elm = this.findSort();
		if (!elm) return false;
		var col = this.cols[elm.id];
		if (!reverseonly) col.sort(comparator);
		if (this.hasClass(elm,'sortedminus') || reverseonly) col.reverse();
		var b_sibling,b_parent;
		if (SortedTable.removeBeforeSort) {
			b_sibling = this.body.nextSibling;
			b_parent = this.body.parentNode;
			b_parent.removeChild(this.body);
		}
		for (var i=0;i<col.length;i++) {
			this.body.appendChild(this.findParent(col[i],'tr'));
		}
		if (SortedTable.removeBeforeSort) {
			b_parent.insertBefore(this.body,b_sibling);
		}
		if (typeof(this.onsort)=='function') this.onsort(elm);
	},
	resort:function(elm) {
		if (!elm) return false;
		this.cleansort(elm);
		var reverseonly = false;
		if (this.hasClass(elm,'sortedplus')) {
			this.changeClass(elm,'sortedplus','sortedminus');
			reverseonly = true;
		} else if (this.hasClass(elm,'sortedminus')) {
			this.changeClass(elm,'sortedminus','sortedplus');
			reverseonly = true;
		} else {
			this.changeClass(elm,'sortedminus','sortedplus');
		}
		this.sort(elm,reverseonly);
	},
	cleansort:function(except) {
		var ths = this.head.getElementsByTagName('th');
		for (var i=0;i<ths.length;i++) {
			if (ths[i]==except) continue;
			if (this.hasClass(ths[i],'sortedminus')) this.changeClass(ths[i],'sortedminus','');
			else if (this.hasClass(ths[i],'sortedplus')) this.changeClass(ths[i],'sortedplus','');
		}
	},
// movement
	compareindex:function(v1,v2) {
		var st = SortedTable.getSortedTable(v1);
		if (!st) return 0;
		v1 = st.elementIndex(v1);
		v2 = st.elementIndex(v2);
		if (v1==null || v2==null) return 0;
		else if (v1<v2) return 1
		else if (v2<v1) return -1;
		return 0;
	},
	move:function(d,elm) {
		if (elm) this.moverow(d,elm);
		else {
			var m = true;
			for (var i=0;i<this.selectedElements.length;i++) {
				if (!this.canMove(d,this.selectedElements[i])) m = false;
			}
			if (m) {
				var moving = this.selectedElements.slice(0,this.selectedElements.length);
				moving.sort(this.compareindex);
				if (d>0) moving.reverse();
				for (var i=0;i<moving.length;i++) {
					this.moverow(d,moving[i]);
				}
			}
		}
		if (typeof(this.onmove)=='function') this.onmove(d,elm);
	},
	moverow:function(d,elm) {
		this.cleansort();
		var parent = elm.parentNode;
		var sibling = this.canMove(d,elm);
		if (!sibling) return false;
		if (d>0) {
			parent.removeChild(elm);
			parent.insertBefore(elm,sibling);
		} else {
			parent.removeChild(elm);
			if (sibling.nextSibling) parent.insertBefore(elm,sibling.nextSibling);
			else parent.appendChild(elm);
		}
	},
	canMove:function(d,elm) {
		if (d>0) return elm.previousSibling;
		else return elm.nextSibling;
	}
};



		






/*
 * FancyBox - simple jQuery plugin for fancy image zooming
 * Examples and documentation at: http://fancy.klade.lv/
 * Version: 1.0.0 (25/04/2008)
 * Copyright (c) 2008 Janis Skarnelis
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 * Requires: jQuery v1.2.1 or later
*/
(function($) {
	var opts = {}, 
		imgPreloader = new Image, imgTypes = ['png', 'jpg', 'jpeg', 'gif'], 
		loadingTimer, loadingFrame = 1;

   $.fn.fancybox = function(settings) {
		opts.settings = $.extend({}, $.fn.fancybox.defaults, settings);

		$.fn.fancybox.init();

		return this.each(function() {
			var $this = $(this);
			var o = $.metadata ? $.extend({}, opts.settings, $this.metadata()) : opts.settings;

			$this.unbind('click').click(function() {
				$.fn.fancybox.start(this, o); return false;
			});
		});
	};

	$.fn.fancybox.start = function(el, o) {
		if (opts.animating) return false;

		if (o.overlayShow) {
			$("#fancy_wrap").prepend('<div id="fancy_overlay"></div>');
			$("#fancy_overlay").css({'width': $(window).width(), 'height': $(document).height(), 'opacity': o.overlayOpacity});

			if ($.browser.msie) {
				$("#fancy_wrap").prepend('<iframe id="fancy_bigIframe" scrolling="no" frameborder="0"></iframe>');
				$("#fancy_bigIframe").css({'width': $(window).width(), 'height': $(document).height(), 'opacity': 0});
			}

			$("#fancy_overlay").click($.fn.fancybox.close);
		}

		opts.itemArray	= [];
		opts.itemNum	= 0;

		if (jQuery.isFunction(o.itemLoadCallback)) {
		   o.itemLoadCallback.apply(this, [opts]);

			var c	= $(el).children("img:first").length ? $(el).children("img:first") : $(el);
			var tmp	= {'width': c.width(), 'height': c.height(), 'pos': $.fn.fancybox.getPosition(c)}

		   for (var i = 0; i < opts.itemArray.length; i++) {
				opts.itemArray[i].o = $.extend({}, o, opts.itemArray[i].o);
				
				if (o.zoomSpeedIn > 0 || o.zoomSpeedOut > 0) {
					opts.itemArray[i].orig = tmp;
				}
		   }

		} else {
			if (!el.rel || el.rel == '') {
				var item = {url: el.href, title: el.title, o: o};

				if (o.zoomSpeedIn > 0 || o.zoomSpeedOut > 0) {
					var c = $(el).children("img:first").length ? $(el).children("img:first") : $(el);
					item.orig = {'width': c.width(), 'height': c.height(), 'pos': $.fn.fancybox.getPosition(c)}
				}

				opts.itemArray.push(item);

			} else {
				var arr	= $("a[rel=" + el.rel + "]").get();

				for (var i = 0; i < arr.length; i++) {
					var tmp		= $.metadata ? $.extend({}, o, $(arr[i]).metadata()) : o;
   					var item	= {url: arr[i].href, title: arr[i].title, o: tmp};

   					if (o.zoomSpeedIn > 0 || o.zoomSpeedOut > 0) {
						var c = $(arr[i]).children("img:first").length ? $(arr[i]).children("img:first") : $(el);

						item.orig = {'width': c.width(), 'height': c.height(), 'pos': $.fn.fancybox.getPosition(c)}
					}

					if (arr[i].href == el.href) opts.itemNum = i;

					opts.itemArray.push(item);
				}
			}
		}

		$.fn.fancybox.changeItem(opts.itemNum);
	};

	$.fn.fancybox.changeItem = function(n) {
		$.fn.fancybox.showLoading();

		opts.itemNum = n;

		$("#fancy_nav").empty();
		$("#fancy_outer").stop();
		$("#fancy_title").hide();
		$(document).unbind("keydown");

		imgRegExp = imgTypes.join('|');
    	imgRegExp = new RegExp('\.' + imgRegExp + '$', 'i');

		var url = opts.itemArray[n].url;

		if (url.match(/#/)) {
			var target = window.location.href.split('#')[0]; target = url.replace(target,'');

	        $.fn.fancybox.showItem('<div id="fancy_div">' + $(target).html() + '</div>');

	        $("#fancy_loading").hide();

		} else if (url.match(imgRegExp)) {
			$(imgPreloader).unbind('load').bind('load', function() {
				$("#fancy_loading").hide();

				opts.itemArray[n].o.frameWidth	= imgPreloader.width;
				opts.itemArray[n].o.frameHeight	= imgPreloader.height;

				$.fn.fancybox.showItem('<img id="fancy_img" src="' + imgPreloader.src + '" />');

			}).attr('src', url + '?rand=' + Math.floor(Math.random() * 999999999) );

		} else {
			$.fn.fancybox.showItem('<iframe id="fancy_frame" onload="$.fn.fancybox.showIframe()" name="fancy_iframe' + Math.round(Math.random()*1000) + '" frameborder="0" hspace="0" src="' + url + '"></iframe>');
		}
	};

	$.fn.fancybox.showIframe = function() {
		$("#fancy_loading").hide();
		$("#fancy_frame").show();
	};

	$.fn.fancybox.showItem = function(val) {
		$.fn.fancybox.preloadNeighborImages();

		var viewportPos	= $.fn.fancybox.getViewport();
		var itemSize	= $.fn.fancybox.getMaxSize(viewportPos[0] - 50, viewportPos[1] - 100, opts.itemArray[opts.itemNum].o.frameWidth, opts.itemArray[opts.itemNum].o.frameHeight);

		var itemLeft	= viewportPos[2] + Math.round((viewportPos[0] - itemSize[0]) / 2) - 20;
		var itemTop		= viewportPos[3] + Math.round((viewportPos[1] - itemSize[1]) / 2) - 40;

		var itemOpts = {
			'left':		itemLeft, 
			'top':		itemTop, 
			'width':	itemSize[0] + 'px', 
			'height':	itemSize[1] + 'px'	
		}

		if (opts.active) {
			$('#fancy_content').fadeOut("normal", function() {
				$("#fancy_content").empty();
				
				$("#fancy_outer").animate(itemOpts, "normal", function() {
					$("#fancy_content").append($(val)).fadeIn("normal");
					$.fn.fancybox.updateDetails();
				});
			});

		} else {
			opts.active = true;

			$("#fancy_content").empty();

			if ($("#fancy_content").is(":animated")) {
				console.info('animated!');
			}

			if (opts.itemArray[opts.itemNum].o.zoomSpeedIn > 0) {
				opts.animating		= true;
				itemOpts.opacity	= "show";

				$("#fancy_outer").css({
					'top':		opts.itemArray[opts.itemNum].orig.pos.top - 18,
					'left':		opts.itemArray[opts.itemNum].orig.pos.left - 18,
					'height':	opts.itemArray[opts.itemNum].orig.height,
					'width':	opts.itemArray[opts.itemNum].orig.width
				});

				$("#fancy_content").append($(val)).show();

				$("#fancy_outer").animate(itemOpts, opts.itemArray[opts.itemNum].o.zoomSpeedIn, function() {
					opts.animating = false;
					$.fn.fancybox.updateDetails();
				});

			} else {
				$("#fancy_content").append($(val)).show();
				$("#fancy_outer").css(itemOpts).show();
				$.fn.fancybox.updateDetails();
			}
		 }
	};

	$.fn.fancybox.updateDetails = function() {
		$("#fancy_bg,#fancy_close").show();

		if (opts.itemArray[opts.itemNum].title !== undefined && opts.itemArray[opts.itemNum].title !== '') {
			$('#fancy_title div').html(opts.itemArray[opts.itemNum].title);
			$('#fancy_title').show();
		}

		if (opts.itemArray[opts.itemNum].o.hideOnContentClick) {
			$("#fancy_content").click($.fn.fancybox.close);
		} else {
			$("#fancy_content").unbind('click');
		}

		if (opts.itemNum != 0) {
			$("#fancy_nav").append('<a id="fancy_left" href="javascript:;"></a>');

			$('#fancy_left').click(function() {
				$.fn.fancybox.changeItem(opts.itemNum - 1); return false;
			});
		}

		if (opts.itemNum != (opts.itemArray.length - 1)) {
			$("#fancy_nav").append('<a id="fancy_right" href="javascript:;"></a>');
			
			$('#fancy_right').click(function(){
				$.fn.fancybox.changeItem(opts.itemNum + 1); return false;
			});
		}

		$(document).keydown(function(event) {
			if (event.keyCode == 27) {
            	$.fn.fancybox.close();

			} else if(event.keyCode == 37 && opts.itemNum != 0) {
            	$.fn.fancybox.changeItem(opts.itemNum - 1);

			} else if(event.keyCode == 39 && opts.itemNum != (opts.itemArray.length - 1)) {
            	$.fn.fancybox.changeItem(opts.itemNum + 1);
			}
		});
	};

	$.fn.fancybox.preloadNeighborImages = function() {
		if ((opts.itemArray.length - 1) > opts.itemNum) {
			preloadNextImage = new Image();
			preloadNextImage.src = opts.itemArray[opts.itemNum + 1].url;
		}

		if (opts.itemNum > 0) {
			preloadPrevImage = new Image();
			preloadPrevImage.src = opts.itemArray[opts.itemNum - 1].url;
		}
	};

	$.fn.fancybox.close = function() {
		if (opts.animating) return false;

		$(imgPreloader).unbind('load');
		$(document).unbind("keydown");

		$("#fancy_loading,#fancy_title,#fancy_close,#fancy_bg").hide();

		$("#fancy_nav").empty();

		opts.active	= false;

		if (opts.itemArray[opts.itemNum].o.zoomSpeedOut > 0) {
			var itemOpts = {
				'top':		opts.itemArray[opts.itemNum].orig.pos.top - 18,
				'left':		opts.itemArray[opts.itemNum].orig.pos.left - 18,
				'height':	opts.itemArray[opts.itemNum].orig.height,
				'width':	opts.itemArray[opts.itemNum].orig.width,
				'opacity':	'hide'
			};

			opts.animating = true;

			$("#fancy_outer").animate(itemOpts, opts.itemArray[opts.itemNum].o.zoomSpeedOut, function() {
				$("#fancy_content").hide().empty();
				$("#fancy_overlay,#fancy_bigIframe").remove();
				opts.animating = false;
			});

		} else {
			$("#fancy_outer").hide();
			$("#fancy_content").hide().empty();
			$("#fancy_overlay,#fancy_bigIframe").fadeOut("fast").remove();
		}
	};

	$.fn.fancybox.showLoading = function() {
		clearInterval(loadingTimer);

		var pos = $.fn.fancybox.getViewport();

		$("#fancy_loading").css({'left': ((pos[0] - 40) / 2 + pos[2]), 'top': ((pos[1] - 40) / 2 + pos[3])}).show();
		$("#fancy_loading").bind('click', $.fn.fancybox.close);
		
		loadingTimer = setInterval($.fn.fancybox.animateLoading, 66);
	};

	$.fn.fancybox.animateLoading = function(el, o) {
		if (!$("#fancy_loading").is(':visible')){
			clearInterval(loadingTimer);
			return;
		}

		$("#fancy_loading > div").css('top', (loadingFrame * -40) + 'px');

		loadingFrame = (loadingFrame + 1) % 12;
	};

	$.fn.fancybox.init = function() {
		if (!$('#fancy_wrap').length) {
			$('<div id="fancy_wrap"><div id="fancy_loading"><div></div></div><div id="fancy_outer"><div id="fancy_inner"><div id="fancy_nav"></div><div id="fancy_close"></div><div id="fancy_content"></div><div id="fancy_title"></div></div></div></div>').appendTo("body");
			$('<div id="fancy_bg"><div class="fancy_bg fancy_bg_n"></div><div class="fancy_bg fancy_bg_ne"></div><div class="fancy_bg fancy_bg_e"></div><div class="fancy_bg fancy_bg_se"></div><div class="fancy_bg fancy_bg_s"></div><div class="fancy_bg fancy_bg_sw"></div><div class="fancy_bg fancy_bg_w"></div><div class="fancy_bg fancy_bg_nw"></div></div>').prependTo("#fancy_inner");
			
			$('<table cellspacing="0" cellpadding="0" border="0"><tr><td id="fancy_title_left"></td><td id="fancy_title_main"><div></div></td><td id="fancy_title_right"></td></tr></table>').appendTo('#fancy_title');
		}

		if ($.browser.msie) {
			$("#fancy_inner").prepend('<iframe id="fancy_freeIframe" scrolling="no" frameborder="0"></iframe>');
		}

		if (jQuery.fn.pngFix) $(document).pngFix();

    	$("#fancy_close").click($.fn.fancybox.close);
	};

	$.fn.fancybox.getPosition = function(el) {
		var pos = el.offset();

		pos.top	+= $.fn.fancybox.num(el, 'paddingTop');
		pos.top	+= $.fn.fancybox.num(el, 'borderTopWidth');

 		pos.left += $.fn.fancybox.num(el, 'paddingLeft');
		pos.left += $.fn.fancybox.num(el, 'borderLeftWidth');

		return pos;
	};

	$.fn.fancybox.num = function (el, prop) {
		return parseInt($.curCSS(el.jquery?el[0]:el,prop,true))||0;
	};

	$.fn.fancybox.getPageScroll = function() {
		var xScroll, yScroll;

		if (self.pageYOffset) {
			yScroll = self.pageYOffset;
			xScroll = self.pageXOffset;
		} else if (document.documentElement && document.documentElement.scrollTop) {
			yScroll = document.documentElement.scrollTop;
			xScroll = document.documentElement.scrollLeft;
		} else if (document.body) {
			yScroll = document.body.scrollTop;
			xScroll = document.body.scrollLeft;	
		}

		return [xScroll, yScroll]; 
	};

	$.fn.fancybox.getViewport = function() {
		var scroll = $.fn.fancybox.getPageScroll();

		return [$(window).width(), $(window).height(), scroll[0], scroll[1]];
	};

	$.fn.fancybox.getMaxSize = function(maxWidth, maxHeight, imageWidth, imageHeight) {
		var r = Math.min(Math.min(maxWidth, imageWidth) / imageWidth, Math.min(maxHeight, imageHeight) / imageHeight);

		return [Math.round(r * imageWidth), Math.round(r * imageHeight)];
	};

	$.fn.fancybox.defaults = {
		padding				:	10,
		imageScale			:	true,
		zoomOpacity			:	false,
		zoomSpeedIn			:	0,
		zoomSpeedOut		:	0,
		zoomSpeedChange		:	300,
		easingIn			:	'swing',
		easingOut			:	'swing',
		easingChange		:	'swing',
		frameWidth			:	425,
		frameHeight			:	355,
		overlayShow			:	true,
		overlayOpacity		:	0.3,
		hideOnContentClick	:	true,
		centerOnScroll		:	true,
		itemArray			:	[],
		callbackOnStart		:	null,
		callbackOnShow		:	null,
		callbackOnClose		:	null
	};
})(jQuery);


	$(document).ready(function() {
	    $("#gallery a.test").fancybox({
	    	hideOnContentClick: true,
	    	overlayShow: true,
	    	overlayOpacity: 0.6,
	    	zoomSpeedIn: 600,
	    	zoomSpeedOut:400
	    });	
	    
	    
	    // автоматическое появление картинки в fancybox
	    var gaspari = $('#filhit');
	    gaspari.fancybox({
		    	hideOnContentClick: true,
		    	overlayShow: true,
		    	overlayOpacity: 0.5,
		    	zoomSpeedIn: 600,
		    	zoomSpeedOut:400
		});
		gaspari.click();
		// \\ автоматическое появление картинки в fancybox   
	    
	    
// оповещение о поступлении на склад
	
				
	 		$('.mail_ico, .mail_ico2').toggle(function(){
					var id = $(this).attr('id');
					var form_inform = $(this).next();
					//var name = $(this).attr('title');
					var val_email = $('#email_inform').val();
					if(!val_email) val_email = 'Введите свой E-mail';
					var form_inform_print = "<fieldset>";
					//if ($(this).attr('class') != 'mail_ico2') form_inform_print += "<legend>Оповестить, когда появится</legend>";
					form_inform_print += "<form  action='/includes/inform_ajax.php' method='GET'>" +
						"<input class='email' type=\"text\" value='"+ val_email +"' onblur=\"if(this.value=='') this.value='Введите свой E-mail';\" onfocus=\"if(this.value=='Введите свой E-mail') this.value='';\" />" +
						"<input class='go_inform' class=\"submit\" type=\"button\" value=\"Отправить\" />" +
						"<input type='hidden' name='pid' value='"+ id +"' />" +
						"<div class='status_message' style='padding-top:6px'></div>" +
					    "</form></fieldset>";						
	 				if(form_inform.html()) {
	 					form_inform.fadeIn();	
	 				} else {
	 					form_inform.hide().html(form_inform_print).fadeIn();
	 				}
	 				 		
	 				if ($(this).attr('class') != 'mail_ico2'){ 		
						$(this).fadeOut(250, function(){
							$(this).css('background-position', '-47px -21px').attr('title', 'Закрыть форму');
						}).fadeIn(250);
					}
			}, function(){
					if ($(this).attr('class') != 'mail_ico2'){ 		
						$(this).fadeOut(250,function(){
							$(this).css('background-position', '-47px -51px').attr('title', 'Оповестить по E-mail при поступлении на склад');
						}).fadeIn(250);
					}
					
					var form_inform = $(this).next();
					form_inform.fadeOut();				
			});
	
	
	
				$('.go_inform').live('click', function(){
					
					var input  = $(this).parent().find("[name='pid']").val();
					var email  = $(this).parent().find("[type='text']").val();
					var outPut = $(this).parent().find("[class='status_message']");
	
					//alert(email);
					//return false;
				                                $.ajax({
				                                    type: 'GET',                                  
				                                    url: '/includes/inform_ajax.php',
				                                    data: 'q=' + input + '&email=' + encodeURIComponent(email),
				                                    dataType: 'json',
									                beforeSend: function()
									                {
									                   outPut.html('<img src="/img/loading.gif" />').fadeIn();
									                },	                                     
				                                    success: function(msg){ 
	          											if(msg.error){
	          												var out = '<div class="inform_err red2">'+ msg.error +'</div>';
	          											} else {
	          												var out = '<div class="inform_err green2">'+ msg.ok +'</div>'
	          											}
														outPut.html(out);
														//outPut.html(msg);
							
				                                    }
				                                }); // конец аякса						   
						   		
				
				});		//\\ оповещение о поступлении на склад		    
	    	    
	    	    
// наши награды
    var imageList = [
		{url: "/img/awards/fbfr2.gif", title: "Чемпионат Москвы по бодибилдингу"},
		{url: "/img/awards/fbfr3.gif", title: "Okfit - генеральный спонсор Чемпионата России по бодибилдингу"},
		{url: "/img/awards/mioff.jpg", title: "Mioff"},
		
		{url: "/img/awards/okfit.gif", title: "Okfit"},
		{url: "/img/awards/muscl.gif", title: "Muscletech"},
		{url: "/img/awards/prolab.gif", title: "Prolab"},
		{url: "/img/awards/WC.gif", title: "World Class"}
	];
		
	function getGroupItems(opts) {
		jQuery.each(imageList, function(i, val) {
	        opts.itemArray.push(val);
	    });
	}
    
	$(".awards_link").fancybox({
	     // itemLoadCallback: getGroupItems,
	
			"zoomSpeedIn" : 1000,	
			"zoomSpeedOut" : 1000,	
			"frameWidth" : 1000,	 
			"frameHeight" : 800, 
			"overlayOpacity" : 0.8,	
			"hideOnContentClick" :false	    
	});	        	    
// \\наши награды	    	    
	    	    
// сравнение товаров
$('.cmp_del_img').live('click', function(e){
e.preventDefault();
var pid2 = $(this).attr('href');
var cur_cmp_link = $(this);
			                                $.ajax({
			                                    type: 'POST',                                  
			                                     url: '/includes/compare/compare_ajax.php',
			                                    data: 'pid=' + pid2 + '&op=del',
			                                    dataType: 'json',
	                                     
			                                    success: function(msg){           
													if(msg.error == 4) {
														cur_cmp_link.fadeOut(400).remove();	
														//$('#cmp_' + pid2).attr('checked', '');
														var cur_box = $('#cmp_' + pid2);
														cur_box.removeAttr('checked');
														cur_box.next('span').removeClass('checked'); // это span от idealForm
													} 	
													
													if(msg.error2 != 3) {
														$('.button_none').hide();
													}
			                                    }
			                                }); // конец аякса	
});
															
														$('.hndl_submit_prds_cmp').fancybox({
													    	zoomSpeedIn: 0,
													    	zoomSpeedOut:0,
													    	frameWidth: 1200,
													    	frameHeight: 800
													    }).click(function (e) {	
															e.preventDefault();
															$('#compare_mask, .window').hide();
														});	
														

	$('.compare').click(function(){
	
		var id = $('#compare_box');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var mask2 = $('#compare_mask');
		mask2.css({'width':maskWidth,'height':maskHeight});
		mask2.css('opacity', 0.6).show();
		var winH = $(window).height();
		var winW = $(window).width();
		id.css('top',  winH/2-id.height()/2 + id.offset().top + 'px');
		id.css('left', winW/2-id.width()/2 + 'px');
		id.fadeIn(1); 	
	
		var pid = $(this).val();
		var outPut = id.children('.modal_out');	
		var button_none = $('.button_none');
		var button_none2 = $('#compare_box .button_none');
		
		if($(this).is(':checked')) {
		
		var item_checkbox = $(this); // чтобы было видно в ajax
			
			                                $.ajax({
			                                    type: 'POST',                                  
			                                    url: '/includes/compare/compare_ajax.php',
			                                    data: 'pid=' + pid + '&op=add',
			                                    dataType: 'json',
			                                    
								                beforeSend: function()
								                {
								                	button_none2.hide();
								                    outPut.html('<img src="/img/loading.gif" />').fadeIn();
								                },				                                    
	                                     
			                                    success: function(msg){           
													outPut.html(msg.msg + '<br />' + msg.error3);
													if(msg.error == 1) item_checkbox.removeAttr('checked');				
													if(msg.error2 == 3) {
														button_none.show();	
													} else {
														button_none.hide();
													}		
			                                    }
			                                }); // конец аякса				
			
			
			
		} else {
			                                $.ajax({
			                                    type: 'POST',                                  
			                                    url: '/includes/compare/compare_ajax.php',
			                                    data: 'pid=' + pid + '&op=del',
			                                    dataType: 'json',
			                                    
										        beforeSend: function()
								                {
								                	button_none2.hide();
								                    outPut.html('<img src="/img/loading.gif" />').fadeIn();
								                },	                                    
	                                     
			                                    success: function(msg){           
													outPut.html(msg.msg + '<br />' + msg.error3);
													if(msg.error2 == 3) {
														button_none.show();	
													} else {
														button_none.hide();
													}				
			                                    }
			                                }); // конец аякса	
		}
	});	
//\\ сравнение товаров конец		    
	    	    
	    	    
	    	    
	    	    
	    	    
	    
	}); // конец ready
