/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import com.alibaba.druid.pool.DruidDataSource;
import constants.ServerConstants;
import server.ServerProperties;

public class DBConPool {

    private static DruidDataSource dataSource = null;
    public static final int RETURN_GENERATED_KEYS = 1;
    public static String dbUser = "", dbPass = "root", dbIp = "localhost", dbName = "v079";
    public static int dbport = 3306;

    static {
        InitDB();
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("[数据库信息] 找不到JDBC驱动.");
            System.exit(0);
        }

    }

    public static void InitDB() {
        dbName = ServerProperties.getProperty("server.settings.db.name", dbName);
        dbIp = ServerProperties.getProperty("server.settings.db.ip", dbIp);
        dbport = ServerProperties.getProperty("server.settings.db.port", dbport);
        dbUser = ServerProperties.getProperty("server.settings.db.user", dbUser);
        dbPass = ServerProperties.getProperty("server.settings.db.password", dbPass);
    }

    private static class InstanceHolder {

        public static final DBConPool instance = new DBConPool();
    }

    public static DBConPool getInstance() {
        return InstanceHolder.instance;
    }

    private DBConPool() {
    }

    public DruidDataSource getDataSource() {
        if (dataSource == null) {
            InitDBConPool();
        }
        return dataSource;
    }

    private void InitDBConPool() {
        dataSource = new DruidDataSource();
        dataSource.setName("mysql_pool");
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://" + "127.0.0.1" + ":" + dbport + "/" + dbName
                + "?useUnicode=true&characterEncoding=UTF8");
        dataSource.setUsername(dbUser);
        dataSource.setPassword(dbPass);
        //启动程序时，在连接池中初始化多少个连接
        dataSource.setInitialSize(20);
        //连接池中最小空闲连接数，当连接数少于此值时，连接池会创建连接来补充到该值的数量
        dataSource.setMinIdle(30);
        //连接池中最多可空闲maxIdle个连接 ，这里取值为20，表示即使没有数据库连接时依然可以保持20空闲的连接，而不被清除，随时处于待命状态。设 0 为没有限制。
        dataSource.setMaxActive(300);
        //检查空闲连接的频率.Destroy线程会检测连接的间隔时间，如果连接空闲时间大于等于minEvictableIdleTimeMillis则关闭物理连接。
        dataSource.setTimeBetweenEvictionRunsMillis(60000);
        //连接的最小生存时间.连接保持空闲而不被驱逐的最小时间
        dataSource.setMinEvictableIdleTimeMillis(300000);
        //验证数据库服务可用性的sql.用来检测连接是否有效的sql
        dataSource.setValidationQuery("SELECT 'x'");
        //申请连接时直接检测连接是否有效.申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能。
        dataSource.setTestOnBorrow(false);
        //归还连接时检测连接是否有效.归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能。
        dataSource.setTestOnReturn(false);
        //申请连接时检测空闲时间，根据空闲时间再检测连接是否有效.建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRun
        dataSource.setTestWhileIdle(true);
        //获取连接时最大等待时间，单位毫秒。配置了maxWait之后，缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置
        dataSource.setMaxWait(60000);
        //是否启用非公平锁
        dataSource.setUseUnfairLock(true);
        //数据库服务宕机自动重连机制
        dataSource.setBreakAfterAcquireFailure(true);
        //要求程序从池中get到连接后, N 秒后必须close,否则druid 会强制回收该连接,不管该连接中是活动还是空闲, 以防止进程不会进行close而霸占连接。
        dataSource.setRemoveAbandoned(true);
        //设置druid 强制回收连接的时限，当程序从池中get到连接开始算起，超过此值后，druid将强制回收该连接，单位秒。
        dataSource.setRemoveAbandonedTimeout(1800);
        //当druid强制回收连接后，是否将stack trace 记录到日志中
        dataSource.setLogAbandoned(false);
    }
}
