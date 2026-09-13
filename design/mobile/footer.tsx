const imgContainer = "assets/logo-mark.jpg";

type ComponentProps = {
  className?: string;
  property1?: "Default";
};

function Component({ className, property1 = "Default" }: ComponentProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[65px]"} data-node-id="293:1831">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1814">
        Соцсети
      </p>
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "Default";
};

function Component1({ className, property1 = "Default" }: Component1Props) {
  return (
    <div className={className || "h-[14px] relative w-[59px]"} data-node-id="293:1827">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular'] font-normal inset-0 leading-[13.5px] text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1812">
        Партнёрам
      </p>
    </div>
  );
}

type Component2Props = {
  className?: string;
  property1?: "Default";
};

function Component2({ className, property1 = "Default" }: Component2Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[59px]"} data-node-id="293:1823">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1811">
        Компания
      </p>
    </div>
  );
}

type Component3Props = {
  className?: string;
  property1?: "Default";
};

function Component3({ className, property1 = "Default" }: Component3Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[66px]"} data-node-id="293:1819">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.25)] tracking-[1.26px] uppercase whitespace-nowrap" data-node-id="293:1809">
        Продукция
      </p>
    </div>
  );
}

export default function Component4({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#0a0b09] content-stretch flex flex-col h-[438px] items-start overflow-clip relative w-[402px]"} data-node-id="487:1603" data-name="ФУТЕР МОБИЛКИ">
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[17px] items-start left-[calc(50%+0.5px)] top-[32px]" data-node-id="487:1538">
        <div className="content-stretch flex flex-col h-[115px] items-start relative shrink-0 w-[148px]" data-node-id="487:1539" data-name="Container">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="487:1540" data-name="Container">
            <div className="border border-[rgba(255,255,255,0.1)] border-solid relative rounded-[7px] shrink-0 size-[28px]" data-node-id="487:1541" data-name="Container">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7px] size-full" src={imgContainer} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="487:1542" data-name="Text">
              <p className="[word-break:break-word] font-['Playfair_Display:Bold'] font-bold leading-[21px] relative shrink-0 text-[10px] text-white whitespace-nowrap" data-node-id="487:1543">
                Природа Света
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start pb-[18px] pt-[14px] relative shrink-0" data-node-id="487:1544" data-name="Paragraph:margin">
            <p className="font-['DM_Sans:Regular'] font-normal leading-[13px] relative shrink-0 text-[8px] text-[rgba(255,255,255,0.35)] w-[133px]" data-node-id="487:1545" style={{ fontVariationSettings: '"opsz" 14' }}>
              Производство светопрозрачных конструкций с 2009 года. Москва и Подмосковье.
            </p>
            <p className="font-['DM_Sans:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.8)] whitespace-nowrap" data-node-id="487:1546" style={{ fontVariationSettings: '"opsz" 14' }}>
              +7 (495) 123-45-67
            </p>
          </div>
          <div className="h-[24.5px] relative shrink-0 w-full" data-node-id="487:1547" data-name="Container" />
        </div>
        <div className="content-stretch flex flex-col h-[148px] items-start relative shrink-0 w-[98px]" data-node-id="487:1548" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="487:1549" data-name="Container">
            <Component3 className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]" />
          </div>
          <div className="content-stretch flex flex-col h-[30px] items-start justify-center pt-[10px] relative shrink-0 w-[85px]" data-node-id="487:1551" data-name="Button">
            <div className="content-stretch flex flex-col h-[36px] items-start justify-center pt-[16px] relative shrink-0 w-[64px]" data-node-id="487:1552" data-name="футер козырьки">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1552;288:1125" style={{ fontVariationSettings: '"opsz" 14' }}>
                Козырьки
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[25px] items-start justify-center pt-[10px] relative shrink-0 w-[85px]" data-node-id="487:1553" data-name="футер зимние сады">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1553;288:1127" style={{ fontVariationSettings: '"opsz" 14' }}>
              Зимние сады
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[30px] items-start justify-center pt-[10px] relative shrink-0 w-[49px]" data-node-id="487:1554" data-name="футер навесы">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1554;288:1129" style={{ fontVariationSettings: '"opsz" 14' }}>
              Навесы
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[27px] items-start justify-center py-[10px] relative shrink-0 w-[82px]" data-node-id="487:1555" data-name="футер весь каталог">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1555;288:1131" style={{ fontVariationSettings: '"opsz" 14' }}>
              Весь каталог
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[7px] h-[148px] items-start relative shrink-0 w-[61px]" data-node-id="487:1556" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="487:1557" data-name="Container">
            <Component2 className="content-stretch flex flex-col items-start relative shrink-0 w-[59px]" />
          </div>
          <div className="content-stretch flex flex-col h-[20px] items-start justify-center pt-[10px] relative shrink-0 w-full" data-node-id="487:1560" data-name="футер портфолио">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1560;288:1154" style={{ fontVariationSettings: '"opsz" 14' }}>
              Портфолио
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[18px] items-start justify-center pt-[10px] relative shrink-0 w-[43px]" data-node-id="487:1561" data-name="футер услуги">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1561;288:1156" style={{ fontVariationSettings: '"opsz" 14' }}>
              Услуги
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[25px] items-start justify-center py-[10px] relative shrink-0 w-[61px]" data-node-id="487:1562" data-name="футер контакты">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1562;288:1158" style={{ fontVariationSettings: '"opsz" 14' }}>
              Контакты
            </p>
          </div>
        </div>
      </div>
      <div className="absolute border-[rgba(255,255,255,0.07)] border-solid border-t content-stretch flex items-center left-[23px] pt-[20px] top-[276px] w-[340px]" data-node-id="487:1576" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="487:1577" data-name="Text">
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16.5px] relative shrink-0 text-[6px] text-[rgba(255,255,255,0.2)] whitespace-nowrap" data-node-id="487:1578" style={{ fontVariationSettings: '"opsz" 14' }}>
            © 2026 ООО «Природа Света». Все права защищены.
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[20px] items-start left-[195px] top-[20px]" data-node-id="487:1579" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="487:1580" data-name="Text">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16.5px] relative shrink-0 text-[6px] text-[rgba(255,255,255,0.2)] whitespace-nowrap" data-node-id="487:1581" style={{ fontVariationSettings: '"opsz" 14' }}>
              Политика конфиденциальности
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="487:1582" data-name="Text">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[16.5px] relative shrink-0 text-[6px] text-[rgba(255,255,255,0.2)] whitespace-nowrap" data-node-id="487:1583" style={{ fontVariationSettings: '"opsz" 14' }}>
              Реквизиты
            </p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Playfair_Display:ExtraBold'] font-extrabold h-[131px] leading-[162px] left-[calc(50%-196px)] text-[53px] text-[rgba(255,255,255,0.06)] top-[307px] tracking-[-5.4px] w-[438px]" data-node-id="487:1584">
        ПРИРОДА СВЕТА
      </p>
      <div className="absolute content-stretch flex gap-[41px] items-start left-[31px] top-[169px]" data-node-id="591:1629">
        <div className="content-stretch flex flex-col h-[107px] items-start relative shrink-0 w-[119px]" data-node-id="487:1563" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="487:1564" data-name="Container">
            <Component1 className="h-[14px] mb-[-1px] relative shrink-0 w-[59px]" />
            <div className="content-stretch flex flex-col h-[26px] items-start justify-center mb-[-1px] pt-[16px] relative shrink-0 w-[143px]" data-node-id="487:1566" data-name="футер дилерская программа">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1566;288:1177" style={{ fontVariationSettings: '"opsz" 14' }}>
                Дилерская программа
              </p>
            </div>
            <div className="content-stretch flex flex-col h-[19px] items-start justify-center pt-[10px] relative shrink-0 w-[123px]" data-node-id="487:1567" data-name="футер прайс для дилеров">
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1567;288:1179" style={{ fontVariationSettings: '"opsz" 14' }}>
                Прайс для дилеров
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[76px] items-start relative shrink-0 w-[73px]" data-node-id="487:1570" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="487:1571" data-name="Container">
            <Component className="content-stretch flex flex-col items-start relative shrink-0 w-[65px]" />
          </div>
          <div className="content-stretch flex flex-col h-[27px] items-start justify-center pt-[16px] relative shrink-0 w-[55px]" data-node-id="487:1573" data-name="футер телега">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[19.5px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1573;288:1202" style={{ fontVariationSettings: '"opsz" 14' }}>
              Telegram
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[25px] items-start justify-center pt-[10px] relative shrink-0 w-[64px]" data-node-id="487:1574" data-name="Button">
            <div className="h-[20px] relative shrink-0 w-[64px]" data-node-id="487:1575" data-name="футер вотцап">
              <p className="[word-break:break-word] absolute font-['DM_Sans:Regular'] font-normal inset-0 leading-[19.5px] text-[10px] text-[rgba(255,255,255,0.45)] whitespace-nowrap" data-node-id="I487:1575;288:1204" style={{ fontVariationSettings: '"opsz" 14' }}>
                WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
