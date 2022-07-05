@echo off
@title Dump
set CLASSPATH=.;dist\*;libs\*;
java -server tools.wztosql.DumpQuests
pause