//aca armar funcion para descargar pdf
//npm install html-to-image
//import htmlToImage from 'html-to-image';



//var doc = new jsPDF();


/*En este ejemplo, el componente TextImage recibe un prop text que contiene el 
texto que se va a convertir en imagen. Cuando se hace clic en el botón "Generate image",
 se llama a la función htmlToImage.toPng que toma como parámetro el elemento div que 
 contiene el texto (this.textRef.current) y devuelve una promesa que resuelve en la URL
  de la imagen generada. Finalmente, se muestra la imagen en el componente si la URL 
  está disponible en el estado.
 
Ten en cuenta que la generación de imágenes puede ser una tarea costosa en términos de 
recursos, por lo que es posible que desees considerar el uso de esta técnica sólo cuando 
sea necesario y no en cada renderizado del componente.*/

// class TextImage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textRef = React.createRef();
//     this.state = {
//       imageUrl: null,
//     };
//   }





// }







import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
 


 

const DescargarPDF = ({ transactions, nameParty }) => {
  const miDivRef = useRef(null);

  function handleClick() {
  
    toPng(miDivRef.current )
        .then(function (dataUrl) {
        
        // console.log("link de la imagen")
        // console.log(dataUrl)
        const link = document.createElement('a');
        link.download = 'mi-imagen.png';
        link.href = dataUrl;
        link.click();

      })
      .catch(function (error) {
        console.error('No se pudo generar la imagen', error);
      });


 
 
  }

  return (
    <div >
      <div ref={miDivRef} id="miDiv" className="divFactura" style={{ position: "relative", textAlign: 'center' }}>
        {/* <h1>Hola mundo</h1>
        <p>Este es un ejemplo de cómo usar html-to-image en React.js</p>

        {transactions.length > 0 ? (
                transactions.map((item) =>
                                <p>
                    <strong>{item.sender[0].toUpperCase() + item.sender.substring(1)}</strong>    le debe a   <strong>{item.receiver[0].toUpperCase() + item.receiver.substring(1)}</strong>   la cantidad de  $<strong>
                    {
                        item.difference ? (Number(item.difference.toFixed(2)) ):("")
                                        }
                    </strong></p>
                )
            ) : (
                <p>&nbsp;</p>
            )}
             */}







        <img className=" imgIconoDesc" src="https://phantom-marca.unidadeditorial.es/8ba7df9bad2805e1407d66ba7b4a6ae8/resize/1320/f/jpg/assets/multimedia/imagenes/2021/03/25/16166609108537.jpg" width="120px" style={{ display: 'inline-block' }} />

        <h3 className="h3SubtDesc">Reparto de Dinero</h3>




































































































        <p><strong>{nameParty.toUpperCase()}</strong></p>

        <p><em>10 de Marzo de 2023 20:50hs</em></p>




        <table style={{ width: '100%', textAlign: 'center' ,marginTop:'20px'  }}>
          <thead>
            <tr style={{ borderBottom: '2px solid black' }}>
              <th>Movimiento</th>
              <th>Deudor</th>
              <th>Gastó</th>
              <th>Le debe a</th>
              <th>La cantidad de</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>  example
              <td>1</td>
              <td>Agustin</td>
              <td>Lucas</td>
              <td>$300</td>
            </tr>  */}


            {transactions.length > 0 ? (
              transactions.map((item,indexDefault) =>
                <>
                <tr>
                  <td>{indexDefault+1}</td>
                  <td>{item.sender[0].toUpperCase() + item.sender.substring(1)}</td>
                  <td>{item.receiver[0].toUpperCase() + item.receiver.substring(1)}</td>
                  
                 
                  
                  <td>
                    {
                      item.difference ? "$" + (Number(item.difference.toFixed(2))) : ("$0")
                    }</td>
                </tr>
                </>
              )
            ) : (
              <p>&nbsp;</p>
            )}






          </tbody>

        </table>







        <p style={{ position: "absolute", textAlign: 'center', bottom: "20px", left: '0', right: '0' }}>
          {/* ,marginLeft: '285px' */}
          -Desarrollado por AC-
        </p>


      </div>
      <button onClick={handleClick}>Generar imagen</button>



    </div>

















  );
}




