import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './breadcrumbs.css';

const AppBreadcrumbs = (props) => {

  let breadcrumbs = window.location.pathname.split("/")
  .map(uri => decodeURI(uri))
  .filter(str => str.length > 0);
  if (breadcrumbs.length === 0) return <> </>;
  breadcrumbs.unshift("Home");
  let capitalize = (str) => str[0].toUpperCase() + str.slice(- (str.length - 1));
  let jsxbreadcrumbs = [];
  let active = "a"
  let prev_links = 'http://localhost:3000'
  let append;
  for (let i = 0; i < breadcrumbs.length; ++i) {
    if (i === breadcrumbs.length - 1) {active = 'span'}
    if(i === 0) { append = '';} else {append = '/' + breadcrumbs[i];}
    jsxbreadcrumbs.push(
      <BreadcrumbItem key={i} tag={active} href={prev_links + append}>
        {capitalize(breadcrumbs[i])}
      </BreadcrumbItem>
    )
    prev_links += append;
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