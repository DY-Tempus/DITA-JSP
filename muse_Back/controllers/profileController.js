const { getConnection } = require('../db.js');

// 프로필 이미지 업로드 (BLOB 형태로 저장)
const uploadProfileImage = (req, res) => {
    // 데이터가 제대로 전송되었는지 확인
    console.log('req.files:', req.files); // 파일 데이터를 콘솔에 출력
    console.log('req.body:', req.body); // 유저 ID와 같은 텍스트 데이터를 콘솔에 출력

    // 파일이 없으면 에러 반환
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const profileImage = req.files.profileImage; // 업로드된 이미지 파일
    const imageBuffer = profileImage.data; // BLOB 데이터
    const userId = req.body.userId; // 유저 ID

    console.log('User ID:', userId); // 유저 ID 확인
    console.log('Profile Image Buffer:', imageBuffer); // 이미지 BLOB 데이터 확인

    getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ error: 'Database connection failed' });
        }

        const sql = `UPDATE user SET img = ? WHERE id = ?`;

        connection.query(sql, [imageBuffer, userId], (error, result) => {
            connection.release(); // 반드시 연결 해제

            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ error: 'Failed to update profile image' });
            }

            res.send({ success: true });
        });
    });
};

// 프로필 정보 업데이트
const updateProfile = (req, res) => {
    const { id, username, password, email, genre1, genre2 } = req.body;

    getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ error: 'Database connection failed' });
        }

        const sql = `UPDATE user SET name = ?, password = ?, email = ?, genre1 = ?, genre2 = ? WHERE id = ?`;

        connection.query(sql, [username, password, email, genre1, genre2, id], (error, result) => {
            connection.release(); // 반드시 연결 해제

            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ error: 'Failed to update profile' });
            }

            res.send({ success: true });
        });
    });
};

// 장르 데이터 가져오기
const getGenres = (req, res) => {
    getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ error: 'Database connection failed' });
        }

        const sql = 'SELECT GNAME FROM genre';

        connection.query(sql, (error, result) => {
            connection.release(); // 반드시 연결 해제

            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ error: 'Failed to fetch genres' });
            }

            res.json(result); // 장르 목록 반환
        });
    });
};

module.exports = {
    uploadProfileImage,
    updateProfile,
    getGenres,
};
