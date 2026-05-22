export default function Home() {
  return (
    <main style={{ backgroundColor: "#ECEEF0", color: "#292929", fontFamily: "Arial, Helvetica, sans-serif" }}>

      {/* Nav */}
      <nav style={{ backgroundColor: "#ECEEF0", borderBottom: "1px solid #DEE0E2" }}
        className="flex items-center justify-between px-8 py-5">
        <span className="text-xl font-bold tracking-tight" style={{ color: "#292929" }}>Mosaic</span>
        <a
          href="#waitlist"
          className="text-sm font-medium px-5 py-2 rounded-full transition-opacity hover:opacity-70"
          style={{ backgroundColor: "#292929", color: "#ECEEF0" }}
        >
          얼리 액세스 신청
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div
          className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8"
          style={{ backgroundColor: "#DEE0E2", color: "#292929" }}
        >
          AI 바이럴 영상 생성
        </div>
        <h1 className="text-5xl font-bold leading-tight max-w-3xl mb-6" style={{ color: "#292929" }}>
          클릭 한 번으로<br />바이럴 영상을 완성하세요
        </h1>
        <p className="text-lg max-w-xl mb-10" style={{ color: "#292929", opacity: 0.6 }}>
          아이디어만 입력하면 Mosaic이 바이럴 가능성 높은 숏폼 영상을 자동으로 기획·생성해 드립니다.
          더 이상 편집에 시간을 낭비하지 마세요.
        </p>
        <a
          href="#waitlist"
          className="px-8 py-4 rounded-full text-base font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#292929", color: "#ECEEF0" }}
        >
          무료로 시작하기 →
        </a>
      </section>

      {/* Feature strip */}
      <section style={{ backgroundColor: "#DEE0E2" }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "원클릭 생성", desc: "주제 하나를 입력하면 AI가 스크립트, 편집, 자막까지 자동으로 완성합니다." },
            { icon: "📈", title: "바이럴 최적화", desc: "트렌드 데이터를 분석해 조회수가 높아질 포맷과 후킹 포인트를 자동 적용합니다." },
            { icon: "🎬", title: "멀티 플랫폼 출력", desc: "TikTok, Instagram Reels, YouTube Shorts 등 각 플랫폼 규격에 맞춰 내보냅니다." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-8" style={{ backgroundColor: "#ECEEF0" }}>
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#292929" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#292929", opacity: 0.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" style={{ backgroundColor: "#ECEEF0" }}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold" style={{ color: "#292929" }}>3단계로 끝납니다</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "주제 입력", desc: "만들고 싶은 영상의 주제나 키워드를 입력하세요." },
            { step: "02", title: "AI 생성", desc: "Mosaic이 스크립트·영상·자막을 자동으로 만들어냅니다." },
            { step: "03", title: "바로 업로드", desc: "생성된 영상을 원하는 플랫폼에 즉시 게시하세요." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-start p-8 rounded-2xl" style={{ backgroundColor: "#DEE0E2" }}>
              <span className="text-xs font-bold tracking-widest mb-4" style={{ opacity: 0.4 }}>{step}</span>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#292929" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#292929", opacity: 0.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" style={{ backgroundColor: "#292929" }} className="py-28 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#ECEEF0" }}>
          지금 바로 얼리 액세스를 신청하세요
        </h2>
        <p className="text-base mb-10" style={{ color: "#DEE0E2", opacity: 0.7 }}>
          선착순 500명에게 무료 크레딧을 드립니다.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="이메일 주소 입력"
            className="flex-1 w-full px-5 py-3 rounded-full text-sm outline-none"
            style={{ backgroundColor: "#ECEEF0", color: "#292929", border: "none" }}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#DEE0E2", color: "#292929" }}
          >
            신청하기
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#292929", borderTop: "1px solid #3a3a3a" }} className="py-8 px-8 flex items-center justify-between">
        <span className="text-sm font-bold" style={{ color: "#DEE0E2" }}>Mosaic</span>
        <span className="text-xs" style={{ color: "#DEE0E2", opacity: 0.4 }}>© 2026 Mosaic. All rights reserved.</span>
      </footer>

    </main>
  );
}
