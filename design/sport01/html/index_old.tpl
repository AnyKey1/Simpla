

<!DOCTYPE html>
{*
	Общий вид страницы
	Этот шаблон отвечает за общий вид страниц без центрального блока.
*}
<html>
<head>
	<base href="{$config->root_url}/"/>
	<title>{$meta_title|escape} Киев , Херсон , Одесса</title>
	
	{* Метатеги *}
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="description" content="{$meta_description|escape}" />
	<meta name="keywords"    content="{$meta_keywords|escape}" />
	<meta name="viewport" content="width=1024"/>
	
	{* Стили *}
	<link href="design/{$settings->theme|escape}/css/style.css" rel="stylesheet" type="text/css" media="screen"/>
	<link href="design/{$settings->theme|escape}/images/favicon.ico" rel="icon"          type="image/x-icon"/>
	<link href="design/{$settings->theme|escape}/images/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
	
	{* JQuery *}
	<script src="js/jquery/jquery.js"  type="text/javascript"></script>
	
	{* Всплывающие подсказки для администратора *}
	{if $smarty.session.admin == 'admin'}
	<script src ="js/admintooltip/admintooltip.js" type="text/javascript"></script>
	<link   href="js/admintooltip/css/admintooltip.css" rel="stylesheet" type="text/css" /> 
	{/if}
	
	{* Увеличитель картинок *}
	<script type="text/javascript" src="js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" href="js/fancybox/jquery.fancybox-1.3.4.css" type="text/css" media="screen" />
	
	{* Ctrl-навигация на соседние товары *}
	<script type="text/javascript" src="js/ctrlnavigate.js"></script>           
	
	{* Аяксовая корзина *}
	<script src="design/{$settings->theme}/js/jquery-ui.min.js"></script>
	<script src="design/{$settings->theme}/js/ajax_cart.js"></script>
	
	{* js-проверка форм *}
	<script src="/js/baloon/js/baloon.js" type="text/javascript"></script>
	<link   href="/js/baloon/css/baloon.css" rel="stylesheet" type="text/css" /> 
	
	{* Автозаполнитель поиска *}
	{literal}
	<script src="js/autocomplete/jquery.autocomplete-min.js" type="text/javascript"></script>
	<style>
	.autocomplete-w1 { position:absolute; top:0px; left:0px; margin:6px 0 0 6px; /* IE6 fix: */ _background:none; _margin:1px 0 0 0; }
	.autocomplete { border:1px solid #999; background:#FFF; cursor:default; text-align:left; overflow-x:auto;  overflow-y: auto; margin:-6px 6px 6px -6px; /* IE6 specific: */ _height:350px;  _margin:0; _overflow-x:hidden; }
	.autocomplete .selected { background:#F0F0F0; }
	.autocomplete div { padding:2px 5px; white-space:nowrap; }
	.autocomplete strong { font-weight:normal; color:#3399FF; }
	</style>	
	<script>
	$(function() {
		//  Автозаполнитель поиска
		$(".input_search").autocomplete({
			serviceUrl:'ajax/search_products.php',
			minChars:1,
			noCache: false, 
			onSelect:
				function(value, data){
					 $(".input_search").closest('form').submit();
				},
			fnFormatResult:
				function(value, data, currentValue){
					var reEscape = new RegExp('(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'].join('|\\') + ')', 'g');
					var pattern = '(' + currentValue.replace(reEscape, '\\$1') + ')';
	  				return (data.image?"<img align=absmiddle src='"+data.image+"'> ":'') + value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
				}	
		});
	});
	</script>
	{/literal}
		
			
</head>
<body>

{literal}
<!-- Yandex.Metrika counter -->
<div style="display:none;"><script type="text/javascript">
(function(w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter12912847 = new Ya.Metrika({id:12912847, enableAll: true, trackHash:true, webvisor:true});
        }
        catch(e) { }
    });
})(window, "yandex_metrika_callbacks");
</script></div>
<script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript" defer="defer"></script>
<noscript><div><img src="//mc.yandex.ru/watch/12912847" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

{/literal}
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-18582070-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<div class="nav2">

  	<ul type="none" id="b"><li class="nobl"><a class="topmenulink" title="Интернет-магазин спортивного питания" href="/">Главная</a></li>
