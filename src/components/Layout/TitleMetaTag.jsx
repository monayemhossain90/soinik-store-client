import {Helmet} from "react-helmet";


const TitleMetaTag = ({title, description, keywords, author}) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author}/>
                <title>{title}</title>
            </Helmet>
        </>
    );
};


TitleMetaTag.defaultProps = {
    title: "Ecommerce App",
    description : "mern stack project",
    keywords: "mern, react, node, mongodb",
    author: "Goni",
}


export default TitleMetaTag;