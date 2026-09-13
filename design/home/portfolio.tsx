const imgContainer = "assets/home-portfolio-featured-winter-garden.jpg";
const imgContainer1 = "assets/home-portfolio-brick-balconies.jpg";
const imgContainer2 = "assets/home-portfolio-roof-skylight.jpg";
const imgContainer3 = "assets/home-portfolio-glass-roof-hall.png";
const imgImg202204011342127871 = "assets/photo-staircase-glass-railing.jpg";

type ContainerProps = {
  className?: string;
  property1?: "Default";
};

function Container({ className, property1 = "Default" }: ContainerProps) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex flex-col h-[606px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] w-[484.234px]"} data-node-id="204:1380">
      <div className="h-[530px] relative shrink-0 w-full" data-node-id="204:1367" data-name="Image (Атмосфера 42 м²)" />
      <div className="absolute h-[605px] left-[0.16px] top-0 w-[483px]" data-node-id="204:1368" data-name="Container">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-23.27%] max-w-none top-0 w-[146.31%]" src={imgContainer} />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.08)] border border-solid border-white left-[14px] rounded-[100px] top-[14px]" data-node-id="204:1369" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap" data-node-id="204:1370">
            Зимний сад
          </p>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] left-[-1px] top-[525px] w-[482.234px]" data-node-id="204:1371" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-node-id="204:1372" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#f0efe9] text-[13px] whitespace-nowrap" data-node-id="204:1373">
                Атмосфера 42 м²
              </p>
            </div>
          </div>
          <div className="h-[28px] relative shrink-0 w-[450.234px]" data-node-id="204:1374" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[4px] relative size-full">
              <div className="h-full relative shrink-0" data-node-id="204:1375" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="204:1376">
                    Красногорск, КП «Гринфилд»
                  </p>
                </div>
              </div>
              <div className="h-full relative shrink-0" data-node-id="204:1377" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <p className="[word-break:break-word] font-['Instrument_Serif:Regular'] font-normal leading-[24px] relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="204:1378" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                    580 000 ₽
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

type BtnProps = {
  className?: string;
  property1?: "Default";
};

function Btn({ className, property1 = "Default" }: BtnProps) {
  return (
    <div className={className || "border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex items-center justify-center px-[29px] py-[13px] relative rounded-[100px]"} data-node-id="254:4368">
      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.1px] whitespace-nowrap" data-node-id="254:4366">{`Все `}</p>
    </div>
  );
}

export default function HomePortfolio() {
  return (
    <div className="bg-[#0d0d0c] relative size-full" data-node-id="86:1392" data-name="HomePortfolio">
      <div className="absolute blur-[100px] left-[545px] rounded-[250px] size-[500px] top-[-184.09px]" data-node-id="86:1393" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -35.355 -35.355 0 250 250)'><stop stop-color='rgba(45,90,61,0.07)' offset='0'/><stop stop-color='rgba(0,0,0,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="Container" />
      <div className="absolute content-stretch flex flex-col items-start left-[195px] right-[106px] top-[80px]" data-node-id="86:1394" data-name="Container">
        <div className="relative shrink-0 w-[1265px]" data-node-id="86:1395" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[811px] items-end relative size-full">
            <div className="relative shrink-0 w-[298.031px]" data-node-id="86:1396" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="h-[14px] relative shrink-0 w-full" data-node-id="86:1397" data-name="Label" />
                <div className="h-[109px] relative shrink-0 w-[298.031px]" data-node-id="86:1399" data-name="Heading 2">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
                    <div className="[word-break:break-word] font-['Instrument_Serif:Regular'] leading-[0] not-italic relative shrink-0 text-[#f0efe9] text-[0px] tracking-[-1.5px] whitespace-nowrap" data-node-id="86:1400">
                      <p className="font-['Playfair_Display:Regular'] font-normal leading-[50.4px] mb-0 text-[48px]">Более 840 проектов.</p>
                      <p className="font-['Playfair_Display:Italic'] font-normal italic leading-[50.4px] text-[48px] text-[rgba(255,255,255,0.3)]">Вот несколько.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Btn className="border border-[rgba(255,255,255,0.3)] border-solid cursor-pointer relative rounded-[100px] shrink-0" />
          </div>
        </div>
        <div className="h-[629px] relative shrink-0 w-full" data-node-id="86:1403" data-name="Container:margin">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
            <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[___484.23px_345.88px_345.89px] grid-rows-[___260px_260px_260px] h-[597px] left-0 top-[32px] w-[1234px]" data-node-id="86:1404" data-name="Container">
              <Container className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] border-solid col-1 h-[606px] relative rounded-[24px] row-[1/span_2] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.28)] shrink-0 w-[484.234px]" />
              <div className="absolute h-[317px] left-[510px] rounded-[24px] top-[287px] w-[335px]" data-node-id="254:4272" data-name="Container">
                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgContainer1} />
              </div>
              <div className="absolute h-[238px] left-[888px] rounded-[24px] top-[-2px] w-[346px]" data-node-id="254:4266" data-name="Container">
                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgContainer2} />
              </div>
              <div className="absolute h-[315px] left-[888px] rounded-[24px] top-[287px] w-[345px]" data-node-id="254:4280" data-name="Container">
                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-bottom pointer-events-none rounded-[24px] size-full" src={imgContainer3} />
              </div>
              <div className="absolute h-[243px] left-[510px] top-0 w-[335px]" data-node-id="254:4256" data-name="IMG_20220401_134212_787 2">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                  <div className="absolute inset-0 rounded-[24px]" data-node-id="I254:4256;254:4223" data-name="IMG_20220401_134212_787 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImg202204011342127871} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
