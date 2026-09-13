const imgImage = "assets/catalog-kozyrek-klassik.jpg";
const imgImage1 = "assets/catalog-zerkalnye-raboty.jpg";
const imgImage2 = "assets/photo-staircase-glass-railing.jpg";
const imgImage3 = "assets/catalog-zimniy-sad-mansardnyy.jpg";
const imgImage4 = "assets/catalog-naves-parkovka.jpg";
const imgImage5 = "assets/catalog-kozyrek-veer.jpg";
const imgImage6 = "assets/catalog-naves-besedka.jpg";
const imgImage7 = "assets/catalog-zimniy-sad-legkiy.jpg";

type ButtonProps = {
  className?: string;
  property1?: "Default";
};

function Button({ className, property1 = "Default" }: ButtonProps) {
  return (
    <div className={className || "border border-[#26902b] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px] w-[100px]"} data-node-id="646:1239">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[19.5px] left-[calc(50%-33px)] text-[#757575] text-[13px] top-[8px] whitespace-nowrap" data-node-id="646:1240" style={{ fontVariationSettings: '"opsz" 14' }}>
        Лестницы
      </p>
    </div>
  );
}

type Button1Props = {
  className?: string;
  property1?: "Default";
};

function Button1({ className, property1 = "Default" }: Button1Props) {
  return (
    <div className={className || "border border-[#26902b] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="271:443">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="271:433" style={{ fontVariationSettings: '"opsz" 14' }}>
        Зимние сады
      </p>
    </div>
  );
}

type Button2Props = {
  className?: string;
  property1?: "Default";
};

function Button2({ className, property1 = "Default" }: Button2Props) {
  return (
    <div className={className || "border border-[#26902b] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="271:437">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="271:431" style={{ fontVariationSettings: '"opsz" 14' }}>
        Козырьки
      </p>
    </div>
  );
}

type Button3Props = {
  className?: string;
  property1?: "Default";
};

function Button3({ className, property1 = "Default" }: Button3Props) {
  return (
    <div className={className || "bg-[rgba(16,42,18,0.2)] border border-[rgba(46,125,50,0.42)] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="280:815">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="280:813" style={{ fontVariationSettings: '"opsz" 14' }}>
        Все
      </p>
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "Default";
};

function Component({ className, property1 = "Default" }: ComponentProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="280:790">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="280:788" style={{ fontVariationSettings: '"opsz" 14' }}>
        Подробнее →
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="108:2355" data-name="App">
      <div className="absolute content-stretch flex flex-col h-[187px] items-start left-0 max-w-[1200px] px-[24px] py-[48px] top-0 w-[1200px]" data-node-id="108:2385" data-name="Container">
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+175px)] pt-[32px] top-[148px] w-[1152px]" data-node-id="108:2402" data-name="Container:margin">
          <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[____276px_276px_276px_276px] grid-rows-[__360.50px_360.50px] relative shrink-0 w-full" data-node-id="108:2403" data-name="Container">
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-1 self-stretch shrink-0" data-node-id="108:2404" data-name="Button">
              <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2405" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2406" data-name="Image (Козырёк стеклянный «Классик»)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                </div>
                <div className="absolute h-[25.5px] left-[10px] top-[10px] w-[80.094px]" data-node-id="108:2407" data-name="Container">
                  <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="108:2408" data-name="Chip">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="108:2409">
                      Козырьки
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2410" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2411" data-name="Container:margin">
                  <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] w-[242px]" data-node-id="108:2412">
                    Козырёк стеклянный «Классик»
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-node-id="108:2413" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2414" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="108:2415" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Под заказ
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-node-id="108:2416" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2417" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="108:2418" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Закалённое стекло 8 мм
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2419" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2420" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2421">
                      от 45 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-1 self-stretch shrink-0" data-node-id="108:2424" data-name="Button">
              <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2425" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2426" data-name="Image (Козырёк «Арка» с поликарбонатом)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                </div>
                <div className="absolute h-[25.5px] left-[10px] top-[10px] w-[80.094px]" data-node-id="108:2427" data-name="Container">
                  <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="108:2428" data-name="Chip">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="108:2429">
                      Козырьки
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2430" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2431" data-name="Container:margin">
                  <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] w-[138px]" data-node-id="108:2432">
                    Зеркальные работы
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-node-id="108:2433" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2434" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="108:2435" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Под заказ
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-node-id="108:2436" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2437" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="108:2438" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Поликарбонат 10 мм
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2439" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2440" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2441">
                      от 38 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-1 self-stretch shrink-0" data-node-id="108:2444" data-name="Button">
              <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2445" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2446" data-name="Image (Зимний сад «Панорама»)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                </div>
                <div className="absolute h-[25.5px] left-[10px] top-[10px] w-[101.875px]" data-node-id="108:2447" data-name="Container">
                  <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="108:2448" data-name="Chip">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="108:2449">
                      Зимние сады
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2450" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2451" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[21px] items-start relative shrink-0 w-full" data-node-id="108:2452" data-name="Container">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap" data-node-id="108:2453">
                      Зимний сад «Панорама»
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[22px] items-start pb-[4px] relative shrink-0 w-[242px]" data-node-id="108:2454" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="108:2455" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Под заказ
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[30px] items-start pb-[12px] relative shrink-0 w-[242px]" data-node-id="108:2456" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="108:2457" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Алюминий + стекло
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2458" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2459" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2460">
                      от 380 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-4 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-1 self-stretch shrink-0" data-node-id="108:2463" data-name="Button">
              <div className="bg-white content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2464" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2465" data-name="Image (Зимний сад «Мансардный»)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                </div>
                <div className="absolute h-[25.5px] left-[10px] top-[10px] w-[101.875px]" data-node-id="108:2466" data-name="Container" />
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2469" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2470" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[21px] items-start relative shrink-0 w-full" data-node-id="108:2471" data-name="Container">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap" data-node-id="108:2472">
                      Зимний сад «Мансардный»
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[22px] items-start pb-[4px] relative shrink-0 w-[242px]" data-node-id="108:2473" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="108:2474" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Под заказ
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[30px] items-start pb-[12px] relative shrink-0 w-[242px]" data-node-id="108:2475" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="108:2476" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Алюминий + триплекс
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2477" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2478" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2479">
                      от 550 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-2 self-stretch shrink-0" data-node-id="108:2482" data-name="Button">
              <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2483" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2484" data-name="Image (Навес над парковкой)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                </div>
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2488" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2489" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[21px] items-start relative shrink-0 w-full" data-node-id="108:2490" data-name="Container">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap" data-node-id="108:2491">
                      Навес над парковкой
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[22px] items-start pb-[4px] relative shrink-0 w-[242px]" data-node-id="108:2492" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="108:2493" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Под заказ
                  </p>
                </div>
                <div className="content-stretch flex flex-col h-[30px] items-start pb-[12px] relative shrink-0 w-[242px]" data-node-id="108:2494" data-name="Container">
                  <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="108:2495" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Поликарбонат / Профнастил
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2496" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2497" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2498">
                      от 95 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-2 self-stretch shrink-0" data-node-id="108:2501" data-name="Button">
              <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2502" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2503" data-name="Image (Козырёк «Веер» консольный)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                </div>
                <div className="absolute h-[25.5px] left-[10px] top-[10px] w-[80.094px]" data-node-id="108:2504" data-name="Container">
                  <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="108:2505" data-name="Chip">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="108:2506">
                      Козырьки
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2507" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2508" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[21px] items-start relative shrink-0 w-full" data-node-id="108:2509" data-name="Container">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap" data-node-id="108:2510">
                      Козырёк «Веер» консольный
                    </p>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[22px] items-start left-0 pb-[4px] top-[50.5px] w-[242px]" data-node-id="314:3581" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="314:3582" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Под заказ
                    </p>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[18px] items-start left-0 top-[72.5px] w-[242px]" data-node-id="314:3583" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="314:3584" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Дерево / Металл + поликарбонат
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2515" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2516" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2517">
                      от 62 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-2 self-stretch shrink-0" data-node-id="108:2520" data-name="Button">
              <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2521" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2522" data-name="Image (Навес-беседка комбинированный)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
                </div>
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2526" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2527" data-name="Container:margin">
                  <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] w-[242px]" data-node-id="108:2528">
                    Навес-беседка комбинированный
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-node-id="108:2529" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2530" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="108:2531" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Под заказ
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-node-id="108:2532" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2533" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="108:2534" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Дерево / Металл + поликарбонат
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2535" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2536" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2537">
                      от 180 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.09)] border-solid col-4 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[14px] row-2 self-stretch shrink-0" data-node-id="108:2540" data-name="Button">
              <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-node-id="108:2541" data-name="Container">
                <div className="h-[200px] relative shrink-0 w-full" data-node-id="108:2542" data-name="Image (Зимний сад «Лёгкий» пристройка)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                </div>
                <div className="absolute h-[25.5px] left-[10px] top-[10px] w-[101.875px]" data-node-id="108:2543" data-name="Container">
                  <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="108:2544" data-name="Chip">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="108:2545">
                      Зимние сады
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[158.5_0_0] flex-col items-start min-h-px pb-[18px] pt-[16px] px-[16px] relative w-full" data-node-id="108:2546" data-name="Container">
                <div className="content-stretch flex flex-[48.5_0_0] flex-col items-start min-h-px pb-[8px] relative w-full" data-node-id="108:2547" data-name="Container:margin">
                  <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[20.25px] relative shrink-0 text-[#1a1a1a] text-[15px] w-[242px]" data-node-id="108:2548">
                    Зимний сад «Лёгкий» пристройка
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-node-id="108:2549" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2550" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap" data-node-id="108:2551" style={{ fontVariationSettings: '"opsz" 14' }}>
                      В наличие
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-node-id="108:2552" data-name="Container:margin">
                  <div className="content-stretch flex flex-col h-[18px] items-start relative shrink-0 w-full" data-node-id="108:2553" data-name="Container">
                    <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="108:2554" style={{ fontVariationSettings: '"opsz" 14' }}>
                      ПВХ профиль + стекло
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="108:2555" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2556" data-name="Text">
                    <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[24px] relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap" data-node-id="108:2557">
                      от 280 000 ₽
                    </p>
                  </div>
                  <Component className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" />
                </div>
              </div>
            </div>
            <div className="absolute h-[25.5px] left-[593px] top-[388px] w-[101.875px]" data-node-id="154:229" data-name="Container">
              <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="154:230" data-name="Chip">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="154:231">
                  Зимние сады
                </p>
              </div>
            </div>
          </div>
          <div className="absolute h-[25.5px] left-[898px] top-[43px] w-[101.875px]" data-node-id="305:3485" data-name="Container">
            <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-0 px-[10px] py-[3px] rounded-[20px] top-px" data-node-id="305:3486" data-name="Chip">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="305:3487">
                Зимние сады
              </p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex h-[73px] items-end justify-between left-[200px] pt-[10px] top-[53px] w-[1152px]" data-node-id="108:2390" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="108:2391" data-name="Heading 1">
            <p className="[word-break:break-word] font-['Playfair_Display:ExtraBold'] font-extrabold leading-[63px] relative shrink-0 text-[#1a1a1a] text-[42px] tracking-[-1px] whitespace-nowrap" data-node-id="108:2392">
              Наш каталог
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="819:988">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="108:2393" data-name="Container">
              <Button3 className="bg-[rgba(16,42,18,0.2)] border border-[rgba(46,125,50,0.42)] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px] shrink-0" />
              <Button2 className="border border-[#26902b] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px] shrink-0" />
              <Button1 className="border border-[#26902b] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px] shrink-0" />
              <Button className="border border-[#26902b] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px] shrink-0 w-[100px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#2e7d32] border border-solid border-white content-stretch flex h-[24.5px] items-center left-[210px] px-[10px] py-[3px] rounded-[20px] top-[568px]" data-node-id="305:3492" data-name="Chip">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-white tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="305:3493">
          Козырьки
        </p>
      </div>
    </div>
  );
}
