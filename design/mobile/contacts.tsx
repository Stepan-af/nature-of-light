const imgContainer = "assets/logo-mark.jpg";
const imgCellularConnection = "assets/ios-statusbar-cellular-light.svg";
const imgWifi = "assets/ios-statusbar-wifi-light.svg";
const imgBattery = "assets/ios-statusbar-battery-light.svg";

// NOTE (extraction): footer instance 487:1987 ("ФУТЕР МОБИЛКИ", top 710px) omitted — identical to design/mobile/footer.tsx.
// Footer label sub-components (Component, Component1-3) kept verbatim.

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

type Component4Props = {
  className?: string;
  property1?: "Default";
};

function Component4({ className, property1 = "Default" }: Component4Props) {
  return (
    <button className={className || "border border-[#757575] border-solid content-stretch flex h-[38px] items-center justify-between px-[28px] py-[18px] relative rounded-[4px] w-[186px]"} data-node-id="426:10747">
      <div className="h-[27px] relative shrink-0 w-[14px]" data-node-id="426:10749" data-name="Text" />
      <p className="[word-break:break-word] absolute font-['DM_Sans:Bold'] font-bold leading-[21px] left-[15px] text-[#757575] text-[9px] text-left top-[8px] tracking-[0.84px] whitespace-nowrap" data-node-id="426:10748" style={{ fontVariationSettings: '"opsz" 14' }}>
        ОТПРАВИТЬ ФОРМУ
      </p>
      <p className="[word-break:break-word] absolute font-['DM_Sans:Light'] font-light leading-[27px] left-[162px] text-[#757575] text-[9px] text-left top-[5px] tracking-[0.84px] whitespace-nowrap" data-node-id="426:10750" style={{ fontVariationSettings: '"opsz" 14' }}>
        →
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
    <button className={className || "content-stretch cursor-pointer flex flex-col h-[47px] items-start relative"} data-node-id="426:10731">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="426:10732" data-name="Label">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[7px] text-[rgba(255,255,255,0.35)] text-left tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="426:10733">{`03 Telegram `}</p>
      </div>
      <div className="border-[rgba(255,255,255,0.18)] border-b border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-[184px]" data-node-id="426:10734" data-name="Text Input">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-left w-full" data-node-id="426:10735" style={{ fontVariationSettings: '"opsz" 14' }}>
          Почта
        </p>
      </div>
    </button>
  );
}

type Component6Props = {
  className?: string;
  property1?: "Variant1";
};

