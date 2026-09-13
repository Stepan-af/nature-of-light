const imgCellularConnection = "assets/ios-statusbar-cellular-dark.svg";
const imgWifi = "assets/ios-statusbar-wifi-dark.svg";
const imgBattery = "assets/ios-statusbar-battery-dark.svg";
const imgImage42 = "assets/mobile-portfolio-greenhouse.png";
const imgImage43 = "assets/mobile-portfolio-staircase.png";
const imgImage44 = "assets/mobile-portfolio-skylight.png";
const imgImage45 = "assets/mobile-portfolio-stained-glass.png";
const imgImage46 = "assets/mobile-portfolio-brick-house.png";
const imgImage47 = "assets/mobile-portfolio-spiral-stair.png";
const imgImage48 = "assets/mobile-portfolio-featured-winter-garden.png";
const imgImage49 = "assets/mobile-portfolio-glass-roof-plants.png";
const imgContainer = "assets/logo-mark.jpg";

// NOTE (extraction): footer instance 487:1865 ("ФУТЕР МОБИЛКИ", top 1445px) omitted — identical to design/mobile/footer.tsx.
// Footer label sub-components (Component5-8) kept verbatim.

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
    <button className={className || "bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px] w-[104px]"} data-node-id="859:987">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[21px] left-[calc(50%-46px)] text-[#757575] text-[8px] text-left top-[-0.5px] whitespace-nowrap" data-node-id="859:988" style={{ fontVariationSettings: '"opsz" 14' }}>
        Офисные перегородки
      </p>
    </button>
  );
}

type Component1Props = {
  className?: string;
  property1?: "Default";
};

