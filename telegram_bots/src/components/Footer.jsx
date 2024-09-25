import "lib/styles/components/Footer.scss";
import * as SVG from 'lib/svg';

function Footer() {
    return ( 
        <footer className="Footer">
            <div className="Footer-left">
                <h4>Инстаботы</h4>
                <p className="text-LTGrey font-light">© 2021 Copyright reserved
                Instabots</p>
            </div>
            <div className="Footer-right ">
                <a href="" className="flex gap-2 font-light">
                    Вернуться наверх
                    <i><SVG.Arrow/></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;