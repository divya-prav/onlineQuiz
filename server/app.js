const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { connectToDb, getDb } = require("./db/client");
const app = express();
let db;
// Logging middleware
app.use(morgan("dev"));
connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/test", (req, res, next) => {
  res.send("Test route");
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// TODO: Add your routers here
app.get('/',async (req,res)=>{
  res.status(200).json({message:'welcome to quiz maker'})
})

// app.get("/categories", async (req, res) => {
//   let categories = [];
//   db.collection("questions")
//     .find()
//     .forEach((category) => categories.push(category.game.single))
//     .then(() => {
//       console.log(categories.length);
//       res.status(200).json(categories);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "could not fetch the documents" });
//     });
// });

app.get('/api/html',async(req,res)=>{
    let htmlQuestions = [];
    db.collection('html')
    .find()
    .forEach((ques) => htmlQuestions.push(ques))
    .then(()=>{
      console.log('html Question');
      res.status(200).json(htmlQuestions);
    })
    .catch(() => {
      res.status(500).json({ error: "could not fetch the documents" });
    });
})

app.get('/api/css',async(req,res)=>{
  let cssQuestions = [];
  db.collection('css')
  .find()
  .forEach((ques) => cssQuestions.push(ques))
  .then(()=>{
    console.log('css Question');
    res.status(200).json(cssQuestions);
  })
  .catch(() => {
    res.status(500).json({ error: "could not fetch the documents" });
  });
  
})

app.get('/api/js',async(req,res)=>{
  let jsQuestions = [];
  db.collection('javascript')
  .find()
  .forEach((ques) => jsQuestions.push(ques))
  .then(()=>{
    console.log('js Question');
    res.status(200).json(jsQuestions);
  })
  .catch(() => {
    res.status(500).json({ error: "could not fetch the documents" });
  });
  
})

app.get('/api/advjs',async(req,res)=>{
  let advjsQuestions = [];
  db.collection('advancedjs')
  .find()
  .forEach((ques) => advjsQuestions.push(ques))
  .then(()=>{
    console.log('adv-js Question');
    res.status(200).json(advjsQuestions);
  })
  .catch(() => {
    res.status(500).json({ error: "could not fetch the documents" });
  });
  
})

app.get('/api/git',async(req,res)=>{
  let gitQuestions = [];
  db.collection('git')
  .find()
  .forEach((ques) => gitQuestions.push(ques))
  .then(()=>{
    console.log('git Question');
    res.status(200).json(gitQuestions);
  })
  .catch(() => {
    res.status(500).json({ error: "could not fetch the documents" });
  });
  
})

app.get('/api/women',async(req,res)=>{
  let womenQuestions = [];
  db.collection('womenincs')
  .find()
  .forEach((ques) => womenQuestions.push(ques))
  .then(()=>{
    console.log('women Question');
    res.status(200).json(womenQuestions);
  })
  .catch(() => {
    res.status(500).json({ error: "could not fetch the documents" });
  });
  
})

app.post('/api/makeaquiz',async(req,res)=>{
  let category = req.body.category; //html
  let {data} = req.body
  console.log('category----',category)
  console.log('data----',data)
  let collection = await db.collection(category);
  let result = await collection.insertMany(data);
  res.send(result).status(204);

})
// Error handling middleware
app.use((error, req, res, next) => {
  console.error("SERVER ERROR: ", error);
  if (res.statusCode < 400) {
    res.status(500);
  }
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
});

// // 404 handler
// app.get("*", (req, res) => {
//   res.status(404).send({
//     error: "404 - Not Found",
//     message: "No route found for the requested URL",
//   });
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});


module.exports = app;
