{* Список товаров *}

<!-- Хлебные крошки /-->
<div id="path">
	<a href="/">Главная</a>
	{if $category}
	{foreach from=$category->path item=cat}
	→ <a href="catalog/{$cat->url}">{$cat->name|escape}</a>
	{/foreach}  
	{if $brand}
	→ <a href="catalog/{$cat->url}/{$brand->url}">{$brand->name|escape}</a>
	{/if}
	{elseif $brand}
	→ <a href="brands/{$brand->url}">{$brand->name|escape}</a>
	{elseif $keyword}
	→ Поиск
	{/if}
</div>
<!-- Хлебные крошки #End /-->


{* Заголовок страницы *}
{if $keyword}
<h1>Поиск {$keyword|escape}</h1>
{elseif $page}
<h1>{$page->name|escape}</h1>
{else}
<h1>{$category->name|escape} {$brand->name|escape} {$keyword|escape}</h1>
{/if}




{* Фильтр по брендам *}
{if $category->brands}
<div id="brands">
	<a href="catalog/{$category->url}" {if !$brand->id}class="selected"{/if}>Все бренды</a>
	{foreach name=brands item=b from=$category->brands}
		{if $b->image}
		<img src="{$config->brands_images_dir}{$b->image}" alt="{$b->name|escape}">
		{/if}
		<a data-brand="{$b->id}" href="catalog/{$category->url}/{$b->url}" {if $b->id == $brand->id}class="selected"{/if}>{$b->name|escape}</a>
	{/foreach}
</div>
{/if}

{* Описание бренда *}
{$brand->description}

{* Фильтр по свойствам *}
{if $features}
<table id="features">
	{foreach $features as $f}
	<tr>
	<td class="feature_name" data-feature="{$f->id}">
		{$f->name}:
	</td>
	<td class="feature_values">
		<a href="{url params=[$f->id=>null, page=>null]}" {if !$smarty.get.$f@key}class="selected"{/if}>Все</a>
		{foreach $f->options as $o}
		<a href="{url params=[$f->id=>$o->value, page=>null]}" {if $smarty.get.$f@key == $o->value}class="selected"{/if}>{$o->value|escape}</a>
		{/foreach}
	</td>
	</tr>
	{/foreach}
</table>
{/if}


<!--Каталог товаров-->
{if $products}

{* Сортировка *}
{if $products|count>0}
<div class="sort">
	Сортировать по 
	<a {if $sort=='position'} class="selected"{/if} href="{url sort=position page=null}">умолчанию</a>
	<a {if $sort=='price'}    class="selected"{/if} href="{url sort=price page=null}">цене</a>
	<a {if $sort=='name'}     class="selected"{/if} href="{url sort=name page=null}">названию</a>
</div>
{/if}


<table id="tabe_23" class="sorted productstable">
<thead>

		<tr class="thead">

			<td class="tbl_header" colspan="2">
			<div class="tleft">
			Производитель: 
			</div>	
			</td>

			<th title="Сортировать по цене" id="price_27" style="cursor: pointer; " height="27" width="588">
				<div class="tprice">
					<span class="orange2">Цена</span>
				</div>
			</th>

			<th title="Сортировать по цене" id="price_27" style="cursor: pointer; " height="27" width="27">
				<div class="tpurchase">Заказ</div></th>

			

		</tr>
	</thead>
	{foreach $products as $product}
	<tr align="center" border="1">
				
				<td class="td_img" width="104">
{if $product->image}
								
					<a href="products/{$product->url}"><img src="{$product->image->filename|resize:100:100}" alt="{$product->name|escape}"/></a>
			
	      
			
			{/if}
			</td>

			<td class="descr_good">
				
				<h3 class="{if $product->featured}featured{/if}"><a data-product="{$product->id}" href="products/{$product->url}">{$product->name|escape}</a></h3>
				{$product->annotation}
				
				
					</td>
				
			
			
	<td >
		
		<!-- Описание товара (The End) -->
		
		{if $product->variants|count > 0}
		<!-- Выбор варианта товара -->
		<form class="variants" action="/cart">
			<table>
			{foreach $product->variants as $v}
			<tr class="variant">
				<td>
					<input id="variants_{$v->id}" name="variant" value="{$v->id}" type="radio" class="variant_radiobutton" {if $v@first}checked{/if} {if $product->variants|count<2}style="display:none;"{/if}/>
				</td>
				<td>
					{if $v->name}<label class="variant_name" for="variants_{$v->id}">{$v->name}</label>{/if}
				</td>
				<td>
					{if $v->compare_price > 0}<span class="compare_price">{$v->compare_price|convert}</span>{/if}
					<span class="price">{$v->price|convert} <span class="currency">{$currency->sign|escape}</span></span>
				</td>
				{/foreach}
				
			</tr>
			
			<input type="submit" class="button" value="в корзину" data-result-text="добавлено"/>
			</table>
			
		</form>
		<!-- Выбор варианта товара (The End) -->
		{else}
			Нет в наличии
		{/if}

		</div>
		</td>
			

	
			
				
	

		
	<td>
		
		</td>
			

		

		
{/foreach}
		</tr>

	</table>





			
		
	

			


{include file='pagination.tpl'}	
<!-- Список товаров (The End)-->
{* Описание страницы (если задана) *}
{$page->body}

{if $current_page_num==1}
{* Описание категории *}
{$category->description}
{/if}
{else}
Товары не найдены
{/if}	
<!--Каталог товаров (The End)-->