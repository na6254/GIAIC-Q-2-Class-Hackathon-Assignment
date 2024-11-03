import footer from "../public/main/Footer.jpg";
import Image from "next/image";
export default function Footer(){
    return(
        <div>
        <Image src={footer} alt="Footer.jpg" className="footer" />
    </div>
    )
}