// Mobile category card "Козырьки" (325:5562). Sibling cards 325:5533 (Зимние сады) and 325:5547 (Навесы) share this
// structure (not separately extracted — see notes); section heading 325:5529 "Что мы строим" described in notes.
const imgContainer = "assets/mobile-cat-kozyrki.png";

function Variant3({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col h-[220px] items-start overflow-clip relative w-[371.328px]"} data-node-id="204:1257" data-name="ФОТО/Variant3">
      <div className="h-[220px] relative shrink-0 w-full" data-node-id="204:1258" data-name="Image (Козырьки)" />
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.98)] border border-[rgba(0,0,0,0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] size-full" data-node-id="325:5562" data-name="Button">
      <div className="content-stretch flex flex-col h-[220px] items-start overflow-clip relative shrink-0 w-full" data-node-id="325:5563" data-name="Container">
        <Variant3 className="content-stretch flex flex-col h-[221px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[371px]" />
      </div>
      <div className="content-stretch flex flex-col items-start pb-[22px] pt-[20px] px-[20px] relative shrink-0 w-full" data-node-id="325:5565" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="325:5566" data-name="Container">
          <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[33px] relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap" data-node-id="325:5567">
            Козырьки
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[331.328px]" data-node-id="325:5568" data-name="Container">
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16px] relative shrink-0 text-[#757575] text-[8px] w-[165px]" data-node-id="325:5569" style={{ fontVariationSettings: '"opsz" 14' }}>
            Стеклянные и поликарбонатные козырьки над входом, балконом, крыльцом. От 45 000 ₽.
          </p>
        </div>
        <a className="content-stretch cursor-pointer flex gap-[6px] h-[34px] items-center pt-[14px] relative shrink-0 w-[161px]" data-node-id="325:5570" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="325:5571" data-name="Text">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left whitespace-nowrap" data-node-id="325:5572" style={{ fontVariationSettings: '"opsz" 14' }}>
              Смотреть всё
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="325:5573" data-name="Text">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold h-[18px] leading-[19.5px] relative shrink-0 text-[#2e7d32] text-[13px] text-left w-[9px]" data-node-id="325:5574" style={{ fontVariationSettings: '"opsz" 14' }}>
              →
            </p>
          </div>
        </a>
      </div>
      <div className="absolute content-stretch flex flex-col h-[220px] items-start left-0 overflow-clip top-0 w-[182px]" data-node-id="503:2636" data-name="ФОТО фобилка">
        <button className="absolute block cursor-pointer h-[230px] left-0 top-0 w-[182px]" data-node-id="I503:2636;503:2626" data-name="Container">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
        </button>
      </div>
    </div>
  );
}
