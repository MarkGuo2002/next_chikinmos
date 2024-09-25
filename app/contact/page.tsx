import RestaurantCard from "../components/contact/RestaurantCard";
const exampleImagePath = "/images/example.png";
const deco = "/images/deliciouswings.png";

export const metadata = {
  title: 'Contacto - Chikinmos',
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
            image={exampleImagePath}
            address="Calle General Díaz Porlier 38 28001"
            phone="688 666 666"
            mail="chik@gmail.com"
            link="https://www.google.com/maps/place/Chikinmos/@40.4283983,-3.6794126,17z/data=!3m1!4b1!4m6!3m5!1s0xd422930a2d38487:0x3335d0084940135c!8m2!3d40.4283942!4d-3.6768377!16s%2Fg%2F11vjk107ns?entry=ttu"
          />
        </div>
        <div className="w-full lg:w-5/12">
          <RestaurantCard
            title="Chikinmos Holamundo"
            image={exampleImagePath}
            address="Calle muy nuevo 38 28001"
            phone="688 888 886"
            mail="chik2@gmail.com"
            link="https://www.google.com/maps/place/Chikinmos/@40.4283983,-3.6794126,17z/data=!3m1!4b1!4m6!3m5!1s0xd422930a2d38487:0x3335d0084940135c!8m2!3d40.4283942!4d-3.6768377!16s%2Fg%2F11vjk107ns?entry=ttu"
          />
        </div>
       
      
      </div>
    </div>
  );
}
