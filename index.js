const express = require('express')
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 2000;

//Routes
app.get("/api/users",(req, res)=>{
return res.json(users);
});

app.get("/usres",(req,res) =>{
  const html =`
  <ul>
  ${users.map(user =>`<li>${user.first_name}</li>`).join("") 

  }
    
    </ul>

  `
res.send(html);

})

app.listen(PORT,() => console.log(`server Started at PORT:${PORT}`))