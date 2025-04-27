console.log('SERVER VARIABLE:', process.env.SECRET_KEY);
console.log('BROWSER VARIABLE:', process.env.NEXT_PUBLIC_API_URL);

export default function Home() {
    return (
        <div>
            <h1>Lab 2</h1>
            <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
            <p>App Name: {process.env.NEXT_PUBLIC_APP_NAME}</p>
        </div>
    );
}
