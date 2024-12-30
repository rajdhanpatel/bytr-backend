const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const users = [
    {
        id: 1,
        username: "octocat",
        name: "The Octocat",
        ropoCount: 8,
        location:  "San Fransico"
    },
    {
        id: 2,
        username: "Rummers",
        name: "The Rummers",
        ropoCount: 8,
        location:  "San Rummers"
    },
    {
        id: 3,
        username: "Metadata",
        name: "The Metadata",
        ropoCount: 8,
        location:  "San Metadata"
    },
    {
        id: 4,
        username: "pitttachari",
        name: "The pitttachari",
        ropoCount: 8,
        location:  "San pitttachari"
    },
    {
        id: 5,
        username: "san vegil",
        name: "The San Vegil",
        ropoCount: 81,
        location:  "San Vigil"
    },
];

app.get("/users", (req, res)=>{
    return res.json({users});
})
app.get("/users/:id", (req, res)=>{
    let id = parseInt(req.params.id);
    let user = users.find(obj=> obj.id===id);
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({user});
})
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is listening on PORT ${PORT}`);
})