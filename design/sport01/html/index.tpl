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
	<link rel="stylesheet" href="design/{$settings->theme|escape}/css/re_style3_4.css" type="text/css" media="screen, projection">
		<link href="design/{$settings->theme|escape}/css/idealforms.css" rel="stylesheet" type="text/css" media="screen">
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
		

		<meta name="geo.placename" content="Нагорная ул., Москва, Россия">
		<meta name="geo.position" content="55.677220;37.603645">
		<meta name="geo.region" content="">
		<meta name="ICBM" content="55.677220, 37.603645">		

			
		
		
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script><style type="text/css"></style>
		<script src="design/{$settings->theme|escape}/js/jquery.idealforms2.js"></script>

		<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon">			
</head>	<body id="gallery">



		

   
</head>	<body id="gallery">
	
	
<div class="nav2">
<ul id="b"><li class="nobl">

<a class="topmenulink" title="Интернет-магазин спортивного питания" href="/">Главная</a></li>
			{foreach name=page from=$pages item=p}
				{* Выводим только страницы из первого меню *}
				{if $p->menu_id == 1}
				
				<li {if $page && $page->id == $p->id}{/if}>
					<a class="topmenulink" href="{$p->url}">{$p->name|escape}</a>
				</li>
			
				{/if}
			{/foreach}
				<li class="nobr"><a class="topmenulink" title="" href="/forum/">Форум</a></li>
		</ul>
  	
</div>	
{include file='pages.tpl'}
		<div id="header">
			<div id="header_wrap">
				<div id="logo">
					<a title="Главная - Интернет-магазин спортивного питания" href="/"><img alt="Логотип" src="design/{$settings->theme|escape}/images/logo.png"></a>
				</div>
				<div id="phones">
					<div class="phones">
						 (000) 000-00-00
					</div>
					<div class="phones multi">
						
					</div>

					<div id="email">
						E-mail: <a href="mailto:example@example.com" title="">example@example.com</a>
					</div>
				</div>
				<div id="search">
					<form action="products?" style="margin: 0; padding: 0">
					
						<input type="hidden" name="{$keyword}" value="search">
						<input type="hidden" name="keyword" value="">
						<table>
							<tbody><tr>
								<td>
																<input x-webkit-speech="" speech="" onwebkitspeechchange="var arr = this.value.split('...'); this.value = arr[1] + '...'; this.form.submit();" type="text"  name="q" id="s_query" value="Поиск..." maxlength="160">
								</td>
								<td>
								<input type="image" src="design/{$settings->theme|escape}/images/search_button.png" value="Найти">
								</td>
							</tr>
						</tbody></table>
					</form>
				</div>
				
				
				<div id="authform">
					<div id="auth_content">
					
						<div id="through">
							Войти через:
						</div>
						<a title="Используйте логин от социальной сети" rel="nofollow" href="/" class="loginza" style="text-decoration: line-through !important; "> <img src="design/{$settings->theme|escape}/images/social.png" alt="Войти через социальную сеть" style="outline: rgb(0, 0, 0) dashed 1px; "> </a>
						<div class="clr"></div>						
						

						
						<form id="authfotm2" class="form login_form" method="post">
							<div>
								<input type="hidden" name="posted2" value="true">
							</div>
							<input type="text"  size="20" name="email" data-format="email" data-notice="Введите email" value="{$email|escape}" maxlength="255">
							<input type="password" name="password" data-format=".+" data-notice="Введите пароль" value="">
							<input type="submit" name="login" value="Войти">
						</form>
						<div>
							<a id="register" href="user/register">Регистрация</a> | <noindex class="clrNoIndex"><a rel="nofollof" href="user/password_remind" title="">Забыли пароль?</a></noindex>
						</div>
						
						
						
					</div>
				</div>
				<div id="basket_wrap">
				
						<a title="Оформить покупки" id="bsk_name" href="./cart/">Корзина:</a>
					
										<div id="basket">
					<a title="Оформить покупки" id="cart_link" href="./cart/">&nbsp;</a>
						<div id="basket_ajax">
							<table>
							<div id="cart_informer">
			{* Обновляемая аяксом корзина должна быть в отдельном файле *}
			{include file='cart_informer.tpl'}
		</div>
								</table>
						</div>
					</div>
				</div>

				<img id="main_img" src="design/{$settings->theme|escape}/images/main_img2.jpg" alt="Спортивное питание Окфит">
			</div>
		</div>
		<!-- #header-->
		
		<div id="wrapper">
			<div id="middle">
				<div id="container">
					<div id="content">
