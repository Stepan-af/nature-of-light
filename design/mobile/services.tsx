const imgCellularConnection = "assets/ios-statusbar-cellular-dark.svg";
const imgWifi = "assets/ios-statusbar-wifi-dark.svg";
const imgBattery = "assets/ios-statusbar-battery-dark.svg";
const imgContainer = "assets/logo-mark.jpg";
const imgVector = "assets/icon-svc-plus-v.svg";
const imgVector1 = "assets/icon-svc-plus-h.svg";
const imgIcon = "assets/icon-arrow-up-right-green.svg";
const imgVector2 = "assets/icon-svc-measure-part1.svg";
const imgVector3 = "assets/icon-svc-measure-part2.svg";
const imgVector4 = "assets/icon-svc-doc-part1.svg";
const imgVector5 = "assets/icon-svc-doc-part2.svg";
const imgIcon1 = "assets/icon-svc-production.svg";
const imgVector6 = "assets/icon-svc-delivery-part1.svg";
const imgVector7 = "assets/icon-svc-delivery-part2.svg";
const imgVector8 = "assets/icon-adv-install-part1.svg";
const imgVector9 = "assets/icon-adv-install-part2.svg";
const imgVector10 = "assets/icon-adv-warranty-part1.svg";
const imgVector11 = "assets/icon-adv-warranty-part2.svg";

// NOTE (extraction): footer instance 791:7264 ("ФУТЕР МОБИЛКИ", top 1481px) omitted — identical to design/mobile/footer.tsx.
// Footer label sub-components (Component, Component1-3) kept verbatim.

type MenuProps = {
  className?: string;
  property1?: "Variant1";
};

function Menu({ className, property1 = "Variant1" }: MenuProps) {
  return (
    <button className={className || "content-stretch cursor-pointer flex flex-col items-end p-[8px] relative w-[379.38px]"} data-node-id="549:1112">
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

type ComponentProps = {
  className?: string;
  property1?: "Default";
};

function Component({ className, property1 = "Default" }: ComponentProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[65px]"} data-node-id="293:1831">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1814">
        Соцсети
      </p>
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "Default";
};

function Component1({ className, property1 = "Default" }: Component1Props) {
  return (
    <div className={className || "h-[14px] relative w-[59px]"} data-node-id="293:1827">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular'] font-normal inset-0 leading-[13.5px] text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1812">
        Партнёрам
      </p>
    </div>
  );
}

type Component2Props = {
  className?: string;
  property1?: "Default";
};

function Component2({ className, property1 = "Default" }: Component2Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[59px]"} data-node-id="293:1823">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1811">
        Компания
      </p>
    </div>
  );
}

type Component3Props = {
  className?: string;
  property1?: "Default";
};

function Component3({ className, property1 = "Default" }: Component3Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[66px]"} data-node-id="293:1819">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1809">
        Продукция
      </p>
    </div>
  );
}

function Component8({ className }: { className?: string }) {
  return (
    <div className={className || "h-[33px] relative w-[368px]"} data-node-id="480:1240" data-name="Component 8">
      <div className="absolute contents inset-[11.69%_0_20.07%_0]" data-node-id="480:1226">
        <div className="absolute content-stretch flex inset-[11.69%_70.65%_20.07%_0] items-center justify-center pt-[2px]" data-node-id="480:1227" data-name="Time">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold'] font-[590] leading-[22px] relative shrink-0 text-[#1a1a1a] text-[17px] text-center whitespace-nowrap" data-node-id="480:1228" style={{ fontVariationSettings: '"wdth" 100' }}>
            9:41
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[7px] inset-[11.69%_0_20.07%_70.65%] items-center justify-center pt-px" data-node-id="480:1229" data-name="Levels">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-node-id="480:1230" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-node-id="480:1231" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="h-[13px] relative shrink-0 w-[27.328px]" data-node-id="480:1232" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
        </div>
      </div>
      <div className="absolute bg-black inset-[0_35.53%_0_34.78%] rounded-[45.005px]" data-node-id="480:1236" />
    </div>
  );
}

