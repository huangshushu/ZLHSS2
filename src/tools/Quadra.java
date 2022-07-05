/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

import java.io.Serializable;

/**
 *
 * @author XiaoMaDengDengWo
 */
public class Quadra<F, S, T, Fo> implements Serializable {

    private static final long serialVersionUID = 9179541993413739999L;
    public F first;
    public S second;
    public T third;
    public Fo forth;

    public Quadra(F first, S second, T third, Fo forth) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.forth = forth;
    }

    public F getFirst() {
        return first;
    }

    public S getSecond() {
        return second;
    }

    public T getThird() {
        return third;
    }

    public Fo getForth() {
        return forth;
    }

    @Override
    public String toString() {
        return first.toString() + ":" + second.toString() + ":" + third.toString() + ":" + forth.toString();
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((first == null) ? 0 : first.hashCode());
        result = prime * result + ((second == null) ? 0 : second.hashCode());
        result = prime * result + ((third == null) ? 0 : third.hashCode());
        result = prime * result + ((forth == null) ? 0 : forth.hashCode());
        return result;
    }

    @SuppressWarnings("unchecked")
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Quadra other = (Quadra) obj;
        if (first == null) {
            if (other.first != null) {
                return false;
            }
        } else if (!first.equals(other.first)) {
            return false;
        }
        if (second == null) {
            if (other.second != null) {
                return false;
            }
        } else if (!second.equals(other.second)) {
            return false;
        }
        if (third == null) {
            if (other.third != null) {
                return false;
            }
        } else if (!third.equals(other.third)) {
            return false;
        }
        if (forth == null) {
            if (other.forth != null) {
                return false;
            }
        } else if (!forth.equals(other.forth)) {
            return false;
        }
        return true;
    }
}

