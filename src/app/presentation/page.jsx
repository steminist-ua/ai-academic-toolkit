'use client'

const slides = [
  {
    eyebrow: '01',
    heading: 'Штучний інтелект у навчанні: між можливостями та відповідальністю',
    text: 'ШІ відкриває безпрецедентні можливості для персоналізації навчання та прискорення досліджень. Водночас, він вимагає встановлення чітких етичних та регуляторних рамок (Governance Framework).<br><b>Я пропоную політику, що забезпечує симбіотичне навчання — максимальне використання потенціалу ШІ при безумовному збереженні академічної доброчесності.</b>',
    gradient:
      'radial-gradient(circle at 18% 20%, rgba(244, 114, 182, 0.55), transparent 52%), radial-gradient(circle at 82% 18%, rgba(59, 130, 246, 0.42), transparent 58%), linear-gradient(135deg, #fdf2f8 0%, #e0f2ff 100%)'
  },
  {
    eyebrow: '02', 
    heading: 'ШІ вже змінює освіту',
    text: '<b>Користь:</b> LLM перетворюють пошук інформації на високошвидкісний синтез знань, що є потужним інструментом для огляду літератури та гіпотезотворення.<br><br><b>Виклик:</b> як зазначають дослідники, масове генерування контенту призводить до інфляції академічного контенту та створює проблему верифікації (кризу валідності внеску). Це вимагає від нас переходу до критичної ШІ-літерації.',
    gradient:
      'radial-gradient(circle at 20% 75%, rgba(129, 140, 248, 0.46), transparent 55%), radial-gradient(circle at 78% 28%, rgba(6, 182, 212, 0.38), transparent 60%), linear-gradient(135deg, #e0f2fe 0%, #ede9fe 100%)'
  },
  {
    eyebrow: '03',
    heading: 'Виклик довіри',
    text: '<b>Проблема:</b> ключовим викликом є втрата довіри до автентичності інтелектуального внеску (Intellectual Contribution). <br><br><b>Рішення:</b> замість заборони, я запроваджую культуру відповідальності. Навчання має бути сфокусоване на прозорому декларуванні ролі ШІ та етичному промпт-інжинірингу. Це єдина стратегія для відновлення довіри до процесу академічного виробництва знань.',
    gradient:
      'radial-gradient(circle at 15% 30%, rgba(248, 113, 113, 0.5), transparent 60%), radial-gradient(circle at 85% 70%, rgba(251, 191, 36, 0.4), transparent 58%), linear-gradient(135deg, #fee2e2 0%, #fef3c7 100%)'
  },
  {
    eyebrow: '04',
    heading: 'Менше тексту, більше доказів. Редизайн завдань: від репродукції до глибини аргументації та верифікації',
    text: '<b>Проблема:</b> ШІ робить неактуальними об\'ємні репродуктивні завдання. Немає сенсу оцінювати артефакти.<br><br><b>Я зміщую фокус на аналітичні формати та декларування використання ШІ, які вимагають високого рівня синтезу, рефлексії та критичної оцінки.</b> Це ефективно запобігає алгоритмічному плагіату і водночас сприяє розвитку когнітивної глибини у здобувачів.',
    gradient:
      'radial-gradient(circle at 22% 25%, rgba(56, 189, 248, 0.48), transparent 60%), radial-gradient(circle at 78% 72%, rgba(236, 72, 153, 0.32), transparent 62%), linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)'
  },
  {
    eyebrow: '05',
    heading: 'Документація взаємодії з моделями. Промпт-журнал: аудиторний слід доброчесності та прозорість методу',
    text: '<b>Практична вигода:</b> впровадження декларацій, аудиторних журналів взаємодії (Prompt Logs), дозволяє прозоро документувати використання ШІ. Це не лише засіб контролю, але й доказ методологічної грамотності здобувача. Декларація фіксує стратегії промптингу та кроки верифікації, що дозволяє викладачу оцінити якість діалогу здобувача з моделлю.',
    gradient:
      'radial-gradient(circle at 26% 30%, rgba(147, 197, 253, 0.42), transparent 60%), radial-gradient(circle at 74% 68%, rgba(45, 212, 191, 0.38), transparent 62%), linear-gradient(135deg, #ede9fe 0%, #cffafe 100%)'
  },
  {
    eyebrow: '06',
    heading: 'Навчання через оволодіння знаннями. Від інструментальної корисності до когнітивної майстерності',
    text: '<b>Педагогічний ефект:</b> як підтверджують дані (Studies in Higher Education, 2025), ШІ ефективно підсилює навчання тільки у випадках, коли використовується для завдань високого порядку складності (High-Order Thinking Skills). Якщо ШІ використовується для рутинної генерації, він лише прискорює отримання відповіді, але не сприяє концептуальному оволодінню матеріалом.',
    gradient:
      'radial-gradient(circle at 24% 78%, rgba(79, 70, 229, 0.32), transparent 57%), radial-gradient(circle at 86% 30%, rgba(250, 204, 21, 0.36), transparent 62%), linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)'
  },
  {
    eyebrow: '07',
    heading: 'Ціна надмірної автоматизації. Когнітивний борг: між ефективністю та атрофією критичного мислення',
    text: '<b>Виклик залежності:</b> надмірна автоматизація створює ризик "Аутсорсингу Мислення" (Outsourced Cognition), що, згідно з нейрокогнітивними дослідженнями, може негативно впливати на власні навички формування аргументів та відчуття авторської інтенції. <br><br><b>Рішення:</b> необхідно чергувати завдання з/без ШІ, щоб підтримувати автономну здатність до критичного мислення та інтелектуальної ініціативи.',
    gradient:
      'radial-gradient(circle at 18% 68%, rgba(236, 72, 153, 0.33), transparent 58%), radial-gradient(circle at 82% 24%, rgba(59, 130, 246, 0.3), transparent 60%), linear-gradient(135deg, #fef3c7 0%, #f8fafc 100%)'
  },
  {
    eyebrow: '08',
    heading: 'Наставництво має значення. Роль викладача: перехід від трансмісії знань до фасилітації критичного діалогу з ШІ',
    text: '<b>Ключовий фактор успіху:</b> ШІ є педагогічно ефективним лише як інструмент, керований кваліфікованим ментором. Викладач має навчити здобувачів критичному ставленню до виводу моделі, стратегіям верифікації та фільтрації галюцинацій. Це перетворює викладача на архітектора навчального процесу, що забезпечує високу якість кінцевого інтелектуального продукту. <br><br><b>Експерименти зі студентськими роботами довели:</b> ШІ покращує результат лише під керівництвом викладача, який вчить ставити питання, відбирати і перевіряти відповіді.',
    gradient:
      'radial-gradient(circle at 28% 72%, rgba(45, 212, 191, 0.28), transparent 60%), radial-gradient(circle at 80% 26%, rgba(129, 140, 248, 0.44), transparent 58%), linear-gradient(135deg, #f1f5f9 0%, #e9d5ff 100%)'
  },
  {
    eyebrow: '09',
    heading: 'П’ять принципів відповідального використання',
    list: [
      '1. <b>Прозорість (Transparency) і аудит</b> на всіх етапах: обов\'язкова аудиторна фіксація ролі ШІ (декларація).',
      '2. <b>Метакогнітивне оцінювання.</b> Оцінювання процесу, а не лише результату: вимірювання критичного внеску здобувача у взаємодію з ШІ.',
      '3. <b>Баланс компетенцій.</b> Чергування завдань з/без ШІ для збереження власних навичок: навмисне збереження автономних (не-ШІ-залежних) навичок (Dual-Tasking).',
      '4. <b>Пріоритет Якості.</b> Фокус на майстерності, а не швидкості: фокус на концептуальній глибині замість швидкості генерації за для оцінки.',
      '5. <b>ШІ — тренер, а не автор роботи.</b> ШІ як інструмент підсилення (Augmenter), а не первинний автор (Primary Creator).'
    ],
    gradient:
      'radial-gradient(circle at 18% 25%, rgba(79, 70, 229, 0.44), transparent 58%), radial-gradient(circle at 82% 78%, rgba(14, 165, 233, 0.42), transparent 60%), linear-gradient(135deg, #e9d5ff 0%, #bae6fd 100%)'
  },
  {
    eyebrow: '10',
    heading: 'Моя позиція',
    text: 'ШІ не замінює мислення — він підсилює його, коли мислення залишається нашим. Успіх майбутнього освіти залежить від створення збалансованої екосистеми, де технологічна ефективність поєднується з високими стандартами академічної етики. <br><br>Наш шлях: симбіоз людського розуму та етичної технології.',
    gradient:
      'radial-gradient(circle at 22% 22%, rgba(236, 72, 153, 0.38), transparent 58%), radial-gradient(circle at 78% 75%, rgba(96, 165, 250, 0.42), transparent 60%), linear-gradient(135deg, #c7d2fe 0%, #f8fafc 100%)',
    link: {
      href: withBasePath('/appendices/references'),
      label: 'Використані дослідження'
    }
  }
]

