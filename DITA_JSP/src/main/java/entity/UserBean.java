package entity;

public class UserBean {
	
	private int uid;
	private String password;
	private String email;
	private String name;
	private GenreBean genre1=new GenreBean();
	private GenreBean genre2=new GenreBean();

	
	/**선호 장르1
	 */
	public GenreBean getGenre1() {
		return genre1;
	}
	/**선호 장르1
	 */
	public void setGenre1(GenreBean genre1) {
		this.genre1 = genre1;
	}
	/**선호 장르2
	 */
	public GenreBean getGenre2() {
		return genre2;
	}
	/**선호 장르2
	 */
	public void setGenre2(GenreBean genre2) {
		this.genre2 = genre2;
	}
	/**사용자 아이디
	 */
	public int getUid() {
		return uid;
	}
	/**사용자 아이디
	 */
	public void setUid(int uid) {
		this.uid = uid;
	}

	/**사용자 이름
	 */
	public String getName() {
		return name;
	}
	/**사용자 이름
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**사용자 이메일
	 */
	public String getEmail() {
		return email;
	}
	/**사용자 이메일
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**사용자 비밀번호
	 */
	public String getPassword() {
		return password;
	}
	/**사용자 비밀번호
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	
}
