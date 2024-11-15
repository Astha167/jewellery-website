import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle the redirection
  const handleContinue = () => {
    // Add any login validation here if needed
    navigate('/'); // Redirects to the home page
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">Sign Up</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input
            type="text"
            placeholder="Your Name"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <div>
          <button onClick={handleContinue} className="btn_dark_rounded my-5 w-full !rounded-md">
            Continue
          </button>
          <p className="text-black font-bold">
            Already have an account? <span>Login</span>
          </p>
          <div className="flexCenter mt-6 gap-3">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
