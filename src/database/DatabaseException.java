package database;

import java.sql.SQLException;

public class DatabaseException extends RuntimeException {

    private static final long serialVersionUID = -420103154764822555L;

    public DatabaseException(String msg) {
        super(msg);
    }

    public DatabaseException(String message, Throwable cause) {
        super(message, cause);
    }

    DatabaseException(SQLException e) {
        throw new UnsupportedOperationException(e); // To change body of generated methods, choose Tools | Templates.
    }
}
