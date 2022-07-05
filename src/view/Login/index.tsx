import React, { } from 'react'
import './style.scss'

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    return (
        <section>
            <div className='login-paper'>
                <input type="text" name="login" id="login" />
                <input type="text" name="password" id="password" />
            </div>
        </section>
    )
}
export default LoginPage;