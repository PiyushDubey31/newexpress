const express=require("express");
const path=require("path")
const hbs=require("hbs")
const port=process.env.PORT || 3000
const app=express();
const staticpath=path.join(__dirname,"../public")
const templetepath=path.join(__dirname,"../templates/views")
const partialpath=path.join(__dirname,"../templates/partials")
app.set("view engine","hbs");
app.set("views",templetepath)
hbs.registerPartials(partialpath)
app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
}
)
app.get("*",(req,res)=>{
    res.render("error")
})
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})