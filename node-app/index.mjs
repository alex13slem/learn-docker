import fs from 'fs'

fs.appendFile('my-file.txt', 'Файл создан Node.JS', err => {
    if (err) throw err
    console.log('Файл сохранён');
})