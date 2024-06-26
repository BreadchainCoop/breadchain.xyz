import clsx from "clsx";
import { WRAPPER_CLASSES } from "../utils";
import { TertiaryButtonLink } from "./TertiaryButtonLink";

import { memberProjects } from "@breadchain.xyz/shared";

const { cca, laborDao, symbiota } = memberProjects;

const homepageProjects = [
  { ...cca, bannerSrc: "cca_banner.png" },
  { ...laborDao, bannerSrc: "labordao_banner.png" },
  { ...symbiota, bannerSrc: "symbiota_banner.png" },
];

export function MembersSection() {
  return (
    <section
      id="projects"
      className={clsx(WRAPPER_CLASSES, "relative pb-64 sm:pb-[22rem]")}
    >
      <div className="m-auto flex max-w-sm flex-col gap-4 justify-self-start md:max-w-full">
        <h2 className="font-redhat m-auto flex w-full max-w-sm flex-col text-left text-5xl font-bold sm:max-w-full md:flex-row md:gap-4">
          <span>Co-operative</span>
          <span className="font-normal">by design</span>
        </h2>
        <div className="w-full">
          Learn more about the project you would support.
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-start gap-24 pt-16 md:gap-12">
        {homepageProjects.map(
          ({ name, description, homepage, bannerSrc }, i) => {
            return (
              <MemberCard
                key={`membercard_${i}`}
                name={name}
                info={description}
                bannerSrc={bannerSrc}
                link={homepage}
              />
            );
          }
        )}
      </div>
      <MembersBackgroundGraphic />
    </section>
  );
}

export function MemberCard({
  name,
  info,
  link,
  bannerSrc,
}: {
  name: string;
  info: string;
  link: string;
  bannerSrc: string;
}) {
  return (
    <article className="col-span-3 m-auto flex h-full max-w-sm flex-col md:col-span-1">
      <img className="w-full" src={bannerSrc} alt="" />
      <div className="flex grow flex-col gap-2 p-8 pb-12">
        <h3 className="font-redhat text-2xl font-medium">{name}</h3>
        <p>{info}</p>
      </div>
      <TertiaryButtonLink href={link} isExternal>
        Learn More
      </TertiaryButtonLink>
    </article>
  );
}

export function MembersBackgroundGraphic() {
  return (
    <div className="absolute bottom-0 left-0 right-0 -z-20 flex justify-center">
      <svg
        className="h-auto w-[32rem] sm:w-[44rem]"
        viewBox="0 0 736 735"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="members_bg_b" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m361.474 692.881 330.407-330.407L372.818 43.411 42.411 373.818l319.063 319.063Zm337.498-331.825 34.037-34.037a2 2 0 0 0 0-2.829L411.102 2.283a2 2 0 0 0-2.829 0L374.237 36.32 338.781.865a2 2 0 0 0-2.828 0L1.283 335.535a2 2 0 0 0 0 2.828l35.456 35.455-35.455 35.456a2 2 0 0 0 0 2.828L323.19 734.009a2 2 0 0 0 2.828 0l35.455-35.455 35.455 35.455a2 2 0 0 0 2.829 0L734.427 399.34a2 2 0 0 0 0-2.829l-35.455-35.455Z"
          />
        </mask>
        <path
          d="m361.474 692.881-.707.707.707.707.708-.707-.708-.707Zm330.407-330.407.707.707.708-.707-.708-.707-.707.707ZM372.818 43.411l.707-.707-.707-.707-.707.707.707.707ZM42.411 373.818l-.707-.707-.707.707.707.707.707-.707Zm656.561-12.762-.707-.707-.707.707.707.707.707-.707Zm34.037-36.866-.707.708.707-.708ZM411.102 2.283l.707-.707-.707.707ZM374.237 36.32l-.708.707.708.707.707-.707-.707-.707ZM1.283 338.363l.708-.707-.708.707Zm35.456 35.455.707.708.707-.708-.707-.707-.707.707Zm324.735 324.736.707-.707-.707-.707-.707.707.707.707Zm35.455 35.455.707-.707-.707.707Zm337.498-337.498.707-.707-.707.707ZM362.182 693.588l330.406-330.407-1.414-1.414-330.407 330.407 1.415 1.414Zm9.929-649.47 319.063 319.063 1.414-1.414L373.525 42.704l-1.414 1.414ZM43.118 374.525 373.525 44.118l-1.414-1.414L41.704 373.111l1.414 1.414Zm319.064 317.649L43.118 373.111l-1.414 1.414 319.063 319.063 1.415-1.414Zm337.497-330.411 34.037-34.037-1.414-1.414-34.037 34.037 1.414 1.414Zm34.037-34.037a3.001 3.001 0 0 0 0-4.243l-1.414 1.415a1 1 0 0 1 0 1.414l1.414 1.414Zm0-4.243L411.809 1.576l-1.414 1.415 321.907 321.907 1.414-1.415ZM411.809 1.576a3 3 0 0 0-4.243 0l1.414 1.415a1.001 1.001 0 0 1 1.415 0l1.414-1.415Zm-4.243 0-34.037 34.037 1.415 1.414L408.98 2.991l-1.414-1.415Zm-32.622 34.037L339.489.158l-1.415 1.414 35.455 35.455 1.415-1.414ZM339.489.158a3 3 0 0 0-4.243 0l1.414 1.414a1 1 0 0 1 1.414 0l1.415-1.414Zm-4.243 0L.576 334.828l1.415 1.414L336.66 1.572 335.246.158ZM.576 334.828a3 3 0 0 0 0 4.242l1.415-1.414a1 1 0 0 1 0-1.414l-1.415-1.414Zm0 4.242 35.456 35.456 1.414-1.415-35.455-35.455-1.415 1.414Zm35.456 34.041L.577 408.566l1.414 1.415 35.455-35.455-1.414-1.415ZM.577 408.566a3 3 0 0 0 0 4.243l1.414-1.414a1 1 0 0 1 0-1.414l-1.414-1.415Zm0 4.243 321.907 321.907 1.414-1.414L1.991 411.395l-1.414 1.414Zm321.907 321.907a2.998 2.998 0 0 0 4.242 0l-1.414-1.414a1 1 0 0 1-1.414 0l-1.414 1.414Zm4.242 0 35.455-35.455-1.414-1.414-35.455 35.455 1.414 1.414Zm70.91-1.414-35.455-35.455-1.414 1.414 35.455 35.455 1.414-1.414Zm1.415 0a1 1 0 0 1-1.415 0l-1.414 1.414a3 3 0 0 0 4.243 0l-1.414-1.414ZM733.72 398.633 399.051 733.302l1.414 1.414 334.669-334.669-1.414-1.414Zm0-1.415a1 1 0 0 1 0 1.415l1.414 1.414a3 3 0 0 0 0-4.243l-1.414 1.414Zm-35.455-35.455 35.455 35.455 1.414-1.414-35.455-35.455-1.414 1.414Z"
          fill="url(#members_bg_a)"
          mask="url(#members_bg_b)"
        />
        <defs>
          <linearGradient
            id="members_bg_a"
            x1="367"
            y1="772"
            x2="367"
            y2="444"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF99E2" />
            <stop offset="1" stopColor="#FF99E2" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
