// UI kit section "основные кнопки" (742:4924) is a Figma SECTION → metadata only. Children extracted individually.
// Section children (from metadata):
//   Button 280:816 "Все" (catalog filter, 3 variants)            Button 271:438 "Козырьки" (3 variants)
//   Button 271:444 "Зимние сады" (3 variants)                   Button 646:1238 "Лестницы" (3 variants)
//   заявка 271:459 "Оставить заявку" (300x45, 3 variants)       подробнее 280:791 "Подробнее →" (3 variants)
//   кнопка партфолио 271:495 "Все работы", 271:501 "Козырьки", 271:507 "Зимние сады", 271:513 "Изделия из стекла", 271:519 "Офисные перегородки" (3 variants each)

// ===== 280:816 catalog filter chip "Все" — verbatim =====
type ButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Button({ className, property1 = "Default" }: ButtonProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "bg-[rgba(36,77,38,0.22)] border border-[rgba(137,199,140,0.27)] border-solid content-stretch cursor-pointer flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="280:817" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="280:818" style={{ fontVariationSettings: '"opsz" 14' }}>
          Все
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "bg-[rgba(46,125,50,0.2)] border border-[rgba(98,255,106,0.23)] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="280:819" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="280:820" style={{ fontVariationSettings: '"opsz" 14' }}>
          Все
        </p>
      </div>
    );
  }
  return (
    <div className={className || "bg-[rgba(16,42,18,0.2)] border border-[rgba(46,125,50,0.42)] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="280:815" data-name="Property 1=Default">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="280:813" style={{ fontVariationSettings: '"opsz" 14' }}>
        Все
      </p>
    </div>
  );
}

// ===== 271:438 catalog filter chip "Козырьки" (same component used for Зимние сады 271:444, Лестницы 646:1238) — verbatim =====
/*
type ButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Button({ className, property1 = "Default" }: ButtonProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "bg-[rgba(35,115,39,0.12)] border border-[rgba(0,0,0,0.15)] border-solid content-stretch cursor-pointer flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="271:439" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" data-node-id="271:440" style={{ fontVariationSettings: '"opsz" 14' }}>
          Козырьки
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "bg-[rgba(26,56,28,0.19)] border border-[rgba(0,0,0,0.09)] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="271:441" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="271:442" style={{ fontVariationSettings: '"opsz" 14' }}>
          Козырьки
        </p>
      </div>
    );
  }
  return (
    <div className={className || "border border-[#26902b] border-solid content-stretch flex flex-col h-[38px] items-start justify-center px-[18px] py-[8px] relative rounded-[24px]"} data-node-id="271:437" data-name="Property 1=Default">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[19.5px] relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap" data-node-id="271:431" style={{ fontVariationSettings: '"opsz" 14' }}>
        Козырьки
      </p>
    </div>
  );
}
*/

// ===== 271:459 "заявка" — "Оставить заявку" (used in project-detail CTA card) — verbatim =====
/*
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "bg-white content-stretch cursor-pointer flex flex-col items-center justify-center py-[var(--size\\/space\\/padding\\/component\\/small-xl,12px)] relative rounded-[var(--size\\/raduis\\/small-l,8px)] w-[300px]"} data-node-id="271:460" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[21px] relative shrink-0 text-[#2e7d32] text-[14px] text-center whitespace-nowrap" data-node-id="271:461" style={{ fontVariationSettings: '"opsz" 14' }}>
          Оставить заявку
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "bg-white content-stretch flex flex-col items-center justify-center py-[var(--size\\/space\\/padding\\/component\\/small-xl,12px)] relative rounded-[var(--size\\/raduis\\/small-l,8px)] w-[300px]"} data-node-id="271:462" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[21px] relative shrink-0 text-[#075b0b] text-[14px] text-center whitespace-nowrap" data-node-id="271:463" style={{ fontVariationSettings: '"opsz" 14' }}>
          Оставить заявку
        </p>
      </div>
    );
  }
  return (
    <div className={className || "bg-[#757575] content-stretch flex flex-col items-center justify-center py-[var(--size\\/space\\/padding\\/component\\/small-xl,12px)] relative rounded-[var(--size\\/raduis\\/small-l,8px)] w-[300px]"} data-node-id="271:458" data-name="Property 1=Default">
      <p className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="271:456" style={{ fontVariationSettings: '"opsz" 14' }}>
        Оставить заявку
      </p>
    </div>
  );
}
*/

// ===== 271:495 "кнопка партфолио" — portfolio filter pill "Все работы" (same pattern for 271:501/507/513/519) — verbatim =====
/*
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "bg-[rgba(13,13,12,0.2)] content-stretch cursor-pointer flex flex-col h-[39px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px]"} data-node-id="271:496" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" data-node-id="271:497" style={{ fontVariationSettings: '"opsz" 14' }}>
          Все работы
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "bg-[#0d0d0c] content-stretch flex flex-col h-[39px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px]"} data-node-id="271:498" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="271:499" style={{ fontVariationSettings: '"opsz" 14' }}>
          Все работы
        </p>
      </div>
    );
  }
  return (
    <div className={className || "bg-[rgba(13,13,12,0.2)] content-stretch flex flex-col h-[39px] items-start justify-center px-[18px] py-[9px] relative rounded-[100px]"} data-node-id="271:494" data-name="Property 1=Default">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[21px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap" data-node-id="271:484" style={{ fontVariationSettings: '"opsz" 14' }}>
        Все работы
      </p>
    </div>
  );
}
*/

// ===== 280:791 "подробнее" — catalog card link "Подробнее →" — verbatim =====
/*
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col items-start relative"} data-node-id="280:792" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[18px] relative shrink-0 text-[#9ca3af] text-[12px] text-left whitespace-nowrap" data-node-id="280:793" style={{ fontVariationSettings: '"opsz" 14' }}>
          Подробнее →
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="280:794" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[18px] relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap" data-node-id="280:795" style={{ fontVariationSettings: '"opsz" 14' }}>
          Подробнее →
        </p>
      </div>
    );
  }
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="280:790" data-name="Property 1=Default">
      <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[18px] relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap" data-node-id="280:788" style={{ fontVariationSettings: '"opsz" 14' }}>
        Подробнее →
      </p>
    </div>
  );
}
*/
