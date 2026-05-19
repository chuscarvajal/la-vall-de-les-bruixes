import Image from "next/image";

const photos = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHerWfC_C-fHbBj-HjL8FkqlpjOzSK8De9Tfo1yRGTXDSGu0XVIWsPLl6sEB65QnVrpUsb4CHcBiR-YgIG_0qWjRRKgyajSFua6yVe8YzZrW9B4AHRhj0nkj-5gFosLfwo5HGHJ=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH81v34AODKihfrnf8qq8GxkLjTW_ruaFimuIJppgRifHgXpjhfTe0rXM75arzaiT3opYLMBC1n61Pp-DUUrgeJgFawNui30NH_3LMC-Rd6JxZ_NSDe0oi12TkK4TaW34nNIJjP=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFiN9JR4MLvukNkpZiXkPpzcbaYk4xXR6Z4oNieXgxNz1UAcx_Yj4J8jAa5Fs4fzkjYDuTIBUxtTx8o7CND_fLZ7AFMLgoPOEtvYsqszh8WU_TAnYz4yK7H5sOlHWZEsXC56nNdmGVEwCr1=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFw7ywpGfrrqfy5yUXfqAriGv4EfzrU6-9hdbJocFiCc9hixMxiqvCT3U9jua61BhELRqFyIQIfCMKwTV-8LkC8VYwfHUH_6EcVyWrLuJbO-CvQfyZ8wQJu5YsAb7Sahku4N53xRQ=w800-h533-k-no",
];

export default function Gallery() {
  return (
    <section id="galería" className="py-16 lg:py-24 bg-[#2b2b2b] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="text-white font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl text-center mb-3">
          Galería
        </h2>
        <p className="text-white/60 text-sm text-center mb-10 tracking-wide">Fotos del negocio</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {photos.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={src}
                alt={`Galería La Vall de les Bruixes ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
