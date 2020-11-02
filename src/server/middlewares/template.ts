export default (view: string, scripts: string = '', styles: string = '') => `	
<!DOCTYPE html>	
  <html>	
    <head>	
      <meta name="viewport" content="width=device-width, initial-scale=1.0">	
      <title>NASA Projects</title>	
      ${styles}	
    </head>	
    <body style="margin:0">	
      <div id="root">${view}</div>	
      ${scripts}
    </body>	
  </html>`;
