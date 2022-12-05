function Login(props) {
    return(
        <div>
            <input type="text" placeholder={props.user.username} /><br /><br />
            <input type="password" placeholder={props.user.password} />
        </div>
    )   
}

export default Login