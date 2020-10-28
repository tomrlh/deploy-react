import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CustomLocale = {
  // months list by order
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Ocutubro",
    "Novembro",
    "Dezembro",
  ],

  // week days by order
  weekDays: [
    {
      name: "Domingo", // used for accessibility
      short: "S", // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: "Segunda",
      short: "M",
    },
    {
      name: "Terça",
      short: "T",
    },
    {
      name: "Quarta",
      short: "W",
    },
    {
      name: "Quinta",
      short: "T",
    },
    {
      name: "Sexta",
      short: "F",
    },
    {
      name: "Sábado",
      short: "S",
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: any) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: { year: number; month: number; day: number | undefined }) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: { year: number; month: number }) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit: any) {
    return digit;
  },

  // texts in the date picker
  nextMonth: "Próximo mês",
  previousMonth: "Mês anterior",
  openMonthSelector: "Selecionar mês",
  openYearSelector: "Open Year Selector",
  closeMonthSelector: "Fechar mês",
  closeYearSelector: "Fechar ano",
  defaultPlaceholder: "Selecionar...",

  // for input range value
  from: "de",
  to: "para",

  // used for input value when multi dates are selected
  digitSeparator: ",",

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};

export default CustomLocale;
