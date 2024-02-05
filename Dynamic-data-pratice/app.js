const express =  require('express')
const path =  require('path')
const app = express()
const userRoutes = require('./routers/user')
const adminRoutes = require('./routers/admin')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs')
app.set('views','views')

app.use(userRoutes);
app.use('/admin',adminRoutes);


app.listen(3000)