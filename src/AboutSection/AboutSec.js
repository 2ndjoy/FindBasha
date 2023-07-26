import React from "react";
import ContactForm from "./Contact";

const AboutSec = () => {
  return (
    <div className="d-grid justify-content-center gap-5 my-5">
      <div className="text-center">
        <h1 className="my-3">Get in Touch</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br /> accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae
          <br /> ab illo inventore veritatis et quasi architecto beatae vitae
          dicta
          <br /> sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          <br /> aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos
          <br /> qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui
          <br /> dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>
      </div>
      <hr />
      <div className="p-lg-5">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default AboutSec;
