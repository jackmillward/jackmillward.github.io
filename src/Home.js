import { Fragment } from 'react';
import 'bulma/css/bulma.min.css';
import './Home.css';

const Home = () => {
    return (
        <Fragment>
    <section class="hero is-white is-medium is-bold">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="../">
                                <img src="img/logo-darker.png" alt="Logo" style={{maxHeight:"3rem"}} />
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <div class="tabs is-right">
                                    <ul>
                                        <li><a>Home</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                      Excellent software doesn't have to cost an arm and a leg.
                    </h1>
                    <h2 class="subtitle">
                      Your experts in functional, modern and extensible software.
                    </h2>
                </div>
            </div>
        </section>
        <div class="box cta">
            <p class="has-text-centered">
                Take a look below at what we can offer your business.
            </p>
        </div>
        <section class="container">
            <div class="columns features is-multiline is-mobile">
                <div class="column is-4 is-flex">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-paw"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Responsive Design</h4>
                                <p>As experts in PHP, Laravel and JavaScript development, we can deliver anything from simple websites to complex APIs. Utilising frameworks like Laravel, React and Vue, we can meet almost any vision.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-empire"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Deployment &amp; CI/CD</h4>
                                <p>Great code is worth nothing if it can't be deployed painlessly. Our developers have an extensive skillset with a variety of workflows to make sure that the latest code is deployed to suit your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-apple"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Testing</h4>
                                <p>Utilising frameworks like PHPUnit &amp; Jest, we can make sure that the code that we deliver is to the highest-standard possible, as well as protecting the code from regressions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-apple"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Cloud Computing</h4>
                                <p>No matter the size of your project, cloud computing has a function for you. As experts on AWS and Google Cloud Platform, we can help make sure your application scales properly, ensuring that costs are maintained for you and your customers get the best experience possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-apple"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Data Storage</h4>
                                <p>Whether your older database needs some TLC or you want to use the latest and greatest technology, we can help.</p>
                                <p>We happily work with MySQL, MariaDB, PostgreSQL, MongoDB, CouchDB, Firebase or even CloudSQL/Amazon RDS.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-apple"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Open Source</h4>
                                <p>We love free and open-source software, and are champions of using Linux to run all of our stack.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div class="intro column is-8 is-offset-2"> */}
            {/*     <h2 class="title">Perfect for developers or designers!</h2><br /> */}
            {/*     <p class="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p> */}
            {/* </div> */}
            {/* <div class="sandbox"> */}
            {/*     <div class="tile is-ancestor"> */}
            {/*         <div class="tile is-parent is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <p class="title">Hello World</p> */}
            {/*                 <p class="subtitle">What is up?</p> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div class="tile is-parent is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <p class="title">Foo</p> */}
            {/*                 <p class="subtitle">Bar</p> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div class="tile is-parent is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <p class="title">Third column</p> */}
            {/*                 <p class="subtitle">With some content</p> */}
            {/*                 <div class="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*     </div> */}
            {/*     <div class="tile is-ancestor"> */}
            {/*         <div class="tile is-vertical is-8"> */}
            {/*             <div class="tile"> */}
            {/*                 <div class="tile is-parent is-vertical"> */}
            {/*                     <article class="tile is-child notification is-white"> */}
            {/*                         <p class="title">Vertical tiles</p> */}
            {/*                         <p class="subtitle">Top box</p> */}
            {/*                     </article> */}
            {/*                     <article class="tile is-child notification is-white"> */}
            {/*                         <p class="title">Vertical tiles</p> */}
            {/*                         <p class="subtitle">Bottom box</p> */}
            {/*                     </article> */}
            {/*                 </div> */}
            {/*                 <div class="tile is-parent"> */}
            {/*                     <article class="tile is-child notification is-white"> */}
            {/*                         <p class="title">Middle box</p> */}
            {/*                         <p class="subtitle">With an image</p> */}
            {/*                         <figure class="image is-4by3"> */}
            {/*                             <img src="https://picsum.photos/640/480/?random" alt="Description" /> */}
            {/*                         </figure> */}
            {/*                     </article> */}
            {/*                 </div> */}
            {/*             </div> */}
            {/*             <div class="tile is-parent is-shady"> */}
            {/*                 <article class="tile is-child notification is-white"> */}
            {/*                     <p class="title">Wide column</p> */}
            {/*                     <p class="subtitle">Aligned with the right column</p> */}
            {/*                     <div class="content"> */}
            {/*                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                     </div> */}
            {/*                 </article> */}
            {/*             </div> */}
            {/*         </div> */}
            {/*         <div class="tile is-parent is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <div class="content"> */}
            {/*                     <p class="title">Tall column</p> */}
            {/*                     <p class="subtitle">With even more content</p> */}
            {/*                     <div class="content"> */}
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
            {/*     <div class="tile is-ancestor"> */}
            {/*         <div class="tile is-parent is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <p class="title">Side column</p> */}
            {/*                 <p class="subtitle">With some content</p> */}
            {/*                 <div class="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div class="tile is-parent is-8 is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <p class="title">Main column</p> */}
            {/*                 <p class="subtitle">With some content</p> */}
            {/*                 <div class="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*     </div> */}
            {/*     <div class="tile is-ancestor"> */}
            {/*         <div class="tile is-parent is-8 is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <p class="title">Murphy's law</p> */}
            {/*                 <p class="subtitle">Anything that can go wrong will go wrong</p> */}
            {/*                 <div class="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*         <div class="tile is-parent is-shady"> */}
            {/*             <article class="tile is-child notification is-white"> */}
            {/*                 <p class="title">Main column</p> */}
            {/*                 <p class="subtitle">With some content</p> */}
            {/*                 <div class="content"> */}
            {/*                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> */}
            {/*                 </div> */}
            {/*             </article> */}
            {/*         </div> */}
            {/*     </div> */}
            {/* </div> */}
        </section>
        <footer class="footer">
            <div class="container">
            </div>
        </footer>

        </Fragment>
    )
}

export default Home;
