const format = (date, locale, options) =>
  new Intl.DateTimeFormat(locale, options).format(date);

export const fechaFormato = (fecha) => {
  const now = new Date(fecha);
  return format(now, "es");
};
export const fechaFormatoFull = (fecha) => {
  const now = new Date(fecha);
  return format(now, "es", { dateStyle: "long" });
};

export const fechaFormatoShort = (fecha) => {
  const now = new Date(fecha);
  return format(now, "es", { dateStyle: "short", day: "numeric" });
};
