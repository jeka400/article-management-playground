import * as React from "react";
import ArticleForm from './ArticleForm';
import ArticleList from './ArticleList';
import ArticleManager from './ArticleManager';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Article Management System</h1>
      <ArticleManager 
        addArticle={({ title, summary, onChangeTitle, onChangeSummary, onClickAdd }) => (
          <ArticleForm
            name="Add new article:"
            title={ title }
            summary={ summary }
            onChangeTitle={ onChangeTitle }
            onChangeSummary={ onChangeSummary }
            onClickAdd={ onClickAdd }
          />
        )}

        articleList={({ articles, onClickToggle, onClickRemove }) => (
          <ArticleList
            articles={ articles}
            onClickRemove={ onClickRemove }
            onClickToggle={ onClickToggle }
          />
        )}
      />
    </div>
  );
}

export default App;
