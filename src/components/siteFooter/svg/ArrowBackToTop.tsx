export default function ArrowBackToTop({ className = "" }: ArrowBackToTopProps) {
  return (
    <div className="site-footer__to-top-button">
      <div className="site-footer__rectangle-6"></div>
      <svg
        className="site-footer__arrow-up"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.35193 10.1775L1.57146 9.39707C1.24099 9.0666 1.24099 8.53223 1.57146 8.20527L8.40232 1.3709C8.73279 1.04043 9.26716 1.04043 9.59412 1.3709L16.425 8.20176C16.7554 8.53223 16.7554 9.0666 16.425 9.39356L15.6445 10.174C15.3105 10.508 14.7656 10.501 14.4386 10.16L10.4062 5.92715V16.0311C10.4062 16.4986 10.0301 16.8748 9.56248 16.8748H8.43748C7.9699 16.8748 7.59373 16.4986 7.59373 16.0311V5.92715L3.55779 10.1635C3.23083 10.508 2.68591 10.515 2.35193 10.1775Z"
          fill="white"
        />
      </svg>
      So So
    </div>
  );
}

interface ArrowBackToTopProps {
  className: string;
}
