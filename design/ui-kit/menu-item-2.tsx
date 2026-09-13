const imgCardImage = "assets/menu-portfolio-card-all.png";
const imgCardImage1 = "assets/menu-portfolio-card-residential.png";
const imgCardImage2 = "assets/menu-portfolio-card-commercial.png";
const imgEllipse = "assets/dot-green-6.svg";
const imgXCircle = "assets/icon-close-circle-25.svg";

type Component2Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Component2({ className, property1 = "Default" }: Component2Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `content-stretch flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[30px] ${isVariant2 ? "gap-[7px] h-[267px] overflow-clip w-[579px]" : ""}`} id={isVariant2 ? "node-910_1991" : "node-910_1989"}>
      {property1 === "Default" && (
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="910:1990" style={{ fontVariationSettings: '"opsz" 14' }}>
          Портфолио
        </p>
      )}
      {isVariant2 && (
        <>
          <div className="h-[36px] relative rounded-[30px] shrink-0 w-[77px]" data-node-id="910:1992" data-name="Button">
            <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[19.5px] left-[14px] text-[#757575] text-[13px] top-[8px] whitespace-nowrap" data-node-id="910:1993" style={{ fontVariationSettings: '"opsz" 14' }}>
              Портфолио
            </p>
          </div>
          <a className="bg-[#0f0f10] block cursor-pointer h-[219px] relative rounded-[30px] shrink-0 w-[552px]" data-node-id="910:1994" data-name="копия1">
            <div className="absolute content-stretch flex h-[22px] items-center justify-between left-[24px] right-[24px] top-[20px]" data-node-id="910:1995" data-name="panel-header">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="910:1996" data-name="Frame">
                <div className="relative shrink-0 size-[6px]" data-node-id="910:1997" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[normal] opacity-60 relative shrink-0 text-[#757575] text-[13px] text-left uppercase whitespace-nowrap" data-node-id="910:1998" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Выберите категорию
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 size-[22px]" data-node-id="910:1999" data-name="close-button" />
            </div>
            <div className="absolute content-stretch flex gap-[12px] items-start left-[24px] top-[58px]" data-node-id="910:2002" data-name="cards-row">
              <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[160px]" data-node-id="910:2003" data-name="project-card">
                <div className="aspect-[160/110] border border-[rgba(255,255,255,0.04)] border-solid relative rounded-[16px] shrink-0 w-full" data-node-id="910:2004" data-name="card-image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCardImage} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-center text-white w-full" data-node-id="910:2005" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Все проекты
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[160px]" data-node-id="910:2006" data-name="project-card">
                <div className="aspect-[160/110] border border-[rgba(255,255,255,0.04)] border-solid relative rounded-[16px] shrink-0 w-full" data-node-id="910:2007" data-name="card-image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCardImage1} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-center text-white w-full" data-node-id="910:2008" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Жилые дома
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[160px]" data-node-id="910:2009" data-name="project-card">
                <div className="aspect-[160/110] border border-[rgba(255,255,255,0.04)] border-solid relative rounded-[16px] shrink-0 w-full" data-node-id="910:2010" data-name="card-image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCardImage2} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-center text-white w-full" data-node-id="910:2011" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Коммерческие
                </p>
              </div>
            </div>
            <div className="absolute h-[23px] left-[503px] top-[19.5px] w-[25px]" data-node-id="939:2026" data-name="x-circle">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgXCircle} />
            </div>
          </a>
        </>
      )}
    </div>
  );
}
