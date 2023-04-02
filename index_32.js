// insert
const getDbConnect = require('./index_30');
// ./ is for local

// // 1st step
// const insert = () =>{
//     console.log("inseted");
// }

//2nd step
async function insertd() {
    let da = await getDbConnect();
    let resu = await da.insertMany([
                {
                'AMCAT ID': '7328328748472',
                'First Name': 'Rahul Jain',
                "Father's Name": 'Rizwan Jain',
                "DOB": '2000-09-29',
                'Email id (Invited)': 'shaikhusama745@gmail.com',
                "Degree": 'B.E.',
                'College Name': 'Thakur College Of Engineering & Technology'
                },
                {
                'AMCAT ID': '4564654654146',
                'First Name': 'Ankit Jain',
                "Father's Name": 'Rizwan Jain',
                "DOB": '2000-89-29',
                'Email id (Invited)': '5565dsnds@gmail.com',
                "Degree": 'B.E.',
                'College Name': 'Thakur College Of Engineering & Technology'
                }]
    )
    if(resu.acknowledged) {console.log("inserted truly");}
}
//last step
insertd();