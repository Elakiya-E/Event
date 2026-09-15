"use client";

import React, { useState, useId } from "react";
import { siteContent } from "@/data/siteContent";
import {
  Calendar,
  Phone,
  User,
  MapPin,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface FormValues {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  guestCount: string;
  services: string[];
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  venue?: string;
  guestCount?: string;
  general?: string;
}

export default function EventEnquiryForm() {
  const formId = useId();
  const content = siteContent.footer.contactForm;

  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    venue: "",
    guestCount: "",
    services: [],
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validatePhone = (phoneStr: string): boolean => {
    const cleaned = phoneStr.replace(/[\s\-\(\)\+]/g, "");
    return cleaned.length >= 10 && /^\d+$/.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (values.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!values.phone.trim()) {
      newErrors.phone = "Please enter your phone or WhatsApp number.";
    } else if (!validatePhone(values.phone)) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    field: keyof FormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "name" && !values.name.trim()) {
      setErrors((prev) => ({ ...prev, name: "Please enter your name." }));
    }
    if (field === "phone" && values.phone.trim() && !validatePhone(values.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number (at least 10 digits).",
      }));
    }
  };

  const toggleService = (service: string) => {
    setValues((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleBudgetSelect = (budget: string) => {
    setValues((prev) => ({
      ...prev,
      budget: prev.budget === budget ? "" : budget,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: values.name.trim(),
        phone: values.phone.trim(),
        eventType: values.eventType || "Not specified",
        eventDate: values.eventDate || "Not specified",
        venue: values.venue.trim() || "Not specified",
        guestCount: values.guestCount.trim() || "Not specified",
        services: values.services.length > 0 ? values.services : ["Not specified"],
        budget: values.budget || "Not Decided",
        message: values.message.trim() || "",
        submittedAt: new Date().toISOString(),
      };

      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSuccess(true);
      setIsSubmitting(false);

      setValues({
        name: "",
        phone: "",
        eventType: "",
        eventDate: "",
        venue: "",
        guestCount: "",
        services: [],
        budget: "",
        message: "",
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      setIsSubmitting(false);
      setErrors({
        general:
          "Unable to submit enquiry right now. Please call or WhatsApp us directly at 90424 29868.",
      });
    }
  };

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <div
      id="contact-form"
      className="relative rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md space-y-6 sm:space-y-8 transition-shadow duration-300"
    >
      {/* ── Form Header ── */}
      <div className="border-b border-[#DED6C9] pb-4 sm:pb-5 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C7A978]/30 bg-[#F1EADF]/70 text-[#C7A978] text-[11px] font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Custom Event Planning</span>
        </div>

        <h3 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-[#292825] tracking-tight">
          Let&apos;s Plan Your Event
        </h3>

        <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed max-w-xl">
          {content.subtitle}
        </p>

        <p className="text-[11px] text-[#928B81] font-mono">
          Fields marked with <span className="text-[#C7A978] font-bold">*</span> are required.
        </p>
      </div>

      {/* ── Success Confirmation Banner ── */}
      {isSuccess && (
        <div
          role="alert"
          className="p-5 rounded-2xl bg-[#AEBBAA]/20 border border-[#4F918B]/50 text-[#292825] flex items-start gap-3.5 animate-fadeIn"
        >
          <CheckCircle2 className="w-5 h-5 text-[#4F918B] flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm">
            <h4 className="font-bold text-[#292825]">Thank you! Your event plan request is ready.</h4>
            <p className="text-[#6F6A61] font-light">
              Our team will review your requirements and get in touch via WhatsApp / Phone to discuss the next step.
            </p>
          </div>
        </div>
      )}

      {/* ── General Error Banner ── */}
      {errors.general && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-[#C7A978]/10 border border-[#C7A978]/60 text-[#6F6A61] flex items-center gap-3 text-xs md:text-sm"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#C7A978]" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* ── Enquiry Form ── */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Row 1: Your Name & WhatsApp / Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {/* Field 1: Your Name */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-name`}
              className="text-xs font-mono uppercase tracking-wider text-[#292825] flex items-center justify-between"
            >
              <span>
                Your Name <span className="text-[#C7A978]">*</span>
              </span>
              <User className="w-3.5 h-3.5 text-[#928B81]" />
            </label>
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${formId}-name-err` : undefined}
              placeholder="e.g. Rajesh Kumar"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              className={`w-full bg-[#F7F3EA] border p-3.5 rounded-xl text-sm text-[#292825] placeholder-[#928B81] transition-colors focus:outline-none ${
                errors.name
                  ? "border-[#C77778]/80 focus:border-[#C77778] ring-1 ring-[#C77778]/30"
                  : "border-[#DED6C9] focus:border-[#4F918B] focus:ring-1 focus:ring-[#4F918B]/30"
              }`}
            />
            {errors.name && (
              <p
                id={`${formId}-name-err`}
                role="alert"
                className="text-xs text-[#C77778] flex items-center gap-1.5 pt-0.5"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Field 2: WhatsApp / Phone Number */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-phone`}
              className="text-xs font-mono uppercase tracking-wider text-[#292825] flex items-center justify-between"
            >
              <span>
                WhatsApp / Phone Number <span className="text-[#C7A978]">*</span>
              </span>
              <Phone className="w-3.5 h-3.5 text-[#928B81]" />
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${formId}-phone-err` : undefined}
              placeholder="e.g. 90424 29868"
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              className={`w-full bg-[#F7F3EA] border p-3.5 rounded-xl text-sm text-[#292825] placeholder-[#928B81] transition-colors focus:outline-none ${
                errors.phone
                  ? "border-[#C77778]/80 focus:border-[#C77778] ring-1 ring-[#C77778]/30"
                  : "border-[#DED6C9] focus:border-[#4F918B] focus:ring-1 focus:ring-[#4F918B]/30"
              }`}
            />
            {errors.phone && (
              <p
                id={`${formId}-phone-err`}
                role="alert"
                className="text-xs text-[#C77778] flex items-center gap-1.5 pt-0.5"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: What are you planning? & Event Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {/* Field 3: What are you planning? */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-eventType`}
              className="text-xs font-mono uppercase tracking-wider text-[#292825]"
            >
              What are you planning?
            </label>
            <div className="relative">
              <select
                id={`${formId}-eventType`}
                name="eventType"
                value={values.eventType}
                onChange={(e) => handleChange("eventType", e.target.value)}
                className="w-full bg-[#F7F3EA] border border-[#DED6C9] p-3.5 rounded-xl text-sm text-[#292825] focus:outline-none focus:border-[#4F918B] focus:ring-1 focus:ring-[#4F918B]/30 transition-colors appearance-none pr-10"
              >
                <option value="" className="bg-[#FCFAF6] text-[#928B81]">
                  Select Event Type (Optional)
                </option>
                {content.eventTypes.map((type, i) => (
                  <option key={i} value={type} className="bg-[#FCFAF6] text-[#292825]">
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#928B81]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Field 4: Event Date */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-eventDate`}
              className="text-xs font-mono uppercase tracking-wider text-[#292825] flex items-center justify-between"
            >
              <span>Event Date</span>
              <Calendar className="w-3.5 h-3.5 text-[#928B81]" />
            </label>
            <input
              id={`${formId}-eventDate`}
              name="eventDate"
              type="date"
              min={todayDate}
              value={values.eventDate}
              onChange={(e) => handleChange("eventDate", e.target.value)}
              className="w-full bg-[#F7F3EA] border border-[#DED6C9] p-3.5 rounded-xl text-sm text-[#292825] focus:outline-none focus:border-[#4F918B] focus:ring-1 focus:ring-[#4F918B]/30 transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Venue / Location & Approximate Guest Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {/* Field 5: Venue / Location */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-venue`}
              className="text-xs font-mono uppercase tracking-wider text-[#292825] flex items-center justify-between"
            >
              <span>Venue / Location</span>
              <MapPin className="w-3.5 h-3.5 text-[#928B81]" />
            </label>
            <input
              id={`${formId}-venue`}
              name="venue"
              type="text"
              placeholder="e.g. Nagercoil, Kanyakumari, Hall Name"
              value={values.venue}
              onChange={(e) => handleChange("venue", e.target.value)}
              className="w-full bg-[#F7F3EA] border border-[#DED6C9] p-3.5 rounded-xl text-sm text-[#292825] placeholder-[#928B81] focus:outline-none focus:border-[#4F918B] focus:ring-1 focus:ring-[#4F918B]/30 transition-colors"
            />
          </div>

          {/* Field 6: Approximate Guest Count */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-guestCount`}
              className="text-xs font-mono uppercase tracking-wider text-[#292825] flex items-center justify-between"
            >
              <span>Approximate Guest Count</span>
              <Users className="w-3.5 h-3.5 text-[#928B81]" />
            </label>
            <input
              id={`${formId}-guestCount`}
              name="guestCount"
              type="text"
              placeholder="e.g. 50, 200, 1000+"
              value={values.guestCount}
              onChange={(e) => handleChange("guestCount", e.target.value)}
              className="w-full bg-[#F7F3EA] border border-[#DED6C9] p-3.5 rounded-xl text-sm text-[#292825] placeholder-[#928B81] focus:outline-none focus:border-[#4F918B] focus:ring-1 focus:ring-[#4F918B]/30 transition-colors"
            />
          </div>
        </div>

        {/* Field 7: What do you need? (Services Selection) */}
        <div className="space-y-2.5 pt-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[#292825] block">
            What do you need?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {content.services.map((service, idx) => {
              const isSelected = values.services.includes(service);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleService(service)}
                  aria-pressed={isSelected}
                  className={`p-2.5 sm:p-3 rounded-xl border text-[11px] sm:text-xs text-left transition-all duration-200 flex items-center justify-between min-h-[44px] ${
                    isSelected
                      ? "bg-[#F1EADF] border-[#4F918B]/60 text-[#292825] shadow-sm"
                      : "bg-[#F7F3EA] border-[#DED6C9] text-[#6F6A61] hover:text-[#292825] hover:border-[#C7A978]/60"
                  }`}
                >
                  <span className="truncate">{service}</span>
                  {isSelected && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0 ml-1.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Field 8: Approximate Budget */}
        <div className="space-y-2.5 pt-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[#292825] block">
            Approximate Budget
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {content.budgets.map((b, idx) => {
              const isSelected = values.budget === b;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleBudgetSelect(b)}
                  aria-pressed={isSelected}
                  className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono tracking-wider uppercase border transition-all min-h-[38px] ${
                    isSelected
                      ? "bg-[#4F918B] text-[#FCFAF6] font-bold border-[#4F918B] shadow-md shadow-[#4F918B]/15"
                      : "bg-[#F7F3EA] border-[#DED6C9] text-[#6F6A61] hover:border-[#C7A978]/60 hover:text-[#292825]"
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>

        {/* Field 9: Tell us about your event */}
        <div className="space-y-1.5 pt-2">
          <label
            htmlFor={`${formId}-message`}
            className="text-xs font-mono uppercase tracking-wider text-[#292825]"
          >
            Tell us about your event
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            placeholder="Share your ideas, expectations, special requirements, or themes you imagine..."
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full bg-[#F7F3EA] border border-[#DED6C9] p-3.5 rounded-xl text-sm text-[#292825] placeholder-[#928B81] focus:outline-none focus:border-[#4F918B] focus:ring-1 focus:ring-[#4F918B]/30 transition-colors"
          />
        </div>

        {/* ── Submit Action ── */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-9 py-4 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 shadow-lg shadow-[#4F918B]/15 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] min-h-[48px]"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-[#FCFAF6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>SUBMITTING...</span>
              </span>
            ) : (
              <span>GET MY CUSTOM EVENT PLAN →</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
