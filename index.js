const express = require('express');
const shuffleArray = require('shuffle-array');
const chance = require('chance').Chance();

const app = express();
app.use(express.static("public"));

const data = {
    headers : ["Nama", "Umur", "Profesi", "Negara"],
    rows : new Array(10).fill(undefined).map(()=>{
        return [
            chance.name(),
            chance.age(),
            chance.profession(),
            chance.country({ full:true })
        ]
    })
}

app.get('/data', (req, res) => {
    res.json({
        headers: data.headers,
        rows: shuffleArray(data.rows),
        lastUpdated: new Date().toISOString()
    });
});



app.listen(3000, ()=>{
    console.log("App is Running at Port 3000")
>>>>>>> 5fdf0ab (Bahan)
});