function Component1({ className, property1 = "Default" }: Component1Props) {
  return (
    <button className={className || "bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px] w-[87px]"} data-node-id="859:980">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[21px] left-[calc(50%-37.5px)] text-[#757575] text-[8px] text-left top-[-0.5px] whitespace-nowrap" data-node-id="859:981" style={{ fontVariationSettings: '"opsz" 14' }}>
        Изделия из стекла
      </p>
    </button>
  );
}

type Component2Props = {
  className?: string;
  property1?: "Default";
};

function Component2({ className, property1 = "Default" }: Component2Props) {
  return (
    <button className={className || "bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px] w-[66px]"} data-node-id="859:973">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[21px] left-[calc(50%-27px)] text-[#757575] text-[8px] text-left top-[-0.5px] whitespace-nowrap" data-node-id="859:974" style={{ fontVariationSettings: '"opsz" 14' }}>
        Зимние сады
      </p>
    </button>
  );
}

type Component3Props = {
  className?: string;
  property1?: "Default";
};

function Component3({ className, property1 = "Default" }: Component3Props) {
  return (
    <button className={className || "bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px] w-[58px]"} data-node-id="859:966">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[21px] left-[calc(50%-20px)] text-[#757575] text-[8px] text-left top-[-0.5px] whitespace-nowrap" data-node-id="859:967" style={{ fontVariationSettings: '"opsz" 14' }}>
        Козырьки
      </p>
    </button>
  );
}

type Component4Props = {
  className?: string;
  property1?: "Default";
};

function Component4({ className, property1 = "Default" }: Component4Props) {
  return (
    <button className={className || "bg-[rgba(13,13,12,0.2)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px] w-[58px]"} data-node-id="859:959">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[21px] left-[7px] text-[#757575] text-[8px] text-left top-[-1px] whitespace-nowrap" data-node-id="859:960" style={{ fontVariationSettings: '"opsz" 14' }}>
        Все работы
      </p>
    </button>
  );
}

type Component5Props = {
  className?: string;
  property1?: "Default";
};

function Component5({ className, property1 = "Default" }: Component5Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[65px]"} data-node-id="293:1831">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1814">
        Соцсети
      </p>
    </div>
  );
}

type Component6Props = {
  className?: string;
  property1?: "Default";
};

function Component6({ className, property1 = "Default" }: Component6Props) {
  return (
    <div className={className || "h-[14px] relative w-[59px]"} data-node-id="293:1827">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular'] font-normal inset-0 leading-[13.5px] text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1812">
        Партнёрам
      </p>
    </div>
  );
}

type Component7Props = {
  className?: string;
  property1?: "Default";
};

function Component7({ className, property1 = "Default" }: Component7Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[59px]"} data-node-id="293:1823">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1811">
        Компания
      </p>
    </div>
  );
}

type Component8Props = {
  className?: string;
  property1?: "Default";
};

function Component8({ className, property1 = "Default" }: Component8Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[66px]"} data-node-id="293:1819">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1809">
        Продукция
      </p>
    </div>
  );
}

function Component9({ className }: { className?: string }) {
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

export default function IPhone174() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-node-id="415:8653" data-name="iPhone 17 - 4">
      <div className="[word-break:break-word] absolute content-stretch flex flex-col h-[67px] items-start left-[19px] pt-[10px] top-[110px] w-[302px]" data-node-id="415:8785" data-name="Heading 2">
        <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-[137px] whitespace-nowrap" data-node-id="453:1901">
          <p className="font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[color:var(--colors\/text\/base\/secondary,#757575)] text-center" data-node-id="453:1902" style={{ fontVariationSettings: '"opsz" 14' }}>
            Каталог
          </p>
          <p className="font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[16px] not-italic relative shrink-0 text-[#999] text-[15px]" data-node-id="453:1903">
            ›
          </p>
          <p className="font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px]" data-node-id="453:1904" style={{ fontVariationSettings: '"opsz" 14' }}>
            Портфолио
          </p>
        </div>
        <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[57px] left-0 text-[#1a1a1a] text-[30px] top-[18px] tracking-[-0.5px] w-[199px]" data-node-id="415:8786">
          Наши работы
        </p>
      </div>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[365px] items-start left-[12px] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[248px] w-[183px]" data-node-id="418:8877" data-name="Container">
        <div className="h-[364px] relative shrink-0 w-full" data-node-id="418:8878" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage42} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-[-1px] top-[284px] w-[182px]" data-node-id="418:8881" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8882" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8883">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8884" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8885" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8886">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8887" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8888" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[203px] items-start left-[calc(50%+4px)] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[249px] w-[183px]" data-node-id="418:8901" data-name="Container">
        <div className="h-[202px] relative shrink-0 w-full" data-node-id="418:8902" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage43} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-0 top-[122px] w-[182px]" data-node-id="418:8905" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8906" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8907">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8908" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8909" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8910">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8911" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8912" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[203px] items-start left-[13px] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[623px] w-[183px]" data-node-id="418:8937" data-name="Container">
        <div className="h-[202px] relative shrink-0 w-full" data-node-id="418:8938" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage44} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-0 top-[122px] w-[182px]" data-node-id="418:8941" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8942" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8943">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8944" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8945" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8946">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8947" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8948" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[203px] items-start left-[18px] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[840px] w-[183px]" data-node-id="418:8949" data-name="Container">
        <div className="h-[202px] relative shrink-0 w-full" data-node-id="418:8950" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage45} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-0 top-[122px] w-[182px]" data-node-id="418:8953" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8954" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8955">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8956" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8957" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8958">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8959" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8960" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[203px] items-start left-[calc(50%+3px)] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[740px] w-[183px]" data-node-id="418:8961" data-name="Container">
        <div className="h-[202px] relative shrink-0 w-full" data-node-id="418:8962" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage46} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-0 top-[122px] w-[182px]" data-node-id="418:8965" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8966" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8967">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8968" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8969" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8970">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8971" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8972" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[203px] items-start left-[calc(50%+4px)] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[955px] w-[183px]" data-node-id="418:8973" data-name="Container">
        <div className="h-[202px] relative shrink-0 w-full" data-node-id="418:8974" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage47} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-0 top-[122px] w-[182px]" data-node-id="418:8977" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8978" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8979">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8980" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8981" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8982">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8983" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8984" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[203px] items-start left-[calc(50%+4px)] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[1170px] w-[183px]" data-node-id="418:8997" data-name="Container">
        <div className="h-[202px] relative shrink-0 w-full" data-node-id="418:8998" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage48} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-0 top-[122px] w-[182px]" data-node-id="418:9001" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:9002" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:9003">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:9004" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:9005" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:9006">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:9007" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:9008" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[317px] items-start left-[12px] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[1056px] w-[183px]" data-node-id="418:8985" data-name="Container">
        <div className="h-[316px] relative shrink-0 w-full" data-node-id="418:8986" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage43} />
        </div>
        <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] left-[calc(50%+0.5px)] top-[236px] w-[182px]" data-node-id="418:8989" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8990" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8991">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8992" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8993" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8994">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8995" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8996" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[268px] items-start left-[calc(50%+5px)] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[462px] w-[183px]" data-node-id="418:8925" data-name="Container">
        <div className="h-[267px] relative shrink-0 w-full" data-node-id="418:8926" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage49} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-[-1px] top-[187px] w-[182px]" data-node-id="418:8929" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="418:8930" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="418:8931">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="418:8932" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="418:8933" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="418:8934">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="418:8935" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="418:8936" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <Component9 className="-translate-x-1/2 absolute h-[33px] left-1/2 top-[15px] w-[368px]" />
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-[calc(50%-9.89px)] top-[53px] w-[348.224px]" data-node-id="480:1329">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[154px]" data-node-id="480:1330" data-name="Container">
          <div className="border border-[rgba(255,255,255,0)] border-solid relative rounded-[7px] shrink-0 size-[40px]" data-node-id="480:1331" data-name="Container">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
              <img alt="" className="absolute left-[-14.5%] max-w-none size-[129%] top-[-14.5%]" src={imgContainer} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="480:1332" data-name="Text">
            <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[21px] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" data-node-id="480:1333">
              Природа Света
            </p>
          </div>
        </div>
      </div>
      {/* Footer instance 487:1865 "ФУТЕР МОБИЛКИ" (top 1445px) — see design/mobile/footer.tsx */}
      <Component4 className="absolute bg-[rgba(13,13,12,0.2)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center left-[12px] px-[18px] py-[9px] rounded-[100px] top-[182px] w-[58px]" />
      <Component3 className="absolute bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center left-[73px] px-[18px] py-[9px] rounded-[100px] top-[182px] w-[58px]" />
      <Component2 className="absolute bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center left-[135px] px-[18px] py-[9px] rounded-[100px] top-[182px] w-[66px]" />
      <Component1 className="absolute bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center left-[calc(50%+4px)] px-[18px] py-[9px] rounded-[100px] top-[182px] w-[87px]" />
      <Component className="absolute bg-[rgba(0,0,0,0.06)] content-stretch cursor-pointer flex flex-col h-[20px] items-start justify-center left-[12px] px-[18px] py-[9px] rounded-[100px] top-[207px] w-[104px]" />
      <Menu className="-translate-x-1/2 absolute content-stretch cursor-pointer flex flex-col items-end left-[calc(50%+0.5px)] p-[8px] top-[53px] w-[371px]" />
    </div>
  );
}