<div class="line-box">
	<div class="content-txtbox-noshade">
        	
            
			
	</div>
</div>




<h2 class="module_name">Спортивный магазин "<span class="decor_h1">example.com</span>"</h2>
<div class="module_line"></div>
<div class="clr"></div>
<h1 class="module_name m_header">Интернет-магазин спортивного питания <span class="decor_h1"></span>! Купить питание для бодибилдинга и фитнеса в Украине.</h1>
<div class="clr"></div>












{$content}


<div class="content_box">  
<div id="brands">	
						<div class="clr"></div>
						<div class="module_name">
							Бренды
						</div>
						<div class="module_line"></div>
						<table cellspacing="10" class="vendor_table">
							<tbody>
								<tr>
									<td><a title="Продукция VP_laboratory" href="/brands/7"> <div id="vr_1"></div> </a></td>
									<td><a title="Официальный представитель производителя спортивного питания компании MuscleTech в России" href="/brands/14"> <div id="vr_2"></div> </a></td>
									<td><a title="Продукция Weider" href="/brands/2"> <div id="vr_3"></div> </a></td>
									<td><a title="Аксессуары для занятий спортом (перчатки, бинты, ремни, крюки...)" href="/brands/26"> <div id="vr_4"></div> </a></td>
									<td><a title="Продукция Universal Nutrition" href="/brands/3"> <div id="vr_5"></div> </a></td>
								</tr>
								<tr>
									<td><a title="Продукция Olimp Nutrition" href="/brands/31"> <div id="vr_6"></div> </a></td>
									<td><a title="Продукция Prolab" href="/brands/29"> <div id="vr_7"></div> </a></td>
									<td><a title="Продукция Inkospor" href="/brands/11"> <div id="vr_8"></div> </a></td>
									<td><a title="Gaspari Nutrition" href="/brands/27"> <div id="vr_9"></div> </a></td>
									<td><a title="Продукция VAMP" href="/brands/32"> <div id="vr_10"></div> </a></td>
								</tr>
								<tr>
									<td><a title="Продукция Twinlab" href="/brands/Twinlab"> <div id="vr_11"></div> </a></td>
									<td><a title="Продукция Grenade" href="/brands/38"> <div id="vr_21"></div> </a></td>
									<td><a title="Nutrex" href="/brands/33"> <div id="vr_13"></div> </a></td>
									<td><a title="Продукция MHP" href="/brands/22"> <div id="vr_14"></div> </a></td>
									<td><a title="Продукция Nature’s Best" href="/brands/20"> <div id="vr_15"></div> </a></td>
								</tr>
								<tr>
									<td><a title="Продукция PowerBar" href="/brands/6"> <div id="vr_16"></div> </a></td>
									<td><a title="Multipower" href="/brands/1"> <div id="vr_17"></div> </a></td>
									<td><a title="Max Muscle" href="/brands/35"> <div id="vr_18"></div> </a></td>
									<td><a title="API" href="/brands/23"> <div id="vr_19"></div> </a></td>
									<td><a title="Спортивное питание Natrol" href="/brands/34"> <div id="vr_20"></div> </a></td>
								</tr>
								<tr>
									<td><a title="Продукция Six Star" href="/brands/19"> <div id="vr_12"></div> </a></td>
									<td><a title="Спортивное питание BSN" href="/brands/37"> <div id="vr_22"></div> </a></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>								
								
							</tbody>
						</table>
					</div>	
</div>					


					</div><!-- #content-->
				</div><!-- #container-->
				
				<div class="sidebar" id="sideLeft">				


	<div class="set_idealform idealform">
		<select id="site-select" name="/brands/">
			<option value="0" id="prodaction">Производитель</option>
