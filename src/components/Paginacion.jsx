import React from 'react'

export const Paginacion = ({ prev, next, onNext, onPrevious }) => {
    const onHandlerNext = () => {
        onNext()

    }
    const onHandlerPrevious = () => {
        onPrevious()
    }
    return (
        <div>

            <div className=" pagination btn-group mt-3 justify-content-center" role="group" aria-label="Basic outlined example">
                <ul className="pagination">
                    {
                        prev ? (
                            <li className="page-item">
                                <button type="button" className="btn btn-outline-primary" onClick={onHandlerPrevious}>Atras</button>
                            </li>
                        ) :
                            null
                    }
                    {
                        next ? (
                            <li className="page-item">
                                <button type="button" className="btn btn-outline-primary" onClick={onHandlerNext}>Siguiente</button>
                            </li>
                        ) : null
                    }
                </ul>
            </div>
        </div>
    )
}
