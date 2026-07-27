import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="mb-6 text-gray-500">Sign in to continue shopping</p>

        {providers &&
          Object.values(providers).map((provider: any) => (
            <button
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Sign in with {provider.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default LoginPage;
