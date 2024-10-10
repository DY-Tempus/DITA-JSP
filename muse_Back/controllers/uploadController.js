const db = require('../db');  // 커넥션 풀 사용

// 음악 파일 업로드 컨트롤러
const uploadMusic = (req, res) => {
    const { title, genre, lyrics, userId } = req.body;
    const musicFile = req.files.music;
    const imageFile = req.files.image;

    // 현재 날짜 계산
    const currentDate = new Date().toISOString().split('T')[0];

    // 디버깅: 받은 사용자 ID와 기타 정보 확인
    console.log("Received userId:", userId);
    console.log("Received title:", title);
    console.log("Received genre:", genre);
    console.log("Received lyrics:", lyrics);
    console.log("Received imageFile:", imageFile);

    if (!musicFile || !imageFile) {
        return res.status(400).json({ message: '음악 및 이미지 파일이 필요합니다.' });
    }

    // SQL 쿼리: 이미지와 날짜도 삽입
    const query = 'INSERT INTO music (MNAME, MFILE, MLYRICS, MGENRE, ID, MIMG, MDATE) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).json({ message: 'DB 연결 실패' });
        }

        connection.query(query, [title, musicFile.data, lyrics, genre, userId, imageFile.data, currentDate], (err, result) => {
            connection.release();

            if (err) {
                console.error('음악 업로드 실패:', err);
                return res.status(500).json({ message: '음악 업로드 실패' });
            }

            console.log('음악 업로드 성공:', result);
            res.json({ message: '음악 업로드 성공', musicId: result.insertId });
        });
    });
};

module.exports = {
    uploadMusic
};
