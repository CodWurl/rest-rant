//React import
const React = require ('react')


//Adding default view for layout
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
       
//Exporting Def function
module.exports = Def