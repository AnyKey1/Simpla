<?php 
function show_form() 
{ 
?> 
<form action="" method=post> 
<div align="center"> 
              <br />Имя*<br /> 
              <input type="text" name="name" size="40"> 
              <br />Контактный телефон<br /> 
              <input type="text" name="tel" size="40"> 
              <br />Контактный email*<br /> 
              <input type="text" name="email" size="40"> 
              <br />Teма<br /> 
              <input type="text" name="title" size="40"> 
              <br />Сообщение*<br /> 
              <textarea rows="10" name="mess" cols="30"></textarea> 
              <br /><input type="submit" value="Отправить" name="submit"> 
</div> 
</form> 
* Помечены поля, которые необходимо заполнить 
<? 
} 

function complete_mail() { 
        // $_POST['title'] содержит данные из поля "Тема", trim() - убираем все лишние пробелы и переносы строк, htmlspecialchars() - преобразует специальные символы в HTML сущности, будем считать для того, чтобы простейшие попытки взломать наш сайт обломались, ну и  substr($_POST['title'], 0, 1000) - урезаем текст до 1000 символов. Для переменных $_POST['mess'], $_POST['name'], $_POST['tel'], $_POST['email'] все аналогично
        $_POST['title'] =  substr(htmlspecialchars(trim($_POST['title'])), 0, 1000); 
        $_POST['mess'] =  substr(htmlspecialchars(trim($_POST['mess'])), 0, 1000000); 
        $_POST['name'] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 30); 
        $_POST['tel'] =  substr(htmlspecialchars(trim($_POST['tel'])), 0, 30); 
        $_POST['email'] =  substr(htmlspecialchars(trim($_POST['email'])), 0, 50); 
        // если не заполнено поле "Имя" - показываем ошибку 0 
        if (empty($_POST['name'])) 
             output_err(0); 
        // если неправильно заполнено поле email - показываем ошибку 1 
        if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $_POST['email'])) 
             output_err(1); 
        // если не заполнено поле "Сообщение" - показываем ошибку 2 
        if(empty($_POST['mess'])) 
             output_err(2); 
        // создаем наше сообщение 
        $mess = ' 
Имя отправителя:'.$_POST['name'].' 
Контактный телефон:'.$_POST['tel'].' 
Контактный email:'.$_POST['email'].' 
'.$_POST['mess']; 
        // $to - кому отправляем 
        $to = 'dima@oneua.net'; 
        // $from - от кого 
        $from='test@tst.ru'; 
        mail($to, $_POST['title'], $mess, "From:".$from); 
        echo 'Спасибо! Ваше письмо отправлено.'; 
} 

function output_err($num) 
{ 
    $err[0] = 'ОШИБКА! Не введено имя.'; 
    $err[1] = 'ОШИБКА! Неверно введен e-mail.'; 
    $err[2] = 'ОШИБКА! Не введено сообщение.'; 
    echo '<p>'.$err[$num].'</p>'; 
    show_form(); 
    exit(); 
} 

if (!empty($_POST['submit'])) complete_mail(); 
else show_form(); 
?> 