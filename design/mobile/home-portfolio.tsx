const imgImg202204011342127871 = "assets/photo-staircase-glass-railing.jpg";
const imgImage42 = "assets/mobile-portfolio-featured-winter-garden.png";

type ComponentProps = {
  className?: string;
  property1?: "Default";
};

function Component({ className, property1 = "Default" }: ComponentProps) {
  return (
    <button className={className || "block h-[298px] overflow-clip relative w-[176px]"} data-node-id="487:2203">
      <div className="absolute inset-[0_3.41%_0_0] rounded-[24px]" data-node-id="487:2204" data-name="IMG_20220401_134212_787 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImg202204011342127871} />
      </div>
    </button>
  );
}

type Component2Props = {
  className?: string;
  property1?: "Default";
};

function Component2({ className, property1 = "Default" }: Component2Props) {
  return (
    <button className={className || "block h-[301px] overflow-clip relative w-[178px]"} data-node-id="491:2274">
      <div className="absolute inset-0 rounded-[24px]" data-node-id="491:2275" data-name="IMG_20220401_134212_787 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-full left-[-64.58%] max-w-none top-0 w-[225.76%]" src={imgImg202204011342127871} />
        </div>
      </div>
    </button>
  );
}

export default function HomePortfolio() {
  return (
    <div className="bg-[#0d0d0c] relative size-full" data-node-id="340:5645" data-name="HomePortfolio">
      <div className="absolute blur-[100px] left-[545px] rounded-[250px] size-[500px] top-[-184.09px]" data-node-id="340:5646" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -35.355 -35.355 0 250 250)'><stop stop-color='rgba(45,90,61,0.07)' offset='0'/><stop stop-color='rgba(0,0,0,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="Container" />
      <div className="absolute content-stretch flex flex-col h-[109px] items-start left-[18px] pt-[8px] top-[83px] w-[223px]" data-node-id="340:5651" data-name="Heading 2">
        <div className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[0] relative shrink-0 text-[#f0efe9] text-[0px] tracking-[-1.5px] whitespace-nowrap" data-node-id="340:5652" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[41px] mb-0 text-[24px]">Более 840 проектов.</p>
          <p className="font-['Instrument_Serif:Italic'] italic leading-[41px] text-[24px] text-[rgba(255,255,255,0.3)]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Вот несколько.
          </p>
        </div>
      </div>
      <button className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch cursor-pointer flex flex-col h-[606px] items-start left-[18px] overflow-clip p-px rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] top-[213px] w-[183px]" data-node-id="340:5822" data-name="Container">
        <div className="h-[530px] relative shrink-0 w-full" data-node-id="I340:5822;340:5757" data-name="Image (Атмосфера 42 м²)">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage42} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.98)] border-solid left-[14px] rounded-[100px] top-[14px]" data-node-id="I340:5822;340:5759" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.98)] text-left whitespace-nowrap" data-node-id="I340:5822;340:5760">
              Зимний сад
            </p>
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] left-[-1px] top-[525px] w-[182px]" data-node-id="I340:5822;340:5761" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="relative shrink-0 w-[159px]" data-node-id="I340:5822;340:5762" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] text-left whitespace-nowrap" data-node-id="I340:5822;340:5763">
                  Атмосфера 42 м²
                </p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[160px]" data-node-id="I340:5822;340:5764" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[51px] items-start pt-[3px] relative size-full">
                <div className="h-full relative shrink-0" data-node-id="I340:5822;340:5765" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[7px] text-[rgba(255,255,255,0.45)] text-left whitespace-nowrap" data-node-id="I340:5822;340:5766">
                      Красногорск, КП «Гринфилд»
                    </p>
                  </div>
                </div>
                <div className="absolute h-[25px] left-[113px] top-[3px]" data-node-id="I340:5822;340:5767" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.98)] text-left whitespace-nowrap" data-node-id="I340:5822;340:5768" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      580 000 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <div className="absolute h-[302px] left-[211px] top-[214px] w-[170px]" data-node-id="363:6157" data-name="IMG_20220401_134212_787 2" />
      <Component className="absolute block cursor-pointer h-[298px] left-[211px] overflow-clip top-[213px] w-[176px]" />
      <Component2 className="absolute block cursor-pointer h-[301px] left-[18px] overflow-clip top-[833px] w-[178px]" />
      <Component2 className="absolute block cursor-pointer h-[301px] left-[211px] overflow-clip top-[833px] w-[178px]" />
      <Component className="absolute block cursor-pointer h-[298px] left-[211px] overflow-clip top-[521px] w-[176px]" />
    </div>
  );
}
