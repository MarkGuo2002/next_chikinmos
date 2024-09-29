import { Metadata } from "next";
import RestaurantCard from "../components/contact/RestaurantCard";
const oldchikinmos = "/images/oldchikinmos.png";
const newchikinmos = "/images/newchikinmos.png";

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros en Chikinmos para cualquier consulta.',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full gap-4 text-center">
      <h1>
        Contacta con nosotros
      </h1>
      <p>
        Si tiene alguna pregunta o inquietud, comuníquese con nosotros mediante
        el número de teléfono o el correo electrónico.
      </p>
      <div className="top-level-shops-container flex flex-col lg:flex-row flex-wrap justify-between gap-16 w-full max-w-screen-xl mt-8">
        <div className="w-full lg:w-5/12">
          <RestaurantCard
            title="Chikinmos Lista"
            image={oldchikinmos}
            address="Calle General Díaz Porlier 38 28001"
            phone="620788877"
            mail="chikinspain@gmail.com"
            link="https://www.google.com/maps/place/Chikinmos/@40.4283983,-3.6794126,17z/data=!3m1!4b1!4m6!3m5!1s0xd422930a2d38487:0x3335d0084940135c!8m2!3d40.4283942!4d-3.6768377!16s%2Fg%2F11vjk107ns?entry=ttu"
          />
        </div>
        <div className="w-full lg:w-5/12">
          <RestaurantCard
            title="Chikinmos Ayala"
            image={newchikinmos}
            address="Calle de Ayala, 87, Salamanca, 28006 Madrid"
            phone="676580715"
            mail="chikinspain@gmail.com"
            link="https://www.google.com/maps/place/Chikinmos+Ayala/@40.4272783,-3.6751865,17z/data=!3m1!4b1!4m6!3m5!1s0xd4229b48c15988b:0xb14152140d55e536!8m2!3d40.4272749!4d-3.6730213!16s%2Fg%2F11wc6z6588?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
          />
        </div>
       
      
      </div>
    </div>
  );
}
