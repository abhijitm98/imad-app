var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
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
var counter=0;
var bt=document.getElementbyId('button');
var span=document.getElementbyId('s1');

bt.onClick=function(){
    counter = counter+1;
    span.send(counter.toString());
};

app.get('/:article1', function (req, res) 
                    {
                        var article1=req.params.article1;
                        res.send(createTemp(articles[article1]));
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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
  
});