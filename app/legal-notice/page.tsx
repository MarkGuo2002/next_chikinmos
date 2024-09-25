import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center w-full md:px-72">
        <h1>AVISO LEGAL</h1>
        <div className='text-left'>
            <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
            <ul className='list-disc list-inside'>
                <li><strong>Titular: </strong>[Nombre completo del titular o empresa]</li>
                <li><strong>NIF/CIF: </strong>[Número de identificación fiscal]</li>
                <li><strong>Domicilio social: </strong>[Dirección completa]</li>
                <li><strong>Teléfono: </strong>[Número de teléfono]</li>
                <li><strong>Correo electrónico: </strong>[Dirección de correo electrónico]</li>
            </ul>
            <h2>Condiciones de uso</h2>
            <p>El acceso y/o uso de este sitio web atribuye la condición de usuario, que acepta, desde dicho acceso y/o uso, las presentes condiciones de uso. Estas condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>
            <h2>Propiedad intelectual e industrial</h2>
            <p>Los contenidos de este sitio web, incluidos, a título enunciativo, textos, imágenes, gráficos, logotipos y otros, son propiedad de [Nombre del titular o empresa], o de terceros que han autorizado su uso. Todos los derechos están reservados. Cualquier uso no autorizado de los mismos será considerado un incumplimiento de los derechos de propiedad intelectual o industrial.</p>
            <h2>Exclusión de garantías y responsabilidad</h2>
            <p>[Nombre del titular o empresa] no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo, errores u omisiones en los contenidos, falta de disponibilidad del sitio web o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
            <h2>Modificaciones</h2>
            <p>[Nombre del titular o empresa] se reserva el derecho de realizar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados.</p>
        </div>
        
    </div>
  )
}

export default page
