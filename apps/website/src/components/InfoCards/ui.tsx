import type { ReactNode } from "react";

export function InfoCardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="m-auto px-4 grid-cols-infocards-sm grid-rows-infocards-sm md:grid-cols-infocards-md md:grid-rows-infocards-md grid max-w-xl pt-8 pb-20 md:max-w-6xl md:gap-0 md:py-12">
      {children}
    </div>
  );
}

export function InfoCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <article className="relative flex h-full w-full flex-col items-center gap-8 px-8 pt-14 pb-20 md:py-14">
        {children}
      </article>
    </div>
  );
}

export function InfoCardHeading({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-redhat max-w-[22rem] text-2xl font-bold leading-normal md:max-w-[32rem]  md:leading-relaxed">
      {children}
    </h1>
  );
}

export function InfoCardTextContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-w-2xl flex-col gap-2 text-center">{children}</div>
  );
}

export function InfoCardText({ children }: { children: ReactNode }) {
  return <p className="font-redhat text-regular  max-w-xs">{children}</p>;
}

export function InfoCardIcon({ children }: { children: ReactNode }) {
  return <div className="text-breadpink-shaded h-14">{children}</div>;
}

export function CardSVG1() {
  return (
    <svg
      viewBox="0 0 400 532"
      className="absolute top-0 left-0 h-[600px] max-w-full"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1335_1386)">
        <mask id="path-1-inside-1_1335_1386" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.4242 40.6275L42.4242 368C42.4242 369.104 41.5288 370 40.4242 370H2C0.895433 370 0 369.104 0 368L0 39.7253C0 38.6208 0.895431 37.7253 2 37.7253H39.3945V2C39.3945 0.895432 40.29 0 41.3945 0L398.001 0C399.105 0 400.001 0.895431 400.001 2V38.6275C400.001 39.732 399.105 40.6275 398.001 40.6275L42.4242 40.6275Z"
          />
        </mask>
        <path
          d="M42.4242 40.6275V39.6275H41.4242V40.6275H42.4242ZM39.3945 37.7253V38.7253H40.3945V37.7253H39.3945ZM41.4242 40.6275L41.4242 368H43.4242L43.4242 40.6275H41.4242ZM41.4242 368C41.4242 368.552 40.9765 369 40.4242 369V371C42.0811 371 43.4242 369.657 43.4242 368H41.4242ZM40.4242 369H2V371H40.4242V369ZM2 369C1.44772 369 1 368.552 1 368H-1C-1 369.657 0.343145 371 2 371V369ZM1 368L1 39.7253H-1L-1 368H1ZM1 39.7253C1 39.173 1.44771 38.7253 2 38.7253L2 36.7253C0.343147 36.7253 -1 38.0685 -1 39.7253H1ZM2 38.7253H39.3945V36.7253H2L2 38.7253ZM40.3945 37.7253V2H38.3945V37.7253H40.3945ZM40.3945 2C40.3945 1.44772 40.8422 1 41.3945 1V-1C39.7377 -1 38.3945 0.343148 38.3945 2H40.3945ZM41.3945 1L398.001 1V-1L41.3945 -1V1ZM398.001 1C398.553 1 399.001 1.44771 399.001 2H401.001C401.001 0.34315 399.657 -1 398.001 -1V1ZM399.001 2V38.6275H401.001V2H399.001ZM399.001 38.6275C399.001 39.1797 398.553 39.6275 398.001 39.6275V41.6275C399.657 41.6275 401.001 40.2843 401.001 38.6275H399.001ZM398.001 39.6275L42.4242 39.6275V41.6275L398.001 41.6275V39.6275Z"
          fill="url(#paint0_linear_1335_1386)"
          mask="url(#path-1-inside-1_1335_1386)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1335_1386"
          x1="200"
          y1="0"
          x2="85.7126"
          y2="416.039"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC43A5" />
          <stop offset="1" stopColor="#FF99E2" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_1335_1386">
          <rect width="400" height="532" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CardSVG2() {
  return (
    <svg
      viewBox="0 0 400 624"
      className="absolute top-0 left-0 h-[600px]  max-w-full"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1335_1387)">
        <mask id="path-1-inside-1_1335_1387" fill="white">
          <path d="M0 1.99998C0 0.895413 0.895431 0 2 0L40 0C41.1046 0 42 0.895431 42 2L42 614C42 615.105 41.1046 616 40 616H2C0.89543 616 0 615.105 0 614L0 1.99998Z" />
        </mask>
        <path
          d="M2 1L40 1V-1L2 -1V1ZM41 2L41 614H43L43 2L41 2ZM40 615H2V617H40V615ZM1 614L1 1.99998H-1L-1 614H1ZM2 615C1.44772 615 1 614.552 1 614H-1C-1 615.657 0.343146 617 2 617V615ZM41 614C41 614.552 40.5523 615 40 615V617C41.6568 617 43 615.657 43 614H41ZM40 1C40.5523 1 41 1.44772 41 2L43 2C43 0.343146 41.6569 -1 40 -1V1ZM2 -1C0.343157 -1 -1 0.343117 -1 1.99998H1C1 1.44771 1.4477 1 2 1V-1Z"
          fill="url(#paint0_linear_1335_1387)"
          mask="url(#path-1-inside-1_1335_1387)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1335_1387"
          x1="21"
          y1="0"
          x2="-141.459"
          y2="37.2983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF99E2" stop-opacity="0" />
          <stop offset="1" stopColor="#CC43A5" />
        </linearGradient>
        <clipPath id="clip0_1335_1387">
          <rect width="400" height="624" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CardSVG3() {
  return (
    <svg
      viewBox="0 0 400 443"
      className="absolute top-0 left-0 max-w-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_1335_1388)">
        <mask id="path-1-inside-1_1335_1388" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M357.947 1.99999C357.947 0.895423 358.843 0 359.947 0L397.947 0C399.052 0 399.947 0.895431 399.947 2V386.851C399.947 387.955 399.052 388.851 397.947 388.851H361V426C361 427.105 360.105 428 359 428H41C39.8954 428 39 427.105 39 426L39 388.851H2C0.89543 388.851 0 387.955 0 386.851L0 2.00027C0 0.895701 0.895431 0.000278473 2 0.000278473L40 0.000278473C41.1046 0.000278473 42 0.895709 42 2.00028L42 386H357.947V1.99999Z"
          />
        </mask>
        <path
          d="M361 388.851V387.851H360V388.851H361ZM39 388.851H40V387.851H39V388.851ZM42 386H41V387H42V386ZM357.947 386V387H358.947V386H357.947ZM359.947 -1C358.29 -1 356.947 0.343137 356.947 1.99999L358.947 1.99999C358.947 1.44771 359.395 1 359.947 1V-1ZM397.947 -1L359.947 -1V1L397.947 1V-1ZM400.947 2C400.947 0.34315 399.604 -1 397.947 -1V1C398.5 1 398.947 1.44771 398.947 2H400.947ZM400.947 386.851V2H398.947V386.851H400.947ZM397.947 389.851C399.604 389.851 400.947 388.507 400.947 386.851H398.947C398.947 387.403 398.5 387.851 397.947 387.851V389.851ZM361 389.851H397.947V387.851H361V389.851ZM360 388.851V426H362V388.851H360ZM360 426C360 426.552 359.552 427 359 427V429C360.657 429 362 427.657 362 426H360ZM359 427H41V429H359V427ZM41 427C40.4477 427 40 426.552 40 426H38C38 427.657 39.3431 429 41 429V427ZM40 426L40 388.851H38L38 426H40ZM2 389.851H39V387.851H2V389.851ZM-1 386.851C-1 388.508 0.34315 389.851 2 389.851V387.851C1.44771 387.851 1 387.403 1 386.851H-1ZM-1 2.00027L-1 386.851H1L1 2.00027H-1ZM2 -0.999722C0.343151 -0.999722 -1 0.343411 -1 2.00027H1C1 1.44799 1.44771 1.00028 2 1.00028V-0.999722ZM40 -0.999722L2 -0.999722V1.00028L40 1.00028V-0.999722ZM43 2.00028C43 0.343424 41.6569 -0.999722 40 -0.999722V1.00028C40.5523 1.00028 41 1.44799 41 2.00028H43ZM43 386L43 2.00028H41L41 386H43ZM42 387H357.947V385H42V387ZM356.947 1.99999V386H358.947V1.99999L356.947 1.99999Z"
          fill="url(#paint0_linear_1335_1388)"
          mask="url(#path-1-inside-1_1335_1388)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1335_1388"
          x1="232.5"
          y1="8.70879e-05"
          x2="97.9845"
          y2="486.42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC43A5" />
          <stop offset="1" stopColor="#FF99E2" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_1335_1388">
          <rect width="400" height="443" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