<option value="biotech_eu">biotech_eu</option><option value="9">Bodieforz</option><option value="37">BSN</option><option value="15">Cytogenix</option><option value="27">Gaspari Nutrition</option><option value="38">Grenade</option><option value="11">Inkospor</option><option value="35">Max Muscle</option><option value="22">MHP</option><option value="1">Multipower</option><option value="14">MuscleTech</option><option value="34">Natrol</option><option value="20">Nature’s Best</option><option value="33">Nutrex</option><option value="31">Olimp</option><option value="6">PowerBar</option><option value="13">Powerblock</option><option value="10">Powerhouse</option><option value="29">Prolab</option><option value="26">Schiek</option><option value="19">Six Star</option><option value="25">Sport Press</option><option value="21">Twinlab</option><option value="3">Universal nutrition</option><option value="24">USP Lab</option><option value="32">VAMP</option><option value="7">VP Laboratory</option><option value="2">Weider</option>
		</select><ul class="idealselect" style="width: 226px; "><li><ul style="height: 420px; width: 224px; display: none; "><li><a href="/brands/biotech_eu">biotech_eu</a></li><li><a href="#">Bodieforz</a></li><li><a href="#">BSN</a></li><li><a href="#">Cytogenix</a></li><li><a href="#">Gaspari Nutrition</a></li><li><a href="#">Grenade</a></li><li><a href="#">Inkospor</a></li><li><a href="#">Max Muscle</a></li><li><a href="#">MHP</a></li><li><a href="#">Multipower</a></li><li><a href="#">MuscleTech</a></li><li><a href="#">Natrol</a></li><li><a href="#">Nature’s Best</a></li><li><a href="#">Nutrex</a></li><li><a href="#">Olimp</a></li><li><a href="#">PowerBar</a></li><li><a href="#">Powerblock</a></li><li><a href="#">Powerhouse</a></li><li><a href="#">Prolab</a></li><li><a href="#">Schiek</a></li><li><a href="#">Six Star</a></li><li><a href="#">Sport Press</a></li><li><a href="#">Twinlab</a></li><li><a href="#">Universal nutrition</a></li><li><a href="#">USP Lab</a></li><li><a href="#">VAMP</a></li><li><a href="#">VP Laboratory</a></li><li><a href="#">Weider</a></li></ul></li></ul>
	</div>


<!-- Меню с подменю -->

	



<div class="module">
  <div class="module_name">Каталог</div>
  <div class="module_line"></div>
  <div class="clr"></div>
  <div id="myslidemenu" class="module_content">
  <ul id="topnav">
  <li class="group"><a href="/catalog/aminokisloty" style="border-top-style: none; "><span class="chief">Аминокислоты</span>
  <div class="rightarrowclass"></div></a>
  <div class="sub" style="opacity: 0; ">
  <ul><li><a href="/catalog/zhidkie_aminokisloty" style="border-top-style: none; ">Жидкие аминокислоты</a></li>
  <li><a href="op=browse&amp;catid=32" style="border-top-style: none; ">Аминокислотные комплексы</a></li>
  <li><a href="op=browse&amp;catid=33" style="border-top-style: none; ">BCAA</a></li>
  <li><a href="op=browse&amp;catid=34" style="border-top-style: none; ">Глютамин</a></li>
  <li><a href="op=browse&amp;catid=35" style="border-top-style: none; ">Аргинин</a></li>
  <li><a href="op=browse&amp;catid=88" style="border-top-style: none; border-bottom-style: none; ">Другие аминокислоты</a></li>
  </ul></div></li>
  <li class="group"><a href="op=browse&amp;catid=3" title="">Батончики<div class="rightarrowclass"></div></a>
  <div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=74">Заменители пищи</a></li><li><a href="op=browse&amp;catid=36">Протеиновые батончики</a></li><li><a href="op=browse&amp;catid=37">Энергетические батончики</a></li><li><a href="op=browse&amp;catid=38">Батончики с L-карнитином</a></li><li><a href="op=browse&amp;catid=39" style="border-bottom-style: none; ">Другие батончики</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=4" title="">Витамины и минералы<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=42">Магний</a></li><li><a href="op=browse&amp;catid=40">Витамины и минералы</a></li><li><a href="op=browse&amp;catid=41" style="border-bottom-style: none; ">Изотоники</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=91" title="">Активное долголетие<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=59">Жирные кислоты</a></li><li><a href="op=browse&amp;catid=93">Для зрения</a></li><li><a href="op=browse&amp;catid=94">Для простаты</a></li><li><a href="op=browse&amp;catid=95">Антиоксиданты</a></li><li><a href="op=browse&amp;catid=96">Для печени и ЖКТ</a></li><li><a href="op=browse&amp;catid=97">Другое</a></li><li><a href="op=browse&amp;catid=92" style="border-bottom-style: none; ">Коэнзим Q10</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=5" title="">Гейнеры</a></li><li class="group"><a href="op=browse&amp;catid=8" title=""><span class="chief">Креатин</span><div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=45">Моногидрат креатина</a></li><li><a href="op=browse&amp;catid=46">Креатин с транспортом</a></li><li><a href="op=browse&amp;catid=47">Креатиновые смеси</a></li><li><a href="op=browse&amp;catid=76" style="border-bottom-style: none; ">Креатиновые продукты</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=6" title="">Жиросжигатели<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=43">Термогеники</a></li><li><a href="op=browse&amp;catid=90">Липотропики</a></li><li><a href="op=browse&amp;catid=44">Подавление аппетита</a></li><li><a href="op=browse&amp;catid=89" style="border-bottom-style: none; ">Блокаторы</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=9"><span class="chief">Л-карнитин</span><div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=48">Карнитин в ампулах</a></li><li><a href="op=browse&amp;catid=49">Концентраты карнитина</a></li><li><a href="op=browse&amp;catid=51">Капсулы и таблетки</a></li><li><a href="op=browse&amp;catid=52" style="border-bottom-style: none; ">Карнитин в порошке</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=17">Повышение тестостерона</a></li><li class="group"><a href="op=browse&amp;catid=10"><span class="chief">Протеины</span><div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=75">Серия 80</a></li><li><a href="op=browse&amp;catid=53">Сывороточные протеины</a></li><li><a href="op=browse&amp;catid=54">Многокомпонентные протеины</a></li><li><a href="op=browse&amp;catid=55">Сывороточные изоляты</a></li><li><a href="op=browse&amp;catid=56" style="border-bottom-style: none; ">Другие протеины</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=11">Специальные препараты<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=57">Нитробустеры</a></li><li><a href="op=browse&amp;catid=58">Восстановители</a></li><li><a href="op=browse&amp;catid=84">Анаболические комплексы</a></li><li><a href="op=browse&amp;catid=62" style="border-bottom-style: none; ">Другие продукты</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=80">Спортивные напитки<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=50">Напитки с L-карнитином</a></li><li><a href="op=browse&amp;catid=82">Энергетические напитки</a></li><li><a href="op=browse&amp;catid=83">Изотоники +</a></li><li><a href="op=browse&amp;catid=18" style="border-bottom-style: none; ">Готовые протеиновые коктейли</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=19">Спортивная одежда<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=67">Перчатки</a></li><li><a href="op=browse&amp;catid=68" style="border-bottom-style: none; ">Одежда</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=23">Спортивный инвентарь</a></li><li class="group"><a href="op=browse&amp;catid=12">Для суставов и связок<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=63">Глюкозамин и Хондроитин</a></li><li><a href="op=browse&amp;catid=64" style="border-bottom-style: none; ">Желатин</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=13">Энергетики<div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=65">Гуарана и кофеин</a></li><li><a href="op=browse&amp;catid=66" style="border-bottom-style: none; ">Углеводные энергетики</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=1"><span class="chief">Aксессуары</span><div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=69">Шейкеры</a></li><li><a href="op=browse&amp;catid=70">Бутылки</a></li><li><a href="op=browse&amp;catid=71">Инвентарь</a></li><li><a href="op=browse&amp;catid=72">Таблетницы</a></li><li><a href="op=browse&amp;catid=73" style="border-bottom-style: none; ">Другое</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=79">Литература</a></li><li class="group"><a href="op=browse&amp;catid=20"><span class="chief red2">Распродажа</span><div class="rightarrowclass"></div></a><div class="sub" style="opacity: 0; "><ul><li><a href="op=browse&amp;catid=85">Распродажа</a></li><li><a href="op=browse&amp;catid=87" style="border-bottom-style: none; ">Специальное предложение</a></li></ul></div></li><li class="group"><a href="op=browse&amp;catid=77" style="border-bottom-style: none; ">Питание в пост</a></li></ul></div><div style="height: 718px;"></div></div>
<!--// Меню с подменю -->



<div class="module" id="news_mod">
  <div class="module_name">Новости</div>
  <div class="module_line"></div>
  <div class="clr"></div>
  <div class="module_content">
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
			<!-- Просмотренные товары --></div>
</div>
<div class="module">
  <div class="module_name">ТОП 50 продаж<br>
    за месяц</div>
  <div class="module_line"></div>
  <div class="clr"></div>
  <div class="module_content module2" id="top50_2"> <a title="Рейтинг самых покупаемых продуктов спортивного питания" href="/op=top50"> <img alt="Рейтинг самых популярных продуктов спортивного питания" src="design/{$settings->theme|escape}/images/top50.jpg" width="152" height="166"> </a> </div>
