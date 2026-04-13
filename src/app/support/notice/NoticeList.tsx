"use client";

import { useState } from "react";

interface Notice {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

export default function NoticeList({ notices }: { notices: Notice[] }) {
  const [selected, setSelected] = useState<Notice | null>(null);

  if (selected) {
    return (
      <div>
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          목록으로
        </button>
        <div className="bg-white border border-gray-100 rounded-2xl p-8">
          <div className="border-b border-gray-100 pb-5 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{selected.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{selected.author}</span>
              <span>{new Date(selected.created_at).toLocaleDateString("ko-KR")}</span>
            </div>
          </div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap min-h-[200px]">
            {selected.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          총 <span className="font-bold text-gray-900">{notices.length}</span>건
        </p>
      </div>

      {notices.length === 0 ? (
        <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-400">등록된 공지사항이 없습니다.</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="py-3.5 px-5 text-left font-semibold text-gray-700 w-16">번호</th>
                <th className="py-3.5 px-5 text-left font-semibold text-gray-700">제목</th>
                <th className="py-3.5 px-5 text-left font-semibold text-gray-700 w-24 hidden md:table-cell">
                  작성자
                </th>
                <th className="py-3.5 px-5 text-left font-semibold text-gray-700 w-28 hidden md:table-cell">
                  날짜
                </th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, i) => (
                <tr
                  key={notice.id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 cursor-pointer transition-colors"
                  onClick={() => setSelected(notice)}
                >
                  <td className="py-3.5 px-5 text-gray-400">{notices.length - i}</td>
                  <td className="py-3.5 px-5 text-gray-900 font-medium hover:text-primary transition-colors">
                    {notice.title}
                  </td>
                  <td className="py-3.5 px-5 text-gray-500 hidden md:table-cell">{notice.author}</td>
                  <td className="py-3.5 px-5 text-gray-400 hidden md:table-cell">
                    {new Date(notice.created_at).toLocaleDateString("ko-KR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
