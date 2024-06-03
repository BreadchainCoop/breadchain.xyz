import { WRAPPER_PADDING } from "../../utils";
import { CheckmarkIcon, CoinIcon, UsersIcon } from "../Icons";
import {
  InfoCardGrid,
  InfoCard,
  InfoCardHeading,
  InfoCardIcon,
  InfoCardText,
  InfoCardTextContent,
} from "./ui";
import { CardSVG1, CardSVG2, CardSVG3 } from "./ui";
import clsx from "clsx";

const infoCards = [
  {
    title: "Get consistent value",
    infotext:
      "$BREAD is linked to $DAI which is a stablecoin with equal value to USD. So $1 = 1 $BREAD.",
    icon: <CheckmarkIcon />,
    BackgroundSVG: CardSVG1,
  },
  {
    title: "Built on solidarity",
    infotext:
      "A solidarity primitive is a building block for solidarity through code. Build with $BREAD to have a tech stack with values.",
    icon: <UsersIcon />,
    BackgroundSVG: CardSVG2,
  },
  {
    title: "Fund the future",
    infotext:
      "Earnings from the minting of $BREAD go to supporting a co-operative of post-capitalist web3 projects. ",
    icon: <CoinIcon />,
    BackgroundSVG: CardSVG3,
  },
];

