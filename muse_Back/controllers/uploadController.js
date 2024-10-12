const db = require('../db'); // 커넥션 풀 사용

const uploadMusic = (req, res) => {
    const { title, lyrics, genre } = req.body;
    const musicFile = req.files.music;
    const imageFile = req.files.image;

    if (!musicFile || !imageFile) {
        return res.status(400).json({ error: '음악 및 이미지 파일이 필요합니다.' });
    }

    // 파일 데이터 읽기
    const musicFileData = musicFile.data;
    const imageFileData = imageFile.data;

    // SQL 쿼리
    const query = 'INSERT INTO music (MNAME, MFILE, MLYRICS, MGENRE, ID, MIMG, MDATE) VALUES (?, ?, ?, ?, ?, ?, NOW())';
    
    // 커넥션 풀에서 커넥션을 얻어서 쿼리 실행
    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 오류:', err);
            return res.status(500).json({ error: 'DB 연결 중 오류 발생' });
        }

        connection.query(query, [title, musicFileData, lyrics, genre, 'rang', imageFileData], (err, result) => {
            connection.release();

            if (err) {
                console.error('DB 삽입 오류:', err);
                return res.status(500).json({ error: 'DB 삽입 중 오류 발생' });
            }

            console.log('DB 삽입 성공:', result);
            res.json({ message: '음악 업로드 성공' });
        });
    });
};

module.exports = {
    uploadMusic
};
