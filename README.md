## ZLHSS2
___
## 相关下载：
服务端地址：https://github.com/huangshushu/ZLHSS2

客户端地址：https://musetransfer.com/s/yeqo09s9q

工具包下载地址：https://musetransfer.com/s/nnkm9mvqd
___

## 绿水灵也能看懂的架设教程：

### 1.环境安装

#### 1.1 安装Java 8 
工具包中文件名为：jdk-8u261-windows-x64

推荐安装在默认路径，一直下一步就可以

#### 1.2 数据库
工具包中文件名为：mysql-5.5.28-winx64

安装数据库，并且使用navicat新建数据库v079并且还原sql备份。


### 2.开服啦

第一步，通过Releases下载maplestory079.jar文件，然后在ZLHSS2内新建文件夹dist，将maplestory079.jar放入dist文件夹内。

第二步，打开settings.ini，修改以下配置：

如果你是搭建在服务器上请修改，本地用户请勿更改此处。

server.settings.ip = 你的公网IP

修改数据库密码

server.settings.db.password = 你的数据库密码

### 3.运行

双击launch.bat运行服务端。