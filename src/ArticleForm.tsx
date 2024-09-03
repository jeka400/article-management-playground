import * as React from "react";
import { ChangeEvent, useState } from "react";

type ArticleFormProps = {
    name: string;
    title: string;
    summary: string;
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeSummary: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onClickAdd: () => void;
};

const ArticleForm: React.FC<ArticleFormProps> = ({
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
}) => {
    const [error, setError] = useState<string | null>(null);

    const handleAddClick = () => {
        if (title.length < 3) {
            setError("Title must be at least 3 characters long.");
        } else {
            setError(null);
            onClickAdd();
        }
    };

    return (
        <section className="container mt-4">
            <div className="card p-4 shadow-sm">
                <h5 className="card-title mb-4">{ name }</h5>

                <div className="mb-3">
                    <input 
                        type="text"
                        className="form-control mb-3" 
                        placeholder="Title" 
                        value={ title } 
                        onChange={ onChangeTitle } 
                    />
                    
                    <textarea 
                        className="form-control mb-3" 
                        placeholder="Summary" 
                        value={ summary } 
                        onChange={ onChangeSummary } 
                        rows={ 5 } 
                    ></textarea>
                </div>

                {error && <div className="alert alert-danger mb-3">{ error }</div>}

                <button 
                    className="btn btn-primary w-100" 
                    onClick={ handleAddClick }
                    disabled={ title.length < 3 }
                >
                    Add
                </button>
            </div>
        </section>
    );
};

export default ArticleForm;
