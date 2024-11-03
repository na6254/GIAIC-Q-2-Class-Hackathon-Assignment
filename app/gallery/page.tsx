import pic1 from "@/public/gallery/Frame 12.jpg";
import pic2 from "@/public/gallery/Rectangle 21.jpg";
import pic3 from "@/public/gallery/Rectangle 22.jpg";
import pic4 from "@/public/gallery/Rectangle 23.jpg";
import pic5 from "@/public/gallery/Rectangle 24.jpg";
import pic6 from "@/public/gallery/Rectangle 25.jpg";
import pic7 from "@/public/gallery/Rectangle 26.jpg";
import pic8 from "@/public/gallery/Rectangle 27.jpg";
import pic9 from "@/public/gallery/Rectangle 28.jpg";
import pic10 from "@/public/gallery/Rectangle 29.jpg";
import pic11 from "@/public/gallery/Rectangle 30.jpg";
import pic12 from "@/public/gallery/Rectangle 31.jpg";
import pic13 from "@/public/gallery/slide-numbers (1).jpg";
import pic14 from "@/public/gallery/Frame 9.jpg";
import pic15 from "@/public/gallery/Frame 8.jpg";
import Image from "next/image"
export default function Gallery(){
    return(
        <div>
        <div>
            <Image src={pic1} alt="Frame 12.jpg" className="gallerypic1" />
        </div>
        <div>
            <Image src={pic2} alt="Rectangle 21.jpg" className="horizontal-line" />
        </div>
        <table cellPadding={12} className="gallerytable">
            <tr>
                <th>
                    <Image src={pic3} alt="Rectangle 22.jpg" />
                </th>
                <th>
                    <Image src={pic4} alt="Rectangle 23.jpg" />
                </th>
                <th>
                    <Image src={pic5} alt="Rectangle 24.jpg" />
                </th>
                <th>
                    <Image src={pic6} alt="Rectangle 25.jpg" />
                </th>
                <th>
                    <Image src={pic7} alt="Rectangle 26.jpg" />
                </th>
            </tr>
            <tr>
                <th>
                    <Image src={pic8} alt="Rectangle 22.jpg" />
                </th>
                <th>
                    <Image src={pic9} alt="Rectangle 22.jpg" />
                </th>
                <th>
                    <Image src={pic10} alt="Rectangle 22.jpg" />
                </th>
                <th>
                    <Image src={pic11} alt="Rectangle 22.jpg" />
                </th>
                <th>
                    <Image src={pic12} alt="Rectangle 22.jpg" />
                </th>
            </tr>
        </table>
        <div>
            <Image src={pic13} alt="slide-numbers (1).jpg" className="gallerypic13"/>
            <Image src={pic14} alt="Frame 9.jpg" className="gallerypic14" />
            <Image src={pic15} alt="Frame 8.jpg" className="gallerypic15" />

        </div>
        </div>
        
    )
}