export function InfoCards() {
  return (
    <section id="about" className="pb-6">
      <div
        className={clsx(
          WRAPPER_PADDING,
          "flex flex-col gap-2 py-8 text-center"
        )}
      >
        <h2 className="font-redhat m-auto inline max-w-sm text-4xl font-bold sm:max-w-full md:text-5xl">
          <span className="font-normal">Get that</span> $BREAD
        </h2>
        <div className="w-full">
          See why $BREAD is the best thing since sliced, well, you know.
        </div>
      </div>
      <InfoCardGrid>
        {/* left col */}
        <div className="col-span-1 col-start-1 row-span-1 row-start-2 hidden md:block">
          <svg
            viewBox="0 0 50 333"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask id="path-1-inside-1_1632_1630" fill="white">
              <path d="M0 2.20605C0 1.10148 0.895431 0.206055 2 0.206055L48 0.206055C49.1046 0.206055 50 1.10149 50 2.20605L50 331C50 332.105 49.1046 333 48 333H2C0.895432 333 0 332.105 0 331L0 2.20605Z" />
            </mask>
            <path
              d="M1 2.20605C1 1.65377 1.44771 1.20605 2 1.20605V-0.793945C0.343151 -0.793945 -1 0.549187 -1 2.20605H1ZM2 1.20605L48 1.20605V-0.793945L2 -0.793945V1.20605ZM48 1.20605C48.5523 1.20605 49 1.65377 49 2.20605H51C51 0.5492 49.6569 -0.793945 48 -0.793945V1.20605ZM49 2.20605L49 331H51L51 2.20605H49ZM49 331C49 331.552 48.5523 332 48 332V334C49.6568 334 51 332.657 51 331H49ZM48 332H2L2 334H48V332ZM2 332C1.44771 332 1 331.552 1 331H-1C-1 332.657 0.343152 334 2 334L2 332ZM1 331L1 2.20605H-1L-1 331H1Z"
              fill="url(#paint0_linear_1632_1630)"
              mask="url(#path-1-inside-1_1632_1630)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1632_1630"
                x1="25"
                y1="0.206055"
                x2="-137.108"
                y2="82.2176"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CC43A5" />
                <stop offset="1" stopColor="#FF99E2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* top piece */}
        <div className="col-span-1 col-start-2 row-span-1 row-start-1 hidden md:block">
          <svg
            viewBox="0 0 403 42"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask id="path-1-inside-1_1662_1427" fill="white">
              <path d="M2.00001 41.2222C0.89544 41.2222 0 40.3268 0 39.2222L0 2C0 0.895433 0.895431 0 2 0L401 0C402.105 0 403 0.895431 403 2V39.2222C403 40.3268 402.105 41.2222 401 41.2222L2.00001 41.2222Z" />
            </mask>
            <path
              d="M401 41.2222V40.2222V41.2222ZM401 0V-1V0ZM2 0V1V0ZM2.00001 41.2222V42.2222V41.2222ZM1 39.2222L1 2H-1L-1 39.2222H1ZM2 1L401 1V-1L2 -1V1ZM402 2V39.2222H404V2H402ZM401 40.2222L2.00001 40.2222V42.2222L401 42.2222V40.2222ZM402 39.2222C402 39.7745 401.552 40.2222 401 40.2222V42.2222C402.657 42.2222 404 40.8791 404 39.2222H402ZM401 1C401.552 1 402 1.44772 402 2H404C404 0.34314 402.657 -1 401 -1V1ZM1 2C1 1.44772 1.44772 1 2 1V-1C0.343144 -1 -1 0.34315 -1 2H1ZM-1 39.2222C-1 40.8791 0.343161 42.2222 2.00001 42.2222V40.2222C1.44772 40.2222 1 39.7745 1 39.2222H-1Z"
              fill="#CC43A5"
              mask="url(#path-1-inside-1_1662_1427)"
            />
          </svg>
        </div>
        {/* center left col */}
        <div className="col-span-1 col-start-3 row-span-3 row-start-2 hidden md:block">
          <svg
            viewBox="0 0 50 617"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask id="path-1-inside-1_1632_1633" fill="white">
              <path d="M0 1.99999C0 0.895423 0.895431 0 2 0L48 0C49.1046 0 50 0.895431 50 2L50 615C50 616.105 49.1046 617 48 617H2C0.895432 617 0 616.105 0 615L0 1.99999Z" />
            </mask>
            <path
              d="M2 1L48 1V-1L2 -1V1ZM49 2L49 615H51L51 2H49ZM48 616H2V618H48V616ZM1 615L1 1.99999H-1L-1 615H1ZM2 616C1.44772 616 1 615.552 1 615H-1C-1 616.657 0.343148 618 2 618V616ZM49 615C49 615.552 48.5523 616 48 616V618C49.6568 618 51 616.657 51 615H49ZM48 1C48.5523 1 49 1.44772 49 2H51C51 0.343145 49.6569 -1 48 -1V1ZM2 -1C0.34315 -1 -1 0.343134 -1 1.99999H1C1 1.44771 1.44771 1 2 1V-1Z"
              fill="url(#paint0_linear_1632_1633)"
              mask="url(#path-1-inside-1_1632_1633)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1632_1633"
                x1="25"
                y1="0"
                x2="-164.489"
                y2="51.7064"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF99E2" stopOpacity="0" />
                <stop offset="1" stopColor="#CC43A5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* center right col */}
        <div className="col-span-1 col-start-5 row-span-1 row-start-2 hidden md:block">
          <svg
            viewBox="0 0 50 386"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask id="path-1-inside-1_1664_1438" fill="white">
              <path d="M0 1.99999C0 0.89542 0.89543 0 2 0L48 0C49.1046 0 50 0.895431 50 2L50 383.406C50 384.511 49.1046 385.406 48 385.406H2C0.895432 385.406 0 384.511 0 383.406L0 1.99999Z" />
            </mask>
            <path
              d="M2 1L48 1V-1L2 -1V1ZM49 2L49 383.406H51L51 2H49ZM48 384.406H2L2 386.406H48V384.406ZM1 383.406L1 1.99999H-1L-1 383.406H1ZM2 384.406C1.44772 384.406 1 383.959 1 383.406H-1C-1 385.063 0.343148 386.406 2 386.406L2 384.406ZM49 383.406C49 383.959 48.5523 384.406 48 384.406V386.406C49.6568 386.406 51 385.063 51 383.406H49ZM48 1C48.5523 1 49 1.44772 49 2H51C51 0.343145 49.6569 -1 48 -1V1ZM2 -1C0.343152 -1 -1 0.343129 -1 1.99999H1C1 1.44771 1.44771 1 2 1V-1Z"
              fill="url(#paint0_linear_1664_1438)"
              mask="url(#path-1-inside-1_1664_1438)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1664_1438"
                x1="25"
                y1="0"
                x2="-173.406"
                y2="151.445"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CC43A5" />
                <stop offset="1" stopColor="#FF99E2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* bottom piece */}
        <div className="col-span-1 col-start-6 row-span-1 row-start-3 hidden md:block">
          <svg
            viewBox="0 0 407 48"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask id="path-1-inside-1_1664_1434" fill="white">
              <path d="M1.99999 47.9999C0.895423 47.9999 0 47.1045 0 45.9999L0 2.44336C0 1.33879 0.89543 0.443359 2 0.443359L405 0.443359C406.105 0.443359 407 1.33879 407 2.44336V45.9999C407 47.1045 406.105 47.9999 405 47.9999L1.99999 47.9999Z" />
            </mask>
            <path
              d="M1 45.9999L1 2.44336H-1L-1 45.9999H1ZM2 1.44336L405 1.44336V-0.556641L2 -0.556641V1.44336ZM406 2.44336V45.9999H408V2.44336H406ZM405 46.9999L1.99999 46.9999V48.9999L405 48.9999V46.9999ZM406 45.9999C406 46.5522 405.552 46.9999 405 46.9999V48.9999C406.657 48.9999 408 47.6568 408 45.9999H406ZM405 1.44336C405.552 1.44336 406 1.89107 406 2.44336H408C408 0.78651 406.657 -0.556641 405 -0.556641V1.44336ZM1 2.44336C1 1.89107 1.44771 1.44336 2 1.44336V-0.556641C0.343147 -0.556641 -1 0.786502 -1 2.44336H1ZM-1 45.9999C-1 47.6568 0.343133 48.9999 1.99999 48.9999V46.9999C1.44771 46.9999 1 46.5522 1 45.9999H-1Z"
              fill="#CC43A5"
              fillOpacity="0.1"
              mask="url(#path-1-inside-1_1664_1434)"
            />
          </svg>
        </div>
        {/* right col */}
        <div className="col-span-1 col-start-7 row-span-1 row-start-2 hidden md:block">
          <svg
            viewBox="0 0 50 386"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask id="path-1-inside-1_1632_1635" fill="white">
              <path d="M0 1.99999C0 0.89542 0.895431 0 2 0L48 0C49.1046 0 50 0.895431 50 2L50 383.406C50 384.511 49.1046 385.406 48 385.406H2C0.895432 385.406 0 384.511 0 383.406L0 1.99999Z" />
            </mask>
            <path
              d="M1 1.99999C1 1.44771 1.44771 1 2 1V-1C0.343153 -1 -1 0.343129 -1 1.99999H1ZM2 1L48 1V-1L2 -1V1ZM48 1C48.5523 1 49 1.44772 49 2H51C51 0.343146 49.6569 -1 48 -1V1ZM49 2L49 383.406H51L51 2H49ZM49 383.406C49 383.959 48.5523 384.406 48 384.406V386.406C49.6568 386.406 51 385.063 51 383.406H49ZM48 384.406H2L2 386.406H48V384.406ZM2 384.406C1.44771 384.406 1 383.959 1 383.406H-1C-1 385.063 0.343152 386.406 2 386.406L2 384.406ZM1 383.406L1 1.99999H-1L-1 383.406H1Z"
              fill="url(#paint0_linear_1632_1635)"
              mask="url(#path-1-inside-1_1632_1635)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1632_1635"
                x1="25"
                y1="55"
                x2="-151.966"
                y2="161.027"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CC43A5" />
                <stop offset="1" stopColor="#FF99E2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="col-span-3 col-start-1 row-span-1 row-start-2 md:col-span-1 md:col-start-2">
          <InfoCard key={`infocard_${0}`}>
            <div className="absolute left-0 top-0 md:hidden">
              <svg
                className="h-auto w-44 [@media(min-width:440px)]:w-64 [@media(min-width:600px)]:w-80"
                viewBox="0 0 229 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_1667_1429" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 13C14 14.1046 14.8954 15 16 15L227 15C228.105 15 229 14.1046 229 13V2C229 0.895431 228.105 0 227 0L16 0C14.8954 0 14 0.89543 14 2V13ZM2 15C0.895431 15 0 15.8954 0 17L0 206C0 207.105 0.89543 208 2 208H13C14.1046 208 15 207.105 15 206L15 17C15 15.8954 14.1046 15 13 15H2Z"
                  />
                </mask>
                <path
                  d="M16 14C15.4477 14 15 13.5523 15 13H13C13 14.6569 14.3431 16 16 16V14ZM227 14L16 14V16L227 16V14ZM228 13C228 13.5523 227.552 14 227 14V16C228.657 16 230 14.6569 230 13H228ZM228 2V13H230V2L228 2ZM227 1C227.552 1 228 1.44772 228 2L230 2C230 0.343146 228.657 -1 227 -1V1ZM16 1L227 1V-1L16 -1V1ZM15 2C15 1.44772 15.4477 1 16 1V-1C14.3431 -1 13 0.343146 13 2L15 2ZM15 13V2L13 2V13H15ZM1 17C1 16.4477 1.44771 16 2 16V14C0.343147 14 -1 15.3431 -1 17H1ZM1 206L1 17H-1L-1 206H1ZM2 207C1.44772 207 1 206.552 1 206H-1C-1 207.657 0.343145 209 2 209V207ZM13 207H2V209H13L13 207ZM14 206C14 206.552 13.5523 207 13 207L13 209C14.6569 209 16 207.657 16 206H14ZM14 17L14 206H16L16 17H14ZM13 16C13.5523 16 14 16.4477 14 17H16C16 15.3431 14.6569 14 13 14V16ZM2 16H13V14H2V16Z"
                  fill="url(#paint0_linear_1667_1429)"
                  mask="url(#path-1-inside-1_1667_1429)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1667_1429"
                    x1="109.959"
                    y1="-1.23479e-06"
                    x2="44.8722"
                    y2="242.528"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CC43A5" />
                    <stop offset="1" stopColor="#FF99E2" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* <BackgroundSVG /> */}
            <InfoCardIcon>{infoCards[0].icon}</InfoCardIcon>
            <InfoCardTextContent>
              <InfoCardHeading>{infoCards[0].title}</InfoCardHeading>
              <InfoCardText>{infoCards[0].infotext}</InfoCardText>
            </InfoCardTextContent>
          </InfoCard>
        </div>

        <div className="col-span-3 col-start-1 row-span-1 row-start-4 md:col-span-1 md:col-start-4 md:row-start-2">
          <InfoCard key={`infocard_${1}`}>
            {/* <BackgroundSVG /> */}
            <InfoCardIcon>{infoCards[1].icon}</InfoCardIcon>
            <InfoCardTextContent>
              <InfoCardHeading>{infoCards[1].title}</InfoCardHeading>
              <InfoCardText>{infoCards[1].infotext}</InfoCardText>
            </InfoCardTextContent>
          </InfoCard>
        </div>

        <div className="col-span-3 col-start-1 row-span-1 row-start-6 md:col-span-1 md:col-start-6 md:row-start-2">
          <InfoCard key={`infocard_${2}`}>
            <div className="absolute bottom-0 right-0 md:hidden">
              <svg
                className="h-auto w-44 [@media(min-width:440px)]:w-64 [@media(min-width:600px)]:w-80"
                viewBox="0 0 229 207"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_1667_1493" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M214.486 193.392C214.486 192.288 213.591 191.392 212.486 191.392L1.99908 191.392C0.894507 191.392 -0.000924349 192.288 -0.000924349 193.392V204.392C-0.000924349 205.497 0.894507 206.392 1.99908 206.392L212.486 206.392C213.591 206.392 214.486 205.497 214.486 204.392V193.392ZM227 193.079C228.105 193.079 229 192.183 229 191.079V2.00009C229 0.89552 228.105 8.81214e-05 227 8.81214e-05H216C214.895 8.81214e-05 214 0.89552 214 2.00009V191.079C214 192.183 214.895 193.079 216 193.079H227Z"
                  />
                </mask>
                <path
                  d="M212.486 191.392V192.392V191.392ZM1.99908 191.392V190.392V191.392ZM1.99908 206.392V205.392V206.392ZM212.486 206.392V207.392V206.392ZM212.486 192.392C213.039 192.392 213.486 192.84 213.486 193.392H215.486C215.486 191.735 214.143 190.392 212.486 190.392V192.392ZM1.99908 192.392L212.486 192.392V190.392L1.99908 190.392V192.392ZM0.999076 193.392C0.999076 192.84 1.44679 192.392 1.99908 192.392V190.392C0.342223 190.392 -1.00092 191.735 -1.00092 193.392H0.999076ZM0.999076 204.392V193.392H-1.00092V204.392H0.999076ZM1.99908 205.392C1.44679 205.392 0.999076 204.944 0.999076 204.392H-1.00092C-1.00092 206.049 0.342223 207.392 1.99908 207.392V205.392ZM212.486 205.392L1.99908 205.392V207.392L212.486 207.392V205.392ZM213.486 204.392C213.486 204.944 213.039 205.392 212.486 205.392V207.392C214.143 207.392 215.486 206.049 215.486 204.392H213.486ZM213.486 193.392V204.392H215.486V193.392H213.486ZM228 191.079C228 191.631 227.552 192.079 227 192.079V194.079C228.657 194.079 230 192.735 230 191.079H228ZM228 2.00009V191.079H230V2.00009H228ZM227 1.00009C227.552 1.00009 228 1.4478 228 2.00009H230C230 0.343236 228.657 -0.999912 227 -0.999912V1.00009ZM216 1.00009H227V-0.999912H216V1.00009ZM215 2.00009C215 1.4478 215.448 1.00009 216 1.00009V-0.999912C214.343 -0.999912 213 0.343235 213 2.00009H215ZM215 191.079V2.00009H213V191.079H215ZM216 192.079C215.448 192.079 215 191.631 215 191.079H213C213 192.735 214.343 194.079 216 194.079V192.079ZM227 192.079H216V194.079H227V192.079Z"
                  fill="url(#paint0_linear_1667_1493)"
                  mask="url(#path-1-inside-1_1667_1493)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1667_1493"
                    x1="118.959"
                    y1="215"
                    x2="184.046"
                    y2="-27.5283"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CC43A5" />
                    <stop offset="1" stopColor="#FF99E2" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* <BackgroundSVG /> */}
            <InfoCardIcon>{infoCards[2].icon}</InfoCardIcon>
            <InfoCardTextContent>
              <InfoCardHeading>{infoCards[2].title}</InfoCardHeading>
              <InfoCardText>{infoCards[2].infotext}</InfoCardText>
            </InfoCardTextContent>
          </InfoCard>
        </div>
      </InfoCardGrid>
    </section>
  );
}
