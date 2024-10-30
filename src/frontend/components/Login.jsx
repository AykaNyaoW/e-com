import Password from "../ui/Password"
import { Link } from 'react-router-dom';

function Login() {
    return (

        <form action="" 
        className="w-full flex justify-center items-center">
            <div className="w-1/4 bg-white p-4 rounded-lg mt-32 border-2 shadow-md">
                <div className="text-center font-bold text-3xl mb-6">
                    <h1>Login</h1>
                </div>
                <div className="my-2">
                    <input type="text" 
                    className="w-full outline-none bg-white py-2 px-4 pr-10 rounded-lg border-2 shadow-md "
                    placeholder="Email"
                    />
                </div>

                <div>
                    <Password></Password>
                </div>
                <div className="text-sm mt-2 text-blue-500 underline">
                    <a href="">Forget password?</a>
                </div>

                <div className="mt-6">
                    <button className="w-full bg-blue-500 rounded-lg py-2 font-bold text-white">
                        Login
                    </button>
                </div>
                <div className="text-center text-sm mt-2">
                    <p>Don't have an account?
                    <Link to='/signup' className="underline text-blue-500"> Sign up</Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default Login