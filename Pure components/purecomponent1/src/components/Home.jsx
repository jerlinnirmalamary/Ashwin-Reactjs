import React, { memo } from 'react';

 function Home() {
    console.log(' Child Render.....');
  return (
    <div>
        <p>Home</p>

    </div>
    
  )
}

export default memo(Home);
