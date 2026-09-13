const imgProperty1Default = "assets/project-gallery-thumb-3.jpg";
const imgImage = "assets/project-gallery-thumb-2.jpg";
const imgImage1 = "assets/project-gallery-thumb-1.jpg";
const imgImage3 = "assets/project-gallery-main-glass-dome.jpg";
const imgContainer = "assets/logo-mark.jpg";

type ComponentProps = {
  className?: string;
  property1?: "Default";
};

function Component({ className, property1 = "Default" }: ComponentProps) {
  return (
    <div className={className || "bg-[#757575] content-stretch flex flex-col items-center justify-center py-[var(--size\\/space\\/padding\\/component\\/small-xl,12px)] relative rounded-[var(--size\\/raduis\\/small-l,8px)] w-[300px]"} data-node-id="271:458">
      <p className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="271:456" style={{ fontVariationSettings: '"opsz" 14' }}>
        Оставить заявку
      </p>
    </div>
  );
}

type ImageProps = {
  className?: string;
  property1?: "Default";
};

function Image({ className, property1 = "Default" }: ImageProps) {
  return (
    <div className={className || "h-[137px] overflow-clip relative rounded-[20px] w-[186px]"} data-node-id="271:573">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[102.37%] left-[0.54%] max-w-none top-[-1.09%] w-[100.54%]" src={imgProperty1Default} />
      </div>
    </div>
  );
}

type ButtonProps = {
  className?: string;
  property1?: "Default";
};

