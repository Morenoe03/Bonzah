"use client";

import Header from "../globals/header";
import Footer from "../globals/footer";

export default function Privacy() {
  return (
    <div className="backgroundLighter">
      <Header />

      <div className="px-4 sm:px-6 md:px-100 py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold my-8 text-center">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Last updated March 6, 2024
        </p>

        {/* Introduction */}
        <p className="text-base mb-4">
          This privacy notice for Pablow, Inc. ("we," "us," "our", the "Company", or "Bonzah"),
          describes how and why we might collect, store, use, and/or share ("Process") your
          information when you use our services ("Services"), such as when you:
        </p>

        {/* Key Points List */}
        <ul className="list-disc list-inside mb-4">
          <li>
            Visit our website at{" "}
            <a href="http://www.bonzah.com" className="text-blue-600 underline">
              http://www.bonzah.com
            </a>
            , or any website of ours that links to this privacy notice
          </li>
          <li>
            Download and use our mobile application (Bonzah), or any other application of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales, marketing, or events.
          </li>
        </ul>

        {/* Questions */}
        <p className="text-base mb-4">
          Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices.
          This policy applies to information collected by our website, mobile app, communications with you,
          and other online interactions. If you do not agree with our policies and practices, please do not use our Services.
          If you still have any questions or concerns, please contact us at{" "}
          <a href="https://bonzah.com/company/contact" className="text-blue-600 underline">
            https://bonzah.com/company/contact
          </a>. This policy must be updated annually, so individual policies may be changed since user's last visit.
        </p>

        {/* Main Sections */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold my-4">Privacy Policy Summary</h2>

          <p>
            This summary provides key points from our privacy notice, but you can find out more details
            about any of these topics by clicking the link following each key point or by using our table of contents below
            to find the section you are looking for.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">What personal information do we Process?</h3>
          <p>
            When you visit, use, or navigate our Services, we may Process personal information depending on how you interact with us
            and the Services, the choices you make, and the products and features you use.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Do we Process any sensitive personal information?</h3>
          <p>
            We may Process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Do we receive any information from Third Parties?</h3>
          <p>
            We may receive information from public databases, marketing partners, social media platforms, and other outside sources.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">How do we Process your information?</h3>
          <p>
            We Process your information to provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may also Process your information for other purposes
            without your consent. We Process your information only when we have a valid legal reason to do so.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">In what situations and with which parties do we share personal information?</h3>
          <p>We may share information in specific situations and with specific Third Parties.</p>

          <h3 className="mt-6 mb-2 font-semibold text-base">How do we keep your information safe?</h3>
          <p>We have organizational and technical Processes and procedures in place to protect your personal information.</p>
          <p>
            However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure,
            so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized Third Parties will not be able
            to defeat our security and improperly collect, access, steal, or modify your information.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">What are your rights?</h3>
          <p>
            Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">How do you exercise your rights?</h3>
          <p>
            The easiest way to exercise your rights is by visiting{" "}
            <a href="https://bonzah.com/company/contact" className="text-blue-600 underline">
              https://bonzah.com/company/contact
            </a>
            , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Want to learn more about what we do with any information we collect?</h3>
          <p>Review the privacy notice in full.</p>

          <h2 className="mt-6 mb-2 font-semibold text-lg">Summary of key points</h2>
          <h3 className="mt-4 mb-2 font-semibold">In Short: We collect personal information that you provide to us.</h3>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services,
            when you participate in activities on the Services, or otherwise when you contact us. By using{" "}
            <a href="https://bonzah.com" className="text-blue-600 underline">
              Bonzah.com
            </a>{" "}
            you automatically opt in to data collection and retention of your activities while a visitor on Bonzah.com.
          </p>
          <p className="mb-4">
            The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Mailing addresses</li>
            <li>Usernames</li>
            <li>Passwords</li>
            <li>Billing addresses</li>
            <li>Debit/credit card numbers</li>
            <li>Contact or authentication data</li>
            <li>Contact preferences</li>
          </ul>

          <p className="mb-4">
            <strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we Process the following categories of sensitive information:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Credit Worthiness Data</li>
            <li>Financial Data</li>
            <li>Social Security Numbers or other identifying government data (for underwriting purposes)</li>
          </ul>
          <p className="mb-4">
            <strong>Payment Data.</strong> Payments for services are processed exclusively through the secure subdomain <a href="https://us.bonzah.com" className="text-blue-600 underline">https://us.bonzah.com</a>. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number and the security code associated with your payment instrument. All payment data is processed in compliance with PCI DSS standards and is not stored on our servers. We use Stripe to process payments, ensuring transaction security. <a href="https://us.bonzah.com" className="text-blue-600 underline">https://us.bonzah.com</a> utilizes SSL encryption to protect data, ensuring the secure transmission of information. You may find Stripe's privacy notice here: <a href="https://stripe.com/privacy" className="text-blue-600 underline">https://stripe.com/privacy</a>.
          </p>

          <p className="mb-4">
            <strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
          </p>

          <p className="mb-4">
            <strong>Geolocation Information.</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based Services. If you wish to change our access or permissions, you may do so in your device's settings.
          </p>

          <p className="mb-4">
            <strong>Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
          </p>

          <p className="mb-4">
            <strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.
          </p>

          <p className="mb-4">
            <strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
          </p>

          <p className="mb-4">
            This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
          </p>

          <p className="mb-4">
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
          </p>

          <h2 className="mt-6 mb-2 font-semibold text-lg">Information Automatically Collected</h2>

          <p className="mb-4">
            <strong>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</strong>
          </p>

          <p className="mb-4">
            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. This information may be collected in the background without your active use of our Services, but that is dependent on the settings you have enabled on your devices.
          </p>

          <p className="mb-4">
            Like many businesses, we also collect information through cookies and similar technologies.
          </p>

          <p className="mb-4">
            The information we collect includes:
          </p>

          <p className="mb-4">
            <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
          </p>

          <p className="mb-4">
            <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
          </p>

          <p className="mb-4">
            <strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services or may impact your ability to receive coverage from our third-party partners.
          </p>

          <h2 className="mt-6 mb-2 font-semibold text-lg">Information Collected from other Sources</h2>

          <p className="mb-4">
            In Short: We may collect limited data from public databases, marketing partners, and other outside sources.
          </p>

          <p className="mb-4">
            In order to enhance our ability to provide relevant marketing, offers, and Services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other Third Parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">What information do we collect?</h3>
          <p className="mb-4">
            In Short: We Process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also Process your information for other purposes with your consent.
          </p>

          <p className="mb-4">
            We Process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>To facilitate account creation and authentication and otherwise manage user accounts. We may Process your information so you can create and log in to your account, as well as keep your account in working order.</li>
            <li>To deliver and facilitate delivery of Services to the user. We may Process your information to provide you with the requested service.</li>
            <li>To respond to user inquiries/offer support to users. We may Process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
            <li>To fulfill and manage your orders. We may Process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
            <li>To request feedback. We may Process your information when necessary to request feedback and to contact you about your use of our Services.</li>
            <li>To protect our Services. We may Process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
            <li>To send administrative information to you. We may Process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
          </ul>

          <h3 className="mt-6 mb-2 font-semibold text-base">Summary of key points</h3>
          <p className="mb-4">
            This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">What personal information do we Process?</h3>
          <p className="mb-4">
            When you visit, use, or navigate our Services, we may Process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Do we Process any sensitive personal information?</h3>
          <p className="mb-4">
            We may Process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Do we receive any information from Third Parties?</h3>
          <p className="mb-4">
            We may receive information from public databases, marketing partners, social media platforms, and other outside sources.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">How do we Process your information?</h3>
          <p className="mb-4">
            We Process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also Process your information for other purposes without your consent. We Process your information only when we have a valid legal reason to do so.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">
            In what situations and with which parties do we share personal information?
          </h3>
          <p className="mb-4">
            We may share information in specific situations and with specific Third Parties.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">
            How do we keep your information safe?
          </h3>
          <p className="mb-4">
            We have organizational and technical Processes and procedures in place to protect your personal information.
          </p>
          <p className="mb-4">
            However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized Third Parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">
            What are your rights?
          </h3>
          <p className="mb-4">
            Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">
            How do you exercise your rights?
          </h3>
          <p className="mb-4">
            The easiest way to exercise your rights is by visiting{' '}
            <a href="https://bonzah.com/company/contact" className="text-blue-600 underline">
              https://bonzah.com/company/contact
            </a>
            , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">
            Want to learn more about what we do with any information we collect?
          </h3>
          <p className="mb-4">
            Review the privacy notice in full.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">
            What information do we collect?
          </h3>
          <p className="mb-4">
            <strong>In Short:</strong> We collect personal information that you provide to us.
          </p>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. By using{' '}
            <a href="https://bonzah.com" className="text-blue-600 underline">
              Bonzah.com
            </a>{' '}
            you automatically opt in to data collection and retention of your activities while a visitor on Bonzah.com.
          </p>

          <p className="mb-4">
            <strong>Personal Information Provided by you.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Mailing addresses</li>
            <li>Usernames</li>
            <li>Passwords</li>
            <li>Billing addresses</li>
            <li>Debit/credit card numbers</li>
            <li>Contact or authentication data</li>
            <li>Contact preferences</li>
          </ul>

          <p className="mb-4">
            <strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we Process the following categories of sensitive information:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Credit Worthiness Data</li>
            <li>Financial Data</li>
            <li>Social Security Numbers or other identifying government data (for underwriting purposes)</li>
          </ul>

          <p className="mb-4">
            <strong>Payment Data.</strong> Payments for services are processed exclusively through the secure subdomain{' '}
            <a href="https://us.bonzah.com" className="text-blue-600 underline">https://us.bonzah.com</a>. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number and the security code associated with your payment instrument. All payment data is processed in compliance with PCI DSS standards and is not stored on our servers. We use Stripe to process payments, ensuring transaction security. <a href="https://us.bonzah.com" className="text-blue-600 underline">https://us.bonzah.com</a> utilizes SSL encryption to protect data, ensuring the secure transmission of information. You may find Stripe's privacy notice here: <a href="https://stripe.com/privacy" className="text-blue-600 underline">https://stripe.com/privacy</a>.
          </p>

          <p className="mb-4">
            <strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Geolocation Information.</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based Services. If you wish to change our access or permissions, you may do so in your device's settings.
            </li>
            <li>
              <strong>Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
            </li>
            <li>
              <strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.
            </li>
            <li>
              <strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
            </li>
          </ul>

          <p className="mb-4">
            This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
          </p>

          <p className="mb-4">
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
          </p>

          <p className="mb-4">
            <strong>Information automatically collected.</strong> In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
          </p>

          <p className="mb-4">
            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. This information may be collected in the background without your active use of our Services, but that is dependent on the settings you have enabled on your devices.
          </p>

          <p className="mb-4">
            Like many businesses, we also collect information through cookies and similar technologies.
          </p>

          <p className="mb-4">
            <strong>The information we collect includes:</strong>
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services, including IP address, device info, browser type, settings, activity logs, device events (system activity, error reports, hardware settings).
            </li>
            <li>
              <strong>Device Data:</strong> Information about your computer, phone, tablet, or other device used to access the Services, including IP address (or proxy), device and application IDs, location, browser type, hardware model, ISP/mobile carrier, OS, and system configuration.
            </li>
            <li>
              <strong>Location Data:</strong> Information about your device's location, either precise or imprecise (e.g., via GPS). You may opt out by refusing access or disabling location settings, but some Services may be impacted.
            </li>
          </ul>

          <p className="mb-4">
            <strong>Information collected from other sources.</strong> In Short: We may collect limited data from public databases, marketing partners, and other outside sources.
          </p>

          <p className="mb-4">
            To enhance our ability to provide relevant marketing, offers, and Services, we may obtain information about you from other sources such as public databases, joint marketing partners, affiliate programs, data providers, and other Third Parties. This information may include mailing addresses, job titles, email addresses, phone numbers, intent data (user behavior), IP addresses, social media profiles, social media URLs, and custom profiles for targeted advertising and event promotion.
          </p>

          <p className="mb-4">
            <strong>How do we process your information?</strong> In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
          </p>

          <p className="mb-4">
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>To facilitate account creation, authentication, and management.</li>
            <li>To deliver and facilitate delivery of Services to the user.</li>
            <li>To respond to user inquiries and provide support.</li>
            <li>To fulfill and manage your orders, payments, returns, and exchanges.</li>
            <li>To request feedback and contact you about your use of our Services.</li>
            <li>To protect our Services, including fraud monitoring and prevention.</li>
            <li>To send administrative information about products, services, or changes to terms and policies.</li>
            <li>To send marketing and promotional communications per your preferences.</li>
            <li>To deliver targeted advertising tailored to your interests and location.</li>
            <li>To post testimonials on our Services that may contain personal information.</li>
            <li>To evaluate and improve Services, products, marketing, and user experience.</li>
            <li>To identify usage trends.</li>
            <li>To determine the effectiveness of marketing campaigns.</li>
            <li>To comply with legal obligations and respond to legal requests.</li>
          </ul>

          <p className="mb-4">
            <strong>Legal bases for processing your personal information.</strong> In Short: We only process your personal information when we have a valid legal reason, such as with your consent, to comply with laws, to provide services, to fulfill contractual obligations, to protect rights, or for legitimate business interests.
          </p>

          <ul className="list-disc list-inside mb-4">
            <li><strong>Consent:</strong> Processing with your permission, withdrawable at any time.</li>
            <li><strong>Performance of a Contract:</strong> Necessary to fulfill contractual obligations, including providing Services.</li>
            <li><strong>Legitimate Interests:</strong> Necessary for business interests without overriding your rights.</li>
            <li><strong>Legal Obligations:</strong> Necessary to comply with laws or legal requests.</li>
            <li><strong>Vital Interests:</strong> Necessary to protect your or a third party’s vital interests.</li>
          </ul>

          <p className="mb-4">
            <strong>When and with whom do we share your personal information?</strong> In Short: We may share information in specific situations and/or with the following Third Parties:
          </p>

          <p className="mb-4">
            <strong>Vendors, Consultants, and Other Third-Party Service Providers:</strong> We may share your data with Third-Party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to your information to do that work. Contracts with our Third Parties help safeguard your information: they cannot use it outside our instructions, will not share it with others, and commit to protect and retain the data as instructed.
          </p>

          <p className="mb-4">
            <strong>Categories of Third Parties we may share personal information with:</strong>
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>Ad Networks</li>
            <li>Affiliate Marketing Programs</li>
            <li>Cloud Computing Services</li>
            <li>Communication & Collaboration Tools</li>
            <li>Data Analytics Services</li>
            <li>Data Storage Service Providers</li>
            <li>Finance & Accounting Tools</li>
            <li>Government Entities</li>
            <li>Order Fulfillment Service Providers</li>
            <li>Payment Processors</li>
            <li>Performance Monitoring Tools</li>
            <li>Product Engineering & Design Tools</li>
            <li>Retargeting Platforms</li>
            <li>Sales & Marketing Tools</li>
            <li>Social Networks</li>
            <li>Testing Tools</li>
            <li>User Account Registration & Authentication Services</li>
            <li>Website Hosting Service Providers</li>
          </ul>

          <p className="mb-4">
            <strong>Situations where we may need to share your personal information:</strong>
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or part of our business.
            </li>
            <li>
              <strong>Google Maps Platform APIs:</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API).
            </li>
            <li>
              <strong>Affiliates:</strong> We may share your information with our affiliates, who are required to honor this privacy notice. Affiliates include our parent Company, subsidiaries, joint venture partners, or other companies under common control.
            </li>
            <li>
              <strong>Business Partners:</strong> We may share your information with business partners to offer products, services, or promotions.
            </li>
          </ul>

          <p className="mb-4">
            <strong>Do we use cookies and other tracking technologies?</strong> In Short: We may use cookies and other tracking technologies to collect and store your information.
          </p>

          <p className="mb-4">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>

          <p className="mb-4">
            <strong>How long do we keep your information?</strong> In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          </p>

          <p className="mb-4">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
          </p>

          <p className="mb-4">
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), we will securely store it and isolate it from further processing until deletion is possible.
          </p>

          <p className="mb-4">
            <strong>How do we keep your information safe?</strong> In Short: We aim to protect your personal information through a system of organizational and technical security measures.
          </p>

          <p className="mb-4">
            <strong>Security of Your Information:</strong> We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized Third Parties will not defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission to and from our Services is at your own risk. You should only access the Services within a secure environment.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Do we collect information from minors?</h3>
          <p className="mb-4">
            <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
          </p>
          <p className="mb-4">
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at{' '}
            <a href="https://bonzah.com/company/contact" className="text-blue-600 underline">
              https://bonzah.com/company/contact
            </a>.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">What are your privacy rights?</h3>
          <p className="mb-4">
            <strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
          </p>

          <p className="mb-4">
            In certain regions (EEA, UK, Switzerland, Canada), you have specific rights under applicable data protection laws. These may include the right to:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>Request access and obtain a copy of your personal information</li>
            <li>Request rectification or erasure</li>
            <li>Restrict the processing of your personal information</li>
            <li>If applicable, data portability</li>
            <li>Not be subject to automated decision-making</li>
            <li>Object to the processing of your personal information in certain circumstances</li>
          </ul>

          <p className="mb-4">
            You can make such a request by contacting us via the details provided in the section{" "}
            <strong>"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</strong> below. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <p className="mb-4">
            If you are located in the EEA or UK and believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority. In Switzerland, you may contact the Federal Data Protection and Information Commissioner.
          </p>

          <p className="mb-4">
            <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can do so by contacting us using the details provided in the section{" "}
            <strong>"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</strong> below. Please note this will not affect the lawfulness of the processing before withdrawal, nor, where applicable law allows, the processing conducted on lawful grounds other than consent.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Account Information</h3>
          <p className="mb-4">
            If you would at any time like to review or change the information in your account or terminate your account, you can:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Contact us using the contact information provided.</li>
            <li>
              Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
            </li>
          </ul>

          <h3 className="mt-6 mb-2 font-semibold text-base">Cookies and Similar Technologies</h3>
          <p className="mb-4">
            Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
          </p>
          <p className="mb-4">
            If you have questions or comments about your privacy rights, you may email us at{' '}
            <a href="https://bonzah.com/company/contact" className="text-blue-600 underline">
              https://bonzah.com/company/contact
            </a>.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Controls for Do-Not-Track Features</h3>
          <p className="mb-4">
            Most web browsers and some mobile operating systems and applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">Do United States Residents Have Specific Privacy Rights?</h3>
          <p className="mb-4">
            <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Utah, or Virginia, you are granted specific rights regarding access to your personal information.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-base">What Categories of Personal Information Do We Collect?</h3>
          <p className="mb-4">
            We have collected the following categories of personal information in the past twelve (12) months:
          </p>

          <h3 className="mt-6 mb-4 font-semibold text-base">Categories of Personal Information Collected</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-left">Examples</th>
                  <th className="border px-4 py-2 text-left">Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">A. Identifiers</td>
                  <td className="border px-4 py-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                  <td className="border px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">B. Personal information as defined in the California Customer Records statute</td>
                  <td className="border px-4 py-2">Name, contact information, education, employment, employment history, and financial information</td>
                  <td className="border px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">C. Protected classification characteristics under state or federal law</td>
                  <td className="border px-4 py-2">Gender and date of birth</td>
                  <td className="border px-4 py-2">NO</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">D. Commercial information</td>
                  <td className="border px-4 py-2">Transaction information, purchase history, financial details, and payment information</td>
                  <td className="border px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">E. Biometric information</td>
                  <td className="border px-4 py-2">Fingerprints and voiceprints</td>
                  <td className="border px-4 py-2">NO</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">F. Internet or other similar network activity</td>
                  <td className="border px-4 py-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                  <td className="border px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">G. Geolocation data</td>
                  <td className="border px-4 py-2">Device location</td>
                  <td className="border px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                  <td className="border px-4 py-2">Images and audio, video or call recordings created in connection with our business activities</td>
                  <td className="border px-4 py-2">NO</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">I. Professional or employment-related information</td>
                  <td className="border px-4 py-2">Business contact details to provide our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                  <td className="border px-4 py-2">NO</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">J. Education Information</td>
                  <td className="border px-4 py-2">Student records and directory information</td>
                  <td className="border px-4 py-2">NO</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">K. Inferences drawn from collected personal information</td>
                  <td className="border px-4 py-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about an individual's preferences and characteristics</td>
                  <td className="border px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">L. Sensitive personal Information</td>
                  <td className="border px-4 py-2">Account login information, drivers' licenses, state identification cards, passport numbers, and payment details</td>
                  <td className="border px-4 py-2">YES</td>
                </tr>
              </tbody>
            </table>

            <h3 className="mt-6 mb-2 font-semibold text-base">Retention and Use of Personal Information</h3>
            <p className="mb-4">
              We will use and retain the collected personal information as needed to provide the Services or for:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Category A</strong> – As long as the user has an account with us</li>
              <li><strong>Category B</strong> – As long as the user has an account with us</li>
              <li><strong>Category D</strong> – As long as the user has an account with us</li>
              <li><strong>Category F</strong> – As long as the user has an account with us</li>
              <li><strong>Category G</strong> – As long as the user has an account with us</li>
              <li><strong>Category K</strong> – As long as the user has an account with us</li>
              <li><strong>Category L</strong> – As long as the user has an account with us</li>
            </ul>
            <p className="mb-4">
              <strong>Note:</strong> Category L information may be used, or disclosed to a service provider or contractor, for the purposes specified in the CCPA that do not infer preferences.
            </p>

            <p className="mb-4">
              We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Receiving help through our customer support channels</li>
              <li>Participation in customer surveys or contests</li>
              <li>Facilitation in the delivery of our Services and to respond to your inquiries</li>
            </ul>

            <h3 className="mt-6 mb-2 font-semibold text-base">How do we use and share your personal information?</h3>
            <p className="mb-4">
              Learn about how we use your personal information in the section, <em>"HOW DO WE PROCESS YOUR INFORMATION?"</em>
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Will your information be shared with anyone else?</h3>
            <p className="mb-4">
              We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, <em>"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</em>
            </p>
            <p className="mb-4">
              We may use your personal information for our own business purposes, such as undertaking internal research for technological development and demonstration. This is not considered "selling" of your personal information.
            </p>
            <p className="mb-4">
              We have not disclosed, sold, or shared any personal information to Third Parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Your Rights with Respect to Your Personal Data</h3>
            <p className="mb-4">
              <strong>Right to request deletion of the data — Request to delete</strong>
            </p>
            <p className="mb-4">
              You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of their right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Right to be Informed — Request to Know</h3>
            <p className="mb-4">
              Depending on the circumstances, you have a right to know:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>whether we collect and use your personal information;</li>
              <li>the categories of personal information that we collect;</li>
              <li>the purposes for which the collected personal information is used;</li>
              <li>whether we sell or share personal information to Third Parties;</li>
              <li>the categories of personal information that we sold, shared, or disclosed for a business purpose;</li>
              <li>the categories of Third Parties to whom the personal information was sold, shared, or disclosed for a business purpose;</li>
              <li>the business or commercial purpose for collecting, selling, or sharing personal information; and</li>
              <li>the specific pieces of personal information we collected about you.</li>
            </ul>

            <h3 className="mt-6 mb-2 font-semibold text-base">Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</h3>
            <p className="mb-4">
              We will not discriminate against you if you exercise your privacy rights.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Right to Limit Use and Disclosure of Sensitive Personal Information</h3>
            <p className="mb-4">
              We do not process consumers' sensitive personal information.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Verification Process</h3>
            <p className="mb-4">
              Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match it with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
            </p>
            <p className="mb-4">
              We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Other Privacy Rights</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>You may object to the processing of your personal information.</li>
              <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
              <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof of valid authorization.</li>
              <li>You may request to opt out from future selling or sharing of your personal information to Third Parties. We will act on the request as soon as feasible, but no later than fifteen (15) days from submission.</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, you can contact us by visiting <a href="https://bonzah.com/company/contact" className="text-blue-600 underline">https://bonzah.com/company/contact</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Do We Make Updates to This Notice?</h3>
            <p className="mb-4">
              In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>
            <p className="mb-4">
              We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and will be effective as soon as it is accessible. If we make material changes, we may notify you by prominently posting a notice or directly sending a notification. We encourage you to review this privacy notice frequently.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">How Can You Contact Us About This Notice?</h3>
            <p className="mb-4">
              If you have questions or comments, you may contact us by post at:
            </p>
            <address className="mb-4">
              Pablow, Inc.<br/>
              500 Locust St, PMB 138<br/>
              Des Moines, IA 50309<br/>
              United States
            </address>

            <h3 className="mt-6 mb-2 font-semibold text-base">How Can You Review, Update, or Delete the Data We Collect?</h3>
            <p className="mb-4">
              Based on applicable laws, you may request access to the personal information we collect, change it, or delete it. To review, update, or delete your personal information, please visit: <a href="https://bonzah.com/company/contact" className="text-blue-600 underline">https://bonzah.com/company/contact</a>.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Cookie Policy</h3>
            <p className="mb-4">
              This Cookie Policy explains how Pablow, Inc. ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at <a href="https://bonzah.com" className="text-blue-600 underline">https://bonzah.com</a>. It explains what these technologies are, why we use them, and your rights to control their use.
            </p>
            <p className="mb-4">
              In some cases, cookies may collect personal information, or become personal information if combined with other data.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">What Are Cookies?</h3>
            <p className="mb-4">
              Cookies are small data files placed on your computer or mobile device when you visit a website. They help websites function efficiently and provide reporting information.
            </p>
            <p className="mb-4">
              First-party cookies are set by the website owner (Pablow, Inc.). Third-party cookies are set by parties other than the website owner to provide features such as advertising, interactive content, and analytics.
            </p>

            <h3 className="mt-6 mb-2 font-semibold text-base">Why Do We Use Cookies?</h3>
            <p className="mb-4">
              We use first and third-party cookies for several reasons. Some are essential for technical operation ("essential" or "strictly necessary" cookies). Others track and target user interests to enhance your experience. Third parties may also serve cookies for advertising, analytics, and other purposes.
            </p>

          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
