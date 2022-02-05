// index.js
import './index.css'
import './global.scss'
const hello = require('./hello.js');
document.querySelector("#root").appendChild(hello());