type Component4Props = {
  className?: string;
  property1?: "Default";
};

function Component4({ className, property1 = "Default" }: Component4Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10671">
      <div className="absolute content-stretch flex flex-col items-start left-[11px] top-[10px]" data-node-id="426:10672" data-name="Text">
        <p className="[word-break:break-word] font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[20px] not-italic relative shrink-0 text-[#444] text-[7px] text-left whitespace-nowrap" data-node-id="426:10673">
          Противопожарная обработка
        </p>
      </div>
    </button>
  );
}

type Component5Props = {
  className?: string;
  property1?: "Default";
};

function Component5({ className, property1 = "Default" }: Component5Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10678">
      <div className="absolute content-stretch flex flex-col items-start left-[9px] top-[10px] w-[111px]" data-node-id="426:10679" data-name="Text">
        <p className="[word-break:break-word] font-[family-name:var(--typography\/family\/content,'Inter:Medium')] font-medium leading-[12px] not-italic relative shrink-0 text-[#444] text-[7px] text-left w-[97px]" data-node-id="426:10680">
          Монтаж видеостен и подсветки
        </p>
      </div>
    </button>
  );
}

type Component6Props = {
  className?: string;
  property1?: "Default";
};

function Component6({ className, property1 = "Default" }: Component6Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10685">
      <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[8px] w-[102px]" data-node-id="426:10686" data-name="Text">
        <p className="[word-break:break-word] font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[12px] not-italic relative shrink-0 text-[#444] text-[7px] text-left w-[102px]" data-node-id="426:10687">
          Ремонт и герметизация покрытий
        </p>
      </div>
    </button>
  );
}

type Component7Props = {
  className?: string;
  property1?: "Default";
};

function Component7({ className, property1 = "Default" }: Component7Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10692">
      <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[10px]" data-node-id="426:10693" data-name="Text">
        <p className="[word-break:break-word] font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[20px] not-italic relative shrink-0 text-[#444] text-[7px] text-left whitespace-nowrap" data-node-id="426:10694">
          Техническое обслуживание
        </p>
      </div>
    </button>
  );
}

type Component9Props = {
  className?: string;
  property1?: "Default";
};

function Component9({ className, property1 = "Default" }: Component9Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10664">
      <div className="absolute content-stretch flex flex-col items-start left-[19px] top-[10px]" data-node-id="426:10665" data-name="Text">
        <p className="[word-break:break-word] font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[20px] not-italic relative shrink-0 text-[#444] text-[7px] text-left whitespace-nowrap" data-node-id="426:10666">
          Покраска стёкол плёнкой
        </p>
      </div>
    </button>
  );
}

type Component10Props = {
  className?: string;
  property1?: "Default";
};

function Component10({ className, property1 = "Default" }: Component10Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10657">
      <div className="absolute content-stretch flex flex-col items-start left-[13px] top-[9px]" data-node-id="426:10658" data-name="Text">
        <p className="[word-break:break-word] font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[20px] not-italic relative shrink-0 text-[#444] text-[7px] text-left whitespace-nowrap" data-node-id="426:10659">
          Подгонка конструкций зимой
        </p>
      </div>
    </button>
  );
}

type Component11Props = {
  className?: string;
  property1?: "Default";
};

function Component11({ className, property1 = "Default" }: Component11Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10650">
      <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-[82px]" data-node-id="426:10651" data-name="Text">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal h-[28px] justify-center leading-[0] left-[-6px] not-italic text-[#444] text-[7px] text-left top-[14px] tracking-[1px] w-[103px]" data-node-id="426:10652">
          <p className="leading-[10px]">Фасадное остекление без сварки</p>
        </div>
      </div>
    </button>
  );
}

type Component12Props = {
  className?: string;
  property1?: "Default";
};

