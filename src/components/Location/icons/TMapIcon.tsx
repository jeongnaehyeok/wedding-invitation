const TMapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.125rem"
    height="1.125rem"
    viewBox="594 174 732 732" // 원본 비율 유지
    fill="currentColor" // 부모 색상 상속
  >
    <defs>
      <clipPath id="clip0">
        <rect x="594" y="174" width="732" height="732" />
      </clipPath>
    </defs>
    <g clipPath="url(#clip0)">
      {/* 단색 적용 */}
      <rect x="733" y="317" width="447" height="104" />
      <path
        d="M1071.76 317 1180 317 1180 420.696 1113.91 420.696 1113.91 420.722 1113.34 420.695C1058.82 420.695 1013.98 458.649 1008.59 507.286 1008.54 508.159 1008.49 509.032 1008.44 509.904 1008.31 595.936 1008.18 681.968 1008.04 768L908 768 908 509.904 909.133 492.217C918.128 410.4 979.764 342.959 1062.26 319.256L1071.76 317Z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export default TMapIcon;
