+++
date = "2016-05-12T15:27:14+08:00"
description = ""
draft = false
tags = ["爆破"]
title = "爆破邮箱"
topics = ["Pentest"]

+++

### 0x00 软件
> ```
使用theHarvester搜集邮箱
使用dnsenum得到邮箱服务器域名
使用nmap查看端口开启情况
使用Hydra进行弱口令猜解
```

### 0x01 设置Shadowsocks为全局模式:
> {{% fluid_img src="/img/post/SS.png" alt="设置SS为全局代理" %}}

### 0x02 得到邮箱
> 可在[[theHarvester](https://github.com/laramies/theHarvester)]下载theHarvester，得到邮箱后做成字典user.txt
{{% fluid_img src="/img/post/theHarvester_help.png" alt="查看theHarvester的帮助信息" %}}
<br /><br />
{{% fluid_img src="/img/post/theHarvester_getemail1.png" alt="得到邮箱1" %}}
<br /><br />
{{% fluid_img src="/img/post/theHarvester_getemail2.png" alt="得到邮箱2" %}}

### 0x03 得到邮箱服务器域名
> {{% fluid_img src="/img/post/dnsenum.png" alt="dnsenum得到邮箱服务器域名" %}}

### 0x04 nmap确认端口开启
> {{% fluid_img src="/img/post/nmap_-p.png" alt="nmap确认邮箱服务器在运行" %}}

### 0x05 Hydra爆密码
> {{% fluid_img src="/img/post/hydra1.png" alt="hydra猜解密码" %}}
<br /><br />
{{% fluid_img src="/img/post/hydra2.png" alt="hydra猜解到密码" %}}

### 0x06 尝试登陆
> {{% fluid_img src="/img/post/sign_in.png" alt="尝试登陆" %}}