import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function DataPrivacy() {
  return (
    <section className="max-w-[1200px] px-8 mx-auto lg:py-16 sm:py-14 py-10">
      <h1 className="lg:text-4xl lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md mb-8">
        Privacy
      </h1>

      <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance mt-8">
        1. Data protection at a glance
      </h3>
      <h4 className="font-semibold text-2xl mt-4">General information</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The following information provides a simple overview of what happens to
        your personal data when you visit our website. Personal data is any data
        that can be used to identify you personally. Detailed information on the
        subject of data protection can be found in our privacy policy listed
        below this text.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Data collection on our website
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>
          Who is responsible for the collection of data on this website?
        </strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The data processing on this website is carried out by the website
        operator. Their contact details can be found in the imprint of this
        website.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>How do we collect your data?</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        On the one hand, your data is collected when you provide it to us. This
        can be, for example, data that you enter into a contact form. <br />{" "}
        Other data is collected automatically by our IT systems when you visit
        the website. This is mainly technical data (e.g. internet browser,
        operating system or time of page access). This data is collected
        automatically as soon as you enter our website.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>What do we use your data for?</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Part of the data is collected to ensure the error-free provision of the
        website. Other data may be used to analyze your user behavior.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>What rights do you have regarding your data?</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        You have the right to receive information about the origin, recipient
        and purpose of your stored personal data free of charge at any time. You
        also have the right to request the correction, blocking or deletion of
        this data. You can contact us at any time at the address given in the
        imprint for this or any other questions on the subject of data
        protection. Furthermore, you have the right to lodge a complaint with
        the competent supervisory authority.
      </p>
      <h4 className="font-semibold text-2xl mt-4">
        Analytics and third-party tools
      </h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        When you visit our website, your surfing behaviour can be statistically
        evaluated. This is mainly done with cookies and with so-called analysis
        programs. The analysis of your surfing behaviour is usually anonymous;
        the surfing behavior cannot be traced back to you. You can object to
        this analysis or prevent it by not using certain tools. Detailed
        information can be found in the following privacy policy.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        You can object to this analysis. We will inform you about the options
        for objection in this privacy policy.
      </p>

      <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance mt-8">
        2. General information and mandatory information
      </h3>
      <h4 className="font-semibold text-2xl mt-4">Privacy</h4>

      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The operators of these sites take the protection of your personal data
        very seriously. We treat your personal data confidentially and in
        accordance with the statutory data protection regulations and this data
        protection declaration.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        When you use this website, various personal data is collected. Personal
        data is data that can be used to identify you personally. This privacy
        policy explains what data we collect and what we use it for. It also
        explains how and for what purpose this is done.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        We would like to point out that data transmission on the Internet (e.g.
        when communicating by e-mail) may have security gaps. It is not possible
        to completely protect the data from access by third parties.
      </p>
      <h4 className="font-semibold text-2xl mt-4">
        Note on the responsible body
      </h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The person responsible for data processing on this website is:
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        {" "}
        <address>
          Biotech & Capital Consulting GmbH <br />
          Neuffenstraße 35
          <br />
          73630 Remshalden
          <br />
        </address>{" "}
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        E-Mail:
        <Link
          style={{ padding: 0 }}
          href="mailto:fachkraefte@bnc-consulting.de"
          className={buttonVariants({ variant: "link" })}
        >
          fachkraefte@bnc-consulting.de
        </Link>{" "}
        <br />
        Web:
        <Link
          style={{ padding: 0 }}
          href="www.bnc-consulting.de"
          className={buttonVariants({ variant: "link" })}
        >
          www.bnc-consulting.de
        </Link>
      </p>

      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The responsible party is the natural or legal person who, alone or
        jointly with others, decides on the purposes and means of the processing
        of personal data (e.g. names, e-mail addresses, etc.).
      </p>

      <h4 className="font-semibold text-2xl mt-4">
        Withdrawal of your consent to data processing
      </h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Many data processing operations are only possible with your explicit
        consent. You can revoke your consent at any time. All you need to do is
        send us an informal message by e-mail. The lawfulness of the data
        processing carried out until the revocation remains unaffected by the
        revocation.
      </p>
      <h4 className="font-semibold text-2xl mt-4">
        Right to lodge a complaint with the competent supervisory authority
      </h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        In the event of violations of data protection law, the data subject has
        the right to lodge a complaint with the competent supervisory authority.
        The competent supervisory authority for data protection issues is the
        state data protection officer of the federal state in which our company
        is based. A list of the data protection officers and their contact
        details can be found at the following link:{" "}
        <Link
          style={{ padding: 0 }}
          href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
          className={buttonVariants({
            variant: "link",
            className: "m-0 h-unset text-base p-0",
          })}
        >
          https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
        </Link>{" "}
        .
      </p>
      <h4 className="font-semibold text-2xl mt-4">Right to data portability</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        You have the right to have data that we process automatically on the
        basis of your consent or in fulfilment of a contract handed over to you
        or to a third party in a common, machine-readable format. If you request
        the direct transfer of the data to another controller, this will only be
        done to the extent that it is technically feasible.
      </p>
      <h4 className="font-semibold text-2xl mt-4">SSL or TLS encryption</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        For security reasons and to protect the transmission of confidential
        content, such as orders or inquiries that you send to us as the site
        operator, this site uses SSL or TLS encryption. You can recognize an
        encrypted connection by the fact that the address bar of the browser
        changes from &#34;http://&#34; to &#34;https://&#34; and by the lock symbol in your
        browser line.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        If SSL or TLS encryption is activated, the data you transmit to us
        cannot be read by third parties.
      </p>
      <h4 className="font-semibold text-2xl mt-4">
        Encrypted payment transactions on this website
      </h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        If, after concluding a fee-based contract, there is an obligation to
        transmit your payment data to us (e.g. account number in the case of
        direct debit authorisation), this data will be required for payment
        processing.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Payment transactions via the usual means of payment (Visa/MasterCard,
        direct debit) are carried out exclusively via an encrypted SSL or TLS
        connection. You can recognize an encrypted connection by the fact that
        the address bar of the browser changes from &#34;http://&#34; to &#34;https://&#34; and
        by the lock symbol in your browser line.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        In the case of encrypted communication, your payment data that you
        transmit to us cannot be read by third parties.
      </p>
      <h4 className="font-semibold text-2xl mt-4">
        Information, blocking, deletion
      </h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Within the framework of the applicable legal provisions, you have the
        right to free information about your stored personal data, its origin
        and recipients and the purpose of the data processing at any time and,
        if applicable, a right to correction, blocking or deletion of this data.
        You can contact us at any time at the address given in the imprint for
        this or any other questions on the subject of personal data.
      </p>
      <h4>Objection to advertising e-mails</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The use of contact details published within the scope of the imprint
        obligation for the purpose of sending unsolicited advertising and
        information materials is hereby prohibited. The operators of the pages
        expressly reserve the right to take legal action in the event of the
        unsolicited sending of advertising information, for example through spam
        e-mails.
      </p>
      <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance mt-8">
        3. Data collection on our website
      </h3>
      <h4 className="font-semibold text-2xl mt-4">Cookies</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Some of the websites use so-called cookies. Cookies do not cause any
        damage to your computer and do not contain viruses. Cookies are used to
        make our website more user-friendly, effective and secure. Cookies are
        small text files that are stored on your computer and stored by your
        browser.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Most of the cookies we use are so-called &#34;session cookies&#34;. They are
        automatically deleted at the end of your visit. Other cookies remain
        stored on your device until you delete them. These cookies allow us to
        recognise your browser the next time you visit.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        You can set your browser so that you are informed about the setting of
        cookies and only allow cookies in individual cases, exclude the
        acceptance of cookies in certain cases or in general, and activate the
        automatic deletion of cookies when the browser is closed. If cookies are
        disabled, the functionality of this website may be limited.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Cookies that are necessary to carry out the electronic communication
        process or to provide certain functions desired by you (e.g. shopping
        cart function) are stored on the basis of Art. 6 (1) (f) GDPR. The
        website operator has a legitimate interest in storing cookies for the
        technically error-free and optimized provision of its services. Insofar
        as other cookies (e.g. cookies for analysing your surfing behaviour) are
        stored, these are dealt with separately in this privacy policy.
      </p>
      <h4 className="font-semibold text-2xl mt-4">Contact</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        If you send us enquiries via the contact form, your details from the
        enquiry form, including the contact details you provide there, will be
        stored by us for the purpose of processing the enquiry and in the event
        of follow-up questions. We will not pass on this data without your
        consent.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The processing of the data entered in the contact form is therefore
        carried out exclusively on the basis of your consent (Art. 6 para. 1
        lit. a GDPR). You can revoke this consent at any time. All you need to
        do is send us an informal message by e-mail. The lawfulness of the data
        processing operations carried out until the revocation remains
        unaffected by the revocation.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The data you enter in the contact form will remain with us until you
        request us to delete it, revoke your consent to storage or the purpose
        for which the data is stored no longer applies (e.g. after your request
        has been processed). Mandatory statutory provisions – in particular
        retention periods – remain unaffected.
      </p>
      <h4 className="font-semibold text-2xl mt-4">Comments on this website</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        For the comment function on this page, in addition to your comment,
        information about the time the comment was created, your e-mail address
        and, if you do not post anonymously, the username you have chosen, will
        be stored.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>Duration of storage of comments</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The comments and the associated data (e.g. IP address) will be stored
        and remain on our website until the commented content has been
        completely deleted or the comments must be deleted for legal reasons
        (e.g. offensive comments).
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>Legal basis</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The comments are stored on the basis of your consent (Art. 6 para. 1
        lit. a GDPR). You can revoke your consent at any time. All you need to
        do is send us an informal message by e-mail. The lawfulness of the data
        processing operations that have already taken place remains unaffected
        by the revocation.
      </p>
      <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance mt-8">
        4. Analysis Tools and Advertising
      </h3>
      <h4 className="font-semibold text-2xl mt-4">Google Analytics</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        This website uses functions of the web analysis service Google
        Analytics. The provider is Google Inc., 1600 Amphitheatre Parkway,
        Mountain View, CA 94043, USA.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Google Analytics uses so-called &#34;cookies&#34;. These are text files that are
        stored on your computer and enable an analysis of your use of the
        website. The information generated by the cookie about your use of this
        website is usually transmitted to a Google server in the USA and stored
        there.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Google Analytics cookies are stored on the basis of Art. 6 (1) (f) GDPR.
        The website operator has a legitimate interest in analysing user
        behaviour in order to optimise both its website and its advertising.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>IP Anonymization</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        We have activated the IP anonymization function on this website. As a
        result, your IP address will be shortened by Google within member states
        of the European Union or in other contracting states of the Agreement on
        the European Economic Area before it is transmitted to the USA. Only in
        exceptional cases will the full IP address be transmitted to a Google
        server in the USA and shortened there. On behalf of the operator of this
        website, Google will use this information to evaluate your use of the
        website, to compile reports on website activity and to provide the
        website operator with other services related to website activity and
        internet usage. The IP address transmitted by your browser as part of
        Google Analytics will not be merged with other data held by Google.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>Browser Plugin</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        You can prevent the storage of cookies by selecting the appropriate
        settings in your browser software; however, we would like to point out
        that in this case you may not be able to use all the functions of this
        website to their full extent. You can also prevent the collection of the
        data generated by the cookie and related to your use of the website
        (including your IP address) to Google and the processing of this data by
        Google by downloading and installing the browser plugin available under
        the following link:{" "}
        <Link
          style={{ padding: 0 }}
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          className={buttonVariants({
            variant: "link",
            className: "m-0 h-unset text-base p-0",
          })}
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </Link>
        .
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>Objection to data collection</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        You can prevent the collection of your data by Google Analytics by
        clicking on the following link. An opt-out cookie will be set that
        prevents the collection of your data on future visits to this website:{" "}
        <Link
          style={{ padding: 0 }}
          href="https://marketingplatform.google.com/about/analytics/"
          className={buttonVariants({
            variant: "link",
            className: "m-0 h-unset text-base p-0",
          })}
        >
          Disable Google Analytics
        </Link>
        .
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        You can find more information about how Google Analytics handles user
        data in
        <Link
          style={{ padding: 0 }}
          href="https://support.google.com/analytics/answer/6004245?hl=de"
          className={buttonVariants({
            variant: "link",
            className: "m-0 h-unset text-base p-0",
          })}
        >
          Google
        </Link>
        privacy policy:
        https://support.google.com/analytics/answer/6004245?hl=de..
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>Commissioned data processing</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        We have concluded a contract with Google for commissioned data
        processing and fully implement the strict requirements of the German
        data protection authorities when using Google Analytics.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <strong>Google Analytics Demographics</strong>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        This website uses the &#34;demographic features&#34; feature of Google
        Analytics. This makes it possible to generate reports that contain
        information about the age, gender, and interests of site visitors. This
        data comes from interest-based advertising from Google, as well as
        third-party visitor data. This data cannot be assigned to a specific
        person. You can deactivate this function at any time via the ad settings
        in your Google account or generally prohibit the collection of your data
        by Google Analytics as described in the section &#34;Objection to data
        collection&#34;.
      </p>
      <h4 className="font-semibold text-2xl mt-4">Google reCAPTCHA</h4>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        We use &#34;Google reCAPTCHA&#34; (hereinafter referred to as &#34;reCAPTCHA&#34;) on
        our websites. The provider is Google Inc., 1600 Amphitheatre Parkway,
        Mountain View, CA 94043, USA (&#34;Google&#34;).
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The purpose of reCAPTCHA is to check whether the data entry on our
        websites (e.g. in a contact form) is carried out by a human or by an
        automated program. For this purpose, reCAPTCHA analyzes the behavior of
        the website visitor on the basis of various characteristics. This
        analysis begins automatically as soon as the website visitor enters the
        website. For analysis, reCAPTCHA evaluates various information (e.g. IP
        address, length of stay of the website visitor on the website or mouse
        movements made by the user). The data collected during the analysis will
        be forwarded to Google.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        The reCAPTCHA analyses run completely in the background. Website
        visitors are not informed that an analysis is taking place.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Data processing is carried out on the basis of Art. 6 (1) (f) GDPR. The
        website operator has a legitimate interest in protecting its web
        offerings from abusive automated spying and from SPAM.
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        For more information on Google reCAPTCHA and Google&#39;s privacy policy,
        please refer to the following links:
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        <Link
          style={{ padding: 0 }}
          href="https://www.google.com/intl/de/policies/privacy/"
          className={buttonVariants({
            variant: "link",
            className: "m-0 h-unset text-base p-0",
          })}
        >
          https://www.google.com/intl/de/policies/privacy/
        </Link>{" "}
        and{" "}
        <Link
          style={{ padding: 0 }}
          href="https://www.google.com/recaptcha/intro/android.html"
          className={buttonVariants({
            variant: "link",
            className: "m-0 h-unset text-base p-0",
          })}
        >
          https://www.google.com/recaptcha/intro/android.html
        </Link>
      </p>
    </section>
  );
}
