const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://quangdattruong:Dat1@quang@cluster0.zdhkx.mongodb.net/Mona_Shop?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> console.log('database connect success!'))
.catch((err)=>(console.log(err)));