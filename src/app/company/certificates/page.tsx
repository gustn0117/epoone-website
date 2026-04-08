"use client";

import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";
import { useState } from "react";

const tabs = [
  { label: "인사말", href: "/company/greeting" },
  { label: "연혁", href: "/company/history" },
  { label: "조직도", href: "/company/organization" },
  { label: "인증서", href: "/company/certificates" },
  { label: "오시는길", href: "/company/location" },
];

const certificates = [
  {
    title: "KS 제품인증서",
    number: "제 20-0304호",
    standard: "KS F 4937",
    detail: "주차장 바닥용 표면 마감재",
    issuer: "한국표준협회장",
    date: "2025.11.26",
    note: "최초 인증일: 2020.08.05 / 차기심사 완료기한: 2026.08.04",
    image: "/images/cert-product.png",
  },
  {
    title: "특허증",
    number: "제 10-2058206호",
    standard: "친환경 방수 바닥재용 에폭시 코팅재 조성물",
    detail: "친환경 에폭시 바닥재",
    issuer: "특허청",
    date: "2019.12.16",
    note: "출원일: 2018.05.11 / 특허권자: 명진화학(주)",
    image: "/images/cert-patent.jpg",
  },
  {
    title: "KTR 시험성적서",
    number: "TAK-2025-121593",
    standard: "KS F 4937 : 2024",
    detail: "주차장 바닥용 표면 마감재",
    issuer: "한국화학융합시험연구원(KTR)",
    date: "2025.10.19",
    note: "내충격 성능, 부착 성능, 곰팡이 저항성, 미끄럼 저항성, 내마모성, TVOC, 톨루엔, 폼알데하이드 시험 통과",
    image: "/images/cert-indoor-test.png",
  },
  {
    title: "실내시험확인서 (제이폭시-1000)",
    number: "",
    standard: "KS F 4937 : 2024",
    detail: "제이폭시-1000 하도",
    issuer: "한국화학융합시험연구원(KTR)",
    date: "",
    note: "제이폭시-1000 하도 제품 실내 오염물질 방출 시험",
    image: "/images/cert-jepoxy1000-test.png",
  },
];

const testResults = [
  { item: "TVOC 방출량", standard: "2.5 이하", result: "검출한계 미만 (검출한계: 0.02)", unit: "mg/m\u00b2\u00b7h" },
  { item: "톨루엔 방출량", standard: "0.08 이하", result: "검출한계 미만 (검출한계: 0.005)", unit: "mg/m\u00b2\u00b7h" },
  { item: "폼알데하이드 방출량", standard: "0.02 이하", result: "검출한계 미만 (검출한계: 0.005)", unit: "mg/m\u00b2\u00b7h" },
];

export default function CertificatesPage() {
  const [viewImage, setViewImage] = useState<string | null>(null);

  return (
    <SubpageLayout
      category="COMPANY"
      title="회사소개"
      description="에포원을 방문해주셔서 감사합니다"
      tabs={tabs}
      activeTab="/company/certificates"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-wider mb-2">CERTIFICATES</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            인증 및 시험성적
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div
                className="relative h-[300px] bg-gray-50 flex items-center justify-center p-4 cursor-pointer group"
                onClick={() => setViewImage(cert.image)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 shadow">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.title}</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {cert.number && (
                      <tr>
                        <td className="py-1 text-gray-500 w-[70px]">인증번호</td>
                        <td className="py-1 text-primary font-medium">{cert.number}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="py-1 text-gray-500">규격</td>
                      <td className="py-1 text-gray-700">{cert.standard}</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">대상</td>
                      <td className="py-1 text-gray-700">{cert.detail}</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">발급</td>
                      <td className="py-1 text-gray-700">{cert.issuer}</td>
                    </tr>
                    {cert.date && (
                      <tr>
                        <td className="py-1 text-gray-500">날짜</td>
                        <td className="py-1 text-gray-700">{cert.date}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {cert.note && (
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">{cert.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* KTR Test Results */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">실내 시험확인서 - 오염물질 방출 시험 결과</h3>
            <p className="text-sm text-gray-500">제품명: 제이폭시 2000(저취) 라이닝 | 검사기관: KTR 한국화학융합시험연구원</p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-center">
            <p className="text-accent font-bold text-lg mb-1">판정: 적합</p>
            <p className="text-sm text-gray-600">기준 초과항목: 없음</p>
          </div>

          <table className="w-full border-t-2 border-primary text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">검사 항목</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">기준 ({`mg/m\u00b2\u00b7h`})</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">시험결과 ({`mg/m\u00b2\u00b7h`})</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">{row.item}</td>
                  <td className="py-3 px-4 text-gray-600">{row.standard}</td>
                  <td className="py-3 px-4 text-accent font-medium">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-3">유효기간: 2028년 02월 16일 | 발급일: 2025년 02월 17일</p>
        </div>

        {/* KS Test Results Summary */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">KTR 시험 결과 요약 (KS F 4937 : 2024)</h3>
          <table className="w-full border-t-2 border-primary text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">시험항목</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">기준</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700 border-b">결과</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["내충격 성능", "-", "이상없음"],
                ["부착 성능", "2.8 MPa 이상", "적합"],
                ["곰팡이 저항성 → 표면 성태", "-", "이상없음"],
                ["곰팡이 저항성 → 육류 균사 없음", "-", "적합"],
                ["미끄럼 저항성", "-", "이상없음"],
                ["수밀성", "-", "이상없음"],
                ["TVOC 방출량", "0.002 mg/m\u00b2\u00b7h", "적합"],
                ["톨루엔 방출량", "0.001 mg/m\u00b2\u00b7h", "적합"],
                ["폼알데하이드 방출량", "0.001 mg/m\u00b2\u00b7h", "적합"],
              ].map(([item, standard, result], i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">{item}</td>
                  <td className="py-3 px-4 text-gray-600">{standard}</td>
                  <td className="py-3 px-4 text-accent font-medium">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-3">접수일자: 2025.08.28 / 시험완료일자: 2025.10.19 | 시험기관: KTR 한국화학융합시험연구원</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {viewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setViewImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setViewImage(null)}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-3xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={viewImage}
              alt="인증서 원본"
              width={1200}
              height={1600}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </SubpageLayout>
  );
}
