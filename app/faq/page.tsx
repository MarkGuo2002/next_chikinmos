import FaqItem from "../components/faq/FaqItem";

const qalist = [
    {   id:1,
        question: "¿Puedo comer gratis en Chikinmos?",
        answer: "Desafortunadamente, no servimos comida gratis a ningún individuo"},
    {   id:2,
        question: "¿Puedo pedir 200 alitas extra picantes para una fiesta de 123012312 personas?",
        answer: "Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum"},
    {   id:3,
        question: "¿Puedo comer pagando en Chikinmos?",
        answer: "Por supuesto que puedes"},
    {   id:4,
        question: "¿Puedo comer gratis en Chikinmos?",
        answer: "Desafortunadamente, no servimos comida gratis a ningún individuo"},
    {   id:5,
        question: "¿Puedo pedir 200 alitas extra picantes para una fiesta de 123012312 personas?",
        answer: "Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum"},
    {   id:6,
        question: "¿Puedo comer pagando en Chikinmos?",
        answer: "Por supuesto que puedes"},
    {   id:7,
        question: "¿Puedo comer gratis en Chikinmos?",
        answer: "Desafortunadamente, no servimos comida gratis a ningún individuo"},
    {   id:8,
        question: "¿Puedo pedir 200 alitas extra picantes para una fiesta de 123012312 personas?",
        answer: "Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum"},
    {   id:9,
        question: "¿Puedo comer pagando en Chikinmos?",
        answer: "Por supuesto que puedes"},
    {   id:10,
        question: "¿Puedo comer gratis en Chikinmos?",
        answer: "Desafortunadamente, no servimos comida gratis a ningún individuo"},
    {   id:11,
        question: "¿Puedo pedir 200 alitas extra picantes para una fiesta de 123012312 personas?",
        answer: "Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum Podemos hacer incluso 500 alitas por encargo con un coste extra, lorem ipsum"},
    {   id:12,
        question: "¿Puedo comer pagando en Chikinmos?",
        answer: "Por supuesto que puedes"}
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
            </div>
            

        </div>
    );
    }