"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "로그인 실패");
      return;
    }
    router.replace("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Admin</h1>
        <p className="text-sm text-gray-500 text-center mb-8">관리자 로그인</p>

        <label className="block text-sm font-semibold text-gray-700 mb-2">비밀번호</label>
        <input
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all"
          placeholder="비밀번호"
        />

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all disabled:opacity-50"
        >
          {loading ? "확인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}
