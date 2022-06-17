import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ErrorMsg from "../errorMsg/ErrorMsg";

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="404 page"/>
        <title>404 Error</title>
      </Helmet>
      <ErrorMsg/>
      <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
      <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/marvel-app/">Back to main page</Link>
    </div>
  )
}

export default Page404;