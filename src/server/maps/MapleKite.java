package server.maps;

import java.awt.Point;
import client.MapleCharacter;
import client.MapleClient;
import tools.MaplePacketCreator;

public class MapleKite extends AbstractMapleMapObject {

    private final Point pos;
    private final MapleCharacter owner;
    private final String text;
    private final int ft, itemid;

    public MapleKite(MapleCharacter owner, Point pos, int ft, String text, int itemid) {
        this.owner = owner;
        this.pos = pos;
        this.text = text;
        this.ft = ft;
        this.itemid = itemid;
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.Kite;
    }

    @Override
    public Point getPosition() {
        return pos.getLocation();
    }

    public MapleCharacter getOwner() {
        return owner;
    }

    @Override
    public void setPosition(Point position) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void sendDestroyData(MapleClient client) {
        client.getSession().writeAndFlush(makeDestroyData());
    }

    @Override
    public void sendSpawnData(MapleClient client) {
        client.getSession().writeAndFlush(makeSpawnData());
    }

    public byte[] makeSpawnData() {
        return MaplePacketCreator.spawnKite(getObjectId(), itemid, owner.getName(), text, pos, ft);
    }

    public byte[] makeDestroyData() {
        return MaplePacketCreator.destroyKite(getObjectId());
    }
}
