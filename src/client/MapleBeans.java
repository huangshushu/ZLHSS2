/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client;

/**
 *
 */
public class MapleBeans {

    private final int number;
    private final int type;
    private final int pos;

    public MapleBeans(int pos, int type, int number) {
        this.pos = pos;
        this.number = number;
        this.type = type;
    }

    public int getType() {
        return type;
    }

    public int getNumber() {
        return number;
    }

    public int getPos() {
        return pos;
    }

    public enum BeansType {
        开始打豆豆(0x00),
        暂停打豆豆(0x01),
        颜色求进洞(0x03),
        进洞旋转(0x04),
        奖励豆豆效果(0x05),
        未知效果(0x06),
        黄金狗(0x07),
        奖励豆豆效果B(0x08),
        领奖npc(0x09);

        final byte type;

        BeansType(int type) {
            this.type = (byte) type;
        }

        public byte getType() {
            return type;
        }
    }
}
