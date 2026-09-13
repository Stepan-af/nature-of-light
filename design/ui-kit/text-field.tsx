const imgArrow1 = "assets/icon-textfield-arrow.svg";
const imgVector408 = "assets/input-caret.svg";

type TextFieldProps = {
  className?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  state?: "Default" | "Hovered" | "Focused" | "Error" | "Field";
  text?: string;
};

export default function TextField({ className, leftIcon = false, rightIcon = false, state = "Default", text = "Mail@mail.com" }: TextFieldProps) {
  const isError = state === "Error";
  const isField = state === "Field";
  const isFocused = state === "Focused";
  const isFocusedOrError = ["Focused", "Error"].includes(state);
  const isHovered = state === "Hovered";
  return (
    <div className={className || `content-stretch flex flex-col gap-[8px] items-start relative w-[390px] ${isField ? "h-[62px]" : ""}`} id={isField ? "node-302_3261" : isError ? "node-302_3248" : isFocused ? "node-302_3235" : isHovered ? "node-302_3224" : "node-302_3213"}>
      <div className={`${String.raw`border border-solid content-stretch flex gap-[8px] h-[62px] items-center px-[var(--size\/space\/gap\/positive\/base-m,16px)] py-[var(--size\/space\/gap\/positive\/small-xl,12px)] relative rounded-[var(--size\/raduis\/small-xl,12px)] shrink-0 w-full `}${isError ? String.raw`border-[var(--colors\/border\/danger\/tetriary,#ec221f)]` : isFocused ? "border-[#963eb9]" : isHovered ? String.raw`bg-[var(--colors\/surface\/base\/default-hover,#efefef)] border-[#963eb9]` : "border-[#2e7d32]"}`} id={isField ? "node-302_3262" : isError ? "node-302_3249" : isFocused ? "node-302_3236" : isHovered ? "node-302_3225" : "node-302_3214"} data-name="Input">
        {leftIcon && (
          <div className="content-stretch flex h-full items-center justify-center p-[10px] relative shrink-0 w-[24px]" data-node-id="302:3215" data-name="Icon arrow">
            <div className="flex h-[19px] items-center justify-center relative shrink-0 w-0" data-node-id="302:3216">
              <div className="-rotate-90 flex-none">
                <div className="h-0 relative w-[19px]">
                  <div className="absolute inset-[-3.68px_-2.63%_-3.68px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgArrow1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" id={isField ? "node-302_3265" : isError ? "node-302_3252" : isFocused ? "node-302_3239" : isHovered ? "node-302_3228" : "node-302_3217"} data-name="Input info">
          {["Default", "Hovered"].includes(state) && (
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] min-w-full not-italic relative shrink-0 text-[#9a9a9a] text-[16px] w-[min-content]" data-node-id="302:3219">
              {text}
            </p>
          )}
          {isFocusedOrError && (
            <>
              <p className={`[word-break:break-word] font-["Inter:Medium"] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${isError ? String.raw`text-[color:var(--colors\/text\/danger\/tetriary,#ec221f)]` : "text-[#2e7d32]"}`} id={isError ? "node-302_3253" : "node-302_3240"}>
                Label
              </p>
              <div className="content-stretch flex items-center relative shrink-0 w-full" id={isError ? "node-302_3254" : "node-302_3241"} data-name="Input/Corret">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/default,#1e1e1e)] whitespace-nowrap" data-node-id="302:3242">
                  {text}
                </p>
                {isFocused && (
                  <div className="h-[20px] relative shrink-0 w-0" data-node-id="302:3243">
                    <div className="absolute inset-[-2.5%_-0.5px]">
                      <img alt="" className="block max-w-none size-full" src={imgVector408} />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {isField && (
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/base\/default,#1e1e1e)] w-[min-content]" data-node-id="302:3267">
              {text}
            </p>
          )}
        </div>
        {rightIcon && (
          <div className="content-stretch flex h-full items-center justify-center p-[10px] relative shrink-0 w-[24px]" data-node-id="302:3220" data-name="Icon arrow">
            <div className="flex h-[19px] items-center justify-center relative shrink-0 w-0" data-node-id="302:3221">
              <div className="-rotate-90 flex-none">
                <div className="h-0 relative w-[19px]">
                  <div className="absolute inset-[-3.68px_-2.63%_-3.68px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgArrow1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isError && (
        <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="302:3259" data-name="Txt container">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[18px] min-w-px not-italic relative text-[14px] text-[color:var(--colors\/text\/danger\/tetriary,#ec221f)]" data-node-id="302:3260">
            Supporting text
          </p>
        </div>
      )}
    </div>
  );
}
