const imgIconArrow = "assets/icon-arrow-down.svg";
const imgIconArrow1 = "assets/icon-arrow-up.svg";
const imgVector408 = "assets/input-caret.svg";

type FaqPartProps = {
  className?: string;
  type?: "Compact" | "Wide";
};

function FaqPart({ className, type = "Compact" }: FaqPartProps) {
  const isWide = type === "Wide";
  return (
    <button className={className || `${String.raw`bg-[var(--colors\/surface\/base\/default,white)] content-stretch flex gap-[10px] p-[24px] relative w-[762px] `}${isWide ? "items-start rounded-[24px]" : "items-center rounded-[20px]"}`} id={isWide ? "node-302_2879" : "node-302_2873"}>
      <div className={`content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative ${isWide ? "[word-break:break-word] font-normal not-italic text-left" : ""}`} id={isWide ? "node-302_2880" : "node-302_2874"} data-name="Txt container">
        <p className={`${String.raw`font-["Inter:Regular"] leading-[20px] relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/secondary,#757575)] w-full `}${isWide ? "" : "[word-break:break-word] font-normal not-italic text-left"}`} id={isWide ? "node-302_2881" : "node-302_2875"}>
          {isWide ? "Входит ли демонтаж старых окон в стоимость?" : "Сколько времени занимает изготовление и монтаж?"}
        </p>
        {isWide && (
          <ul className="block font-[family-name:var(--text\/caption\/base\/family,'Inter:Regular')] leading-[0] list-disc relative shrink-0 text-[14px] text-[color:var(--colors\/text\/base\/default,#1e1e1e)] tracking-[var(--text\/caption\/base\/tracking,0px)] w-full" data-node-id="302:2882">
            <li className="mb-0 ms-[21px]">
              <span className="leading-[18px]">Замер — в день обращения или на следующий день (бесплатно).</span>
            </li>
            <li className="mb-0 ms-[21px]">
              <span className="leading-[18px]">Изготовление — от 3 до 10 рабочих дней в зависимости от сложности конструкции и загруженности производства.</span>
            </li>
            <li className="ms-[21px]">
              <span className="leading-[18px]">Монтаж — от 1 до 3 дней для типовой квартиры (балкон или 2–3 окна). Сложные панорамные системы могут устанавливаться до 5 дней.</span>
            </li>
          </ul>
        )}
      </div>
      <div className="relative shrink-0 size-[24px]" id={isWide ? "node-302_2883" : "node-302_2877"} data-name="Icon arrow">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isWide ? imgIconArrow1 : imgIconArrow} />
      </div>
    </button>
  );
}

