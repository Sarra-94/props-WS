import React from "react";

function Suggestion() {
  let list = [
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
  ];
  return (
    <div>
      <h3>Suggestion</h3>
      {list.map((el,i) => (
        <div key={i}>
          <iframe title={el.title+i} src={el.src}></iframe>
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Suggestion;
