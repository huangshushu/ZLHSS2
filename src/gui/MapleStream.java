/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gui;

import javax.swing.*;
import javax.swing.text.BadLocationException;
import javax.swing.text.Document;
import javax.swing.text.SimpleAttributeSet;
import javax.swing.text.StyleConstants;
import java.awt.*;
import java.io.OutputStream;
import java.io.PrintStream;
/**
 *
 * @author IceScald
 */
public class MapleStream extends PrintStream{
  private final JTextArea mainComponent;
  private final int type;
  private final int lineLimit;
  public static final int OUT = 0;
  public static final int ERR = 1;
  public static final int NOTICE = 2;
  public static final int PACKET = 3;
  
  public MapleStream(OutputStream out, JTextArea mainComponent)
  {
    super(out);
    this.mainComponent = mainComponent;
    
    this.type = 3;
    this.lineLimit = 100;
  }
  
  public MapleStream(OutputStream out, JTextArea mainComponent, int type)
  {
    super(out);
    this.mainComponent = mainComponent;
    this.type = type;
    this.lineLimit = 100;
  }
  
  public MapleStream(OutputStream out, JTextArea mainComponent, int type, int lineLimit)
  {
    super(out);
    this.mainComponent = mainComponent;
    this.type = type;
    this.lineLimit = lineLimit;
  }
  
  public void write(byte[] buf, int off, int len)
  {
    super.write(buf, off, len);
    final String message = new String(buf, off, len);
    final Color col;
    switch (this.type)
    {
    case 0: 
      col = Color.BLACK;
      break;
    case 1: 
      col = Color.RED;
      break;
    case 2: 
      col = Color.BLUE;
      break;
    case 3: 
      col = Color.GRAY;
      break;
    default: 
      col = Color.BLACK;
    }
    SwingUtilities.invokeLater(new Runnable()
    {
      public void run()
      {
        SimpleAttributeSet attrSet = new SimpleAttributeSet();
        StyleConstants.setForeground(attrSet, col);
        Document docMain = MapleStream.this.mainComponent.getDocument();
        try
        {
          String[] docMainInfo = docMain.getText(0, docMain.getLength()).split("\r\n");
          if (docMainInfo.length >= MapleStream.this.lineLimit + 1) {
            for (int i = 0; i <= docMainInfo.length - MapleStream.this.lineLimit - 1; i++) {
              docMain.remove(0, docMainInfo[i].length() + 2);
            }
          }
          docMain.insertString(docMain.getLength(), message, attrSet);
        }
        catch (BadLocationException e)
        {
          MapleStream.this.mainComponent.setText("输出错误:" + e + "\r\n内容:" + message + "\r\n类型:" + MapleStream.this.type);
        }
      }
    });
  }
  
  public static void cleanMessage(JTextArea mainComponent)
  {
    mainComponent.setText("");
  }
}
