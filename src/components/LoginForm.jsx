import '../index.css';

const LoginForm = () => {
    return ( 
        <div className="items-center grid justify-center min-h-screen">
        <div className="bg-[#000000cc] box-border rounded mt-[62px] max-w-[420px] min-w-[420px] py-12 px-[62px]">
        <h1 className="text-[32px] text-white font-bold mb-7">Sign In</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="bg-[#333] border-0 rounded text-white text-base outline-none py-4 px-5 w-full"
            // onChange={onEmailChanged}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="bg-[#333] border-0 rounded text-white text-base outline-none py-4 px-5 w-full"
            // onChange={onPasswordChanged}
          />
        </div>
        <button className="bg-red-600 border-0 rounded text-white text-base font-bold mt-8 outline-none p-4 w-full" 
        // onClick={login}
        >
          Sign In
        </button>
        <div className="text-gray-400 grid text-xs font-medium grid-cols-2 mb-12 mt-3">
            <span className="text-[13px]"><input type="checkbox" className="form-check-input w-3 h-3 bg-inherit accent-gray-600" /> Remember me</span>
            <span className="text-right">Need help?</span>
        </div>
        <div>
          <div className="text-gray-500 text-base font-light mt-4">
            <span>New to Netflix?</span>
            <span className="font-light text-white p-1 hover:cursor-pointer hover:underline">Sign up now.</span>
          </div>
          <div className="text-gray-500 text-xs mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-500 hover:cursor-pointer hover:underline">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default LoginForm;