<li><a class="topmenulink" title="" href="shop.php?op=price">Прайс</a></li>
<li><a class="topmenulink" title="" href="deliver.html">Доставка</a></li>
<li><a class="topmenulink" title="" href="news.html">Новости</a></li>
<li><a class="topmenulink" title="" href="contacts.html">Контакты</a></li>
<li><a class="topmenulink" title="" href="/shop.php?op=browse&amp;catid=20">Распродажа</a></li>
<li><a class="topmenulink" title="" href="/shop.php?op=article">Статьи</a></li>
<li><a class="topmenulink" title="" href="what.html"><span class="sale_menu_item">Как выбрать</span></a></li>
<li><a class="topmenulink" title="" href="/index.php?show=faq&amp;pg=27&amp;act=Question&amp;id=6">Вопросы-Ответы</a></li>
<li class="nobr"><a class="topmenulink" title="" href="/forum/">Форум</a></li>
</ul>
</div>


	<!-- Верхняя строка -->
	<div id="top_background">
	<div id="top">
	
		<!-- Меню -->
		<ul id="menu">
			{foreach name=page from=$pages item=p}
				{* Выводим только страницы из первого меню *}
				{if $p->menu_id == 1}
				<li {if $page && $page->id == $p->id}class="selected"{/if}>
					<a data-page="{$p->id}" href="{$p->url}">{$p->name|escape}</a>
				</li>
				{/if}
			{/foreach}
		</ul>
		<!-- Меню (The End) -->

		<!-- Корзина -->
		<div id="cart_informer">
			{* Обновляемая аяксом корзина должна быть в отдельном файле *}
			{include file='cart_informer.tpl'}
		</div>
		<!-- Корзина (The End)-->

		<!-- Вход пользователя -->
		<div id="account">
			{if $user}
				<span id="username">
					<a href="user">{$user->name}</a>{if $group->discount>0},
					ваша скидка &mdash; {$group->discount}%{/if}
				</span>
				<a id="logout" href="user/logout">выйти</a>
			{else}
				<a id="register" href="user/register">Регистрация</a>
				<a id="login" href="user/login">Вход</a>
			{/if}
			
		</div>
		<!-- Вход пользователя (The End)-->

	
	<!-- Верхняя строка (The End)-->
	
	
	<!-- Шапка -->
	<div id="header">
		<div id="logo">
			<a href="/"><img src="design/{$settings->theme|escape}/images/logo.png" title="{$settings->site_name|escape}" alt="{$settings->site_name|escape}"/></a>
			</div>
			<!--<div id="logo1"><a href="http://oneua.net/onlinetrener/"><img src="had1.png" " alt="Вопрос тренеру" Title="Нажмите чтобы оставить вопрос нашему тренеру"></a></div> -->	
		<div id="contact">
		<div><!--<a href="http://vk.com/sport_ukr" target="_blank"><Img src="http://oneua.net/vk.png"  Width="100" Height="25" Alt="Мы Вконтакте" Title="Наша группа Вконтакте"></a><a href="callto:viki.mob">  <Img src="http://oneua.net/skype.png"  Width="30" Height="30"  Title="Скайп"></a> <span id="phone1"><sup><a href="callto:viki.mob">viki.mob</a></sup></span>--></div>
			
		<!--	тел: <span id="phone">(050)604-16-69</span><br />
