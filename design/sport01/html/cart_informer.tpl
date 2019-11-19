{* Информера корзины (отдаётся аяксом) *}

{if $cart->total_products>0}
	
	
	
<tbody><tr>
									<td class="bsk_item">Товаров:</td><td class="bsk_value"><span id="b_count3">{$cart->total_products} {$cart->total_products|plural:'шт':'шт':'шт'}</span></td>
								</tr>
								<tr>
									<td class="bsk_item">На сумму:</td><td class="bsk_value"><span id="b_sum3">{$cart->total_price|convert} {$currency->sign|escape}</span></td>
								</tr>
							</tbody></table>
	
	
	
	
	{else}
	<table>
								<tbody><tr>
									<td class="bsk_item">Товаров:</td><td class="bsk_value"><span id="b_count3">0</span> шт.</td>
								</tr>
								<tr>
									<td class="bsk_item">На сумму:</td><td class="bsk_value"><span id="b_sum3">0</span> грн.</td>
								</tr>
							</tbody></table>
{/if}
