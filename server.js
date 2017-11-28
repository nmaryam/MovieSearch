let express = require('express');
let app = express();

app.use('/',express.static('./'));

app.listen(9200, function(){
    console.log('server started');
});