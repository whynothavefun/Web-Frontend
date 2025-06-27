import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="p-4 text-center text-white">
      <h2 className="mb-4 text-2xl font-bold text-black">
        404 - Страница не найдена
      </h2>
      <p className="text-black">К сожалению, страница не существует.</p>
      <Link to="/tokens" className="text-blue-400 hover:underline">
        Вернуться к токенам
      </Link>
    </div>
  );
};

export default NotFound;
