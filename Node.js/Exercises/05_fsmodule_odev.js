const fs = require('fs');

//dosya oluşturuldu
fs.writeFile('employees.json', '{"name":"Employee 1 name", "salary":2000}',(err,data) => {
    if (err) console.log("sorry, there is a mistake");
    console.log('file created')
})

//dosya okundu
fs.readFile('employees.json','utf-8', (err,data) => {
    if(err) console.log("sorry, there is a mistake");
    console.log(data);
    console.log("read file");
})

//dosya güncellendi
fs.appendFile('employees.json', '\n{"name":"Employee 2 name", "salary":3000}','utf-8',(err) => {
    if (err) console.log('there is a mistake');
    console.log("file uptade");
})

//dosya silindi
fs.unlink('employees.json',(err) => {
    if(err) console.log(err);
    console.log("files deleted");
})
