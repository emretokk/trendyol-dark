export const SEO = (props: { headline: string; paragraph: string }) => {
    return (
        <div className="seo-article">
            <h2 className=" font-extrabold text-xl">{props.headline}</h2>
            <p className=" text-xs leading-5">{props.paragraph}</p>
        </div>
    );
};
