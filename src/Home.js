import {Fragment} from 'react';
import './Home.css';
import PageSwirls from "./components/PageSwirls";

const Home = () => {
    const featuresData = [
        {
            icon: 'laptop-phone',
            title: 'Responsive design',
            paragraphs: [
                'As experts in PHP, Laravel and JavaScript development, we can deliver anything from simple websites to complex APIs. Utilising frameworks like Laravel, React and Vue, we can meet almost any vision.',
            ],
        },
        {
            icon: 'helmet',
            title: 'Deployment & CI/CD',
            paragraphs: [
                'Great code is worth nothing if it can\'t be deployed painlessly. Our developers have an extensive skillset with a variety of workflows to make sure that the latest code is deployed to suit your needs.',
            ],
        },
        {
            icon: 'bug',
            title: 'Testing',
            paragraphs: [
                'Utilising frameworks like PHPUnit & Jest, we can make sure that the code that we deliver is to the highest-standard possible, as well as protecting the code from regressions.'
            ],
        },
        {
            icon: 'cloud',
            title: 'Cloud Computing',
            paragraphs: [
                'No matter the size of your project, cloud computing has a function for you. As experts on AWS and Google Cloud Platform, we can help make sure your application scales properly, ensuring that costs are maintained for you and your customers get the best experience possible.'
            ],
        },
        {
            icon: 'harddrive',
            title: 'Data Storage',
            paragraphs: [
                'Whether your older database needs some TLC or you want to use the latest and greatest technology, we can help.',
                'We happily work with MySQL, MariaDB, PostgreSQL, MongoDB, CouchDB, Firebase or even CloudSQL/Amazon RDS.',
            ],
        },
        {
            icon: 'code',
            title: 'Open Source',
            paragraphs: [
                'We love free and open-source software, and are champions of using Linux to run all of our stack.'
            ],
        },
    ]

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
                                    Excellent software built the way you want it.
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

                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map((feature) => (
                            <div className="w-full">
                                <div className="wow fadeInUp" data-wow-delay=".15s">
                                    <div
                                        className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                        <i className={`lni lni-${feature.icon} text-3xl`}/>
                                    </div>
                                    <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                        {feature.title}
                                    </h3>
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                                        {feature.paragraphs.map((paragraph) => <p>{paragraph}</p>)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
