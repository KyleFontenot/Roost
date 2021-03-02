import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script
  dangerouslySetInnerHTML={{
    __html: `


    const showElementsCutoff = window.innerHeight * 0.7;
    const containerLevits = document.getElementsByClassName('block');
    let domOffsets = [];
    window.setTimeout(() => {
      for (let i = 0;i < containerLevits.length; i++){
        domOffsets.push(containerLevits[i].offsetTop);
      }
    },1);

    window.addEventListener("scroll", function scrollBehavior() {
      let tick = window.scrollY;
          for (let j = 0; j < domOffsets.length; j++) {

            if (tick >= domOffsets[j] - showElementsCutoff){
              containerLevits[j].classList.remove('hide');
            }
            else if (tick < domOffsets[j] - 50){
              containerLevits[j].classList.add('hide');
            }
            else if (tick + showElementsCutoff < domOffsets[j] - 50){
              containerLevits[j].classList.add('hide');
            }
          }
    });


`
  }}
/>
      </body>


    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
