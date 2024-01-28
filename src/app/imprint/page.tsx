import React from "react";

const Imprint = () => {
  return (
    <article className="max-w-[1200px] px-8 mx-auto lg:py-16 sm:py-14 py-10">
      <h1 className="lg:text-4xl lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md mb-8">
        Imprint
      </h1>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Biotech & Capital Consulting GmbH
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Neuffenstraße 35
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        73630 Remshalden
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        E-Mail:{" "}
        <a href="mailto:info@bnc-consulting.de">info@bnc-consulting.de</a>
      </p>
      <p className="sm:text-[17px] leading-loose text-sm text-balance">
        Web:{" "}
        <a
          href="https://www.bnc-consulting.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.bnc-consulting.de
        </a>
      </p>

      <div className="mt-4">
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          <strong>Managing Director:</strong> Dr. Dr. Gerald Heigis
        </p>
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          <strong>HRB:</strong> 789490 (District Court Stuttgart)
        </p>
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          <strong>Responsible Supervisory Authority:</strong> Chamber of
          Industry and Commerce for Stuttgart, Jägerstraße 30, 70174 Stuttgart
        </p>
      </div>

      <div className="mt-4">
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          The contents and programs of this website are protected by copyright.
          We reserve all rights thereto. Parts of this website may contain
          images, text, or sounds that are subject to the copyright of third
          parties. The copyright notices in these cases are noted in appropriate
          places. Information on this website, including text, images, and
          sound, may not be reproduced, transferred, distributed, or stored
          without the written permission of the publisher unless expressly
          stated otherwise. This applies in the same way to all templates we
          create. Modifications to the content of this website and any templates
          contained therein are expressly prohibited.
        </p>
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          By downloading the templates we offer free of charge to private
          individuals, the user agrees to the terms and conditions contained on
          the pages. Violations of these provisions will be prosecuted by us.
        </p>
      </div>

      <div className="mt-4">
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          <strong>
            Third-Party Copyrights – Credits for Images and Graphics Used:
          </strong>{" "}
          Shutterstock
        </p>
      </div>

      <div className="mt-4">
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          In its judgment of 12 May 1998 – 312 O 85/98 – "Liability for Links",
          the Hamburg Regional Court (LG) ruled that by placing a link, one may
          be jointly responsible for the content of the linked page. According
          to the LG, this can only be prevented by expressly distancing oneself
          from these contents. We hereby expressly dissociate ourselves from all
          contents of all linked pages on our homepage and do not adopt these
          contents as our own. This declaration applies to all links placed on
          this project (on this website).
        </p>
      </div>

      <div className="mt-4">
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          <strong>Security advice for sending e-mails:</strong> Sensitive
          information should not be sent by e-mail in view of the known risks.
        </p>
      </div>

      <div className="mt-4">
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          <strong>Disclaimer:</strong> The information on this website is to be
          understood as "statements per se" without implied warranties of any
          kind. The information provided on this website has been carefully
          checked and is regularly updated. However, no guarantee can be given
          that all information is complete, correct, and up-to-date at all
          times.
        </p>
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          This applies in particular to all links to other websites to which
          reference is made directly or indirectly. All information may be
          supplemented, removed or changed without prior notice.
        </p>
        <p className="sm:text-[17px] leading-loose text-sm text-balance">
          In addition, it is not our responsibility to take precautionary
          measures against destructive programs or parts of programs such as
          viruses, worms, Trojan horses, or the like, which are located on web
          servers that may be reached by links from our website.
        </p>
      </div>
    </article>
  );
};

export default Imprint;
