import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer full-footer">
            <div className="content has-text-centered">
                <div className="card">
                    <div className="card-content">
                        <a href="https://www.linkedin.com/in/jack-millward-7536b8295/" target="_blank" style={{borderBottom: "none"}} rel="noreferrer">
                            <i className="lni lni-linkedin-original is-size-5"></i>
                        </a>
                        <p>© {year} JM Software Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer