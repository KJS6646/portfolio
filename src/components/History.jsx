import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPANIES = [
  {
    name: "동연에스엔티",
    period: "2024.11 ~ 재직중",
    industry: "SI개발",
    work: "WEB 시스템 개발",
  },
  {
    name: "투윈시스템",
    period: "2020.12 ~ 2024.07",
    industry: "SI개발",
    work: "MES, ERP, 스마트팩토리 개발",
  },
];

const PROJECTS = [
  {
    title: "조선 열교환기 제조 업체 2021 스마트공장 구축(고도화)",
    work: "MES SYSTEM 개발",
    role: "MES SYSTEM(영업, 구매, 출하) 프로세스 설계 및 코드작성, 산출물 작성",
    stack: "Delphi, PostgreSql, Dbeaver, tortoise SVN",
    period: "2021-10-01 ~ 2022-12-26 (15개월)",
    members: "2인",
    desc: "수주에서 출하까지 MES SYSTEM 중 영업 및 구매, 출하 프로세스를 설계하고 Delphi 및 PostgreSql을 사용하여 DB를 구축하고 tortoise SVN으로 협업관리.",
    imgs: ["delphi.png", "postgresql.png", "Dbeaver.png", "svn.png"],
  },
  {
    title: "자동차 부품 도금 생산 업체 2021 대중소 상생형 스마트 공장 구축",
    work: "기존 MES SYSTEM 유지보수 및 추가 개발",
    role: "MES SYSTEM(영업, 구매, 생산, 품질, 약품) 파트 유지 보수, 추가개발 및 산출물 작성",
    stack: "Delphi, Oracle, Toad, tortoise SVN",
    period: "2021-12-15 ~ 2022-08-31 (9개월)",
    members: "2인",
    desc: "라인 신설로 인한 기존 MES SYSTEM 전체적인 보수작업 및 추가 기능 개발.",
    imgs: ["delphi.png", "oracle.png", "toad.png", "svn.png"],
  },
  {
    title: "고주파 열처리 업체 2021 스마트 공장 구축(고도화)",
    work: "기존 MES SYSTEM 유지보수 및 추가 개발",
    role: "MES SYSTEM(영업, 구매, 품질) 파트 유지 보수, 추가개발 및 산출물 작성",
    stack: "Delphi, Oracle, Toad, tortoise SVN",
    period: "2021-07-14 ~ 2022-07-13 (12개월)",
    members: "2인",
    desc: "고주파 열처리 업체 MES SYSTEM 유지보수 및 기능개선, 신규 기능 개발.",
    imgs: ["delphi.png", "oracle.png", "toad.png", "svn.png"],
  },
  {
    title: "자동차 부품 도금 생산 업체 2022 대중소 상생형 스마트공장 구축",
    work: "기존 MES SYSTEM 유지보수 및 추가 개발",
    role: "MES SYSTEM(영업, 구매, 생산, 품질, 약품) 파트 유지 보수, 추가개발 및 산출물 작성",
    stack: "Delphi, Oracle, Toad, tortoise SVN",
    period: "2022-11-15 ~ 2024-01-30 (15개월)",
    members: "2인",
    desc: "라인 신설로 인한 기존 MES SYSTEM 전체적인 보수 2차 작업 및 기능 개선, 추가 기능 개발.",
    imgs: ["delphi.png", "oracle.png", "toad.png", "svn.png"],
  },
  {
    title: "침탄 열처리 업체 2022 스마트 공장 구축(고도화)",
    work: "MES SYSTEM 개발",
    role: "MES SYSTEM(영업, 구매, 생산, 품질) 파트 프로세스 설계, 개발 및 산출물 작성",
    stack: "Delphi, Oracle, Toad, tortoise SVN",
    period: "2022-07-28 ~ 2024-01-27 (18개월)",
    members: "1인",
    desc: "기존 타 업체 MES SYSTEM 사용이 매우 미흡하여 영업, 구매, 생산, 품질 파트 프로세스 설계 및 MES SYSTEM 신규 도입.",
    imgs: ["delphi.png", "oracle.png", "toad.png", "svn.png"],
  },
  {
    title: "고주파 열처리업체 2022 스마트 공장 구축(고도화)",
    work: "MES SYSTEM 개발",
    role: "MES SYSTEM 유지보수 및 추가기능 개발, 산출물 작성",
    stack: "Delphi, Oracle, Toad, tortoise SVN",
    period: "2022-07-26 ~ 2024-01-25 (18개월)",
    members: "2인",
    desc: "최적 작업 조건 값 도출 데이터 분석 시스템 구축을 위한 MES SYSTEM 유지보수 및 신규 기능 개발.",
    imgs: ["delphi.png", "oracle.png", "toad.png", "svn.png"],
  },
  {
    title: "고주파 열처리업체 2022 데이터 인프라 구축 AI 솔루션 실증 사업",
    work: "MES AI SYSTEM 개발",
    role: "MES AI SYSTEM UI 디자인 및 개발",
    stack: "Delphi, Oracle, Toad, tortoise SVN, Python",
    period: "2022-08-16 ~ 2022-12-15 (4개월)",
    members: "2인",
    desc: "AI 솔루션 도입으로 작업조건, 경도 경화 깊이 예측을 위한 개발.",
    imgs: ["delphi.png", "oracle.png", "toad.png", "svn.png"],
  },
  {
    title: "고주파 열처리업체 2023 데이터 인프라 구축 AI 솔루션 실증 사업",
    work: "MES AI SYSTEM 개발",
    role: "MES AI SYSTEM UI 디자인 및 개발",
    stack: "Delphi, Oracle, Toad, tortoise SVN, Python",
    period: "2023-08-31 ~ 2024-01-30 (5개월)",
    members: "2인",
    desc: "AI 솔루션 UI 개선 및 추가기능 개발.",
    imgs: ["delphi.png", "oracle.png", "toad.png", "svn.png"],
  },
  {
    title: "조선기자재 배관 가공 업체 2023 스마트공장 구축(고도화)",
    work: "MES SYSTEM 개발",
    role: "MES SYSTEM 개발",
    stack: "Delphi, PostgreSql, Dbeaver, tortoise SVN",
    period: "2023-08-19 ~ 2024-06-28 (10개월)",
    members: "2인",
    desc: "타 업체 MES SYSTEM 사용이 매우 미흡하여 영업 ~ 출하까지 프로세스 설계 및 MES SYSTEM 신규 개발.",
    imgs: ["delphi.png", "postgresql.png", "Dbeaver.png", "svn.png"],
  },
  {
    title: "환영철강 TMS 구축 2025",
    work: "환영철강 TMS 구축",
    role: "TMS WEB 구축 및 GIS 기능 구현 (프론트엔드, 백엔드)",
    stack: "React, JavaScript, Spring Boot, Java",
    period: "2025-01-13 ~ 2025-10-21",
    members: "4인",
    desc: "환영철강의 운송관리 시스템 개발",
    imgs: [
      "react.png",
      "javascript.png",
      "springboot.png",
      "java.png",
      "jenkins.png",
    ],
  },
  {
    title: "동국산업 AAS 구축 2026",
    work: "동국산업 AAS 구축",
    role: "AAS(Asset Administration Shell) 구축 (BaSyx 플랫폼 사용) 및 WEB 구축",
    stack: "JavaScript, Vue, Spring Boot, Java",
    period: "2026-03-10 ~ 2026-07-10",
    members: "3인",
    desc: "동국산업의 자산관리시스템 WEB 및 플랫폼 구축",
    imgs: [
      "vuejs.png",
      "javascript.png",
      "springboot.png",
      "java.png",
      "jenkins.png",
      "docker.png",
    ],
  },
];

