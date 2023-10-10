import Header from "./components/Header";
import Footer from "./components/Footer";

const Contact = () => {
    return (<>
        <section className="hero is-white is-medium is-bold">
            {/*<div className="hero-head">*/}
            {/*    <Header />*/}
            {/*</div>*/}
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Contact us
                    </h1>
                    <h2 className="subtitle">
                        We're always happy to hear from you, so feel free to contact us:
                    </h2>
                </div>
            </div>
        </section>

        <div className="container has-text-centered is-fullheight mt-6" style={{ height: "100vh" }}>
            <section className="mt-6">
                <div className="columns is-centered is-multiline is-mobile is-vcentered">
                    <div className="column card p-6 is-12-mobile is-4-tablet is-4-desktop">
                        <div className="card-body">
                            <a href="https://www.linkedin.com/in/jack-millward-7536b8295/" target="_blank" rel="noreferrer" style={{borderBottom: "none"}}>
                                <i className="lni lni-linkedin-original is-size-2"></i>
                                <p>LinkedIn</p>
                            </a>
                        </div>
                    </div>

                    <div className="column card p-6 is-12-mobile is-4-tablet is-4-desktop">
                        <div className="card-body">
                            <a href="tel:+447709642350" target="_blank" rel="noreferrer">
                                <i className="lni lni-phone is-size-2"></i>
                                <p>+(44)7709642350</p>
                            </a>
                        </div>
                    </div>

                    <div className="column card p-6 is-12-mobile is-4-tablet is-4-desktop">
                        <div className="card-body">
                            <a href="mailto:contact@jmsoftwareltd.com?subject=Customer Enquiry" target="_blank" rel="noreferrer">
                                <i className="lni lni-envelope is-size-2"></i>
                                <p>contact@jmsoftwareltd.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/*<Footer />*/}
    </>)
}

export default Contact