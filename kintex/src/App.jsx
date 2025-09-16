import React from 'react';
import './App.css';

function App() {
  const handleMoreClick = () => {
    window.open('https://fifthdimension.co.kr/news', '_blank');
  };

  return (
    <div className="App">
      {/* 더보기 버튼 */}
      <button className="more-button" onClick={handleMoreClick}>
        홈페이지로 이동
      </button>

      {/* 메인 이미지 */}
      <section className="main-section">
        <img src="/images/main.jpeg" alt="2025 대한민국 안전산업박람회" />
      </section>

      {/* 전시장 위치 */}
      <section className="location-section">
        <h2>핍스디멘션 부스 위치 안내</h2>
        <h3>중앙 MAIN STAGE 앞 첨단재난대응기술관</h3>
        <img src="/images/location.png" alt="킨텍스 전시장 배치도" />
      </section>

      {/* 디지털 서비스 */}
      <section className="service-section">
        <h2>홍보 포스터</h2>
        <img src="/images/post.jpg" alt="디지털 트윈 서비스" />
      </section>

      {/* 하단 정보 */}
      <footer className="footer">
        <div className="footer-content">
          <h3>문의 정보</h3>
          <p>대표 : 최 린 | 이메일 : lchoi@korea.ac.kr</p>
          <p>연락처 : 02-2088-2771 | 홈페이지 : <a href ="https://fifthdimension.co.kr/">핍스디멘션</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;