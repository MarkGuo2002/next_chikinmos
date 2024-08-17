import Image from "next/image";

export default function Page() {
    return (
        <div className="flex gap-4 flex-col justify-center items-center px-2 lg:px-16">
            <h1 className="title">Carta</h1>
            <p className="subtext">Consulte la información acerca alérgenos abajo</p>
            <div className="flex-col flex lg:flex-row gap-4">
                <div>
                    <Image
                        src={'/images/menuhalf1.jpg'}
                        alt="bg chicken"
                        className="rounded-lg border-4 border-chikBrown100"
                        width={700}
                        height={700}
                    />
                </div>
                <div>
                    <Image
                        src={'/images/menuhalf2.jpg'}
                        alt="bg chicken"
                        className="rounded-lg border-4 border-chikBrown100"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
            <div className="flex-col flex lg:flex-row gap-4">
                <div>
                    <Image
                        src={'/images/menuhalf3.jpg'}
                        alt="bg chicken"
                        className="rounded-lg border-4 border-chikBrown100"
                        width={700}
                        height={700}
                    />
                </div>
                <div>
                    <Image
                        src={'/images/menuhalf4.jpg'}
                        alt="bg chicken"
                        className="rounded-lg border-4 border-chikBrown100"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
            <h1 className="title my-4">Alérgenos</h1>
            <p> Aquí están toda la información acerca de los alérgenos...</p>
        </div>
    );
}
