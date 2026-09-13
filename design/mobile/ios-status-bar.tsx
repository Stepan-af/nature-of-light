// NOTE (extraction): node 480:1202 "Component 7" is the iOS STATUS BAR mock (time 9:41, notch, signal/wifi/battery),
// not a site component. Do NOT implement it. The site's mobile header is 480:1203 (logo + wordmark) + the burger
// instance (see ui-kit/mobile-menu) — described in mobile/header-menu.notes.md.
const imgCellularConnection = "assets/ios-statusbar-cellular.svg";
const imgWifi = "assets/ios-statusbar-wifi-icon.svg";
const imgBattery = "assets/ios-statusbar-battery-icon.svg";

export default function Component7({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32.242px] relative w-[370px]"} data-node-id="480:1202" data-name="Component 7">
      <div className="absolute contents inset-[31.02%_0_0.75%_0.54%]" data-node-id="480:1189">
        <div className="absolute content-stretch flex inset-[31.02%_70.27%_0.75%_0.54%] items-center justify-center pt-[2px]" data-node-id="480:1190" data-name="Time">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold'] font-[590] leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.98)] text-center whitespace-nowrap" data-node-id="480:1191" style={{ fontVariationSettings: '"wdth" 100' }}>
            9:41
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[7px] inset-[31.02%_0_0.75%_70.81%] items-center justify-center pt-px" data-node-id="480:1192" data-name="Levels">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-node-id="480:1193" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-node-id="480:1194" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="h-[13px] relative shrink-0 w-[27.328px]" data-node-id="480:1195" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
        </div>
      </div>
      <div className="absolute bg-black inset-[18.61%_35.34%_-18.61%_35.14%] rounded-[45.005px]" data-node-id="480:1199" />
    </div>
  );
}
