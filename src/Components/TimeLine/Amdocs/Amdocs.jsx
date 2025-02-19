import "./amdocs.css";
import amdocs1 from "../../../../public/amdocs/amdocs1.png";
import Image from "next/image";

const Amdocs = () => {
  return (
    <section className="amdocs">
      <h2>Backend Software Developer, Amdocs, Full-time</h2>
      {/* <p>
        I worked as a backend software developer at Amdocs, a global leader in
        digital communications and media solutions.
      </p>
      <br /> */}
      <p>
        I was part of the core E-Commerce department, our team maintained the
        Order Capture system which is responsible for the back end process from
        the cart creation to the order submission.
      </p>
      <br />
      <p>
        In addition to my role in Order Capture, I was also assigned as the
        maintenance focal point of the Order Handle department, this departement
        handles the flows of fullfilling the order after it is submitted.
      </p>
      <br />
      <p>
        During this period i gained expertise in Micro-services Architecture and
        Java Spring Framework.
      </p>
      <Image src={amdocs1} alt="Amdocs Office" />
    </section>
  );
};

export default Amdocs;
