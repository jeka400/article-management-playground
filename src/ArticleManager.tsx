import * as React from "react";
import { useState, ChangeEvent } from "react";

type Article = {
    id: number;
    title: string;
    summary: string;
    display: string;
};

type ArticleManagerProps = {
    addArticle: (props: {
        title: string;
        summary: string;
        onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
        onChangeSummary: (e: ChangeEvent<HTMLTextAreaElement>) => void;
        onClickAdd: () => void;
    }) => React.ReactNode;
    articleList: (props: {
        articles: Article[];
        onClickRemove: (id: number) => void;
        onClickToggle: (id: number) => void;
    }) => React.ReactNode;
};

const idGenerator = (function* () {
    let i = 1;
    while (true) {
        yield i++;
    }
})();

const ArticleManager: React.FC<ArticleManagerProps> = ({ addArticle, articleList }) => {
    const [articles, setArticles] = useState<Article[]>([
        {
            id: idGenerator.next().value as number,
            title: "Lorem Ipsum Dolor Sit Amet",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            display: "none",
        },
        {
            id: idGenerator.next().value as number,
            title: "Sed Do Eiusmod Tempor Incididunt",
            summary: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            display: "none",
        },
        {
            id: idGenerator.next().value as number,
            title: "Ut Enim Ad Minim Veniam",
            summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            display: "none",
        },
        {
            id: idGenerator.next().value as number,
            title: "Duis Aute Irure Dolor In Reprehenderit",
            summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            display: "none",
        },
    ]);

    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onChangeSummary = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSummary(e.target.value);
    };

    const onClickAdd = () => {
        if (title.length >= 3) {
            setArticles([
                ...articles,
                {
                    id: idGenerator.next().value as number,
                    title: title,
                    summary: summary,
                    display: "none",
                },
            ]);
            setTitle("");
            setSummary("");
        }
    };

    const onClickRemove = (id: number) => {
        setArticles(articles.filter((article) => article.id !== id));
    };

    const onClickToggle = (id: number) => {
        const updatedArticles = [...articles];
        const index = articles.findIndex((article) => article.id === id);

        updatedArticles[index] = {
            ...articles[index],
            display: articles[index].display === "none" ? "block" : "none",
        };

        setArticles(updatedArticles);
    };

    return (
        <section className="container mt-5">
            <div className="mb-4">
                { addArticle({
                    title,
                    summary,
                    onChangeTitle,
                    onChangeSummary,
                    onClickAdd,
                })}
            </div>

            <div>
                { articleList({
                    articles,
                    onClickRemove,
                    onClickToggle,
                })}
            </div>
        </section>
    );
};

export default ArticleManager;
