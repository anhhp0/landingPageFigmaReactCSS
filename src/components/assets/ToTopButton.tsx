export default function ToTopButton({ className = "" }: ToTopButtonProps) {
  return (
    <div className={`${className}`}>
      <svg
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="5" fill="#FF64AE" />
        <path
          d="M11.3519 19.1775L10.5715 18.3971C10.241 18.0666 10.241 17.5322 10.5715 17.2053L17.4023 10.3709C17.7328 10.0404 18.2672 10.0404 18.5941 10.3709L25.425 17.2018C25.7554 17.5322 25.7554 18.0666 25.425 18.3936L24.6445 19.174C24.3105 19.508 23.7656 19.501 23.4386 19.16L19.4062 14.9271V25.0311C19.4062 25.4986 19.0301 25.8748 18.5625 25.8748H17.4375C16.9699 25.8748 16.5937 25.4986 16.5937 25.0311V14.9271L12.5578 19.1635C12.2308 19.508 11.6859 19.515 11.3519 19.1775Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

interface ToTopButtonProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */