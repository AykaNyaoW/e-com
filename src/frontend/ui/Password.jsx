import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

function Password({ placeholder = "Password" }) {
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [password, setPassword] = useState(''); // State for input value

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev); // Toggle the password visibility state
    };

    return (
        <div className="relative w-full">
            <input
                type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword
                className="w-full outline-none bg-white border-2 py-2 px-4 pr-10 rounded-lg shadow-md"
                placeholder={placeholder} // Optional placeholder for better UX
                value={password} // Controlled input value
                onChange={(e) => setPassword(e.target.value)} // Update state on input change
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
                <button
                    onClick={togglePasswordVisibility} // Toggle visibility on button click
                    aria-pressed={showPassword} // Set aria-pressed based on showPassword
                    className="focus:outline-none" // Focus styling (optional)
                    type="button" // Ensure the button type is set
                >
                    {showPassword ? <EyeOff /> : <Eye />} {/* Toggle between icons */}
                </button>
            </div>
        </div>
    );
}

export default Password;
