import * as React from "react";

type Article = {
    id: number;
    title: string;
    summary: string;
    display: string;
};

type ArticleListProps = {
    articles: Article[];
    onClickToggle: (id: number) => void;
    onClickRemove: (id: number) => void;
};

const ArticleList: React.FC<ArticleListProps> = ({ articles, onClickToggle, onClickRemove }) => {
    return (
        <div className="container mt-4">
            <ul className="list-group">
                {articles.map((article) => (
                    <li 
                        key={ article.id } 
                        className="list-group-item d-flex flex-column border-0 mb-2"
                    >
                        <div className="d-flex w-100 justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-link p-0 me-2"
                                    onClick={ () => onClickToggle(article.id) }
                                    aria-label={ `Toggle summary for ${ article.title }` }
                                >
                                    <i className={ `bi ${ article.display === "none" ? "bi-chevron-down" : "bi-chevron-up" }` }></i>
                                </button>
                                <span className="fw-bold">{ article.title }</span>
                            </div>
                            <button
                                className="btn btn-danger ms-auto"
                                onClick={ () => onClickRemove(article.id) }
                                aria-label={ `Remove ${article.title }` }
                            >
                                Remove
                            </button>
                        </div>
                        {article.display !== "none" && (
                            <div className="mt-2">
                                <p>{ article.summary }</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;
