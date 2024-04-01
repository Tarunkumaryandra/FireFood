import React from 'react';
import { Link } from 'react-router-dom';
import { error404 } from '../../utils/constant';

const ErrorPage = () => {
  return (
    <section className="erropage" style={{ padding: '0px 0', background: '#fbfbfd', fontFamily: 'Arvo, serif' }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
            <div style={{ 
                    backgroundImage: `url(${error404})`,
                    height: '535px',
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', 
                    }}>
                <h1 style={{ fontSize: '80px', textAlign: 'center', color: '#000' }}>404</h1>
              </div>

              <div style={{ marginTop: '-80px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '40px', textAlign: 'center' }}>Look like you're lost</h3>
                <p style={{ textAlign: 'center' }}>The page you are looking for is not available!</p>, 
                <Link to="/" style={{ color: '#fff', padding: '10px 20px', background: '#39ac31', margin: '20px auto', display: 'inline-block', textAlign: 'center',borderRadius:'5px' }}>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