export default DescargarPDF;
































//ACA ME QUEDE NI SI QUIERA LO PROBE

//5/4/23
/*
hice esto
npm audit fix --force
para arreglar problemas de vulnerabilidades segun chat gpt



*/






/*
ME tiro todo esto: antes tenia 7 problemas, ahora 78 dejaaa
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
npm WARN using --force Recommended protections disabled.
npm WARN audit Updating react-scripts to 2.1.3,which is a SemVer major change.
npm WARN deprecated topo@2.0.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please 
upgrade to the latest version to get the best features, bug fixes, 
and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).   
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142   
npm WARN deprecated har-validator@5.1.5: this library is no longer 
supported
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated hoek@4.2.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please 
upgrade to the latest version to get the best features, bug fixes, 
and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).   
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()npm WARN deprecated eslint-loader@2.1.1: This loader has been deprecated. Please use eslint-webpack-plugin
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s). 
npm WARN deprecated acorn-dynamic-import@3.0.0: This is probably built in to whatever tool you're using. If you still need it... idk  
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead. 
npm WARN deprecated sane@2.5.2: some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated html-webpack-plugin@4.0.0-alpha.2: please switch to a stable version
npm WARN deprecated babel-eslint@9.0.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.        
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated uglify-es@3.3.9: support for ECMAScript is superseded by `uglify-js` as of v3.13.0
npm WARN deprecated joi@11.4.0: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please 
upgrade to the latest version to get the best features, bug fixes, 
and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).   
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade 
your dependencies to the actual version of core-js.
npm WARN deprecated core-js@2.6.4: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. 
Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

added 1029 packages, removed 563 packages, changed 376 packages, and audited 1953 packages in 6m

106 packages are looking for funding
  run `npm fund` for details

# npm audit report

ansi-html  <0.0.8
Severity: high
Uncontrolled Resource Consumption in ansi-html - https://github.com/advisories/GHSA-whgm-jr23-g3j9
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/ansi-html
  webpack-dev-server  2.0.0-beta - 4.7.2
  Depends on vulnerable versions of ansi-html
  Depends on vulnerable versions of chokidar
  Depends on vulnerable versions of selfsigned
  Depends on vulnerable versions of sockjs
  Depends on vulnerable versions of yargs
  node_modules/webpack-dev-server
    react-scripts  0.1.0 - 5.0.0-next.60
    Depends on vulnerable versions of @svgr/webpack
    Depends on vulnerable versions of babel-jest
    Depends on vulnerable versions of css-loader
    Depends on vulnerable versions of fork-ts-checker-webpack-plugin-alt
    Depends on vulnerable versions of jest
    Depends on vulnerable versions of optimize-css-assets-webpack-plugin
    Depends on vulnerable versions of react-dev-utils
    Depends on vulnerable versions of terser-webpack-plugin        
    Depends on vulnerable versions of webpack
    Depends on vulnerable versions of webpack-dev-server
    node_modules/react-scripts

braces  <=2.3.0
Regular Expression Denial of Service in braces - https://github.com/advisories/GHSA-g95f-p29q-9xw4
Regular Expression Denial of Service (ReDoS) in braces - https://github.com/advisories/GHSA-cwfw-4gq5-mrqx
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/jest-cli/node_modules/braces
node_modules/jest-config/node_modules/braces
node_modules/jest-haste-map/node_modules/braces
node_modules/jest-message-util/node_modules/braces
node_modules/jest-runtime/node_modules/braces
node_modules/test-exclude/node_modules/braces
  micromatch  0.2.0 - 2.3.11
  Depends on vulnerable versions of braces
  Depends on vulnerable versions of parse-glob
  node_modules/jest-cli/node_modules/micromatch
  node_modules/jest-config/node_modules/micromatch
  node_modules/jest-haste-map/node_modules/micromatch
  node_modules/jest-message-util/node_modules/micromatch
  node_modules/jest-runtime/node_modules/micromatch
  node_modules/test-exclude/node_modules/micromatch
    jest-cli  0.10.2 - 24.8.0
    Depends on vulnerable versions of jest-config
    Depends on vulnerable versions of jest-environment-jsdom       
    Depends on vulnerable versions of jest-haste-map
    Depends on vulnerable versions of jest-message-util
    Depends on vulnerable versions of jest-resolve-dependencies    
    Depends on vulnerable versions of jest-runner
    Depends on vulnerable versions of jest-runtime
    Depends on vulnerable versions of jest-snapshot
    Depends on vulnerable versions of jest-util
    Depends on vulnerable versions of micromatch
    Depends on vulnerable versions of node-notifier
    Depends on vulnerable versions of yargs
    node_modules/jest-cli
      jest  13.3.0-alpha.4eb0c908 - 23.6.0
      Depends on vulnerable versions of jest-cli
      node_modules/jest
    jest-config  12.1.1-alpha.2935e14d - 25.5.4
    Depends on vulnerable versions of babel-core
    Depends on vulnerable versions of babel-jest
    Depends on vulnerable versions of jest-environment-jsdom       
    Depends on vulnerable versions of jest-environment-node        
    Depends on vulnerable versions of jest-jasmine2
    Depends on vulnerable versions of jest-util
    Depends on vulnerable versions of micromatch
    node_modules/jest-config
      jest-runner  21.0.0-alpha.1 - 22.4.4 || 23.4.0 - 23.6.0      
      Depends on vulnerable versions of jest-config
      Depends on vulnerable versions of jest-haste-map
      Depends on vulnerable versions of jest-jasmine2
      Depends on vulnerable versions of jest-message-util
      Depends on vulnerable versions of jest-runtime
      Depends on vulnerable versions of jest-util
      node_modules/jest-runner
      jest-runtime  14.1.0 - 24.8.0
      Depends on vulnerable versions of babel-core
      Depends on vulnerable versions of babel-plugin-istanbul      
      Depends on vulnerable versions of jest-config
      Depends on vulnerable versions of jest-haste-map
      Depends on vulnerable versions of jest-message-util
      Depends on vulnerable versions of jest-snapshot
      Depends on vulnerable versions of jest-util
      Depends on vulnerable versions of micromatch
      Depends on vulnerable versions of yargs
      node_modules/jest-runtime
    jest-haste-map  16.1.0-alpha.691b0e22 - 24.0.0
    Depends on vulnerable versions of micromatch
    Depends on vulnerable versions of sane
    node_modules/jest-haste-map
    jest-message-util  18.5.0-alpha.7da3df39 - 23.1.0 || 23.4.0 - 24.0.0-alpha.16
    Depends on vulnerable versions of micromatch
    node_modules/jest-message-util
      expect  21.0.0-beta.1 - 22.4.3 || 23.4.0 - 23.6.0
      Depends on vulnerable versions of jest-message-util
      node_modules/expect
        jest-jasmine2  18.5.0-alpha.7da3df39 - 22.4.4 || 23.4.0 - 23.6.0
        Depends on vulnerable versions of expect
        Depends on vulnerable versions of jest-message-util        
        Depends on vulnerable versions of jest-snapshot
        Depends on vulnerable versions of jest-util
        node_modules/jest-jasmine2
      jest-snapshot  23.4.0 - 23.6.0
      Depends on vulnerable versions of jest-message-util
      node_modules/jest-snapshot
        jest-resolve-dependencies  23.4.0 - 23.6.0
        Depends on vulnerable versions of jest-snapshot
        node_modules/jest-resolve-dependencies
      jest-util  18.5.0-alpha.7da3df39 - 22.4.3 || 23.4.0
      Depends on vulnerable versions of jest-message-util
      node_modules/jest-util
        jest-environment-jsdom  10.0.2 - 25.5.0
        Depends on vulnerable versions of jest-util
        Depends on vulnerable versions of jsdom
        node_modules/jest-environment-jsdom
        jest-environment-node  18.5.0-alpha.7da3df39 - 22.4.3 || 23.4.0
        Depends on vulnerable versions of jest-util
        node_modules/jest-environment-node
    test-exclude  <=4.2.3
    Depends on vulnerable versions of micromatch
    node_modules/test-exclude
      babel-plugin-istanbul  <=5.0.0
      Depends on vulnerable versions of test-exclude
      node_modules/babel-plugin-istanbul
        babel-jest  14.2.0-alpha.ca8bfb6e - 24.0.0-alpha.16        
        Depends on vulnerable versions of babel-plugin-istanbul    
        node_modules/babel-jest

browserslist  4.0.0 - 4.16.4
Severity: moderate
Regular Expression Denial of Service in browserslist - https://github.com/advisories/GHSA-w8qv-6jwh-64r5
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/react-dev-utils/node_modules/browserslist
  react-dev-utils  0.4.0 - 12.0.0-next.60
  Depends on vulnerable versions of browserslist
  Depends on vulnerable versions of globby
  Depends on vulnerable versions of immer
  Depends on vulnerable versions of loader-utils
  Depends on vulnerable versions of recursive-readdir
  Depends on vulnerable versions of shell-quote
  node_modules/react-dev-utils

glob-parent  <5.1.2
Severity: high
glob-parent before 5.1.2 vulnerable to Regular Expression Denial of Service in enclosure regex - https://github.com/advisories/GHSA-ww39-953v-wcq6
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/glob-base/node_modules/glob-parent
node_modules/glob-parent
  chokidar  1.0.0-rc1 - 2.1.8
  Depends on vulnerable versions of glob-parent
  node_modules/chokidar
    fork-ts-checker-webpack-plugin-alt  *
    Depends on vulnerable versions of chokidar
    node_modules/fork-ts-checker-webpack-plugin-alt
    watchpack-chokidar2  *
    Depends on vulnerable versions of chokidar
    node_modules/watchpack-chokidar2
      watchpack  1.7.2 - 1.7.5
      Depends on vulnerable versions of watchpack-chokidar2        
      node_modules/watchpack
  fast-glob  <=2.2.7
  Depends on vulnerable versions of glob-parent
  node_modules/fast-glob
    globby  8.0.0 - 9.2.0
    Depends on vulnerable versions of fast-glob
    node_modules/globby
  glob-base  *
  Depends on vulnerable versions of glob-parent
  node_modules/glob-base
    parse-glob  >=2.1.0
    Depends on vulnerable versions of glob-base
    node_modules/parse-glob

immer  <=9.0.5
Severity: critical
Prototype Pollution in immer - https://github.com/advisories/GHSA-c36v-fmgq-m8hx
Prototype Pollution in immer - https://github.com/advisories/GHSA-33f9-j839-rf8h
Prototype Pollution in immer - https://github.com/advisories/GHSA-9qmh-276g-x5pj
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/immer

jsdom  <=16.5.3
Severity: moderate
Insufficient Granularity of Access Control in JSDom - https://github.com/advisories/GHSA-f4c9-cqv8-9v98
Depends on vulnerable versions of request
Depends on vulnerable versions of request-promise-native
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/jest-environment-jsdom/node_modules/jsdom

json5  <1.0.2
Severity: high
Prototype Pollution in JSON5 via Parse Method - https://github.com/advisories/GHSA-9c47-m6qq-7p4h
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/babel-register/node_modules/json5
node_modules/jest-config/node_modules/json5
node_modules/jest-runtime/node_modules/json5
  babel-core  5.8.20 - 7.0.0-beta.3
  Depends on vulnerable versions of babel-register
  Depends on vulnerable versions of json5
  node_modules/babel-register/node_modules/babel-core
  node_modules/jest-config/node_modules/babel-core
  node_modules/jest-runtime/node_modules/babel-core
    babel-register  *
    Depends on vulnerable versions of babel-core
    node_modules/babel-register

loader-utils  <=1.4.1
Severity: critical
Prototype pollution in webpack loader-utils - https://github.com/advisories/GHSA-76p3-8jx3-jpfq
loader-utils is vulnerable to Regular Expression Denial of Service 
(ReDoS) - https://github.com/advisories/GHSA-hhq3-ff78-jv3g        
loader-utils is vulnerable to Regular Expression Denial of Service 
(ReDoS) via url variable - https://github.com/advisories/GHSA-3rfm-jhwj-7488
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/react-dev-utils/node_modules/loader-utils

merge  <2.1.1
Severity: high
Prototype Pollution in merge - https://github.com/advisories/GHSA-7wpw-2hjm-89gp
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/merge
  exec-sh  <=0.3.1
  Depends on vulnerable versions of merge
  node_modules/exec-sh
    sane  1.0.4 - 4.0.2
    Depends on vulnerable versions of exec-sh
    Depends on vulnerable versions of watch
    node_modules/sane
    watch  >=0.14.0
    Depends on vulnerable versions of exec-sh
    node_modules/watch

minimatch  <3.0.5
Severity: high
minimatch ReDoS vulnerability - https://github.com/advisories/GHSA-f8q6-p94x-37v3
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/recursive-readdir/node_modules/minimatch
  recursive-readdir  1.2.0 - 2.2.2
  Depends on vulnerable versions of minimatch
  node_modules/recursive-readdir

node-forge  <=1.2.1
Severity: high
Prototype Pollution in node-forge debug API. - https://github.com/advisories/GHSA-5rrq-pxf6-6jx5
URL parsing in node-forge could lead to undesired behavior. - https://github.com/advisories/GHSA-gf8q-jrpm-jvxq
Improper Verification of Cryptographic Signature in `node-forge` - 
https://github.com/advisories/GHSA-2r2c-g63r-vccr
Open Redirect in node-forge - https://github.com/advisories/GHSA-8fr3-hfg3-gpgp
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-cfm4-qjh2-4765
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-x4jg-mjrx-434g
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/node-forge
  selfsigned  1.1.1 - 1.10.14
  Depends on vulnerable versions of node-forge
  node_modules/selfsigned

node-notifier  <8.0.1
Severity: moderate
OS Command Injection in node-notifier - https://github.com/advisories/GHSA-5fw9-fq32-wv5p
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/node-notifier

nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/svgo/node_modules/nth-check
  css-select  <=3.1.0
  Depends on vulnerable versions of nth-check
  node_modules/svgo/node_modules/css-select
    svgo  1.0.0 - 1.3.2
    Depends on vulnerable versions of css-select
    node_modules/svgo
      @svgr/core  <=3.1.0
      Depends on vulnerable versions of svgo
      node_modules/@svgr/core
        @svgr/webpack  <=3.1.0
        Depends on vulnerable versions of @svgr/core
        node_modules/@svgr/webpack
      postcss-svgo  4.0.0-nightly.2020.1.9 - 5.0.0-rc.2
      Depends on vulnerable versions of svgo
      node_modules/postcss-svgo
        cssnano-preset-default  <=4.0.8
        Depends on vulnerable versions of postcss-svgo
        node_modules/cssnano-preset-default
          cssnano  4.0.0-nightly.2020.1.9 - 4.1.11
          Depends on vulnerable versions of cssnano-preset-default 
          node_modules/cssnano
            optimize-css-assets-webpack-plugin  3.2.1 || 5.0.0 - 5.0.8
            Depends on vulnerable versions of cssnano
            node_modules/optimize-css-assets-webpack-plugin        

postcss  <7.0.36
Severity: moderate
Regular Expression Denial of Service in postcss - https://github.com/advisories/GHSA-566m-qj78-rww5
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/postcss
  css-loader  0.15.0 - 1.0.1
  Depends on vulnerable versions of icss-utils
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of postcss-modules-extract-imports  Depends on vulnerable versions of postcss-modules-local-by-default
  Depends on vulnerable versions of postcss-modules-scope
  Depends on vulnerable versions of postcss-modules-values
  node_modules/css-loader
  icss-utils  <=3.0.1
  Depends on vulnerable versions of postcss
  node_modules/icss-utils
  postcss-modules-extract-imports  <=1.2.1
  Depends on vulnerable versions of postcss
  node_modules/postcss-modules-extract-imports
  postcss-modules-local-by-default  <=1.2.0
  Depends on vulnerable versions of postcss
  node_modules/postcss-modules-local-by-default
  postcss-modules-scope  <=1.1.0
  Depends on vulnerable versions of postcss
  node_modules/postcss-modules-scope
  postcss-modules-values  <=1.3.0
  Depends on vulnerable versions of postcss
  node_modules/postcss-modules-values


request  *
Severity: moderate
Server-Side Request Forgery in Request - https://github.com/advisories/GHSA-p8p7-x288-28g6
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/request
  request-promise-core  *
  Depends on vulnerable versions of request
  node_modules/request-promise-core
    request-promise-native  >=1.0.0
    Depends on vulnerable versions of request
    Depends on vulnerable versions of request-promise-core
    node_modules/request-promise-native

serialize-javascript  <=3.0.0
Severity: high
Cross-Site Scripting in serialize-javascript - https://github.com/advisories/GHSA-h9rv-jmmf-4pgx
Insecure serialization leading to RCE in serialize-javascript - https://github.com/advisories/GHSA-hxcc-f52p-wc94
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/serialize-javascript
  terser-webpack-plugin  <=1.4.3 || 2.0.0 - 2.3.5
  Depends on vulnerable versions of serialize-javascript
  Depends on vulnerable versions of terser
  node_modules/terser-webpack-plugin
  uglifyjs-webpack-plugin  >=1.1.3
  Depends on vulnerable versions of cacache
  Depends on vulnerable versions of serialize-javascript
  node_modules/uglifyjs-webpack-plugin
    webpack  4.3.0 - 4.25.1
    Depends on vulnerable versions of uglifyjs-webpack-plugin      
    node_modules/webpack

shell-quote  <=1.7.2
Severity: critical
Improper Neutralization of Special Elements used in a Command in Shell-quote - https://github.com/advisories/GHSA-g4rg-993r-mgx7      
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/shell-quote

sockjs  <0.3.20
Severity: moderate
Improper Input Validation in SocksJS-Node - https://github.com/advisories/GHSA-c9g6-9335-x697
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/sockjs

ssri  5.2.2 - 6.0.1
Severity: high
Regular Expression Denial of Service (ReDoS) - https://github.com/advisories/GHSA-vx3p-948g-6vhq
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/uglifyjs-webpack-plugin/node_modules/ssri
  cacache  10.0.4 - 11.0.0
  Depends on vulnerable versions of ssri
  node_modules/uglifyjs-webpack-plugin/node_modules/cacache        

terser  <4.8.1
Severity: high
Terser insecure use of regular expressions leads to ReDoS - https://github.com/advisories/GHSA-4wf5-vphf-c2xc
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/terser

yargs-parser  6.0.0 - 13.1.1
Severity: moderate
yargs-parser Vulnerable to Prototype Pollution - https://github.com/advisories/GHSA-p9pc-299p-vxgp
fix available via `npm audit fix --force`
Will install react-scripts@5.0.1, which is a breaking change       
node_modules/webpack-dev-server/node_modules/yargs-parser
node_modules/yargs-parser
  yargs  8.0.0-candidate.0 - 12.0.5
  Depends on vulnerable versions of yargs-parser
  node_modules/webpack-dev-server/node_modules/yargs
  node_modules/yargs

78 vulnerabilities (13 low, 19 moderate, 42 high, 4 critical)      

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force







  PROIBE TIRANDO DE NUEVO NPM AUDIT Y AHORA TENGO 42 HIGH, QSY NO ENTIENDO NADA, GOOGLEAR
  
*/ 