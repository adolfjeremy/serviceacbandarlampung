import React from "react";
import { useSiteMetadata } from "../hook/use-site-metadata";

export const SEO = ({ title, pathname, children }) => {
    const { title: defaultTitle, siteUrl } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        url: `${siteUrl}${pathname || ``}`,
    };
    return (
        <>
            <title>{seo.title}</title>

            {children}
        </>
    );
};