function Component12({ className, property1 = "Default" }: Component12Props) {
  return (
    <button className={className || "bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch flex gap-[var(--size\\/space\\/gap\\/positive\\/small-xl,12px)] h-[42px] items-center px-[var(--size\\/space\\/gap\\/positive\\/base-xl,24px)] py-[var(--size\\/space\\/padding\\/component\\/base-l,20px)] relative rounded-[7px] w-[125px]"} data-node-id="426:10643">
      <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[24px] top-[10px] w-[76px]" data-node-id="426:10644" data-name="Text">
        <p className="[word-break:break-word] absolute font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[14px] left-[8px] not-italic text-[#444] text-[7px] text-left top-[-4px] w-[92px]" data-node-id="426:10645">
          Демонтаж старых конструкций
        </p>
      </div>
    </button>
  );
}

export default function IPhone1718() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-node-id="791:7237" data-name="iPhone 17 - 18">
      <div className="absolute content-stretch flex flex-col h-[67px] items-start left-[19px] pt-[10px] top-[130px] w-[213px]" data-node-id="791:7238" data-name="Heading 2">
        <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[27px] relative shrink-0 text-[#1a1a1a] text-[30px] tracking-[-0.5px] w-[263px]" data-node-id="791:7239">
          Полный цикл работ
        </p>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex gap-[7px] items-center left-[19px] top-[117px] w-[137px] whitespace-nowrap" data-node-id="791:7240">
        <a className="block cursor-pointer font-['DM_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[#757575] text-[13px] text-center" data-node-id="791:7241" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[19.5px]">Портфолио</p>
        </a>
        <p className="font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[16px] not-italic relative shrink-0 text-[#999] text-[15px]" data-node-id="791:7242">
          ›
        </p>
        <p className="font-['DM_Sans:Regular'] font-normal leading-[16px] relative shrink-0 text-[#0e0e0e] text-[12px]" data-node-id="791:7243" style={{ fontVariationSettings: '"opsz" 14' }}>
          Услуги
        </p>
      </div>
      <div className="absolute bg-[#f9fafb] h-[300px] left-0 top-[1182px] w-[402px]" data-node-id="791:7244" />
      <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 top-[1202px] w-[402px]" data-node-id="791:7245" data-name="Container">
        <div className="[word-break:break-word] content-stretch flex flex-col h-[60px] items-start pt-[var(--size\/space\/padding\/component\/small-xl,12px)] relative shrink-0 w-[417.25px]" data-node-id="791:7246" data-name="Heading 2">
          <p className="absolute font-['Playfair_Display:Medium'] font-medium leading-[19px] left-[25px] text-[#0e0e0e] text-[16px] top-[14px] w-[167px]" data-node-id="791:7247">
            Дополнительные услуги
          </p>
          <p className="absolute font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[16px] left-[196px] not-italic text-[#888] text-[10px] top-[14px] w-[188px]" data-node-id="791:7248">
            Расширенный перечень работ для комплексного обслуживания объекта
          </p>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['DM_Sans:Regular'] font-normal leading-[13px] left-[19px] text-[#888] text-[8px] top-[211px] w-[364px]" data-node-id="791:7249" style={{ fontVariationSettings: '"opsz" 14' }}>
        Берём на себя весь цикл — от первого звонка до сдачи объекта. Работаем с частными лицами, застройщиками и управляющими компаниями.
      </p>
      <Component12 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[15px] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1291px] w-[125px]" />
      <Component11 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[143px] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1291px] w-[125px]" />
      <Component10 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[calc(50%+69px)] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1291px] w-[125px]" />
      <Component9 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[15px] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1342px] w-[125px]" />
      <Component7 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[143px] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1342px] w-[125px]" />
      <Component6 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[calc(50%+70px)] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1342px] w-[125px]" />
      <Component5 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[15px] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1393px] w-[125px]" />
      <Component4 className="absolute bg-[var(--icon-color,white)] border border-[#ebebea] border-solid content-stretch cursor-pointer flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] h-[42px] items-center left-[144px] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] rounded-[7px] top-[1393px] w-[125px]" />
      <Component8 className="-translate-x-1/2 absolute h-[33px] left-1/2 top-[15px] w-[368px]" />
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-[calc(50%+3.11px)] top-[62px] w-[348.224px]" data-node-id="791:7259">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[154px]" data-node-id="791:7260" data-name="Container">
          <div className="border border-[rgba(255,255,255,0)] border-solid relative rounded-[7px] shrink-0 size-[40px]" data-node-id="791:7261" data-name="Container">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
              <img alt="" className="absolute left-[-14.5%] max-w-none size-[129%] top-[-14.5%]" src={imgContainer} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7262" data-name="Text">
            <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[21px] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" data-node-id="791:7263">
              Природа Света
            </p>
          </div>
        </div>
      </div>
      {/* Footer instance 791:7264 "ФУТЕР МОБИЛКИ" (top 1481px) — see design/mobile/footer.tsx */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[208px] items-start left-1/2 top-[262px] w-[370px]" data-node-id="791:7265">
        <div className="content-stretch flex gap-[16px] h-[208px] items-center relative shrink-0 w-full" data-node-id="791:7266">
          <div className="bg-[var(--gray\/50,#f9fafb)] content-stretch flex flex-col gap-[12px] h-[208px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[177px]" data-node-id="791:7267" data-name="Container">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[139px]" data-node-id="791:7268" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-node-id="791:7269" data-name="Text">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-node-id="791:7270" data-name="Icon">
                  <div className="absolute bottom-[20%] left-1/2 right-1/2 top-[20%]" data-node-id="791:7271" data-name="Vector">
                    <div className="absolute inset-[0_-0.75px]">
                      <img alt="" className="block max-w-none size-full" src={imgVector} />
                    </div>
                  </div>
                  <div className="absolute bottom-1/2 left-[20%] right-[20%] top-1/2" data-node-id="791:7272" data-name="Vector">
                    <div className="absolute inset-[-0.75px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgVector1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7273" data-name="Text">
                <p className="[word-break:break-word] font-['Cousine:Regular'] leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap" data-node-id="791:7274">
                  01
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7275" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7276" data-name="Heading 3">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="791:7277">
                  Консультация
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[140px]" data-node-id="791:7278" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[10px] w-[146px]" data-node-id="791:7279">
                  Уточним потребности, подберём тип конструкции, рассчитаем предварительную стоимость
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] h-[20px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="791:7280" data-name="Text">
              <div className="relative shrink-0 size-[12px]" data-node-id="791:7281" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[16px] relative shrink-0 text-[#2d7a3a] text-[12px] whitespace-nowrap" data-node-id="791:7283" style={{ fontVariationSettings: '"opsz" 14' }}>
                В день обращения
              </p>
            </div>
          </div>
          <div className="bg-[var(--gray\/50,#f9fafb)] content-stretch flex flex-col gap-[12px] h-[208px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[177px]" data-node-id="791:7284" data-name="Container">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[139px]" data-node-id="791:7285" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-node-id="791:7286" data-name="Text">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-node-id="791:7287" data-name="Icon">
                  <div className="absolute inset-[20%_55%_55%_20%]" data-node-id="791:7288" data-name="Vector">
                    <div className="absolute inset-[-15%_-10.61%_-10.61%_-15%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector2} />
                    </div>
                  </div>
                  <div className="absolute inset-[55%_20%_20%_55%]" data-node-id="791:7289" data-name="Vector">
                    <div className="absolute inset-[-10.61%_-15%_-15%_-10.61%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7290" data-name="Text">
                <p className="[word-break:break-word] font-['Cousine:Regular'] leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap" data-node-id="791:7291">
                  02
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7292" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7293" data-name="Heading 3">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="791:7294">
                  Замер
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[140px]" data-node-id="791:7295" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[10px] w-[146px]" data-node-id="791:7296">
                  Специалист выезжает на объект, снимает точные размеры и фиксирует особенности проёма
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] h-[20px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="791:7297" data-name="Text">
              <div className="relative shrink-0 size-[12px]" data-node-id="791:7298" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#2d7a3a] text-[12px] whitespace-nowrap" data-node-id="791:7300">
                1–2 рабочих дня
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[197px] items-start left-[16px] top-[488px] w-[370px]" data-node-id="791:7301">
        <div className="content-stretch flex h-[197px] items-center justify-between relative shrink-0 w-full" data-node-id="791:7302">
          <div className="bg-[var(--gray\/50,#f9fafb)] content-stretch flex flex-col gap-[12px] h-[197px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[177px]" data-node-id="791:7303" data-name="Container">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[139px]" data-node-id="791:7304" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-node-id="791:7305" data-name="Text">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-node-id="791:7306" data-name="Icon">
                  <div className="absolute inset-[15%]" data-node-id="791:7307" data-name="Vector">
                    <div className="absolute inset-[-5.36%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector4} />
                    </div>
                  </div>
                  <div className="absolute inset-[35%]" data-node-id="791:7308" data-name="Vector">
                    <div className="absolute inset-[-12.5%_0]">
                      <img alt="" className="block max-w-none size-full" src={imgVector5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7309" data-name="Text">
                <p className="[word-break:break-word] font-['Cousine:Regular'] leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap" data-node-id="791:7310">
                  03
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7311" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7312" data-name="Heading 3">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="791:7313">
                  Проектирование
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[140px]" data-node-id="791:7314" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[10px] w-[146px]" data-node-id="791:7315">
                  Разрабатываем чертежи, подбираем профиль и фурнитуру, согласуем финальное решение
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] h-[20px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="791:7316" data-name="Text">
              <div className="relative shrink-0 size-[12px]" data-node-id="791:7317" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[16px] relative shrink-0 text-[#2d7a3a] text-[12px] whitespace-nowrap" data-node-id="791:7319" style={{ fontVariationSettings: '"opsz" 14' }}>
                3–5 рабочих дней
              </p>
            </div>
          </div>
          <div className="bg-[var(--gray\/50,#f9fafb)] content-stretch flex flex-col gap-[12px] h-[197px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[177px]" data-node-id="791:7320" data-name="Container">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[139px]" data-node-id="791:7321" data-name="Container">
              <div className="relative shrink-0 size-[20px]" data-node-id="791:7322" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7325" data-name="Text">
                <p className="[word-break:break-word] font-['Cousine:Regular'] leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap" data-node-id="791:7326">
                  04
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7327" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7328" data-name="Heading 3">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="791:7329">
                  Производство
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[140px]" data-node-id="791:7330" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[10px] w-[146px]" data-node-id="791:7331">
                  Изготавливаем конструкции на собственном заводе с контролем качества на каждом этапе
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] h-[20px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="791:7332" data-name="Text">
              <div className="relative shrink-0 size-[12px]" data-node-id="791:7333" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[16px] relative shrink-0 text-[#2d7a3a] text-[12px] whitespace-nowrap" data-node-id="791:7335" style={{ fontVariationSettings: '"opsz" 14' }}>
                7–14 рабочих дней
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[196px] items-start left-[16px] top-[708px] w-[370px]" data-node-id="791:7336">
        <div className="content-stretch flex h-[201px] items-center justify-between relative shrink-0 w-full" data-node-id="791:7337">
          <div className="bg-[var(--gray\/50,#f9fafb)] content-stretch flex flex-col gap-[12px] h-[201px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[177px]" data-node-id="791:7338" data-name="Container">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[139px]" data-node-id="791:7339" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-node-id="791:7340" data-name="Text">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-node-id="791:7341" data-name="Icon">
                  <div className="absolute inset-[35%_15%]" data-node-id="791:7342" data-name="Vector">
                    <div className="absolute inset-[-18.71%_-3.79%_-8.84%_-3.79%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector6} />
                    </div>
                  </div>
                  <div className="absolute inset-[80%_15%_20%_15%]" data-node-id="791:7343" data-name="Vector">
                    <div className="absolute inset-[-0.75px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgVector7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7344" data-name="Text">
                <p className="[word-break:break-word] font-['Cousine:Regular'] leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap" data-node-id="791:7345">
                  05
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7346" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7347" data-name="Heading 3">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="791:7348">
                  Доставка
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[140px]" data-node-id="791:7349" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[10px] w-[146px]" data-node-id="791:7350">
                  Бережно упаковываем и доставляем готовые изделия на объект в согласованное время
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] h-[20px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="791:7351" data-name="Text">
              <div className="relative shrink-0 size-[12px]" data-node-id="791:7352" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[16px] relative shrink-0 text-[#2d7a3a] text-[12px] whitespace-nowrap" data-node-id="791:7354" style={{ fontVariationSettings: '"opsz" 14' }}>
                1–2 рабочих дня
              </p>
            </div>
          </div>
          <div className="bg-[var(--gray\/50,#f9fafb)] content-stretch flex flex-col gap-[5px] h-[201px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[177px]" data-node-id="791:7355" data-name="Container">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[139px]" data-node-id="791:7356" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-node-id="791:7357" data-name="Text">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-node-id="791:7358" data-name="Icon">
                  <div className="absolute bottom-1/4 left-1/4 right-1/4 top-[65%]" data-node-id="791:7359" data-name="Vector">
                    <div className="absolute inset-[-53.03%_-5.3%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector8} />
                    </div>
                  </div>
                  <div className="absolute bottom-[35%] left-[20%] right-[20%] top-1/4" data-node-id="791:7360" data-name="Vector">
                    <div className="absolute inset-[-9.38%_-6.25%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7361" data-name="Text">
                <p className="[word-break:break-word] font-['Cousine:Regular'] leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap" data-node-id="791:7362">
                  06
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7363" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7364" data-name="Heading 3">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="791:7365">
                  Монтаж
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[140px]" data-node-id="791:7366" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[10px] w-[146px]" data-node-id="791:7367">
                  Профессиональная установка сертифицированной бригадой с соблюдением всех норм
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] h-[20px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="791:7368" data-name="Text">
              <div className="relative shrink-0 size-[12px]" data-node-id="791:7369" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[16px] relative shrink-0 text-[#2d7a3a] text-[12px] whitespace-nowrap" data-node-id="791:7371" style={{ fontVariationSettings: '"opsz" 14' }}>
                2–5 рабочих дней
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--gray\/50,#f9fafb)] content-stretch flex flex-col gap-[12px] h-[199px] items-start left-[16px] pb-[64px] pt-[24px] px-[24px] rounded-[12px] top-[930px] w-[177px]" data-node-id="791:7372" data-name="Container">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[139px]" data-node-id="791:7373" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-node-id="791:7374" data-name="Text">
            <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-node-id="791:7375" data-name="Icon">
              <div className="absolute inset-[15%]" data-node-id="791:7376" data-name="Vector">
                <div className="absolute inset-[-5.36%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector10} />
                </div>
              </div>
              <div className="absolute bottom-[40%] left-1/2 right-[40%] top-[35%]" data-node-id="791:7377" data-name="Vector">
                <div className="absolute inset-[0_-26.52%_-10.61%_-37.5%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector11} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="791:7378" data-name="Text">
            <p className="[word-break:break-word] font-['Cousine:Regular'] leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] whitespace-nowrap" data-node-id="791:7379">
              07
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7380" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="791:7381" data-name="Heading 3">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="791:7382">
              Гарантия
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[140px]" data-node-id="791:7383" data-name="Paragraph">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[10px] w-[146px]" data-node-id="791:7384">
              Обеспечиваем гарантийное обслуживание и оперативный выезд при любых вопросах
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] h-[20px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="791:7385" data-name="Text">
          <div className="relative shrink-0 size-[12px]" data-node-id="791:7386" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[16px] relative shrink-0 text-[#2d7a3a] text-[10px] whitespace-nowrap" data-node-id="791:7388" style={{ fontVariationSettings: '"opsz" 14' }}>
            Бессрочная поддержка
          </p>
        </div>
      </div>
      <Menu className="-translate-x-1/2 absolute content-stretch cursor-pointer flex flex-col items-end left-[calc(50%+0.5px)] p-[8px] top-[56px] w-[371px]" />
    </div>
  );
}
