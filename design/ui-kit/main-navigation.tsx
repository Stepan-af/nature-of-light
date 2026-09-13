// UI kit section "главная навигация" (740:4922) is a Figma SECTION → get_design_context returned metadata only.
// Children extracted individually below. Section children (from metadata):
//   Главная 154:302, Каталог 154:319, Портфолио 154:325, Услуги 154:335, Контакты 154:343  (nav text link, 3 variants each — identical styling, only text differs)
//   ПАРТНЕРЫ 154:357 (3 variants), ЗАКАЗАТЬ 154:365 (3 variants), перейти 204:2388 (3 variants), Btn 204:2381 (3 variants)

// ===== 154:302 "Главная" nav link — verbatim =====
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "block cursor-pointer h-[20px] relative w-[53px]"} data-node-id="154:303" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[13px] text-left text-white whitespace-nowrap" data-node-id="154:304" style={{ fontVariationSettings: '"opsz" 14' }}>
          Главная
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "h-[20px] relative w-[53px]"} data-node-id="154:305" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[#92c895] text-[13px] whitespace-nowrap" data-node-id="154:306" style={{ fontVariationSettings: '"opsz" 14' }}>
          Главная
        </p>
      </div>
    );
  }
  return (
    <button className={className || "block cursor-pointer h-[20px] relative w-[53px]"} data-node-id="154:301" data-name="Property 1=Default">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium'] font-medium inset-0 leading-[19.5px] text-[13px] text-[rgba(255,255,255,0.59)] text-left whitespace-nowrap" data-node-id="154:288" style={{ fontVariationSettings: '"opsz" 14' }}>
        Главная
      </p>
    </button>
  );
}

// ===== 154:357 "ПАРТНЕРЫ" — verbatim (all 3 variants render identically in the export) =====
/*
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  const isVariant2 = property1 === "Variant2";
  const isVariant3 = property1 === "Variant3";
  return (
    <div className={className || "content-stretch flex items-center relative"} id={isVariant3 ? "node-154_361" : isVariant2 ? "node-154_358" : "node-154_356"}>
      <div className="bg-[rgba(26,35,126,0.06)] border border-[rgba(26,35,126,0.14)] border-solid content-stretch flex flex-col items-start justify-center px-[14px] py-[7px] relative rounded-[6px] shrink-0" id={isVariant3 ? "node-154_362" : isVariant2 ? "node-154_359" : "node-154_351"} data-name="Button">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" id={isVariant3 ? "node-154_363" : isVariant2 ? "node-154_360" : "node-154_352"} style={{ fontVariationSettings: '"opsz" 14' }}>
          Партнёрам
        </p>
      </div>
    </div>
  );
}
*/

// ===== 154:365 "ЗАКАЗАТЬ" — verbatim =====
/*
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  const isVariant2 = property1 === "Variant2";
  const isVariant3 = property1 === "Variant3";
  return (
    <div className={className || `content-stretch flex flex-col items-start justify-center px-[18px] py-[7px] relative rounded-[6px] ${isVariant3 ? "bg-[rgba(58,81,59,0.56)]" : isVariant2 ? "bg-[rgba(46,125,50,0.2)]" : "bg-[rgba(117,117,117,0.09)]"}`} id={isVariant3 ? "node-154_368" : isVariant2 ? "node-154_366" : "node-154_364"}>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" id={isVariant3 ? "node-154_369" : isVariant2 ? "node-154_367" : "node-154_354"} style={{ fontVariationSettings: '"opsz" 14' }}>
        Заказать
      </p>
    </div>
  );
}
*/

// ===== 204:2388 "перейти" (hero CTA "Перейти в каталог") — verbatim =====
/*
type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "bg-[rgba(46,125,50,0.2)] content-stretch cursor-pointer flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2389" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-left text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2390" style={{ fontVariationSettings: '"opsz" 14' }}>
          Перейти в каталог
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "bg-[rgba(39,146,44,0.23)] content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2391" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2392" style={{ fontVariationSettings: '"opsz" 14' }}>
          Перейти в каталог
        </p>
      </div>
    );
  }
  return (
    <div className={className || "bg-[rgba(117,117,117,0.09)] content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2387" data-name="Property 1=Default">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2385" style={{ fontVariationSettings: '"opsz" 14' }}>
        Перейти в каталог
      </p>
    </div>
  );
}
*/

// ===== 204:2381 "Btn" (hero secondary "Наши работы") — verbatim =====
/*
type BtnProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function Btn({ className, property1 = "Default" }: BtnProps) {
  if (property1 === "Variant2") {
    return (
      <button className={className || "bg-[rgba(46,125,50,0.1)] content-stretch cursor-pointer flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2382" data-name="Property 1=Variant2">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-left text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2383" style={{ fontVariationSettings: '"opsz" 14' }}>
          Наши работы
        </p>
      </button>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className || "bg-[rgba(7,239,19,0.1)] content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2395" data-name="Property 1=Variant3">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2396" style={{ fontVariationSettings: '"opsz" 14' }}>
          Наши работы
        </p>
      </div>
    );
  }
  return (
    <div className={className || "bg-[rgba(0,0,0,0)] border border-[rgba(255,255,255,0)] border-solid content-stretch flex h-[47px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px]"} data-node-id="204:2380" data-name="Property 1=Default">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" data-node-id="204:2378" style={{ fontVariationSettings: '"opsz" 14' }}>
        Наши работы
      </p>
    </div>
  );
}
*/
