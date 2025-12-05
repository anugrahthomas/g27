import { Link } from "react-router-dom";




const LinkText = () => {
    return <div className="relative p-2 flex items-center justify-center text-[8vw] uppercase font-medium text-white space-x-2">
        <Link className="px-8 leading-none border-2 rounded-full hover:text-lime-400 transition duration-100" to={"/project"}>Work</Link>
        <Link className="px-8 leading-none border-2 rounded-full hover:text-lime-400 transition duration-100" to={"/agency"}>Agency</Link>
    </div>
}

export default LinkText;