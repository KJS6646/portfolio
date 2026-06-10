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
            <strong>
              "안주하지 않는 도전이 성장을 이끌고, 솔선수범의 자세가 조직의
              성공을 완성합니다"
            </strong>
          </p>
          <p className="info__text">
            학창 시절 동아리 반장으로서 실패를 두려워하지 않고 새로운 축제
            이벤트를 기획하여, 가장 인기 있는 이벤트로 성공시키며 상금을 받은
            경험이 있습니다. 이 성과는 제게 <b>도전하지 않으면 성취도 없다</b>는
            확신을 주었습니다. 성인이 된 후에는 새로운 도전을 위해 남들보다
            빠르게 사회로 발을 내딛었습니다. 특히 최전방 수호병에 지원하여
            격오지에서 복무한 경험은 제 인생의 강력한 터닝포인트가 되었습니다.
            힘든 임무 속에서 <b>어려운 일일수록 내가 먼저 솔선수범하자</b>는
            단단한 책임감을 배웠기 때문입니다. 이처럼 실패를 두려워하지 않는
            <b>과감한 도전정신</b>과 팀을 위해 먼저 행동하는
            <b>솔선수범의 책임감</b>을 바탕으로, 기업과 함께 성장하는 인재가
            되겠습니다.
          </p>
        </motion.div>

        <motion.div className="info__card" {...fadeUp(0.15)}>
          <h3 className="info__card-title">성격</h3>
          <p className="info__card-quote">
            <strong>
              "긍정적인 에너지로 소통하고, 철저한 꼼꼼함으로 성과를 완성합니다"
            </strong>
          </p>
          <p className="info__text">
            어떠한 상황에서도 문제 해결의 가능성을 보는 <b>긍정적 마인드</b>는
            평소 일상뿐만 아니라 업무 몰입도에도 큰 원동력이 됩니다. 일이
            예상대로 풀리지 않을 때도 감정에 치우치기보다 대안을 먼저 찾는
            편입니다. 업무를 수행할 때는 확실한 마무리와 반복적인 검증을 거치는
            <b> 철저한 꼼꼼함</b>이 제 가장 큰 장점입니다. 과거 꼼꼼한 성향 탓에
            작업 속도가 신중해질 때도 있었으나, 이전 직장에서 다양한 멀티태스킹
            업무를 수행하며 이를 완벽히 보완했습니다. 여러 프로젝트를 동시에
            핸들링하는 과정에서 업무의 우선순위를 정하는 노하우를 터득했고,
            현재는 속도와 정확성을 모두 갖춘 업무 처리 능력을 보유하게
            되었습니다. 협업 시에는 가치관인 <b>솔선수범</b>을 바탕으로 항상
            먼저 움직이며, 온화한 태도로 팀원들과 원만한 관계를 유지합니다.
            이러한 긍정적 태도와 꼼꼼한 일 처리를 바탕으로 조직의 든든한
            버팀목이 되겠습니다.
          </p>
        </motion.div>

        <motion.div className="info__card" {...fadeUp(0.25)}>
          <h3 className="info__card-title">학력</h3>
          <table className="info__cert">
            <thead>
              <tr>
                <th>기간</th>
                <th>학교명</th>
                <th>학과</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2010 ~ 2013</td>
                <td>무거중학교</td>
                <td>-</td>
                <td>졸업</td>
              </tr>
              <tr>
                <td>2013 ~ 2016</td>
                <td>무거고등학교</td>
                <td>-</td>
                <td>졸업</td>
              </tr>
              <tr>
                <td>2025.03 ~ 재학중</td>
                <td>서울사이버대학교</td>
                <td>빅데이터정보보안학과</td>
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
