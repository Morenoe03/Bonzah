"use client";

import Announcement from "./announcement";
import BonzaInsuranceAdvantages from "./bonzaInsuranceAdvantages";
import BonzaInsuranceData from "./bonzaInsuranceData";
import ContactUs from "./contactUS";
import EmbeddedQuoter from "./embeddedQuoter";
import FAQ from "./FAQ";
import GetInsurance from "./getInsurance";
import InsuranceBy from "./insuranceby";
import InsurancePartners from "./insurancePartners";
import Resources from "./resources";
import Testimonials from "./testimonials";
import Header from "../globals/header";
import Footer from "../globals/footer";

export default function Page() {
  return (
    <div className="backgroundLighter">
      <Header />
      <section id="announcement"><Announcement /></section>
      <section id="quoter"><EmbeddedQuoter /></section>
      <section id="insurance"><GetInsurance /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="partners"><InsurancePartners /></section>
      <section id="data"><BonzaInsuranceData /></section>
      <section id="advantages"><BonzaInsuranceAdvantages /></section>
      <section id="resources"><Resources /></section>
      <section id="faq"><FAQ /></section>
      <section id="contact"><ContactUs /></section>
      <Footer /> 
    </div>
  );
}