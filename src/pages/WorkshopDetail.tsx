import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkshopDetail: React.FC = () => {
  const [flippedTeams, setFlippedTeams] = useState<number[]>([]);

  const workshop = {
    title: 'Reimagine 2035 워크숍',
    date: '2025년 6월 18일',
    location: '국민대학교',
    participants: 15,
    description: '학생들의 다양한 상상들을 인터뷰를 통해 담아내는 워크숍입니다.',
    introduction: {
      title: 'KMUCS Reimagine 2035!',
      content: [
        '2035년, 우리는 어떤 세상에서 살아가고 있을까요? 🌏 ',
        '지금과는 어떤 점이 달라져 있을지,',
        '그 안에서 나는 어떤 모습으로 살아가고 있을지,',
        '2035년, 과거 10년을 상상으로 회고할 때',
        '어떤 것이 나에게 영향을 주었을 지',
        '기술, 환경, 교육, 일상 등 다양한 측면에서 상상해보고',
        '팀별 토론을 통해 자유롭게 이야기를 나누는 시간을 가졌습니다.'
      ]
    },
    goals: {
      title: '목표와 의미',
      content: [
        '팀별 토론과 나눔을 통해 각자의 상상력을 공유하며',
        '2035년의 \'나\'와 \'우리\'는 어떤 모습이어야 할 지,',
        '그리고 이런 모습이 되도록 영향을 미친 것은',
        '향후 10년 동안 생겨 날 소프트웨어융합대학의 \'무엇\' 때문일 지를 함께 그려보는 시간을 가졌습니다.',
        '오늘 나눈 대화와 상상이,',
        '🌱 미래를 만드는 작은 시작이 되기를 기대합니다!'
      ]
    },
    teams: [
      {
        title: '10년 뒤 상상하기',
        team: '슈팅35',
        detail: '2035년의 삶을 자유롭게 상상하며 개인의 변화와 사회의 흐름을 함께 그려본 팀입니다.'
      },
      {
        title: '10년 후의 나와 공동체, 국민대 소프트웨어융합대학의 미래',
        team: '오소리',
        detail: '개인의 성장과 공동체의 진화를 연결해 미래 대학과 학문의 방향을 입체적으로 탐색했습니다.'
      },
      {
        title: 'Reimagine On Mars',
        team: '1 ON MARS',
        detail: '낯선 환경을 배경으로 기술, 생존, 협력의 의미를 새롭게 상상해보는 시도를 담았습니다.'
      },
      {
        title: 'KMUCS REIMAGINE 2035!',
        team: '4WARD',
        detail: '소프트웨어융합대학의 다음 10년을 바라보며 학습, 진로, 캠퍼스 경험의 미래를 구체화했습니다.'
      },
      {
        title: 'AI와 미래',
        team: '234!',
        detail: 'AI가 일상과 진로, 사회 구조에 어떤 영향을 줄지 질문하며 기회와 고민을 함께 나눴습니다.'
      },
      {
        title: '10년뒤 상상하기',
        team: 'A바지(AI시대는 바로 지금!)',
        detail: '이미 시작된 AI 시대를 바탕으로 앞으로의 10년이 어떻게 확장될지 현실적으로 상상했습니다.'
      },
      {
        title: 'KMU Global Planetary Studio (GPS)',
        team: '두팔',
        detail: '지역을 넘어 지구적 관점에서 연결과 이동, 학습의 미래를 설계해본 팀의 아이디어입니다.'
      },
      {
        title: '2035년',
        team: 'KMU 서포터즈',
        detail: '2035년이라는 키워드 하나로 학생들의 기대와 변화의 방향을 압축적으로 풀어낸 이야기입니다.'
      }
    ],
    highlights: ['2035년 미래 상상', '팀별 토론과 발표', '학생 인터뷰 아카이빙'],
    videos: [
      { id: 'QhLdyQgTVwg', title: '10년 뒤 상상하기' },
      { id: 'FkH0Uz-FEo0', title: '10년 후의 나와 공동체, 국민대 소프트웨어융합대학의 미래' },
      { id: 'MNz2KAMffSI', title: 'Reimagine On Mars' },
      { id: 'z9tVksJ7blQ', title: 'KMUCS REIMAGINE 2035!' },
      { id: '9RHDvh-33mk', title: 'AI와 미래' },
      { id: 'WpPted4MqlQ', title: '10년뒤 상상하기' },
      { id: 'AJZklsLnguY', title: 'KMU Global Planetary Studio (GPS)' },
      { id: 'ES8vx6Jk0_M', title: '2035년' }
    ]
  };

  const toggleTeamCard = (index: number) => {
    setFlippedTeams((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <div>
      <Header />
      <article className="min-h-screen bg-[linear-gradient(180deg,#eef6ff_0%,#f8fbff_18%,#ffffff_42%,#f7fbff_100%)] pt-24 pb-20 md:pb-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-100/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(240,247,255,0.98)_44%,rgba(228,243,255,0.95)_100%)] px-6 py-8 shadow-[0_28px_80px_rgba(59,130,246,0.14)] sm:px-8 md:px-12 md:py-12">
            <div className="absolute -right-6 top-0 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl" />
            <div className="absolute bottom-0 left-12 h-36 w-36 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.42)_100%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Project Workshop</p>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-stone-900 md:text-5xl">
                  {workshop.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                  {workshop.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {workshop.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-[0_10px_20px_rgba(191,219,254,0.24)] backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="pt-2 text-slate-900 lg:ml-8">
                <p className="text-sm uppercase tracking-[0.22em] text-sky-700">Workshop Note</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <p className="text-slate-500">날짜</p>
                    <p className="mt-1 text-base font-semibold">{workshop.date}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">장소</p>
                    <p className="mt-1 text-base font-semibold">{workshop.location}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">참여 인원</p>
                    <p className="mt-1 text-base font-semibold">{workshop.participants}명</p>
                  </div>
                </div>
                <Link
                  to="/workshop"
                  className="mt-5 inline-flex text-sm font-semibold text-slate-700 underline decoration-slate-400 underline-offset-4 transition-colors duration-200 hover:text-sky-700 hover:decoration-sky-500"
                >
                  다른 워크숍 보기
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="grid gap-8 xl:grid-cols-2 xl:items-start">
              <section className="rounded-[1.75rem] bg-white/95 p-8 shadow-sm ring-1 ring-sky-100">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Introduction</p>
                <h2 className="mt-3 text-3xl font-bold text-stone-900">{workshop.introduction.title}</h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
                  {workshop.introduction.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(180deg,#f3f9ff_0%,#e7f3ff_100%)] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Meaning</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">{workshop.goals.title}</h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
                  {workshop.goals.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </div>

            <section className="flex flex-col rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(244,249,255,0.96)_100%)] p-8 shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Teams</p>
                <h2 className="mt-3 text-3xl font-bold text-stone-900">이런 조들이 함께했습니다</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  카드를 클릭하면 각 조가 AI 사용에 활용한 프롬프트를 볼 수 있습니다.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {workshop.teams.map((item, index) => (
                  <button
                    key={item.team}
                    type="button"
                    aria-pressed={flippedTeams.includes(index)}
                    onClick={() => toggleTeamCard(index)}
                    className="group min-h-[12rem] cursor-pointer rounded-[1.5rem] text-left [perspective:1200px]"
                  >
                    <div
                      className="relative min-h-[12rem] rounded-[1.5rem] transition-transform duration-500 [transform-style:preserve-3d]"
                      style={{
                        transform: flippedTeams.includes(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      <article
                        className="absolute inset-0 flex min-h-[12rem] flex-col justify-center rounded-[1.5rem] border border-sky-100 bg-white p-5 text-center shadow-[0_16px_34px_rgba(191,219,254,0.18)]"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                          {item.team}
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-slate-700">
                          {item.title}
                        </p>
                      </article>

                      <article
                        className="absolute inset-0 flex min-h-[12rem] flex-col justify-center rounded-[1.5rem] border border-sky-200 bg-[linear-gradient(180deg,#eff8ff_0%,#dff1ff_100%)] p-5 text-center shadow-[0_16px_34px_rgba(125,211,252,0.22)]"
                        style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                          {item.team}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-700">
                          {item.detail}
                        </p>
                      </article>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] bg-white/95 p-8 shadow-sm ring-1 ring-sky-100">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Archive</p>
                  <h2 className="mt-2 text-3xl font-bold text-stone-900">지난 워크샵 영상으로 보기</h2>
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {workshop.videos.map((video, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-[0_16px_36px_rgba(191,219,254,0.2)]">
                    <div className="aspect-video">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="border-t border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                      {video.title}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default WorkshopDetail;
