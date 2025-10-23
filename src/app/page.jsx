'use client'

export default function IndexPage() {
  return (
    <>
      <style jsx>{`
        /* Root */
        .landing {
          min-height: 90vh;
          background: 
            linear-gradient(180deg, #fefefe 0%, #f8fafc 50%, #fff 100%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.08), transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.08), transparent 40%);
          padding: 60px 20px 80px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid pattern */
        .landing::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,0,0,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.02) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.4;
          pointer-events: none;
        }

        /* Floating shapes */
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          pointer-events: none;
          animation: float 20s ease-in-out infinite;
        }
        .shape-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          top: -100px;
          right: -100px;
        }
        .shape-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          bottom: -80px;
          left: -80px;
          animation-delay: -5s;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.1); }
        }

        /* Container */
        .container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Tags */
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 32px;
        }
        .tag {
          display: inline-block;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          background: white;
          border: 1.5px solid rgba(99, 102, 241, 0.2);
          border-radius: 6px;
          color: #6366f1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: all 0.2s;
        }
        .tag:hover {
          border-color: #6366f1;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
        }

        /* Title */
        .title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 20px;
          background: linear-gradient(135deg, #1e293b 0%, #6366f1 50%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          letter-spacing: -0.02em;
        }

        /* Subtitle */
        .subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #64748b;
          text-align: center;
          margin: 0 0 28px;
          font-weight: 400;
          line-height: 1.6;
        }

        /* Author card */
        .author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          padding: 20px 28px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .author:hover {
          transform: translateY(-3px);
          border-color: rgba(99, 102, 241, 0.35);
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15);
        }
          .avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
          }
          .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        .author-info {
          text-align: left;
        }
        .author-name {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 4px;
        }
        .author-role {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* Note box */
        .note {
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          border-left: 4px solid #6366f1;
          padding: 20px 24px;
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: 0 2px 12px rgba(99, 102, 241, 0.1);
        }
        .note strong {
          color: #6366f1;
          font-weight: 700;
        }
        .note p {
          margin: 0;
          color: #1e293b;
          font-size: 15px;
          line-height: 1.6;
        }
        .note em {
          color: #6366f1;
          font-style: normal;
          font-weight: 600;
        }

        /* CTA */
        .cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }
        .btn {
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
        }
        .btn-secondary {
          background: white;
          color: #6366f1;
          border: 2px solid #6366f1;
        }
        .btn-secondary:hover {
          background: #f5f3ff;
          transform: translateY(-2px);
        }

        /* Cards */
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #ec4899);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }
        .card:hover::before {
          transform: scaleX(1);
        }
        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #f0f9ff, #dbeafe);
        }
        .card:nth-child(2) .card-icon {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
        }
        .card:nth-child(3) .card-icon {
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 10px;
        }
        .card-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .landing {
            padding: 40px 16px 60px;
          }
          .author {
            flex-direction: column;
            text-align: center;
          }
          .author-info {
            text-align: center;
          }
          .cta {
            flex-direction: column;
          }
          .btn {
            width: 100%;
            justify-content: center;
          }
          .cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="landing">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>

        <div className="container">
          {/* Tags */}
          <div className="tags">
            <span className="tag">🎓 Політика</span>
            <span className="tag">🤖 GenAI</span>
            <span className="tag">✅ Академічна чесність</span>
            <span className="tag">📊 RAID-G</span>
          </div>

          {/* Title */}
          <h1 className="title">
            Політика академічного використання інструментів GenAI
          </h1>

          <p className="subtitle">
            у навчальних курсах викладача кафедри ПЗС ДДТУ
          </p>

          {/* Author */}
          <a className="author" href="/author">
            <div className="avatar">
              <img src="/autor.png" alt="Анастасія Іскандарова-Мала" />
            </div>
            <div className="author-info">
              <div className="author-name">Анастасія Іскандарова-Мала</div>
              <div className="author-role">Кафедра ПЗС, ДДТУ</div>
            </div>
          </a>

          {/* Note */}
          <div className="note">
            <p>
              <strong>Головна ідея:</strong> політика не забороняє ШІ, а впроваджує <em>керовану інтеграцію</em> — ШІ як інструмент для поглиблення навчання із збереженням академічної відповідальності здобувача.
            </p>
          </div>

          {/* CTA */}
          <div className="cta">
            <a href="/intro" className="btn btn-primary">
              📖 Почати читати
            </a>
            <a href="/appendices" className="btn btn-secondary">
              📦 Додатки та приклади
            </a>
            <a href="/presentation" className="btn btn-secondary">
              🖼️ Презентація
            </a>
          </div>

          {/* Cards */}
          <div className="cards">
            <div className="card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Чіткі правила</h3>
              <p className="card-desc">
                Модель «Світлофор»: що дозволено, що вимагає декларації, що заборонено
              </p>
            </div>

            <div className="card">
              <div className="card-icon">📋</div>
              <h3 className="card-title">Матриця завдань</h3>
              <p className="card-desc">
                Рекомендації для лабораторних, проєктів, курсових та контрольних робіт
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Практичні приклади</h3>
              <p className="card-desc">
                Зразки декларацій, чек-листи верифікації, шаблони prompts.md
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
