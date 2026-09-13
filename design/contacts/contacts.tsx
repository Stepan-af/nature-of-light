const imgContainer = "assets/logo-mark.jpg";

type Component3Props = {
  className?: string;
  property1?: "Default";
};

function Component3({ className, property1 = "Default" }: Component3Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="284:995">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="284:990" data-name="Label">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.35)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="284:991">{`03 Telegram `}</p>
      </div>
      <div className="border-[rgba(255,255,255,0.18)] border-b border-solid content-stretch flex flex-col h-[57px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-[536px]" data-node-id="284:992" data-name="Text Input">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] w-full" data-node-id="284:993" style={{ fontVariationSettings: '"opsz" 14' }}>
          Почта
        </p>
      </div>
    </div>
  );
}

type Component2Props = {
  className?: string;
  property1?: "Default";
};

function Component2({ className, property1 = "Default" }: Component2Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="284:977">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="284:972" data-name="Label">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.35)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="284:973">
          02 Телефон
        </p>
      </div>
      <div className="border-[rgba(255,255,255,0.18)] border-b border-solid content-stretch flex flex-col h-[57px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-[536px]" data-node-id="284:974" data-name="Text Input">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] w-full" data-node-id="284:975" style={{ fontVariationSettings: '"opsz" 14' }}>
          Номер телефона
        </p>
      </div>
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "Default";
};

