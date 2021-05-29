export const orderBy = (a, b) => {
  const months = [
    "Janeiro de ",
    "Fevereiro de ",
    "Março de ",
    "Abril de ",
    "Maio de ",
    "Junho de ",
    "Julho de ",
    "Agosto de ",
    "Setembro de ",
    "Outubro de ",
    "Novembro de ",
    "Dezembro de ",
  ];

  const yearA = months
    .map((month) => a.edition.includes(month) && a.edition.replace(month, ""))
    .filter(Boolean)
    .toString();

  const yearB = months
    .map((month) => b.edition.includes(month) && b.edition.replace(month, ""))
    .filter(Boolean)
    .toString();

  const monthA = months
    .map((month) => a.edition.includes(month) && a.edition.replace(yearA, ""))
    .filter(Boolean)
    .toString();

  const monthB = months
    .map((month) => b.edition.includes(month) && b.edition.replace(yearB, ""))
    .filter(Boolean)
    .toString();

  if (yearA !== yearB) {
    return yearA - yearB;
  } else {
    return months.indexOf(monthA) - months.indexOf(monthB);
  }
};
