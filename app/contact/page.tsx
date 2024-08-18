import RestaurantCard from "../components/contact/RestaurantCard";

const exampleImagePath = "/images/example.png"

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full gap-8 text-center">
            <h1 className="title">Contacta con nosotros</h1>
            <p>Si tiene alguna pregunta o inquietud, comuníquese con nosotros mediante el número de teléfono o el correo electrónico.</p>
            <div className="flex flex-col lg:flex-row w-8/12 justify-around gap-16">
                 <RestaurantCard
                    title="Chikinmos Lista"
                    image={exampleImagePath}
                    address="Calle General Díaz Porlier 38 28001"
                    phone="666 888 888"
                    mail="chikinmos@gmail.com"
                    link="https://www.google.com/maps/place/Chikinmos/@40.4283983,-3.6794126,17z/data=!3m1!4b1!4m6!3m5!1s0xd422930a2d38487:0x3335d0084940135c!8m2!3d40.4283942!4d-3.6768377!16s%2Fg%2F11vjk107ns?entry=ttu"
                />

                <RestaurantCard
                    title="Chikinmos Nuevo"
                    image={exampleImagePath}
                    address="Calle Lorem Ipsum 38 28001"
                    phone="666 888 888"
                    mail="chikinmos2@gmail.com"
                    link="https://www.google.com/maps/place/Chikinmos/@40.4283983,-3.6794126,17z/data=!3m1!4b1!4m6!3m5!1s0xd422930a2d38487:0x3335d0084940135c!8m2!3d40.4283942!4d-3.6768377!16s%2Fg%2F11vjk107ns?entry=ttu"
                />
            </div>
        </div>
    );
}
