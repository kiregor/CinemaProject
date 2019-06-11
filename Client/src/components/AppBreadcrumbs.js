import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const AppBreadcrumbs = (props) => {

  let breadcrumbs = window.location.pathname.split("/").filter(str => str.length > 0);
  let jsxbreadcrumbs = [];
  if (breadcrumbs.length === 0) return <> </>;
  let active = "a"
  let prev_links = 'http://localhost:3000/'
  for (let i = 0; i < breadcrumbs.length; ++i) {
    if (i === breadcrumbs.length - 1) {
      active = 'span'
    }
    jsxbreadcrumbs.push(
      <BreadcrumbItem key={i} tag={active} href={prev_links + breadcrumbs[i]}>
        {breadcrumbs[i]}
      </BreadcrumbItem>
    )
    prev_links += breadcrumbs[i] + '/';
  }
  return (
    <div className='AppBreadCrumbs'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Breadcrumb id='bcrumb'>
              {jsxbreadcrumbs}
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>

  )
};

export default AppBreadcrumbs;