function Chevron() {
  return (
    <svg
      className="project-card__chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  const details = [
    { label: "주요 업무", value: project.work },
    { label: "담당 역할", value: project.role },
    { label: "기술 스택", value: project.stack },
    { label: "업무 기간", value: project.period },
    { label: "개발 인원", value: project.members },
    { label: "상세 내용", value: project.desc },
  ];

  return (
    <motion.div
      className={`project-card${open ? " project-card--open" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
    >
      <div className="project-card__header" onClick={() => setOpen((o) => !o)}>
        <span className="project-card__title">{project.title}</span>
        <Chevron />
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="project-card__body"
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="project-card__content">
              {details.map((d) => (
                <div key={d.label} className="project-detail">
                  <span className="project-detail__label">{d.label}</span>
                  <span className="project-detail__value">{d.value}</span>
                </div>
              ))}
              <div className="project-card__imgs">
                {project.imgs.map((img) => (
                  <img
                    key={img}
                    src={`${import.meta.env.BASE_URL}image/${img}`}
                    alt={img.replace(".png", "")}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function History() {
  return (
    <section className="section">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        경력
      </motion.h2>

      <motion.table
        className="history__company-table"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <thead>
          <tr>
            <th>회사명</th>
            <th>근무기간</th>
            <th>업종</th>
            <th>업무</th>
          </tr>
        </thead>
        <tbody>
          {COMPANIES.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.period}</td>
              <td>{c.industry}</td>
              <td>{c.work}</td>
            </tr>
          ))}
        </tbody>
      </motion.table>

      <div className="history__projects">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
