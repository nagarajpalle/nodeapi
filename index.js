const mongoose = require('mongoose');

const connectionString = "mongodb+srv://nagarajpalle:pa55WORD@cluster0.5i6rt.mongodb.net/sample_mflix?retryWrites=true&w=majority";
async function findUser(username) {
    return await movies.findOne({ username })
}
(async () => {
    const connector = mongoose.connect(connectionString)
    .then(data => {
        console.log("connected",data)
    })
    .catch(e => {
        console.log("Error in connecting database : ",e)
    })
    //const username = process.argv[2].split('=')[1];

    
    // const username = "Blacksmith Scene"

    // let user = await connector.then(async () => {
    //     return findUser(username)
    // })
    // console.log("user ----------------------- > ", user);

    // if (!user) {
    //     user = await createUser(username)
    // }

    //console.log(user)
    process.exit(0)
})()

