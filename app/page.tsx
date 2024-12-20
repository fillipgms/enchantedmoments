import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import bgimg from "@/public/bgimg.jpg";

export default function Home() {
    return (
        <>
            <div className="h-screen flex flex-col items-stretch">
                <Header />
                <section className="md:px-10 px-5 h-full flex items-center justify-center gap-2 flex-col relative">
                    <Image
                        width={bgimg.width}
                        height={bgimg.height}
                        src={bgimg.src}
                        alt="image"
                        className="absolute w-full h-full top-o object-cover -z-20 brightness-50"
                    />
                    <div className="max-w-[50rem] space-y-1">
                        <h1 className="md:text-5xl capitalize text-4xl font-bold text-center text-background">
                            Festas incríveis começam aqui
                        </h1>
                        <p className="md:text-lg text-center text-background">
                            Alugue mesas, cadeiras e tudo o que você precisa
                            para um evento perfeito. Simples, rápido e
                            confiável.
                        </p>
                    </div>
                    <Button link="/fazerpedido">Faça sua reserva</Button>
                </section>
            </div>

            <section className="md:px-10 px-5 py-3">
                <h2 className="text-xl font-bold text-center">
                    Nossos Produtos
                </h2>
            </section>
        </>
    );
}
