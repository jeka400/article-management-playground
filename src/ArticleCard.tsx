import * as React from "react";

type Article = {
    id: number;
    title: string;
    summary: string;
    display: string;
};

type ArticleItemProps = {
    article: Article;
    onClickToggle: (id: number) => void;
    onClickRemove: (id: number) => void;
};

const ArticleItem: React.FC<ArticleItemProps> = ({ article, onClickToggle, onClickRemove }) => {
    return (
        <li key={ article.id} >
            <a 
                href={ `#${ article.id }` } 
                title="Toggle Summary" 
                onClick={ () => onClickToggle(article.id) }
            >
                { article.title }
            </a>
            &nbsp;
            <a 
                href={ `#${ article.id }` } 
                title="Remove" 
                onClick={ () => onClickRemove(article.id) }
            >
                &#10007;
            </a>
            <p style={{ display: article.display }}>
                { article.summary }
            </p> 
        </li>
    );
}

export default ArticleItem;
