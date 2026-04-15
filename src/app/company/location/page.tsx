import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "조직도", href: "/company/organization" },
  { label: "인증서", href: "/company/certificates" },
  { label: "오시는길", href: "/company/location" },
];

const locations = [
  {
    label: "본사",
    color: "primary" as const,
    address: "경기도 평택시 고덕중앙로 290, 1035호",
    mapQuery: "경기도+평택시+고덕중앙로+290",
  },
  {
    label: "공장 (명진화학)",
    color: "accent" as const,
    address: "충청북도 괴산군 괴산읍 대제산단1길 92",
    mapQuery: "충청북도+괴산군+괴산읍+대제산단1길+92",
  },
];

export default function LocationPage() {
  return (
    <SubpageLayout
      category="COMPANY"
      title="회사소개"
      description="에포원을 방문해주셔서 감사합니다"
      tabs={tabs}
      activeTab="/company/location"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest mb-3">LOCATION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">오시는 길</h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="space-y-16">
          {locations.map((loc, i) => (
            <div key={i}>
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  loc.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <svg className={`w-5 h-5 ${loc.color === "primary" ? "text-primary" : "text-accent"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{loc.label}</h3>
                  <p className="text-sm text-gray-500">{loc.address}</p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src={`https://maps.google.com/maps?q=${loc.mapQuery}&t=m&z=16&output=embed&hl=ko`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.label} 지도`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "전화", value: "1566-1488", sub: "031-623-0525" },
            { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "이메일", value: "info@epoone.com" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "운영시간", value: "09:00 ~ 18:00" },
          ].map((info, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                </svg>
              </div>
              <p className="text-xs text-gray-400 tracking-wider uppercase mb-1">{info.label}</p>
              <p className="font-bold text-gray-800 text-sm">{info.value}</p>
              {"sub" in info && info.sub && <p className="text-xs text-gray-500 mt-1">{info.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
