import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

const CERTS = [
  { date: "2025.12", name: "정보처리기사", org: "한국산업인력공단" },
  { date: "2024.09", name: "정보처리산업기사", org: "한국산업인력공단" },
  {
    date: "2024.09",
    name: "SQL개발자 (SQLD)",
    org: "한국데이터베이스진흥센터",
  },
  { date: "2018.12", name: "전산회계 2급 (국가공인)", org: "한국세무사협회" },
  { date: "2015.11", name: "2종보통운전면허", org: "경찰청" },
];

export default function Info() {
  return (
    <section className="section">
      <motion.h2 className="section__title" {...fadeUp()}>
        소개
      </motion.h2>

      <div className="info__grid">
        <motion.div className="info__card" {...fadeUp(0.05)}>
          <h3 className="info__card-title">가치관</h3>
          <p className="info__card-quote">
            &lt;<strong>도전</strong> 없이 <strong>실패</strong>는 없고, 실패
            없이 <strong>성공</strong>도 없다&gt;
          </p>
          <p className="info__text">
            저의 가치관은 도전을 해야 성장한다 입니다. 도전하지 않으면 실패도
            없고 실패가 없으면 성공도 없다고 생각합니다. 학창 시절 시와산
            동아리에서 반장으로 동아리 축제 이벤트를 기획해 가장 인기 많은
            이벤트로 성공적으로 마무리하며 상금을 받은 적이 있었습니다. 이를
            계기로 제 가치관에 힘이 실렸고, 성인이 된 후 새로운 도전을 위해
            사회에 일찍 발을 디뎠습니다. 최전방수호병 면접을 합격하여 전방에서
            근무한 경험은 제 인생의 터닝 포인트가 되었고, 희생이 따르는 일이라면
            고민하지 말고 내가 하자는 가치관이 하나 더 생겼습니다.
          </p>
        </motion.div>

        <motion.div className="info__card" {...fadeUp(0.15)}>
          <h3 className="info__card-title">성격</h3>
          <p className="info__card-quote">
            &lt;<strong>긍정적 마인드</strong>와 <strong>꼼꼼</strong>하고{" "}
            <strong>온화</strong>한&gt;
          </p>
          <p className="info__text">
            긍정적 마인드는 회사생활 뿐만 아니라 평소 일상에서도 중요하다고
            생각합니다. 일이 틀어지거나 생각대로 풀리지 않을 때도 긍정적 사고로
            접근합니다. 저는 굉장히 꼼꼼한 성격을 가지고 있어 작업 시 확실하게
            마무리하고 여러 번 테스트하는 과정을 반복합니다. 이전 직장에서
            멀티태스킹이 필요한 상황을 많이 겪으며 여러 일을 동시에 처리하는
            능력이 생겼고, 꼼꼼함으로 인한 약점이 많이 개선되었습니다. 팀원들과
            협업할 때는 항상 먼저 나서서 하였고 원만한 관계를 유지하며
            사회생활을 해왔습니다.
          </p>
        </motion.div>

        <motion.div className="info__card" {...fadeUp(0.25)}>
          <h3 className="info__card-title">학력</h3>
          <table className="info__cert">
            <thead>
              <tr>
                <th>기간</th>
                <th>학교명</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2010 ~ 2013</td>
                <td>무거중학교</td>
                <td>졸업</td>
              </tr>
              <tr>
                <td>2013 ~ 2016</td>
                <td>무거고등학교</td>
                <td>졸업</td>
              </tr>
              <tr>
                <td>2025.03 ~ 재학중</td>
                <td>서울사이버대학교</td>
                <td>재학중</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div className="info__card" {...fadeUp(0.35)}>
          <h3 className="info__card-title">자격증</h3>
          <table className="info__cert">
            <thead>
              <tr>
                <th>일자</th>
                <th>자격증명</th>
                <th>발급기관</th>
              </tr>
            </thead>
            <tbody>
              {CERTS.map((c, i) => (
                <tr key={i}>
                  <td>{c.date}</td>
                  <td>{c.name}</td>
                  <td>{c.org}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
