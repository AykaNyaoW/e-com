import Password from "../ui/Password"
import { Link } from 'react-router-dom';

function Login() {
    return (

        <form action="" 
        className="w-full flex justify-center items-center">
            <div className="w-1/4 bg-white p-4 rounded-lg mt-32 border-2 shadow-md">
                <div className="text-center font-bold text-3xl mb-6">
                    <h1>Sign Up</h1>
                </div>

                <div className="my-2">
                    <input type="text" 
                    className="w-full outline-none bg-white py-2 px-4 pr-10 rounded-lg border-2 shadow-md "
                    placeholder="Username"
                    />
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

                <div className="mt-2">
                    <Password placeholder='Confirm Password'></Password>
                </div>

                <div className="mt-6">
                    <button className="w-full bg-blue-500 rounded-lg py-2 font-bold text-white">
                        Create Account
                    </button>
                </div>
                <div className="text-center text-sm mt-2">
                    <p>By signing up, you agree to our <a href="" className="underline">policies</a>.</p>
                </div>
                <div className="text-center text-sm">
                    <p>Already have an account?
                    <Link to='/' className="underline text-blue-500"> Login</Link>
                    </p>
                </div>

            </div>
        </form>
    )
}

export default Login