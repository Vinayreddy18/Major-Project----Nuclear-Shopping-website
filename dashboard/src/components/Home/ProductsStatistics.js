import React from 'react';

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe
            style={{
              background: '#21313C',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2);',
              width: '640',
              height: '480',
            }}
            title="charts"
            src="https://charts.mongodb.com/charts-ecommerce-ifbog/embed/charts?id=63adf8a6-b222-48ad-8c06-6652df0cad6d&maxDataAge=3600&theme=dark&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
