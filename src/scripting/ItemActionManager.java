package scripting;

import client.MapleClient;
import client.Skill;
import client.SkillEntry;
import client.SkillFactory;
import client.inventory.IItem;
import client.inventory.Item;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import java.util.Map;
import javax.script.Invocable;
import scripting.NPCConversationManager;
import server.MapleInventoryManipulator;
import tools.MaplePacketCreator;

public class ItemActionManager extends NPCConversationManager {

    private final IItem item;

    public ItemActionManager(MapleClient c, int npc, IItem item, Invocable iv) {
        super(c, npc, 0, 0, String.valueOf(item.getItemId()), (byte) -1, iv);
        this.item = item;
    }

    public IItem getItem() {
        return item;
    }

    public int getItemId() {
        return item.getItemId();
    }

    public int getPosition() {
        return item.getPosition();
    }

    public boolean used() {
        return used(1);
    }

    public boolean used(int q) {
        return MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.getByType(item.getType()), item.getPosition(), (short) q, true, false, 0);
    }

    public boolean usedAll() {
        return MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.getByType(item.getType()), item.getPosition(), (short) item.getQuantity(), true, false, 0);
    }

    public void dispose(int remove) {
        if (remove == 0) {
            usedAll();
        } else if (remove > 0) {
            used(remove);
        }
        ItemScriptManager.getInstance().dispose(this, getClient());
    }

    @Override
    public void dispose() {
        dispose(-1);
    }
}
