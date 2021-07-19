import { useRouter } from "next/router";
import Link from "next/link"
import { useEffect } from "react";


const Notfound = () => {

    const router = useRouter()
    
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>The page can not be found</h2>
            <p>Go back to <Link href="/"><a>Home page</a></Link></p>
        </div>
    );
}
 
export default Notfound;