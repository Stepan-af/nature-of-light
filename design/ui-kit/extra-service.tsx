// UI kit section "доп услуги" (613:5190) is a Figma SECTION → metadata only.
// Children: "кнопка с доп услугами1..8" = 271:599, 271:607, 271:612, 271:617, 271:622, 271:627, 271:632, 271:637
// (each: Property 1=Default / Variant2). All share identical styling; extracted 271:599 below.

// ===== 271:599 "кнопка с доп услугами1" — verbatim =====
type Component1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Component1({ className, property1 = "Default" }: Component1Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `${String.raw`bg-[var(--icon-color,white)] border-solid content-stretch flex gap-[var(--size\/space\/gap\/positive\/small-xl,12px)] items-center px-[var(--size\/space\/gap\/positive\/base-xl,24px)] py-[var(--size\/space\/padding\/component\/base-l,20px)] relative rounded-[var(--size\/raduis\/base-m,16px)] w-[284px] `}${isVariant2 ? "border-2 border-[#757575]" : "border border-[#ebebea]"}`} id={isVariant2 ? "node-271_600" : "node-271_598"}>
      <div className="content-stretch flex flex-col items-start relative shrink-0" id={isVariant2 ? "node-271_601" : "node-271_526"} data-name="Text">
        <p className="[word-break:break-word] font-[family-name:var(--typography\/family\/content,'Inter:Regular')] font-normal leading-[20px] not-italic relative shrink-0 text-[#444] text-[14px] w-[214px]" id={isVariant2 ? "node-271_602" : "node-271_527"}>
          Демонтаж старых конструкций
        </p>
      </div>
    </div>
  );
}
