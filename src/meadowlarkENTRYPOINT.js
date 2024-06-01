const app = require('express')();

const port = process.env.PORT || 24900; // el puerto va a ser env.PORT o el 24900

app.get('/' ,(req, res) => {
    res.type('text/plain');
    res.send("el home de meadowlark");
})

app.get("/about", (req, res ) => {
    res.type('text/plain');
    res.send("el ACERCA DE de meadowlark");
})

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found');
})

app.use((err, req, res, next) => {
    console.error(err);
    res.type('text/plain');
    res.status(500);
    res.send('500 Internal Server Error');
})

app.listen(port, () => {
    console.log(
        `arranco el sv en el puerto ${port}, ctrl-c para liquidarlo`
    );
})