const imgCellularConnection = "assets/ios-statusbar-cellular-dark.svg";
const imgWifi = "assets/ios-statusbar-wifi-dark.svg";
const imgBattery = "assets/ios-statusbar-battery-dark.svg";
const imgDefault = "assets/project-gallery-thumb-3.jpg";
const imgImage3 = "assets/project-gallery-main-glass-dome.jpg";
const imgContainer = "assets/logo-mark.jpg";

// NOTE (extraction): footer instance 487:1804 ("ФУТЕР МОБИЛКИ") is omitted below — identical to design/mobile/footer.tsx.
// Footer label sub-components (Component, Component1-3) are kept verbatim for completeness.

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

function Default({ className }: { className?: string }) {
  return (
    <div className={className || "h-[63px] overflow-clip relative rounded-[4px] w-[87px]"} data-node-id="415:8392" data-name="мобилка/Default">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-[102.37%] left-[0.62%] max-w-none top-[-1.09%] w-[115.56%]" src={imgDefault} />
      </div>
    </div>
  );
}

export default function IPhone173() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-node-id="399:8092" data-name="iPhone 17 - 3">
      <div className="absolute h-[275px] left-[20px] rounded-[19px] top-[141px] w-[195px]" data-node-id="415:8312" data-name="Image («Классик» ×3 для ЖК)">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19px]">
          <img alt="" className="absolute h-[174.31%] left-0 max-w-none top-[-46.3%] w-[184.58%]" src={imgImage3} />
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[var(--size\/space\/gap\/positive\/small-l,8px)] items-center left-[16px] top-[108px] w-[188px]" data-node-id="415:8317" data-name="Container">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="415:8318" data-name="Button">
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[color:var(--colors\/text\/base\/secondary,#757575)] whitespace-nowrap" data-node-id="415:8319" style={{ fontVariationSettings: '"opsz" 14' }}>
            Каталог
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="415:8320" data-name="Text">
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--colors\/text\/base\/secondary,#757575)] whitespace-nowrap" data-node-id="415:8321" style={{ fontVariationSettings: '"opsz" 14' }}>
            ›
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="415:8322" data-name="Text">
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[#1a1a1a] text-[10px] whitespace-nowrap" data-node-id="415:8323" style={{ fontVariationSettings: '"opsz" 14' }}>
            «Классик» ×3 для ЖК
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+44px)] top-[111px] w-[146px]" data-node-id="415:8331" data-name="Container">
        <div className="content-stretch flex flex-col items-start pt-[var(--size\/space\/padding\/component\/small-xl,12px)] relative shrink-0 w-full" data-node-id="415:8332" data-name="Heading 1:margin">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[131px]" data-node-id="415:8333" data-name="Heading 1">
            <p className="[word-break:break-word] font-['Playfair_Display:ExtraBold'] font-extrabold leading-[32.2px] relative shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.5px] whitespace-nowrap" data-node-id="415:8334">
              Классик» ×3 для ЖК
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[calc(50%+25px)] top-[154px] w-[187px]" data-node-id="415:8330" data-name="Container">
        <div className="bg-[var(--colors\/surface\/base\/default,white)] border border-[rgba(0,0,0,0.09)] border-solid content-stretch flex flex-col items-start p-[var(--size\/space\/padding\/component\/base-l,20px)] relative rounded-[14px] shrink-0 w-[163px]" data-node-id="415:8335" data-name="Container">
          <div className="[word-break:break-word] content-stretch flex flex-col h-[230px] items-start pt-[14px] relative shrink-0 w-[171px]" data-node-id="415:8338" data-name="Container">
            <div className="absolute h-[42px] left-[-6px] top-[190px] w-[148px]" data-node-id="415:8351" data-name="Container">
              <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[8px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px] whitespace-nowrap" data-node-id="415:8352" style={{ fontVariationSettings: '"opsz" 14' }}>
                Срок монтажа
              </p>
              <p className="absolute font-['Playfair_Display:Bold'] font-bold h-[21px] leading-[22.5px] left-[79px] text-[#1a1a1a] text-[10px] top-[10px] w-[46px]" data-node-id="415:8353">
                5 дней
              </p>
            </div>
            <div className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid h-[44px] left-[-6px] top-[144px] w-[148px] whitespace-nowrap" data-node-id="415:8348" data-name="Container">
              <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[8px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="415:8349" style={{ fontVariationSettings: '"opsz" 14' }}>
                Год
              </p>
              <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[80px] text-[#1a1a1a] text-[10px] top-[10px]" data-node-id="415:8350">
                2024
              </p>
            </div>
            <div className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid h-[43px] left-[-6px] top-[101px] w-[148px] whitespace-nowrap" data-node-id="415:8345" data-name="Container">
              <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[8px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="415:8346" style={{ fontVariationSettings: '"opsz" 14' }}>
                Город
              </p>
              <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[72px] text-[#1a1a1a] text-[10px] top-[10px]" data-node-id="415:8347">
                Москва
              </p>
            </div>
            <div className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid h-[44px] left-[-6px] top-[57px] w-[148px] whitespace-nowrap" data-node-id="415:8342" data-name="Container">
              <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[8px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="415:8343" style={{ fontVariationSettings: '"opsz" 14' }}>
                Площадь
              </p>
              <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[70px] text-[#1a1a1a] text-[10px] top-[10px]" data-node-id="415:8344">
                3×4.5 м
              </p>
            </div>
            <div className="absolute border-[rgba(0,0,0,0.09)] border-b border-solid h-[43px] left-[-4px] top-[14px] w-[144px] whitespace-nowrap" data-node-id="415:8339" data-name="Container">
              <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[8px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="415:8340" style={{ fontVariationSettings: '"opsz" 14' }}>
                Стоимость
              </p>
              <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[73px] text-[#1a1a1a] text-[10px] top-[10px]" data-node-id="415:8341">
                74 700 ₽
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[20px] w-[121px]" data-node-id="415:8336" data-name="Container">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[color:var(--colors\/text\/base\/secondary,#757575)] tracking-[1.08px] uppercase whitespace-nowrap" data-node-id="415:8337" style={{ fontVariationSettings: '"opsz" 14' }}>
              Параметры проекта
            </p>
          </div>
        </div>
        <div className="bg-[#2e7d32] content-stretch flex flex-col h-[91px] items-start px-[var(--size\/space\/padding\/component\/base-l,20px)] py-[22px] relative rounded-[14px] shrink-0 w-[163px]" data-node-id="415:8354" data-name="Container">
          <a className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[24px] items-center justify-center left-[11px] py-[var(--size\/space\/padding\/component\/small-xl,12px)] rounded-[var(--size\/raduis\/small-l,8px)] top-[59px] w-[142px]" data-node-id="415:8360" data-name="заявка">
            <p className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[21px] relative shrink-0 text-[#2e7d32] text-[9px] text-center whitespace-nowrap" data-node-id="I415:8360;271:461" style={{ fontVariationSettings: '"opsz" 14' }}>
              Оставить заявку
            </p>
          </a>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[22px] items-start left-[calc(50%+12.5px)] top-[3px] w-[158px]" data-node-id="415:8386">
            <div className="absolute content-stretch flex flex-col h-[39px] items-start left-[-13px] pt-[var(--size\/space\/padding\/component\/small-l,8px)] top-[19px] w-[149px]" data-node-id="415:8357" data-name="Container">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[12px] relative shrink-0 text-[8px] text-[rgba(255,255,255,0.75)] text-center w-[163px]" data-node-id="415:8358" style={{ fontVariationSettings: '"opsz" 14' }}>
                Рассчитаем стоимость и сроки — бесплатно
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[22px] items-start left-[-8px] top-[5px] w-[158px]" data-node-id="415:8355" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Playfair_Display:Bold'] font-bold leading-[21.6px] left-[10px] text-[8px] text-[color:var(--colors\/surface\/base\/default,white)] top-0 whitespace-nowrap" data-node-id="415:8356">
                Хотите похожую конструкцию?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-[calc(50%+28px)] top-[531px]" data-node-id="415:8387">
        <div className="content-stretch flex flex-col h-[69.688px] items-start justify-center mr-[-8px] relative shrink-0 w-[102px]" data-node-id="415:8363" data-name="Button">
          <div className="bg-[var(--colors\/surface\/base\/default,white)] border border-[rgba(0,0,0,0.09)] border-solid content-stretch flex flex-col items-start pl-[var(--size\/space\/padding\/component\/small-xl,12px)] py-[10px] relative rounded-[10px] shrink-0 w-[91px]" data-node-id="415:8364" data-name="Container">
            <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-node-id="415:8367" data-name="Container:margin">
              <div className="content-stretch flex flex-col h-[15.594px] items-start overflow-clip relative shrink-0 w-full" data-node-id="415:8368" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[15.6px] relative shrink-0 text-[#1a1a1a] text-[7px] whitespace-nowrap" data-node-id="415:8369" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[1.45px] w-[77px]" data-node-id="415:8365" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[color:var(--colors\/text\/base\/secondary,#757575)] tracking-[0.72px] whitespace-nowrap" data-node-id="415:8366">
                ПРЕД.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[54px] items-start justify-center relative shrink-0 w-[79px]" data-node-id="415:8370" data-name="Button">
          <div className="absolute bg-[var(--colors\/surface\/base\/default,white)] border border-[rgba(0,0,0,0.09)] border-solid content-stretch flex flex-col h-[40px] items-start left-0 pr-[var(--size\/space\/padding\/component\/small-xl,12px)] py-[10px] rounded-[10px] top-[7.16px] w-[70px]" data-node-id="415:8371" data-name="Container">
            <div className="absolute content-stretch flex flex-col items-end left-px top-[2px] w-[35px]" data-node-id="415:8372" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[color:var(--colors\/text\/base\/secondary,#757575)] text-right tracking-[0.72px] whitespace-nowrap" data-node-id="415:8373">
                СЛЕД.
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[29px] items-start left-[6px] pt-[3px] top-[9px] w-[61px]" data-node-id="415:8374" data-name="Container:margin">
              <div className="content-stretch flex flex-col h-[31.188px] items-end overflow-clip relative shrink-0 w-full" data-node-id="415:8375" data-name="Container">
                <p className="[word-break:break-word] absolute font-['DM_Sans:SemiBold'] font-semibold h-[17px] leading-[8px] left-px text-[#1a1a1a] text-[7px] top-[4.84px] w-[57px]" data-node-id="415:8376" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Стеклянная терраса 22 м²
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Default className="absolute h-[69px] left-[121px] rounded-[4px] top-[422px] w-[94px]" />
      <Default className="absolute h-[69px] left-[20px] rounded-[4px] top-[422px] w-[94px]" />
      <Default className="absolute h-[69px] left-[20px] rounded-[4px] top-[498px] w-[94px]" />
      <Default className="absolute h-[69px] left-[121px] rounded-[4px] top-[498px] w-[94px]" />
      <div className="-translate-x-1/2 absolute h-[33px] left-1/2 top-[8px] w-[370px]" data-node-id="480:1274" data-name="Component 7">
        <Component8 className="absolute h-[33px] left-[2px] top-[6.14px] w-[368px]" />
      </div>
      <div className="absolute content-stretch flex items-start justify-between left-[16px] top-[56px] w-[348.224px]" data-node-id="480:1287">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[154px]" data-node-id="480:1288" data-name="Container">
          <div className="border border-[rgba(255,255,255,0)] border-solid relative rounded-[7px] shrink-0 size-[40px]" data-node-id="480:1289" data-name="Container">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
              <img alt="" className="absolute left-[-14.5%] max-w-none size-[129%] top-[-14.5%]" src={imgContainer} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="480:1290" data-name="Text">
            <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[21px] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" data-node-id="480:1291">
              Природа Света
            </p>
          </div>
        </div>
      </div>
      {/* Footer instance 487:1804 "ФУТЕР МОБИЛКИ" (absolute, left 0, top 664px, 402x438) — see design/mobile/footer.tsx */}
      <Menu className="-translate-x-1/2 absolute content-stretch cursor-pointer flex flex-col items-end left-[calc(50%+0.5px)] p-[8px] top-[56px] w-[371px]" />
    </div>
  );
}
