

const SignUp = () => {
  return (
    <form className="max-w-sm mx-auto bg-blue-50 rounded p-6">
      <h1 className="text-xl font-bold text-blue-500 mb-3">SignUp</h1>
      <input
        className="w-full rounded border p-2 border-blue-500 mb-3"
        type="text"
        name="username"
        placeholder="UserName"
      />
      <input
        className=" w-full
        rounded
        border
        p-2
        border-blue-500 mb-3"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input 
      className=" w-full
        rounded
        border
        p-2 mb-3 text-blue-500"
      type="password" name="password" placeholder="Password" />
      <input
      className=" w-full
        rounded
        border
        p-2 mb-3 text-blue-500"
        type="password"
        name="confirmPassword"
        placeholder=" Confirm Password"
      />
    </form>
  );
};

export default SignUp;