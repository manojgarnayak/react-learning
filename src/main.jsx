import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
} 

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const AnotherElement = (
    <a href='http://google.com' target="_blank">Visit Google</a>
)

const anotherUser = "Bhalu"
const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target: '_blank'},
    'Click me to visit this website',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
