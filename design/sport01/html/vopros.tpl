<?php 
function show_form() 
{ 
?> 
<form action="" method=post> 
<div align="center"> 
              <br />���*<br /> 
              <input type="text" name="name" size="40"> 
              <br />���������� �������<br /> 
              <input type="text" name="tel" size="40"> 
              <br />���������� email*<br /> 
              <input type="text" name="email" size="40"> 
              <br />Te��<br /> 
              <input type="text" name="title" size="40"> 
              <br />���������*<br /> 
              <textarea rows="10" name="mess" cols="30"></textarea> 
              <br /><input type="submit" value="���������" name="submit"> 
</div> 
</form> 
* �������� ����, ������� ���������� ��������� 
<? 
} 

function complete_mail() { 
        // $_POST['title'] �������� ������ �� ���� "����", trim() - ������� ��� ������ ������� � �������� �����, htmlspecialchars() - ����������� ����������� ������� � HTML ��������, ����� ������� ��� ����, ����� ���������� ������� �������� ��� ���� ����������, �� �  substr($_POST['title'], 0, 1000) - ������� ����� �� 1000 ��������. ��� ���������� $_POST['mess'], $_POST['name'], $_POST['tel'], $_POST['email'] ��� ����������
        $_POST['title'] =  substr(htmlspecialchars(trim($_POST['title'])), 0, 1000); 
        $_POST['mess'] =  substr(htmlspecialchars(trim($_POST['mess'])), 0, 1000000); 
        $_POST['name'] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 30); 
        $_POST['tel'] =  substr(htmlspecialchars(trim($_POST['tel'])), 0, 30); 
        $_POST['email'] =  substr(htmlspecialchars(trim($_POST['email'])), 0, 50); 
        // ���� �� ��������� ���� "���" - ���������� ������ 0 
        if (empty($_POST['name'])) 
             output_err(0); 
        // ���� ����������� ��������� ���� email - ���������� ������ 1 
        if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $_POST['email'])) 
             output_err(1); 
        // ���� �� ��������� ���� "���������" - ���������� ������ 2 
        if(empty($_POST['mess'])) 
             output_err(2); 
        // ������� ���� ��������� 
        $mess = ' 
��� �����������:'.$_POST['name'].' 
���������� �������:'.$_POST['tel'].' 
���������� email:'.$_POST['email'].' 
'.$_POST['mess']; 
        // $to - ���� ���������� 
        $to = 'dima@oneua.net'; 
        // $from - �� ���� 
        $from='test@tst.ru'; 
        mail($to, $_POST['title'], $mess, "From:".$from); 
        echo '�������! ���� ������ ����������.'; 
} 

function output_err($num) 
{ 
    $err[0] = '������! �� ������� ���.'; 
    $err[1] = '������! ������� ������ e-mail.'; 
    $err[2] = '������! �� ������� ���������.'; 
    echo '<p>'.$err[$num].'</p>'; 
    show_form(); 
    exit(); 
} 

if (!empty($_POST['submit'])) complete_mail(); 
else show_form(); 
?> 