export default function PresentationPage() {
  return (
    <>
      <style jsx>{`
        .page {
          position: relative;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 45%, #e0e7ff 100%);
          color: #0f172a;
          min-height: 100vh;
          overflow: hidden;
        }

        .background {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 18% 22%, rgba(56, 189, 248, 0.18), transparent 42%),
            radial-gradient(circle at 82% 30%, rgba(129, 140, 248, 0.24), transparent 48%),
            radial-gradient(circle at 28% 78%, rgba(244, 114, 182, 0.2), transparent 52%);
          opacity: 0.68;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
        }

        .hero-orb-1 {
          width: 48vw;
          height: 48vw;
          top: -15vw;
          right: -12vw;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.35), transparent 65%);
        }

        .hero-orb-2 {
          width: 36vw;
          height: 36vw;
          bottom: -12vw;
          left: -10vw;
          background: radial-gradient(circle, rgba(244, 114, 182, 0.35), transparent 70%);
        }

        .hero-orb-3 {
          width: 30vw;
          height: 30vw;
          top: 20vh;
          left: 58vw;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.25), transparent 70%);
        }

        .slides {
          position: relative;
          z-index: 1;
          scroll-snap-type: y mandatory;
        }

        .panel {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          min-height: 100svh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          isolation: isolate;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          overflow: hidden;
        }

        .panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--panel-gradient, linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%));
          opacity: 0.92;
          z-index: -2;
        }

        .content {
          position: relative;
          width: 100%;
          min-height: inherit;
          padding: clamp(48px, 10vh, 96px) clamp(8vw, 12vw, 16vw);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(14px);
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          border-bottom: 1px solid rgba(148, 163, 184, 0.16);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 24px 60px rgba(79, 70, 229, 0.12);
        }

        .copy {
          width: min(960px, 100%);
          display: grid;
          gap: clamp(20px, 3vh, 32px);
          text-align: left;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.7rem, 1.6vw, 0.85rem);
          font-weight: 700;
          color: rgba(30, 41, 59, 0.72);
          width: clamp(36px, 5vw, 46px);
          height: clamp(36px, 5vw, 46px);
          border-radius: 50%;
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.85), transparent 65%), rgba(255, 255, 255, 0.7);
          box-shadow: 0 10px 24px rgba(148, 163, 184, 0.25);
        }

        .heading {
          font-size: clamp(2rem, 4.4vw, 3.2rem);
          line-height: 1.16;
          font-weight: 800;
          letter-spacing: -0.015em;
          margin: 0;
          background: linear-gradient(110deg, #312e81 0%, #4f46e5 50%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text {
          font-size: clamp(1.05rem, 2.1vw, 1.3rem);
          line-height: 1.75;
          color: rgba(30, 41, 59, 0.85);
          margin: 0;
        }

        .list {
          margin: 0;
          padding-left: 1.4rem;
          display: grid;
          gap: 0.8rem;
          font-size: clamp(1rem, 1.9vw, 1.2rem);
          color: rgba(30, 41, 59, 0.9);
        }

        .cta-area {
          margin-top: clamp(32px, 5vh, 48px);
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid rgba(79, 70, 229, 0.25);
          background: linear-gradient(120deg, rgba(79, 70, 229, 0.14), rgba(56, 189, 248, 0.14));
          color: #1e1b4b;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .cta-link:hover {
          transform: translateY(-3px);
          border-color: rgba(79, 70, 229, 0.55);
          box-shadow: 0 16px 32px rgba(79, 70, 229, 0.25);
        }

        @media (max-width: 768px) {
          .panel {
            padding: 120px 0;
          }

          .content {
            padding: 36px 22px 52px;
          }

          .copy {
            gap: 20px;
            text-align: left;
          }

          .heading {
            font-size: clamp(1.8rem, 8vw, 2.5rem);
          }

          .text {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="page">
        <div className="background">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="slides">
          {slides.map((slide, index) => (
            <section
              className="panel"
              key={slide.heading}
              style={{ '--panel-gradient': slide.gradient }}
            >
              <div className="content">
                <div className="copy">
                  <span className="eyebrow">{slide.eyebrow}</span>
                  <h2 className="heading">{slide.heading}</h2>
                  {slide.text && (
                    <p className="text" dangerouslySetInnerHTML={{ __html: slide.text }} />
                  )}
                {slide.list && (
                  <ol className="list">
                    {slide.list.map(item => (
                      <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ol>
                )}
                {index === slides.length - 1 && (
                  <div className="cta-area">
                    {slide.link && (
                      <a className="cta-link" href={slide.link.href}>
                        {slide.link.label}
                      </a>
                    )}
                    <a className="cta-link" href="/docs">
                      Дослідити політику
                    </a>
                    {/* <a className="cta-link" href="/appendices">
                      Перейти до додатків
                      </a> */}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
