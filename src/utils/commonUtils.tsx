import React from 'react';
import styled from 'styled-components';
interface ArrowProps {
  size?: number; // 아이콘 크기를 조절할 수 있는 옵션
  onClick: () => void;
}

export const ArrowLeft: React.FC<ArrowProps> = ({ size = 24, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={'slick-prev'}
      style={{ cursor: 'pointer' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 19L8 12L15 5"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export const ArrowRight: React.FC<ArrowProps> = ({ size = 24, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={'slick-next-arrow'}
      style={{ cursor: 'pointer' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5L16 12L9 19"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const CodeEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.5s;
  &.active {
    opacity: 1;
    animation: colorChange 1s infinite;
  }

  @keyframes colorChange {
    0% {
      color: #ff0000;
    }
    25% {
      color: #00ff00;
    }
    50% {
      color: #0000ff;
    }
    75% {
      color: #ffff00;
    }
    100% {
      color: #ff00ff;
    }
  }
`;
