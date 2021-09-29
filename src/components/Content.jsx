import React from 'react'

export const Content = ({ onNext, onPrevious, prev, next, personajes = [] }) => {
    return (
        <div className="contenido">
            <table className="table mt-4">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Especie</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Localización</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personajes.map((item, index) => (
                            <tr key ={index}>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.species}</td>
                                <td>{item.gender}</td>
                                <td>{item.location.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
