import Typewriter from "@/components/utils/Typewriter";

export default function Main() {
    return (
        <section className="relative flex items-center justify-center h-screen text-white text-center bg-black" style={{ marginTop: "86px !important" }}>
            {/* Video de fondo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
                autoPlay
                loop
                muted
                preload="metadata"
            >
                <source src="https://storage.googleapis.com/la_liga_files/videos/video_bg_basket.mp4" type="video/mp4" />
                <source src="/videos/video_bg_basket.mp4" type="video/mp4" />
            </video>

            {/* Overlay Oscuro */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-4xl mt-[-50px]">
                <h1 className="text-4xl font-semibold tracking-wide opacity-100">
                    SOMOS BASKETCENTER
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold uppercase mt-4 drop-shadow-[3px_3px_8px_rgba(0,0,0,0.7)]">
                    <Typewriter
                        messages={[
                            "BASKETCENTER: EXPERIENCIA, COMPETENCIA Y PASIÓN",
                            "ENTRENA COMO UN PROFESIONAL, COMPITE CON LOS MEJORES",
                            "MEJORA TU TÉCNICA, PERFECCIONA TU JUEGO",
                        ]}
                    />
                </h2>
            </div>
        </section>
    );
}
