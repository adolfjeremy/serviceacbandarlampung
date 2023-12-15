import React from "react";
import { useSiteMetadata } from "../hook/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    };
    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={seo.url}></link>
            <meta property="og:type" content="website"></meta>
            <meta property="og:title" content={seo.title}></meta>
            <meta
                property="og:site_name"
                content="serviceacbandarlampung"
            ></meta>
            <meta property="og:url" content={seo.url}></meta>
            {children}
        </>
    );
};
