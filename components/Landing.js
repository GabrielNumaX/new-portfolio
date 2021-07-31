import Image from 'next/image';
import Layout from './Layout';

const Landing = () => {

    return (
        <main className="landing">

            <section className="introText">

                <h2>Hello</h2>
                <h1>I&apos;m Gabriel</h1>
                <h3>
                    A Web Developer
                    <br /> fully dedicated to
                    <br /> <span>MERN STACK</span>
                </h3>

            </section>

            <section className="introImg">

                <div className="circle"></div>

                <div className="imgContainer">
                    <Image src="/profile/numax02.png" alt="Intro Image" layout="fill" objectFit="cover" />

                </div>

            </section>


        </main>
    );
}

export default Landing;