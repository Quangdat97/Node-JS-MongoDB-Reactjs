import { navigate } from "@reach/router"

const home_click = () => { navigate("/", { replace: true });}
const product_click = () => { navigate("/category", { replace: true });}
const login_click = () => { navigate("/login", { replace: true });}
const Signup_click = () => { navigate("/signup", { replace: true });}

export {home_click, product_click, login_click, Signup_click}
