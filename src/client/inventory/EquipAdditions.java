package client.inventory;

import java.util.Arrays;
import java.util.List;

public enum EquipAdditions {
    elemboost("elemVol", "elemVol", true),
    mobcategory("category", "damage"),
    critical("prob", "damage"),
    boss("prob", "damage"),
    mobdie("hpIncOnMobDie", "mpIncOnMobDie"),
    hpmpchange("hpChangerPerTime", "mpChangerPerTime"),
    skill("id", "level"),
    statinc("incDEX", "incINT", "incLUK", "incPAD", "incSpeed", "incSTR"); // for 1003359/1003360 lolwut

    private final String i1, i2;
    private final String i3, i4, i5, i6;
    private final boolean element;

    EquipAdditions(String i1, String i2) {
        this.i1 = i1;
        this.i2 = i2;
        this.i3 = ""; // temp until it fixed
        this.i4 = "";
        this.i5 = "";
        this.i6 = "";
        element = false;
    }

    EquipAdditions(String i1, String i2, boolean element) {
        this.i1 = i1;
        this.i2 = i2;
        this.i3 = "";// temp until it fixed
        this.i4 = "";
        this.i5 = "";
        this.i6 = "";
        this.element = element;
    }

    EquipAdditions(String i1, String i2, String i3, String i4, String i5, String i6) {
        this.i1 = i1;
        this.i2 = i2;
        this.i3 = i3;
        this.i4 = i4;
        this.i5 = i5;
        this.i6 = i6;
        this.element = false;
    }

    public final String getValue1() {
        return i1;
    }

    public final String getValue2() {
        return i2;
    }

    public final String getValue3() {
        return i3;
    }

    public final String getValue4() {
        return i4;
    }

    public final String getValue5() {
        return i5;
    }

    public final String getValue6() {
        return i6;
    }

    public final boolean isElement() {
        return element;
    }

    public final static EquipAdditions fromString(String str) {
        for (EquipAdditions s : EquipAdditions.values()) {
            if (s.name().equalsIgnoreCase(str)) {
                return s;
            }
        }
        return null;
    }

    public enum RingSet {
        // 不速之客戒指(1112435, 1112436, 1112437, 1112438, 1112439),
        天使的祝福戒指(1112585, 1112586, 1112594),
        职业戒指(1112427, 1112428, 1112429, 1112405, 1112445, 1112591, 1112592),
        Evolving_Ring(1112499, 1112500, 1112501, 1112502, 1112503, 1112504, 1112505, 1112506, 1112507, 1112508, 1112509,
                1112510, 1112511, 1112512, 1112513, 1112514, 1112515, 1112516, 1112517, 1112518, 1112519, 1112520,
                1112521, 1112522, 1112523, 1112524, 1112525, 1112526, 1112527, 1112528, 1112529, 1112530, 1112531,
                1112532, 1112533),
        Evolving_Ring_II(1112614, 1112615, 1112616, 1112617, 1112618, 1112619, 1112620, 1112621, 1112622, 1112623,
                1112624, 1112625, 1112626, 1112627, 1112628, 1112629, 1112630, 1112631, 1112632, 1112633, 1112634,
                1112635, 1112636, 1112637, 1112638, 1112639, 1112640, 1112641, 1112642, 1112643, 1112644, 1112645,
                1112646, 1112647, 1112648);

        public List<Integer> id;

        RingSet(Integer... ids) {
            this.id = Arrays.asList(ids);
        }
    }
}
