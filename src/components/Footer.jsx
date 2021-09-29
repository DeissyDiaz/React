import React from 'react'
import "../css/footer.css"

export const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <p className="footer-links">
                        <a href="#">Home</a>
                    </p>
                    <p className="footer-company-name">Sena &copy; 2021</p>
                    <div className="footer-icons">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        <a href="#"><i className="bi bi-github"></i></a>
                    </div>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>KR 15 e # 18-92</span> Colombia</p>
                    </div>
                    <div>
                    <i className="bi bi-telephone"></i>
                        <p>+57 3196595044</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="jsgachancipa@misena.edu.co">jsgachancipa@misena.edu.co</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>Acerca de mi</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ex saepe fugit deleniti obcaecati doloribus possimus delectus, reprehenderit eius nobis eveniet nulla.
                    </p>
                </div>
            </footer>
        </div>
    )
}
