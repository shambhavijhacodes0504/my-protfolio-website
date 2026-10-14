'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import { links } from '@/config';
import { RevealHeading, RevealSubheading, RevealContent } from '@/components/ui/scroll-reveal';

export const ContactSection: React.FC = () => {
  // Direct inquiries state
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    status: 'draft_opened' | 'copied_draft' | null;
    message: string;
  }>({ status: null, message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.ownerEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Truthful fallback: Open prefilled mail draft
    const formattedSubject = `[Portfolio Inquiry] ${formData.subject.trim()}`;
    const formattedBody = `Hello Shambhavi,\n\n${formData.message.trim()}\n\n---\nSender: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;
    const mailtoUrl = `mailto:${links.ownerEmail}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;

    // Trigger mail client
    window.location.href = mailtoUrl;

    setSubmissionFeedback({
      status: 'draft_opened',
      message:
        'Email client draft opened with your prefilled message. Review and hit send to complete transmission.',
    });
  };

  const handleCopyFormattedDraft = async () => {
    const textToCopy = `To: ${links.ownerEmail}\nSubject: [Portfolio Inquiry] ${formData.subject.trim()}\nFrom: ${formData.name.trim()} (${formData.email.trim()})\n\n${formData.message.trim()}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setSubmissionFeedback({
        status: 'copied_draft',
        message: 'Formatted message text copied to clipboard! You can paste it into any email client.',
      });
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full">
      {/* Centered Heading with blue accent */}
      <div className="flex flex-col items-center text-center">
        <RevealHeading as="h2">
          <h2 className="heading max-w-2xl font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white">
            Let&apos;s build something{' '}
            <span className="text-sky-400">meaningful.</span>
          </h2>
        </RevealHeading>

        <RevealSubheading>
          <p className="mt-4 max-w-xl text-center text-sm leading-relaxed text-neutral-300 sm:text-base md:mt-5">
            Interested in applied AI, machine learning, data science, or research collaboration? I&apos;d be glad to connect.
          </p>
        </RevealSubheading>
      </div>

      {/* Two-Column Contact Panels */}
      <RevealContent delay={0.25} className="mt-12 sm:mt-16 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* ========================================================= */}
          {/* LEFT PANEL: Direct Inquiries & Collaboration */}
          {/* ========================================================= */}
          <div className="spotlight-card flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#080d19]/90 p-6 sm:p-8 backdrop-blur-xl lg:col-span-5 shadow-2xl">
            <div>
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-sky-400">
                  01 / DIRECT CHANNELS
                </span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </div>

              {/* Title & Copy */}
              <h3 className="font-sans text-xl font-bold text-white sm:text-2xl">
                Direct Inquiries &amp; Collaboration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Whether you&apos;d like to discuss a machine learning project, computer vision, recommendation systems, or research collaboration, I&apos;d be happy to hear from you.
              </p>

              {/* Primary Email Card */}
              <div className="spotlight-card interactive-hover mt-6 rounded-xl border border-white/[0.08] bg-black/40 p-4">
                <div className="flex items-center gap-2.5 text-neutral-400">
                  <FaEnvelope className="text-sky-400 text-sm" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                    Primary Email
                  </span>
                </div>
                <p className="mt-2 font-mono text-sm sm:text-base font-semibold text-white break-all select-all">
                  {links.ownerEmail}
                </p>

                {/* Email Action Buttons */}
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.05] px-4 py-2 font-sans text-xs font-semibold text-neutral-200 hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <FaCheck className="text-emerald-400 text-xs" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-neutral-400 text-xs" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${links.ownerEmail}`}
                    className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-2 font-sans text-xs font-semibold text-sky-300 hover:border-sky-500/70 hover:bg-sky-500/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <FaEnvelope className="text-xs" />
                    <span>Email Directly</span>
                    <FaArrowUpRightFromSquare className="text-[10px]" />
                  </a>
                </div>
              </div>

              {/* Profiles & Links */}
              <div className="mt-6 space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Professional Profiles &amp; Code
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href={links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="spotlight-card group flex items-center justify-between rounded-xl border border-white/[0.08] bg-black/30 p-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="interactive-circle flex size-8 items-center justify-center rounded-lg border border-white/[0.1] bg-black text-neutral-300 group-hover:text-white">
                        <FaGithub className="text-base" />
                      </div>
                      <div>
                        <p className="font-sans text-xs font-bold text-white">GitHub</p>
                        <p className="font-mono text-[10px] text-neutral-400">Repositories</p>
                      </div>
                    </div>
                    <FaArrowUpRightFromSquare className="text-xs text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400" />
                  </Link>

                  <Link
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="spotlight-card group flex items-center justify-between rounded-xl border border-white/[0.08] bg-black/30 p-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="interactive-circle flex size-8 items-center justify-center rounded-lg border border-white/[0.1] bg-black text-neutral-300 group-hover:text-white">
                        <FaLinkedinIn className="text-sm" />
                      </div>
                      <div>
                        <p className="font-sans text-xs font-bold text-white">LinkedIn</p>
                        <p className="font-mono text-[10px] text-neutral-400">Academic profile</p>
                      </div>
                    </div>
                    <FaArrowUpRightFromSquare className="text-xs text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Availability Footer Strip */}
            <div className="mt-8 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-neutral-300">
                  Open for AI/ML projects &amp; academic collaboration
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-neutral-400">
                Birla Institute of Technology, Mesra · Ranchi, India (IST / UTC+5:30)
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT PANEL: Contact Form */}
          {/* ========================================================= */}
          <div className="spotlight-card flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#080d19]/90 p-6 sm:p-8 backdrop-blur-xl lg:col-span-7 shadow-2xl">
            <div>
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-sky-400">
                  02 / SEND A MESSAGE
                </span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </div>

              <h3 className="font-sans text-xl font-bold text-white sm:text-2xl">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-neutral-300">
                Fill in the details below to generate a direct email message.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Your Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-neutral-300"
                    >
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Smith"
                      required
                      className={`mt-1.5 w-full rounded-lg border bg-black/50 px-3.5 py-2.5 font-sans text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/50 ${
                        errors.name
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-white/[0.1] focus:border-sky-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-mono text-[11px] text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Your Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-neutral-300"
                    >
                      Your Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      required
                      className={`mt-1.5 w-full rounded-lg border bg-black/50 px-3.5 py-2.5 font-sans text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/50 ${
                        errors.email
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-white/[0.1] focus:border-sky-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-mono text-[11px] text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs font-medium uppercase tracking-wider text-neutral-300"
                  >
                    Subject <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Machine Learning collaboration / inquiry"
                    required
                    className={`mt-1.5 w-full rounded-lg border bg-black/50 px-3.5 py-2.5 font-sans text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/50 ${
                      errors.subject
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-white/[0.1] focus:border-sky-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 font-mono text-[11px] text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-medium uppercase tracking-wider text-neutral-300"
                  >
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message, project idea, or inquiry here..."
                    required
                    className={`mt-1.5 w-full rounded-lg border bg-black/50 px-3.5 py-2.5 font-sans text-sm text-white placeholder-neutral-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/50 resize-y min-h-[100px] ${
                      errors.message
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-white/[0.1] focus:border-sky-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-[11px] text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submission Feedback Banner */}
                {submissionFeedback.status && (
                  <div className="rounded-lg border border-sky-500/30 bg-sky-500/10 p-3.5">
                    <p className="font-sans text-xs text-sky-200 leading-relaxed">
                      {submissionFeedback.message}
                    </p>
                    <div className="mt-2.5 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCopyFormattedDraft}
                        className="font-mono text-xs text-sky-400 underline hover:text-white"
                      >
                        Copy Formatted Message
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-glow mt-2 w-full inline-flex items-center justify-center gap-2.5 rounded-lg border border-sky-400/60 bg-sky-500/20 py-3.5 px-6 font-sans text-sm font-bold tracking-wide text-white hover:bg-sky-500/30 hover:border-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <p className="mt-4 font-mono text-[11px] text-neutral-400 text-center">
              Direct submission via secure client draft to <code className="text-neutral-300">{links.ownerEmail}</code>
            </p>
          </div>
        </div>
      </RevealContent>
    </div>
  );
};

export default ContactSection;
