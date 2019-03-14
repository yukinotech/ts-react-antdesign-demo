import * as React from "react"
import * as ReactDOM from 'react-dom'
import * as Button from './component/Button'
import './main.css'

function Big(){
    let Buttonconfig:Button.ButtonOption={
        onClick:function(){
            console.log('click')
        },
        text:'1111',
        className:['big','red']
    }
    return (
        <div>    
            <p>big一句话</p>
            <Button.default {...Buttonconfig}/>
        </div>

    )
}

ReactDOM.render(
    <Big/>,document.getElementById('root')
)

