+++
date = "2016-10-14T13:16:32+08:00"
description = ""
draft = false
tags = ["代码执行"]
title = "代码执行漏洞2"
topics = ["Pentest"]

+++

接着上一篇：http://reber-9.com/posts/code-execution-vulnerabilities/
### 0x00 函数create_function()
> php中的函数create_function()可以创建一个匿名函数，其函数原型如下：
```
string create_function ( string $args , string $code )
其中$args是函数的参数，$code是函数的内容
```
若对提交的code未过滤或过滤不当则可能会导致代码执行漏洞

### 0x01 示例 
> 示例a.php代码如下：
```
<?php
    $test = @$_GET['test'];
    $newfun = create_function('$a,$b', $test);
    $newfun('1111','2222');
?>
上述代码中$nuwfun('1111','2222')代表此时$a='1111',$b='2222',然后将其传给$test
```
{{% fluid_img src="/img/post/code_execution_create_function1.png" alt="示例1" %}}
<br /><br />
{{% fluid_img src="/img/post/code_execution_create_function2.png" alt="示例2" %}}
<br /><br />
{{% fluid_img src="/img/post/code_execution_create_function3.png" alt="示例3" %}}

### 0x02 函数assert()
> 这个函数和eval()的作用差不多
```
<?php @assert($_GET['str']); ?>
```
{{% fluid_img src="/img/post/code_execution_assert.png" alt="函数assert()" %}}