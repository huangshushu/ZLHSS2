package org.netbeans.lib.awtextra;

import java.util.Enumeration;
import java.awt.Dimension;
import java.awt.Container;
import java.awt.Component;
import java.util.Hashtable;
import java.io.Serializable;
import java.awt.LayoutManager2;

public class AbsoluteLayout implements LayoutManager2, Serializable
{
    static final long serialVersionUID = -1919857869177070440L;
    protected Hashtable constraints;
    
    public AbsoluteLayout() {
        this.constraints = new Hashtable();
    }
    
    @Override
    public void addLayoutComponent(final String name, final Component comp) {
        throw new IllegalArgumentException();
    }
    
    @Override
    public void removeLayoutComponent(final Component comp) {
        this.constraints.remove((Object)comp);
    }
    
    @Override
    public Dimension preferredLayoutSize(final Container parent) {
        int maxWidth = 0;
        int maxHeight = 0;
        final Enumeration e = this.constraints.keys();
        while (e.hasMoreElements()) {
            final Component comp = (Component)e.nextElement();
            final AbsoluteConstraints ac = (AbsoluteConstraints)this.constraints.get((Object)comp);
            final Dimension size = comp.getPreferredSize();
            int width = ac.getWidth();
            if (width == -1) {
                width = size.width;
            }
            int height = ac.getHeight();
            if (height == -1) {
                height = size.height;
            }
            if (ac.x + width > maxWidth) {
                maxWidth = ac.x + width;
            }
            if (ac.y + height > maxHeight) {
                maxHeight = ac.y + height;
            }
        }
        return new Dimension(maxWidth, maxHeight);
    }
    
    @Override
    public Dimension minimumLayoutSize(final Container parent) {
        int maxWidth = 0;
        int maxHeight = 0;
        final Enumeration e = this.constraints.keys();
        while (e.hasMoreElements()) {
            final Component comp = (Component)e.nextElement();
            final AbsoluteConstraints ac = (AbsoluteConstraints)this.constraints.get((Object)comp);
            final Dimension size = comp.getMinimumSize();
            int width = ac.getWidth();
            if (width == -1) {
                width = size.width;
            }
            int height = ac.getHeight();
            if (height == -1) {
                height = size.height;
            }
            if (ac.x + width > maxWidth) {
                maxWidth = ac.x + width;
            }
            if (ac.y + height > maxHeight) {
                maxHeight = ac.y + height;
            }
        }
        return new Dimension(maxWidth, maxHeight);
    }
    
    @Override
    public void layoutContainer(final Container parent) {
        final Enumeration e = this.constraints.keys();
        while (e.hasMoreElements()) {
            final Component comp = (Component)e.nextElement();
            final AbsoluteConstraints ac = (AbsoluteConstraints)this.constraints.get((Object)comp);
            final Dimension size = comp.getPreferredSize();
            int width = ac.getWidth();
            if (width == -1) {
                width = size.width;
            }
            int height = ac.getHeight();
            if (height == -1) {
                height = size.height;
            }
            comp.setBounds(ac.x, ac.y, width, height);
        }
    }
    
    @Override
    public void addLayoutComponent(final Component comp, final Object constr) {
        if (!(constr instanceof AbsoluteConstraints)) {
            throw new IllegalArgumentException();
        }
        this.constraints.put(comp, constr);
    }
    
    @Override
    public Dimension maximumLayoutSize(final Container target) {
        return new Dimension(Integer.MAX_VALUE, Integer.MAX_VALUE);
    }
    
    @Override
    public float getLayoutAlignmentX(final Container target) {
        return 0.0f;
    }
    
    @Override
    public float getLayoutAlignmentY(final Container target) {
        return 0.0f;
    }
    
    @Override
    public void invalidateLayout(final Container target) {
    }
}
