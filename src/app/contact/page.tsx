"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useState } from "react";

const tabs = [{ label: "온라인문의", href: "/contact" }];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SubpageLayout
      category="CONTACT"
      title="온라인문의"
      description="궁금하신 점은 언제든지 문의바랍니다"
      tabs={tabs}
      activeTab="/contact"
    >
      <div className="max-w-5xl mx-auto">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {[
            {
              icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
              label: "전화",
              value: "준비중",
            },
            {
              icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              label: "이메일",
              value: "준비중",
            },
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              label: "운영시간",
              value: "준비중",
            },
          ].map((info, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={info.icon}
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-400 mb-1 tracking-wider uppercase">{info.label}</p>
              <p className="font-bold text-gray-800">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">문의가 접수되었습니다</h3>
              <p className="text-gray-500 mb-8">빠른 시일 내에 답변드리겠습니다. 감사합니다.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                추가 문의하기
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">문의하기</h3>
                <p className="text-gray-500 text-sm">
                  아래 양식을 작성하여 문의해 주시면 담당자가 확인 후 연락드리겠습니다.
                </p>
                <div className="section-divider mx-auto mt-4" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: 이름, 연락처 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      이름 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="이름을 입력해 주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      연락처 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="연락처를 입력해 주세요"
                    />
                  </div>
                </div>

                {/* Row 2: 이메일, 회사명 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="이메일을 입력해 주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      회사/기관명
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="회사 또는 기관명을 입력해 주세요"
                    />
                  </div>
                </div>

                {/* 문의 유형 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    문의 유형 <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                    }}
                  >
                    <option value="" disabled>문의 유형을 선택해 주세요</option>
                    <option value="제품문의">제품 문의</option>
                    <option value="시공문의">시공 문의</option>
                    <option value="견적요청">견적 요청</option>
                    <option value="기술상담">기술 상담</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                {/* 제목 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    제목 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
                    placeholder="제목을 입력해 주세요"
                  />
                </div>

                {/* 문의 내용 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    문의 내용 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={7}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all resize-none leading-relaxed"
                    placeholder="문의하실 내용을 상세히 작성해 주세요&#10;&#10;예) 제품명, 시공 면적, 현장 상황 등"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold text-gray-700">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                      수집된 정보는 문의 답변 목적으로만 사용되며, 답변 완료 후 파기됩니다.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="group px-14 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
                  >
                    문의하기
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </SubpageLayout>
  );
}
