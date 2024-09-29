import FaqItem from "../components/faq/FaqItem";
import IdItem from "../components/faq/IdItem";
import SpecialFlavoursFaq from "../components/faq/SpecialFlavoursFaq";

export const metadata = {
    title: 'FAQ - Chikinmos',
    description: 'Descubra aquí las respuestas a las preguntas más frecuentes.',
};

const qalist = [
    {   id:1,
        question: "¿Qué es Chikinmos?",
        answer: "Somos un pequeño restaurante especializado en pollo frito coreano que empezó su aventura en diciembre de 2023 en un acogedor local en el barrio de Salamanca, Madrid. Actualmente ya contamos con 2 restaurantes, respectivamente en General Díaz Porlier y Ayala, para que nuestros clientes puedan disfrutar en todo momento de su favorita tapa coreana."},
    {   id:3,
        question: "¿Qué tiene de diferente el pollo frito coreano?",
        answer: "Muchos se preguntarán por qué hace falta remarcar que es coreano, ¿vale la pena ir teniendo un KFC o un Popeyes en la puerta de casa? Los amantes de K-dramas sabrán que en Corea el pollo frito, llamado Chikin, es conocido por su especial fritura para ser acompañada con una salsa, lo que le aporta un toque creativo ya que tienes innumerables sabores entre los que elegir. En Chikinmos tenemos actualmente 9 salsas diferentes a degustar y estamos en constante proceso de innovación para traerte nuevas experiencias gastronómicas."},
    {   id:5,
        question: "¿Qué es La Misteriosa?",
        answer: "Para mantener un poco la curiosidad de todo el mundo hemos decidido crear una salsa misteriosa que irá cambiando cada cierto periodo de tiempo. Acordaros de consultar con el camarero los alérgenos en el caso de que alguien quiera probar esta atrevida salsa. Sólo para los más valientes, eh."},
    {   id:6,
        question: "¿Aparte de pollo frito tenéis más comida?",
        answer: "¡Claro que sí! Contamos con una gran variedad de tapas coreanas que seguramente te suenen si eres amante de la increíble gastronomía de este país."},
    {   id:7,
        question: "¿Los platos se preparan caseramente?",
        answer: "Nos enorgullece decir desde Chikinmos que toda la comida que servimos está preparada de forma casera, desde el kimchi hasta el chikin, pasando claro por nuestros clásicos platos mandu, bulgogi, kimbap, etc. Hecho con amor y cariño para que al probarlo te immergas directamente en una casita de Seul a comer con la familia. Ten en cuenta que como ciertos platos se preparan al momento pueden tardar un poquito más, pero hacemos todo lo posible para que sientas que ha merecido la pena el tiempo de espera."},
    {   id:8,
        question: "¿Cómo puedo hacer una reserva?",
        answer: "Como muchos habréis visto ya, nuestro local ubicado en la calle General Diaz Porlier es muy muy pequeño. Por lo tanto hemos decidido cancelar el servicio de reservas temporalmente para que el mayor número posible de clientes puedan disfrutar de la comida. Es decir, atendemos por orden de llegada para que no se queden mesas vacías mientras otros esperan fuera."},
    {   id:9,
        question: "¿Tienen opciones para vegetarianos o veganos?",
        answer: "Actualmente, nuestro menú está enfocado principalmente en el pollo frito coreano, pero también ofrecemos algunos acompañamientos como ensaladas y guarniciones veganas. Consulta con el camarero la posibilidad de preparar algo especialmente para ti."},
    {   id:10,
        question: "¿Tienen opciones sin gluten?",
        answer: "No, sentimos mucho que los amigos celíacos no puedan disfrutar de momento de nuestra deliciosa comida. ¡Estamos trabajando en ello!"},
    {   id:11,
        question: "¿Ofrecen servicio de delivery?",
        answer: "Lamentablemente no contamos con el personal necesario para llevarte a casa el sabroso Chikin, pero puedes venir a recogerlo tú como takeaway. O si lo prefieres también contamos con servicio a domicilio con la plataforma de Just Eat."},
]

export default function Page() {

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="title">FAQ</h1>
            <p>Aquí puede encontrar las respuestas a preguntas más frecuentes</p>
            <div className="mt-8 faq-item-container flex flex-col items-center w-full lg:w-10/12 gap-4 ">
                {
                    qalist.map( (qaitem) =>{
                        return(
                            <FaqItem
                                key={qaitem.id}
                                question={qaitem.question}
                                answer={qaitem.answer}
                            />
                        );
                    })
                }
                <SpecialFlavoursFaq />
                <IdItem />
            </div>
            

        </div>
    );
    }