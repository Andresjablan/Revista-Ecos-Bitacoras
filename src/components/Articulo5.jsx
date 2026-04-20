import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArticuloEaster() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const parrafos = [
    "Easter, or Pascua, is the cornerstone of the Christian faith. It commemorates the resurrection of Jesus Christ, symbolizing victory over sin and death. For us at La Presentación Santa Teresa, a Catholic institution rooted in the Dominican tradition, Easter is more than a historical event—it is a living call to faith, compassion, and service, inspired by our foundress, Blessed Marie Poussepin.",
    "Easter is the culmination of the Paschal Triduum, following Holy Thursday and Good Friday. It is a time of profound joy, celebrating Christ’s triumph over death and the promise of eternal life. This season invites us to renew our commitment to live as disciples of Christ, embracing love, forgiveness, and hope in our daily lives.",
    "In Cúcuta, Easter is observed with deep reverence. The city comes alive with processions, liturgical celebrations, and communal gatherings. These traditions reflect our shared faith and cultural heritage, uniting families and communities in worship and reflection.",
    "At our school, Easter is a time of spiritual enrichment and communal engagement. Activities include:",
    "• Liturgical Celebrations: Participating in Masses and prayer services to commemorate the resurrection.",
    "• Community Service: Organizing charitable initiatives to assist those in need, embodying the spirit of giving.",
    "• Educational Projects: Engaging in creative projects that explore the significance of Easter, fostering a deeper understanding among students.",
    "Blessed Marie Poussepin, our foundress, exemplified living the Easter message through her dedication to service and education. Known as the “Social Apostle of Charity,” she revolutionized women’s education in France and emphasized serving the poor as serving Christ. Her life encourages us to embody the resurrection’s transformative power by uplifting others.",
    "Easter is a celebration of life, renewal, and unwavering faith. As students of La Presentación Santa Teresa, we are called to live out the Easter message daily, inspired by the teachings of Jesus and the example of Blessed Marie Poussepin. Let us embrace this season with hearts open to transformation, ready to serve and spread the joy of the resurrection.",
    "“The work is never finished; we have continually to begin again and that courageously.” — Blessed Marie Poussepin",
    "May this Easter season inspire us to renew our faith and commitment to serving others, following the path laid out by Christ and exemplified by Blessed Marie Poussepin.",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">
        EASTER: A CELEBRATION OF LIFE, FAITH, AND SERVICE
      </h1>

      <div>
        <img
          src="/images/Easter.jpg"
          alt="Easter Celebration"
          className="md:float-right md:ml-6 md:mb-4 w-full md:w-1/2 rounded-lg shadow"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />

        {parrafos.map((p, i) => (
          <p key={i} className="text-justify leading-relaxed mb-4">
            {p}
          </p>
        ))}

        <p className="text-right font-semibold mt-6">
          Author: Juan Camilo Villan <br />
          English Teacher, La Presentación Santa Teresa – Cúcuta
        </p>
      </div>

      {/* Botón de volver al inicio */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Volver.png" alt="Home" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div>
    </div>
  );
}


