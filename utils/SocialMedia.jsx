import React, { Fragment, useContext } from "react";
import Link from "next/link";

import { SocialMediaData } from "@/constants/SocialMediaData";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className='absolute left-10 bottom-20 flex flex-col gap-5 z-10'>
        {SocialMediaData.map((social, key) => (
          <Link href={social.link} key={key} className='social-media-link'>
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