</div>


   

<div class="module">
  <div class="module_name"> Оставьте отзыв </div>
  <div class="module_line"></div>
  <div class="clr"></div>
  <div class="module_content module2"> <a rel="nofollow" title="Оставьте отзыв на Яндекс.Маркете" target="_blank" href="http://market.yandex.ru/grade-shop.xml?shop_id=00000" style="text-decoration: line-through !important; "> <img width="192" height="83" alt="Оставьте отзыв на Яндекс.Маркете" src="design/{$settings->theme|escape}/images/market.gif" style="outline: rgb(0, 0, 0) dashed 1px; "> </a> </div>
</div>






<div class="module">
  <div class="module_name">Облако тегов</div>
  <div class="module_line"></div>
  <div class="clr"></div>
  <div class="module_content module2">
    <div id="d3cloud_block"><embed type="application/x-shockwave-flash" src="/img/tagcloud.swf?r=6310036" width="200" height="150" style="" id="tagcloudflash" name="tagcloudflash" quality="high" wmode="transparent" allowscriptaccess="always" flashvars="minFontSize=8&amp;maxFontSize=14&amp;tcolor=0x1D3D61&amp;tcolor2=0x4D6D91&amp;hicolor=0xd193978&amp;tspeed=200&amp;distr=true&amp;mode=tags&amp;tagcloud=&lt;tags&gt;&lt;a rel='nofollow' style='font-size:14pt;' href='/catid=2'&gt;Аминокислоты&lt;/a&gt; &lt;a style='font-size:14pt;' rel='nofollow' href='/catid=1'&gt;Аксессуары&lt;/a&gt; &lt;a style='font-size:14pt;' href='/catid=3' rel='nofollow'&gt;Батончики&lt;/a&gt; &lt;a style='font-size:12pt;' href='/catid=4' rel='nofollow'&gt;Витамины и минералы&lt;/a&gt; &lt;a style='font-size:9pt;' href='/catid=5' rel='nofollow'&gt;Гейнеры&lt;/a&gt; &lt;a style='font-size:14pt;' href='/catid=18' rel='nofollow'&gt;Протеиновые коктейли&lt;/a&gt; &lt;a style='font-size:9pt;' href='/catid=6' rel='nofollow'&gt;Жиросжигатели&lt;/a&gt; &lt;a style='font-size:19pt;' href='/catid=8' rel='nofollow'&gt;Креатин&lt;/a&gt; &lt;a style='font-size:11pt;' href='/catid=9' rel='nofollow'&gt;Карнитин&lt;/a&gt; &lt;a style='font-size:16pt;' href='/catid=17' rel='nofollow'&gt;Тестостерон&lt;/a&gt; &lt;a style='font-size:22pt;' href='/catid=10' rel='nofollow'&gt;Протеины&lt;/a&gt; &lt;a style='font-size:12pt;' href='/catid=11' rel='nofollow'&gt;Препараты&lt;/a&gt; &lt;a style='font-size:9pt;' href='/catid=19' rel='nofollow'&gt;Спортивная одежда&lt;/a&gt; &lt;a style='font-size:9pt;' href='/catid=13' rel='nofollow'&gt;Энергетики&lt;/a&gt; &lt;a style='font-size:15pt;' href='/catid=20' rel='nofollow'&gt;Распродажа&lt;/a&gt; &lt;a style='font-size:22pt;' href='/brands/11' rel='nofollow'&gt;Inkospor&lt;/a&gt; &lt;a style='font-size:9pt;' href='/brands/1' rel='nofollow'&gt;Multipower&lt;/a&gt; &lt;a style='font-size:14pt;' href='/brands/14' rel='nofollow'&gt;MuscleTech&lt;/a&gt; &lt;a style='font-size:9pt;' href='/brands/6' rel='nofollow'&gt;PowerBar&lt;/a&gt; &lt;a style='font-size:9pt;' href='/brands/13' rel='nofollow'&gt;Powerblock&lt;/a&gt; &lt;a style='font-size:10pt;' href='/brands/10' rel='nofollow'&gt;Powerhouse&lt;/a&gt; &lt;a style='font-size:14pt;' href='/brands/3' rel='nofollow'&gt;Universal nutrition&lt;/a&gt; &lt;a style='font-size:10pt;' href='/brands/7' rel='nofollow'&gt;VP Laboratory&lt;/a&gt; &lt;a style='font-size:22pt;' href='/brands/2' rel='nofollow'&gt;Weider&lt;/a&gt; &lt;a style='font-size:9pt;' href='/brands/9' rel='nofollow'&gt;Bodieforz&lt;/a&gt; &lt;a style='font-size:9pt;' href='/brands/15' rel='nofollow'&gt;Cytogenix&lt;/a&gt;&lt;/tags&gt;"></div>
  </div>
  
  
