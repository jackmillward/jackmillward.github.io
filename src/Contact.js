import {Fragment} from 'react';
import './Home.css';
import PageSwirls from "./components/PageSwirls";

const Contact = () => {
    return (
        <>
            <section
                id="home"
                className="relative z-10 overflow-hidden pt-[140px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
            >
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                                data-wow-delay=".2s"
                            >
                                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                                   Get in touch.
                                </h1>
                                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                                    Your experts in functional, modern and extensible software.
                                </p>
                                {/*<div*/}
                                {/*    className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">*/}
                                {/*    <a*/}
                                {/*        href="https://nextjstemplates.com/templates/startup"*/}
                                {/*        className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"*/}
                                {/*    >*/}
                                {/*        Download Now*/}
                                {/*    </a>*/}
                                {/*    <a*/}
                                {/*        href="https://github.com/NextJSTemplates/startup-nextjs"*/}
                                {/*        className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"*/}
                                {/*    >*/}
                                {/*        Star on GitHub*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <PageSwirls />
            </section>
            <section
                id="features"
                className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
            >
                <div className="container">
                    <div
                        className="wow fadeInUp w-full mx-auto text-center"
                        data-wow-delay=".1s"
                        style={{maxWidth: "600px", marginBottom: "100px"}}
                    >
                        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                            Our Services
                        </h2>
                        <p className="text-base !leading-relaxed text-body-color md:text-lg">
                            Take a look at what skills and knowledge we can bring to your project.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;