export default function QaSectionWeb() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-node-id="473:952" data-name="QA section (web)">
      <p className="[word-break:break-word] font-['Playfair_Display:Regular'] font-normal leading-[var(--text\/heading\/heading\/line,36px)] relative shrink-0 text-[color:var(--colors\/text\/base\/default,#1e1e1e)] text-[length:var(--text\/heading\/heading\/size,32px)] tracking-[var(--text\/heading\/subheading\/tracking,-1px)] w-full" data-node-id="473:953">
        Вопросы и ответы
      </p>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-node-id="473:954" data-name="Content section">
        <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="473:955" data-name="QA">
          <FaqPart className="bg-[var(--colors\/surface\/base\/default,white)] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[24px] shrink-0 w-full" type="Wide" />
          <FaqPart className="bg-[var(--colors\/surface\/base\/default,white)] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[24px] shrink-0 w-full" type="Wide" />
          <button className="bg-[var(--colors\/surface\/base\/default,white)] content-stretch flex gap-[10px] items-center p-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="473:958" data-name="FAQ part">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="I473:958;302:2874" data-name="Txt container">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/secondary,#757575)] text-left w-full" data-node-id="I473:958;302:2875">
                Какие материалы используются при изготовлении?
              </p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-node-id="I473:958;302:2877" data-name="Icon arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
            </div>
          </button>
          <button className="bg-[var(--colors\/surface\/base\/default,white)] content-stretch flex gap-[10px] items-center p-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="473:959" data-name="FAQ part">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="I473:959;302:2874" data-name="Txt container">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/secondary,#757575)] text-left w-full" data-node-id="I473:959;302:2875">
                Есть ли гарантия на выполненные работы?
              </p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-node-id="I473:959;302:2877" data-name="Icon arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
            </div>
          </button>
          <button className="bg-[var(--colors\/surface\/base\/default,white)] content-stretch flex gap-[10px] items-center p-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="473:960" data-name="FAQ part">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="I473:960;302:2874" data-name="Txt container">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/secondary,#757575)] text-left w-full" data-node-id="I473:960;302:2875">
                Есть ли гарантия на выполненные работы?
              </p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-node-id="I473:960;302:2877" data-name="Icon arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
            </div>
          </button>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]" data-node-id="473:961" data-name="Spacing">
          <div className="border border-[var(--colors\/border\/neutral\/default,#303030)] border-solid content-stretch flex flex-col gap-[28px] items-start p-[24px] relative rounded-[24px] shrink-0 w-full" data-node-id="473:962" data-name="Card">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="473:963">
              <p className="font-['Playfair_Display:Regular'] font-normal leading-[var(--text\/heading\/heading\/line,36px)] relative shrink-0 text-[color:var(--colors\/text\/base\/default,#1e1e1e)] text-[length:var(--text\/heading\/heading\/size,32px)] tracking-[var(--text\/heading\/subheading\/tracking,-1px)] w-full" data-node-id="473:964">
                Остались вопросы?
              </p>
              <p className="font-[family-name:var(--text\/body\/small\/family,'Inter:Regular')] font-[var(--text\/body\/small\/weight,400)] leading-[var(--text\/body\/small\/line,20px)] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/secondary,#757575)] tracking-[var(--text\/body\/small\/tracking,0px)] w-full" data-node-id="473:965">
                Оставьте свою почту и мы обязательно с вами свяжемся. Гарантируем скидку 10% на всю продукцию 😀
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="473:966">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="473:967" data-name="Text field">
                <div className="border border-[#2e7d32] border-solid content-stretch flex gap-[8px] h-[62px] items-center px-[var(--size\/space\/gap\/positive\/base-m,16px)] py-[var(--size\/space\/gap\/positive\/small-xl,12px)] relative rounded-[var(--size\/raduis\/small-xl,12px)] shrink-0 w-full" data-node-id="I473:967;911:1732" data-name="Input">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I473:967;911:1735" data-name="Input info">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] not-italic relative shrink-0 text-[#2e7d32] text-[14px] whitespace-nowrap" data-node-id="I473:967;911:1736">
                      Label
                    </p>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I473:967;911:1737" data-name="Input/Corret">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/default,#1e1e1e)] whitespace-nowrap" data-node-id="I473:967;911:1738">
                        Mail@mail.com
                      </p>
                      <div className="h-[20px] relative shrink-0 w-0" data-node-id="I473:967;911:1739">
                        <div className="absolute inset-[-2.5%_-0.5px]">
                          <img alt="" className="block max-w-none size-full" src={imgVector408} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--size\/space\/gap\/positive\/none,0px)] h-[52px] items-center justify-center px-[var(--size\/space\/gap\/positive\/base-l,20px)] py-[var(--size\/space\/gap\/positive\/small-l,8px)] relative rounded-[var(--size\/raduis\/small-l,8px)] shrink-0 w-full" data-node-id="473:968">
                <p className="[word-break:break-word] font-[family-name:var(--text\/body\/small\/family,'Inter:Regular')] font-[var(--text\/body\/small\/weight,400)] leading-[var(--text\/body\/small\/line,20px)] not-italic relative shrink-0 text-[#2e7d32] text-[length:var(--text\/body\/small\/size,14px)] tracking-[var(--text\/body\/small\/tracking,0px)] whitespace-nowrap" data-node-id="473:969">
                  Отправить
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
