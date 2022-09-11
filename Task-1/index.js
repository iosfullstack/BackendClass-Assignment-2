const fs = require(`fs`)


fs.readFile(`./myFile.txt`, `utf-8`, (err, data) => {
    // Read the text file
    if (err) {
        console.log(err)
    }
        console.log(data);
        // Copy and write the text file inside another text file
    fs.copyFile(`./myFile.txt`, `newfile.txt`, (err1) => {
        if (err1) {
            console.log(err1)
        } else {
            console.log(`Created another file`)
        }
        // Read the new text file
    fs.readFile(`newfile.txt`, `utf-8` ,(err2, data1) => {
        if (err2) {
            console.log(err2)
        } else {
            console.log(data1)
        }
    })
    })
})