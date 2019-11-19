$(function(){

	$('.set_idealform, #cmp_box2').idealforms();
	$('#site-select').change(function(){
		document.location = 'brands/'+$(this).val();
	});
	
	var sideLeft_sel = $('#sideLeft .idealselect');
	sideLeft_sel.width('226px');
	sideLeft_sel.find('ul').width('224px');
	
	// подкорректируем пункты меню с подменю
	var topnav = $('#topnav');
	topnav.find('li:first a').css('border-top', 'none');
	topnav.find('li:last  a').css('border-bottom', 'none');
	$('.sub ul', topnav).each(function(){
		$(this).find('a:last').css('border-bottom', 'none');
	});
	
	// скрытие value в форме авторизации при фокусе
	var auth_form_input = $('#authfotm2 input[type="text"], #authfotm2 input[type="password"], #s_query, .qnt_text');
	auth_form_input.focus(function(){
		if($(this).val() == this.defaultValue){
			$(this).val('');
		}
	});
	
	auth_form_input.blur(function(){
		if($(this).val() == ''){
			$(this).val(this.defaultValue);
		}
	});	

	// \\ скрытие value в форме авторизации при фокусе

	

	$(function() {
	        $.fn.scrollToTop = function() {
	            $(this).hide().removeAttr("href");
	            if ($(window).scrollTop() != "0") {
	                $(this).fadeIn("slow")
	            }
	            var scrollDiv = $(this);
	            $(window).scroll(function() {
	                if ($(window).scrollTop() == "0") {
	                    $(scrollDiv).fadeOut("slow")
	                } else {
	                    $(scrollDiv).fadeIn("slow")
	                }
	            });
	            $(this).click(function() {
	                $("html, body").animate({
	                    scrollTop: 0
	                }, "slow")
	            })
	        }
	    });
	    $(function() {
	        $("#w2b-StoTop").scrollToTop();
	    });	

});

// LazyLoad - медленная загрузка изображений http://www.appelsiini.net/projects/lazyload
(function(a,b){$window=a(b),a.fn.lazyload=function(c){function f(){var b=0;d.each(function(){var c=a(this);if(e.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,e)&&!a.leftofbegin(this,e))if(!a.belowthefold(this,e)&&!a.rightoffold(this,e))c.trigger("appear");else if(++b>e.failure_limit)return!1})}var d=this,e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(undefined!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),undefined!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(e,c)),$container=e.container===undefined||e.container===b?$window:a(e.container),0===e.event.indexOf("scroll")&&$container.bind(e.event,function(a){return f()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(e.appear){var f=d.length;e.appear.call(b,f,e)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(e.data_attribute))[e.effect](e.effect_speed),b.loaded=!0;var f=a.grep(d,function(a){return!a.loaded});d=a(f);if(e.load){var g=d.length;e.load.call(b,g,e)}}).attr("src",c.data(e.data_attribute))}}),0!==e.event.indexOf("scroll")&&c.bind(e.event,function(a){b.loaded||c.trigger("appear")})}),$window.bind("resize",function(a){f()}),f(),this},a.belowthefold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.height()+$window.scrollTop():e=$container.offset().top+$container.height(),e<=a(c).offset().top-d.threshold},a.rightoffold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.width()+$window.scrollLeft():e=$container.offset().left+$container.width(),e<=a(c).offset().left-d.threshold},a.abovethetop=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollTop():e=$container.offset().top,e>=a(c).offset().top+d.threshold+a(c).height()},a.leftofbegin=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollLeft():e=$container.offset().left,e>=a(c).offset().left+d.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(c){return a.belowthefold(c,{threshold:0,container:b})},"above-the-top":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-screen":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-screen":function(c){return!a.rightoffold(c,{threshold:0,container:b})},"in-viewport":function(c){return!a.inviewport(c,{threshold:0,container:b})},"above-the-fold":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-fold":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-fold":function(c){return!a.rightoffold(c,{threshold:0,container:b})}})})(jQuery,window)


