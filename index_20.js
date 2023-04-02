const expre = require("express");
const app = expre();

app.get("", (req, resp)=>{
    resp.send(`<h1>This is Good</h1>
    <a href = "/about">Go to About</a>
    <a href = "/json">Go to Json</a>
    `)
})

app.get("/about", (req, resp) => {
    resp.send(`
    <input type="text" placeholder = "Username" value = "${req.query.name}" />
    <button>Submit</button>
    <p>Good After Noon</p>
    <a href = "/" >Go to Home</a>
    `);
})


app.get("/json", (req, resp) => {
    resp.send(
    `
        [
        {
            name:"ankit",
            last:"dubey"
        },
        {
            name:"ankit",
            last:"dubey"
        }
    ]
    <h1><a href = "/" >Go to Home</a></h1>
    `
    )
})
app.listen(5000)