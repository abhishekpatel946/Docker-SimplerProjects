//TODO: import
const express = require('express');
const app = express();


//TODO: route root
app.get("/", (req, res) => {
    // res.send("<h1>Visiting Root...!</h1>");
    res.json({
        message: "Your are on the Root...!",
    });
});
//TODO: route sign in
app.get("/login", (req, res) => {
    // res.send("<h1>Visiting SignIN...!</h1>");
    res.json({
        message: "Your are on the SignIN...!",
    });
});
//TODO: route sign up
app.get("/resgiter", (req, res) => {
    // res.send("<h1>Visiting SignUP...!</h1>");
    res.json({
        message: "Your are on the SignUP...!",
    });
});
//TODO: route sign out
app.get("/logout", (req, res) => {
    // res.send("<h1>Visiting Logout...!</h1>");
    res.json({
        message: "You're successfully logged out...!",
    });
});

//TODO: listerner
app.listen(8000, () => {
    console.log('App listening at port 8000...');
});