if(typeof deconcept=="undefined"){var deconcept={};}if(typeof deconcept.util=="undefined"){deconcept.util={};}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil={};}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10]||"";},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=[];var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+(this.getAttribute("style")||"")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+(this.getAttribute("style")||"")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;


(function($){$.fn.easyTooltip=function(options){var defaults={xOffset:10,yOffset:25,tooltipId:"easyTooltip",clickRemove:false,content:"",useElement:""};var options=$.extend(defaults,options);var content;this.each(function(){var title=$(this).attr("title");$(this).hover(function(e){content=(options.content!="")?options.content:title;content=(options.useElement!="")?$("#"+options.useElement).html():content;$(this).attr("title","");if(content!=""&&content!=undefined){$("body").append("<div id='"+options.tooltipId+"'>"+content+"</div>");$("#"+options.tooltipId).css("position","absolute").css("top",(e.pageY-options.yOffset)+"px").css("left",(e.pageX+options.xOffset)+"px").css("display","none").fadeIn("slow")}},function(){$("#"+options.tooltipId).remove();$(this).attr("title",title)});$(this).mousemove(function(e){$("#"+options.tooltipId).css("top",(e.pageY-options.yOffset)+"px").css("left",(e.pageX+options.xOffset)+"px")});if(options.clickRemove){$(this).mousedown(function(e){$("#"+options.tooltipId).remove();$(this).attr("title",title)})}})}})(jQuery);
$(document).ready(function(){
	var options_tooltip = {
		xOffset : 20,
		yOffset : 40
	}
	$('a, .any').easyTooltip(options_tooltip);
	$('.b_imgage').each(function(){
		$(this).easyTooltip
			({
			tooltipId : 'easyTooltip2',
			content   : $(this).next().html(),
			xOffset : 40,
			yOffset : 60			
			});
	});
	
	$('.b_img').each(function(){
		$(this).easyTooltip
			({
			tooltipId : 'easyTooltip3',
			content   : $(this).next().html(),
			xOffset : 40,
			yOffset : 60			
			});
	});	
	
	 $(".lazy").lazyload({
	     effect       : "fadeIn",
	     threshold    : 500
	 });	 
	 
	
});



