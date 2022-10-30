import React from 'react';

const Link = ({className, href, children}) => {


  const onClick = event => {
   
    // This code is written for default behaviour of 
    // browser for command key + click and it opens in new tab
    // but it don't worked for me
    //
    // if(event.metakey || event.ctrlKey){
    //   return;
    // }
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent)
  }

  return (
    <div>
      <a onClick={onClick} className={className} href={href} children={children} ></a>
    </div>
  )
}

export default Link;