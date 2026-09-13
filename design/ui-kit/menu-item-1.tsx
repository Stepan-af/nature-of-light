const imgCardImage = "assets/portfolio-loft-glass-roof.jpg";
const imgCardImage1 = "assets/menu-card-residential-staircase.jpg";
const imgCardImage2 = "assets/home-portfolio-roof-skylight.jpg";
const imgEllipse = "assets/dot-green-6.svg";
const imgXCircle = "assets/icon-close-10.svg";
const imgXCircle1 = "assets/icon-close-circle-23.svg";

type Component1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Component1({ className, property1 = "Default" }: Component1Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `content-stretch flex flex-col items-start justify-center px-[14px] py-[8px] relative rounded-[30px] ${isVariant2 ? "gap-[7px] h-[267px] overflow-clip w-[579px]" : ""}`} id={isVariant2 ? "node-910_1961" : "node-910_1959"}>
      {property1 === "Default" && (
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="910:1960" style={{ fontVariationSettings: '"opsz" 14' }}>
          Каталог
        </p>
      )}
      {isVariant2 && (
        <>
          <div className="h-[36px] relative rounded-[30px] shrink-0 w-[77px]" data-node-id="910:1962" data-name="Button">
            <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium leading-[19.5px] left-[14px] text-[#757575] text-[13px] top-[8px] whitespace-nowrap" data-node-id="910:1963" style={{ fontVariationSettings: '"opsz" 14' }}>
              Каталог
            </p>
          </div>
          <a className="bg-[#0f0f10] block cursor-pointer h-[219px] relative rounded-[30px] shrink-0 w-[552px]" data-node-id="910:1964" data-name="копия1">
            <div className="absolute content-stretch flex h-[22px] items-center justify-between left-[24px] right-[24px] top-[20px]" data-node-id="910:1965" data-name="panel-header">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="910:1966" data-name="Frame">
                <div className="relative shrink-0 size-[6px]" data-node-id="910:1967" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[normal] opacity-60 relative shrink-0 text-[#757575] text-[13px] text-left uppercase whitespace-nowrap" data-node-id="910:1968" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Выберите категорию
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-node-id="910:1969" data-name="close-button">
                <div className="relative shrink-0 size-[10px]" data-node-id="910:1970" data-name="x-circle">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgXCircle} />
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[12px] items-start left-[24px] top-[58px]" data-node-id="910:1972" data-name="cards-row">
              <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[160px]" data-node-id="910:1973" data-name="project-card">
                <div className="aspect-[160/110] border border-[rgba(255,255,255,0.04)] border-solid relative rounded-[16px] shrink-0 w-full" data-node-id="910:1974" data-name="card-image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCardImage} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-center text-white w-full" data-node-id="910:1975" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Все проекты
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[160px]" data-node-id="910:1976" data-name="project-card">
                <div className="aspect-[160/110] border border-[rgba(255,255,255,0.04)] border-solid relative rounded-[16px] shrink-0 w-full" data-node-id="910:1977" data-name="card-image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCardImage1} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-center text-white w-full" data-node-id="910:1978" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Жилые дома
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[160px]" data-node-id="910:1979" data-name="project-card">
                <div className="aspect-[160/110] border border-[rgba(255,255,255,0.04)] border-solid relative rounded-[16px] shrink-0 w-full" data-node-id="910:1980" data-name="card-image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCardImage2} />
                </div>
                <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-center text-white w-full" data-node-id="910:1981" style={{ fontVariationSettings: '"opsz" 14' }}>
                  Коммерческие
                </p>
              </div>
            </div>
            <div className="absolute left-[505px] size-[23px] top-[19.5px]" data-node-id="939:2023" data-name="x-circle">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgXCircle1} />
            </div>
          </a>
        </>
      )}
    </div>
  );
}
