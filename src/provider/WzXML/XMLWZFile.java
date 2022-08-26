/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package provider.WzXML;

import provider.MapleData;
import provider.MapleDataDirectoryEntry;
import provider.MapleDataProvider;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import provider.MapleDataEntity;
import provider.MapleDataFileEntry;

public class XMLWZFile implements MapleDataProvider {

    private final File root;
    private final WZDirectoryEntry rootForNavigation;

    public XMLWZFile(File fileIn) {
        root = fileIn;
        rootForNavigation = new WZDirectoryEntry(fileIn.getName(), 0, 0, null);
        fillMapleDataEntitys(root, rootForNavigation);
    }

    private void fillMapleDataEntitys(final File lroot, final WZDirectoryEntry wzdir) {
        for (final File file : lroot.listFiles()) {
            final String fileName = file.getName();
            if (file.isDirectory() && !fileName.endsWith(".img")) {
                final WZDirectoryEntry newDir = new WZDirectoryEntry(fileName, 0, 0, (MapleDataEntity)wzdir);
                wzdir.addDirectory((MapleDataDirectoryEntry)newDir);
                this.fillMapleDataEntitys(file, newDir);
            }
            else if (fileName.endsWith(".xml")) {
                wzdir.addFile((MapleDataFileEntry)new WZFileEntry(fileName.substring(0, fileName.length() - 4), 0, 0, (MapleDataEntity)wzdir));
            }
        }
    }

    @Override
    public MapleData getData(final String path) {
        final File dataFile = new File(this.root, path + ".xml");
        final File imageDataDir = new File(this.root, path);
        FileInputStream fis;
        try {
            fis = new FileInputStream(dataFile);
        }
        catch (FileNotFoundException e2) {
            throw new RuntimeException("Datafile " + path + " does not exist in " + this.root.getAbsolutePath());
        }
        XMLDomMapleData domMapleData;
        try {
            domMapleData = new XMLDomMapleData(fis, imageDataDir.getParentFile());
        }
        finally {
            try {
                fis.close();
            }
            catch (IOException e) {
                throw new RuntimeException((Throwable)e);
            }
        }
        return domMapleData;
    }

    @Override
    public MapleDataDirectoryEntry getRoot() {
        return rootForNavigation;
    }
}
