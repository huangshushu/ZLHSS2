package server;

import client.MapleClient;

import java.awt.*;

public interface MaplePortal {

    int MAP_PORTAL = 2;
    int DOOR_PORTAL = 6;

    int getType();

    int getId();

    Point getPosition();

    String getName();

    String getTarget();

    String getScriptName();

    void setScriptName(String newName);

    int getTargetMapId();

    void enterPortal(MapleClient c);

    void setPortalState(boolean state);

    boolean getPortalState();
}
