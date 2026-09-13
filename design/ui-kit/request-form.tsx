// UI kit section "заявка" (613:5192) is a Figma SECTION → metadata only.
// Children: "блок с заявкой" 284:960 (01 Имя), "блок с заявкой2" 284:978 (02 Телефон), "блок с заявкой3" 284:996 (03 Telegram),
//           "форма" 284:1089 (submit button "ОТПРАВИТЬ ФОРМУ", 536x65, 3 variants). All fields share identical styling; extracted 284:960.

// ===== 284:960 "блок с заявкой" — underline input on dark — verbatim =====
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col items-start relative"} data-node-id="284:961" data-name="Property 1=Variant2">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="284:962" data-name="Label">
          <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.35)] text-left tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="284:963">
            01 Имя
          </p>
        </div>
        <div className="border-b border-solid border-white content-stretch flex flex-col h-[57px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-[536px]" data-node-id="284:964" data-name="Text Input">
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[16px] text-left text-white w-full" data-node-id="284:965" style={{ fontVariationSettings: '"opsz" 14' }}>
            Ваше имя
          </p>
        </div>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="284:966" data-name="Property 1=Variant3">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="284:967" data-name="Label">
          <p className="[word-break:break-word] font-['JetBrains_Mono:Medium'] font-medium leading-[13.5px] relative shrink-0 text-[9px] text-white tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="284:968">
            01 Имя
          </p>
        </div>
        <div className="border-b border-solid border-white content-stretch flex flex-col h-[57px] items-start justify-center overflow-clip pb-[14px] pt-[18px] relative shrink-0 w-[536px]" data-node-id="284:969" data-name="Text Input">
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[16px] text-white w-full" data-node-id="284:970" style={{ fontVariationSettings: '"opsz" 14' }}>{`Анастасия `}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="284:959" data-name="Property 1=Default">
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
