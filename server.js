var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;
var crypto=require('crypto');
var bodyParser=require('body-Parser');
var config={
    username:'abhijitmajee1',
    database:'abhijitmajee1',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD,
    };
    


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
var articles= {
    'article1':{
    title: 'My first article',
    heading:'My webpage is under condtruction',
    content: `<a href='/'>Home</a>
              <hr/>       
              <p>This is my first article. Lets write something about it.</p> `,
            },
    'article2':{
        title: 'My second article',
    heading:'My webpage is under condtruction',
    content: `<a href='/'>Home</a>
              <hr/>       
              <p>This is my second article. Lets write something about it.</p> `,
    },
    'article3':{
        title: 'My third article',
    heading:'My webpage is under condtruction',
    content: `<a href='/'>Home</a>
              <hr/>       
              <p>This is my third article. Lets write something about it.</p> `,
    }
};
function createTemp(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`<html>
                        <head>
                            <title>${title}</title>
                            <link href="/ui/style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class='container'>
                            ${heading}
                               ${content}
                            </div>
                        </body>
                    </html>`;
                    return htmlTemplate;
}
    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  });
  
 function hash(input,salt){
     var hash=crypto.pbkdf2Sync(input, salt, 10000, 64, 'sha512');
     return (hash.toString('hex'));
 }
app.post('/create-user',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var salt=crypto.getRandomBytes(128).toString('hex');
    var hashedString= hash(password,salt);
    pool.query('INSERT INTO "user" (username,password-hash) VALUES ($1,$2)',[username,hashedString],function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }else {
            res.send("User creation successful");
        }
        });
});

var pool=new Pool(config);
app.get('/test-db',function(req,res){
    //make a select request to the database
    pool.query('SELECT * FROM test',function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result.rows));
        }
    });
    //get a response from the database and display
});
  
var counter=0;
app.get('/counter',function (req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/articles/:article1', function (req, res) 
                    {
                        
                        pool.query("SELECT * FROM article WHERE title= '"+req.params.article1+"'",function(err,result){
                            if(err){
                                res.status(500).send(err.toString()+"500");
                            }else if (result.rows.length===0){
                                res.status(404).send("ARTICLE NOT FOUND"+"404");
                            }else {
                                var articleData=result.rows[0];
                                res.send(createTemp(articleData));
                            }
                        });
                    }
                        
                    
        );


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/favicon.ico', function (req, res) {
  res.sendFile(null);
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
  
});