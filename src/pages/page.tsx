import Image from "next/image";

export default function Home() {
    return (
        <>
            <p>{process.env.ENV_WELCOME}</p>
            <p>{process.env.NEXT_PUBLIC_WELCOME}</p>
            {console.log(process.env.ENV_DEM)
            }
            <p>{process.env.ENV_CONSOLE}</p>
        </>
    )
        ;
}