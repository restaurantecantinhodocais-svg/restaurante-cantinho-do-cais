import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const DAYS_OF_WEEK_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const DAYS_OF_WEEK_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_OF_WEEK_DE = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

const MONTHS_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const MONTHS_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_DE = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];

export default function ReservationsSection() {
  const { t, i18n } = useTranslation();
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const lang = i18n.language;
  const daysOfWeek = lang === "de" ? DAYS_OF_WEEK_DE : lang === "en" ? DAYS_OF_WEEK_EN : DAYS_OF_WEEK_PT;
  const months = lang === "de" ? MONTHS_DE : lang === "en" ? MONTHS_EN : MONTHS_PT;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const handleDayClick = (day: number) => {
    const date = new Date(year, month, day);
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return;
    setSelectedDay(date);
    setModalOpen(true);
  };

  const formatDateLong = (date: Date) => {
    const d = date.getDate();
    const m = months[date.getMonth()];
    const y = date.getFullYear();
    return `${d} ${m} ${y}`;
  };

  const isToday = (day: number) =>
    day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const isSelected = (day: number) =>
    selectedDay !== null &&
    day === selectedDay.getDate() &&
    month === selectedDay.getMonth() &&
    year === selectedDay.getFullYear();

  const isPast = (day: number) => {
    const date = new Date(year, month, day);
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  return (
    <section id="reservations" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal inline-block text-amber-700 text-xs font-semibold tracking-widest uppercase mb-4" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("reservations_label")}
          </span>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-stone-900 mb-3" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("reservations_title")}
          </h2>
          <p className="reveal text-stone-500" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("reservations_subtitle")}
          </p>
        </div>

        {/* Calendar */}
        <div className="reveal bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-600 hover:border-amber-600 hover:text-amber-700 transition-all cursor-pointer"
              aria-label={t("reservations_prev_month")}
            >
              <i className="ri-arrow-left-s-line text-xl" />
            </button>
            <h3 className="font-serif text-xl font-semibold text-stone-900">
              {months[month]} {year}
            </h3>
            <button
              onClick={nextMonth}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-600 hover:border-amber-600 hover:text-amber-700 transition-all cursor-pointer"
              aria-label={t("reservations_next_month")}
            >
              <i className="ri-arrow-right-s-line text-xl" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 mb-2">
            {daysOfWeek.map((d) => (
              <div key={d} className="text-center text-xs font-semibold text-stone-400 uppercase tracking-wide py-2">
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: totalCells }).map((_, idx) => {
              const day = idx - firstDay + 1;
              const valid = day >= 1 && day <= daysInMonth;
              if (!valid) return <div key={idx} />;
              const past = isPast(day);
              const today_ = isToday(day);
              const selected = isSelected(day);
              return (
                <button
                  key={idx}
                  onClick={() => !past && handleDayClick(day)}
                  disabled={past}
                  className={`
                    aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer
                    ${past ? "text-stone-300 cursor-not-allowed" : "hover:bg-amber-100 hover:text-amber-800"}
                    ${today_ && !selected ? "border-2 border-amber-400 text-amber-700" : ""}
                    ${selected ? "bg-amber-600 text-white hover:bg-amber-700" : ""}
                    ${!past && !selected && !today_ ? "text-stone-700" : ""}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedDay && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-serif text-2xl text-stone-900 font-semibold">
                  {t("reservations_modal_title")}
                </h3>
                <p className="text-amber-700 font-semibold mt-1">{formatDateLong(selectedDay)}</p>
                <p className="text-stone-500 text-sm mt-1">{t("reservations_modal_subtitle")}</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-all cursor-pointer"
              >
                <i className="ri-close-line text-lg" />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Phone Option */}
              <div className="border border-stone-200 rounded-xl p-6 hover:border-amber-300 transition-all text-center">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <i className="ri-phone-line text-xl" />
                  </div>
                  <h4 className="font-semibold text-stone-900 text-lg">{t("reservations_phone_title")}</h4>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{t("reservations_phone_desc")}</p>
                <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
                  <span className="font-serif text-2xl font-bold text-stone-900">296 442 631</span>
                  <a
                    href="tel:296442631"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap text-sm"
                  >
                    {t("reservations_phone_cta")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}