function Button({ className, property1 = "Default" }: ButtonProps) {
  return (
    <div className={className || "border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex flex-col h-[141px] items-start justify-center opacity-60 overflow-clip relative rounded-[20px] w-[185px]"} data-node-id="271:576">
      <div className="h-[137.25px] relative shrink-0 w-full" data-node-id="271:559" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

type Button1Props = {
  className?: string;
  property1?: "Default";
};

function Button1({ className, property1 = "Default" }: Button1Props) {
  return (
    <div className={className || "border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex flex-col h-[137px] items-start justify-center opacity-60 overflow-clip relative rounded-[20px] w-[181px]"} data-node-id="271:580">
      <div className="h-[137.25px] relative shrink-0 w-full" data-node-id="271:561" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="148:1410" data-name="Body">
      <div className="content-stretch flex flex-col items-start min-h-[915px] relative shrink-0 w-full" data-node-id="148:1411" data-name="App">
        <div className="bg-[var(--colors\/surface\/base\/secondary,#f5f5f5)] content-stretch flex flex-col h-[1480px] items-start min-h-[915px] relative shrink-0 w-[1559px]" data-node-id="148:1451" data-name="ProjectDetailPage">
          <div className="absolute content-stretch flex flex-col items-center left-0 top-[86px] w-[1559px]" data-node-id="148:1579" data-name="Container:margin">
            <div className="content-stretch flex flex-col items-start max-w-[1200px] pb-[var(--size\/space\/gap\/positive\/massive-l,64px)] pt-[36px] px-[var(--size\/space\/gap\/positive\/base-xl,24px)] relative shrink-0 w-[1200px]" data-node-id="148:1452" data-name="Container">
              <div className="content-stretch flex gap-[var(--size\/space\/gap\/positive\/small-l,8px)] items-center relative shrink-0 w-full" data-node-id="148:1453" data-name="Container">
                <a className="content-stretch cursor-pointer flex flex-col items-start justify-center relative shrink-0" data-node-id="148:1454" data-name="Button">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--colors\/text\/base\/secondary,#757575)] text-left whitespace-nowrap" data-node-id="148:1455" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Портфолио
                  </p>
                </a>
                <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="148:1457" data-name="Text">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[color:var(--colors\/text\/base\/secondary,#757575)] whitespace-nowrap" data-node-id="148:1458" style={{ fontVariationSettings: '"opsz" 14' }}>
                    ›
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="148:1460" data-name="Text">
                  <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap" data-node-id="148:1461">
                    Зеркальные работы
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[28px] relative shrink-0 w-full" data-node-id="148:1578" data-name="Container:margin">
                <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[__772px_340px] grid-rows-[_745.75px] relative shrink-0 w-full" data-node-id="148:1463" data-name="Container">
                  <div className="col-1 content-stretch flex flex-col h-[745.75px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="148:1464" data-name="Container">
                    <div className="bg-[var(--colors\/surface\/base\/default,white)] content-stretch flex flex-col h-[482.5px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="148:1465" data-name="Container">
                      <div className="h-[482.5px] overflow-clip relative shrink-0 w-full" data-node-id="148:1466" data-name="Image («Классик» ×3 для ЖК)">
                        <div className="absolute h-[481px] left-[2.5px] rounded-[19px] top-px w-[770px]" data-node-id="243:484" data-name="Image («Классик» ×3 для ЖК)">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19px]">
                            <img alt="" className="absolute h-[214%] left-0 max-w-none top-[-56.84%] w-[100.26%]" src={imgImage3} />
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(0,0,0,0.45)] content-stretch flex items-center left-[664.5px] px-[var(--size\/space\/padding\/component\/small-xl,12px)] py-[5px] rounded-[20px] top-[440px]" data-node-id="148:1467" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="148:1468" data-name="Text">
                            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] whitespace-nowrap" data-node-id="148:1469" style={{ fontVariationSettings: '"opsz" 14' }}>{` Открыть`}</p>
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular'] font-normal leading-[16.5px] left-[14px] text-[11px] text-[rgba(255,255,255,0.5)] top-[452px] whitespace-nowrap" data-node-id="148:1472">
                        04 / 04
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[var(--size\/space\/padding\/component\/small-xl,12px)] relative shrink-0 w-full" data-node-id="148:1493" data-name="Container:margin">
                      <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[____187px_187px_187px_187px] grid-rows-[_141.25px] relative shrink-0 w-full" data-node-id="148:1474" data-name="Container">
                        <div className="border-3 border-[#2e7d32] border-solid col-4 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative rounded-[10px] row-1 self-stretch shrink-0" data-node-id="148:1481" data-name="Button">
                          <div className="h-[137.25px] relative shrink-0 w-full" data-node-id="148:1482" data-name="Image">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                          </div>
                        </div>
                        <Button1 className="border-2 border-[rgba(0,0,0,0)] border-solid col-1 content-stretch flex flex-col h-[137px] items-start justify-center opacity-60 overflow-clip relative rounded-[20px] row-1 shrink-0 w-[181px]" />
                        <Button className="border-2 border-[rgba(0,0,0,0)] border-solid col-2 content-stretch flex flex-col h-[141px] items-start justify-center opacity-60 overflow-clip relative rounded-[20px] row-1 shrink-0 w-[185px]" />
                        <Image className="col-3 h-[137px] relative rounded-[20px] row-1 shrink-0 w-[186px]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[28px] relative shrink-0 w-[772px]" data-node-id="148:1483" data-name="Container">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="148:1484" data-name="SectionTitle">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="148:1486" data-name="Text">
                          <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[15px] relative shrink-0 text-[#2e7d32] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="148:1487">
                            О проекте
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="148:1489" data-name="Paragraph">
                        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[27px] relative shrink-0 text-[#1a1a1a] text-[15px] w-[772px]" data-node-id="148:1490" style={{ fontVariationSettings: '"opsz" 14' }}>
                          Серия из трёх консольных козырьков «Классик» над входными группами жилого комплекса «Садовые кварталы». Закалённое стекло 10 мм, каркас из нержавеющей стали. Единый архитектурный стиль.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 content-stretch flex flex-col gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="148:1495" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="148:1496" data-name="Container">
                      <div className="h-[25.5px] relative shrink-0 w-full" data-node-id="148:1504" data-name="Container">
                        <div className="absolute bg-[rgba(46,125,50,0.08)] border border-[rgba(46,125,50,0.16)] border-solid content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="148:1497" data-name="TagBadge">
                          <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[#2e7d32] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="148:1498">
                            Козырёк
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pt-[var(--size\/space\/padding\/component\/small-xl,12px)] relative shrink-0 w-full" data-node-id="148:1503" data-name="Heading 1:margin">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="148:1500" data-name="Heading 1">
                          <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap" data-node-id="148:1501">
                            Зеркальные работы
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[var(--colors\/surface\/base\/default,white)] border border-[rgba(0,0,0,0.09)] border-solid content-stretch flex flex-col items-start p-[var(--size\/space\/padding\/component\/base-l,20px)] relative rounded-[14px] shrink-0 w-full" data-node-id="148:1505" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="148:1506" data-name="Container">
                        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[color:var(--colors\/text\/base\/secondary,#757575)] tracking-[1.08px] uppercase whitespace-nowrap" data-node-id="148:1507">
                          Параметры проекта
                        </p>
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-col h-[230.5px] items-start pt-[14px] relative shrink-0 w-[298px] whitespace-nowrap" data-node-id="148:1509" data-name="Container">
                        <div className="border-[rgba(0,0,0,0.09)] border-b border-solid h-[43.5px] relative shrink-0 w-full" data-node-id="148:1510" data-name="Container">
                          <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[12px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="148:1512" style={{ fontVariationSettings: '"opsz" 14' }}>
                            Стоимость
                          </p>
                          <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[241.27px] text-[#1a1a1a] text-[15px] top-[10px]" data-node-id="148:1515">
                            74 700 ₽
                          </p>
                        </div>
                        <div className="border-[rgba(0,0,0,0.09)] border-b border-solid h-[43.5px] relative shrink-0 w-full" data-node-id="148:1517" data-name="Container">
                          <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[12px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="148:1519" style={{ fontVariationSettings: '"opsz" 14' }}>
                            Площадь
                          </p>
                          <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[250.58px] text-[#1a1a1a] text-[15px] top-[10px]" data-node-id="148:1522">
                            3×4.5 м
                          </p>
                        </div>
                        <div className="border-[rgba(0,0,0,0.09)] border-b border-solid h-[43.5px] relative shrink-0 w-full" data-node-id="148:1524" data-name="Container">
                          <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[12px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="148:1526" style={{ fontVariationSettings: '"opsz" 14' }}>
                            Город
                          </p>
                          <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[242.89px] text-[#1a1a1a] text-[15px] top-[10px]" data-node-id="148:1529">
                            Москва
                          </p>
                        </div>
                        <div className="border-[rgba(0,0,0,0.09)] border-b border-solid h-[43.5px] relative shrink-0 w-full" data-node-id="148:1531" data-name="Container">
                          <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[12px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="148:1533" style={{ fontVariationSettings: '"opsz" 14' }}>
                            Год
                          </p>
                          <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[264.7px] text-[#1a1a1a] text-[15px] top-[10px]" data-node-id="148:1536">
                            2024
                          </p>
                        </div>
                        <div className="h-[42.5px] relative shrink-0 w-full" data-node-id="148:1538" data-name="Container">
                          <p className="absolute font-['DM_Sans:Regular'] font-normal leading-[18px] left-0 text-[12px] text-[color:var(--colors\/text\/base\/secondary,#757575)] top-[14px]" data-node-id="148:1540" style={{ fontVariationSettings: '"opsz" 14' }}>
                            Срок монтажа
                          </p>
                          <p className="absolute font-['Playfair_Display:Bold'] font-bold leading-[22.5px] left-[252.69px] text-[#1a1a1a] text-[15px] top-[10px]" data-node-id="148:1543">
                            5 дней
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#2e7d32] content-stretch flex flex-col items-start px-[var(--size\/space\/padding\/component\/base-l,20px)] py-[22px] relative rounded-[14px] shrink-0 w-full" data-node-id="148:1546" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="148:1547" data-name="Container">
                        <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[21.6px] relative shrink-0 text-[18px] text-[color:var(--colors\/surface\/base\/default,white)] whitespace-nowrap" data-node-id="148:1548">
                          Хотите похожую конструкцию?
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-[28px] items-start pt-[var(--size\/space\/padding\/component\/small-l,8px)] relative shrink-0 w-[300px]" data-node-id="148:1550" data-name="Container">
                        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.75)] whitespace-nowrap" data-node-id="148:1551" style={{ fontVariationSettings: '"opsz" 14' }}>
                          Рассчитаем стоимость и сроки — бесплатно
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col items-start pt-[var(--size\/space\/padding\/component\/base-m,16px)] relative shrink-0" data-node-id="148:1557" data-name="Button:margin">
                        <Component className="bg-[#757575] content-stretch cursor-pointer flex flex-col items-center justify-center py-[var(--size\/space\/padding\/component\/small-xl,12px)] relative rounded-[var(--size\/raduis\/small-l,8px)] shrink-0 w-[300px]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[var(--size\/space\/padding\/component\/small-m,4px)] relative shrink-0 w-full" data-node-id="148:1577" data-name="Container:margin">
                      <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[__166px_166px] grid-rows-[_69.69px] relative shrink-0 w-full" data-node-id="148:1558" data-name="Container">
                        <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="148:1559" data-name="Button">
                          <div className="bg-[var(--colors\/surface\/base\/default,white)] border border-[rgba(0,0,0,0.09)] border-solid content-stretch flex flex-col items-start px-[var(--size\/space\/padding\/component\/small-xl,12px)] py-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="148:1560" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="148:1561" data-name="Container">
                              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[color:var(--colors\/text\/base\/secondary,#757575)] tracking-[0.72px] whitespace-nowrap" data-node-id="148:1562">
                                ПРЕД.
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-node-id="148:1567" data-name="Container:margin">
                              <div className="content-stretch flex flex-col h-[15.594px] items-start overflow-clip relative shrink-0 w-full" data-node-id="148:1564" data-name="Container">
                                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[15.6px] relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap" data-node-id="148:1565" style={{ fontVariationSettings: '"opsz" 14' }}>
                                  Атмосфера 42 м²
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="148:1568" data-name="Button">
                          <div className="bg-[var(--colors\/surface\/base\/default,white)] border border-[rgba(0,0,0,0.09)] border-solid content-stretch flex flex-col items-start px-[var(--size\/space\/padding\/component\/small-xl,12px)] py-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="148:1569" data-name="Container">
                            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="148:1570" data-name="Container">
                              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[color:var(--colors\/text\/base\/secondary,#757575)] text-right tracking-[0.72px] whitespace-nowrap" data-node-id="148:1571">
                                СЛЕД.
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-node-id="148:1576" data-name="Container:margin">
                              <div className="content-stretch flex flex-col h-[31.188px] items-end overflow-clip relative shrink-0 w-full" data-node-id="148:1573" data-name="Container">
                                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[15.6px] relative shrink-0 text-[#1a1a1a] text-[12px] text-right w-[140px]" data-node-id="148:1574" style={{ fontVariationSettings: '"opsz" 14' }}>
                                  Стеклянная терраса 22 м²
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute bg-[#10111a] content-stretch flex flex-col h-[67px] items-start left-1/2 pb-[6px] pl-[14px] pr-[3px] pt-[5px] rounded-bl-[35px] rounded-br-[35px] top-0 w-[1559px]" data-node-id="166:454">
            <div className="absolute content-stretch flex gap-[385px] h-[44px] items-center left-[10px] px-[24px] top-[11px] w-[1488px]" data-node-id="166:455" data-name="Header">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[268px]" data-node-id="825:1056" data-name="Button">
                <div className="relative rounded-[8px] shrink-0 size-[50px]" data-node-id="825:1057" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgContainer} />
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[59px] top-[4px] w-[209px]" data-node-id="825:1058">
                  <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0 w-full" data-node-id="825:1059" data-name="Container">
                    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[5px] top-0 w-[195px]" data-node-id="825:1060" data-name="Container">
                      <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[16.5px] relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="825:1061">
                        Природа Света
                      </p>
                    </div>
                    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[5px] top-[26px] w-[195px]" data-node-id="825:1062" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[#757575] text-[10px] tracking-[0.9px] whitespace-nowrap" data-node-id="825:1063">
                        КОЗЫРЬКИ НАВЕСЫ ЗИМНИЕ САДЫ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[2px] items-center left-[526px] top-[4px]" data-node-id="166:463" data-name="Navigation">
                <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[30px] shrink-0" data-node-id="166:464" data-name="Button">
                  <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap" data-node-id="166:465" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Главная
                  </p>
                </a>
                <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="166:466" data-name="Button">
                  <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="166:467" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Каталог
                  </p>
                </a>
                <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="166:468" data-name="Button">
                  <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="166:469" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Портфолио
                  </p>
                </a>
                <div className="bg-[#1d1e24] content-stretch flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[30px] shrink-0" data-node-id="166:470" data-name="Button">
                  <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="166:471" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Услуги
                  </p>
                </div>
                <a className="content-stretch cursor-pointer flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="166:472" data-name="Button">
                  <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="166:473" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Контакты
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