</div>
				
				</div><!-- .sidebar#sideLeft -->
			</div><!-- #middle-->
		</div><!-- #wrapper -->
		
		
		<div id="footer">
		<div class="float_wrapper">
			<div id="copyright2">Copyright © 2012 |</div>
			
		</div>
		<div id="bottom_links">	
		<!-- 	<a title="Словарь терминов спортивного питания" href="op=dictionary">Словарь</a> | <a title="Фотоотчет о событиях, проводимых  &quot;ООО Спорт-Экспресс&quot;" href="/op=gallery">Фотогалерея</a>
		</div>	-->
			<script type="text/javascript" src="design/{$settings->theme|escape}/js/common7_3_3.js"></script>
			
<br>			

	
		<script type="text/javascript" src="design/{$settings->theme|escape}/js/SortedTable3_2.js"></script>	
		</div><!-- #footer -->
		

<div id="help">
  <div id="help-panel" style="display: none;">
    <!-- Блок перехода к форме заказа -->
    <div class="main" style="border-top: none"><a class="title" href="/cart/">Перейти к корзине</a></div>
    <!-- Блок перехода к частым вопросам -->
   <!-- <div class="main"><a class="title" href="/what.html">Частые вопросы</a></div>-->
    <!-- Блок телефонов -->
    <div class="main"><a class="title" href="javascript:void(0);">Телефон</a></div>
    <div class="collapse">
      <strong>(000)000-0000</strong><br><br>
      <strong>E-mail:</strong> example@example.com<br><br>
      ПН-ПТ с 8:00 до 20:00,<br>
      СБ - выходной (возможна доставка)<br>
      ВС - выходной
      </div>
    <!-- Блок службы поддержки -->
   <!--  <div class="main" style="border-bottom:none"><a class="title" href="javascript:void(0);">Служба поддержки</a></div>
    <div class="collapse"> <a href="/index.php?show=faq&amp;pg=27&amp;act=Question&amp;id=6" target="_blank">Ответы на частые вопросы</a><br>
      <a href="/index.php?show=back&amp;pg=29" target="_blank">Обратная связь</a><br>
      <a href="/forum/" target="_blank">Обсудить на форуме</a> </div>-->
  </div>
  <a id="help-button" href="javascript:void(0);" title=""><img alt="" class="lazy" data-original="design/{$settings->theme|escape}/images/button2.png" src="design/{$settings->theme|escape}/images/button2.png" style="display: inline; "></a>
</div>		
		
	
<div id="boxes">
  <div id="dialog_vote" class="window"></div>
  <div id="mask"></div>
  <div id="compare_box" class="window"> <a href="#" class="close">
    <div></div>
    </a>
    <div class="modal_out"></div>
    <div class="button_none" style="text-align:center; display:none"><br>
      <a class="hndl_submit_prds_cmp" href="/includes/compare/compare_products.php">
      <input value="Сравнить выбранные товары" type="submit">
      </a> </div>
  </div>
  <div id="compare_mask"></div>
</div>	
	
		
<a id="w2b-StoTop" style="display: none; " title="">
	<img src="design/{$settings->theme|escape}/images/up.png">
	<br>Наверх
</a>		
		
	
<div id="fancy_wrap"><div id="fancy_loading"><div></div></div><div id="fancy_outer"><div id="fancy_inner"><div id="fancy_bg"><div class="fancy_bg fancy_bg_n"></div><div class="fancy_bg fancy_bg_ne"></div><div class="fancy_bg fancy_bg_e"></div><div class="fancy_bg fancy_bg_se"></div><div class="fancy_bg fancy_bg_s"></div><div class="fancy_bg fancy_bg_sw"></div><div class="fancy_bg fancy_bg_w"></div><div class="fancy_bg fancy_bg_nw"></div></div><div id="fancy_nav"></div><div id="fancy_close"></div><div id="fancy_content"></div><div id="fancy_title"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td id="fancy_title_left"></td><td id="fancy_title_main"><div></div></td><td id="fancy_title_right"></td></tr></tbody></table></div></div></div></div></body></html>
