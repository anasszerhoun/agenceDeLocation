import axios from "axios";
import { useState } from "react";
import { Alert } from '@mui/material';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page
    try {
      // Envoi des données de connexion via POST
      const response = await axios.get(
        `http://localhost:8080/api/auth/loginAdmin?mail=${email}&password=${password}`
      );

      response.data.replace("Bearer ", "");
      const token = response.data.replace("Token: Bearer ", "");

      if (token) {
        localStorage.setItem("token", token);
        window.location.href="/dashboard"
      } 
    } catch (error) {
      setAlert(true);
    }
  };
  
  return (
    <div className="min-h-screen  flex items-center justify-center py-12 px-4 overflow-hidden">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome back</h2>
                    <p className="text-gray-600">Please sign in to your account</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {alert && (
                        <Alert severity="error" sx={{ marginTop: 2 }}>
                        Invalid email or password. Please try again.
                        </Alert>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Sign in
                    </button>
                    
                </form>
            </div>
        </div>
  );
}


