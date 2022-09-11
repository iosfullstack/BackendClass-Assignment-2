const http = require(`http`)
const fs = require(`fs`)

const port = 5001

const server = http.createServer( (req, res) => {
    const homeData = fs.readFileSync(`./Biodata/home.html`, `utf-8`)
    const aboutData = fs.readFileSync(`./Biodata/about.html`, `utf-8`)
    const contactData = fs.readFileSync(`./Biodata/contact.html`, `utf-8`)
    if (req.url === `/home`) {
        res.end(homeData)
    } else if (req.url === `/about`) {
        res.end(aboutData)
    } else if (req.url === `/contact`) {
        res.end(contactData)
    } else {
        res.end(`404: File not found`)
    }
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})