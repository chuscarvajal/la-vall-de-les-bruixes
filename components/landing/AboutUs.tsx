import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-16 lg:py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHerWfC_C-fHbBj-HjL8FkqlpjOzSK8De9Tfo1yRGTXDSGu0XVIWsPLl6sEB65QnVrpUsb4CHcBiR-YgIG_0qWjRRKgyajSFua6yVe8YzZrW9B4AHRhj0nkj-5gFosLfwo5HGHJ=w800-h600-k-no"
              alt="La Vall de les Bruixes — Adiestramiento Canino"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#2b2b2b] font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl">
              Quiénes Somos
            </h2>
            <p className="text-[#666] text-sm leading-relaxed">
              Somos La Vall de les Bruixes, una escuela de adiestramiento canino situada en el corazón del Baix Empordà, en Regencós, Girona. Un entorno natural único, apartado del ruido, donde los perros aprenden en calma y libertad.
            </p>
            <p className="text-[#666] text-sm leading-relaxed">
              Con una valoración de 4.9★ en Google, trabajamos con una metodología basada en el refuerzo positivo. Nuestros programas se adaptan a cada perro: cachorros, adultos con problemas de conducta, o simplemente perros que necesitan mejorar su obediencia básica.
            </p>
            <div className="flex flex-wrap gap-2">
              {["4.9★ Google", "Baix Empordà", "Refuerzo Positivo"].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#e0e0e0] text-[#2b2b2b] text-xs font-semibold uppercase tracking-[0.1em] px-4 py-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
