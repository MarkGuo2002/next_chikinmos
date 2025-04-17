import FooterLink from "./FooterLink";

export default function Footer(){
    return(
        <div className="w-full pt-12 pb-6 bg-gray200 text-center z-10 flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-center">
                <FooterLink link="/privacy-policy" text="Política de Privacidad" />
                <p>•</p>
                <FooterLink link="/legal-notice" text="Aviso Legal" />
            </div>
            <p className="text-gray300"> Chikinmos 2025 </p>
        </div>
    )
}