import React, {FC} from 'react';

//CSS
import "./PageNotFound.css"

//Route

const PageNotFound: FC = () => {
  return (
    <div className='pageNotFound'>
        <a className='pageNotFoundRedirect' href="/">
            Back To Home Page
        </a>
    </div>
    );
};

export default PageNotFound;
