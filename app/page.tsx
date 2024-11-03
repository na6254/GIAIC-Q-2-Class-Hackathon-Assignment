import pic1 from "../public/main/PROJECT.jpg";
import pic2 from "../public/main/Lorum.jpg";
import pic3 from "../public/main/Rectangle 6.jpg";
import pic4 from "../public/main/Frame 9.jpg";
import pic5 from "../public/main/Frame 8.jpg";
import pic6 from "../public/main/slide-numbers.jpg";
import pic7 from "../public/main/Frame 10.jpg";
import pic8 from "../public/main/Group 13.jpg";
import pic9 from "../public/main/Group 20.jpg";
import pic10 from "../public/main/Group 79.jpg";
import pic11 from "../public/main/Group 82.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="overalldiv">
      
        <div className="parentdiv">
         
          <div>
              <Image  src={pic1} alt="PROJECT.jpg" className="pic1div"/> <br />
              <Image  src={pic2} alt="Lorum.jpg" className="pic2div"/>
              <Image  src={pic4} alt="Frame 9.jpg" className="pic4div"/>
              <Image  src={pic5} alt="Frame 8.jpg" className="pic5div"/> <br />
              <Image  src={pic6} alt="slide-numbers.jpg" className="pic6div"/>
          </div>
          
          <div>
              <Image src={pic3} alt="Rectangle 6.jpg" className="pic3div" />
              <Image src={pic7} alt="Frame 10.jpg" className="pic7div" />
          </div>

        </div>


        <div>
            <Image src={pic8} alt="Group 13.jpg" className="pic8div" />
        </div>

        <div>
            <Image src={pic9} alt="Group 20.jpg" className="pic9div" />
        </div>

        <div>
            <Image src={pic10} alt="Group 79.jpg" className="pic10div" />
        </div>

        <div>
            <Image src={pic11} alt="Group 82.jpg" className="pic11div" />
        </div>
    </div>
  );
}
