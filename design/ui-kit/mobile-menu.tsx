const imgVector = "assets/icon-close-circle-19.svg";

type MenuProps = {
  className?: string;
  property1?: "Variant1" | "Variant2";
};

function Menu({ className, property1 = "Variant1" }: MenuProps) {
  if (property1 === "Variant2") {
    return (
      <div className={className || "content-stretch flex flex-col h-[211.477px] items-end p-[8px] relative rounded-[8px] w-[396.816px]"} data-node-id="549:1114" data-name="Property 1=Variant2">
        <div className="flex h-[192.856px] items-center justify-center relative shrink-0 w-[381.42px]" data-node-id="549:1090">
          <div className="flex-none rotate-[-0.43deg]">
            <div className="bg-[#0f0f10] content-stretch flex flex-col gap-[16px] h-[190px] items-center pb-[24px] pt-[20px] px-[24px] relative rounded-[30px]" data-name="Component 6">
              <div className="h-[23px] relative shrink-0 w-full" data-node-id="549:1091" data-name="panel-header" />
              <a className="content-stretch cursor-pointer flex gap-[12px] h-[17px] items-start relative shrink-0" data-node-id="549:1097" data-name="cards-row">
                <div className="h-[17px] relative shrink-0 w-[160px]" data-node-id="549:1098" data-name="project-card" />
                <div className="h-[17px] relative shrink-0 w-[160px]" data-node-id="549:1100" data-name="project-card" />
              </a>
              <button className="absolute block cursor-pointer left-[334.25px] size-[19px] top-[21.59px]" data-node-id="549:1096" data-name="Vector">
                <div className="absolute inset-[-2.63%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector} />
                </div>
              </button>
              <button className="absolute block cursor-pointer h-[20px] left-[74.25px] top-[58.59px] w-[53px]" data-node-id="569:1357" data-name="Главная">
                <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[15px] text-[rgba(255,255,255,0.59)] text-left whitespace-nowrap" data-node-id="I569:1357;154:288" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Главная
                </p>
              </button>
              <a className="absolute block cursor-pointer h-[20px] left-[74.25px] top-[78.59px] w-[275px]" data-node-id="569:1367" data-name="Каталог">
                <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[#b2b2b2] text-[13px] text-left whitespace-nowrap" data-node-id="I569:1367;154:289" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Каталог
                </p>
              </a>
              <a className="absolute block cursor-pointer h-[20px] left-[74.25px] top-[98.59px] w-[275px]" data-node-id="569:1377" data-name="Портфолио">
                <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[#b2b2b2] text-[13px] text-left whitespace-nowrap" data-node-id="I569:1377;154:290" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Портфолио
                </p>
              </a>
              <a className="absolute block cursor-pointer h-[20px] left-[74.25px] top-[118.59px] w-[269px]" data-node-id="569:1387" data-name="Услуги">
                <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="I569:1387;154:291" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Услуги
                </p>
              </a>
              <a className="absolute block cursor-pointer h-[20px] left-[74.25px] top-[138.59px] w-[275px]" data-node-id="569:1397" data-name="Контакты">
                <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="I569:1397;154:292" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Контакты
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "content-stretch cursor-pointer flex flex-col items-end p-[8px] relative w-[379.38px]"} data-node-id="549:1112" data-name="Property 1=Variant1">
      <div className="flex h-[30.346px] items-center justify-center relative shrink-0 w-[46.225px]" data-node-id="549:1163">
        <div className="flex-none rotate-[0.43deg]">
          <div className="bg-[rgba(82,82,77,0.33)] content-stretch cursor-pointer flex flex-col gap-[4px] items-end p-[8px] relative rounded-[8px] w-[46px]" role="button" tabIndex="0" data-name="Menu/Variant1">
            <div className="bg-[#d9d9d9] h-[2px] relative rounded-[100px] shrink-0 w-full" data-node-id="549:1164" />
            <div className="bg-[#d9d9d9] h-[2px] relative rounded-[100px] shrink-0 w-full" data-node-id="549:1165" />
            <div className="bg-[#d9d9d9] h-[2px] relative rounded-[100px] shrink-0 w-full" data-node-id="549:1166" />
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Component() {
  return <div className="bg-[#545454] relative size-full" data-node-id="549:1111" data-name="навигация" />;
}
