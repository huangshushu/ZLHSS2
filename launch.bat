@echo off
@title Server Console
set CLASSPATH=.;dist\*;libs\*;
java -server server.Start
pause