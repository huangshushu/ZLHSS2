/*
 *
 */
package gui.tools;

import java.io.*;
import java.util.*;

public class SystemLog {

    public static BufferedReader bufread;
    public static BufferedWriter bufwriter;
    public static File writefile;
    public static String filepath, filecontent, read;
    public static String readStr = "";

    //将日志信息写入日志文件
    public static void WriteLog(String content) {
        try {
            Calendar now = Calendar.getInstance();
            String time = now.get(Calendar.YEAR) + "-" + (now.get(Calendar.MONTH) + 1) + "-" + now.get(Calendar.DAY_OF_MONTH) + " " + now.get(Calendar.HOUR_OF_DAY) + ":" + now.get(Calendar.MINUTE) + ":" + now.get(Calendar.SECOND);
            boolean addStr = true; //追加内容
            filepath = "./System.log";       //得到文本文件的路径
            filecontent = content; //需要写入的内容
            writefile = new File(filepath);
            if (writefile.exists() == false) //如果文本文件不存在则创建它
            {
                writefile.createNewFile();
                writefile = new File(filepath);  //重新实例化
            }
            FileWriter filewriter = new FileWriter(writefile, addStr);
            bufwriter = new BufferedWriter(filewriter);
            filewriter.write(time + " " + filecontent + "\r\n");//这里每一条是一行
            filewriter.flush();
            filewriter.close();
        } catch (Exception d) {
            System.out.println(d.getMessage());
        }
    }

    public static void WritePacketToFile(String content) {
        try {
            boolean addStr = true; //追加内容
            filepath = "./Packet.log";       //得到文本文件的路径
            filecontent = content; //需要写入的内容
            writefile = new File(filepath);
            if (writefile.exists() == false) //如果文本文件不存在则创建它
            {
                writefile.createNewFile();
                writefile = new File(filepath);  //重新实例化
            }
            FileWriter filewriter = new FileWriter(writefile, addStr);
            bufwriter = new BufferedWriter(filewriter);
            filewriter.write(filecontent + "\r\n");//这里每一条是一行
            filewriter.flush();
        } catch (Exception d) {
            System.out.println(d.getMessage());
        }
    }

    public static void WriteNPCLog(String content) {
        try {
            Calendar now = Calendar.getInstance();
            String time = now.get(Calendar.YEAR) + "-" + (now.get(Calendar.MONTH) + 1) + "-" + now.get(Calendar.DAY_OF_MONTH) + " " + now.get(Calendar.HOUR_OF_DAY) + ":" + now.get(Calendar.MINUTE) + ":" + now.get(Calendar.SECOND);
            boolean addStr = true; //追加内容
            filepath = "./NPC.log";       //得到文本文件的路径
            filecontent = content; //需要写入的内容
            writefile = new File(filepath);
            if (writefile.exists() == false) //如果文本文件不存在则创建它
            {
                writefile.createNewFile();
                writefile = new File(filepath);  //重新实例化
            }
            FileWriter filewriter = new FileWriter(writefile, addStr);
            bufwriter = new BufferedWriter(filewriter);
            filewriter.write(time + " " + filecontent + "\r\n");//这里每一条是一行
            filewriter.flush();
            filewriter.close();
        } catch (Exception d) {
            System.out.println(d.getMessage());
        }
    }

    public static void WriteSN(String content, int type) {
        try {
            Calendar now = Calendar.getInstance();
            String time = now.get(Calendar.YEAR) + "-" + (now.get(Calendar.MONTH) + 1) + "-" + now.get(Calendar.DAY_OF_MONTH) + " " + now.get(Calendar.HOUR_OF_DAY) + ":" + now.get(Calendar.MINUTE) + ":" + now.get(Calendar.SECOND);
            boolean addStr = true; //追加内容
            if (type == 0) {
                filepath = "./cash_0.txt";       //得到文本文件的路径
            } else if (type == 1) {
                filepath = "./cash_1.txt";       //得到文本文件的路径
            } else if (type == 6) {
                filepath = "./mesos.txt";       //得到文本文件的路径
            } else if (type == 7) {
                filepath = "./item.txt";       //得到文本文件的路径
            }
            filecontent = content; //需要写入的内容
            writefile = new File(filepath);
            if (writefile.exists() == false) //如果文本文件不存在则创建它
            {
                writefile.createNewFile();
                writefile = new File(filepath);  //重新实例化
            }
            FileWriter filewriter = new FileWriter(writefile, addStr);
            bufwriter = new BufferedWriter(filewriter);
            filewriter.write(time + " " + filecontent + "\r\n");//这里每一条是一行
            filewriter.flush();
            filewriter.close();
        } catch (Exception d) {
            System.out.println(d.getMessage());
        }
    }
}
