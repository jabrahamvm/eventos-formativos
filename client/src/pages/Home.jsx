import React from 'react'

const Home = () => {
    return (
        <section id="Eventos">
            <article>
                <div className='eventosDisponibles'>
                    <h1>Eventos disponibles</h1>
                    <ul>
                        <li>Evento 1</li>
                        <li>Evento 2</li>
                        <li>Evento 3</li>
                        <li>Evento 4</li>
                    </ul>
                    
                </div>
                <div className='detallesEvento'>
                    <h1>Detalles de Evento</h1>
                </div>
            </article>

        </section>
    )
}

export default Home