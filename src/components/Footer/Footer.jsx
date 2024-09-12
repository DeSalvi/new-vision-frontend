import './footer.css'

const Footer = () => {

    return (
        <div className="fullfoot">
            <footer style={{ backgroundColor: 'black' }}>
                <div className="containerfooter">
                    <button type="button" className="btnf" style={{ background: 'linear-gradient(#f9ce34,#ee2a7b,#6228d7)' }}>
                        <i className="bi bi-instagram"></i>
                    </button>
                    <button type="button" className="btnf" style={{ backgroundColor: 'rgb(29, 161, 242)' }}>
                        <i className="bi bi-twitter"></i>
                    </button>
                    <button type="button" className="btnf" style={{ backgroundColor: 'rgb(66, 103, 178)' }}>
                        <i className="bi bi-facebook"></i>
                    </button>
                    <button type="button" className="btnf" style={{ backgroundColor: 'rgb(37, 211, 102)' }}>
                        <i className="bi bi-whatsapp"></i>
                    </button>
                </div>


                <div className="cop" style={{ backgroundColor: 'black' }}>
                    © 2024 Copyright: <div><a className="cadbtn" href="Login.html">NEW VISION STORE</a></div>
                </div>
            </footer>
        </div>

    )
}

export default Footer 