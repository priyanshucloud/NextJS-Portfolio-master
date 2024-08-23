import React, { Fragment, useContext } from "react";
import Link from "next/link";

import { SocialMediaData } from "@/constants/SocialMediaData";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className='social-media-container absolute left-10 bottom-20 flex flex-col gap-5 z-10'>
        {SocialMediaData.map((social, index) => (
          <Link aria-label={social.ariaLabel} href={social.link} key={index} className='social-media-link'>
            <div
              className='social-media-icon p-2 rounded-full text-xl text-white'
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialMedia;
