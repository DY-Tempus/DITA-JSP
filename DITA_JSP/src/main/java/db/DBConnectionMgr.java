package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBConnectionMgr {
    private static volatile DBConnectionMgr instance = null;
    private String url = "jdbc:mysql://localhost:3306/mydb"; // MySQL URL
    private String user = "root"; // MySQL 사용자 이름
    private String password = "1234"; // MySQL 비밀번호

    // 클래스 로딩 시점에 드라이버 로드
    static {
        try {
            // MySQL JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("MySQL JDBC Driver not found.");
        }
    }

    private DBConnectionMgr() {
        // 생성자
    }

    public static DBConnectionMgr getInstance() {
        if (instance == null) {
            synchronized (DBConnectionMgr.class) {
                if (instance == null) {
                    instance = new DBConnectionMgr();
                }
            }
        }
        return instance;
    }

    public Connection getConnection() throws SQLException {
        try {
            // MySQL에 연결
            return DriverManager.getConnection(url, user, password);
        } catch (SQLException e) {
            System.err.println("Error message: " + e.getMessage()); // 예외 메시지 출력
            e.printStackTrace();
            throw e;
        }
    }

    // 리소스 해제 메소드
    public void free(Connection con, PreparedStatement pstmt, ResultSet rs) {
        try {
            if (rs != null) rs.close();
            if (pstmt != null) pstmt.close();
            if (con != null) con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
