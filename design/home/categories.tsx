const imgProperty1Default = "assets/home-cat-navesy.png";
const imgContainer = "assets/home-cat-zimnie-sady.png";
const imgContainer1 = "assets/home-cat-kozyrki.png";

function Variant3({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col h-[220px] items-start overflow-clip relative w-[371.328px]"} data-node-id="204:1257" data-name="ФОТО/Variant3">
      <div className="h-[220px] relative shrink-0 w-full" data-node-id="204:1258" data-name="Image (Козырьки)" />
    </div>
  );
}

type ContainerProps = {
  className?: string;
  property1?: "Default";
};

function Container({ className, property1 = "Default" }: ContainerProps) {
  return (
    <div className={className || "h-[220px] overflow-clip relative w-[371.344px]"} data-node-id="204:1337">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProperty1Default} />
    </div>
  );
}

type Container1Props = {
  className?: string;
  property1?: "Default";
};

function Container1({ className, property1 = "Default" }: Container1Props) {
  return (
    <div className={className || "content-stretch flex flex-col h-[220px] items-start overflow-clip relative w-[371.328px]"} data-node-id="204:1302">
      <div className="absolute h-[220px] left-0 top-0 w-[371px]" data-node-id="204:1170" data-name="Container">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgContainer} />
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] px-[24px] relative size-full" data-node-id="82:97" data-name="Container">
      <div className="h-[18px] relative shrink-0 w-full" data-node-id="82:98" data-name="SectionLabel" />
      <div className="content-stretch flex flex-col h-[67px] items-start pt-[10px] relative shrink-0 w-[1152px]" data-node-id="82:102" data-name="Heading 2">
        <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[57px] relative shrink-0 text-[#1a1a1a] text-[38px] tracking-[-0.5px] whitespace-nowrap" data-node-id="82:103">
          Что мы строим
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-node-id="82:104" data-name="Container:margin">
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[___373.33px_373.33px_373.34px] grid-rows-[_383.28px] relative shrink-0 w-full" data-node-id="82:105" data-name="Container">
          <div className="bg-white border border-[rgba(0,0,0,0)] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="82:122" data-name="Button">
            <div className="absolute h-[24.5px] left-[16px] top-[179.5px] w-[99.875px]" data-node-id="82:126" data-name="Container">
              <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] left-[10px] text-[11px] text-white top-[4.75px] tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="82:127">
                Зимние сады
              </p>
            </div>
            <Container1 className="content-stretch flex flex-col h-[220px] items-start overflow-clip relative shrink-0 w-[371.328px]" />
            <div className="content-stretch flex flex-col items-start pb-[22px] pt-[20px] px-[20px] relative shrink-0 w-full" data-node-id="82:128" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="82:129" data-name="Container">
                <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[33px] relative shrink-0 text-[#1a1a1a] text-[22px] whitespace-nowrap" data-node-id="82:130">
                  Зимние сады
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[331.328px]" data-node-id="82:131" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[22.4px] relative shrink-0 text-[#757575] text-[14px] w-[332px]" data-node-id="82:132" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Панорамные застеклённые конструкции — расширяют пространство дома круглый год.
                </p>
              </div>
              <a className="content-stretch cursor-pointer flex gap-[6px] h-[34px] items-center pt-[14px] relative shrink-0 w-[331.328px]" data-node-id="82:133" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="82:134" data-name="Text">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left whitespace-nowrap" data-node-id="82:135" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Смотреть всё
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="82:136" data-name="Text">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left whitespace-nowrap" data-node-id="82:137" style={{ fontVariationSettings: '"opsz" 14' }}>
                    →
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white border border-[rgba(0,0,0,0)] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="82:138" data-name="Button">
            <div className="h-[220px] overflow-clip relative shrink-0 w-full" data-node-id="82:140" data-name="Image (Навесы)">
              <Container className="absolute h-[220px] left-[-0.66px] top-0 w-[371.344px]" />
            </div>
            <div className="absolute h-[24.5px] left-[16px] top-[179.5px] w-[63.563px]" data-node-id="82:142" data-name="Container">
              <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Bold'] font-semibold leading-[16.5px] left-[10px] text-[11px] text-white top-[4.75px] tracking-[0.66px] uppercase whitespace-nowrap" data-node-id="82:143">
                Навесы
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pb-[22px] pt-[20px] px-[20px] relative shrink-0 w-full" data-node-id="82:144" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="82:145" data-name="Container">
                <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[33px] relative shrink-0 text-[#1a1a1a] text-[22px] whitespace-nowrap" data-node-id="82:146">
                  Навесы
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[331.344px]" data-node-id="82:147" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[22.4px] relative shrink-0 text-[#757575] text-[14px] w-[332px]" data-node-id="82:148" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Навесы над парковкой, террасой, входной группой для частных и коммерческих объектов.
                </p>
              </div>
              <a className="content-stretch cursor-pointer flex gap-[6px] h-[34px] items-center pt-[14px] relative shrink-0 w-[331.344px]" data-node-id="82:149" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[-0.16px] top-[-0.09px]" data-node-id="82:150" data-name="Text">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left whitespace-nowrap" data-node-id="82:151" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Смотреть всё
                  </p>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[95.84px] top-[-0.09px]" data-node-id="82:152" data-name="Text">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left whitespace-nowrap" data-node-id="82:153" style={{ fontVariationSettings: '"opsz" 14' }}>
                    →
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white border border-[rgba(0,0,0,0)] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="82:106" data-name="Button">
            <div className="content-stretch flex flex-col h-[220px] items-start overflow-clip relative shrink-0 w-full" data-node-id="82:107" data-name="Container">
              <Variant3 className="content-stretch flex flex-col h-[221px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[371px]" />
            </div>
            <div className="content-stretch flex flex-col items-start pb-[22px] pt-[20px] px-[20px] relative shrink-0 w-full" data-node-id="82:112" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="82:113" data-name="Container">
                <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[33px] relative shrink-0 text-[#1a1a1a] text-[22px] whitespace-nowrap" data-node-id="82:114">
                  Козырьки
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[331.328px]" data-node-id="82:115" data-name="Container">
                <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[22.4px] relative shrink-0 text-[#757575] text-[14px] w-[332px]" data-node-id="82:116" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Стеклянные и поликарбонатные козырьки над входом, балконом, крыльцом. От 45 000 ₽.
                </p>
              </div>
              <a className="content-stretch cursor-pointer flex gap-[6px] h-[34px] items-center pt-[14px] relative shrink-0 w-[331.328px]" data-node-id="82:117" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="82:118" data-name="Text">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left whitespace-nowrap" data-node-id="82:119" style={{ fontVariationSettings: '"opsz" 14' }}>
                    Смотреть всё
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="82:120" data-name="Text">
                  <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left whitespace-nowrap" data-node-id="82:121" style={{ fontVariationSettings: '"opsz" 14' }}>
                    →
                  </p>
                </div>
              </a>
            </div>
            <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[220px] items-start left-1/2 overflow-clip top-[-1px] w-[371.328px]" data-node-id="204:1348" data-name="ФОТО">
              <div className="absolute h-[220px] left-0 top-0 w-[371px]" data-node-id="I204:1348;204:1165" data-name="Container">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgContainer1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