function Component6({ className, property1 = "Variant1" }: Component6Props) {
  return (
    <div className={className || "content-stretch flex flex-col h-[47px] items-start relative w-[184px]"} data-node-id="438:954">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="438:955" data-name="Label">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[7px] text-[rgba(255,255,255,0.35)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="438:956">
          02 Телефон
        </p>
      </div>
      <button className="border-[#666] border-b border-solid content-stretch cursor-pointer flex flex-col h-[47px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="438:957" data-name="Text Input">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#858585] text-[12px] text-left w-full" data-node-id="438:958" style={{ fontVariationSettings: '"opsz" 14' }}>
          Номер телефона
        </p>
      </button>
    </div>
  );
}

type Component7Props = {
  className?: string;
  property1?: "Default";
};

function Component7({ className, property1 = "Default" }: Component7Props) {
  return (
    <button className={className || "content-stretch cursor-pointer flex flex-col h-[47px] items-start relative"} data-node-id="426:10699">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="426:10700" data-name="Label">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[7px] text-[rgba(255,255,255,0.35)] text-left tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="426:10701">
          01 Имя
        </p>
      </div>
      <div className="border-[rgba(255,255,255,0.18)] border-b border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-[184px]" data-node-id="426:10702" data-name="Text Input">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-left w-full" data-node-id="426:10703" style={{ fontVariationSettings: '"opsz" 14' }}>
          Ваше имя
        </p>
      </div>
    </button>
  );
}

export default function IPhone176() {
  return (
    <div className="bg-[#0e0e0c] relative size-full" data-node-id="421:10337" data-name="iPhone 17 - 6">
      <div className="[word-break:break-word] absolute content-stretch flex gap-[7px] items-center left-[22px] text-white top-[146px] whitespace-nowrap" data-node-id="421:10575">
        <p className="font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center" data-node-id="421:10576">
          Услуги
        </p>
        <p className="font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[16px] not-italic relative shrink-0 text-[15px]" data-node-id="421:10577">
          ›
        </p>
        <p className="font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[12px]" data-node-id="421:10578" style={{ fontVariationSettings: '"opsz" 14' }}>
          Контакты
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Playfair_Display:ExtraBold'] font-extrabold h-[143px] leading-[27px] left-[19px] text-[24px] text-white top-[170px] w-[158px] whitespace-pre-wrap" data-node-id="421:10582">{`Оставьте заявку и мы  подберём решение под ваш бюджет`}</p>
      <div className="absolute content-stretch flex flex-col items-start left-[19px] pt-[25px] top-[301px]" data-node-id="421:10580" data-name="Paragraph:margin">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[14px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] w-[170px]" data-node-id="421:10581" style={{ fontVariationSettings: '"opsz" 14' }}>
          После отправки формы наш менеджер перезвонит в течение 30 минут, уточнит детали и запишет на бесплатный замер.
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+1px)] top-[121px] w-[208px]" data-node-id="421:10612" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[6px] text-white tracking-[1.26px] uppercase w-[201px]" data-node-id="421:10613">
          Заполните форму, мы свяжемся с вами в ближайшее время и уточним все детали.
        </p>
      </div>
      <Component7 className="absolute content-stretch cursor-pointer flex flex-col h-[47px] items-start left-[calc(50%+1px)] top-[180px]" />
      <Component6 className="absolute content-stretch flex flex-col h-[47px] items-start left-[calc(50%+1px)] top-[249px] w-[184px]" />
      <Component5 className="absolute content-stretch cursor-pointer flex flex-col h-[47px] items-start left-[calc(50%+1px)] top-[317px]" />
      <Component4 className="absolute border border-[#757575] border-solid content-stretch cursor-pointer flex h-[38px] items-center justify-between left-[calc(50%+1px)] px-[28px] py-[18px] rounded-[4px] top-[395px] w-[186px]" />
      <div className="absolute content-stretch flex flex-col items-start left-0 overflow-x-auto overflow-y-clip p-[10px] top-[526px] w-[490px]" data-node-id="438:1062">
        <div className="content-stretch flex flex-col items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-node-id="438:1061">
          <div className="bg-[#535353] h-px relative shrink-0 w-full" data-node-id="438:1060" />
          <div className="content-stretch flex flex-col h-[163px] items-center pt-[60px] relative shrink-0 w-full" data-node-id="438:1036" data-name="Container:margin">
            <div className="absolute border-[rgba(255,255,255,0.08)] border-r border-solid content-stretch flex flex-col h-[124px] items-start left-[6px] pr-[32px] py-[28px] top-[20px] w-[137px]" data-node-id="438:1038" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="438:1039" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[7px] text-[rgba(255,255,255,0.3)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="438:1040">
                  ПОЗВОНИТЬ НАМ
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[33px] items-start pt-[10px] relative shrink-0 w-[86px]" data-node-id="438:1041" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[22.5px] relative shrink-0 text-[8px] text-white whitespace-nowrap" data-node-id="438:1042" style={{ fontVariationSettings: '"opsz" 14' }}>
                  +7 (495) 123-45-67
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[131px]" data-node-id="438:1043" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[8px] text-[rgba(255,255,255,0.35)] w-[135px]" data-node-id="438:1044" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Пн–Пт 9:00–19:00, Сб 10:00–16:00
                </p>
              </div>
            </div>
            <div className="absolute border-[rgba(255,255,255,0.08)] border-r border-solid content-stretch flex flex-col h-[124px] items-start left-[121px] px-[32px] py-[28px] top-[21px] w-[193px]" data-node-id="438:1045" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="438:1046" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[7px] text-[rgba(255,255,255,0.3)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="438:1047">
                  НАШ АДРЕС — ЗАХОДИТЕ
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[33px] items-start pt-[10px] relative shrink-0 w-[149px]" data-node-id="438:1048" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[22.5px] relative shrink-0 text-[8px] text-white whitespace-nowrap" data-node-id="438:1049" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Москва, ул. Производственная, 15
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[157px]" data-node-id="438:1050" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[11px] relative shrink-0 text-[8px] text-[rgba(255,255,255,0.35)] w-[96px]" data-node-id="438:1051" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Производство и офис · м. Текстильщики
                </p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[124px] items-start left-[302px] pl-[32px] py-[28px] top-[22px] w-[188px]" data-node-id="438:1052" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="438:1053" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[7px] text-[rgba(255,255,255,0.3)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="438:1054">
                  НАПИСАТЬ НА EMAIL
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[33px] items-start pt-[10px] relative shrink-0 w-full" data-node-id="438:1055" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[22.5px] relative shrink-0 text-[8px] text-white whitespace-nowrap" data-node-id="438:1056" style={{ fontVariationSettings: '"opsz" 14' }}>
                  info@prirodasveta.ru
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="438:1057" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[8px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" data-node-id="438:1058" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Ответим в течение рабочего дня
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[33px] left-1/2 top-[15px] w-[368px]" data-node-id="480:1360" data-name="Component 8">
        <div className="absolute contents inset-[11.69%_0_20.07%_0]" data-node-id="I480:1360;480:1226">
          <div className="absolute content-stretch flex inset-[11.69%_70.65%_20.07%_0] items-center justify-center pt-[2px]" data-node-id="I480:1360;480:1227" data-name="Time">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold'] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" data-node-id="I480:1360;480:1228" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
          <div className="absolute content-stretch flex gap-[7px] inset-[11.69%_0_20.07%_70.65%] items-center justify-center pt-px" data-node-id="I480:1360;480:1229" data-name="Levels">
            <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-node-id="I480:1360;480:1230" data-name="Cellular Connection">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
            </div>
            <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-node-id="I480:1360;480:1231" data-name="Wifi">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
            </div>
            <div className="h-[13px] relative shrink-0 w-[27.328px]" data-node-id="I480:1360;480:1232" data-name="Battery">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
            </div>
          </div>
        </div>
        <div className="absolute bg-black inset-[0_35.53%_0_34.78%] rounded-[45.005px]" data-node-id="I480:1360;480:1236" />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-[calc(50%+0.11px)] top-[62px] w-[348.224px]" data-node-id="480:1372">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[154px]" data-node-id="480:1373" data-name="Container">
          <div className="border border-[rgba(255,255,255,0)] border-solid relative rounded-[7px] shrink-0 size-[40px]" data-node-id="480:1374" data-name="Container">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
              <img alt="" className="absolute left-[-14.5%] max-w-none size-[129%] top-[-14.5%]" src={imgContainer} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="480:1375" data-name="Text">
            <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="480:1376">
              Природа Света
            </p>
          </div>
        </div>
      </div>
      {/* Footer instance 487:1987 "ФУТЕР МОБИЛКИ" (top 710px) — see design/mobile/footer.tsx */}
      <button className="-translate-x-1/2 absolute content-stretch cursor-pointer drop-shadow-[0px_0px_18.698px_white,0px_0px_10.685px_white,0px_0px_6.233px_white,0px_0px_3.116px_white,0px_0px_0.89px_white,0px_0px_0.445px_white] flex flex-col items-end left-[calc(50%+0.5px)] p-[8px] top-[59px] w-[371px]" data-node-id="569:1309" data-name="Menu">
        <div className="flex h-[30.346px] items-center justify-center relative shrink-0 w-[46.225px]" data-node-id="I569:1309;549:1163">
          <div className="flex-none rotate-[0.43deg]">
            <div className="bg-[rgba(82,82,77,0.33)] content-stretch cursor-pointer flex flex-col gap-[4px] items-end p-[8px] relative rounded-[8px] w-[46px]" role="button" tabIndex="0" data-name="Menu/Variant1">
              <div className="bg-[#d9d9d9] h-[2px] relative rounded-[100px] shrink-0 w-full" data-node-id="I569:1309;549:1164" />
              <div className="bg-[#d9d9d9] h-[2px] relative rounded-[100px] shrink-0 w-full" data-node-id="I569:1309;549:1165" />
              <div className="bg-[#d9d9d9] h-[2px] relative rounded-[100px] shrink-0 w-full" data-node-id="I569:1309;549:1166" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
