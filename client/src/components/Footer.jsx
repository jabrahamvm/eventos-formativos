import React from 'react'

const Footer = () => {
    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>Acerca de</h6>
                <p className="text-justify">
                  Sistema para gestión de eventos formativos. 
                  Integrantes: 
                  Luis Hector Aguilar Valenzuela. 
                  Rodrigo Nevarez Escobar. 
                  Luis Juventino Velasquez Hidalgo. 
                  Jesús Abraham Villalba Miranda. 
                </p>
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Enlaces</h6>
                <ul className="footer-links">
                  <li><a href="http://scanfcode.com/about/">Acerca de</a></li>
                  <li><a href="http://scanfcode.com/contact/">Contacto</a></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribuir</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Politica de privacidad</a></li>
                  <li><a href="http://scanfcode.com/sitemap/">Mapa del sitio</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2022 Derechos reservados  
                </p>
              </div>
            </div>
          </div>
    </footer>
    )
}

export default Footer