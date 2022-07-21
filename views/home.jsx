//Importing React and Def function
const React = require ('react')
const Def = require ('./default')

//Adding home page view
function home (){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>

    )

}

//code to export from home
module.exports = home