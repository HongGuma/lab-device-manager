const express = require('express');
const app = express();
const db = require('./db.js')();
const conn = db.init();
const PROT = process.env.PORT || 3101;

db.connect(conn);

app.get('/',(req,res)=>{
    res.send({test:'this is test'})
})
app.get('/item',function (req,res){
    const sql = 'select * from item';
    conn.query(sql,(err,rows)=>{
        if(err) {
            console.log('query is not excuted. select fail...\n' + err);
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(rows);
        }
    });
});
// app.get('/list',function(req,res){
//     const sql = 'select * from item';
//     conn.query(sql,(err,rows)=>{
//         if(err) {
//             console.log('query is not excuted. select fail...\n' + err);
//         }
//         else {
//             res.header("Access-Control-Allow-Origin", "*");
//             res.send(rows);
//         }
//     });
// })
//
// app.get('/news/list',function(req,res){
//     const sql = 'select * from office_equipment';
//     conn.query(sql,(err,rows)=>{
//         if(err){
//             console.log('query is not excuted. select fail...\n'+err);
//         }
//         else{
//             res.header("Access-Control-Allow-Origin", "*");
//             res.send(rows);
//         }
//     })
// })

app.listen(PROT, ()=> {
    console.log(`Server run : http://localhost:${PROT}/`)
})