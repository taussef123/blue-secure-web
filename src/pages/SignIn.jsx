

const SignIn = ()=>{
    return (
      <form className="max-w-sm mx-auto  bg-slate-200  mt-20 rounded p-10">
        <h1 className="text-xl font-bold text-blue-600 mb-6">SignIn</h1>
        
        <input
          className="w-full rounded border p-2 mb-3 border-blue-500"
          name="email"
          placeholder="Email"
          type="email"
          required
        />
       
        <input
          className="w-full rounded border p-2 mb-3 border-blue-500"
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button
          type="submit"
          className="w-full rounded   bg-blue-600 mt-2 p-2 text-white  cursor-pointer uppercase hover:bg-blue-700"
        >
         login
        </button>
      </form>
    );
}

export default SignIn;