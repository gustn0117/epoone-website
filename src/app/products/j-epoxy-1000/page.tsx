import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const tabs = [
  { label: "제이폭시-2000 라이닝", href: "/products/j-epoxy-2000" },
  { label: "제이폭시-1000 하도", href: "/products/j-epoxy-1000" },
];

export default function JEpoxy1000Page() {
  return (
    <SubpageLayout
      category="PRODUCTS"
      title="제품소개"
      description="에포원의 친환경 에폭시 바닥재 제품을 소개합니다"
      tabs={tabs}
      activeTab="/products/j-epoxy-1000"
    >
      <div className="max-w-5xl mx-auto">
        {/* Product Header */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="relative h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="/images/work-2.png"
              alt="제이폭시-1000 시공 현장"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
              저취형 에폭시 바닥재 하도용 페인트
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              제이폭시 - 1000
            </h2>
            <p className="text-lg text-primary font-medium mb-4">(저취) 하도</p>

            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3">개요</h4>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>1. 에폭시 수지와 변성 폴리아민이 주성분으로 설계된 2액형 상온 경화형 에폭시 바닥재 하도용 도료입니다.</li>
                <li>2. 에탄올 용제만 사용한 제품입니다.</li>
                <li>3. 주차장, 공장, 사무실, 식당, 실험실 등 실내 바닥용 하도에 적합하며, 특히 냄새가 순해 입주민이 거주하고 있는 공간에서 작업을 해도 타사 제품 대비 인체에 덜 해롭습니다.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">특징</h4>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "콘크리트 및 시멘트 바닥면에 침투력 및 부착성이 우수하고 상도와의 층간 부착력이 우수",
                  "구도장면과의 부착력이 우수하여 재도장 하도 도장도 가능",
                  "용제는 에탄올만 사용하여 타사의 자일렌 등 유기용제를 사용한 제품 대비 냄새가 순하며 인체에 덜 유해",
                  "내약품성, 내용제성, 내수성, 내유성이 우수",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">물성</h3>
          <table className="w-full border-t-2 border-primary text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">항목</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">주제</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">경화제</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["주성분", "에폭시 수지", "폴리 아민"],
                ["색상", "무색 투명", "담황색"],
                ["혼합비중", "0.96 ~ 1.00", ""],
                ["혼합비(중량)", "주제 : 경화제 = 1 : 1", ""],
                ["가사시간(25\u00b0C)", "6시간", ""],
                ["경화시간(25\u00b0C)", "24 시간", ""],
                ["지촉건조시간(25\u00b0C)", "8 시간", ""],
              ].map(([key, val1, val2], i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">{key}</td>
                  <td className="py-3 px-4 text-gray-600">{val1}</td>
                  <td className="py-3 px-4 text-gray-600">{val2}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">포장단위: 주제 = 7.5kg, 경화제 = 7.5kg / 저장기간: 12개월 (냉암소)</p>
        </div>

        {/* Application */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">용도</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["지하 주차장", "병원", "공장", "연구실", "사무실", "식당", "실험실", "방진 바닥"].map((use, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center text-sm text-gray-700 font-medium">
                {use}
              </div>
            ))}
          </div>
        </div>

        {/* Construction Method */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">시공방법</h3>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">바탕처리</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1. 소지는 충분히 양생되어 pH 7~8, 함수율 6% 이하이어야 합니다. (20\u00b0C, 20일 이상 양생)</li>
                <li>2. 표면의 LAITANCE, 먼지, 유분 등 기타 오염물질을 완전히 제거하십시오.</li>
                <li>3. 틈새나 홈은 에폭시 퍼티로 메꾸어 주고 표면조정 후 도장 하십시오.</li>
                <li>4. 거친 부분은 그라인더로 매끄럽게 표면 조정 후 도장하십시오.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">도장</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>1. 정해진 배합비(주제:경화제=1:1 무게비)에 따라 정확히 계량하여 1분 정도 충분히 교반 후 로올러 또는 붓으로 50\u03bcm 1회 도장 하십시오. (배합비율 미준수 및 충분한 교반이 안될 경우 미경화의 원인이 될 수 있습니다)</li>
                <li>2. 신너 사용 시 99% 이상 순도의 에탄올(일반 신너도 가능) 1% 이내로 사용하십시오.</li>
                <li>3. 에탄올 과량 희석시 가사시간이 짧아질 수 있고, 경도가 낮아질 수 있습니다.</li>
                <li>4. 1회 도장 후 도장면의 흡수가 심한 부분은 추가 도장하십시오.</li>
                <li>5. 부분적으로 후도막이 되지 않도록 균일하게 도장하십시오.</li>
                <li>6. 혼합 교반 후 가사시간이 지나면 경화가 되므로 반드시 가사시간 이내에 사용하십시오.</li>
                <li>7. 온도가 높을수록 가사시간이 빠르고 동절기나 저온지역에서는 경화시간이 지연될 수 있습니다.</li>
                <li>8. 도장 환경 온도는 5\u00b0C 이상, 30\u00b0C 이하가 적합하며, 수분의 응축을 피하기 위하여 소지 표면온도는 이슬점 3\u00b0C 이상이어야 합니다.</li>
                <li>9. 습도가 높은 환경(80% 이상), 기온이 낮은 환경(5\u00b0C 이하)에서는 정상적인 물성을 발휘하지 못할 수 있으므로 도장작업을 피하십시오.</li>
                <li>10. 도장할 표면은 충분히 건조 시키십시오.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Caution */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">주의사항</h3>
          <div className="bg-red-50 rounded-xl p-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>1. 제품을 가열하거나 타 도료와 혼합하여 사용하지 마십시오.</li>
              <li>2. 도장 후 물(습기)이나 알코올 등에 노출되면 광택저하 및 변색이 발생될 수 있으므로 주의하십시오.</li>
              <li>3. 실제 소요량은 소지상태, 도장방법, 도장조건에 따라 달라질 수 있음을 고려하십시오.</li>
              <li>4. 섭취 및 피부 접촉시에는 물질안전보건자료(MSDS)에 표기된 사항에 따라 조치하시고, 즉시 의사에게 진찰을 받으십시오.</li>
              <li>5. 용도 이외의 사용을 절대 금합니다.</li>
              <li>6. 기타 자세한 사항은 당사 기술 연구소로 문의해 주시기 바랍니다.</li>
            </ul>
          </div>
        </div>

        {/* PDF Downloads */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">기술자료 다운로드</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <Image src="/images/logo.png" alt="EPOONE" width={80} height={28} className="object-contain" />
                <span className="text-xs text-gray-400">에포원</span>
              </div>
              <div className="space-y-3">
                <a href="/pdf/j-epoxy-2000.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">제이폭시-2000 라이닝</p>
                    <p className="text-xs text-gray-400">카탈로그 PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
                <a href="/pdf/j-epoxy-1000.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">제이폭시-1000 하도</p>
                    <p className="text-xs text-gray-400">카탈로그 PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              </div>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-sm font-bold text-gray-700 tracking-wider">JEVISCO</span>
                <span className="text-xs text-gray-400">강남제비스코</span>
              </div>
              <div className="space-y-3">
                <a href="/pdf/pure-air-lining-tds.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">프로아 순에어 라이닝</p>
                    <p className="text-xs text-gray-400">TDS PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
                <a href="/pdf/pure-air-sealer-tds.pdf" download className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">프로아 순에어 실러</p>
                    <p className="text-xs text-gray-400">TDS PDF</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
