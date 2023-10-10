import {Fragment} from 'react';
import 'bulma/css/bulma.min.css';
import './Home.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = () => {
    return (<>
        <section className="hero is-white is-medium is-bold">
            <div className="hero-head">
                <Header />
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Excellent software, built the way you want it.
                    </h1>
                    <h2 className="subtitle">
                        Your experts in functional, modern and extensible software.
                    </h2>
                </div>
            </div>
        </section>
        <div className="box cta">
            <p className="has-text-centered">
                Take a look below at what we can offer your business.
            </p>
        </div>
        <section className="container mb-4">
            <div className="columns features is-multiline is-mobile">
                <div className="column is-4-desktop is-flex is-full-mobile is-6-tablet">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-paw"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Responsive Design</h4>
                                <p>As experts in PHP, Laravel and JavaScript development, we can deliver anything
                                    from simple websites to complex APIs. Utilising frameworks like Laravel, React
                                    and Vue, we can meet almost any vision.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4-desktop is-flex is-full-mobile is-6-tablet">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-empire"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Deployment &amp; CI/CD</h4>
                                <p>Great code is worth nothing if it can't be deployed painlessly. Our developers
                                    have an extensive skillset with a variety of workflows to make sure that the
                                    latest code is deployed to suit your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-full-mobile is-4-desktop is-flex is-6-tablet">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-apple"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Testing</h4>
                                <p>Utilising frameworks like PHPUnit &amp; Jest, we can make sure that the code that
                                    we deliver is to the highest-standard possible, as well as protecting the code
                                    from regressions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-full-mobile is-4-desktop is-flex is-6-tablet">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-apple"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Cloud Computing</h4>
                                <p>No matter the size of your project, cloud computing has a function for you. As
                                    experts on AWS and Google Cloud Platform, we can help make sure your application
                                    scales properly, ensuring that costs are maintained for you and your customers
                                    get the best experience possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-full-mobile is-4-desktop is-flex is-6-tablet">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-apple"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Data Storage</h4>
                                <p>Whether your older database needs some TLC or you want to use the latest and
                                    greatest technology, we can help.</p>
                                <p>We happily work with MySQL, MariaDB, PostgreSQL, MongoDB, CouchDB, Firebase or
                                    even CloudSQL/Amazon RDS.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-full-mobile is-4-desktop is-flex is-6-tablet">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-apple"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Open Source</h4>
                                <p>We love free and open-source software, and are champions of using Linux to run
                                    all of our stack.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="intro column is-8 is-offset-2"> */}
            {/*     <h2 className="title">Perfect for developers or designers!</h2><br /> */}
            {/*     <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p> */}
            {/* </div> */}
            {/* <div className="sandbox"> */}
            {/*     <div className="tile is-ancestor"> */}
            {/*         <div className="tile is-parent is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <p className="title">Hello World</p> */}
            {/*                 <p className="subtitle">What is up?</p> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div className="tile is-parent is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <p className="title">Foo</p> */}
            {/*                 <p className="subtitle">Bar</p> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div className="tile is-parent is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <p className="title">Third column</p> */}
            {/*                 <p className="subtitle">With some content</p> */}
            {/*                 <div className="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*     </div> */}
            {/*     <div className="tile is-ancestor"> */}
            {/*         <div className="tile is-vertical is-8"> */}
            {/*             <div className="tile"> */}
            {/*                 <div className="tile is-parent is-vertical"> */}
            {/*                     <article className="tile is-child notification is-white"> */}
            {/*                         <p className="title">Vertical tiles</p> */}
            {/*                         <p className="subtitle">Top box</p> */}
            {/*                     </article> */}
            {/*                     <article className="tile is-child notification is-white"> */}
            {/*                         <p className="title">Vertical tiles</p> */}
            {/*                         <p className="subtitle">Bottom box</p> */}
            {/*                     </article> */}
            {/*                 </div> */}
            {/*                 <div className="tile is-parent"> */}
            {/*                     <article className="tile is-child notification is-white"> */}
            {/*                         <p className="title">Middle box</p> */}
            {/*                         <p className="subtitle">With an image</p> */}
            {/*                         <figure className="image is-4by3"> */}
            {/*                             <img src="https://picsum.photos/640/480/?random" alt="Description" /> */}
            {/*                         </figure> */}
            {/*                     </article> */}
            {/*                 </div> */}
            {/*             </div> */}
            {/*             <div className="tile is-parent is-shady"> */}
            {/*                 <article className="tile is-child notification is-white"> */}
            {/*                     <p className="title">Wide column</p> */}
            {/*                     <p className="subtitle">Aligned with the right column</p> */}
            {/*                     <div className="content"> */}
            {/*                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                     </div> */}
            {/*                 </article> */}
            {/*             </div> */}
            {/*         </div> */}
            {/*         <div className="tile is-parent is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <div className="content"> */}
            {/*                     <p className="title">Tall column</p> */}
            {/*                     <p className="subtitle">With even more content</p> */}
            {/*                     <div className="content"> */}
            {/*                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula */}
            {/*                         eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p> */}
            {/*                         <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet */}
            {/*                         felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p> */}
            {/*                         <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam */}
            {/*                         ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p> */}
            {/*                     </div> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*     </div> */}
            {/*     <div className="tile is-ancestor"> */}
            {/*         <div className="tile is-parent is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <p className="title">Side column</p> */}
            {/*                 <p className="subtitle">With some content</p> */}
            {/*                 <div className="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div className="tile is-parent is-8 is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <p className="title">Main column</p> */}
            {/*                 <p className="subtitle">With some content</p> */}
            {/*                 <div className="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*     </div> */}
            {/*     <div className="tile is-ancestor"> */}
            {/*         <div className="tile is-parent is-8 is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <p className="title">Murphy's law</p> */}
            {/*                 <p className="subtitle">Anything that can go wrong will go wrong</p> */}
            {/*                 <div className="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div className="tile is-parent is-shady"> */}
            {/*             <article className="tile is-child notification is-white"> */}
            {/*                 <p className="title">Main column</p> */}
            {/*                 <p className="subtitle">With some content</p> */}
            {/*                 <div className="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*     </div> */}
            {/* </div> */}
        </section>

        <Footer />
    </>)
}

export default Home;
