package db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserMgr {
	private DBConnectionMgr pool;
	
	public UserMgr() {
		pool=DBConnectionMgr.getInstance();
	}
	
	/**로그인*/
	public boolean signIn(String id, String pw) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from user where id = ? and password = ?";
		boolean b=false;
		try {
			con = pool.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, id);
			pstmt.setString(2, pw);
			rs = pstmt.executeQuery();
			if(rs.next()) b=true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.free(con, pstmt, rs);
		}
		return b;
	}
	/**회원가입*/
	public void signUp() {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "";

		try {
			con = pool.getConnection();
			pstmt = con.prepareStatement(sql);

			rs = pstmt.executeQuery();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.free(con, pstmt, rs);
		}
	}

}
