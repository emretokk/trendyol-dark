export const Article = (props: any) => {
    return (
        <article className="w-full h-904 flex flex-col relative ">
            <img src={props.img} alt="cov" className="grow-0 rounded-t-lg" />
            <div className="bg-bgColor3 w-full grow rounded-b-lg"></div>
        </article>
    );
};
