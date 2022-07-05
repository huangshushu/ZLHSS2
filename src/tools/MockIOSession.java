/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
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
package tools;

import io.netty.buffer.ByteBufAllocator;
import io.netty.channel.Channel;
import io.netty.channel.ChannelConfig;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelId;
import io.netty.channel.ChannelMetadata;
import io.netty.channel.ChannelOutboundBuffer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.ChannelProgressivePromise;
import io.netty.channel.ChannelPromise;
import io.netty.channel.EventLoop;
import io.netty.channel.RecvByteBufAllocator;
import io.netty.util.Attribute;
import io.netty.util.AttributeKey;
import java.net.SocketAddress;

/**
 * Represents a mock version of an IOSession to use a MapleClient instance
 * without an active connection (faekchar, etc).
 *
 * Most methods return void, or when they return something, null. Therefore,
 * this class is mostly undocumented, due to the fact that each and every
 * function does squat.
 *
 * @author Frz
 * @since Revision 518
 * @version 1.0
 */
public class MockIOSession implements Channel {

    @Override
    public ChannelId id() {
        return null;
    }

    @Override
    public EventLoop eventLoop() {
        return null;
    }

    @Override
    public Channel parent() {
        return null;
    }

    @Override
    public ChannelConfig config() {
        return null;
    }

    @Override
    public boolean isOpen() {
        return false;
    }

    @Override
    public boolean isRegistered() {
        return false;
    }

    @Override
    public boolean isActive() {
        return false;
    }

    @Override
    public SocketAddress localAddress() {
        return null;
    }

    @Override
    public SocketAddress remoteAddress() {
        return null;
    }

    @Override
    public ChannelFuture closeFuture() {
        return null;
    }

    @Override
    public boolean isWritable() {
        return false;
    }

    @Override
    public long bytesBeforeUnwritable() {
        return 0;
    }

    @Override
    public long bytesBeforeWritable() {
        return 0;
    }

    @Override
    public Channel.Unsafe unsafe() {
        return null;
    }

    @Override
    public ChannelPipeline pipeline() {
        return null;
    }

    @Override
    public ByteBufAllocator alloc() {
        return null;
    }

    @Override
    public Channel read() {
        return null;
    }

    @Override
    public Channel flush() {
        return null;
    }

    public RecvByteBufAllocator.Handle recvBufAllocHandle() {
        return null;
    }

    public ChannelFuture register(EventLoop el, ChannelPromise cp) {
        return null;
    }

    @Override
    public ChannelFuture bind(SocketAddress sa, ChannelPromise cp) {
        return null;
    }

    @Override
    public ChannelFuture connect(SocketAddress sa, SocketAddress sa1, ChannelPromise cp) {
        return null;
    }

    @Override
    public ChannelFuture disconnect(ChannelPromise cp) {
        return null;
    }

    @Override
    public ChannelFuture close(ChannelPromise cp) {
        return null;
    }

    public ChannelFuture closeForcibly() {
        return null;
    }

    @Override
    public ChannelFuture deregister(ChannelPromise cp) {
        return null;
    }

    public ChannelFuture beginRead() {
        return null;
    }

    @Override
    public ChannelFuture write(Object o, ChannelPromise cp) {
        return null;
    }

    @Override
    public ChannelPromise voidPromise() {
        return null;
    }

    public ChannelOutboundBuffer outboundBuffer() {
        return null;
    }

    @Override
    public ChannelMetadata metadata() {
        return null;
    }

    @Override
    public <T> Attribute<T> attr(AttributeKey<T> ak) {
        return null;
    }

    @Override
    public <T> boolean hasAttr(AttributeKey<T> ak) {
        return false;
    }

    @Override
    public ChannelFuture bind(SocketAddress sa) {
        return null;
    }

    @Override
    public ChannelFuture connect(SocketAddress sa) {
        return null;
    }

    @Override
    public ChannelFuture connect(SocketAddress sa, SocketAddress sa1) {
        return null;
    }

    @Override
    public ChannelFuture disconnect() {
        return null;
    }

    @Override
    public ChannelFuture close() {
        return null;
    }

    @Override
    public ChannelFuture deregister() {
        return null;
    }

    @Override
    public ChannelFuture connect(SocketAddress sa, ChannelPromise cp) {
        return null;
    }

    @Override
    public ChannelFuture write(Object o) {
        return null;
    }

    @Override
    public ChannelFuture writeAndFlush(Object o, ChannelPromise cp) {
        return null;
    }

    @Override
    public ChannelFuture writeAndFlush(Object o) {
        return null;
    }

    @Override
    public ChannelPromise newPromise() {
        return null;
    }

    @Override
    public ChannelProgressivePromise newProgressivePromise() {
        return null;
    }

    @Override
    public ChannelFuture newSucceededFuture() {
        return null;
    }

    @Override
    public ChannelFuture newFailedFuture(Throwable thrwbl) {
        return null;
    }

    @Override
    public int compareTo(Channel t) {
        return 0;
    }
}
