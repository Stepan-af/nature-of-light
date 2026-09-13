const imgSubtract = "assets/home-hero-photo-cutout.png";
const imgRectangle161124952 = "assets/home-hero-blur-panel-h1.svg";
const imgRectangle161124953 = "assets/home-hero-blur-panel-lead.svg";
const imgRectangle161124955 = "assets/home-hero-blur-panel-stats.svg";
const imgSubtract1 = "assets/home-hero-rating-badge-shape.svg";

type BtnProps = {
  className?: string;
  property1?: "Default";
};

function Btn({ className, property1 = "Default" }: BtnProps) {
  return (
    <div className={className || "bg-[rgba(0,0,0,0)] border border-[rgba(255,255,255,0)] border-solid content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2380">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2378" style={{ fontVariationSettings: '"opsz" 14' }}>
        Наши работы
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
    <div className={className || "bg-[rgba(117,117,117,0.09)] content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2387">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2385" style={{ fontVariationSettings: '"opsz" 14' }}>
        Перейти в каталог
      </p>
    </div>
  );
}

export default function Group6() {
  return (
    <div className="contents relative size-full" data-node-id="82:42">
      <div className="absolute h-[644px] left-[190px] top-[118px] w-[1181px]" data-node-id="82:43" data-name="Subtract">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="644" src={imgSubtract} width="1181" />
      </div>
      <div className="absolute content-stretch flex flex-col h-[555.094px] items-start left-[258.67px] top-[134px] w-[539.603px]" data-node-id="82:46" data-name="Container">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="82:47" data-name="Container">
          <div className="relative rounded-[3px] shrink-0 size-[6px]" data-node-id="82:48" data-name="Container" />
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="82:49" data-name="Text">
            <div className="absolute bg-[rgba(217,217,217,0.2)] blur-[0.15px] h-[25px] left-[-4.67px] rounded-[27px] top-[-5px] w-[247px]" data-node-id="189:245" />
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[15px] relative shrink-0 text-[10px] text-white tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="82:50">
              Производство с 2009 года · Москва
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[289px] items-start pt-[20px] relative shrink-0 w-full" data-node-id="82:51" data-name="Heading 1">
          <div className="absolute h-[261px] left-[-18.67px] top-[10px] w-[523px]" data-node-id="189:241">
            <div className="absolute inset-[-23.63%_-11.84%_-23.72%_-11.84%]">
              <img alt="" className="block max-w-none size-full" src={imgRectangle161124952} />
            </div>
          </div>
          <div className="[word-break:break-word] font-['Playfair_Display:ExtraBold'] font-extrabold leading-[0] relative shrink-0 text-[56px] text-white tracking-[-1.5px] w-[546px]" data-node-id="82:52">
            <p className="leading-[59.92px] mb-0">Свет и пространство</p>
            <p className="leading-[59.92px]">под открытым небом</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[114px] items-start pt-[20px] relative shrink-0" data-node-id="82:53" data-name="Paragraph:margin">
          <div className="absolute h-[148px] left-[-23.67px] top-[-27px] w-[491px]" data-node-id="197:336">
            <div className="absolute inset-[-41.73%_-12.61%_-41.82%_-12.61%]">
              <img alt="" className="block max-w-none size-full" src={imgRectangle161124953} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[28.9px] relative shrink-0 text-[17px] text-white w-[440px]" data-node-id="82:54" style={{ fontVariationSettings: '"opsz" 14' }}>
            Изготавливаем козырьки, навесы и зимние сады из стекла и поликарбоната. Замер, проект, монтаж — под ключ.
          </p>
        </div>
        <div className="content-stretch cursor-pointer flex gap-[12px] h-[83px] items-start pt-[36px] relative shrink-0 w-[546px]" data-node-id="82:55" data-name="Container">
          <Component className="bg-[rgba(117,117,117,0.09)] content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" />
          <Btn className="bg-[rgba(0,0,0,0)] border border-[rgba(255,255,255,0)] border-solid content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" />
        </div>
        <div className="content-stretch flex gap-[32px] h-[91px] items-start pt-[44px] relative shrink-0 w-[546px]" data-node-id="82:60" data-name="Container">
          <div className="absolute h-[121px] left-[-49.67px] top-[18px] w-[491px]" data-node-id="197:342">
            <div className="absolute inset-[-51.06%_-12.61%_-51.16%_-12.61%]">
              <img alt="" className="block max-w-none size-full" src={imgRectangle161124955} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140.219px]" data-node-id="82:61" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="82:62" data-name="Container">
              <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[26px] relative shrink-0 text-[26px] text-white whitespace-nowrap" data-node-id="82:63">
                500+
              </p>
            </div>
            <div className="content-stretch flex flex-col h-[21px] items-start pt-[4px] relative shrink-0 w-[140.219px]" data-node-id="82:64" data-name="Container">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16.8px] relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="82:65" style={{ fontVariationSettings: '"opsz" 14' }}>
                реализованных проектов
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71.703px]" data-node-id="82:66" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="82:67" data-name="Container">
              <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[26px] relative shrink-0 text-[26px] text-white whitespace-nowrap" data-node-id="82:68">
                14
              </p>
            </div>
            <div className="content-stretch flex flex-col h-[21px] items-start pt-[4px] relative shrink-0 w-[71.703px]" data-node-id="82:69" data-name="Container">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16.8px] relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="82:70" style={{ fontVariationSettings: '"opsz" 14' }}>
                лет на рынке
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[153.109px]" data-node-id="82:71" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="82:72" data-name="Container">
              <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[26px] relative shrink-0 text-[26px] text-white whitespace-nowrap" data-node-id="82:73">
                30 дн.
              </p>
            </div>
            <div className="content-stretch flex flex-col h-[21px] items-start pt-[4px] relative shrink-0 w-[153.109px]" data-node-id="82:74" data-name="Container">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16.8px] relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="82:75" style={{ fontVariationSettings: '"opsz" 14' }}>
                средний срок изготовления
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] h-[161px] items-start left-[1047.32px] px-[38px] py-[35px] top-[529px] w-[286.603px]" data-node-id="82:76">
        <div className="absolute h-[161px] left-0 top-0 w-[290px]" data-node-id="82:77" data-name="Subtract">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract1} />
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[190px]" data-node-id="82:80">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[7px] items-start relative shrink-0 text-white w-full" data-node-id="82:81">
            <p className="font-['Playfair_Display:Bold'] font-bold leading-[33px] relative shrink-0 text-[24px] w-full" data-node-id="82:82">
              4.9 / 5
            </p>
            <p className="font-['DM_Sans:Regular'] font-normal leading-[18px] relative shrink-0 text-[15px] w-full" data-node-id="82:83" style={{ fontVariationSettings: '"opsz" 14' }}>
              средняя оценка клиентов
            </p>
          </div>
          <div className="absolute content-stretch flex gap-[2px] h-[27px] items-start left-[0.5px] pt-[6px] top-[58px] w-[141px]" data-node-id="82:84" data-name="Container">
            <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-node-id="82:85" data-name="Text">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[21px] relative shrink-0 text-[#f59e0b] text-[14px] whitespace-nowrap" data-node-id="82:86" style={{ fontVariationSettings: '"opsz" 14' }}>
                ★
              </p>
            </div>
            <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-node-id="82:87" data-name="Text">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[21px] relative shrink-0 text-[#f59e0b] text-[14px] whitespace-nowrap" data-node-id="82:88" style={{ fontVariationSettings: '"opsz" 14' }}>
                ★
              </p>
            </div>
            <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-node-id="82:89" data-name="Text">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[21px] relative shrink-0 text-[#f59e0b] text-[14px] whitespace-nowrap" data-node-id="82:90" style={{ fontVariationSettings: '"opsz" 14' }}>
                ★
              </p>
            </div>
            <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-node-id="82:91" data-name="Text">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[21px] relative shrink-0 text-[#f59e0b] text-[14px] whitespace-nowrap" data-node-id="82:92" style={{ fontVariationSettings: '"opsz" 14' }}>
                ★
              </p>
            </div>
            <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-node-id="82:93" data-name="Text">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[21px] relative shrink-0 text-[#f59e0b] text-[14px] whitespace-nowrap" data-node-id="82:94" style={{ fontVariationSettings: '"opsz" 14' }}>
                ★
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
