//React and Def from default view
const React = require('react')
const Def = require('../default')

//Function for new form
function new_form (){
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
            </main>
        </Def>
    )

}

module.exports = new_form