//Ajax-form submit
 (function($) {
$.fn.ajaxSubmit = function(options) {
    if (typeof options == 'function')
        options = { success: options };

    options = $.extend({
        url:  this.attr('action') || window.location.toString(),
        type: this.attr('method') || 'GET'
    }, options || {});

    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) return this;

    var a = this.formToArray(options.semantic);
    if (options.data) {
        for (var n in options.data)
            a.push( { name: n, value: options.data[n] } );
    }

    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;

    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) return this;

    var q = $.param(a);

    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;
    }
    else
        options.data = q;

    var $form = this, callbacks = [];
    if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
    if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
        	$(options.target).fadeIn(300);
            $(options.target).html(data).each(oldSuccess, arguments);
            
        });
    }
    else if (options.success)
        callbacks.push(options.success);

    options.success = function(data, status) {
        for (var i=0, max=callbacks.length; i < max; i++)
            callbacks[i](data, status, $form);
    };

    var files = $('input:file', this).fieldValue();
    var found = false;
    for (var j=0; j < files.length; j++)
        if (files[j])
            found = true;

   if (options.iframe || found) { 
       if ($.browser.safari && options.closeKeepAlive)
           $.get(options.closeKeepAlive, fileUpload);
       else
           fileUpload();
       }
   else
       $.ajax(options);

    this.trigger('form-submit-notify', [this, options]);
    return this;
    function fileUpload() {
        var form = $form[0];
        var opts = $.extend({}, $.ajaxSettings, options);

        var id = 'jqFormIO' + (new Date().getTime());
        var $io = $('<iframe id="' + id + '" name="' + id + '" />');
        var io = $io[0];
        var op8 = $.browser.opera && window.opera.version() < 9;
        if ($.browser.msie || op8) io.src = 'javascript:false;document.write("");';
        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

        var xhr = { // mock object
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {}
        };

        var g = opts.global;
        if (g && ! $.active++) $.event.trigger("ajaxStart");
        if (g) $.event.trigger("ajaxSend", [xhr, opts]);

        var cbInvoked = 0;
        var timedOut = 0;
        setTimeout(function() {
            var encAttr = form.encoding ? 'encoding' : 'enctype';
            var t = $form.attr('target'), a = $form.attr('action');
            $form.attr({
                target:   id,
                method:  'POST',
                action:   opts.url
            });
            form[encAttr] = 'multipart/form-data';
            if (opts.timeout)
                setTimeout(function() { timedOut = true; cb(); }, opts.timeout);
            $io.appendTo('body');
            io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
            form.submit();
            $form.attr({ action: a, target: t });
        }, 10);

        function cb() {
            if (cbInvoked++) return;

            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

            var ok = true;
            try {
                if (timedOut) throw 'timeout';
                var data, doc;
                doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                xhr.responseText = doc.body ? doc.body.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': opts.dataType};
                    return headers[header];
                };

                if (opts.dataType == 'json' || opts.dataType == 'script') {
                    var ta = doc.getElementsByTagName('textarea')[0];
                    xhr.responseText = ta ? ta.value : xhr.responseText;
                }
                else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
                    xhr.responseXML = toXml(xhr.responseText);
                }
                data = $.httpData(xhr, opts.dataType);
            }
            catch(e){
                ok = false;
                $.handleError(opts, xhr, 'error', e);
            }

            if (ok) {
                opts.success(data, 'success');
                if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
            }
            if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
            if (g && ! --$.active) $.event.trigger("ajaxStop");
            if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

            setTimeout(function() {
                $io.remove();
                xhr.responseXML = null;
            }, 100);
        };

        function toXml(s, doc) {
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
        };
    };
};
$.fn.ajaxForm = function(options) {
    return this.ajaxFormUnbind().bind('submit.form-plugin',function() {
        $(this).ajaxSubmit(options);
        return false;
    }).each(function() {
        $(":submit,input:image", this).bind('click.form-plugin',function(e) {
            var $form = this.form;
            $form.clk = this;
            if (this.type == 'image') {
                if (e.offsetX != undefined) {
                    $form.clk_x = e.offsetX;
                    $form.clk_y = e.offsetY;
                } else if (typeof $.fn.offset == 'function') {
                    var offset = $(this).offset();
                    $form.clk_x = e.pageX - offset.left;
                    $form.clk_y = e.pageY - offset.top;
                } else {
                    $form.clk_x = e.pageX - this.offsetLeft;
                    $form.clk_y = e.pageY - this.offsetTop;
                }
            }
            setTimeout(function() { $form.clk = $form.clk_x = $form.clk_y = null; }, 10);
        });
    });
};

$.fn.ajaxFormUnbind = function() {
    this.unbind('submit.form-plugin');
    return this.each(function() {
        $(":submit,input:image", this).unbind('click.form-plugin');
    });

};
$.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length == 0) return a;

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) return a;
    for(var i=0, max=els.length; i < max; i++) {
        var el = els[i];
        var n = el.name;
        if (!n) continue;

        if (semantic && form.clk && el.type == "image") {         
            if(!el.disabled && form.clk == el)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            continue;
        }

        var v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            for(var j=0, jmax=v.length; j < jmax; j++)
                a.push({name: n, value: v[j]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: n, value: v});
    }

    if (!semantic && form.clk) {
        var inputs = form.getElementsByTagName("input");
        for(var i=0, max=inputs.length; i < max; i++) {
            var input = inputs[i];
            var n = input.name;
            if(n && !input.disabled && input.type == "image" && form.clk == input)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

$.fn.formSerialize = function(semantic) {
    return $.param(this.formToArray(semantic));
};

$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) return;
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++)
                a.push({name: n, value: v[i]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: this.name, value: v});
    });
    return $.param(a);
};