function Component({ className, property1 = "Default" }: ComponentProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="284:959">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="284:954" data-name="Label">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.35)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="284:955">
          01 Имя
        </p>
      </div>
      <div className="border-[rgba(255,255,255,0.18)] border-b border-solid content-stretch flex flex-col h-[57px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-[536px]" data-node-id="284:956" data-name="Text Input">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] w-full" data-node-id="284:957" style={{ fontVariationSettings: '"opsz" 14' }}>
          Ваше имя
        </p>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="108:2843" data-name="Body">
      <div className="content-stretch flex flex-col h-[1482px] items-start min-h-[912px] relative shrink-0 w-full" data-node-id="108:2844" data-name="App">
        <div className="bg-[#0e0e0c] content-stretch flex flex-[917_0_0] flex-col items-start min-h-px relative w-full" data-node-id="108:2873" data-name="Main Content">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="108:2874" data-name="Container:margin">
            <div className="gap-x-[80px] gap-y-[80px] grid-cols-[__536px_536px] grid-rows-[_652px] inline-grid max-w-[1200px] min-h-[732px] pt-[80px] px-[24px] relative shrink-0" data-node-id="108:2875" data-name="Container">
              <div className="col-1 content-stretch flex flex-col gap-[51px] h-[408px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-node-id="108:2876" data-name="Container">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[7px] h-[300px] items-start pt-[32px] relative shrink-0 text-white w-[536px]" data-node-id="108:2879" data-name="Heading 1">
                  <div className="content-stretch flex gap-[7px] items-center relative shrink-0 whitespace-nowrap" data-node-id="321:465">
                    <a className="block cursor-pointer font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-center" data-node-id="321:466">
                      <p className="leading-[16px]">Главная</p>
                    </a>
                    <p className="font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[16px] not-italic relative shrink-0 text-[15px]" data-node-id="321:467">
                      ›
                    </p>
                    <p className="font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px]" data-node-id="321:468" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Контакты
                    </p>
                  </div>
                  <p className="font-['Playfair_Display:ExtraBold'] font-extrabold leading-[60px] relative shrink-0 text-[55px] tracking-[-2px] w-[536px] whitespace-pre-wrap" data-node-id="108:2880">{`Оставьте заявку и мы  подберём решение под ваш бюджет`}</p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[28px] relative shrink-0" data-node-id="108:2881" data-name="Paragraph:margin">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[27px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.45)] w-[380px]" data-node-id="108:2882" style={{ fontVariationSettings: '"opsz" 14' }}>
                    После отправки формы наш менеджер перезвонит в течение 30 минут, уточнит детали и запишет на бесплатный замер.
                  </p>
                </div>
              </div>
              <div className="col-2 content-stretch flex flex-col h-[483px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-node-id="108:2887" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="108:2888" data-name="Container">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.35)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="108:2889">
                    Заполните форму, мы свяжемся с вами в ближайшее время и уточним все детали.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[536px]" data-node-id="108:2890" data-name="Container">
                  <Component className="content-stretch flex flex-col items-start relative shrink-0" />
                  <Component2 className="content-stretch flex flex-col items-start relative shrink-0" />
                  <Component3 className="content-stretch flex flex-col items-start relative shrink-0" />
                  <div className="content-stretch flex flex-col h-[102.5px] items-start pt-[8px] relative shrink-0 w-full" data-node-id="108:2906" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="189:238" data-name="Label">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.35)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="189:239">
                        Необязательно
                      </p>
                    </div>
                    <a className="absolute border border-[#757575] border-solid content-stretch cursor-pointer flex items-center justify-between left-[0.5px] px-[28px] py-[18px] rounded-[4px] top-[62.5px] w-[536px]" data-node-id="284:1113" data-name="Component 6">
                      <p className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[21px] relative shrink-0 text-[#757575] text-[14px] text-left tracking-[0.84px] whitespace-nowrap" data-node-id="I284:1113;284:1085" style={{ fontVariationSettings: '"opsz" 14' }}>
                        ОТПРАВИТЬ ФОРМУ
                      </p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I284:1113;284:1086" data-name="Text">
                        <p className="[word-break:break-word] font-['DM_Sans:Light'] font-light leading-[27px] relative shrink-0 text-[18px] text-left text-white tracking-[0.84px] whitespace-nowrap" data-node-id="I284:1113;284:1087" style={{ fontVariationSettings: '"opsz" 14' }}>
                          →
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[101px] items-center pt-[36px] relative shrink-0 w-full" data-node-id="108:2911" data-name="Button:margin" />
                <div className="absolute content-stretch flex flex-col h-[31px] items-start left-[0.5px] pt-[14px] top-[396.5px] w-[536px]" data-node-id="108:2916" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.2)] whitespace-nowrap" data-node-id="108:2917" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute bg-[#10111a] content-stretch flex flex-col h-[67px] items-start left-1/2 pb-[6px] pl-[14px] pr-[3px] pt-[5px] rounded-bl-[35px] rounded-br-[35px] top-0 w-[1555px]" data-node-id="150:1692">
                <div className="absolute content-stretch flex gap-[385px] h-[44px] items-center left-[10px] px-[24px] top-[11px] w-[1488px]" data-node-id="150:1693" data-name="Header">
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[268px]" data-node-id="825:1080" data-name="Button">
                    <div className="relative rounded-[8px] shrink-0 size-[50px]" data-node-id="825:1081" data-name="Container">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgContainer} />
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[59px] top-[4px] w-[209px]" data-node-id="825:1082">
                      <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-node-id="825:1083" data-name="Container">
                        <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[5px] top-0 w-[195px]" data-node-id="825:1084" data-name="Container">
                          <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[16.5px] relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="825:1085">
                            Природа Света
                          </p>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[5px] top-[26px] w-[195px]" data-node-id="825:1086" data-name="Container">
                          <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[#757575] text-[10px] tracking-[0.9px] whitespace-nowrap" data-node-id="825:1087">
                            КОЗЫРЬКИ НАВЕСЫ ЗИМНИЕ САДЫ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[32px]" data-node-id="150:1694" data-name="Button" />
                  <div className="absolute content-stretch flex gap-[2px] items-center left-[526px] top-[4px]" data-node-id="150:1704" data-name="Navigation">
                    <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[30px] shrink-0" data-node-id="150:1705" data-name="Button">
                      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="150:1706" style={{ fontVariationSettings: '"opsz" 14' }}>
                        Главная
                      </p>
                    </a>
                    <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="150:1707" data-name="Button">
                      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="150:1708" style={{ fontVariationSettings: '"opsz" 14' }}>
                        Каталог
                      </p>
                    </a>
                    <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="150:1709" data-name="Button">
                      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="150:1710" style={{ fontVariationSettings: '"opsz" 14' }}>
                        Портфолио
                      </p>
                    </a>
                    <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="150:1711" data-name="Button">
                      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="150:1712" style={{ fontVariationSettings: '"opsz" 14' }}>
                        Услуги
                      </p>
                    </a>
                    <div className="bg-[#1d1e24] content-stretch flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[30px] shrink-0" data-node-id="150:1713" data-name="Button">
                      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="150:1714" style={{ fontVariationSettings: '"opsz" 14' }}>
                        Контакты
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center pt-[60px] relative shrink-0 w-full" data-node-id="108:2918" data-name="Container:margin">
            <div className="border-[rgba(255,255,255,0.08)] border-solid border-t grid-cols-[___384px_384px_384px] grid-rows-[_124px] inline-grid max-w-[1200px] px-[24px] relative shrink-0" data-node-id="108:2919" data-name="Container">
              <div className="border-[rgba(255,255,255,0.08)] border-r border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch pr-[32px] py-[28px] relative row-1 self-stretch shrink-0" data-node-id="108:2920" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="108:2921" data-name="Container">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.3)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="108:2922">
                    ПОЗВОНИТЬ НАМ
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[33px] items-start pt-[10px] relative shrink-0 w-[351px]" data-node-id="108:2923" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[22.5px] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="108:2924" style={{ fontVariationSettings: '"opsz" 14' }}>
                    +7 (495) 123-45-67
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[351px]" data-node-id="108:2925" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" data-node-id="108:2926" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Пн–Пт 9:00–19:00, Сб 10:00–16:00
                  </p>
                </div>
              </div>
              <div className="border-[rgba(255,255,255,0.08)] border-r border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch px-[32px] py-[28px] relative row-1 self-stretch shrink-0" data-node-id="108:2927" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="108:2928" data-name="Container">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.3)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="108:2929">
                    НАШ АДРЕС — ЗАХОДИТЕ
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[33px] items-start pt-[10px] relative shrink-0 w-[319px]" data-node-id="108:2930" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[22.5px] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="108:2931" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Москва, ул. Производственная, 15
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[319px]" data-node-id="108:2932" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" data-node-id="108:2933" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Производство и офис · м. Текстильщики
                  </p>
                </div>
              </div>
              <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch pl-[32px] py-[28px] relative row-1 self-stretch shrink-0" data-node-id="108:2934" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="108:2935" data-name="Container">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.3)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="108:2936">
                    НАПИСАТЬ НА EMAIL
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[33px] items-start pt-[10px] relative shrink-0 w-[352px]" data-node-id="108:2937" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[22.5px] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="108:2938" style={{ fontVariationSettings: '"opsz" 14' }}>
                    info@prirodasveta.ru
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[352px]" data-node-id="108:2939" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" data-node-id="108:2940" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Ответим в течение рабочего дня
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
