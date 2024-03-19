const { MongoClient } = require('mongodb');

// MongoDB 연결 문자열
const uri = process.env.DB_LOCAL_URL;
// 데이터베이스 이름
const dbName = 'number1';
// 컬렉션 이름
const collectionName = 'student';

// 더미 데이터
const dummyData = [
  {
    student_id: 201811769,
    student_grade: 1,
    student_name: "Student 1",
    student_sex: "M",
    student_address: "123 Main St",
    student_status: "Active",
    student_number: "S123456789",
    student_college: "정보융합대학",
    major_id: 1
  },
  {
    student_id: 201911869,
    student_grade: 2,
    student_name: "Student 2",
    student_sex: "F",
    student_address: "123 Main St",
    student_status: "Active",
    student_number: "S123456789",
    student_college: "공과대학",
    major_id: 2
  },
  {
    student_id: 201911855,
    student_grade: 3,
    student_name: "Student 3",
    student_sex: "M",
    student_address: "123 Main St",
    student_status: "Active",
    student_number: "S123456789",
    student_college: "정보융학대학",
    major_id: 3
  },
  {
    student_id: 201711129,
    student_grade: 4,
    student_name: "Student 4",
    student_sex: "F",
    student_address: "123 Main St",
    student_status: "Active",
    student_number: "S123456789",
    student_college: "경영대학",
    major_id: 4
  },
  {
    student_id: 201911687,
    student_grade: 2,
    student_name: "Student 5",
    student_sex: "M",
    student_address: "123 Main St",
    student_status: "Active",
    student_number: "S123456789",
    student_college: "경영대학",
    major_id: 5
  }
    // 더 많은 더미 데이터를 추가할 수 있습니다.
];

async function insertDummyData() {
    const client = new MongoClient(uri);
    try {
        // MongoDB에 연결
        await client.connect();

        // 데이터베이스 및 컬렉션 선택
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 더미 데이터 삽입
        const result = await collection.insertMany(dummyData);
        console.log(`${result.insertedCount} documents inserted.`);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // 클라이언트 연결 닫기
        await client.close();
    }
}

// 함수 호출
insertDummyData();