$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
            continue;
        v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
};

$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (typeof successful == 'undefined') successful = true;

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1))
            return null;

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) return null;
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = $.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value;
                if (one) return v;
                a.push(v);
            }
        }
        return a;
    }
    return el.value;
};

$.fn.clearForm = function() {
    return this.each(function() {
        $('input,select,textarea', this).clearFields();
    });
};

$.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea')
            this.value = '';
        else if (t == 'checkbox' || t == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};

$.fn.resetForm = function() {
    return this.each(function() {
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
            this.reset();
    });
};

$.fn.enable = function(b) { 
    if (b == undefined) b = true;
    return this.each(function() { 
        this.disabled = !b 
    });
};

$.fn.select = function(select) {
    if (select == undefined) select = true;
    return this.each(function() { 
        var t = this.type;
        if (t == 'checkbox' || t == 'radio')
            this.checked = select;
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').select(false);
            }
            this.selected = select;
        }
    });
};

})(jQuery);












$(document).ready(function() {
	

	function megaHoverOver(){
		$(this).find(".sub").stop().fadeTo('fast', 1).show();
			
		//Calculate width of all ul's
		(function($) { 
			jQuery.fn.calcSubWidth = function() {
				rowWidth = 0;
				//Calculate row
				$(this).find("ul").each(function() {					
					rowWidth += $(this).width(); 
				});	
			};
		})(jQuery); 
		
			
			$(this).calcSubWidth();
			//Set Width
			$(this).find(".sub").css({'width' : rowWidth});
			
		
	}
	
	function megaHoverOut(){ 
	  $(this).find(".sub").stop().fadeTo('fast', 0, function() {
		  $(this).hide(); 
	  });
	}


	var config = {    
		 sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
		 interval: 100, // 200 number = milliseconds for onMouseOver polling interval    
		 over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
		 timeout: 100, // 400 number = milliseconds delay before onMouseOut    
		 out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
	};

	$("ul#topnav li .sub").css({'opacity':'0'});
	$("ul#topnav li").hoverIntent(config);

 

});



(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);


