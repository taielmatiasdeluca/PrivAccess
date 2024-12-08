
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRef } from "react";
import useApi from "../../hooks/useApi";

export const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { api, setAuthHeader } = useApi();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        const response = await api.post("/users/login", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
        if(response.status === 200) {
            setAuthHeader(response.data?.data);
            navigate('/dashboard');
        }

        

    }

    return (
        <main className="bg-gray-800 min-h-screen w-full p-3 py-16 flex items-center justify-center text-white">
            <Card className=" md:w-full lg:w-1/3">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Bienvenido a PrivAccess</h1>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Tu email" />
                        </div>
                        <TextInput id="email1" ref={emailRef} type="email"  required />
                        </div>
                        <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Tu contraseña" />
                        </div>
                        <TextInput id="password1" ref={passwordRef} type="password" required />
                        </div>
                        <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Recordarme</Label>
                    </div>
                    <Button type="submit">Iniciar sesión</Button>
                </form>
            </Card>
        </main>
    );
}
