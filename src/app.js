const express = require('express');
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

//Public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing
//app.get("",(req, res)=>{
//    res.render("website");
//});

app.get("",(req, res)=>{
    res.render("about");
});

// app.get("/products",(req, res)=>{
//     res.render("products");
// });

app.get("/COUNTER",(req, res)=>{
    res.render("products_counter");
});

app.get("/MALL",(req, res)=>{
    res.render("products_mall_rack");
});

app.get("/MEDICAL",(req, res)=>{
    res.render("products_medical");
});

app.get("/PILLAR",(req, res)=>{
    res.render("products_pillar");
});

app.get("/SLOTTEDANGLE",(req, res)=>{
    res.render("products_slotted_angle");
});

app.get("/contactus",(req, res)=>{
    res.render("contactus");
});

app.get("*",(req, res)=>{
    res.render("404error", {
        errorMsg: ""
    });
});

app.listen(port,()=>{
    console.log(`listening port number ${port}`);
})