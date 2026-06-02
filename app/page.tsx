export default function Home() {
  return (
    <main className="bg-[#07111f] text-white overflow-hidden">

      {/* HERO PREMIUM */}

      <section className="relative min-h-screen flex items-center border-b border-blue-950 overflow-hidden">

        {/* IMAGE FOND */}

        <div className="absolute inset-0">

          <img
            src="/images/hero-presse-premium.png"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/50" />

        </div>

        {/* HEADER PREMIUM */}

        <header className="absolute top-0 left-0 w-full z-30">

          <div className="backdrop-blur-xl bg-[#07111f]/70 border-b border-blue-900/40">

            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

              {/* LOGO */}

              <div>

                <h1 className="text-3xl lg:text-3xl font-black tracking-wide text-white leading-none">
                  A.MARQUES OUTILLAGE
                </h1>

                <p className="text-blue-400 uppercase tracking-[4px] text-xs mt-2">
                  SPECIALISTE DU DECOUPAGE-EMBOUTISSAGE
                </p>

              </div>

              {/* MENU */}

              <nav className="hidden lg:flex items-center gap-10">

                <a
                  href="#entreprise"
                  className="text-white/80 hover:text-blue-400 transition font-medium"
                >
                  Entreprise
                </a>

                <a
                  href="#machines"
                  className="text-white/80 hover:text-blue-400 transition font-medium"
                >
                  Parc machines
                </a>

                <a
                  href="#realisations"
                  className="text-white/80 hover:text-blue-400 transition font-medium"
                >
                  Réalisations
                </a>

                <a
                  href="#rse"
                  className="text-white/80 hover:text-green-400 transition font-medium"
                >
                  RSE
                </a>

                <a
                  href="#contact"
                  className="text-white/80 hover:text-blue-400 transition font-medium"
                >
                  Contact
                </a>

              </nav>

              {/* BOUTON */}

              <a
                href="mailto:a.marques.outillage@gmail.com?subject=Demande%20de%20devis"
                className="hidden md:flex bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-2xl font-bold shadow-2xl"
              >
                Demander un devis
              </a>

            </div>

          </div>

        </header>

        {/* CONTENU HERO */}

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-36">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[6px] text-blue-400 font-semibold mb-8 text-sm">
              Découpage • Emboutissage • Tôlerie
            </p>

            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8">

  Découpage,
  <br />

  <span className="text-blue-500">
    Emboutissage
  </span>

  <br />

  et Tôlerie Industrielle

</h1>

            <p className="text-blue-100 text-xl leading-relaxed max-w-3xl mb-12">

  A.Marques Outillage est spécialisée dans le découpage,
  l'emboutissage et la tôlerie industrielle en Seine-et-Marne.

  Nous fabriquons des pièces métalliques techniques pour les
  secteurs du ferroviaire, du médical, de l'aéronautique,
  du spatial et de l'ameublement.

</p>
<address></address>
            <div className="flex flex-wrap gap-5">

              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-bold shadow-2xl"
              >
                Demander un devis
              </a>

              <a
                href="#machines"
                className="border border-blue-700 hover:border-blue-400 hover:bg-blue-900/30 transition px-8 py-4 rounded-2xl font-bold backdrop-blur-sm"
              >
                Découvrir nos machines
              </a>

            </div>

<div className="flex flex-wrap gap-4 mt-10">

  <div className="bg-blue-950/60 px-5 py-3 rounded-xl border border-blue-800">
    Découpage industriel
  </div>

  <div className="bg-blue-950/60 px-5 py-3 rounded-xl border border-blue-800">
    Emboutissage
  </div>

  <div className="bg-blue-950/60 px-5 py-3 rounded-xl border border-blue-800">
    Tôlerie industrielle
  </div>

  <div className="bg-blue-950/60 px-5 py-3 rounded-xl border border-blue-800">
    Seine-et-Marne
  </div>

</div>
          </div>

        </div>

      </section>

      {/* ENTREPRISE */}

      <section
        id="entreprise"
        className="py-24 border-b border-blue-950 bg-[#07111f]"
      >

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase text-blue-400 tracking-[4px] font-semibold mb-4">
                Notre entreprise
              </p>

              <h2 className="text-5xl font-black mb-8">
                Plus de 20 ans
                <br />
                de savoir-faire industriel
              </h2>

              <p className="text-blue-100 text-xl leading-relaxed mb-8">
                Spécialisée dans le découpage, l’emboutissage et la tôlerie,
                A.Marques Outillage fabrique des pièces métalliques techniques
                pour des secteurs exigeants.
              </p>

              <p className="text-blue-200/70 leading-relaxed mb-12">
                Nous travaillons pour les secteurs médical,
                aéronautique, spatial, ferroviaire et ameublement.
              </p>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#0d1726] border border-blue-950 rounded-3xl p-7 shadow-xl">

                  <div className="text-4xl font-black text-blue-400 mb-3">
                    10
                  </div>

                  <p className="text-blue-100">
                    Presses industrielles
                  </p>

                </div>

                <div className="bg-[#0d1726] border border-blue-950 rounded-3xl p-7 shadow-xl">

                  <div className="text-4xl font-black text-blue-400 mb-3">
                    20+
                  </div>

                  <p className="text-blue-100">
                    Années d’expérience
                  </p>

                </div>

              </div>

            </div>

            <div>

              <img
                src="/images/plieuse.jpg"
                alt=""
                className="rounded-[35px] shadow-2xl border border-blue-950"
              />

            </div>

          </div>

        </div>

      </section>

      {/* MACHINES */}

      <section
        id="machines"
        className="py-24 border-b border-blue-950 bg-[#081321]"
      >

        <div className="max-w-7xl mx-auto px-8">

          <div className="mb-16">

            <p className="uppercase text-blue-400 tracking-[4px] font-semibold mb-4">
              Parc machines
            </p>

            <h2 className="text-5xl font-black">
              Nos moyens de production
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-7">

            {[
              {
                image: "/images/bret.jpg",
                title: "Presse Bret 100 Tonnes",
                text: "Ligne de découpage automatique avec déroulage.",
              },
              {
                image: "/images/haco.jpg",
                title: "Cisaille HACO",
                text: "Découpe haute précision jusqu’à 2000 mm.",
              },
              {
                image: "/images/plieuse.jpg",
                title: "Plieuse Amada",
                text: "Pliage industriel haute précision.",
              },
              {
                image: "/images/poinconneuse.jpg",
                title: "Poinçonneuse",
                text: "Production rapide et précise.",
              },
              {
                image: "/images/presse50.jpg",
                title: "Presse 50 Tonnes",
                text: "Découpage et emboutissage technique.",
              },
            ].map((machine, index) => (

              <div
                key={index}
                className="group bg-[#0d1726] border border-blue-950 rounded-[28px] overflow-hidden hover:border-blue-500 transition duration-500 shadow-xl"
              >

                <div className="bg-white p-4">

                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="h-[280px] w-full object-contain group-hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-3">
                    {machine.title}
                  </h3>

                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {machine.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* REALISATIONS */}

      <section
        id="realisations"
        className="py-24 border-b border-blue-950 bg-[#07111f]"
      >

        <div className="max-w-7xl mx-auto px-8">

          <div className="mb-16">

            <p className="uppercase text-blue-400 tracking-[4px] font-semibold mb-4">
              Galerie photos
            </p>

            <h2 className="text-5xl font-black">
              Nos réalisations
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "realisation1.jpg",
              "realisation2.jpg",
              "realisation3.jpg",
              
              
              
            ].map((image, index) => (

              <div
                key={index}
                className="bg-white rounded-[28px] p-4 shadow-2xl border border-blue-950"
              >

                <img
                  src={`/images/${image}`}
                  alt=""
                  className="h-[320px] w-full object-contain"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* RSE */}

      <section
        id="rse"
        className="py-24 border-b border-green-950 bg-[#04110a]"
      >

        <div className="max-w-7xl mx-auto px-8">

          <div className="flex items-center gap-5 mb-8">

            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">

              <span className="text-4xl">
                🌿
              </span>

            </div>

            <p className="uppercase text-green-400 tracking-[4px] font-semibold">
              RSE & Engagement environnemental
            </p>

          </div>

          <h2 className="text-5xl font-black mb-8">
            Une industrie
            <br />
            plus responsable
          </h2>

          <p className="text-green-100 text-xl leading-relaxed max-w-4xl mb-16">
            A.Marques Outillage s’engage dans une démarche responsable
            visant à optimiser ses productions, réduire les pertes matières
            et favoriser des solutions durables.
          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-24 bg-[#07111f]"
      >

        <div className="max-w-5xl mx-auto px-8 text-center">

          <p className="uppercase text-blue-400 tracking-[4px] font-semibold mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-black mb-8">
            Parlons de votre projet
          </h2>

          <p className="text-blue-100 text-xl mb-12">
            Notre équipe vous accompagne dans vos besoins industriels.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="bg-[#0d1726] border border-blue-950 rounded-3xl p-8">

              <h3 className="font-bold text-2xl mb-4">
                Téléphone
              </h3>

              <p className="text-blue-100">
                01 64 26 75 38
              </p>

            </div>

            <div className="bg-[#0d1726] border border-blue-950 rounded-3xl p-8">

              <h3 className="font-bold text-2xl mb-4">
                Email
              </h3>

              <p className="text-blue-100 break-words">
                a.marques.outillage@gmail.com
              </p>

            </div>

            <div className="bg-[#0d1726] border border-blue-950 rounded-3xl p-8">

              <h3 className="font-bold text-2xl mb-4">
                Notre Adresse
              </h3>

              <p className="text-blue-100">
                14 bis avenue de la Trentaine
                <br />
                77500 Chelles
              </p>

            </div>

          </div>

        </div>

      </section>

{/* CARTE GOOGLE MAPS */}

<section className="py-24 bg-[#081321] border-t border-blue-950">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-12">

      <p className="uppercase text-blue-400 tracking-[4px] font-semibold mb-4">
        Nous trouver
      </p>

      <h2 className="text-5xl font-black mb-6">
        Notre localisation
      </h2>

      <p className="text-blue-100 text-lg">
        14 bis avenue de la Trentaine • 77500 Chelles
      </p>

    </div>

    <div className="overflow-hidden rounded-[30px] shadow-2xl border border-blue-950">

      <iframe
        src="https://www.google.com/maps?q=14%20bis%20avenue%20de%20la%20Trentaine%2077500%20Chelles&output=embed"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
      />

    </div>

  </div>

</section>
      {/* FOOTER */}

      <footer className="border-t border-blue-950 py-8 bg-[#07111f]">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-blue-200/50">
            © 2026 A.Marques Outillage
          </p>

          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-marques-77b69093/"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-9 h-9"
            />
          </a>

        </div>

      </footer>

    </main>
  )
}