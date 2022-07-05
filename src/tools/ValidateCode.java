/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

/*import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Random;
*/

/**
 *
 * @author wubin
 */
public class ValidateCode {

   /* public static Color getRandColor(int fc, int bc) {//给定范围获得随机颜色
        Random random = new Random();
        if (fc > 255) {
            fc = 255;
        }
        if (bc > 255) {
            bc = 255;
        }
        int r = fc + random.nextInt(bc - fc);
        int g = fc + random.nextInt(bc - fc);
        int b = fc + random.nextInt(bc - fc);
        return new Color(r, g, b);
    }*/

    /**
     *
     * @param args
     */
   /* public static void main(String[] args) {

//   在内存中创建图象
        int width = 194, height = 43;
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);

//   获取图形上下文
        Graphics g = image.getGraphics();

//  生成随机类
        Random random = new Random();

//   设定背景色
        //g.setColor(getRandColor(200, 250));
        g.setColor(new Color(250, 250, 250));
        g.fillRect(0, 0, width, height);

//  设定字体
        g.setFont(new Font("Times New Roman", Font.BOLD, 24));

//  画边框
//  g.setColor(new Color());
//  g.drawRect(0,0,width-1,height-1);
//   随机产生155条干扰线，使图象中的认证码不易被其它程序探测到
        g.setColor(getRandColor(160, 200));
        for (int i = 0; i < 155; i++) {
            int x = random.nextInt(width);
            int y = random.nextInt(height);
            int xl = random.nextInt(12);
            int yl = random.nextInt(12);
            g.drawLine(x, y, x + xl, y + yl);
        }

//   取随机产生的认证码(5位数字)
        String sRand = "";
        int i0 = 0;
        int i1 = 0;
        int i2 = 0;
        int i3 = 0;
        int i4 = 0;
        int i5 = 0;

        for (int i = 0; i < 6; i++) {
            String rand = String.valueOf(random.nextInt(10));
            if (i == 0) {
                i0 = Integer.valueOf(rand);
            }
            if (i == 1) {
                i1 = Integer.valueOf(rand);
            }
            if (i == 2) {
                i2 = Integer.valueOf(rand);
            }
            if (i == 3) {
                i3 = Integer.valueOf(rand);
            }
            if (i == 4) {
                i4 = Integer.valueOf(rand);
            }
            if (i == 5) {
                i5 = Integer.valueOf(rand);
            }
            sRand += rand;
            // 将认证码显示到图象中
            g.setColor(new Color(20 + random.nextInt(110), 20 + random.nextInt(110), 20 + random.nextInt(110)));//调用函数出来的颜色相同，可能是因为种子太接近，所以只能直接生成
            g.drawString(rand, 34 * i + 6, 30);
        }

//   将认证码存入SESSION
//   session.setAttribute("CertiCode",sRand);
//   图象生效
        g.dispose();
        String filepath = "scripts/liedetector/" + i0 + i1 + i2 + i3 + i4 + i5 + ".jpg";

        File imgfile = new File(filepath);

        FileOutputStream fos;
        try {
            fos = new FileOutputStream(imgfile);
            BufferedOutputStream bos = new BufferedOutputStream(fos);
            JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(bos);

            encoder.encode(image);
            bos.close();
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }*/
    

}
