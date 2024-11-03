import header from "../public/main/Component 1.jpg";
import Image from "next/image";
export default function Header(){
    return(
        <div className="headerdiv">
        <Image src={header} alt="Header"/>
    </div>
    )
}