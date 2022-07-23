//Importing React and Def function
const React = require('react')
const Def = require('./default')

//Adding home page view
function home() {
    return (
        <Def>
            <main>
             
            <h1>HOME</h1>
            <link rel="stylesheet" href="style.css" />
            <a href="/places">
                <button className="btn-primary">Places Page</button></a>
            </main>
            
        </Def>

    )

}




//code to export from home
module.exports = home