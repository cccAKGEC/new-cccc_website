import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import { StepThree } from './steps/StepThree';
import ReCAPTCHA from 'react-google-recaptcha';
import { GENDER_OPTIONS, BRANCH_OPTIONS, RESIDENCE_OPTIONS } from './constants';
import { FormField } from '../FormField';

export const FormContainer = ({
  step,
  direction,
  formData,
  errors,
  isSubmitting,
  turnstileToken,
  handleInputChange,
  handleBlur,
  handleSubmit,
  handleVerifyOtp,
  handleCancelOtp,
  navigateNext,
  navigatePrev,
  onBackToBranding,
  onTurnstileSuccess,
  recaptchaRef,
}) => {
  const isScrolling = useRef(false);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTargetScrollable = (target, currentTarget) => {
    let el = target;
    while (el && el !== currentTarget) {
      const style = window.getComputedStyle(el);
      if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  };

  const isInteractiveTarget = (target) => {
    if (!target || typeof target.closest !== 'function') return false;
    const interactiveSelectors = ['input', 'textarea', 'select', 'button', 'a'];
    return interactiveSelectors.some((selector) => target.closest(selector)) || target.isContentEditable;
  };

  const handleWheel = (e) => {
    return; // Disable scroll-jacking steps
  };

  const handleTouchStart = (e) => {
    return; // Disable swiping step transition
  };

  const handleTouchMove = (e) => {
    return; // Disable swiping step transition
  };

  const handleTouchEnd = () => {
    return; // Disable swiping step transition
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="lg:col-span-6 flex flex-col justify-between lg:justify-center items-center w-full transition-all duration-300 h-full py-6 lg:py-0 relative"
    >
      {/* Reused Mobile Header (Logo & SPOCC'26) */}
      <div className="lg:hidden flex flex-col items-center mt-2 mb-2 animate-fade-in w-full relative">
        {/* Mobile Go Back Button (Top Left) */}
        <button
          type="button"
          onClick={onBackToBranding}
          className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] hover:text-white hover:bg-[#00d2ff]/20 border border-[#00d2ff]/30 transition-all active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(0,210,255,0.15)]"
        >
          <svg className="w-5 h-5 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <h1 className="text-[32px] font-extrabold tracking-widest text-[#00d2ff] drop-shadow-[0_0_15px_rgba(0,210,255,0.5)] leading-none mb-1">
          SPOCC&apos;26
        </h1>
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-blue-400/90">
          THE RECRUITMENT DRIVE
        </span>
      </div>



      <style>{`
        @keyframes form-flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            box-shadow: 0 15px 50px rgba(0,0,0,0.5), 0 0 50px rgba(0, 210, 255, 0.2), inset 0 0 20px rgba(0, 210, 255, 0.1);
          }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            box-shadow: 0 15px 50px rgba(0,0,0,0.5);
          }
        }
        @keyframes border-flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.15; }
        }
        @media (min-width: 1024px) {
          .animate-form-flicker {
            animation: form-flicker 8s infinite;
          }
          .animate-border-flicker {
            animation: border-flicker 8s infinite;
          }
        }
      `}</style>

      <form
        onSubmit={handleSubmit}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full max-w-[540px] lg:max-w-[620px] xl:max-w-[680px] mx-auto flex flex-col items-center justify-center relative py-1 sm:py-2.5 lg:py-3.5 px-3 sm:px-5 lg:px-9 xl:px-11 lg:rounded-[32px] lg:bg-[#001133]/60 lg:bg-transparent lg:shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-form-flicker font-inter font-normal"
      >
        {/* Gradient Border Mask (Desktop Only) */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none rounded-[32px] animate-border-flicker"
          style={{
            padding: '1.5px', // Border thickness
            background: 'linear-gradient(to bottom right, #ffffff, #00d2ff, #a855f7)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />

        <div className="w-full relative flex-1 flex flex-col justify-start pt-2 max-lg:pt-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step === 3 ? 'otp' : 'form'}
              custom={direction}
              variants={{
                initial: (dir) => ({ x: dir === 1 ? "-100%" : "100%", opacity: 0, filter: 'blur(5px)' }),
                animate: { x: 0, opacity: 1, filter: 'blur(0px)', transition: { type: "spring", stiffness: 70, damping: 20, mass: 1 } },
                exit: (dir) => ({ x: dir === 1 ? "100%" : "-100%", opacity: 0, filter: 'blur(5px)', transition: { duration: 0.5, ease: "easeInOut" } })
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full flex flex-col gap-4.5 lg:gap-5 pt-1 pb-2"
            >
              {(step === 1 || step === 2) ? (
                <div className="flex flex-col items-center justify-center text-center py-6 sm:py-8 px-4 sm:px-6 w-full animate-fade-in my-auto">
                  {/* Glowing Lock Icon */}
                  <div className="relative mb-5 sm:mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#00d2ff] to-[#a855f7] rounded-full blur-lg opacity-40 animate-pulse"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#001133]/90 border border-[#00d2ff]/40 flex items-center justify-center shadow-[0_0_25px_rgba(0,210,255,0.3)]">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00d2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Header Title where REGISTER was written */}
                  <h2 className="font-mochiy text-[20px] sm:text-[24px] xl:text-[26px] font-normal tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00d2ff] to-[#a855f7] drop-shadow-[0_0_15px_rgba(0,210,255,0.4)] mb-4">
                    REGISTRATION CLOSED
                  </h2>

                  <br />
                  <br />

                  {/* Details & Subtext */}
                  <p className="font-inter text-sm sm:text-base text-gray-200 max-w-[420px] leading-relaxed mb-5">
                    Registrations for <span className="text-[#00d2ff] font-semibold">SPOCC&apos;26</span> - The Recruitment Drive are now officially closed.
                  </p>

                  <div className="w-full max-w-[360px] border-t border-white/10 pt-5 mt-1">
                    <p className="font-inter text-xs sm:text-sm text-gray-400 leading-relaxed">
                      Thank you for the overwhelming response! For any queries, feel free to contact our coordinators.
                    </p>
                  </div>
                </div>
              ) : (
                <StepThree onVerify={handleVerifyOtp} isSubmitting={isSubmitting} onCancel={handleCancelOtp} onResend={handleCancelOtp} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </form>

      {/* Reused Mobile Footer */}
      <div className="lg:hidden w-full flex flex-col items-center text-center mt-auto pt-4 pb-2 animate-fade-in">
        <span className="text-[11px] font-extrabold tracking-[0.35em] uppercase text-white/90 select-none drop-shadow-md">
          THINK.DEVELOP.DEPLOY
        </span>
      </div>
    </motion.div>
  );
};