// модальное окно для результатов голосования
$(document).ready(function() {	



		// подсчет введенных символов
		var count_chars = $('#count_chars');
		var vote2_new   = $('#vote2');
		var vote2_info  = $('#vote2_info');
		
		function refresh_count2(obj, count_chars) {
			var count =  '';
			count = obj.val().length;
			count_chars.text(count);
		}
			
		vote2_new.bind('keyup',function(){
			refresh_count2($(this), count_chars);
		}).bind('keypress', function(){
			refresh_count2($(this), count_chars);
		});	
		// \\подсчет введенных символов


	// отправка отзыва из шаблона - правой колонки
			  var options_vote2 = { 
			  	//target: "#vote2_info",
			  	type: 'POST', 
			  	dataType: 'json',
                beforeSubmit: function()
                {
		         	var counter_char = count_chars.text();  // количество символов на момент отправки
		            if(counter_char > 250) {
		               alert('Вы превысили длину текста в 250 символов');
		               return false;
		            }	                
                    vote2_info.html('<img src="/img/loading.gif" style="position: absolute" />').fadeIn();
                },	 			  	
			  	
				success: function(msg){
						vote2_info.html(msg.message);
						if(msg.status == 1) {
							vote2_new.val('');
							count_chars.text(0);
						}
				},			  	
			  	 
			    timeout: 3000 // тайм-аут
			  };
		  
			  // привязываем событие submit к форме
			  $('#vote2Form').submit(function() { 
				    $(this).ajaxSubmit(options_vote2); 
				    return false;
			   });	



		
	
	//if mask is clicked
	$('#mask, #compare_mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});	
	
	$('.close').click(function (e) {
		e.preventDefault();
		$('#mask, #compare_mask, .window').hide();
	});		
	
	
	// вкладки на странице продуктов
	// пример вкладок с куками http://dimox.name/examples/universal-jquery-tabs-script/cookies.html

	  $('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
		  .parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
	  })


				  
	// отправка отзыва во вкладке отзывы
			  var options_review = { 
			  	target: "#review_inform", 
			  	
                beforeSubmit: function()
                {
                    $('#review_inform').html('<img src="/img/loading.gif" />').fadeIn();
                },	 			  	
			  	
				success: function(){
					$('#reviewform').css('display', 'none');
					//$('#review_inform').text( $('#review_inform').find('.errors').text());
				},			  	
			  	 
			    timeout: 3000 // тайм-аут
			  };
		  
			  // привязываем событие submit к форме
			  $('#reviewform').submit(function() { 
			    $(this).ajaxSubmit(options_review); 
			    return false;
			   });	
			   

			  
			  
			  var options_opt_form = { 
			  	target: "#OptFormInfo", 
			  	
                beforeSubmit: function()
                {
                    $('#OptFormInfo').html('<img src="/img/loading.gif" />');
                },	 			  	
			  	
				success: function(){
					var cap_field = $('#captcha_opt');
					cap_field.val(cap_field.attr('defaultValue'));
					$('#c_img').attr('src', '/verif/index.php?PHPSESSID=' + Math.random());
				},			  	
			  	 
			    timeout: 3000 // тайм-аут
			  };
		  
			  // привязываем событие submit к форме
			  $('#OptForm').submit(function() { 
			    $(this).ajaxSubmit(options_opt_form); 
			    return false;
			   });
			   
		   

		    $("a.ancLinks").click(function () {
		      var elementClick = $(this).attr("href");
		      var destination = $(elementClick).offset().top;
		      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1100 ); 
		      return false;
		    });
		    
		    $('#hide_good_link').toggle(function(){
		    	$(this).text('Показать');
		    	$('.productstable').each(function(){
		    	
		    		var count_children_no_good2 = $(this).find('.no_Good_jq');
		    		var count_children_no_good = count_children_no_good2.size();
		    		var count_children = $(this).children('tbody').children('tr').size();
		    		
		    		if(count_children_no_good == count_children) {
		    			$(this).parent().fadeOut();
		    		} else {
		    			count_children_no_good2.fadeOut();
		    		}
		    	});
		    	//$(this).css({'background-image':'url(/img/p_label.gif)','background-position':'-33px -208px'});
		    	return false;
		    }, function(){
		    	$(this).text('Скрыть');
		    	$('.no_Good_jq, .corner_container').fadeIn();
		    	//$(this).css({'background-image':'url(/img/p_label.gif)','background-position':'-33px -181px'});
		    	return false;
		    });
		    
		    
		    
	$('.del_basket').click(function(e){
		e.preventDefault();
		var drop_img = $(this).html();
		var link_img = $(this);
		if(err_mes = $(this).next()) err_mes.remove();

			                                $.ajax({
			                                    type: 'POST',                                  
			                                    url: '/includes/delete_from_basket.php',
			                                    data: 'orderid_kill=' + link_img.attr('value'),
			                                    dataType: 'json',
								                beforeSend: function()
								                {
													link_img.html('<img src="/img/loading.gif" />');
								                },	                                     
			                                    success: function(msg){
			                                    		link_img.html(drop_img);
			                                    		if(msg.code) {
			                                    			link_img.parent().parent().hide('slow').remove();
			                                    		} else {
			                                    			link_img.after('<p style="color:red">Ошибка удаления</p>');
			                                    		}																										
			                                    }
			                                }); // конец аякс
		
	});		    
		    
		    
		    
		    
		// добавление товара в корзину на ajax
		
			var URL = '/includes/ajax_basket.php';
			
			var atc = $('.add_to_cart');
			//atc.unwrap();
			atc.click(function(){
				var pid = $(this).attr('id');
				var outPut = $(this);
				$(this).attr('title', '');
				var quant  = $(this).prev().children('.qnt_text').val();
				
		
		
			                                $.ajax({
			                                    type: 'POST',                                  
			                                    url: URL,
			                                    data: 'productid=' + pid + '&qnt=' + quant,
												//data: 'productid=' + pid + '&cache=' + (new Date().getTime()),
			                                    dataType: 'json',
								                beforeSend: function()
								                {
								                	outPut.prev('.ainfo').remove();
								                    outPut.html('<img src="/img/loading.gif" />').fadeIn();
								                },	                                     
			                                    success: function(msg){
			                                    		outPut.html('');
			                                    		
			                                    		
			                                    		if(msg.tastes){
			                                    			outPut.before('<div class="ainfo module_content">' + msg.info + msg.tastes + msg.cont + '</div>');	
			                                    		} else{
			                                    			
				                                          	outPut.before('<div class="ainfo module_content">' + msg.info + msg.cont + '</div>').prev('.ainfo').delay(3000).fadeOut(400);	                                  
				                                          	$('#b_count3', '#basket_ajax').text(msg.count);
															$('#b_sum3',   '#basket_ajax').text(msg.sum);
															//alert('Товар добавлен');
			                                    		}
			                                    		
		                                          		$('.tdright').delegate('.cont', 'click', function(event){
															event.preventDefault();					  
															$('.ainfo').remove();
															//$(this).hide("slow");									
														});				                                    		
			                                    		

			                                    }
			                                }); // конец аякса	
			
			});			    
		// \\ добавление товара в корзину на ajax
			
		// выбор вкусов на ajax

			$('.tdright').delegate("select", "change", function(){
			
				var pid    = $(this).prev().val();
				var prop   = $(this).val(); // вкус, размер, цвет
				var outPut = $(this).parent().parent();
				var quant  = $(this).parent().parent().prev().children('.qnt_text').val();
				
                $.ajax({
                    type: 'POST',                                  
                    url: URL,
                    data: 'productid=' + pid + '&taste=' + prop + '&qnt=' + quant,
                    dataType: 'json',
	                beforeSend: function()
	                {
	                    outPut.html('<img src="/img/loading.gif" />').fadeIn();
	                },	                                     
                    success: function(msg){
                    			outPut.html(msg.info + msg.cont).delay(3000).fadeOut(400);;
             				                                  
                              	$('#b_count3', '#basket_ajax').text(msg.count);
								$('#b_sum3',   '#basket_ajax').text(msg.sum);
								//alert('Товар добавлен');

                    }
                }); // конец аякса					
				
				
			});
			
			
			
			
			
				
			// эффект моргания картинк продуктов	    
		  //  $('.content-subtitle-noshade-size10 img').mouseenter(function () { $(this).animate({opacity: 0.7},10).animate({opacity: 1},300)});
		    $('.zoom1').mouseenter(function () { $(this).animate({opacity: 0.5},200).animate({opacity: 1},100)});
		    
		    
		    
// скрытиый помощник
    var current_index = null;    
    
    $('#help-button').click(function(){        
        $('#help-panel').toggle(300);
    });
    
    var title_obj = $('a.title');
    title_obj.click(function(){        
         
        if(current_index != title_obj.index(this)){
            $('.collapse:visible').slideUp(500);
            title_obj.removeClass('selected');
        }        
        
        var collapse_block = $(this).parent().next();
        if(collapse_block.attr('class') == 'collapse'){
            
            if(collapse_block.is(":hidden")){
                $(this).addClass('selected');
            } else if(collapse_block.is(":visible")) {
                $(this).removeClass('selected');
            }
            collapse_block.slideToggle(500);
        }
        
        current_index = title_obj.index(this);        
    });		    
// \\скрытиый помощник		    
		    
		    
			// 3D облако тегов
			var rnumber = Math.floor(Math.random()*9999999);
			var so = new SWFObject("/img/tagcloud.swf?r="+rnumber, "tagcloudflash", "200", "150", "9");
			var tags = new String('<a rel="nofollow" style="font-size:14pt;" href="/catid=2">Аминокислоты</a> <a style="font-size:14pt;" rel="nofollow" href="/catid=1">Аксессуары</a> <a style="font-size:14pt;" href="/catid=3" rel="nofollow">Батончики</a> <a style="font-size:12pt;" href="/catid=4" rel="nofollow">Витамины и минералы</a> <a style="font-size:9pt;" href="/catid=5" rel="nofollow">Гейнеры</a> <a style="font-size:14pt;" href="/catid=18" rel="nofollow">Протеиновые коктейли</a> <a style="font-size:9pt;" href="/catid=6" rel="nofollow">Жиросжигатели</a> <a style="font-size:19pt;" href="/catid=8" rel="nofollow">Креатин</a> <a style="font-size:11pt;" href="/catid=9" rel="nofollow">Карнитин</a> <a style="font-size:16pt;" href="/catid=17" rel="nofollow">Тестостерон</a> <a style="font-size:22pt;" href="/catid=10" rel="nofollow">Протеины</a> <a style="font-size:12pt;" href="/catid=11" rel="nofollow">Препараты</a> <a style="font-size:9pt;" href="/catid=19" rel="nofollow">Спортивная одежда</a> <a style="font-size:9pt;" href="/catid=13" rel="nofollow">Энергетики</a> <a style="font-size:15pt;" href="/catid=20" rel="nofollow">Распродажа</a> <a style="font-size:22pt;" href="/brands/11" rel="nofollow">Inkospor</a> <a style="font-size:9pt;" href="/brands/1" rel="nofollow">Multipower</a> <a style="font-size:14pt;" href="/brands/14" rel="nofollow">MuscleTech</a> <a style="font-size:9pt;" href="/brands/6" rel="nofollow">PowerBar</a> <a style="font-size:9pt;" href="/brands/13" rel="nofollow">Powerblock</a> <a style="font-size:10pt;" href="/brands/10" rel="nofollow">Powerhouse</a> <a style="font-size:14pt;" href="/brands/3" rel="nofollow">Universal nutrition</a> <a style="font-size:10pt;" href="/brands/7" rel="nofollow">VP Laboratory</a> <a style="font-size:22pt;" href="/brands/2" rel="nofollow">Weider</a> <a style="font-size:9pt;" href="/brands/9" rel="nofollow">Bodieforz</a> <a style="font-size:9pt;" href="/brands/15" rel="nofollow">Cytogenix</a>');
			tags = tags.replace(/"/g,"'");
			tags = tags.replace(/"/g,"'");
			tags = tags.replace(/<noindex>/gi,"");
			tags = tags.replace(/<\/noindex>/gi,"");
			tags = "<tags>" + tags + "</tags>";
			so.addParam("wmode", "transparent");
			so.addParam("allowScriptAccess", "always");
			so.addVariable("minFontSize", "8");
			so.addVariable("maxFontSize", "14");
			so.addVariable("tcolor", "0x1D3D61");
			so.addVariable("tcolor2", "0x4D6D91");
			so.addVariable("hicolor", "0xd193978");
			so.addVariable("tspeed", "200");
			so.addVariable("distr", "true");
			so.addVariable("mode", "tags");
			so.addVariable("tagcloud", tags);
			so.write("d3cloud_block");
		
			
			// победи жир
	 		var so3 = new SWFObject("/images/f_granade.swf","mymovie","168","168","7","#000000");
	 		
			so3.addParam("quality", "height");
			so3.addParam("wmode", "transparent");
	 		so3.write("granade");	
	 		
			// FBFR
	 		var so4 = new SWFObject("/images/flash/logoFlash_fbfr.swf","mymovie","168","168","7","#000000");
			so4.addParam("quality", "height");
			so4.addParam("wmode", "transparent");
	 		so4.write("fbfr");	 		
			   
 }); 			  
