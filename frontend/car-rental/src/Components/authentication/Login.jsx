export default function Login() {

    const handleLogin = () => {
        console.log("Login button clicked");
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}