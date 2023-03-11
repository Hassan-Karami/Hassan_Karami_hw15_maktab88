const { query } = require("express");
const express = require("express");
const app = express();
const {join} = require("path");
app.set("view engine","ejs");
app.use(express.static("public"));
const products = require("./DB/products-data.json");


app.get("/home",(req,res)=>{
    res.render("pages/home-page",{
        data:products
    })

}
    
)


app.get("/about", (req, res) => {
  res.render("pages/about-page", {
    fname: "Hassan",
  });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact-page", {
    fname: "Hassan",
  });
});


app.get("/search", (req, res) => {
   let searchedText = req.query.search.toLowerCase();
      
      searchedProduct = products.filter((x) =>
        JSON.stringify([
          x.price,
          x.size.toLowerCase(),
          x.material.toLowerCase(),
          x.name.toLowerCase(),
          x.color.toLowerCase(),
        ]).includes(searchedText)
      );
   if (searchedProduct.length > 0){
      res.render("pages/search-page", {
        data: searchedProduct,
      });
   }
   else {
    res.status(404).send("Product Not Found")
  
   }
   
});


app.get("/item",(req,res)=>{
  let selectedItem = products.find((product) => product.id === +req.query.id);
 
  res.render("/pages/itemInfo-page",{
     data: selectedItem
  })
})

app.listen(4000);