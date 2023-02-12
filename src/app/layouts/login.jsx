import React from "react";

const Login = () => {
    return (<form action=''>
        <div>
            <label htmlFor="">Email</label>
            <input type="text" id='email'/>
        </div>
        <div>
            <label htmlFor="">Пароль</label>
            <input type="text" id='password'/>
        </div>
    </form>);
};

export default Login;