(0552)<span id="phone"> 44-44-11</span><br>
			
			<a href="/dostavka_i_oplata"><font color="#FF0000"><b>Экспресс доставка</b></font></a> -->	
			
			  
		</div>	
		
	</div>
	<!-- Шапка (The End)--> 


	<!-- Вся страница --> 
	<div id="main">
	
		<!-- Основная часть --> 
		<div id="content">
			{$content}
		</div>
		<!-- Основная часть (The End) --> 

		<div id="left">

			<!-- Поиск-->
			<div id="search">
				<form action="products">
					<input class="input_search" type="text" name="keyword" value="{$keyword}" placeholder="Поиск товара"/>
					<input class="button_search" value="" type="submit" />
				</form>
			</div>
			<!-- Поиск (The End)-->

			
			<!-- Меню каталога -->
			<div id="catalog_menu">
					
			{* Рекурсивная функция вывода дерева категорий *}
			{function name=categories_tree}
			{if $categories}
			<ul>
			{foreach $categories as $c}
				{* Показываем только видимые категории *}
				{if $c->visible}
					<li>
						{if $c->image}<img src="{$config->categories_images_dir}{$c->image}" alt="{$c->name}">{/if}
						<a {if $category->id == $c->id}class="selected"{/if} href="catalog/{$c->url}" data-category="{$c->id}">{$c->name}</a>
						{categories_tree categories=$c->subcategories}
					</li>
				{/if}
			{/foreach}
			</ul>
			{/if}
			{/function}
			{categories_tree categories=$categories}
			</div>
			<!-- Меню каталога (The End)-->		
	
			
			<!-- Все бренды -->
			{* Выбираем в переменную $all_brands все бренды *}
			{get_brands var=all_brands}
			{if $all_brands}
			<div id="all_brands">
				<h2>Все бренды:</h2>
				{foreach $all_brands as $b}	
					{if $b->image}
					<a href="brands/{$b->url}"><img src="{$config->brands_images_dir}{$b->image}" alt="{$b->name|escape}"></a>
					{else}
					<a href="brands/{$b->url}">{$b->name}</a>
					{/if}
				{/foreach}
			</div>
			{/if}
			<!-- Все бренды (The End)-->

			<!-- Выбор валюты -->
			{* Выбор валюты только если их больше одной *}
			{if $currencies|count>1}
			<div id="currencies">
				<h2>Валюта</h2>
				<ul>
					{foreach from=$currencies item=c}
					{if $c->enabled} 
					<li class="{if $c->id==$currency->id}selected{/if}"><a href='{url currency_id=$c->id}'>{$c->name|escape}</a></li>
					{/if}
					{/foreach}
				</ul>
			</div> 
			{/if}
			<!-- Выбор валюты (The End) -->	

			
			<!-- Просмотренные товары -->
			{get_browsed_products var=browsed_products limit=20}
			{if $browsed_products}
					


				<h2>Вы просматривали:</h2>
				<ul id="browsed_products">
				{foreach $browsed_products as $browsed_product}
					<li>
					<a href="products/{$browsed_product->url}"><img src="{$browsed_product->image->filename|resize:50:50}" alt="{$browsed_product->name}" title="{$browsed_product->name}"></a>
					</li>
				{/foreach}
				</ul>
			{/if}
			<!-- Просмотренные товары (The End)-->
			
			
			<!-- Меню блога -->
			{* Выбираем в переменную $last_posts последние записи *}
			{get_posts var=last_posts limit=5}
			{if $last_posts}
			<div id="blog_menu">
				<h2>Новые записи в <a href="blog">блоге</a></h2>
				{foreach $last_posts as $post}
				<ul>
					<li data-post="{$post->id}">{$post->date|date} <a href="blog/{$post->url}">{$post->name|escape}</a></li>
				</ul>
				{/foreach}
			</div>
			{/if}
			<!-- Просмотренные товары -->
			
		</div>			

	</div>
	<!-- Вся страница (The End)--> 
	
	<!-- Футер -->
	<div id="footer">
		
			<!-- begin WebMoney Transfer : accept label -->
<a href="http://www.megastock.ru/" target="_blank"><img src="acc_blue_on_white_ru.png" alt="www.megastock.ru" border="0"></a>
<!-- end WebMoney Transfer : accept label -->
			<!-- begin WebMoney Transfer : attestation label --> 
<a href="https://passport.webmoney.ru/asp/certview.asp?wmid=340275543353" target=_blank><IMG SRC="http://www.webmoney.ru/img/icons/88x31_wm_v_blue_on_white_ru.png" title="Здесь находится аттестат нашего WM индификатора 340275543353" border="0"><br><font size=1>Проверить аттестат</font></a></br>

<!-- HotLog -->
<script type="text/javascript" language="javascript">
hotlog_js="1.0"; hotlog_r=""+Math.random()+"&s=2231092&im=68&r="+
escape(document.referrer)+"&pg="+escape(window.location.href);
</script>
<script type="text/javascript" language="javascript1.1">
hotlog_js="1.1"; hotlog_r+="&j="+(navigator.javaEnabled()?"Y":"N");
</script>
<script type="text/javascript" language="javascript1.2">
hotlog_js="1.2"; hotlog_r+="&wh="+screen.width+"x"+screen.height+"&px="+
(((navigator.appName.substring(0,3)=="Mic"))?screen.colorDepth:screen.pixelDepth);
</script>
<script type="text/javascript" language="javascript1.3">
hotlog_js="1.3";
</script>
<script type="text/javascript" language="javascript">
hotlog_r+="&js="+hotlog_js;
document.write('<a href="http://click.hotlog.ru/?2231092" target="_blank"><img '+
'src="http://hit40.hotlog.ru/cgi-bin/hotlog/count?'+
hotlog_r+'" border="0" width="88" height="31" title="" alt="HotLog"><\/a>');
</script>
<noscript>
<img
src="http://hit40.hotlog.ru/cgi-bin/hotlog/count?s=2231092&im=68" border="0"
width="88" height="31" title="" alt="HotLog">
</noscript></br>
<!-- /HotLog -->
<!-- end WebMoney Transfer : attestation label -->	
	</div>
	<!-- Футер (The End)--> 
	
</body>
</html>