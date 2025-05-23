import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../../css/AppColors.module.css'

const Achievements = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <div className="mb-4">
            <h2 className={`${styles.textPrimary} fw-bold`}>Thành tựu</h2>
            <h3 className={`fw-bold ${styles.textPrimary}`}>CareNet – Kết nối & Chia sẻ</h3>
          </div>
          
          <p className={`text-dark mb-4`}>
            <strong>CareNet</strong> là một nền tảng kết nối người có nhu cầu được giúp đỡ
            với những người có mong muốn giúp đỡ để tạo nên một cộng đồng hỗ trợ
            lẫn nhau khỏe mạnh. Dưới đây là một số thành tựu nổi bật của CareNet:
          </p>
          
          <ul className="list-unstyled text-dark">
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              10.000+ người đã hoàn cảnh khó khăn đã nhận được hỗ trợ
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              5000+ tình nguyện viên từ giới trẻ, y tế đến các nhà chuyên môn
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              450+ dự án cộng đồng đã được triển khai thành công
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              Hàng tỷ đồng giá trị tài trợ cho các dự án nhân đạo
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              Hệ thống phát triển trên nguyên tắc phát triển kỹ năng chuyên nghiệp
            </li>
          </ul>
        </Col>
        
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img 
            src="https://i.pinimg.com/736x/db/66/15/db66153cfa61bd918c9ab610f4ab401c.jpg" 
            alt="CareNet Achievements" 
            className="img-fluid rounded-4 w-50" 
            style={{ maxHeight: '500px' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Achievements;